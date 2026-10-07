'use client';
import { useEffect, useState } from 'react';
interface InstallEvent extends Event { prompt(): Promise<void>; userChoice: Promise<{ outcome: string }> }
export default function InstallAppButton() {
  const [prompt, setPrompt] = useState<InstallEvent | null>(null);
  const [help, setHelp] = useState(false);
  useEffect(() => {
    const handle = (event: Event) => { event.preventDefault(); setPrompt(event as InstallEvent); };
    window.addEventListener('beforeinstallprompt', handle);
    return () => window.removeEventListener('beforeinstallprompt', handle);
  }, []);
  return <div><button className="bg-teal-500 text-slate-950 font-bold text-xs px-3 py-2 rounded-xl" onClick={async () => {
    if (!prompt) { setHelp(true); return; }
    await prompt.prompt(); await prompt.userChoice; setPrompt(null);
  }}>Install</button>{help && <p role="status" className="text-xs text-slate-300 mt-2">Use your browser’s Install App or Add to Home Screen menu. On iPhone, use Safari → Share → Add to Home Screen.</p>}</div>;
}
