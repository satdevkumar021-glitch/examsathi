"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  NotebookPen,
  Bookmark,
  ClipboardCheck,
  Keyboard,
  Settings,
  ChevronRight,
  ArrowLeft,
  Check,
  Search,
  Volume2,
  Plus,
  LogOut,
  Menu,
  X,
  Download,
  PlayCircle,
  FileText,
  Sun,
  Moon,
  Star,
  Clock,
  Activity,
  Play,
  Pause,
  RotateCcw,
  VolumeX,
} from "lucide-react";
import catalog from "../content/catalog.json";
import bundled from "../content/lessons.json";
import syllabus from "../content/syllabus.json";
import type { Lesson, Lang, Text3, Question } from "../lib/types";
type State = {
  notes: Record<string, string>;
  done: string[];
  favorites: string[];
  attempts: { id: string; at: number; total: number; correct: number }[];
};
const empty: State = { notes: {}, done: [], favorites: [], attempts: [] };
const text = (hi: string, pa: string, en: string): Text3 => ({ hi, pa, en });
const labels = {
  home: text("मेरी तैयारी", "ਮੇਰੀ ਤਿਆਰੀ", "My preparation"),
  library: text("पाठ और सिलेबस", "ਪਾਠ ਅਤੇ ਸਿਲੇਬਸ", "Lessons & syllabus"),
  practice: text("प्रश्न अभ्यास", "ਸਵਾਲ ਅਭਿਆਸ", "Question practice"),
  notes: text("मेरे नोट्स", "ਮੇਰੇ ਨੋਟਸ", "My notes"),
  saved: text("सेव किए स्रोत", "ਸੇਵ ਕੀਤੇ ਸਰੋਤ", "Saved resources"),
  typing: text("टाइपिंग अभ्यास", "ਟਾਈਪਿੰਗ ਅਭਿਆਸ", "Typing practice"),
  focus: text("लाइब्रेरी फोकस व ध्यान", "ਲਾਇਬ੍ਰੇਰੀ ਫੋਕਸ ਤੇ ਧਿਆਨ", "Library Focus & Calm"),
  physical: text("शारीरिक परीक्षा तैयारी", "ਸਰੀਰਕ ਪ੍ਰੀਖਿਆ ਤਿਆਰੀ", "Physical Readiness"),
  admin: text("शिक्षक स्टूडियो", "ਅਧਿਆਪਕ ਸਟੂਡੀਓ", "Teacher studio"),
  account: text("मेरा अकाउंट", "ਮੇਰਾ ਅਕਾਊਂਟ", "My account"),
  read: text("पढ़ें", "ਪੜ੍ਹੋ", "Read"),
  flash: text("याद करें", "ਯਾਦ ਕਰੋ", "Recall"),
  test: text("अभ्यास करें", "ਅਭਿਆਸ ਕਰੋ", "Practice"),
  sources: text(
    "वीडियो और दस्तावेज़",
    "ਵੀਡੀਓ ਅਤੇ ਦਸਤਾਵੇਜ਼",
    "Videos & documents",
  ),
};
const initialLesson = (): Lesson => ({
  id: "new-lesson",
  subject: "SST",
  unit: "History",
  title: text("", "", ""),
  sections: [
    { heading: text("", "", ""), text: text("", "", "") },
    { heading: text("", "", ""), text: text("", "", "") },
  ],
  keypoints: [text("", "", "")],
  summary: text("", "", ""),
  flashcards: [],
  questions: [],
  sources: [{ title: "", url: "" }],
  videos: [],
  documents: [],
});
function youtube(url: string) {
  try {
    const u = new URL(url);
    const id =
      u.hostname === "youtu.be"
        ? u.pathname.slice(1)
        : u.hostname.endsWith("youtube.com")
          ? u.searchParams.get("v") || u.pathname.split("/").pop()
          : null;
    return id && /^[\w-]{11}$/.test(id)
      ? `https://www.youtube-nocookie.com/embed/${id}`
      : null;
  } catch {
    return null;
  }
}
function shuffleItems<T>(items: T[]): T[] {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
function getGraphemes(str: string): string[] {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
    return Array.from(segmenter.segment(str), (s) => s.segment);
  }
  return Array.from(str);
}
type AppUser = import("./chatgpt-auth").ChatGPTUser & { role?: string };
type Revision = {
  id: string;
  lessonId: string;
  authorId: string;
  title: string;
  payload: string;
  status: string;
  reviewerId?: string | null;
  createdAt: number;
  updatedAt: number;
};
type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};
export default function StudyApp({
  identity,
  signInPath,
  signOutPath,
}: {
  identity: import("./chatgpt-auth").ChatGPTUser | null;
  signInPath: string;
  signOutPath: string;
}) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("saathi-language");
      if (saved && ["hi", "pa", "en"].includes(saved)) return saved as Lang;
    }
    return "hi";
  });
  const [view, setView] = useState("home");
  const [menu, setMenu] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("saathi-theme");
      if (saved === "light" || saved === "dark") return saved;
    }
    return "light";
  });
  const [font, setFont] = useState(18);
  const [user, setUser] = useState<AppUser | null>(identity as AppUser | null);
  const [state, setState] = useState<State>(() => {
    if (typeof window !== "undefined" && !identity) {
      try {
        const guestRaw = localStorage.getItem("saathi-guest-state");
        if (guestRaw) return { ...empty, ...JSON.parse(guestRaw) };
      } catch {}
    }
    return empty;
  });
  const [lessons, setLessons] = useState<Lesson[]>(bundled as Lesson[]);
  const [roadmap, setRoadmap] = useState<typeof syllabus>(syllabus);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [loaded, setLoaded] = useState(() => !identity);
  const [region, setRegion] = useState("Punjab");
  const [domain, setDomain] = useState("All");
  const [search, setSearch] = useState("");
  const [examId, setExamId] = useState("master");
  const [subject, setSubject] = useState("SST");
  const [lessonId, setLessonId] = useState("");
  const [tab, setTab] = useState("read");
  const [noteDrafts, setNoteDrafts] = useState<Record<string, string>>({});
  const [cardIndex, setCardIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [practiceLesson, setPracticeLesson] = useState("all");
  const [practiceCount, setPracticeCount] = useState(20);
  const [quiz, setQuiz] = useState<{
    items: { lessonId: string; q: Question }[];
    answers: Record<string, number>;
    finished: boolean;
  } | null>(null);
  const [revisions, setRevisions] = useState<Revision[]>([]);
  const [grants, setGrants] = useState<{ email: string; role: string }[]>([]);
  const [editor, setEditor] = useState<Lesson | null>(null);
  const [revisionId, setRevisionId] = useState<string | undefined>();
  const [editLang, setEditLang] = useState<Lang>("hi");
  const [typed, setTyped] = useState("");
  const [typeLevel, setTypeLevel] = useState("easy");
  const [typeStarted, setTypeStarted] = useState<number | null>(null);
  const [clock, setClock] = useState(0);
  const [speaking, setSpeaking] = useState(false);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showMistakesOnly, setShowMistakesOnly] = useState(false);

  // Focus Room State
  const [focusMode, setFocusMode] = useState<"pomodoro" | "deep" | "breathe">("pomodoro");
  const [focusSecs, setFocusSecs] = useState(25 * 60);
  const [focusActive, setFocusActive] = useState(false);
  const [focusPhase, setFocusPhase] = useState<"work" | "break">("work");
  const [wakeLockActive, setWakeLockActive] = useState(false);
  const [ambientAudio, setAmbientAudio] = useState<"none" | "brown" | "tone">("none");
  const [breathePhase, setBreathePhase] = useState(0);
  const [breatheSecs, setBreatheSecs] = useState(4);
  const [breatheCycles, setBreatheCycles] = useState(0);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const audioSourceRef = useRef<{ stop: () => void } | null>(null);
  const wakeLockSentinelRef = useRef<{ release: () => Promise<void> } | null>(null);

  // Physical Readiness State
  const [physGender, setPhysGender] = useState<"male" | "female">("male");
  const [physHeight, setPhysHeight] = useState(172);
  const [physPost, setPhysPost] = useState<"constable" | "si">("constable");
  const [physRunMins, setPhysRunMins] = useState(6);
  const [physRunSecs, setPhysRunSecs] = useState(15);
  const [physLongJump, setPhysLongJump] = useState(3.85);
  const [physHighJump, setPhysHighJump] = useState(1.20);
  const [physTab, setPhysTab] = useState<"calculator" | "roadmap" | "standards">("calculator");
  const tr = (a: Text3 | string) =>
      typeof a === "string" ? a : a[lang] || a.en,
    lab = (k: keyof typeof labels) => tr(labels[k]);
  const selectedExam =
      catalog.exams.find((e) => e.id === examId) || catalog.exams[0],
    lesson = lessons.find((l) => l.id === lessonId);
  const go = (v: string, id?: string) => {
    setView(v);
    if (id) setLessonId(id);
    window.history.pushState(
      null,
      "",
      "#" +
        (v === "lesson"
          ? "lesson/" + examId + "/" + encodeURIComponent(subject) + "/" + id
          : v),
    );
    setMenu(false);
    setTab("read");
    setRevealed(false);
    setCardIndex(0);
    setQuiz(null);
    setError("");
    window.scrollTo(0, 0);
  };
  const request = async <T = unknown>(path: string, body?: unknown): Promise<T> => {
    const r = await fetch(
      path,
      body
        ? {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          }
        : undefined,
    );
    const d = (await r.json()) as { error?: string } & T;
    if (!r.ok) throw Error(d.error || "Request failed");
    return d as T;
  };
  const save = async (b: Record<string, unknown>) => {
    if (!user) {
      try {
        const guest: State = { ...state };
        if (b.action === "note" && typeof b.lessonId === "string" && typeof b.text === "string") {
          guest.notes = { ...guest.notes, [b.lessonId]: b.text };
        } else if (b.action === "done" && typeof b.lessonId === "string") {
          guest.done = [...new Set([...guest.done, b.lessonId])];
        } else if (b.action === "favorite" && typeof b.id === "string") {
          guest.favorites = b.enabled
            ? [...new Set([...guest.favorites, b.id])]
            : guest.favorites.filter((x) => x !== b.id);
        } else if (b.action === "attempt" && Array.isArray(b.answers)) {
          const correct = typeof b.correct === "number" ? b.correct : 0;
          guest.attempts = [
            { id: crypto.randomUUID(), at: Date.now(), total: b.answers.length, correct },
            ...(guest.attempts || []),
          ].slice(0, 100);
        }
        setState(guest);
        localStorage.setItem("saathi-guest-state", JSON.stringify(guest));
        setStatus(
          tr(
            text(
              "इस डिवाइस पर सेव हुआ (सभी डिवाइस में सिंक के लिए साइन इन करें)",
              "ਇਸ ਡਿਵਾਈਸ 'ਤੇ ਸੇਵ ਹੋਇਆ (ਸਾਰੇ ਡਿਵਾਈਸਾਂ ਵਿੱਚ ਸਿੰਕ ਲਈ ਸਾਈਨ ਇਨ ਕਰੋ)",
              "Saved on this device (Sign in to sync across devices)",
            ),
          ),
        );
        setTimeout(() => setStatus(""), 3500);
      } catch {
        setError(tr(text("ਸੇਵ ਨਹੀਂ ਹੋ ਸਕਿਆ", "ਸੇਵ ਨਹੀਂ ਹੋ ਸਕਿਆ", "Could not save locally")));
      }
      return;
    }
    setBusy(true);
    setError("");
    try {
      const d = await request<{ state: State }>("/api/state", b);
      setState(d.state);
      const msg = tr(
        text("आपके अकाउंट में सेव हुआ", "ਤੁਹਾਡੇ ਅਕਾਊਂਟ ਵਿੱਚ ਸੇਵ ਹੋਇਆ", "Saved to your account"),
      );
      setStatus(msg);
      setTimeout(() => setStatus(""), 3000);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  };
  const favorite = (id: string) =>
    save({ action: "favorite", id, enabled: !state.favorites.includes(id) });
  useEffect(() => {
    applyHash(decodeURIComponent(location.hash.slice(1)).split("/"));
    request<{ lessons: Lesson[]; syllabus: typeof syllabus }>("/api/content")
      .then((c) => {
        setLessons(c.lessons);
        setRoadmap(c.syllabus);
      })
      .catch(() => {});
    if (identity) {
      request<{ user: import("./chatgpt-auth").ChatGPTUser; state: State }>("/api/state")
        .then((s) => {
          setUser(s.user);
          const merged: State = { ...empty, ...s.state };
          try {
            const guestRaw = localStorage.getItem("saathi-guest-state");
            if (guestRaw) {
              const guest = JSON.parse(guestRaw) as Partial<State>;
              if (guest.notes) merged.notes = { ...guest.notes, ...merged.notes };
              if (guest.done) merged.done = [...new Set([...(merged.done || []), ...guest.done])];
              if (guest.favorites) merged.favorites = [...new Set([...(merged.favorites || []), ...guest.favorites])];
              localStorage.removeItem("saathi-guest-state");
              request("/api/state", { action: "import", notes: merged.notes, done: merged.done }).catch(() => {});
            }
          } catch {}
          setState(merged);
          setLoaded(true);
        })
        .catch((e) => {
          setError(e.message);
          setLoaded(true);
        });
    }
    const install = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as unknown as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", install);
    if ("serviceWorker" in navigator)
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    return () => {
      window.removeEventListener("beforeinstallprompt", install);
    };
  }, [identity]);
  // Shared hash parser — used by both mount and popstate (fixes B-4)
  function applyHash(h: string[]) {
    if (h[0] === "lesson") {
      setExamId(h[1] || "master");
      setSubject(h[2] || "SST");
      setLessonId(h[3]);
      setView("lesson");
    } else if (h[0] === "subject") {
      setExamId(h[1] || "master");
      setSubject(h[2] || "SST");
      setView("library");
    } else if (
      ["home","library","exam","practice","typing","focus","physical","notes","saved","resources","account","admin"].includes(h[0])
    )
      setView(h[0] === "resources" ? "saved" : h[0]);
    else if (h[0]) setView("home");
    setQuiz(null);
  }
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("saathi-language", lang);
  }, [lang, theme]);
  useEffect(() => {
    const sync = () =>
      applyHash(decodeURIComponent(location.hash.slice(1)).split("/"));
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);

  // Ambient Focus Audio via Web Audio API (100% offline, pure browser synthesis)
  useEffect(() => {
    if (ambientAudio === "none") {
      if (audioSourceRef.current) {
        try { audioSourceRef.current.stop(); } catch {}
        audioSourceRef.current = null;
      }
      return;
    }
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioCtxRef.current || audioCtxRef.current.state === "closed") {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }
      if (audioSourceRef.current) {
        try { audioSourceRef.current.stop(); } catch {}
        audioSourceRef.current = null;
      }
      if (ambientAudio === "brown") {
        const bufferSize = ctx.sampleRate * 2;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        let lastOut = 0.0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          data[i] = (lastOut + 0.02 * white) / 1.02;
          lastOut = data[i];
          data[i] *= 3.0;
        }
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        source.loop = true;
        const gain = ctx.createGain();
        gain.gain.value = 0.08;
        source.connect(gain);
        gain.connect(ctx.destination);
        source.start();
        audioSourceRef.current = source;
      } else if (ambientAudio === "tone") {
        const osc = ctx.createOscillator();
        osc.type = "sine";
        osc.frequency.setValueAtTime(432, ctx.currentTime);
        const gain = ctx.createGain();
        gain.gain.value = 0.04;
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        audioSourceRef.current = osc;
      }
    } catch {}
    return () => {
      if (audioSourceRef.current) {
        try { audioSourceRef.current.stop(); } catch {}
        audioSourceRef.current = null;
      }
    };
  }, [ambientAudio]);

  // Screen Wake Lock Handler
  const toggleWakeLock = async () => {
    if (wakeLockActive) {
      if (wakeLockSentinelRef.current) {
        await wakeLockSentinelRef.current.release().catch(() => {});
        wakeLockSentinelRef.current = null;
      }
      setWakeLockActive(false);
    } else {
      try {
        if ("wakeLock" in navigator) {
          const sentinel = await (navigator as unknown as { wakeLock: { request: (type: string) => Promise<{ release: () => Promise<void> }> } }).wakeLock.request("screen");
          wakeLockSentinelRef.current = sentinel;
          setWakeLockActive(true);
        } else {
          setStatus(tr(text("आपके ब्राउज़र में वेकलॉक समर्थित नहीं है", "ਤੁਹਾਡੇ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਵੇਕਲਾਕ ਸਹਿਯੋਗੀ ਨਹੀਂ", "Wake Lock not supported on this browser")));
        }
      } catch {
        setWakeLockActive(false);
      }
    }
  };

  // Focus Timer Tick
  useEffect(() => {
    if (!focusActive || focusMode === "breathe") return;
    const interval = setInterval(() => {
      setFocusSecs((prev) => {
        if (prev <= 1) {
          if (focusPhase === "work") {
            setFocusPhase("break");
            return focusMode === "pomodoro" ? 5 * 60 : 10 * 60;
          } else {
            setFocusPhase("work");
            return focusMode === "pomodoro" ? 25 * 60 : 50 * 60;
          }
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [focusActive, focusMode, focusPhase]);

  // Box Breathing Tick (4-4-4-4)
  useEffect(() => {
    if (focusMode !== "breathe" || !focusActive) return;
    const interval = setInterval(() => {
      setBreatheSecs((s) => {
        if (s <= 1) {
          setBreathePhase((p) => {
            const nextP = (p + 1) % 4;
            if (nextP === 0) setBreatheCycles((c) => c + 1);
            return nextP;
          });
          return 4;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [focusMode, focusActive]);
  useEffect(() => {
    const context = (document as unknown as { modelContext?: { registerTool?: (tool: unknown, opts: { signal: AbortSignal }) => unknown } }).modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    const register = (tool: unknown) => {
      try {
        Promise.resolve(
          context.registerTool!(tool, { signal: lifecycle.signal }),
        ).catch(() => {});
      } catch {}
    };
    register({
      name: "list_study_lessons",
      description:
        "List published lesson IDs and titles available in this study app.",
      inputSchema: {
        type: "object",
        properties: {},
        additionalProperties: false,
      },
      annotations: { readOnlyHint: true, untrustedContentHint: true },
      execute: () =>
        lessons.map((l) => ({
          id: l.id,
          title: l.title,
          subject: l.subject,
          questions: l.questions.length,
        })),
    });
    register({
      name: "open_study_lesson",
      description:
        "Navigate to a published lesson in a chosen reading language. Does not mark read or save notes.",
      inputSchema: {
        type: "object",
        properties: {
          lessonId: { type: "string" },
          language: { enum: ["hi", "pa", "en"] },
        },
        required: ["lessonId", "language"],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: false, untrustedContentHint: true },
      async execute(input: { lessonId?: string; language?: string }) {
        if (!input || !["hi", "pa", "en"].includes(input.language || ""))
          throw Error("Valid reading language required");
        const l = lessons.find((l) => l.id === input.lessonId);
        if (!l) throw Error("Published lesson not found");
        setSubject(l.subject);
        setLang(input.language as Lang);
        setLessonId(l.id);
        setExamId("master");
        setView("lesson");
        setTab("read");
        setQuiz(null);
        setCardIndex(0);
        setRevealed(false);
        window.history.pushState(
          null,
          "",
          "#lesson/master/" + encodeURIComponent(l.subject) + "/" + l.id,
        );
        await new Promise<void>((resolve) =>
          requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
        );
        return { opened: l.id, language: input.language };
      },
    });
    return () => lifecycle.abort();
  }, [lessons]);
  useEffect(() => {
    const pageTitle = lesson
      ? (typeof lesson.title === "string" ? lesson.title : lesson.title[lang] || lesson.title.en)
      : (labels[view in labels ? (view as keyof typeof labels) : "home"][lang] || labels[view in labels ? (view as keyof typeof labels) : "home"].en);
    document.title = `${pageTitle} | Exam Saathi`;
  }, [lesson, view, lang]);
  const related = useMemo(
    () => lessons.filter((l) => l.subject === subject),
    [lessons, subject],
  );
  const activeSyllabus = useMemo<{
    exam?: string;
    version?: string;
    officialSource?: string;
    conflationGuard?: string;
    hierarchy?: Record<string, unknown>;
  } | null>(() => {
    const reg = (roadmap as unknown as {
      registry?: Record<string, {
        exam?: string;
        version?: string;
        officialSource?: string;
        conflationGuard?: string;
        hierarchy?: Record<string, unknown>;
      }>;
    }).registry;
    if (reg && reg[examId]) return reg[examId];
    return roadmap as unknown as {
      exam?: string;
      version?: string;
      officialSource?: string;
      conflationGuard?: string;
      hierarchy?: Record<string, unknown>;
    };
  }, [roadmap, examId]);
  const practiceSubject = subject || "SST";
  const qBank = useMemo(
    () =>
      lessons
        .filter((l) =>
          practiceLesson === "all" ? l.subject === practiceSubject : l.id === practiceLesson,
        )
        .flatMap((l) => l.questions.map((q) => ({ lessonId: l.id, q }))),
    [lessons, practiceLesson, practiceSubject],
  );
  const cardBank = useMemo(
    () =>
      view === "lesson" && lesson
        ? lesson.flashcards
        : lessons
            .filter((l) =>
              practiceLesson === "all"
                ? l.subject === practiceSubject
                : l.id === practiceLesson,
            )
            .flatMap((l) => l.flashcards),
    [view, lesson, lessons, practiceLesson, practiceSubject],
  );
  const startQuiz = (items: { lessonId: string; q: Question }[]) => {
    const shuffled = shuffleItems(items);
    setShowMistakesOnly(false);
    setQuiz({
      items: shuffled.slice(0, practiceCount),
      answers: {},
      finished: false,
    });
    setTab("test");
  };
  const loadAdmin = async () => {
    setBusy(true);
    try {
      const d = await request<{
        revisions: Revision[];
        grants: { email: string; role: string }[];
      }>("/api/admin");
      setRevisions(d.revisions);
      setGrants(d.grants);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  };
  const resourceCard = (
    r: { title: string; url: string; language?: string },
    kind = "document",
  ) => (
    <div className="resource" key={r.url}>
      <div className="resource-head">
        <span className="resource-icon">
          {kind === "video" ? <PlayCircle /> : <FileText />}
        </span>
        <div>
          <strong>{r.title}</strong>
          <small>{r.language || "Official / source resource"}</small>
        </div>
        <button
          className="icon-button"
          aria-label="Save resource"
          onClick={() => favorite("resource:" + r.url)}
        >
          {state.favorites.includes("resource:" + r.url) ? (
            <Star fill="currentColor" />
          ) : (
            <Star />
          )}
        </button>
      </div>
      {kind === "video" && youtube(r.url) ? (
        <iframe
          title={r.title}
          src={youtube(r.url)!}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : null}
      <a href={r.url} target="_blank" rel="noopener noreferrer">
        {tr(text("मूल स्रोत खोलें", "ਅਸਲ ਸਰੋਤ ਖੋਲ੍ਹੋ", "Open original source"))}
      </a>
      {kind === "document" && /\.pdf(\?|$)/i.test(r.url) ? (
        <details>
          <summary>
            {tr(text("यहीं PDF देखें", "ਇੱਥੇ PDF ਵੇਖੋ", "View PDF here"))}
          </summary>
          <iframe
            title={r.title}
            src={r.url}
            loading="lazy"
            sandbox="allow-downloads"
            className="document-frame"
          />
          <small>
            {tr(
              text(
                "यदि स्रोत embedding रोकता है तो मूल स्रोत खोलें।",
                "ਜੇ ਸਰੋਤ embedding ਰੋਕਦਾ ਹੈ ਤਾਂ ਅਸਲ ਸਰੋਤ ਖੋਲ੍ਹੋ।",
                "If the source blocks embedding, open the original.",
              ),
            )}
          </small>
        </details>
      ) : null}
    </div>
  );
  function flashView() {
    if (!cardBank.length) return (
      <div className="empty">
        {tr(text("इस विषय के फ्लैशकार्ड उपलब्ध नहीं हैं।","ਇਸ ਵਿਸ਼ੇ ਦੇ ਫਲੈਸ਼ਕਾਰਡ ਉਪਲਬਧ ਨਹੀਂ।","No flashcards available for this selection."))}
      </div>
    );
    const safeIndex = cardIndex % cardBank.length;
    const card = cardBank[safeIndex];
    return card ? (
      <>
        <div className="row between">
          <span>
            {safeIndex + 1} / {cardBank.length}
          </span>
          <span className="muted">
            {tr(
              text(
                "पहले सोचें, फिर उत्तर देखें",
                "ਪਹਿਲਾਂ ਸੋਚੋ, ਫਿਰ ਉੱਤਰ ਵੇਖੋ",
                "Recall first, then reveal",
              ),
            )}
          </span>
        </div>
        <button
          className={"flashcard " + (revealed ? "revealed" : "")}
          onClick={() => setRevealed(!revealed)}
        >
          <small>
            {revealed
              ? tr(text("उत्तर", "ਉੱਤਰ", "Answer"))
              : tr(text("प्रश्न", "ਸਵਾਲ", "Question"))}
          </small>
          <div>{tr(revealed ? card.answer : card.question)}</div>
          <span>{tr(text("कार्ड पलटें", "ਕਾਰਡ ਪਲਟੋ", "Flip card"))}</span>
        </button>
        <div className="row">
          <button
            onClick={() => {
              setCardIndex(Math.max(0, cardIndex - 1));
              setRevealed(false);
            }}
          >
            <ArrowLeft size={16} />
            {tr(text("पिछला", "ਪਿਛਲਾ", "Previous"))}
          </button>
          <button
            className="primary"
            onClick={() => {
              setCardIndex((cardIndex + 1) % cardBank.length);
              setRevealed(false);
            }}
          >
            {tr(text("अगला कार्ड", "ਅਗਲਾ ਕਾਰਡ", "Next card"))}
          </button>
        </div>
        {revealed && (
          <div className="row" style={{ marginTop: 12, justifyContent: "center" }}>
            <button
              onClick={() => {
                setCardIndex((cardIndex + 1) % cardBank.length);
                setRevealed(false);
              }}
            >
              🔴 {tr(text("कठिन (1 दिन)", "ਔਖਾ (1 ਦਿਨ)", "Hard (1d)"))}
            </button>
            <button
              onClick={() => {
                setCardIndex((cardIndex + 1) % cardBank.length);
                setRevealed(false);
              }}
            >
              🟡 {tr(text("सामान्य (3 दिन)", "ਠੀਕ (3 ਦਿਨ)", "Good (3d)"))}
            </button>
            <button
              onClick={() => {
                setCardIndex((cardIndex + 1) % cardBank.length);
                setRevealed(false);
              }}
            >
              🟢 {tr(text("सरल (7 दिन)", "ਸੌਖਾ (7 ਦਿਨ)", "Easy (7d)"))}
            </button>
          </div>
        )}
      </>
    ) : (
      <div className="empty">
        {tr(
          text(
            "इस पाठ के कार्ड अभी उपलब्ध नहीं हैं।",
            "ਇਸ ਪਾਠ ਦੇ ਕਾਰਡ ਹਾਲੇ ਉਪਲਬਧ ਨਹੀਂ।",
            "No cards for this lesson yet.",
          ),
        )}
      </div>
    );
  }
  function quizView() {
    if (!quiz)
      return (
        <div className="empty">
          <ClipboardCheck size={40} />
          <h3>
            {tr(
              text(
                "अपनी समझ जाँचें",
                "ਆਪਣੀ ਸਮਝ ਜਾਚੋ",
                "Check your understanding",
              ),
            )}
          </h3>
          <p>
            {tr(
              text(
                "व्याख्या सहित स्वनिर्मित अभ्यास प्रश्न। ये पिछले वर्षों के प्रश्न नहीं हैं।",
                "ਵਿਆਖਿਆ ਸਮੇਤ ਆਪਣੇ ਬਣਾਏ ਅਭਿਆਸ ਸਵਾਲ। ਇਹ ਪਿਛਲੇ ਸਾਲਾਂ ਦੇ ਸਵਾਲ ਨਹੀਂ ਹਨ।",
                "Original practice questions with explanations. These are not previous-year papers.",
              ),
            )}
          </p>
          <button
            className="primary"
            onClick={() =>
              startQuiz(
                view === "lesson" && lesson
                  ? lesson.questions.map((q) => ({ lessonId: lesson.id, q }))
                  : qBank,
              )
            }
            disabled={
              !(view === "lesson" && lesson
                ? lesson.questions.length
                : qBank.length)
            }
          >
            {tr(text("अभ्यास शुरू करें", "ਅਭਿਆਸ ਸ਼ੁਰੂ ਕਰੋ", "Start practice"))}
          </button>
          {!(view === "lesson" && lesson ? lesson.questions.length : qBank.length) && (
            <p className="muted" style={{ marginTop: 12 }}>
              {tr(
                text(
                  "इस चुने हुए विषय के लिए अभी अभ्यास प्रश्न उपलब्ध नहीं हैं। आधिकारिक सिलेबस देखें।",
                  "ਇਸ ਚੁਣੇ ਹੋਏ ਵਿਸ਼ੇ ਲਈ ਅਜੇ ਅਭਿਆਸ ਸਵਾਲ ਉਪਲਬਧ ਨਹੀਂ ਹਨ। ਅਧਿਕਾਰਤ ਸਿਲੇਬਸ ਵੇਖੋ।",
                  "Practice questions are not yet available for this topic. Please consult the official syllabus.",
                ),
              )}
            </p>
          )}
        </div>
      );
    const answered = Object.keys(quiz.answers).length,
      correct = quiz.items.filter(
        ({ lessonId, q }) =>
          quiz.answers[`${lessonId}:${q.id}`] === q.answerIndex,
      ).length;
    return (
      <>
        <div className="quiz-summary">
          <strong>
            {quiz.finished
              ? `${correct}/${quiz.items.length}`
              : `${answered}/${quiz.items.length}`}
          </strong>
          <span>
            {quiz.finished
              ? tr(text("सही उत्तर", "ਸਹੀ ਉੱਤਰ", "correct answers"))
              : tr(
                  text("प्रश्न हल किए", "ਸਵਾਲ ਹੱਲ ਕੀਤੇ", "questions answered"),
                )}
          </span>
        </div>
        {quiz.finished && (
          <div className="row" style={{ margin: "14px 0" }}>
            <button
              className={!showMistakesOnly ? "primary" : ""}
              onClick={() => setShowMistakesOnly(false)}
            >
              {tr(text(`सभी प्रश्न (${quiz.items.length})`, `ਸਾਰੇ ਸਵਾਲ (${quiz.items.length})`, `All questions (${quiz.items.length})`))}
            </button>
            <button
              className={showMistakesOnly ? "primary" : ""}
              onClick={() => setShowMistakesOnly(true)}
            >
              {tr(text(`ग़लत प्रश्न (${quiz.items.length - correct})`, `ਗ਼ਲਤ ਸਵਾਲ (${quiz.items.length - correct})`, `Mistakes only (${quiz.items.length - correct})`))}
            </button>
          </div>
        )}
        {quiz.items
          .filter(({ lessonId, q }) => !quiz.finished || !showMistakesOnly || quiz.answers[`${lessonId}:${q.id}`] !== q.answerIndex)
          .map(({ lessonId, q }, i) => {
          const key = `${lessonId}:${q.id}`;
          return (
            <section className="question" key={key}>
              <div className="eyebrow" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>{tr(text("प्रश्न", "ਸਵਾਲ", "QUESTION"))} {i + 1}</span>
                {q.originType && (
                  <span
                    style={{
                      fontSize: "0.72rem",
                      padding: "2px 8px",
                      borderRadius: "10px",
                      fontWeight: 600,
                      background: q.originType === "official_pyq" ? "rgba(3, 105, 161, 0.12)" : "rgba(100, 116, 139, 0.12)",
                      color: q.originType === "official_pyq" ? "var(--color-primary, #0284c7)" : "var(--color-text-muted, #64748b)",
                      border: q.originType === "official_pyq" ? "1px solid rgba(3, 105, 161, 0.25)" : "1px solid rgba(100, 116, 139, 0.25)",
                    }}
                  >
                    {q.originType === "official_pyq"
                      ? `🏛️ ${q.pyqExam || "Official PYQ"} ${q.pyqYear ? `(${q.pyqYear})` : ""}`
                      : "📝 Verified Model Practice"}
                  </span>
                )}
              </div>
              <h3>{tr(q.prompt)}</h3>
              <div className="options">
                {q.options.map((o, j) => (
                  <button
                    key={j}
                    disabled={quiz.finished}
                    className={
                      (quiz.answers[key] === j ? "selected " : "") +
                      (quiz.finished && q.answerIndex === j ? "correct" : "")
                    }
                    onClick={() =>
                      setQuiz({
                        ...quiz,
                        answers: { ...quiz.answers, [key]: j },
                      })
                    }
                  >
                    <span>{String.fromCharCode(65 + j)}</span>
                    {tr(o)}
                  </button>
                ))}
              </div>
              {quiz.finished && (
                <div className="answer">
                  <strong>
                    {quiz.answers[key] === q.answerIndex ? "✓ " : "✕ "}
                    {tr(text("सही उत्तर: ", "ਸਹੀ ਉੱਤਰ: ", "Correct answer: "))}
                    {tr(q.options[q.answerIndex])}
                  </strong>
                  {quiz.answers[key] !== undefined && quiz.answers[key] !== q.answerIndex && (
                    <div style={{ color: "var(--color-error, #ef4444)", fontSize: "0.85rem", marginTop: "4px" }}>
                      {tr(text("आपका चयन: ", "ਤੁਹਾਡੀ ਚੋਣ: ", "Your choice: "))}
                      {quiz.answers[key] === -1 
                        ? tr(text("कोई नहीं (अनुत्तरित)", "ਕੋਈ ਨਹੀਂ (ਅਣ-ਉੱਤਰਿਆ)", "None (unanswered)"))
                        : tr(q.options[quiz.answers[key]])}
                    </div>
                  )}
                  <p style={{ marginTop: "8px" }}>{tr(q.explanation)}</p>
                  {q.reviewedBy && (
                    <small style={{ display: "block", marginTop: "6px", color: "var(--color-text-muted, #64748b)" }}>
                      ✓ {tr(text("सत्यापित: ", "ਤਸਦੀਕਸ਼ੁਦਾ: ", "Verified by: "))}{q.reviewedBy}
                    </small>
                  )}
                </div>
              )}
            </section>
          );
        })}
        {!quiz.finished ? (
          <button
            className="primary"
            disabled={busy}
            onClick={async () => {
              setQuiz({ ...quiz, finished: true });
              const answers = quiz.items.map(({ lessonId, q }) => ({
                questionId: lessonId + ":" + q.id,
                answer: quiz.answers[lessonId + ":" + q.id] ?? -1,
              }));
              const correctCount = quiz.items.filter(
                ({ lessonId, q }) => quiz.answers[`${lessonId}:${q.id}`] === q.answerIndex
              ).length;
              if (answers.length) await save({ action: "attempt", answers, correct: correctCount });
            }}
          >
            {tr(
              text(
                "उत्तर और व्याख्या देखें",
                "ਉੱਤਰ ਅਤੇ ਵਿਆਖਿਆ ਵੇਖੋ",
                "Finish & review",
              ),
            )}
          </button>
        ) : (
          <div className="row" style={{ marginTop: 16 }}>
            <button className="primary" onClick={() => setQuiz(null)}>
              {tr(text("नया अभ्यास", "ਨਵਾਂ ਅਭਿਆਸ", "New practice"))}
            </button>
            {quiz.items.some(
              ({ lessonId, q }) =>
                quiz.answers[`${lessonId}:${q.id}`] !== q.answerIndex,
            ) && (
              <button
                onClick={() => {
                  const wrongItems = quiz.items.filter(
                    ({ lessonId, q }) =>
                      quiz.answers[`${lessonId}:${q.id}`] !== q.answerIndex,
                  );
                  setQuiz({
                    items: wrongItems,
                    answers: {},
                    finished: false,
                  });
                }}
              >
                {tr(
                  text(
                    "ग़लत प्रश्नों का पुनराभ्यास",
                    "ਗ਼ਲਤ ਸਵਾਲਾਂ ਦਾ ਮੁੜ-ਅਭਿਆਸ",
                    "Retry incorrect questions",
                  ),
                )}
              </button>
            )}
          </div>
        )}
      </>
    );
  }
  const domainName = (s: string) =>
    s === "Teaching"
      ? tr(text("टीचिंग", "ਅਧਿਆਪਨ", "Teaching"))
      : s === "Police"
        ? tr(text("पुलिस", "ਪੁਲਿਸ", "Police"))
        : s === "Clerk & Revenue"
          ? tr(text("क्लर्क और राजस्व", "ਕਲਰਕ ਅਤੇ ਮਾਲੀਆ", "Clerk & Revenue"))
          : s === "All"
            ? tr(text("सभी श्रेणियाँ", "ਸਾਰੀਆਂ ਸ਼੍ਰੇਣੀਆਂ", "All domains"))
            : s;
  const subjectName = (s: string) =>
    ({
      SST: tr(text("सामाजिक विज्ञान", "ਸਮਾਜਿਕ ਵਿਗਿਆਨ", "Social science")),
      Hindi: "हिन्दी",
      Punjabi: "ਪੰਜਾਬੀ",
      English: tr(text("अंग्रेज़ी", "ਅੰਗਰੇਜ਼ੀ", "English")),
      Science: tr(text("विज्ञान", "ਵਿਗਿਆਨ", "Science")),
      Mathematics: tr(text("गणित", "ਗਣਿਤ", "Mathematics")),
      General: tr(text("सामान्य विषय", "ਆਮ ਵਿਸ਼ੇ", "General subjects")),
      History: tr(text("इतिहास", "ਇਤਿਹਾਸ", "History")),
      Geography: tr(text("भूगोल", "ਭੂਗੋਲ", "Geography")),
      Economics: tr(text("अर्थशास्त्र", "ਅਰਥਸ਼ਾਸਤਰ", "Economics")),
      "Political science": tr(
        text("राजनीति विज्ञान", "ਰਾਜਨੀਤੀ ਵਿਗਿਆਨ", "Political science"),
      ),
      "Political Science": tr(
        text("राजनीति विज्ञान", "ਰਾਜਨੀਤੀ ਵਿਗਿਆਨ", "Political science"),
      ),
      Sanskrit: tr(text("संस्कृत", "ਸੰਸਕ੍ਰਿਤ", "Sanskrit")),
      Physics: tr(text("भौतिकी", "ਭੌਤਿਕੀ", "Physics")),
      Chemistry: tr(text("रसायन विज्ञान", "ਰਸਾਇਣ ਵਿਗਿਆਨ", "Chemistry")),
      Biology: tr(text("जीव विज्ञान", "ਜੀਵ ਵਿਗਿਆਨ", "Biology")),
      Commerce: tr(text("वाणिज्य", "ਵਣਜ", "Commerce")),
      ETT: tr(text("ETT (प्राथमिक शिक्षक)", "ETT (ਪ੍ਰਾਇਮਰੀ ਅਧਿਆਪਕ)", "ETT (Elementary Teacher)")),
      Teaching: tr(text("अध्यापन", "ਅਧਿਆਪਨ", "Teaching")),
      punjabi: "ਪੰਜਾਬੀ",
      english: tr(text("अंग्रेज़ी", "ਅੰਗਰੇਜ਼ੀ", "English")),
      hindi: "हिन्दी",
      mathematics: tr(text("गणित", "ਗਣਿਤ", "Mathematics")),
      science: tr(text("विज्ञान", "ਵਿਗਿਆਨ", "Science")),
      social_science: tr(text("सामाजिक विज्ञान", "ਸਮਾਜਿਕ ਵਿਗਿਆਨ", "Social science")),
      qualifying_punjabi_paper_a: tr(text("अनिवार्य पंजाबी पेपर A (50 अंक)", "ਲਾਜ਼ਮੀ ਪੰਜਾਬੀ ਪੇਪਰ ਏ (50 ਅੰਕ)", "Qualifying Punjabi Paper A (50 Marks)")),
      general_knowledge_paper_b: tr(text("सामान्य ज्ञान व करंट अफेयर्स (30 अंक)", "ਜਨਰਲ ਨਾਲੇਜ ਤੇ ਕਰੰਟ ਅਫੇਅਰਜ਼ (30 ਅੰਕ)", "General Knowledge & Current Affairs (30 Marks)")),
      computer_it: tr(text("कंप्यूटर व आईटी ज्ञान (20 अंक)", "ਕੰਪਿਊਟਰ ਤੇ ਆਈਟੀ ਗਿਆਨ (20 ਅੰਕ)", "Computer & IT Knowledge (20 Marks)")),
      reasoning_math: tr(text("रीजनिंग व गणित (30 अंक)", "ਰੀਜ਼ਨਿੰਗ ਤੇ ਗਣਿਤ (30 ਅੰਕ)", "Mental Ability & Math (30 Marks)")),
      languages_paper_b: tr(text("भाषाएँ पेपर B (20 अंक)", "ਭਾਸ਼ਾਵਾਂ ਪੇਪਰ ਬੀ (20 ਅੰਕ)", "Languages Paper B (20 Marks)")),
      level_1_primary: tr(text("लेवल 1: प्राथमिक शिक्षक (कक्षा 1–5)", "ਲੈਵਲ 1: ਪ੍ਰਾਇਮਰੀ ਅਧਿਆਪਕ (ਕਲਾਸ 1–5)", "Level 1: Primary Teachers (Classes I–V)")),
      level_2_upper_primary: tr(text("लेवल 2: उच्च प्राथमिक शिक्षक (कक्षा 6–8)", "ਲੈਵਲ 2: ਅੱਪਰ ਪ੍ਰਾਇਮਰੀ ਅਧਿਆਪਕ (ਕਲਾਸ 6–8)", "Level 2: Upper Primary Teachers (Classes VI–VIII)")),
    })[s] || s;
  const unitName = (s: string) => {
    const m: Record<string, Text3> = {
      "Ancient India": text("प्राचीन भारत", "ਪ੍ਰਾਚੀਨ ਭਾਰਤ", "Ancient India"),
      "Medieval India": text("मध्यकालीन भारत", "ਮੱਧਕਾਲੀਨ ਭਾਰਤ", "Medieval India"),
      "History of Punjab": text("पंजाब का इतिहास", "ਪੰਜਾਬ ਦਾ ਇਤਿਹਾਸ", "History of Punjab"),
      "Modern India": text("आधुनिक भारत", "ਆਧੁਨਿਕ ਭਾਰਤ", "Modern India"),
      "World history": text("विश्व इतिहास", "ਵਿਸ਼ਵ ਇਤਿਹਾਸ", "World history"),
      "Constitution of India": text("भारत का संविधान", "ਭਾਰਤ ਦਾ ਸੰਵਿਧਾਨ", "Constitution of India"),
      "Rights and duties": text("अधिकार और कर्तव्य", "ਅਧਿਕਾਰ ਅਤੇ ਫ਼ਰਜ਼", "Rights and duties"),
      "Indian Government": text("भारत की शासन व्यवस्था", "ਭਾਰਤ ਦਾ ਸ਼ਾਸਨ ਪ੍ਰਬੰਧ", "Indian Government"),
      "Federalism and local government": text("संघवाद और स्थानीय शासन", "ਸੰਘਵਾਦ ਅਤੇ ਸਥਾਨਕ ਸ਼ਾਸਨ", "Federalism and local government"),
      "Indian economy": text("भारतीय अर्थव्यवस्था", "ਭਾਰਤੀ ਅਰਥਵਿਵਸਥਾ", "Indian economy"),
      "Physical geography": text("भौतिक भूगोल", "ਭੌਤਿਕ ਭੂਗੋਲ", "Physical geography"),
      Economics: text("अर्थशास्त्र", "ਅਰਥਸ਼ਾਸਤਰ", "Economics"),
      "India and Punjab": text("भारत और पंजाब", "ਭਾਰਤ ਅਤੇ ਪੰਜਾਬ", "India and Punjab"),
      "Resources and environment": text("संसाधन और पर्यावरण", "ਸਰੋਤ ਅਤੇ ਵਾਤਾਵਰਣ", "Resources and environment"),
      Foundation: text("बुनियादी पाठ", "ਬੁਨਿਆਦੀ ਪਾਠ", "Foundation"),
      // Punjabi / Sanskrit units
      "ਵਿਆਕਰਨ ਦੇ ਆਧਾਰ": text("ਵਿਆਕਰਨ ਦੇ ਆਧਾਰ", "ਵਿਆਕਰਨ ਦੇ ਆਧਾਰ", "Punjabi Grammar Basics"),
      "ਕਾਵਿ-ਸ਼ਾਸਤਰ": text("ਕਾਵਿ-ਸ਼ਾਸਤਰ", "ਕਾਵਿ-ਸ਼ਾਸਤਰ", "Poetics"),
      "ਪੰਜਾਬੀ ਸਾਹਿਤ": text("ਪੰਜਾਬੀ ਸਾਹਿਤ", "ਪੰਜਾਬੀ ਸਾਹਿਤ", "Punjabi Literature"),
      "व्याकरण": text("व्याकरण", "ਵਿਆਕਰਨ", "Grammar"),
      // Physics / Chemistry units
      "Mechanics": text("यांत्रिकी", "ਮਕੈਨਿਕਸ", "Mechanics"),
      "Optics": text("प्रकाशिकी", "ਆਪਟਿਕਸ", "Optics"),
      "Atomic Structure": text("परमाणु संरचना", "ਪਰਮਾਣੂ ਬਣਤਰ", "Atomic Structure"),
      "Chemical Reactions": text("रासायनिक क्रियाएं", "ਰਾਸਾਇਣਿਕ ਕਿਰਿਆਵਾਂ", "Chemical Reactions"),
      "Human Physiology": text("मानव शरीर क्रिया विज्ञान", "ਮਨੁੱਖੀ ਸਰੀਰ ਵਿਗਿਆਨ", "Human Physiology"),
      // General subject units
      "Number system": text("संख्या पद्धति", "ਸੰਖਿਆ ਪ੍ਰਣਾਲੀ", "Number system"),
      "Computers and IT": text("कंप्यूटर और IT", "ਕੰਪਿਊਟਰ ਅਤੇ IT", "Computers and IT"),
      "Reasoning": text("तर्कशक्ति", "ਤਰਕ-ਸ਼ਕਤੀ", "Reasoning"),
      "Hindi grammar": text("हिंदी व्याकरण", "ਹਿੰਦੀ ਵਿਆਕਰਨ", "Hindi grammar"),
      "English grammar": text("अंग्रेज़ी व्याकरण", "ਅੰਗਰੇਜ਼ੀ ਵਿਆਕਰਨ", "English grammar"),
    };
    return m[s] ? tr(m[s]) : s;
  };
  const home = (
    <>
      <div className="intro row between">
        <div>
          <span className="eyebrow">
            {tr(
              text(
                "अपनी पढ़ाई, अपने तरीके से",
                "ਆਪਣੀ ਪੜ੍ਹਾਈ, ਆਪਣੇ ਤਰੀਕੇ ਨਾਲ",
                "YOUR STUDY, YOUR WAY",
              ),
            )}
          </span>
          <h1>
            {tr(
              text(
                "आज क्या पढ़ना है?",
                "ਅੱਜ ਕੀ ਪੜ੍ਹਨਾ ਹੈ?",
                "What will you learn today?",
              ),
            )}
          </h1>
          <p>
            {tr(
              text(
                "अपनी परीक्षा चुनें। पूरा पाठ पढ़ें। याद करें और अभ्यास करें।",
                "ਆਪਣੀ ਪ੍ਰੀਖਿਆ ਚੁਣੋ। ਪੂਰਾ ਪਾਠ ਪੜ੍ਹੋ। ਯਾਦ ਕਰੋ ਅਤੇ ਅਭਿਆਸ ਕਰੋ।",
                "Choose your exam. Read a lesson. Recall and practice.",
              ),
            )}
          </p>
        </div>
        <div className="daily">
          <BookOpen />
          <strong>{state.done.length}</strong>
          <span>{tr(text("पाठ पढ़े", "ਪਾਠ ਪੜ੍ਹੇ", "lessons studied"))}</span>
        </div>
      </div>
      <section className="study-highlight">
        <div>
          <span className="eyebrow">PUNJAB MASTER CADRE · हिन्दी / ਪੰਜਾਬੀ / English</span>
          <h2>
            {tr(
              text(
                "सभी विषयों की पढ़ाई यहाँ करें",
                "ਸਾਰੇ ਵਿਸ਼ਿਆਂ ਦੀ ਪੜ੍ਹਾਈ ਇੱਥੇ ਕਰੋ",
                "Study all subjects here",
              ),
            )}
          </h2>
          <p>
            {lessons.length}{" "}
            {tr(text("विस्तृत पाठ", "ਵਿਸਤ੍ਰਿਤ ਪਾਠ", "detailed lessons"))} ·{" "}
            {lessons.reduce((n, l) => n + l.questions.length, 0)}{" "}
            {tr(text("अभ्यास प्रश्न", "ਅਭਿਆਸ ਸਵਾਲ", "practice questions"))} ·{" "}
            {lessons.reduce((n, l) => n + l.flashcards.length, 0)}{" "}
            {tr(text("फ्लैशकार्ड", "ਫਲੈਸ਼ਕਾਰਡ", "flashcards"))}
          </p>
          <div className="subject-chips">
            {[...new Set(lessons.map((l) => l.subject))].map((s) => (
              <button key={s} onClick={() => { setExamId("master"); setSubject(s); go("library"); }}
                className="chip-button">
                {subjectName(s)}
              </button>
            ))}
          </div>
        </div>
        <div className="highlight-index">
          <span>01 {tr(text("पढ़ें", "ਪੜ੍ਹੋ", "Read"))}</span>
          <span>02 {tr(text("याद करें", "ਯਾਦ ਕਰੋ", "Recall"))}</span>
          <span>
            03 {tr(text("प्रश्न हल करें", "ਸਵਾਲ ਹੱਲ ਕਰੋ", "Practice"))}
          </span>
        </div>
      </section>
      <div className="section-heading">
        <h2>
          {tr(
            text("अपनी परीक्षा चुनें", "ਆਪਣੀ ਪ੍ਰੀਖਿਆ ਚੁਣੋ", "Choose your exam"),
          )}
        </h2>
        <span className="muted">
          {tr(
            text(
              "राज्य → परीक्षा → विषय",
              "ਰਾਜ → ਪ੍ਰੀਖਿਆ → ਵਿਸ਼ਾ",
              "Region → exam → subject",
            ),
          )}
        </span>
      </div>
      <div className="filter-row">
        {["Punjab", "Rajasthan", "Central"].map((r) => (
          <button
            key={r}
            className={region === r ? "selected" : ""}
            onClick={() => setRegion(r)}
          >
            {r === "Punjab"
              ? tr(text("पंजाब", "ਪੰਜਾਬ", "Punjab"))
              : r === "Rajasthan"
                ? tr(text("राजस्थान", "ਰਾਜਸਥਾਨ", "Rajasthan"))
                : tr(text("केंद्र सरकार", "ਕੇਂਦਰ ਸਰਕਾਰ", "Central government"))}
          </button>
        ))}
        <label className="search">
          <Search size={17} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={tr(
              text("परीक्षा खोजें", "ਪ੍ਰੀਖਿਆ ਲੱਭੋ", "Search exams"),
            )}
          />
        </label>
      </div>
      <div className="pills">
        {["All", "Teaching", "Clerk & Revenue", "Police", "Civil Services"].map(
          (d) => (
            <button
              key={d}
              onClick={() => setDomain(d)}
              className={domain === d ? "active" : ""}
            >
              {domainName(d)}
            </button>
          ),
        )}
      </div>
      <div className="exam-grid">
        {catalog.exams
          .filter(
            (e) =>
              e.state === region &&
              (domain === "All" || e.category === domain) &&
              e.name.toLowerCase().includes(search.toLowerCase()),
          )
          .map((e) => (
            <button
              className="exam-card"
              key={e.id}
              onClick={() => {
                setExamId(e.id);
                go("exam");
              }}
            >
              <GraduationCap />
              <span className="eyebrow">{domainName(e.category)}</span>
              <h3>{e.name}</h3>
              <p>
                {e.id === "master"
                  ? tr(
                      text(
                        "SST पाठ और आधिकारिक 2022 सिलेबस",
                        "SST ਪਾਠ ਅਤੇ ਅਧਿਕਾਰਤ 2022 ਸਿਲੇਬਸ",
                        "SST lessons & official 2022 syllabus",
                      ),
                    )
                  : e.subjects.map(subjectName).join(" · ")}
              </p>
              <span className="card-footer">
                {e.status === "archive"
                  ? tr(
                      text(
                        "पुराना आधिकारिक सिलेबस",
                        "ਪੁਰਾਣਾ ਅਧਿਕਾਰਤ ਸਿਲੇਬਸ",
                        "Archived official syllabus",
                      ),
                    )
                  : tr(
                      text(
                        "वर्षवार सत्यापन बाकी",
                        "ਸਾਲ ਅਨੁਸਾਰ ਪੁਸ਼ਟੀ ਬਾਕੀ",
                        "Edition verification pending",
                      ),
                    )}
                <ChevronRight size={17} />
              </span>
            </button>
          ))}
      </div>
    </>
  );
  const examView = (
    <>
      <button className="text-button" onClick={() => go("home")}>
        <ArrowLeft size={17} />
        {lab("home")}
      </button>
      <div className="intro">
        <span className="eyebrow">
          {selectedExam.state} / {domainName(selectedExam.category)}
        </span>
        <h1>{selectedExam.name}</h1>
        <p>
          {tr(
            text(
              "विषय चुनें और अपने सिलेबस के अनुसार पढ़ें।",
              "ਵਿਸ਼ਾ ਚੁਣੋ ਅਤੇ ਆਪਣੇ ਸਿਲੇਬਸ ਅਨੁਸਾਰ ਪੜ੍ਹੋ।",
              "Choose a subject and follow your syllabus.",
            ),
          )}
        </p>
      </div>
      <div className="source-note">
        {selectedExam.edition} ·{" "}
        <a href={selectedExam.source} target="_blank" rel="noopener noreferrer">
          {tr(text("आधिकारिक स्रोत", "ਅਧਿਕਾਰਤ ਸਰੋਤ", "Official source"))}
        </a>
      </div>
      <div className="exam-grid">
        {selectedExam.subjects.map((s) => (
          <button
            className="exam-card"
            key={s}
            onClick={() => {
              setSubject(s);
              go("library");
            }}
          >
            <BookOpen />
            <h3>{subjectName(s)}</h3>
            <p>
              {lessons.filter((l) => l.subject === s).length}{" "}
              {tr(text("उपलब्ध पाठ", "ਉਪਲਬਧ ਪਾਠ", "available lessons"))}
            </p>
          </button>
        ))}
      </div>
    </>
  );
  const units = [...new Set(related.map((l) => l.unit))];
  const library = (
    <>
      <button className="text-button" onClick={() => go("exam")}>
        <ArrowLeft size={17} />
        {selectedExam.name}
      </button>
      <div className="intro row between">
        <div>
          <span className="eyebrow">
            {selectedExam.state} / {selectedExam.name}
          </span>
          <h1>{subjectName(subject)}</h1>
          <p>
            {related.length} {tr(text("पाठ", "ਪਾਠ", "lessons"))} ·{" "}
            {related.reduce((n, l) => n + l.questions.length, 0)}{" "}
            {tr(text("प्रश्न", "ਸਵਾਲ", "questions"))}
          </p>
        </div>
        <button
          onClick={() => {
            setPracticeLesson("all");
            go("practice");
          }}
        >
          <ClipboardCheck size={18} />
          {lab("practice")}
        </button>
      </div>
      <div className="source-note">
        {tr(
          text(
            "सिलेबस का वर्ष अपनी भर्ती से मिलाएँ। इन पाठों का संग्रह अभी पूरे पाठ्यक्रम का विकल्प नहीं है।",
            "ਸਿਲੇਬਸ ਦਾ ਸਾਲ ਆਪਣੀ ਭਰਤੀ ਨਾਲ ਮਿਲਾਓ। ਇਹ ਪਾਠ ਸੰਗ੍ਰਹਿ ਹਾਲੇ ਪੂਰੇ ਕੋਰਸ ਦਾ ਬਦਲ ਨਹੀਂ ਹੈ।",
            "Match the syllabus year to your recruitment. This lesson collection is not yet a replacement for the entire syllabus.",
          ),
        )}
      </div>
      {units.map((unit) => (
        <section className="unit" key={unit}>
          <div className="section-heading">
            <h2>{unitName(unit)}</h2>
            <span>
              {related.filter((l) => l.unit === unit).length}{" "}
              {tr(text("पाठ", "ਪਾਠ", "lessons"))}
            </span>
          </div>
          {related
            .filter((l) => l.unit === unit)
            .map((l, i) => (
              <button
                className={"lesson-row" + (state.done.includes(l.id) ? " done-lesson" : "")}
                key={l.id}
                onClick={() => go("lesson", l.id)}
              >
                <span className="lesson-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{tr(l.title)}</h3>
                  <p>
                    {(l as { supplemental?: boolean }).supplemental && (
                      <span>
                        {tr(
                          text("पूरक पाठ · ", "ਪੂਰਕ ਪਾਠ · ", "Supplemental · "),
                        )}
                      </span>
                    )}
                    {l.sections.length} {tr(text("भाग", "ਭਾਗ", "sections"))} ·{" "}
                    {l.flashcards.length} {tr(text("कार्ड", "ਕਾਰਡ", "cards"))} ·{" "}
                    {l.questions.length}{" "}
                    {tr(text("प्रश्न", "ਸਵਾਲ", "questions"))}
                  </p>
                </div>
                <span className="lesson-tail">
                  {state.done.includes(l.id) ? <Check size={18} /> : <ChevronRight />}
                </span>
              </button>
            ))}
        </section>
      ))}
      {!related.length && (
        <div className="panel empty">
          <h3>
            {tr(
              text(
                "इस विषय के विस्तृत पाठ तैयार नहीं हैं",
                "ਇਸ ਵਿਸ਼ੇ ਦੇ ਵਿਸਤ੍ਰਿਤ ਪਾਠ ਤਿਆਰ ਨਹੀਂ",
                "Detailed lessons are not ready for this subject",
              ),
            )}
          </h3>
          <p>
            {tr(
              text(
                "स्रोत उपलब्ध है; इसे पूरा पाठ्यक्रम न समझें।",
                "ਸਰੋਤ ਉਪਲਬਧ ਹੈ; ਇਸ ਨੂੰ ਪੂਰਾ ਕੋਰਸ ਨਾ ਸਮਝੋ।",
                "The source is available; this is not a complete course.",
              ),
            )}
          </p>
          <a
            href={selectedExam.source}
            target="_blank"
            rel="noopener noreferrer"
          >
            {tr(
              text(
                "आधिकारिक सिलेबस देखें",
                "ਅਧਿਕਾਰਤ ਸਿਲੇਬਸ ਵੇਖੋ",
                "View official syllabus",
              ),
            )}
          </a>
        </div>
      )}
      {activeSyllabus && (
        <details className="panel syllabus" open={subject === "SST"}>
          <summary>
            {tr(
              text(
                `${selectedExam.name} आधिकारिक सिलेबस और कवरेज जाँचें`,
                `${selectedExam.name} ਅਧਿਕਾਰਤ ਸਿਲੇਬਸ ਅਤੇ ਕਵਰੇਜ ਜਾਚੋ`,
                `Inspect ${selectedExam.name} official syllabus & coverage`,
              ),
            )}
          </summary>
          <div style={{ margin: "10px 0 14px" }}>
            <p style={{ margin: "4px 0", fontWeight: 600 }}>{activeSyllabus.version}</p>
            {activeSyllabus.officialSource && (
              <a
                href={activeSyllabus.officialSource}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", margin: "6px 0 10px" }}
              >
                {tr(
                  text(
                    "आधिकारिक सिलेबस PDF / स्रोत",
                    "ਅਧਿਕਾਰਤ ਸਿਲੇਬਸ PDF / ਸਰੋਤ",
                    "Official syllabus PDF / source",
                  ),
                )}
              </a>
            )}
            {activeSyllabus.conflationGuard && (
              <div className="alert" style={{ margin: "8px 0 12px", fontSize: "13px" }}>
                <strong>{tr(text("महत्वपूर्ण अंतर (Conflation Guard):", "ਮਹੱਤਵਪੂਰਨ ਅੰਤਰ (Conflation Guard):", "Important Scope Distinction:"))}</strong>{" "}
                {activeSyllabus.conflationGuard}
              </div>
            )}
            {selectedExam.note && (
              <p className="muted" style={{ margin: "4px 0 10px", fontSize: "13px" }}>
                {selectedExam.note}
              </p>
            )}
          </div>
          {Object.entries((activeSyllabus.hierarchy || {}) as Record<string, unknown>).map(
            ([area, items]: [string, unknown]) => (
              <section key={area}>
                <h3>{subjectName(area)}</h3>
                {((Array.isArray(items)
                  ? [["", items]]
                  : Object.entries(items as Record<string, unknown>)) as [string, Array<{ title?: string; subtopics?: string[] } | string>][]
                ).map(([group, list]) => (
                  <div key={group}>
                    {group && <h4>{group}</h4>}
                    <ol>
                      {list.map((item, i) => (
                        <li key={i}>
                          <strong>{typeof item === "string" ? item : item.title || ""}</strong>
                          {typeof item !== "string" && item.subtopics && (
                            <ul>
                              {item.subtopics.map((sub: string, j: number) => (
                                <li key={j}>{sub}</li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </section>
            ),
          )}
        </details>
      )}
    </>
  );
  const lessonView = lesson ? (
    <>
      <button className="text-button" onClick={() => go("library")}>
        <ArrowLeft size={17} />
        {subjectName(subject)}
      </button>
      <div className="intro row between">
        <div>
          <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:6,flexWrap:"wrap"}}>
            <span className={"subject-badge subject-"+lesson.subject.replace(/\s+/g,"")}>{subjectName(lesson.subject)}</span>
            <span className="eyebrow">{unitName(lesson.unit)}</span>
          </div>
          <h1>{tr(lesson.title)}</h1>
          <div className="lesson-meta">
            <span>📖 {lesson.sections.length} {tr(text("भाग","ਭਾਗ","sections"))}</span>
            <span>🃏 {lesson.flashcards.length} {tr(text("फ्लैशकार्ड","ਫਲੈਸ਼ਕਾਰਡ","flashcards"))}</span>
            <span>✏️ {lesson.questions.length} {tr(text("प्रश्न","ਸਵਾਲ","questions"))}</span>
            {(lesson.videos?.length || 0) > 0 && <span>🎬 {lesson.videos!.length} {tr(text("वीडियो","ਵੀਡੀਓ","videos"))}</span>}
          </div>
        </div>
        <button
          className="icon-button"
          aria-label="Favourite lesson"
          onClick={() => favorite("lesson:" + lesson.id)}
        >
          <Bookmark
            fill={
              state.favorites.includes("lesson:" + lesson.id)
                ? "currentColor"
                : "none"
            }
          />
        </button>
      </div>
      <div className="tabs">
        {(["read", "flash", "test", "sources"] as const).map((k) => (
          <button
            key={k}
            className={tab === k ? "active" : ""}
            onClick={() => {
              setTab(k);
              setQuiz(null);
              setCardIndex(0);
              setRevealed(false);
            }}
          >
            {lab(k)}
            {k === "flash"
              ? ` (${lesson.flashcards.length})`
              : k === "test"
                ? ` (${lesson.questions.length})`
                : ""}
          </button>
        ))}
      </div>
      <div className="reading-layout">
        <article className="reading-page" style={{ fontSize: font }}>
          {tab === "read" ? (
            <>
              <div className="reading-tools">
                <span>
                  {tr(text("पढ़ने का आकार", "ਪੜ੍ਹਨ ਦਾ ਆਕਾਰ", "Reading size"))}
                </span>
                <button onClick={() => setFont(Math.max(16, font - 1))}>
                  A−
                </button>
                <button onClick={() => setFont(Math.min(26, font + 1))}>
                  A+
                </button>
                <button
                  onClick={() => {
                    if ("speechSynthesis" in window) {
                      if (speaking) {
                        speechSynthesis.cancel();
                        setSpeaking(false);
                        return;
                      }
                      speechSynthesis.cancel();
                      const utter = new SpeechSynthesisUtterance(
                        lesson.sections
                          .map((s) => tr(s.heading) + ". " + tr(s.text))
                          .join("\n"),
                      );
                      utter.lang =
                        lang === "hi"
                          ? "hi-IN"
                          : lang === "pa"
                            ? "pa-IN"
                            : "en-IN";
                      utter.onend = () => setSpeaking(false);
                      utter.onerror = () => setSpeaking(false);
                      speechRef.current = utter;
                      speechSynthesis.speak(utter);
                      setSpeaking(true);
                    }
                  }}
                >
                  <Volume2 size={17} />
                  {speaking
                    ? tr(text("रोकें", "ਰੋਕੋ", "Stop"))
                    : tr(text("सुनें", "ਸੁਣੋ", "Listen"))}
                </button>
              </div>
              <div className="toc">
                <strong>
                  {tr(text("इस पाठ में", "ਇਸ ਪਾਠ ਵਿੱਚ", "In this lesson"))}
                </strong>
                {lesson.sections.map((s, i) => (
                  <a
                    key={i}
                    href={"#section-" + i}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("section-" + i)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {i + 1}. {tr(s.heading)}
                  </a>
                ))}
              </div>
              {lesson.sections.map((s, i) => (
                <section className="lesson-section" id={"section-" + i} key={i}>
                  <h2>{tr(s.heading)}</h2>
                  <div className="prose">
                    {tr(s.text)
                      .split("\n")
                      .map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                  </div>
                </section>
              ))}
              <div className="keynote">
                <span className="eyebrow">
                  {tr(
                    text(
                      "याद रखने वाले बिंदु",
                      "ਯਾਦ ਰੱਖਣ ਵਾਲੇ ਬਿੰਦੂ",
                      "KEY POINTS",
                    ),
                  )}
                </span>
                <ul>
                  {lesson.keypoints.map((p, i) => (
                    <li key={i}>{tr(p)}</li>
                  ))}
                </ul>
              </div>
              <div className="summary-box">
                <h3>
                  {tr(text("📝 पाठ का सारांश", "📝 ਪਾਠ ਦਾ ਸਾਰ", "📝 Lesson Summary"))}
                </h3>
                <p style={{margin:0,lineHeight:1.8}}>{tr(lesson.summary)}</p>
              </div>
              <div className="row">
                <button
                  className="primary"
                  disabled={busy || state.done.includes(lesson.id)}
                  onClick={() => save({ action: "done", lessonId: lesson.id })}
                >
                  <Check size={18} />
                  {state.done.includes(lesson.id)
                    ? tr(text("पढ़ लिया", "ਪੜ੍ਹ ਲਿਆ", "Studied"))
                    : tr(
                        text(
                          "पढ़ लिया चिह्नित करें",
                          "ਪੜ੍ਹ ਲਿਆ ਚਿੰਨ੍ਹਿਤ ਕਰੋ",
                          "Mark as studied",
                        ),
                      )}
                </button>
                <button onClick={() => setTab("flash")}>{lab("flash")}</button>
              </div>
            </>
          ) : tab === "flash" ? (
            flashView()
          ) : tab === "test" ? (
            quizView()
          ) : (
            <>
              <h2>{lab("sources")}</h2>
              {lesson.videos?.map((r) => resourceCard(r, "video"))}
              {lesson.documents?.map((r) => resourceCard(r))}
              {lesson.sources.map((r) => resourceCard(r))}
              {!lesson.videos?.length && (
                <p className="muted">
                  {tr(
                    text(
                      "इस पाठ का जाँचा हुआ वीडियो अभी नहीं जोड़ा गया है।",
                      "ਇਸ ਪਾਠ ਦੀ ਜਾਚੀ ਹੋਈ ਵੀਡੀਓ ਹਾਲੇ ਨਹੀਂ ਜੋੜੀ ਗਈ।",
                      "A reviewed video has not been added to this lesson yet.",
                    ),
                  )}
                </p>
              )}
            </>
          )}
        </article>
        <aside className="lesson-aside">
          <div className="panel note-panel">
            <NotebookPen />
            <h3>{lab("notes")}</h3>
            <p>
              {tr(
                text(
                  "अपने शब्दों में लिखें। एक अच्छा उदाहरण या मुश्किल बात याद रखें।",
                  "ਆਪਣੇ ਸ਼ਬਦਾਂ ਵਿੱਚ ਲਿਖੋ। ਚੰਗੀ ਉਦਾਹਰਨ ਜਾਂ ਔਖੀ ਗੱਲ ਯਾਦ ਰੱਖੋ।",
                  "Write in your own words. Keep an example or a tricky point.",
                ),
              )}
            </p>
            <textarea
              aria-label="Personal notes"
              value={noteDrafts[lesson.id] ?? state.notes[lesson.id] ?? ""}
              onChange={(e) =>
                setNoteDrafts({ ...noteDrafts, [lesson.id]: e.target.value })
              }
            />
            <button
              disabled={busy}
              onClick={() =>
                save({
                  action: "note",
                  lessonId: lesson.id,
                  text: noteDrafts[lesson.id] ?? state.notes[lesson.id] ?? "",
                })
              }
            >
              {tr(text("नोट सेव करें", "ਨੋਟ ਸੇਵ ਕਰੋ", "Save note"))}
            </button>
            <small>
              {user
                ? tr(
                    text(
                      "अकाउंट में सेव होगा",
                      "ਅਕਾਊਂਟ ਵਿੱਚ ਸੇਵ ਹੋਵੇਗਾ",
                      "Saved to your account",
                    ),
                  )
                : tr(
                    text(
                      "सेव करने के लिए साइन इन करें",
                      "ਸੇਵ ਕਰਨ ਲਈ ਸਾਈਨ ਇਨ ਕਰੋ",
                      "Sign in to save",
                    ),
                  )}
            </small>
          </div>
          <div className="panel">
            <h3>
              {tr(text("अच्छी पुनरावृत्ति", "ਚੰਗੀ ਦੁਹਰਾਈ", "Better revision"))}
            </h3>
            <p>
              {tr(
                text(
                  "आज पढ़ें। कल बिना नोट्स याद करें। तीसरे और सातवें दिन प्रश्न दोहराएँ।",
                  "ਅੱਜ ਪੜ੍ਹੋ। ਕੱਲ੍ਹ ਬਿਨਾਂ ਨੋਟਸ ਯਾਦ ਕਰੋ। ਤੀਜੇ ਅਤੇ ਸੱਤਵੇਂ ਦਿਨ ਸਵਾਲ ਦੁਹਰਾਓ।",
                  "Read today. Recall tomorrow without notes. Revisit questions on days three and seven.",
                ),
              )}
            </p>
          </div>
        </aside>
      </div>
    </>
  ) : (
    <div className="panel empty">
      {tr(
        text(
          "यह पाठ नहीं मिला। पाठ लाइब्रेरी खोलें।",
          "ਇਹ ਪਾਠ ਨਹੀਂ ਮਿਲਿਆ। ਪਾਠ ਲਾਇਬ੍ਰੇਰੀ ਖੋਲ੍ਹੋ।",
          "Lesson not found. Open the lesson library.",
        ),
      )}
      <button onClick={() => go("library")}>{lab("library")}</button>
    </div>
  );
  const practice = (
    <>
      <div className="intro">
        <span className="eyebrow">ACTIVE RECALL</span>
        <h1>{lab("practice")}</h1>
        <p>
          {qBank.length}{" "}
          {tr(
            text(
              "प्रश्न उपलब्ध। टॉपिक चुनें, फिर अपने हिसाब से अभ्यास करें।",
              "ਸਵਾਲ ਉਪਲਬਧ। ਵਿਸ਼ਾ ਚੁਣੋ, ਫਿਰ ਆਪਣੇ ਮੁਤਾਬਕ ਅਭਿਆਸ ਕਰੋ।",
              "questions available. Choose a topic and build a practice session.",
            ),
          )}
        </p>
      </div>
      <div className="panel practice-config">
        <label>
          {tr(text("विषय", "ਵਿਸ਼ਾ", "Subject"))}
          <select
            value={practiceSubject}
            onChange={(e) => {
              setSubject(e.target.value);
              setPracticeLesson("all");
              setQuiz(null);
              setCardIndex(0);
            }}
          >
            {[...new Set(lessons.map((l) => l.subject))].map((s) => (
              <option key={s} value={s}>{subjectName(s)}</option>
            ))}
          </select>
        </label>
        <label>
          {tr(text("टॉपिक", "ਵਿਸ਼ਾ", "Topic"))}
          <select
            value={practiceLesson}
            onChange={(e) => {
              setPracticeLesson(e.target.value);
              setQuiz(null);
              setCardIndex(0);
            }}
          >
            <option value="all">
              {tr(text("सभी पाठ", "ਸਾਰੇ ਪਾਠ", "All lessons"))}
            </option>
            {lessons.filter(l => l.subject === practiceSubject).map((l) => (
              <option key={l.id} value={l.id}>
                {tr(l.title)}
              </option>
            ))}
          </select>
        </label>
        <label>
          {tr(text("प्रश्नों की संख्या", "ਸਵਾਲਾਂ ਦੀ ਗਿਣਤੀ", "Question count"))}
          <select
            value={practiceCount}
            onChange={(e) => {
              setPracticeCount(Number(e.target.value));
              setQuiz(null);
            }}
          >
            {[10, 20, 30, 50, 100, 150].map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="tabs">
        <button
          className={tab === "flash" ? "active" : ""}
          onClick={() => {
            setTab("flash");
            setQuiz(null);
          }}
        >
          {lab("flash")}
        </button>
        <button
          className={tab !== "flash" ? "active" : ""}
          onClick={() => {
            setTab("test");
            setQuiz(null);
          }}
        >
          {lab("test")}
        </button>
      </div>
      <div className="reading-page">
        {tab === "flash" ? flashView() : quizView()}
      </div>
    </>
  );
  const notes = (
    <>
      <div className="intro">
        <h1>{lab("notes")}</h1>
        <p>
          {tr(
            text(
              "आपकी अपनी समझ—हर पाठ के साथ सेव।",
              "ਤੁਹਾਡੀ ਆਪਣੀ ਸਮਝ—ਹਰ ਪਾਠ ਨਾਲ ਸੇਵ।",
              "Your own understanding, saved alongside each lesson.",
            ),
          )}
        </p>
      </div>
      {Object.entries(state.notes)
        .filter(([, v]) => v.trim())
        .map(([id, n]) => (
          <div className="panel saved-note" key={id}>
            <h3>{tr(lessons.find((l) => l.id === id)?.title || id)}</h3>
            <p className="prose">{n}</p>
            <button onClick={() => go("lesson", id)}>
              <NotebookPen size={17} />
              {tr(
                text("पाठ में संपादित करें", "ਪਾਠ ਵਿੱਚ ਸੋਧੋ", "Edit in lesson"),
              )}
            </button>
          </div>
        ))}
      {!Object.values(state.notes).some((v) => v.trim()) && (
        <div className="panel empty">
          <NotebookPen size={38} />
          <h3>
            {tr(
              text("पहला नोट लिखें", "ਪਹਿਲਾ ਨੋਟ ਲਿਖੋ", "Write your first note"),
            )}
          </h3>
          <p>
            {tr(
              text(
                "पाठ खोलें और अपने शब्दों में नोट सेव करें।",
                "ਪਾਠ ਖੋਲ੍ਹੋ ਅਤੇ ਆਪਣੇ ਸ਼ਬਦਾਂ ਵਿੱਚ ਨੋਟ ਸੇਵ ਕਰੋ।",
                "Open a lesson and save a note in your own words.",
              ),
            )}
          </p>
          <button
            onClick={() => {
              setSubject("SST");
              go("library");
            }}
          >
            {lab("library")}
          </button>
        </div>
      )}
    </>
  );
  const resources = useMemo(() => {
    const seen = new Set<string>();
    const list: { title: string; url: string; language?: string }[] = [];
    for (const b of catalog.books) {
      if (!seen.has(b.url)) {
        seen.add(b.url);
        list.push({ title: b.name, url: b.url, language: b.desc });
      }
    }
    for (const l of lessons) {
      for (const r of [...l.sources, ...(l.documents || []), ...(l.videos || [])]) {
        if (!seen.has(r.url)) {
          seen.add(r.url);
          list.push(r);
        }
      }
    }
    return list;
  }, [lessons]);
  const saved = (
    <>
      <div className="intro">
        <h1>{lab("saved")}</h1>
        <p>
          {tr(
            text(
              "अपने पसंदीदा पाठ, किताबें और वीडियो साथ रखें।",
              "ਆਪਣੇ ਪਸੰਦੀਦਾ ਪਾਠ, ਕਿਤਾਬਾਂ ਅਤੇ ਵੀਡੀਓ ਇਕੱਠੇ ਰੱਖੋ।",
              "Keep favourite lessons, books and videos together.",
            ),
          )}
        </p>
      </div>
      <div className="panel">
        <h2>{tr(text("सेव किए पाठ", "ਸੇਵ ਕੀਤੇ ਪਾਠ", "Saved lessons"))}</h2>
        {lessons
          .filter((l) => state.favorites.includes("lesson:" + l.id))
          .map((l) => (
            <button
              className="lesson-row"
              key={l.id}
              onClick={() => go("lesson", l.id)}
            >
              <BookOpen />
              <h3>{tr(l.title)}</h3>
              <ChevronRight />
            </button>
          ))}
        {!state.favorites.some((id) => id.startsWith("lesson:")) && (
          <p className="muted">
            {tr(
              text(
                "पाठ पर bookmark दबाकर यहाँ जोड़ें।",
                "ਪਾਠ ਉੱਤੇ bookmark ਦਬਾ ਕੇ ਇੱਥੇ ਜੋੜੋ।",
                "Bookmark a lesson to add it here.",
              ),
            )}
          </p>
        )}
        <h2>
          {tr(
            text(
              "सेव किए दस्तावेज़ और वीडियो",
              "ਸੇਵ ਕੀਤੇ ਦਸਤਾਵੇਜ਼ ਅਤੇ ਵੀਡੀਓ",
              "Saved documents & videos",
            ),
          )}
        </h2>
        {resources
          .filter((r) => state.favorites.includes("resource:" + r.url))
          .map((r) =>
            resourceCard(
              {
                title: r.title,
                url: r.url,
              },
              youtube(r.url) ? "video" : "document",
            ),
          )}
      </div>
      <div className="section-heading">
        <h2>
          {tr(
            text(
              "किताबों की लाइब्रेरी",
              "ਕਿਤਾਬਾਂ ਦੀ ਲਾਇਬ੍ਰੇਰੀ",
              "Book library",
            ),
          )}
        </h2>
      </div>
      <div className="panel">
        {catalog.books.map((b) => resourceCard({ title: b.name, url: b.url }))}
      </div>
    </>
  );
  const typingSamples: { [key: string]: Text3 } = {
    easy: text(
      "प्रतिदिन पढ़ने से समझ बढ़ती है। छोटे कदम और नियमित अभ्यास से अच्छी तैयारी होती है। अपने शब्दों में नोट लिखें और प्रश्न हल करें।",
      "ਹਰ ਰੋਜ਼ ਪੜ੍ਹਨ ਨਾਲ ਸਮਝ ਵਧਦੀ ਹੈ। ਛੋਟੇ ਕਦਮ ਅਤੇ ਨਿਯਮਿਤ ਅਭਿਆਸ ਨਾਲ ਚੰਗੀ ਤਿਆਰੀ ਹੁੰਦੀ ਹੈ। ਆਪਣੇ ਸ਼ਬਦਾਂ ਵਿੱਚ ਨੋਟ ਲਿਖੋ ਅਤੇ ਸਵਾਲ ਹੱਲ ਕਰੋ।",
      "Daily reading builds understanding. Small steps and regular practice improve preparation. Write notes in your own words and solve questions.",
    ),
    medium: text(
      "भारत का संविधान नागरिकों को मौलिक अधिकार प्रदान करता है। समानता, स्वतंत्रता और न्याय लोकतांत्रिक समाज के महत्वपूर्ण आधार हैं। संसद कानून बनाती है; कार्यपालिका उन्हें लागू करती है। न्यायपालिका संविधान की व्याख्या करती है और अधिकारों की रक्षा करती है।",
      "ਭਾਰਤ ਦਾ ਸੰਵਿਧਾਨ ਨਾਗਰਿਕਾਂ ਨੂੰ ਮੌਲਿਕ ਅਧਿਕਾਰ ਦਿੰਦਾ ਹੈ। ਸਮਾਨਤਾ, ਆਜ਼ਾਦੀ ਅਤੇ ਨਿਆਂ ਲੋਕਤੰਤਰਿਕ ਸਮਾਜ ਦੇ ਮਹੱਤਵਪੂਰਨ ਆਧਾਰ ਹਨ। ਸੰਸਦ ਕਾਨੂੰਨ ਬਣਾਉਂਦੀ ਹੈ; ਕਾਰਜਪਾਲਿਕਾ ਉਨ੍ਹਾਂ ਨੂੰ ਲਾਗੂ ਕਰਦੀ ਹੈ। ਨਿਆਂਪਾਲਿਕਾ ਸੰਵਿਧਾਨ ਦੀ ਵਿਆਖਿਆ ਕਰਦੀ ਹੈ ਅਤੇ ਅਧਿਕਾਰਾਂ ਦੀ ਰੱਖਿਆ ਕਰਦੀ ਹੈ।",
      "The Constitution of India provides fundamental rights. Equality, liberty and justice are important foundations of a democratic society. Parliament makes laws; the executive implements them. The judiciary interprets the Constitution and protects rights.",
    ),
    hard: text(
      "अभ्यास रिपोर्ट: दिनांक 04-10-2026; कुल प्रश्न 125, सही उत्तर 98 (78.4%)। शिक्षक ने कहा, “प्रत्येक त्रुटि का कारण समझना आवश्यक है।” कृषि, उद्योग तथा सेवाओं के उत्पादन में वृद्धि आर्थिक विकास से संबंधित है; किंतु शिक्षा, स्वास्थ्य और आय-वितरण के संकेतकों का विश्लेषण भी करना चाहिए।",
      "ਅਭਿਆਸ ਰਿਪੋਰਟ: ਮਿਤੀ 04-10-2026; ਕੁੱਲ ਸਵਾਲ 125, ਸਹੀ ਉੱਤਰ 98 (78.4%)। ਅਧਿਆਪਕ ਨੇ ਕਿਹਾ, “ਹਰੇਕ ਗ਼ਲਤੀ ਦਾ ਕਾਰਨ ਸਮਝਣਾ ਜ਼ਰੂਰੀ ਹੈ।” ਖੇਤੀਬਾੜੀ, ਉਦਯੋਗ ਅਤੇ ਸੇਵਾਵਾਂ ਦੇ ਉਤਪਾਦਨ ਵਿੱਚ ਵਾਧਾ ਆਰਥਿਕ ਵਿਕਾਸ ਨਾਲ ਸਬੰਧਤ ਹੈ; ਪਰ ਸਿੱਖਿਆ, ਸਿਹਤ ਅਤੇ ਆਮਦਨ ਦੀ ਵੰਡ ਦੇ ਸੂਚਕਾਂ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਵੀ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ।",
      "Practice report: 04-10-2026; total questions: 125, correct: 98 (78.4%). The teacher said, “Understand the reason for each error.” Growth in agricultural, industrial and service output concerns economic development; education, health and income-distribution indicators also require analysis.",
    ),
  };
  // Typing clock: only ticks while typing view is active (fixes B-5)
  useEffect(() => {
    if (view !== "typing") return;
    const timer = setInterval(() => setClock(Date.now()), 1000);
    return () => clearInterval(timer);
  }, [view]);
  const sample = tr(typingSamples[typeLevel]),
    characters = getGraphemes(typed),
    expected = getGraphemes(sample),
    correctChars = characters.filter((c, i) => c === expected[i]).length,
    elapsedMs = typeStarted ? clock - typeStarted : 0,
    minutes = elapsedMs > 3000 ? elapsedMs / 60000 : null,
    uncorrectedErrors = Math.max(0, characters.length - correctChars),
    netWpm = minutes
      ? Math.max(0, Math.round(((characters.length / 5) - uncorrectedErrors) / minutes))
      : "—";
  const typing = (
    <>
      <div className="intro">
        <h1>{lab("typing")}</h1>
        <p>
          {tr(
            text(
              "शुद्धता पहले, गति बाद में। अपने कीबोर्ड लेआउट पर अभ्यास करें।",
              "ਸ਼ੁੱਧਤਾ ਪਹਿਲਾਂ, ਗਤੀ ਬਾਅਦ ਵਿੱਚ। ਆਪਣੇ ਕੀਬੋਰਡ ਲੇਆਉਟ ਉੱਤੇ ਅਭਿਆਸ ਕਰੋ।",
              "Accuracy first, speed second. Practise with your keyboard layout.",
            ),
          )}
        </p>
      </div>
      <div className="alert" style={{ margin: "14px 0", fontSize: "13px" }}>
        <strong>{tr(text("आधिकारिक भर्ती मानक (PSSSB विज्ञापन 15/2022):", "ਅਧਿਕਾਰਤ ਭਰਤੀ ਮਾਪਦੰਡ (PSSSB ਇਸ਼ਤਿਹਾਰ 15/2022):", "Official Recruitment Standard (PSSSB Advt. 15/2022):"))}</strong>{" "}
        {tr(
          text(
            "पंजाबी टाइपिंग: 30 शब्द/मिनट, अधिकतम 8% त्रुटि सीमा (92% शुद्धता)। फॉन्ट व लेआउट: Unicode Raavi InScript। यह अभ्यास उपकरण है; वास्तविक परीक्षा केंद्र सॉफ्टवेयर के अनुसार अभ्यास करें।",
            "ਪੰਜਾਬੀ ਟਾਈਪਿੰਗ: 30 ਸ਼ਬਦ/ਮਿੰਟ, ਵੱਧ ਤੋਂ ਵੱਧ 8% ਗ਼ਲਤੀਆਂ (92% ਸ਼ੁੱਧਤਾ)। ਫੌਂਟ ਤੇ ਲੇਆਉਟ: Unicode Raavi InScript। ਇਹ ਅਭਿਆਸ ਟੂਲ ਹੈ; ਅਸਲ ਪ੍ਰੀਖਿਆ ਕੇਂਦਰ ਸਾਫਟਵੇਅਰ ਅਨੁਸਾਰ ਅਭਿਆਸ ਕਰੋ।",
            "Punjabi typing: 30 WPM, maximum 8% error allowance (92% accuracy). Font & layout: Unicode Raavi InScript. This is a practice tool; verify test-centre software map.",
          ),
        )}
      </div>
      <div className="filter-row">
        {["easy", "medium", "hard"].map((level, i) => {
          const count = tr(typingSamples[level]).trim().split(/\s+/).filter(Boolean).length;
          return (
            <button
              className={typeLevel === level ? "selected" : ""}
              key={level}
              onClick={() => {
                setTypeLevel(level);
                setTyped("");
                setTypeStarted(null);
              }}
            >
              {tr(
                [
                  text(`आसान (${count} शब्द)`, `ਸੌਖਾ (${count} ਸ਼ਬਦ)`, `Easy (${count} words)`),
                  text(`मध्यम (${count} शब्द)`, `ਦਰਮਿਆਨਾ (${count} ਸ਼ਬਦ)`, `Medium (${count} words)`),
                  text(`कठिन (${count} शब्द)`, `ਔਖਾ (${count} ਸ਼ਬਦ)`, `Hard (${count} words)`),
                ][i],
              )}
            </button>
          );
        })}
      </div>
      <div className="panel">
        <p className="typing-passage">
          {expected.map((c, i) => (
            <span
              key={i}
              className={
                i < characters.length
                  ? characters[i] === c
                    ? "char-correct"
                    : "char-wrong"
                  : ""
              }
            >
              {c}
            </span>
          ))}
        </p>
        <textarea
          aria-label="Typing text"
          value={typed}
          onPaste={(e) => e.preventDefault()}
          onChange={(e) => {
            if (!typeStarted) setTypeStarted(Date.now());
            setTyped(e.target.value);
          }}
        />
        <div className="typing-stats">
          <div>
            <strong>{netWpm}</strong>
            <span>Net WPM</span>
          </div>
          <div>
            <strong>
              {characters.length
                ? Math.round((correctChars / characters.length) * 100)
                : 100}
              %
            </strong>
            <span>{tr(text("शुद्धता", "ਸ਼ੁੱਧਤਾ", "Accuracy"))}</span>
          </div>
          <div>
            <strong>{characters.length - correctChars}</strong>
            <span>{tr(text("गलतियाँ", "ਗ਼ਲਤੀਆਂ", "Errors"))}</span>
          </div>
        </div>
        {characters.length >= expected.length && (
          <div className="alert success" style={{ margin: "16px 0" }}>
            {tr(
              text(
                "बधाई! आपने यह टाइपिंग टेस्ट सफलतापूर्वक पूरा किया।",
                "ਵਧਾਈਆਂ! ਤੁਸੀਂ ਇਹ ਟਾਈਪਿੰਗ ਟੈਸਟ ਸਫ਼ਲਤਾਪੂਰਵਕ ਪੂਰਾ ਕੀਤਾ।",
                "Congratulations! You completed this typing test successfully.",
              ),
            )}
          </div>
        )}
        <button
          onClick={() => {
            setTyped("");
            setTypeStarted(null);
          }}
        >
          {tr(text("दोबारा शुरू करें", "ਮੁੜ ਸ਼ੁਰੂ ਕਰੋ", "Restart"))}
        </button>
      </div>
      <div className="source-note">
        {tr(
          text(
            "यह Unicode अभ्यास है। भर्ती के फॉन्ट/लेआउट और आधिकारिक speed नियम अलग हो सकते हैं। WPM = अक्षर ÷ 5 ÷ मिनट।",
            "ਇਹ Unicode ਅਭਿਆਸ ਹੈ। ਭਰਤੀ ਦੇ ਫੌਂਟ/ਲੇਆਉਟ ਅਤੇ ਅਧਿਕਾਰਤ speed ਨਿਯਮ ਵੱਖ ਹੋ ਸਕਦੇ ਹਨ। WPM = ਅੱਖਰ ÷ 5 ÷ ਮਿੰਟ।",
            "This is Unicode practice. Recruitment font/layout and official speed rules may differ. WPM = characters ÷ 5 ÷ minutes.",
          ),
        )}
      </div>
    </>
  );

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const focusView = (
    <>
      <div className="intro">
        <h1>{lab("focus")}</h1>
        <p>
          {tr(
            text(
              "लाइब्रेरी में ध्यान केंद्रित करें, स्क्रीन ऑन रखें और तनाव दूर करने के लिए प्राणायाम करें।",
              "ਲਾਇਬ੍ਰੇਰੀ ਵਿੱਚ ਧਿਆਨ ਕੇਂਦਰਿਤ ਕਰੋ, ਸਕ੍ਰੀਨ ਆਨ ਰੱਖੋ ਅਤੇ ਤਣਾਅ ਦੂਰ ਕਰਨ ਲਈ ਪ੍ਰਾਣਾਯਾਮ ਕਰੋ।",
              "Deep focus timer for library desk sessions, screen wake-lock, and calming breathwork.",
            ),
          )}
        </p>
      </div>

      <div className="tabs">
        <button
          className={focusMode === "pomodoro" ? "active" : ""}
          onClick={() => {
            setFocusMode("pomodoro");
            setFocusSecs(25 * 60);
            setFocusPhase("work");
            setFocusActive(false);
          }}
        >
          {tr(text("पोमोडोरो (25/5 मिनट)", "ਪੋਮੋਡੋਰੋ (25/5 ਮਿੰਟ)", "Pomodoro (25/5m)"))}
        </button>
        <button
          className={focusMode === "deep" ? "active" : ""}
          onClick={() => {
            setFocusMode("deep");
            setFocusSecs(50 * 60);
            setFocusPhase("work");
            setFocusActive(false);
          }}
        >
          {tr(text("डीप स्टडी (50/10 मिनट)", "ਡੀਪ ਸਟੱਡੀ (50/10 ਮਿੰਟ)", "Deep Study (50/10m)"))}
        </button>
        <button
          className={focusMode === "breathe" ? "active" : ""}
          onClick={() => {
            setFocusMode("breathe");
            setFocusActive(true);
            setBreathePhase(0);
            setBreatheSecs(4);
          }}
        >
          {tr(text("बॉक्स ब्रीदिंग (4-4-4-4 ध्यान)", "ਬਾਕਸ ਬ੍ਰੀਦਿੰਗ (4-4-4-4 ਧਿਆਨ)", "Box Breathing (4-4-4-4 Calm)"))}
        </button>
      </div>

      {focusMode !== "breathe" ? (
        <div className="panel" style={{ textAlign: "center", padding: "36px 20px" }}>
          <div>
            <span className={`timer-phase-pill ${focusPhase === "work" ? "timer-phase-work" : "timer-phase-break"}`}>
              {focusPhase === "work"
                ? tr(text("📖 अध्ययन सत्र (Study Focus)", "📖 ਪੜ੍ਹਾਈ ਸੈਸ਼ਨ (Study Focus)", "📖 Study Session"))
                : tr(text("☕ विश्राम (Short Break)", "☕ ਵਿਸ਼ਰਾਮ (Short Break)", "☕ Rest Break"))}
            </span>
          </div>

          <div className="timer-display">{formatTimer(focusSecs)}</div>

          <div className="row" style={{ justifyContent: "center", gap: 14 }}>
            <button
              className="primary"
              style={{ minWidth: 120 }}
              onClick={() => setFocusActive(!focusActive)}
            >
              {focusActive ? <Pause size={17} /> : <Play size={17} />}
              {focusActive
                ? tr(text("रोकें", "ਰੋਕੋ", "Pause"))
                : tr(text("शुरू करें", "ਸ਼ੁਰੂ ਕਰੋ", "Start"))}
            </button>
            <button
              onClick={() => {
                setFocusActive(false);
                setFocusSecs(focusMode === "pomodoro" ? 25 * 60 : 50 * 60);
                setFocusPhase("work");
              }}
            >
              <RotateCcw size={17} />
              {tr(text("रीसेट", "ਰੀਸੈਟ", "Reset"))}
            </button>
          </div>

          <div className="row" style={{ justifyContent: "center", marginTop: 24, gap: 12 }}>
            <button
              className={wakeLockActive ? "primary" : ""}
              onClick={toggleWakeLock}
              title="Prevents screen from sleeping while reading notes"
            >
              <Sun size={17} />
              {wakeLockActive
                ? tr(text("स्क्रीन ऑन है ✓", "ਸਕ੍ਰੀਨ ਆਨ ਹੈ ✓", "Screen Awake ✓"))
                : tr(text("स्क्रीन ऑन रखें (Wake Lock)", "ਸਕ੍ਰੀਨ ਆਨ ਰੱਖੋ (Wake Lock)", "Keep Screen Awake"))}
            </button>

            <button
              onClick={() => {
                setAmbientAudio((prev) => (prev === "none" ? "brown" : prev === "brown" ? "tone" : "none"));
              }}
            >
              {ambientAudio === "none" ? <VolumeX size={17} /> : <Volume2 size={17} />}
              {ambientAudio === "none"
                ? tr(text("शांत पृष्ठभूमि ध्वनि", "ਸ਼ਾਂਤ ਪਿੱਠਭੂਮੀ ਆਵਾਜ਼", "Ambient Sound: Off"))
                : ambientAudio === "brown"
                  ? tr(text("ब्राउन नॉइज़ (बारिश)", "ਬ੍ਰਾਊਨ ਨੋਇਸ (ਮੀਂਹ)", "Rain / Brown Noise"))
                  : tr(text("432Hz शांत स्वर", "432Hz ਸ਼ਾਂਤ ਸੁਰ", "432Hz Calm Tone"))}
            </button>
          </div>
          <p className="muted" style={{ fontSize: 13, marginTop: 16 }}>
            {tr(
              text(
                "ध्वनि और टाइमर आपके ब्राउज़र में 100% ऑफ़लाइन कार्य करते हैं। कोई बाहरी इंटरनेट की आवश्यकता नहीं।",
                "ਆਵਾਜ਼ ਅਤੇ ਟਾਈਮਰ ਤੁਹਾਡੇ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ 100% ਆਫ਼ਲਾਈਨ ਚੱਲਦੇ ਹਨ। ਕਿਸੇ ਬਾਹਰੀ ਇੰਟਰਨੈੱਟ ਦੀ ਲੋੜ ਨਹੀਂ।",
                "Audio and timer work 100% offline directly in your browser. No external internet required.",
              ),
            )}
          </p>
        </div>
      ) : (
        <div className="panel breathe-box">
          <div
            className={`breathe-circle ${
              breathePhase === 0
                ? "breathe-inhale"
                : breathePhase === 1
                  ? "breathe-hold-full"
                  : breathePhase === 2
                    ? "breathe-exhale"
                    : "breathe-hold-empty"
            }`}
          >
            <span className="pacer-count">{breatheSecs}</span>
            <span className="pacer-label">
              {breathePhase === 0
                ? tr(text("सांस लें", "ਸਾਹ ਲਵੋ", "Inhale"))
                : breathePhase === 1
                  ? tr(text("रोकें", "ਰੋਕੋ", "Hold"))
                  : breathePhase === 2
                    ? tr(text("छोड़ें", "ਛੱਡੋ", "Exhale"))
                    : tr(text("विश्राम", "ਸ਼ਾਂਤ ਰਹੋ", "Rest"))}
            </span>
          </div>

          <div style={{ textAlign: "center", marginTop: 24 }}>
            <h3>
              {breathePhase === 0
                ? tr(text("1. गहरी सांस अंदर लें (4 सेकंड)", "1. ਡੂੰਘਾ ਸਾਹ ਅੰਦਰ ਲਵੋ (4 ਸਕਿੰਟ)", "1. Inhale deeply (4s)"))
                : breathePhase === 1
                  ? tr(text("2. सांस रोककर रखें (4 सेकंड)", "2. ਸਾਹ ਰੋਕ ਕੇ ਰੱਖੋ (4 ਸਕਿੰਟ)", "2. Hold your breath (4s)"))
                  : breathePhase === 2
                    ? tr(text("3. सांस धीरे-धीरे छोड़ें (4 सेकंड)", "3. ਸਾਹ ਹੌਲੀ-ਹੌਲੀ ਛੱਡੋ (4 ਸਕਿੰਟ)", "3. Exhale smoothly (4s)"))
                    : tr(text("4. शांत रहें (4 सेकंड)", "4. ਸ਼ਾਂਤ ਤੇ ਰਿਲੈਕਸ ਰਹੋ (4 ਸਕਿੰਟ)", "4. Rest calmly (4s)"))}
            </h3>
            <p className="muted" style={{ maxWidth: 500, margin: "8px auto" }}>
              {tr(
                text(
                  "4-4-4-4 बॉक्स ब्रीदिंग तकनीक पैरासिम्पेथेटिक तंत्रिका तंत्र को सक्रिय कर परीक्षा से पूर्व तनाव और घबराहट को शांत करती है।",
                  "4-4-4-4 ਬਾਕਸ ਬ੍ਰੀਦਿੰਗ ਤਕਨੀਕ ਇਮਤਿਹਾਨ ਤੋਂ ਪਹਿਲਾਂ ਘਬਰਾਹਟ ਅਤੇ ਤਣਾਅ ਨੂੰ ਸ਼ਾਂਤ ਕਰਕੇ ਮਾਨਸਿਕ ਧਿਆਨ ਵਧਾਉਂਦੀ ਹੈ।",
                  "Box breathing (4-4-4-4) stimulates parasympathetic response to reduce pre-exam anxiety and clear mental fatigue.",
                ),
              )}
            </p>
            <p style={{ fontWeight: 600 }}>
              {tr(text("पूरे किए गए चक्र:", "ਪੂਰੇ ਕੀਤੇ ਗਏ ਗੇੜ:", "Completed cycles:"))} {breatheCycles}
            </p>

            <div className="row" style={{ justifyContent: "center", marginTop: 12 }}>
              <button
                className="primary"
                onClick={() => setFocusActive(!focusActive)}
              >
                {focusActive ? <Pause size={17} /> : <Play size={17} />}
                {focusActive
                  ? tr(text("रोकें", "ਰੋਕੋ", "Pause"))
                  : tr(text("पुनः शुरू करें", "ਮੁੜ ਸ਼ੁਰੂ ਕਰੋ", "Resume"))}
              </button>
              <button
                onClick={() => {
                  setBreathePhase(0);
                  setBreatheSecs(4);
                  setBreatheCycles(0);
                }}
              >
                <RotateCcw size={17} />
                {tr(text("रीसेट", "ਰੀਸੈਟ", "Reset"))}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="source-note">
        {tr(
          text(
            "नोट: यह विश्राम और एकाग्रता हेतु स्वनिर्मित अभ्यास है। इसे किसी चिकित्सकीय उपचार का विकल्प न समझें।",
            "ਨੋਟ: ਇਹ ਸ਼ਾਂਤੀ ਅਤੇ ਇਕਾਗਰਤਾ ਲਈ ਆਪਣਾ ਬਣਾਇਆ ਅਭਿਆਸ ਹੈ। ਇਸਨੂੰ ਕਿਸੇ ਡਾਕਟਰੀ ਇਲਾਜ ਦਾ ਬਦਲ ਨਾ ਸਮਝੋ।",
            "Note: Designed for study relaxation and focus. Not a substitute for medical diagnosis or clinical treatment.",
          ),
        )}
      </div>
    </>
  );

  // Physical criteria calculations — Punjab Police Recruitment Rules
  // SI has stricter height / same run standard; constable = default
  const minHeightReq =
    physPost === "si"
      ? physGender === "male" ? 173.0 : 160.0
      : physGender === "male" ? 170.2 : 157.5;
  const isHeightPass = physHeight >= minHeightReq;
  const heightDiff = (physHeight - minHeightReq).toFixed(1);

  const totalRunSecs = physRunMins * 60 + physRunSecs;
  // SI 1600m limit same as constable per Punjab Police 2021 rules; may vary by notification
  const maxRunSecsAllowed = physGender === "male" ? 6 * 60 + 30 : 4 * 60 + 30;
  const isRunPass = totalRunSecs <= maxRunSecsAllowed;
  const runDiffSecs = totalRunSecs - maxRunSecsAllowed;

  const minLongJump = physGender === "male" ? 3.8 : 3.0;
  const isLongJumpPass = physLongJump >= minLongJump;

  const minHighJump = physGender === "male" ? 1.15 : 0.95;
  const isHighJumpPass = physHighJump >= minHighJump;

  const allPhysicalPass = isHeightPass && isRunPass && isLongJumpPass && isHighJumpPass;

  const physicalView = (
    <>
      <div className="intro">
        <h1>{lab("physical")}</h1>
        <p>
          {tr(
            text(
              "पंजाब पुलिस (कांस्टेबल व सब-इंस्पेक्टर) शारीरिक माप (PMT) और दक्षता परीक्षा (PST) कैलकुलेटर व 6-सप्ताह तैयारी रोडमैप।",
              "ਪੰਜਾਬ ਪੁਲਿਸ (ਕਾਂਸਟੇਬਲ ਤੇ ਸਬ-ਇੰਸਪੈਕਟਰ) ਸਰੀਰਕ ਮਾਪ (PMT) ਅਤੇ ਸਕ੍ਰੀਨਿੰਗ ਟੈਸਟ (PST) ਕੈਲਕੁਲੇਟਰ ਤੇ 6-ਹਫ਼ਤੇ ਦਾ ਰੋਡਮੈਪ।",
              "Punjab Police Constable & SI Physical Measurement Test (PMT) & Physical Screening Test (PST) calculator and 6-week training roadmap.",
            ),
          )}
        </p>
      </div>

      <div className="tabs">
        <button
          className={physTab === "calculator" ? "active" : ""}
          onClick={() => setPhysTab("calculator")}
        >
          {tr(text("योग्यता कैलकुलेटर", "ਯੋਗਤਾ ਕੈਲਕੁਲੇਟਰ", "Eligibility Calculator"))}
        </button>
        <button
          className={physTab === "standards" ? "active" : ""}
          onClick={() => setPhysTab("standards")}
        >
          {tr(text("आधिकारिक मानक नियम", "ਅਧਿਕਾਰਤ ਮਾਪਦੰਡ ਨਿਯਮ", "Official Standards Matrix"))}
        </button>
        <button
          className={physTab === "roadmap" ? "active" : ""}
          onClick={() => setPhysTab("roadmap")}
        >
          {tr(text("6-सप्ताह का फिटनेस रोडमैप", "6-ਹਫ਼ਤਿਆਂ ਦਾ ਫਿਟਨੈਸ ਰੋਡਮੈਪ", "6-Week Fitness Roadmap"))}
        </button>
      </div>

      {physTab === "calculator" && (
        <>
          <div className="panel">
            <h3>{tr(text("उम्मीदवार का विवरण दर्ज करें", "ਉਮੀਦਵਾਰ ਦੇ ਵੇਰਵੇ ਦਰਜ ਕਰੋ", "Enter Candidate Details"))}</h3>
            <div className="calc-grid">
              <label>
                {tr(text("लिंग (Gender)", "ਲਿੰਗ (Gender)", "Gender"))}
                <select
                  value={physGender}
                  onChange={(e) => setPhysGender(e.target.value as "male" | "female")}
                >
                  <option value="male">{tr(text("पुरुष (Male)", "ਪੁਰਸ਼ (Male)", "Male"))}</option>
                  <option value="female">{tr(text("महिला (Female)", "ਮਹਿਲਾ (Female)", "Female"))}</option>
                </select>
              </label>

              <label>
                {tr(text("पद (Post)", "ਅਹੁਦਾ (Post)", "Post"))}
                <select
                  value={physPost}
                  onChange={(e) => setPhysPost(e.target.value as "constable" | "si")}
                >
                  <option value="constable">{tr(text("पंजाब पुलिस कांस्टेबल", "ਪੰਜਾਬ ਪੁਲਿਸ ਕਾਂਸਟੇਬਲ", "Punjab Police Constable"))}</option>
                  <option value="si">{tr(text("पंजाब पुलिस सब-इंस्पेक्टर (SI)", "ਪੰਜਾਬ ਪੁਲਿਸ ਸਬ-ਇੰਸਪੈਕਟਰ (SI)", "Punjab Police Sub-Inspector (SI)"))}</option>
                </select>
              </label>

              <label>
                {tr(text("आपकी लंबाई (सेमी में)", "ਤੁਹਾਡਾ ਕੱਦ (ਸੈਂਟੀਮੀਟਰ ਵਿੱਚ)", "Your Height (in cm)"))}
                <input
                  type="number"
                  step="0.5"
                  min="130"
                  max="220"
                  value={physHeight}
                  onChange={(e) => setPhysHeight(Number(e.target.value))}
                />
              </label>
            </div>

            <h4 style={{ marginTop: 20 }}>
              {tr(text("दौड़ और कूद का अभ्यास समय/दूरी", "ਦੌੜ ਅਤੇ ਛਾਲ ਦਾ ਅਭਿਆਸ ਸਮਾਂ/ਦੂਰੀ", "Practice Run & Jump Performance"))}
            </h4>
            <div className="calc-grid">
              <label>
                {physGender === "male"
                  ? tr(text("1600 मीटर दौड़ का समय (मिनट : सेकंड)", "1600 ਮੀਟਰ ਦੌੜ ਦਾ ਸਮਾਂ (ਮਿੰਟ : ਸਕਿੰਟ)", "1600m Race Time (min : sec)"))
                  : tr(text("800 मीटर दौड़ का समय (मिनट : सेकंड)", "800 ਮੀਟਰ ਦੌੜ ਦਾ ਸਮਾਂ (ਮਿੰਟ : ਸਕਿੰਟ)", "800m Race Time (min : sec)"))}
                <div className="row" style={{ gap: 8 }}>
                  <input
                    type="number"
                    min="2"
                    max="15"
                    style={{ width: "80px" }}
                    value={physRunMins}
                    onChange={(e) => setPhysRunMins(Number(e.target.value))}
                  />
                  <span>:</span>
                  <input
                    type="number"
                    min="0"
                    max="59"
                    style={{ width: "80px" }}
                    value={physRunSecs}
                    onChange={(e) => setPhysRunSecs(Number(e.target.value))}
                  />
                </div>
              </label>

              <label>
                {tr(text("लंबी कूद (Long Jump - मीटर में)", "ਲੰਬੀ ਛਾਲ (Long Jump - ਮੀਟਰਾਂ ਵਿੱਚ)", "Long Jump (in metres)"))}
                <input
                  type="number"
                  step="0.05"
                  min="1.0"
                  max="7.0"
                  value={physLongJump}
                  onChange={(e) => setPhysLongJump(Number(e.target.value))}
                />
              </label>

              <label>
                {tr(text("ऊँची कूद (High Jump - मीटर में)", "ਉੱਚੀ ਛਾਲ (High Jump - ਮੀਟਰਾਂ ਵਿੱਚ)", "High Jump (in metres)"))}
                <input
                  type="number"
                  step="0.05"
                  min="0.5"
                  max="2.5"
                  value={physHighJump}
                  onChange={(e) => setPhysHighJump(Number(e.target.value))}
                />
              </label>
            </div>
          </div>

          <div className="panel" style={{ marginTop: 20 }}>
            <h3>{tr(text("शारीरिक मूल्यांकन परिणाम (Evaluation Results)", "ਸਰੀਰਕ ਮੁਲਾਂਕਣ ਨਤੀਜੇ (Evaluation Results)", "Evaluation Results"))}</h3>
            <div className="calc-grid">
              <div className="metric-card">
                <h4>{tr(text("ऊंचाई मापदंड (PMT Height)", "ਕੱਦ ਮਾਪਦੰਡ (PMT Height)", "PMT Height"))}</h4>
                <div className="metric-val">{physHeight} cm</div>
                <small className="muted">
                  {tr(text("न्यूनतम आवश्यक:", "ਘੱਟੋ-ਘੱਟ ਲੋੜੀਂਦਾ:", "Required Minimum:"))} {minHeightReq} cm ({physGender === "male" ? "5' 7\"" : "5' 2\""})
                </small>
                {isHeightPass ? (
                  <span className="badge-pass">
                    {tr(text(`✓ योग्य (+${heightDiff} cm अधिक)`, `✓ ਯੋਗ (+${heightDiff} cm ਵੱਧ)`, `✓ Eligible (+${heightDiff} cm)`))}
                  </span>
                ) : (
                  <span className="badge-fail">
                    {tr(text(`✕ अयोग्य (${Math.abs(Number(heightDiff))} cm कम)`, `✕ ਅਯੋਗ (${Math.abs(Number(heightDiff))} cm ਘੱਟ)`, `✕ Not Eligible (${Math.abs(Number(heightDiff))} cm short)`))}
                  </span>
                )}
              </div>

              <div className="metric-card">
                <h4>
                  {physGender === "male"
                    ? tr(text("1600 मीटर दौड़ (PST Run)", "1600 ਮੀਟਰ ਦੌੜ (PST Run)", "1600m Run"))
                    : tr(text("800 मीटर दौड़ (PST Run)", "800 ਮੀਟਰ ਦੌੜ (PST Run)", "800m Run"))}
                </h4>
                <div className="metric-val">{physRunMins}m {physRunSecs}s</div>
                <small className="muted">
                  {tr(text("अधिकतम सीमा:", "ਵੱਧ ਤੋਂ ਵੱਧ ਸਮਾਂ:", "Allowed Limit:"))} {physGender === "male" ? "6 min 30 sec" : "4 min 30 sec"}
                </small>
                {isRunPass ? (
                  <span className="badge-pass">
                    {tr(text(`✓ पास (${Math.abs(runDiffSecs)}s पहले)`, `✓ ਪਾਸ (${Math.abs(runDiffSecs)}s ਪਹਿਲਾਂ)`, `✓ Passed (${Math.abs(runDiffSecs)}s to spare)`))}
                  </span>
                ) : (
                  <span className="badge-fail">
                    {tr(text(`✕ समय अधिक (+${runDiffSecs}s देरी)`, `✕ ਸਮਾਂ ਵੱਧ (+${runDiffSecs}s ਦੇਰੀ)`, `✕ Over Time (+${runDiffSecs}s over)`))}
                  </span>
                )}
              </div>

              <div className="metric-card">
                <h4>{tr(text("लंबी कूद (Long Jump - 3 प्रयास)", "ਲੰਬੀ ਛਾਲ (Long Jump - 3 ਮੌਕੇ)", "Long Jump (3 attempts)"))}</h4>
                <div className="metric-val">{physLongJump} m</div>
                <small className="muted">
                  {tr(text("न्यूनतम आवश्यक:", "ਘੱਟੋ-ਘੱਟ ਦੂਰੀ:", "Minimum Required:"))} {minLongJump} m
                </small>
                {isLongJumpPass ? (
                  <span className="badge-pass">{tr(text("✓ पास", "✓ ਪਾਸ", "✓ Passed"))}</span>
                ) : (
                  <span className="badge-fail">
                    {tr(text(`✕ सुधार चाहिए (${(minLongJump - physLongJump).toFixed(2)}m कम)`, `✕ ਸੁਧਾਰ ਲੋੜੀਂਦਾ (${(minLongJump - physLongJump).toFixed(2)}m ਘੱਟ)`, `✕ Needs Improvement (${(minLongJump - physLongJump).toFixed(2)}m short)`))}
                  </span>
                )}
              </div>

              <div className="metric-card">
                <h4>{tr(text("ऊँची कूद (High Jump - 3 प्रयास)", "ਉੱਚੀ ਛਾਲ (High Jump - 3 ਮੌਕੇ)", "High Jump (3 attempts)"))}</h4>
                <div className="metric-val">{physHighJump} m</div>
                <small className="muted">
                  {tr(text("न्यूनतम आवश्यक:", "ਘੱਟੋ-ਘੱਟ ਉਚਾਈ:", "Minimum Required:"))} {minHighJump} m
                </small>
                {isHighJumpPass ? (
                  <span className="badge-pass">{tr(text("✓ पास", "✓ ਪਾਸ", "✓ Passed"))}</span>
                ) : (
                  <span className="badge-fail">
                    {tr(text(`✕ सुधार चाहिए (${(minHighJump - physHighJump).toFixed(2)}m कम)`, `✕ ਸੁਧਾਰ ਲੋੜੀਂਦਾ (${(minHighJump - physHighJump).toFixed(2)}m ਘੱਟ)`, `✕ Needs Improvement (${(minHighJump - physHighJump).toFixed(2)}m short)`))}
                  </span>
                )}
              </div>
            </div>

            <div className={`alert ${allPhysicalPass ? "success" : ""}`} style={{ marginTop: 16 }}>
              <strong>
                {allPhysicalPass
                  ? tr(text("बधाई! आपके वर्तमान आंकड़े पंजाब पुलिस भर्ती के सभी मानकों के अनुसार योग्य हैं।", "ਵਧਾਈਆਂ! ਤੁਹਾਡੇ ਮੌਜੂਦਾ ਅੰਕੜੇ ਪੰਜਾਬ ਪੁਲਿਸ ਭਰਤੀ ਦੇ ਸਾਰੇ ਮਾਪਦੰਡਾਂ ਅਨੁਸਾਰ ਯੋਗ ਹਨ।", "Congratulations! Your current stats meet all official Punjab Police physical benchmarks."))
                  : tr(text("सुझाव: लाल रंग से चिह्नित मानकों पर प्रतिदिन 6-सप्ताह के रोडमैप अनुसार अभ्यास करें।", "ਸੁਝਾਅ: ਲਾਲ ਰੰਗ ਨਾਲ ਦਰਸਾਏ ਮਾਪਦੰਡਾਂ 'ਤੇ ਰੋਜ਼ਾਨਾ 6-ਹਫ਼ਤੇ ਦੇ ਰੋਡਮੈਪ ਅਨੁਸਾਰ ਅਭਿਆਸ ਕਰੋ।", "Guidance: Focus daily on parameters marked in red following the 6-week training roadmap below."))}
              </strong>
            </div>
          </div>
        </>
      )}

      {physTab === "standards" && (
        <div className="panel">
          <h3>{tr(text("पंजाब पुलिस आधिकारिक शारीरिक मानक (PMT & PST Rules)", "ਪੰਜਾਬ ਪੁਲਿਸ ਅਧਿਕਾਰਤ ਸਰੀਰਕ ਮਾਪਦੰਡ (PMT & PST Rules)", "Official Punjab Police Physical Standards"))}</h3>
          <p className="muted">
            {tr(text("पंजाब पुलिस भर्ती बोर्ड (Advt. Constable & SI Rules) द्वारा निर्धारित आधिकारिक मापदंड:", "ਪੰਜਾਬ ਪੁਲਿਸ ਭਰਤੀ ਬੋਰਡ ਦੁਆਰਾ ਨਿਰਧਾਰਿਤ ਅਧਿਕਾਰਤ ਮਾਪਦੰਡ:", "Official criteria formulated by Punjab Police Recruitment Board:"))}
          </p>

          <table style={{ width: "100%", borderCollapse: "collapse", margin: "16px 0" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid var(--line)", textAlign: "left" }}>
                <th style={{ padding: "10px" }}>{tr(text("मापदंड (Event)", "ਮਾਪਦੰਡ (Event)", "Event"))}</th>
                <th style={{ padding: "10px" }}>{tr(text("पुरुष उम्मीदवार (Male)", "ਪੁਰਸ਼ ਉਮੀਦਵਾਰ (Male)", "Male Candidates"))}</th>
                <th style={{ padding: "10px" }}>{tr(text("महिला उम्मीदवार (Female)", "ਮਹਿਲਾ ਉਮੀਦਵਾਰ (Female)", "Female Candidates"))}</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid var(--line)" }}>
                <td style={{ padding: "10px", fontWeight: 600 }}>{tr(text("लंबाई (PMT Height)", "ਕੱਦ (PMT Height)", "Height"))}</td>
                <td style={{ padding: "10px" }}>5 Feet 7 Inches (170.2 cm)</td>
                <td style={{ padding: "10px" }}>5 Feet 2 Inches (157.5 cm)</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--line)" }}>
                <td style={{ padding: "10px", fontWeight: 600 }}>{tr(text("दौड़ (Running / Race)", "ਦੌੜ (Running / Race)", "Race"))}</td>
                <td style={{ padding: "10px" }}>1600 Metres in 6 min 30 sec (1 Chance)</td>
                <td style={{ padding: "10px" }}>800 Metres in 4 min 30 sec (1 Chance)</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--line)" }}>
                <td style={{ padding: "10px", fontWeight: 600 }}>{tr(text("लंबी कूद (Long Jump)", "ਲੰਬੀ ਛਾਲ (Long Jump)", "Long Jump"))}</td>
                <td style={{ padding: "10px" }}>3.80 Metres (3 Attempts)</td>
                <td style={{ padding: "10px" }}>3.00 Metres (3 Attempts)</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--line)" }}>
                <td style={{ padding: "10px", fontWeight: 600 }}>{tr(text("ऊँची कूद (High Jump)", "ਉੱਚੀ ਛਾਲ (High Jump)", "High Jump"))}</td>
                <td style={{ padding: "10px" }}>1.15 Metres (3 Attempts)</td>
                <td style={{ padding: "10px" }}>0.95 Metres (3 Attempts)</td>
              </tr>
            </tbody>
          </table>

          <div className="alert" style={{ marginTop: 16 }}>
            <strong>{tr(text("महत्वपूर्ण नियम:", "ਮਹੱਤਵਪੂਰਨ ਨਿਯਮ:", "Critical Rule:"))}</strong>{" "}
            {tr(
              text(
                "शारीरिक दक्षता परीक्षा (PST) केवल क्वालीफाइंग प्रकृति की होती है। इसके अंक मेरिट में नहीं जुड़ते, परंतु इसे पास करना अनिवार्य है। दौड़ में केवल 1 अवसर मिलता है जबकि लंबी कूद और ऊँची कूद में 3 अवसर मिलते हैं।",
                "ਸਰੀਰਕ ਸਕ੍ਰੀਨਿੰਗ ਟੈਸਟ (PST) ਸਿਰਫ਼ ਕੁਆਲੀਫਾਇੰਗ ਹੁੰਦਾ ਹੈ। ਇਸਦੇ ਅੰਕ ਮੈਰਿਟ ਵਿੱਚ ਨਹੀਂ ਜੁੜਦੇ ਪਰ ਪਾਸ ਕਰਨਾ ਲਾਜ਼ਮੀ ਹੈ। ਦੌੜ ਲਈ 1 ਮੌਕਾ ਜਦਕਿ ਛਾਲਾਂ ਲਈ 3 ਮੌਕੇ ਮਿਲਦੇ ਹਨ।",
                "Physical Screening Test (PST) is strictly qualifying in nature. Marks do not count towards merit, but clearing all events is mandatory. Running has 1 attempt; jumps permit up to 3 attempts.",
              ),
            )}
          </div>
        </div>
      )}

      {physTab === "roadmap" && (
        <div className="panel">
          <h3>{tr(text("6-सप्ताह का वैज्ञानिक फिजिकल तैयारी रोडमैप", "6-ਹਫ਼ਤਿਆਂ ਦਾ ਵਿਗਿਆਨਕ ਸਰੀਰਕ ਤਿਆਰੀ ਰੋਡਮੈਪ", "6-Week Scientific Physical Preparation Roadmap"))}</h3>
          <p className="muted">
            {tr(text("अचानक दौड़ने से शिन स्प्लिंट्स या चोट से बचें। चरणबद्ध तरीके से स्टैमिना बनाएँ:", "ਅਚਾਨਕ ਦੌੜਨ ਨਾਲ ਪੈਰਾਂ ਵਿੱਚ ਦਰਦ ਜਾਂ ਸੱਟ ਤੋਂ ਬਚੋ। ਪੜਾਅਵਾਰ ਸਟੈਮਿਨਾ ਬਣਾਓ:", "Avoid shin splints and injury through structured progressive overload:"))}
          </p>

          <div className="roadmap-step">
            <strong>{tr(text("सप्ताह 1–2: एरोबिक बेस और स्ट्रेचिंग", "ਹਫ਼ਤਾ 1–2: ਐਰੋਬਿਕ ਬੇਸ ਅਤੇ ਸਟ੍ਰੈਚਿੰਗ", "Weeks 1–2: Aerobic Base & Mobility"))}</strong>
            <p style={{ margin: "4px 0", fontSize: 14 }}>
              {tr(
                text(
                  "प्रतिदिन 25-30 मिनट सामान्य गति से जॉगिंग। दौड़ने से पहले 10 मिनट वार्म-अप और बाद में काफ (पिंडली) व हैमस्ट्रिंग स्ट्रेचिंग। पानी की मात्रा 3-4 लीटर रखें।",
                  "ਰੋਜ਼ਾਨਾ 25-30 ਮਿੰਟ ਹੌਲੀ ਦੌੜ (ਜੌਗਿੰਗ)। ਦੌੜਨ ਤੋਂ ਪਹਿਲਾਂ 10 ਮਿੰਟ ਵਾਰਮ-ਅੱਪ ਅਤੇ ਬਾਅਦ ਵਿੱਚ ਖਿੱਚਾਅ (ਸਟ੍ਰੈਚਿੰਗ)। ਪਾਣੀ ਦੀ ਮਾਤਰਾ 3-4 ਲੀਟਰ ਰੱਖੋ।",
                  "Daily 25–30 min conversational jogging. 10 min dynamic warm-up before running; static calf/hamstring stretching post-run. Maintain 3-4L hydration.",
                ),
              )}
            </p>
          </div>

          <div className="roadmap-step">
            <strong>{tr(text("सप्ताह 3–4: 400 मीटर इंटरवल और जंप तकनीक", "ਹਫ਼ਤਾ 3–4: 400 ਮੀਟਰ ਇੰਟਰਵਲ ਅਤੇ ਛਾਲ ਤਕਨੀਕ", "Weeks 3–4: 400m Intervals & Jump Mechanics"))}</strong>
            <p style={{ margin: "4px 0", fontSize: 14 }}>
              {tr(
                text(
                  "ट्रैक पर 400 मीटर के 4 लैप (प्रत्येक लैप 90-95 सेकंड में, बीच में 2 मिनट आराम)। लंबी कूद के लिए रन-अप और टेक-ऑफ बोर्ड का अभ्यास। ऊँची कूद में सीज़र कट (Scissor technique) सीखें।",
                  "ਟ੍ਰੈਕ 'ਤੇ 400 ਮੀਟਰ ਦੇ 4 ਗੇੜ (ਹਰ ਗੇੜ 90-95 ਸਕਿੰਟਾਂ ਵਿੱਚ, ਵਿਚਕਾਰ 2 ਮਿੰਟ ਆਰਾਮ)। ਲੰਬੀ ਛਾਲ ਲਈ ਰਨ-ਅੱਪ ਅਤੇ ਟੇਕ-ਆਫ਼ ਬੋਰਡ ਦਾ ਅਭਿਆਸ।",
                  "4x400m track interval repeats (target 90-95s per lap with 2 min walking rest). Practice consistent run-up strides for long jump and scissor technique for high jump.",
                ),
              )}
            </p>
          </div>

          <div className="roadmap-step">
            <strong>{tr(text("सप्ताह 5: पूर्ण टेस्ट सिमुलेशन", "ਹਫ਼ਤਾ 5: ਪੂਰਾ ਟੈਸਟ ਸਿਮੂਲੇਸ਼ਨ", "Week 5: Full Mock Physical Trials"))}</strong>
            <p style={{ margin: "4px 0", fontSize: 14 }}>
              {tr(
                text(
                  "सप्ताह में 2 बार ठीक उसी समय (प्रातः 7:00 बजे) स्टॉपवॉच के साथ 1600m / 800m की वास्तविक ट्रायल लें। 3 प्रयासों में बिना फाउल के लंबी व ऊँची कूद पूरी करने का अभ्यास करें।",
                  "ਹਫ਼ਤੇ ਵਿੱਚ 2 ਵਾਰ ਉਸੇ ਸਮੇਂ (ਸਵੇਰੇ 7:00 ਵਜੇ) ਸਟਾਪਵਾਚ ਨਾਲ ਅਸਲ 1600m / 800m ਟ੍ਰਾਇਲ ਲਵੋ। 3 ਮੌਕਿਆਂ ਵਿੱਚ ਬਿਨਾਂ ਫ਼ਾਊਲ ਦੇ ਛਾਲਾਂ ਲਗਾਉਣ ਦਾ ਅਭਿਆਸ ਕਰੋ।",
                  "Run 2 full timed trials at the exact expected trial hour (e.g. 7:00 AM). Practice jump regulations strictly to eliminate foul strides.",
                ),
              )}
            </p>
          </div>

          <div className="roadmap-step">
            <strong>{tr(text("सप्ताह 6: टेपरिंग और परीक्षा पूर्व ताजगी", "ਹਫ਼ਤਾ 6: ਟੇਪਰਿੰਗ ਅਤੇ ਇਮਤਿਹਾਨ ਪੂਰਵ ਤਾਜ਼ਗੀ", "Week 6: Taper, Rest & Mental Readiness"))}</strong>
            <p style={{ margin: "4px 0", fontSize: 14 }}>
              {tr(
                text(
                  "दौड़ने की दूरी घटाकर केवल 15 मिनट हल्की जॉगिंग करें। मांसपेशियों को पूर्ण आराम दें। कार्ब्स और पर्याप्त नींद लें। परीक्षा के दिन भारी भोजन न करें, केवल केला या ओआरएस लें।",
                  "ਦੌੜਨ ਦੀ ਦੂਰੀ ਘਟਾ ਕੇ ਸਿਰਫ਼ 15 ਮਿੰਟ ਹਲਕੀ ਜੌਗਿੰਗ ਕਰੋ। ਮਾਸਪੇਸ਼ੀਆਂ ਨੂੰ ਪੂਰਾ ਆਰਾਮ ਦਿਓ। ਚੰਗੀ ਨੀਂਦ ਲਵੋ। ਟੈਸਟ ਵਾਲੇ ਦਿਨ ਹਲਕੀ ਖੁਰਾਕ ਰੱਖੋ।",
                  "Reduce volume to 15 min light strides. Prioritize muscle recovery, sound sleep, and balanced nutrition. Avoid heavy meals on test morning.",
                ),
              )}
            </p>
          </div>
        </div>
      )}

      <div className="source-note">
        {tr(
          text(
            "नोट: किसी भी तीव्र शारीरिक अभ्यास से पूर्व चिकित्सक से परामर्श लें। भर्ती बोर्ड के आधिकारिक विज्ञापन के नियम अंतिम और बाध्यकारी हैं।",
            "ਨੋਟ: ਕਿਸੇ ਵੀ ਤੇਜ਼ ਸਰੀਰਕ ਅਭਿਆਸ ਤੋਂ ਪਹਿਲਾਂ ਡਾਕਟਰ ਦੀ ਸਲਾਹ ਲਵੋ। ਭਰਤੀ ਬੋਰਡ ਦੇ ਅਧਿਕਾਰਤ ਇਸ਼ਤਿਹਾਰ ਦੇ ਨਿਯਮ ਅੰਤਿਮ ਅਤੇ ਲਾਜ਼ਮੀ ਹਨ।",
            "Note: Consult a physician before beginning intensive physical training. Official recruitment board notification rules remain authoritative.",
          ),
        )}
      </div>
    </>
  );

  const account = (
    <>
      <div className="intro">
        <h1>{lab("account")}</h1>
      </div>
      <div className="panel">
        <h2>
          {user?.displayName ||
            tr(
              text(
                "आपका अध्ययन अकाउंट",
                "ਤੁਹਾਡਾ ਅਧਿਐਨ ਅਕਾਊਂਟ",
                "Your study account",
              ),
            )}
        </h2>
        {user ? (
          <>
            <p>{user.email}</p>
            <span className="badge">{user.role}</span>
            <div className="account-stats">
              <div>
                <strong>{state.done.length}</strong>
                {tr(text("पाठ पढ़े", "ਪਾਠ ਪੜ੍ਹੇ", "lessons studied"))}
              </div>
              <div>
                <strong>
                  {Object.values(state.notes).filter((n) => n.trim()).length}
                </strong>
                {lab("notes")}
              </div>
              <div>
                <strong>{state.attempts.length}</strong>
                {tr(text("अभ्यास पूरे", "ਅਭਿਆਸ ਪੂਰੇ", "practice sessions"))}
              </div>
            </div>
            <a href={signOutPath} target="_top" className="button">
              <LogOut size={17} />
              {tr(text("साइन आउट", "ਸਾਈਨ ਆਊਟ", "Sign out"))}
            </a>
          </>
        ) : (
          <a href={signInPath} target="_top" className="button primary">
            {tr(
              text(
                "ChatGPT के साथ साइन इन करें",
                "ChatGPT ਨਾਲ ਸਾਈਨ ਇਨ ਕਰੋ",
                "Sign in with ChatGPT",
              ),
            )}
          </a>
        )}
        <button
          onClick={async () => {
            const notes: Record<string, string> = {};
            const done: string[] = [];
            for (const key of ["saathi-guest-state", "saathi-v1-state"]) {
              try {
                const old = JSON.parse(localStorage.getItem(key) || "{}");
                for (const [k, v] of Object.entries(old.notes || {})) {
                  if (typeof v === "string")
                    notes[k] = (notes[k] ? notes[k] + "\n\n" : "") + v;
                }
                done.push(...(old.done || []));
              } catch {}
            }
            if (!Object.keys(notes).length && !done.length) {
              setStatus(
                tr(
                  text(
                    "इस डिवाइस पर पुराने नोट्स नहीं मिले।",
                    "ਇਸ ਡਿਵਾਈਸ ਉੱਤੇ ਪੁਰਾਣੇ ਨੋਟਸ ਨਹੀਂ ਮਿਲੇ।",
                    "No old notes found on this device.",
                  ),
                ),
              );
              return;
            }
            await save({ action: "import", notes, done });
          }}
        >
          {tr(
            text(
              "इस डिवाइस के पुराने नोट्स जोड़ें",
              "ਇਸ ਡਿਵਾਈਸ ਦੇ ਪੁਰਾਣੇ ਨੋਟਸ ਜੋੜੋ",
              "Import previous device notes",
            ),
          )}
        </button>
        {/* Export data button (DPDP Act 2023 R-10) */}
        <button
          onClick={async () => {
            try {
              const res = await fetch("/api/account/export");
              if (!res.ok) throw new Error(await res.text());
              const blob = await res.blob();
              const a = document.createElement("a");
              a.href = URL.createObjectURL(blob);
              a.download = "exam-saathi-data.json";
              a.click();
              URL.revokeObjectURL(a.href);
            } catch {
              setError(tr(text("डेटा निर्यात नहीं हो सका।","ਡੇਟਾ ਨਿਰਯਾਤ ਨਹੀਂ ਹੋਇਆ।","Could not export data.")));
            }
          }}
        >
          <Download size={17} />
          {tr(text("अपना डेटा डाउनलोड करें","ਆਪਣਾ ਡੇਟਾ ਡਾਊਨਲੋਡ ਕਰੋ","Download my data"))}
        </button>
        <h3>
          {tr(
            text(
              "Sign-in और account",
              "ਸਾਈਨ-ਇਨ ਅਤੇ ਅਕਾਊਂਟ",
              "Sign-in & account",
            ),
          )}
        </h3>
        <p>
          {tr(
            text(
              "आपका अध्ययन अकाउंट पहली सफल sign-in पर बनता है। Login, registration और भूले हुए password की recovery ChatGPT की सुरक्षित sign-in सेवा संभालती है। इस वेबसाइट में अलग password नहीं रखा जाता।",
              "ਤੁਹਾਡਾ ਅਧਿਐਨ ਅਕਾਊਂਟ ਪਹਿਲੀ ਸਫਲ sign-in ਉੱਤੇ ਬਣਦਾ ਹੈ। Login, registration ਅਤੇ ਭੁੱਲੇ password ਦੀ recovery ChatGPT ਦੀ ਸੁਰੱਖਿਅਤ sign-in ਸੇਵਾ ਸੰਭਾਲਦੀ ਹੈ। ਇਸ ਵੈੱਬਸਾਈਟ ਵਿੱਚ ਵੱਖ password ਨਹੀਂ ਰੱਖਿਆ ਜਾਂਦਾ।",
              "Your study profile is created on first successful sign-in. Login, registration and password recovery are handled by ChatGPT's secure sign-in service. This website does not store a separate password.",
            ),
          )}
        </p>
        <h3>
          {tr(
            text("फोन पर इस्तेमाल करें", "ਫੋਨ ਉੱਤੇ ਵਰਤੋ", "Use on your phone"),
          )}
        </h3>
        <p>
          {tr(
            text(
              "Android: ब्राउज़र में Install app चुनें। iPhone/iPad: Safari में Share → Add to Home Screen। यह installable web app है; App Store/Play Store की native app नहीं है।",
              "Android: ਬਰਾਊਜ਼ਰ ਵਿੱਚ Install app ਚੁਣੋ। iPhone/iPad: Safari ਵਿੱਚ Share → Add to Home Screen। ਇਹ installable web app ਹੈ; App Store/Play Store ਦੀ native app ਨਹੀਂ ਹੈ।",
              "Android: choose Install app in your browser. iPhone/iPad: Safari → Share → Add to Home Screen. This is an installable web app, not a native store app.",
            ),
          )}
        </p>
        {installPrompt && (
          <button
            onClick={async () => {
              await installPrompt.prompt();
              setInstallPrompt(null);
            }}
          >
            <Download size={18} />
            {tr(text("ऐप इंस्टॉल करें", "ਐਪ ਇੰਸਟਾਲ ਕਰੋ", "Install app"))}
          </button>
        )}
        <p className="muted">
          {tr(
            text(
              "नोट्स और प्रगति सर्वर पर सेव होते हैं। सेव करने और खाते से पढ़ने के लिए इंटरनेट चाहिए।",
              "ਨੋਟਸ ਅਤੇ ਪ੍ਰਗਤੀ ਸਰਵਰ ਉੱਤੇ ਸੇਵ ਹੁੰਦੇ ਹਨ। ਸੇਵ ਕਰਨ ਅਤੇ ਖਾਤੇ ਤੋਂ ਪੜ੍ਹਨ ਲਈ ਇੰਟਰਨੈੱਟ ਚਾਹੀਦਾ ਹੈ।",
              "Notes and progress are stored on the server. Internet is required to sync and read account data.",
            ),
          )}
        </p>
        {/* Delete account — shown only to signed-in users (R-10 DPDP) */}
        <details style={{marginTop:16}}>
          <summary style={{cursor:"pointer",color:"#b91c1c",fontSize:13}}>
            {tr(text("अकाउंट और डेटा हटाएँ","ਅਕਾਊਂਟ ਅਤੇ ਡੇਟਾ ਮਿਟਾਓ","Delete account & all data"))}
          </summary>
          <p className="muted" style={{margin:"8px 0",fontSize:13}}>
            {tr(text(
              "इससे आपके सभी नोट्स, प्रगति, बुकमार्क और अकाउंट की जानकारी हमेशा के लिए हट जाएगी। यह क्रिया पूर्ववत नहीं हो सकती।",
              "ਇਸ ਨਾਲ ਤੁਹਾਡੇ ਸਾਰੇ ਨੋਟਸ, ਪ੍ਰਗਤੀ, ਬੁੱਕਮਾਰਕ ਅਤੇ ਅਕਾਊਂਟ ਦੀ ਜਾਣਕਾਰੀ ਹਮੇਸ਼ਾ ਲਈ ਮਿਟ ਜਾਵੇਗੀ। ਇਹ ਕਿਰਿਆ ਵਾਪਸ ਨਹੀਂ ਹੋ ਸਕਦੀ।",
              "This will permanently delete your notes, progress, bookmarks and account record. This cannot be undone.",
            ))}
          </p>
          <button
            style={{background:"#fef2f2",border:"1px solid #fecaca",color:"#b91c1c"}}
            disabled={busy}
            onClick={async () => {
              const confirmed = window.confirm(
                tr(text(
                  "क्या आप वाकई अपना अकाउंट और सारा डेटा हटाना चाहते हैं?",
                  "ਕੀ ਤੁਸੀਂ ਸੱਚਮੁੱਚ ਆਪਣਾ ਅਕਾਊਂਟ ਅਤੇ ਸਾਰਾ ਡੇਟਾ ਮਿਟਾਉਣਾ ਚਾਹੁੰਦੇ ਹੋ?",
                  "Are you sure you want to delete your account and all study data?",
                ))
              );
              if (!confirmed) return;
              setBusy(true);
              try {
                const res = await fetch("/api/account/delete", { method: "DELETE" });
                const d = await res.json() as { ok?: boolean; error?: string };
                if (!res.ok) throw new Error(d.error || "Failed");
                setUser(null);
                setState(empty);
                setStatus(tr(text("आपका अकाउंट हट गया।","ਤੁਹਾਡਾ ਅਕਾਊਂਟ ਮਿਟ ਗਿਆ।","Account deleted.")));
                go("home");
              } catch (e) {
                setError((e as Error).message);
              } finally {
                setBusy(false);
              }
            }}
          >
            {tr(text("हाँ, अकाउंट हटाएँ","ਹਾਂ, ਅਕਾਊਂਟ ਮਿਟਾਓ","Yes, delete my account"))}
          </button>
        </details>
      </div>
      {state.attempts.length > 0 && (
        <div className="panel">
          <h2>{tr(text("पिछला अभ्यास", "ਪਿਛਲਾ ਅਭਿਆਸ", "Practice history"))}</h2>
          {state.attempts.slice(0, 10).map((a) => (
            <div className="history-row" key={a.id}>
              <span>
                {new Date(a.at).toLocaleString(
                  lang === "hi" ? "hi-IN" : lang === "pa" ? "pa-IN" : "en-IN",
                  { timeZone: "Asia/Kolkata" },
                )}
              </span>
              <strong>
                {a.correct}/{a.total}
              </strong>
            </div>
          ))}
        </div>
      )}
    </>
  );
  const updateEditor = (fn: (l: Lesson) => void) => {
    if (!editor) return;
    const copy = structuredClone(editor);
    fn(copy);
    setEditor(copy);
  };
  const editText = (
    label: string,
    value: string,
    onChange: (value: string) => void,
    long = false,
  ) => (
    <label className="editor-field">
      {label}
      {long ? (
        <textarea value={value} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input value={value} onChange={(e) => onChange(e.target.value)} />
      )}
    </label>
  );
  const admin = (
    <>
      <div className="intro row between">
        <div>
          <h1>{lab("admin")}</h1>
          <p>
            {tr(
              text(
                "लिखें → समीक्षा के लिए भेजें → प्रकाशित करें",
                "ਲਿਖੋ → ਸਮੀਖਿਆ ਲਈ ਭੇਜੋ → ਪ੍ਰਕਾਸ਼ਿਤ ਕਰੋ",
                "Write → submit for review → publish",
              ),
            )}
          </p>
        </div>
        <button onClick={loadAdmin}>
          {tr(text("सूची ताज़ा करें", "ਸੂਚੀ ਤਾਜ਼ਾ ਕਰੋ", "Refresh list"))}
        </button>
      </div>
      {!user?.role || !["teacher", "admin"].includes(user.role) ? (
        <div className="panel empty">
          {tr(
            text(
              "इस हिस्से के लिए शिक्षक या admin की अनुमति चाहिए।",
              "ਇਸ ਹਿੱਸੇ ਲਈ ਅਧਿਆਪਕ ਜਾਂ admin ਦੀ ਇਜਾਜ਼ਤ ਚਾਹੀਦੀ ਹੈ।",
              "Teacher or admin access is required.",
            ),
          )}
        </div>
      ) : (
        <>
          <div className="panel">
            <div className="row">
              <button
                className="primary"
                onClick={() => {
                  setEditor(initialLesson());
                  setRevisionId(undefined);
                }}
              >
                <Plus size={17} />
                {tr(text("नया पाठ", "ਨਵਾਂ ਪਾਠ", "New lesson"))}
              </button>
              <select
                aria-label="Revise existing lesson"
                defaultValue=""
                onChange={(e) => {
                  const l = lessons.find((l) => l.id === e.target.value);
                  if (l) {
                    setEditor(structuredClone(l));
                    setRevisionId(undefined);
                  }
                }}
              >
                <option value="">
                  {tr(
                    text(
                      "मौजूदा पाठ की नई revision",
                      "ਮੌਜੂਦਾ ਪਾਠ ਦੀ ਨਵੀਂ revision",
                      "Revise an existing lesson",
                    ),
                  )}
                </option>
                {lessons.map((l) => (
                  <option key={l.id} value={l.id}>
                    {tr(l.title)}
                  </option>
                ))}
              </select>
            </div>
            {revisions.map((r) => (
              <div className="revision" key={r.id}>
                <div>
                  <strong>{r.title}</strong>
                  <span className="badge">{r.status}</span>
                </div>
                <div className="row">
                  {r.status !== "published" && (
                    <button
                      onClick={() => {
                        setEditor(JSON.parse(r.payload));
                        setRevisionId(r.id);
                      }}
                    >
                      {tr(text("संपादित करें", "ਸੋਧੋ", "Edit"))}
                    </button>
                  )}
                  {r.status === "draft" && (
                    <button
                      disabled={busy}
                      onClick={async () => {
                        try {
                          await request("/api/admin/review", {
                            id: r.id,
                            action: "submit",
                          });
                          await loadAdmin();
                        } catch (e) {
                          setError((e as Error).message);
                        }
                      }}
                    >
                      {tr(
                        text("समीक्षा भेजें", "ਸਮੀਖਿਆ ਭੇਜੋ", "Submit review"),
                      )}
                    </button>
                  )}
                  {r.status === "review" && user?.role === "admin" && (
                    <>
                      <button
                        className="primary"
                        onClick={async () => {
                          try {
                            await request("/api/admin/review", {
                              id: r.id,
                              action: "publish",
                            });
                            await loadAdmin();
                            const c = await request<{ lessons: Lesson[] }>("/api/content");
                            setLessons(c.lessons);
                          } catch (e) {
                            setError((e as Error).message);
                          }
                        }}
                      >
                        {tr(text("प्रकाशित करें", "ਪ੍ਰਕਾਸ਼ਿਤ ਕਰੋ", "Publish"))}
                      </button>
                      <button
                        onClick={async () => {
                          try {
                            await request("/api/admin/review", {
                              id: r.id,
                              action: "return",
                            });
                            await loadAdmin();
                          } catch (e) {
                            setError((e as Error).message);
                          }
                        }}
                      >
                        {tr(
                          text(
                            "ड्राफ्ट में लौटाएँ",
                            "ਡਰਾਫਟ ਵਿੱਚ ਵਾਪਸ ਭੇਜੋ",
                            "Return to draft",
                          ),
                        )}
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
          {editor && (
            <div className="panel editor">
              <div className="row between">
                <h2>{tr(text("पाठ संपादक", "ਪਾਠ ਸੰਪਾਦਕ", "Lesson editor"))}</h2>
                <button
                  className="icon-button"
                  aria-label="Close editor"
                  onClick={() => setEditor(null)}
                >
                  <X />
                </button>
              </div>
              <div className="filter-row">
                {(["hi", "pa", "en"] as Lang[]).map((l) => (
                  <button
                    className={editLang === l ? "selected" : ""}
                    onClick={() => setEditLang(l)}
                    key={l}
                  >
                    {l === "hi" ? "हिन्दी" : l === "pa" ? "ਪੰਜਾਬੀ" : "English"}
                  </button>
                ))}
              </div>
              <p className="source-note">
                {tr(
                  text(
                    "तीनों भाषाओं में सामग्री पूरी करें। प्रश्न और स्रोत भी नीचे जोड़ सकते हैं।",
                    "ਤਿੰਨਾਂ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਸਮੱਗਰੀ ਪੂਰੀ ਕਰੋ। ਸਵਾਲ ਅਤੇ ਸਰੋਤ ਵੀ ਹੇਠਾਂ ਜੋੜ ਸਕਦੇ ਹੋ।",
                    "Complete all three languages. Add questions and sources below.",
                  ),
                )}
              </p>
              <div className="two-col">
                {editText("Lesson ID", editor.id, (v) =>
                  updateEditor((l) => (l.id = v)),
                )}
                {editText("Subject", editor.subject, (v) =>
                  updateEditor((l) => (l.subject = v)),
                )}
                {editText("Unit", editor.unit, (v) =>
                  updateEditor((l) => (l.unit = v)),
                )}
                {editText("Title", editor.title[editLang], (v) =>
                  updateEditor((l) => (l.title[editLang] = v)),
                )}
              </div>
              {editor.sections.map((s, i) => (
                <div className="editor-block" key={i}>
                  <h3>
                    {tr(text("भाग", "ਭਾਗ", "Section"))} {i + 1}
                  </h3>
                  {editText("Heading", s.heading[editLang], (v) =>
                    updateEditor((l) => (l.sections[i].heading[editLang] = v)),
                  )}
                  {editText(
                    "Explanation & examples",
                    s.text[editLang],
                    (v) =>
                      updateEditor((l) => (l.sections[i].text[editLang] = v)),
                    true,
                  )}
                </div>
              ))}
              <button
                onClick={() =>
                  updateEditor((l) =>
                    l.sections.push({
                      heading: text("", "", ""),
                      text: text("", "", ""),
                    }),
                  )
                }
              >
                <Plus size={17} />
                Section
              </button>
              {editText(
                "Summary",
                editor.summary[editLang],
                (v) => updateEditor((l) => (l.summary[editLang] = v)),
                true,
              )}
              {editor.keypoints.map((p, i) =>
                editText("Key point " + (i + 1), p[editLang], (v) =>
                  updateEditor((l) => (l.keypoints[i][editLang] = v)),
                ),
              )}
              <button
                onClick={() =>
                  updateEditor((l) => l.keypoints.push(text("", "", "")))
                }
              >
                + Key point
              </button>
              <h2>Flashcards</h2>
              {editor.flashcards.map((f, i) => (
                <div className="editor-block" key={i}>
                  {editText("Question " + (i + 1), f.question[editLang], (v) =>
                    updateEditor(
                      (l) => (l.flashcards[i].question[editLang] = v),
                    ),
                  )}
                  {editText(
                    "Answer",
                    f.answer[editLang],
                    (v) =>
                      updateEditor(
                        (l) => (l.flashcards[i].answer[editLang] = v),
                      ),
                    true,
                  )}
                </div>
              ))}
              <button
                onClick={() =>
                  updateEditor((l) =>
                    l.flashcards.push({
                      question: text("", "", ""),
                      answer: text("", "", ""),
                    }),
                  )
                }
              >
                + Flashcard
              </button>
              <h2>Questions</h2>
              {editor.questions.map((q, i) => (
                <div className="editor-block" key={i}>
                  {editText("Question " + (i + 1), q.prompt[editLang], (v) =>
                    updateEditor((l) => (l.questions[i].prompt[editLang] = v)),
                  )}
                  {q.options.map((o, j) =>
                    editText(
                      "Option " + String.fromCharCode(65 + j),
                      o[editLang],
                      (v) =>
                        updateEditor(
                          (l) => (l.questions[i].options[j][editLang] = v),
                        ),
                    ),
                  )}
                  <label>
                    Correct answer
                    <select
                      value={q.answerIndex}
                      onChange={(e) =>
                        updateEditor(
                          (l) =>
                            (l.questions[i].answerIndex = Number(
                              e.target.value,
                            )),
                        )
                      }
                    >
                      {[0, 1, 2, 3].map((n) => (
                        <option value={n} key={n}>
                          {String.fromCharCode(65 + n)}
                        </option>
                      ))}
                    </select>
                  </label>
                  {editText(
                    "Explanation",
                    q.explanation[editLang],
                    (v) =>
                      updateEditor(
                        (l) => (l.questions[i].explanation[editLang] = v),
                      ),
                    true,
                  )}
                </div>
              ))}
              <button
                onClick={() =>
                  updateEditor((l) =>
                    l.questions.push({
                      id: "q-" + crypto.randomUUID(),
                      prompt: text("", "", ""),
                      options: [
                        text("", "", ""),
                        text("", "", ""),
                        text("", "", ""),
                        text("", "", ""),
                      ],
                      answerIndex: 0,
                      explanation: text("", "", ""),
                    }),
                  )
                }
              >
                + Question
              </button>
              {(["sources", "documents", "videos"] as const).map((kind) => (
                <div key={kind}>
                  <h2>{kind}</h2>
                  {editor[kind]?.map((r, i) => (
                    <div className="two-col" key={i}>
                      {editText("Title", r.title, (v) =>
                        updateEditor((l) => (l[kind]![i].title = v)),
                      )}
                      {editText("HTTPS URL", r.url, (v) =>
                        updateEditor((l) => (l[kind]![i].url = v)),
                      )}
                    </div>
                  ))}
                  <button
                    onClick={() =>
                      updateEditor((l) => {
                        l[kind] = l[kind] || [];
                        l[kind]!.push({ title: "", url: "" });
                      })
                    }
                  >
                    + {kind}
                  </button>
                </div>
              ))}
              <div className="editor-actions">
                <button
                  className="primary"
                  disabled={busy}
                  onClick={async () => {
                    setBusy(true);
                    setError("");
                    try {
                      const d = await request<{ id: string }>("/api/admin/draft", {
                        lesson: editor,
                        revisionId,
                      });
                      setRevisionId(d.id);
                      setStatus(
                        "Draft saved. Submit it for review from the list.",
                      );
                      await loadAdmin();
                    } catch (e) {
                      setError((e as Error).message);
                    } finally {
                      setBusy(false);
                    }
                  }}
                >
                  {tr(text("ड्राफ्ट सेव करें", "ਡਰਾਫਟ ਸੇਵ ਕਰੋ", "Save draft"))}
                </button>
              </div>
            </div>
          )}
          {user?.role === "admin" && (
            <div className="panel">
              <h2>
                {tr(
                  text("शिक्षक की भूमिका", "ਅਧਿਆਪਕ ਦੀ ਭੂਮਿਕਾ", "Teacher role"),
                )}
              </h2>
              <p>
                {tr(
                  text(
                    "यह app की भूमिका है। निजी वेबसाइट खोलने की अनुमति Sites sharing में अलग से दें।",
                    "ਇਹ app ਦੀ ਭੂਮਿਕਾ ਹੈ। ਨਿੱਜੀ ਵੈੱਬਸਾਈਟ ਖੋਲ੍ਹਣ ਦੀ ਇਜਾਜ਼ਤ Sites sharing ਵਿੱਚ ਵੱਖ ਦਿਓ।",
                    "This is an app role. Grant access to this private site separately through Sites sharing.",
                  ),
                )}
              </p>
              <form
                className="row"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = new FormData(e.currentTarget);
                  try {
                    await request("/api/admin/role", {
                      email: form.get("email"),
                      role: form.get("role"),
                    });
                    await loadAdmin();
                    setStatus("Role saved.");
                  } catch (e) {
                    setError((e as Error).message);
                  }
                }}
              >
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Teacher email"
                />
                <select name="role">
                  <option value="teacher">Teacher</option>
                  <option value="learner">Learner</option>
                </select>
                <button type="submit">Save role</button>
              </form>
              {grants.map((g) => (
                <div className="history-row" key={g.email}>
                  <span>{g.email}</span>
                  <strong>{g.role}</strong>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
  const nav = [
    ["home", LayoutDashboard],
    ["library", BookOpen],
    ["practice", ClipboardCheck],
    ["focus", Clock],
    ["physical", Activity],
    ["typing", Keyboard],
    ["notes", NotebookPen],
    ["saved", Bookmark],
    ["account", Settings],
  ] as const;
  return (
    <div className="app-shell">
      <aside className={"sidebar " + (menu ? "open" : "")}>
        <button className="brand" onClick={() => go("home")}>
          <span className="brand-icon">
            <BookOpen />
          </span>
          <span>
            Exam Saathi
            <small>
              {tr(
                text(
                  "पढ़ाई का अपना साथी",
                  "ਪੜ੍ਹਾਈ ਦਾ ਆਪਣਾ ਸਾਥੀ",
                  "Your study companion",
                ),
              )}
            </small>
          </span>
        </button>
        <div className="nav-label">
          {tr(text("आपकी पढ़ाई", "ਤੁਹਾਡੀ ਪੜ੍ਹਾਈ", "YOUR STUDY SPACE"))}
        </div>
        <nav>
          {nav.map(([v, Icon]) => (
            <button
              key={v}
              className={
                view === v || (v === "library" && view === "lesson")
                  ? "active"
                  : ""
              }
              onClick={() => {
                if (v === "library" && !subject) {
                  setSubject("SST");
                  setExamId("master");
                }
                go(v);
              }}
            >
              <Icon size={19} />
              {lab(v)}
            </button>
          ))}
          {["teacher", "admin"].includes(user?.role || "") && (
            <button
              className={view === "admin" ? "active" : ""}
              onClick={() => {
                go("admin");
                loadAdmin();
              }}
            >
              <GraduationCap size={19} />
              {lab("admin")}
            </button>
          )}
        </nav>
        <div className="sidebar-bottom">
          <span className="user-avatar">
            {(user?.displayName || "S").slice(0, 1).toUpperCase()}
          </span>
          <div>
            <strong>
              {user?.displayName ||
                tr(text("आपका अकाउंट", "ਤੁਹਾਡਾ ਅਕਾਊਂਟ", "Your account"))}
            </strong>
            <small>
              {user
                ? tr(
                    text(
                      "प्रगति अकाउंट में सेव",
                      "ਪ੍ਰਗਤੀ ਅਕਾਊਂਟ ਵਿੱਚ ਸੇਵ",
                      "Progress synced to account",
                    ),
                  )
                : tr(
                    text(
                      "पढ़ें; सेव करने के लिए sign in",
                      "ਪੜ੍ਹੋ; ਸੇਵ ਕਰਨ ਲਈ sign in",
                      "Read; sign in to save",
                    ),
                  )}
            </small>
          </div>
        </div>
      </aside>
      {menu && (
        <button
          className="overlay"
          aria-label="Close menu"
          onClick={() => setMenu(false)}
        />
      )}
      <div className="workspace">
        <header>
          <div className="row">
            <button
              className="icon-button mobile-menu"
              aria-label="Open menu"
              onClick={() => setMenu(!menu)}
            >
              <Menu />
            </button>
            <span className="breadcrumb">
              Exam Saathi <ChevronRight size={14} />
              {view === "lesson"
                ? subjectName(subject)
                : lab(view in labels ? (view as keyof typeof labels) : "home")}
            </span>
          </div>
          <div className="header-controls">
            <select
              aria-label="Reading language"
              value={lang}
              onChange={(e) => {
                setLang(e.target.value as Lang);
                if ("speechSynthesis" in window) speechSynthesis.cancel();
              }}
            >
              <option value="hi">हिन्दी</option>
              <option value="pa">ਪੰਜਾਬੀ</option>
              <option value="en">English</option>
            </select>
            <button
              className="icon-button"
              aria-label="Toggle reading theme"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? <Moon size={19} /> : <Sun size={19} />}
            </button>
            <button
              className="avatar"
              aria-label="Account"
              onClick={() => go("account")}
            >
              {(user?.displayName || "S").slice(0, 1).toUpperCase()}
            </button>
          </div>
        </header>
        <main>
          {error && (
            <div className="alert error" role="alert">
              {error}
              <button
                className="icon-button"
                aria-label="Dismiss error"
                onClick={() => setError("")}
              >
                <X size={16} />
              </button>
            </div>
          )}
          {status && (
            <div className="alert success" role="status">
              {status}
              <button
                className="icon-button"
                aria-label="Dismiss status"
                onClick={() => setStatus("")}
              >
                <X size={16} />
              </button>
            </div>
          )}
          {!loaded ? (
            <div className="panel empty">
              {tr(
                text(
                  "आपकी पढ़ाई लोड हो रही है…",
                  "ਤੁਹਾਡੀ ਪੜ੍ਹਾਈ ਲੋਡ ਹੋ ਰਹੀ ਹੈ…",
                  "Loading your study space…",
                ),
              )}
            </div>
          ) : view === "home" ? (
            home
          ) : view === "exam" ? (
            examView
          ) : view === "library" ? (
            library
          ) : view === "lesson" ? (
            lessonView
          ) : view === "practice" ? (
            practice
          ) : view === "notes" ? (
            notes
          ) : view === "saved" ? (
            saved
          ) : view === "typing" ? (
            typing
          ) : view === "focus" ? (
            focusView
          ) : view === "physical" ? (
            physicalView
          ) : view === "admin" ? (
            admin
          ) : (
            account
          )}
        </main>
        <footer>
          {tr(
            text(
              "स्वनिर्मित अध्ययन सामग्री · सरकारी विज्ञापन और मूल सिलेबस निर्णायक हैं।",
              "ਆਪਣੀ ਬਣਾਈ ਅਧਿਐਨ ਸਮੱਗਰੀ · ਸਰਕਾਰੀ ਇਸ਼ਤਿਹਾਰ ਅਤੇ ਅਸਲ ਸਿਲੇਬਸ ਅੰਤਿਮ ਹਨ।",
              "Original learning material · official advertisements and original syllabi remain authoritative.",
            ),
          )}
        </footer>
        <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
          {[
            { v: "home", Icon: LayoutDashboard, labelText: text("मुख्य", "ਮੁੱਖ", "Home") },
            { v: "library", Icon: BookOpen, labelText: text("पाठ", "ਪਾਠ", "Lessons") },
            { v: "practice", Icon: ClipboardCheck, labelText: text("अभ्यास", "ਅਭਿਆਸ", "Practice") },
            { v: "focus", Icon: Clock, labelText: text("फोकस", "ਫੋਕਸ", "Focus") },
            { v: "account", Icon: Settings, labelText: text("अकाउंट", "ਅਕਾਊਂਟ", "Account") },
          ].map(({ v, Icon, labelText }) => (
            <button
              key={v}
              className={(view === v || (v === "library" && view === "lesson")) ? "active" : ""}
              onClick={() => go(v)}
            >
              <Icon size={19} />
              <span>{tr(labelText)}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
