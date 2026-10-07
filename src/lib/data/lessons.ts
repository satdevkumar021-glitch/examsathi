// ============================================================
// ExamSathi - Comprehensive Public Examination Knowledge Base
// Detailed, Academic-Grade Study Material for Punjab, Rajasthan & Central Exams
// ============================================================

import { SUPPLEMENTAL_LESSONS } from './lessons/supplemental';
import { WORLD_HISTORY_LESSONS } from './lessons/world_history';
import { POLITY_EXTRA_LESSONS } from './lessons/polity_extra';
import { SST_MISSING_LESSONS } from './lessons/sst_missing';
import { ECONOMICS_LESSONS } from './lessons/economics';
import { SCIENCE_LESSONS } from './lessons/science';
import { MATHEMATICS_LESSONS } from './lessons/mathematics';
import { PUNJABI_LESSONS } from './lessons/punjabi';
import { HINDI_LESSONS } from './lessons/hindi';
import { ENGLISH_LESSONS } from './lessons/english';
import { PATWARI_POLICE_LESSONS } from './lessons/patwari_police';
import { PEDAGOGY_LESSONS } from './lessons/pedagogy';
import { RAJASTHAN_LESSONS } from './lessons/rajasthan';
import { REFERENCE_SST_LESSONS } from './lessons/reference_sst';

export * from './lessons/types';
import type { Lesson, DocumentResource, SyllabusReference, VideoResource, BookReference, Flashcard } from './lessons/types';


export const BASE_LESSONS: Record<string, Lesson> = {
  // =========================================================================
  // 1. MODERN INDIA (1757 - 1947)
  // =========================================================================
  'modern-india': {
    id: 'modern-india',
    topicId: 'modern-india',
    subjectId: 'social-science',
    category: 'history',
    title: {
      hi: 'आधुनिक भारत का इतिहास (1757 - 1947)',
      pa: 'ਆਧੁਨਿਕ ਭਾਰਤ ਦਾ ਇਤਿਹਾਸ (1757 - 1947)',
      en: 'Modern Indian History (1757 - 1947)',
    },
    examRelevance: 'Punjab Master Cadre (10-12 Qs), PSSSB Clerk (3-4 Qs), REET & CTET (4-5 Qs)',
    estimatedTime: '35 मिनट',
    content: {
      hi: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 विषय का महत्व (Exam Weightage)</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              आधुनिक भारत का इतिहास पंजाब मास्टर कैडर (Social Science), लेक्चरर कैडर, ईटीटी (ETT) तथा पंजाब क्लर्क एवं पटवारी परीक्षाओं का सर्वाधिक अंकभार वाला खंड है। इसमें प्लासी, बक्सर, 1857 क्रांति, कांग्रेस और गांधीवादी आंदोलनों से सीधे प्रश्न पूछे जाते हैं।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. ब्रिटिश प्रभुत्व की स्थापना: प्लासी एवं बक्सर का युद्ध</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-amber-400 font-bold text-sm mb-1">⚔️ प्लासी का युद्ध (23 जून 1757)</h4>
                <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4">
                  <li><strong>स्थान:</strong> नदिया जिला (पश्चिम बंगाल), भागीरथी नदी का तट।</li>
                  <li><strong>प्रतिद्वंद्वी:</strong> रॉबर्ट क्लाइव (अंग्रेज) बनाम सिराजुद्दौला (बंगाल का नवाब)।</li>
                  <li><strong>गद्दार:</strong> मीर जाफर (सेनापति), राय दुर्लभ और जगत सेठ ने विश्वासघात किया।</li>
                  <li><strong>परिणाम:</strong> अंग्रेजों की जीत, मीर जाफर कठपुतली नवाब बना, भारत में ब्रिटिश प्रभुत्व की नींव।</li>
                </ul>
              </div>
              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-emerald-400 font-bold text-sm mb-1">⚔️ बक्सर का युद्ध (22 अक्टूबर 1764)</h4>
                <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4">
                  <li><strong>स्थान:</strong> बक्सर (बिहार), गंगा तट।</li>
                  <li><strong>प्रतिद्वंद्वी:</strong> हेक्टर मुनरो बनाम मीर कासिम, शुजाउद्दौला (अवध) एवं शाह आलम द्वितीय (मुगल)।</li>
                  <li><strong>इलाहाबाद की संधि (1765):</strong> कंपनी को बंगाल, बिहार और उड़ीसा के <em>दीवानी अधिकार (राजस्व वसूली)</em> मिले।</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. 1857 का प्रथम स्वतंत्रता संग्राम</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>तत्कालीन कारण:</strong> एनफील्ड राइफल में चर्बी लगे कारतूस (गाय व सूअर की चर्बी) का प्रयोग।</p>
              <p>• <strong>प्रथम शहादत:</strong> 29 मार्च 1857 को बैरकपुर में 34वीं नेटिव इन्फैंट्री के <strong>मंगल पांडे</strong> ने बगावत की।</p>
              <p>• <strong>विद्रोह का आगाज:</strong> 10 मई 1857 को मेरठ छावनी से सैनिकों ने दिल्ली कूच किया।</p>
              <p>• <strong>प्रमुख केंद्र और नायक:</strong> दिल्ली (बहादुर शाह जफर व बख्त खां), झांसी (रानी लक्ष्मीबाई), कानपुर (नाना साहब व तात्या टोपे), जगदीशपुर बिहार (कुंवर सिंह), लखनऊ (बेगम हजरत महल)।</p>
              <p class="text-xs text-amber-300 pt-1">• <strong>1858 का भारत सरकार अधिनियम:</strong> कंपनी शासन समाप्त, ब्रिटिश क्राउन का सीधा शासन, लॉर्ड कैनिंग भारत के पहले वायसराय बने।</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. भारतीय राष्ट्रीय आंदोलन (1885 - 1947)</h3>
            <div class="space-y-3 text-sm text-slate-300">
              <div class="border-l-2 border-indigo-500 pl-3">
                <h5 class="text-white font-semibold">1885 — भारतीय राष्ट्रीय कांग्रेस की स्थापना</h5>
                <p class="text-xs text-slate-400">28 दिसंबर 1885, गोकुलदास तेजपाल संस्कृत कॉलेज बॉम्बे। संस्थापक: ए.ओ. ह्यूम। प्रथम अध्यक्ष: व्योमेश चंद्र बनर्जी (72 प्रतिनिधि)।</p>
              </div>
              <div class="border-l-2 border-indigo-500 pl-3">
                <h5 class="text-white font-semibold">1905 — बंगाल विभाजन एवं स्वदेशी आंदोलन</h5>
                <p class="text-xs text-slate-400">लॉर्ड कर्जन द्वारा 16 अक्टूबर 1905 को विभाजन प्रभावी। स्वदेशी एवं विदेशी वस्त्र बहिष्कार का राष्ट्रव्यापी आंदोलन।</p>
              </div>
              <div class="border-l-2 border-indigo-500 pl-3">
                <h5 class="text-white font-semibold">1919 — जलियांवाला बाग हत्याकांड</h5>
                <p class="text-xs text-slate-400">13 अप्रैल 1919 (बैसाखी) को अमृतसर में डॉ. किचलू और डॉ. सत्यपाल की गिरफ्तारी के विरोध में निहत्थी सभा पर जनरल डायर ने अंधाधुंध गोलियां चलवाईं। रवींद्रनाथ टैगोर ने 'नाइटहुड' लौटाया।</p>
              </div>
              <div class="border-l-2 border-indigo-500 pl-3">
                <h5 class="text-white font-semibold">1920-22 — असहयोग आंदोलन</h5>
                <p class="text-xs text-slate-400">5 फरवरी 1922 को चौरी-चौरा (गोरखपुर) में पुलिस थाने में आगजनी के कारण 12 फरवरी 1922 को बारदोली प्रस्ताव द्वारा गांधी जी ने आंदोलन वापस लिया।</p>
              </div>
              <div class="border-l-2 border-indigo-500 pl-3">
                <h5 class="text-white font-semibold">1930 — सविनय अवज्ञा आंदोलन एवं दांडी मार्च</h5>
                <p class="text-xs text-slate-400">12 मार्च से 6 अप्रैल 1930 (24 दिन, 388 किमी)। साबरमती से दांडी तक 78 सत्याग्रहियों के साथ नमक कानून तोड़ा।</p>
              </div>
              <div class="border-l-2 border-indigo-500 pl-3">
                <h5 class="text-white font-semibold">1942 — भारत छोड़ो आंदोलन</h5>
                <p class="text-xs text-slate-400">8 अगस्त 1942 को बॉम्बे के ग्वालिया टैंक मैदान से "करो या मरो" (Do or Die) का ऐतिहासिक नारा। 15 अगस्त 1947 को भारत स्वतंत्र हुआ।</p>
              </div>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 ਇਮਤਿਹਾਨੀ ਮਹੱਤਤਾ</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਆਧੁਨਿਕ ਭਾਰਤ ਦਾ ਇਤਿਹਾਸ ਪੰਜਾਬ ਮਾਸਟਰ ਕੈਡਰ, ਲੈਕਚਰਾਰ ਕੈਡਰ ਅਤੇ ਪੰਜਾਬ ਕਲਰਕ ਇਮਤਿਹਾਨਾਂ ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ ਪ੍ਰਸ਼ਨਾਂ ਵਾਲਾ ਵਿਸ਼ਾ ਹੈ।
            </p>
          </div>
          <div>
            <h3 class="text-xl font-bold text-white mb-2">ਮੁੱਖ ਲੜਾਈਆਂ ਅਤੇ ਅੰਦੋਲਨ:</h3>
            <ul class="text-xs text-slate-300 space-y-2 list-disc pl-4">
              <li><strong>1757 (23 ਜੂਨ):</strong> ਪਲਾਸੀ ਦੀ ਲੜਾਈ (ਰੌਬਰਟ ਕਲਾਈਵ ਬਨਾਮ ਸਿਰਾਜੁੱਦੌਲਾ)। ਮੀਰ ਜਾਫਰ ਦੀ ਗੱਦਾਰੀ।</li>
              <li><strong>1764 (22 ਅਕਤੂਬਰ):</strong> ਬਕਸਰ ਦੀ ਲੜਾਈ (ਹੈਕਟਰ ਮੁਨਰੋ ਦੀ ਜਿੱਤ, 1765 ਵਿੱਚ ਦੀਵਾਨੀ ਮਿਲੀ)।</li>
              <li><strong>1857 (10 ਮਈ):</strong> ਮੇਰਠ ਤੋਂ ਪਹਿਲਾ ਆਜ਼ਾਦੀ ਸੰਗਰਾਮ (ਮੰਗਲ ਪਾਂਡੇ 29 ਮਾਰਚ ਬੈਰਕਪੁਰ)।</li>
              <li><strong>1885 (28 ਦਸੰਬਰ):</strong> ਇੰਡੀਅਨ ਨੈਸ਼ਨਲ ਕਾਂਗਰਸ ਦੀ ਸਥਾਪਨਾ (ਏ.ਓ. ਹਿਊਮ, ਡਬਲਿਊ.ਸੀ. ਬੈਨਰਜੀ ਪਹਿਲੇ ਪ੍ਰਧਾਨ)।</li>
              <li><strong>1919 (13 ਅਪ੍ਰੈਲ):</strong> ਜਲਿਆਂਵਾਲਾ ਬਾਗ਼ ਕਤਲੇਆਮ (ਅੰਮ੍ਰਿਤਸਰ, ਜਨਰਲ ਡਾਇਰ)।</li>
              <li><strong>1930 (12 ਮਾਰਚ - 6 ਅਪ੍ਰੈਲ):</strong> ਦਾਂਡੀ ਮਾਰਚ (ਸਾਬਰਮਤੀ ਤੋਂ ਦਾਂਡੀ 388 ਕਿ.ਮੀ.)।</li>
              <li><strong>1942 (8 ਅਗਸਤ):</strong> ਭਾਰਤ ਛੱਡੋ ਅੰਦੋਲਨ ("ਕਰੋ ਜਾਂ ਮਰੋ" ਨਾਅਰਾ)।</li>
            </ul>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 Examination Weightage</h4>
            <p class="text-slate-300 text-sm">Cornerstone segment for Punjab Master Cadre (SST), Lecturer Cadre, ETT, and PSSSB Clerk/Patwari exams.</p>
          </div>
          <div>
            <h3 class="text-xl font-bold text-white mb-2">Milestones of Modern Indian History</h3>
            <ul class="text-xs text-slate-300 space-y-2 list-disc pl-4">
              <li>1757: Battle of Plassey (Clive defeated Siraj-ud-Daulah via Mir Jafar's betrayal).</li>
              <li>1764: Battle of Buxar (Munro defeated combined Indian rulers; Treaty of Allahabad 1765 granted Diwani rights).</li>
              <li>1857: Great Revolt triggered by greased cartridges; Mangal Pandey on March 29; outbreak from Meerut on May 10.</li>
              <li>1885: Indian National Congress formed by A.O. Hume, first session attended by 72 delegates under W.C. Bonnerjee.</li>
              <li>1919: Jallianwala Bagh massacre on Baisakhi (April 13) ordered by Gen. Dyer.</li>
              <li>1930: Dandi Salt March from Sabarmati to Dandi (March 12 - April 6, 388 km).</li>
              <li>1942: Quit India Movement launched with "Do or Die" call by Mahatma Gandhi.</li>
            </ul>
          </div>
        </div>
      `,
    },
    summary: {
      hi: 'आधुनिक भारत 1757 प्लासी के युद्ध से लेकर 1947 स्वतंत्रता तक का संघर्षमय इतिहास है। इसमें ब्रिटिश औपनिवेशिक विस्तार (प्लासी, बक्सर, दीवानी), 1857 का प्रथम स्वतंत्रता संग्राम, 1885 में कांग्रेस स्थापना, तथा गांधीवादी आंदोलन (असहयोग 1920, सविनय अवज्ञा 1930, भारत छोड़ो 1942) प्रमुख मील के पत्थर हैं।',
      pa: 'ਆਧੁਨਿਕ ਭਾਰਤ ਪਲਾਸੀ (1757), 1857 ਵਿਦਰੋਹ, ਕਾਂਗਰਸ (1885), ਜਲਿਆਂਵਾਲਾ ਬਾਗ਼ (1919) ਅਤੇ ਆਜ਼ਾਦੀ ਸੰਘਰਸ਼ (1947) ਦਾ ਇਤਿਹਾਸ ਹੈ।',
      en: 'Modern India chronicles the rise of British hegemony (Plassey 1757, Buxar 1764), 1857 Revolt, INC foundation (1885), and mass Gandhian satyagrahas resulting in Independence on August 15, 1947.',
    },
    keyNotes: {
      hi: [
        '📌 1757 (23 जून) — प्लासी का युद्ध: क्लाइव vs सिराजुद्दौला (भागीरथी नदी तट)।',
        '📌 1764 (22 अक्टूबर) — बक्सर का युद्ध: हेक्टर मुनरो vs मीर कासिम संयुक्त मोर्चा।',
        '📌 1765 — इलाहाबाद की संधि: ईस्ट इंडिया कंपनी को बंगाल-बिहार-उड़ीसा की दीवानी मिली।',
        '📌 1857 (29 मार्च) — मंगल पांडे बैरकपुर में विद्रोही बने; 10 मई को मेरठ से क्रांति फूटी।',
        '📌 1858 — भारत सरकार अधिनियम: कंपनी शासन समाप्त, कैनिंग प्रथम वायसराय बने।',
        '📌 1885 (28 दिसंबर) — भारतीय राष्ट्रीय कांग्रेस की स्थापना: ए.ओ. ह्यूम संस्थापक, 72 प्रतिनिधि।',
        '📌 1905 — लॉर्ड कर्जन द्वारा बंगाल विभाजन; स्वदेशी आंदोलन का उदय।',
        '📌 1919 (13 अप्रैल) — जलियांवाला बाग हत्याकांड, अमृतसर (जनरल डायर)।',
        '📌 1922 (5 फरवरी) — चौरी-चौरा कांड के बाद 12 फरवरी को असहयोग आंदोलन वापस।',
        '📌 1930 (12 मार्च - 6 अप्रैल) — दांडी मार्च (साबरमती से दांडी, 388 किमी)।',
        '📌 1942 (8 अगस्त) — भारत छोड़ो आंदोलन, "करो या मरो" का नारा।',
        '📌 1947 (15 अगस्त) — भारत स्वतंत्र; लॉर्ड माउंटबेटन अंतिम वायसराय, नेहरू प्रथम प्रधानमंत्री।',
      ],
      pa: [
        '📌 1757 (23 ਜੂਨ) — ਪਲਾਸੀ ਦੀ ਲੜਾਈ।',
        '📌 1764 (22 ਅਕਤੂਬਰ) — ਬਕਸਰ ਦੀ ਲੜਾਈ।',
        '📌 1765 — ਇਲਾਹਾਬਾਦ ਦੀ ਸੰਧੀ (ਦੀਵਾਨੀ ਅਧਿਕਾਰ)।',
        '📌 1857 (10 ਮਈ) — ਮੇਰਠ ਤੋਂ ਕ੍ਰਾਂਤੀ ਸ਼ੁਰੂ।',
        '📌 1885 (28 ਦਸੰਬਰ) — ਕਾਂਗਰਸ ਦੀ ਸਥਾਪਨਾ।',
        '📌 1919 (13 ਅਪ੍ਰੈਲ) — ਜਲਿਆਂਵਾਲਾ ਬਾਗ਼ ਕਾਂਡ।',
        '📌 1930 — ਦਾਂਡੀ ਮਾਰਚ (ਨਮਕ ਸੱਤਿਆਗ੍ਰਹਿ)।',
        '📌 1942 — ਭਾਰਤ ਛੱਡੋ ਅੰਦੋਲਨ ("ਕਰੋ ਜਾਂ ਮਰੋ")।',
      ],
      en: [
        '📌 1757 (June 23) — Battle of Plassey: Clive defeated Siraj-ud-Daulah.',
        '📌 1764 (October 22) — Battle of Buxar: Decisive British victory.',
        '📌 1765 — Treaty of Allahabad: British secured Diwani rights.',
        '📌 1857 (May 10) — Great Revolt broke out from Meerut cantonment.',
        '📌 1885 (Dec 28) — INC founded by A.O. Hume in Bombay.',
        '📌 1919 (April 13) — Jallianwala Bagh Massacre ordered by Gen. Dyer.',
        '📌 1930 (March 12 - April 6) — Dandi March (388 km from Sabarmati).',
        '📌 1942 (Aug 8) — Quit India Movement launched with "Do or Die".',
      ],
    },
    flashcards: [
      {
        id: 'fc-m-1',
        q: { hi: 'प्लासी का युद्ध कब, कहाँ और किसके बीच हुआ था?', pa: 'ਪਲਾਸੀ ਦੀ ਲੜਾਈ ਕਦੋਂ ਅਤੇ ਕਿਸ ਵਿਚਕਾਰ ਹੋਈ ਸੀ?', en: 'When and between whom was the Battle of Plassey fought?' },
        a: { hi: '23 जून 1757 को भागीरथी नदी (नदिया, बंगाल) तट पर रॉबर्ट क्लाइव और सिराजुद्दौला के बीच। मीर जाफर के धोखे से अंग्रेज जीते।', pa: '23 ਜੂਨ 1757 ਨੂੰ ਰੌਬਰਟ ਕਲਾਈਵ ਅਤੇ ਸਿਰਾਜੁੱਦੌਲਾ ਵਿਚਕਾਰ।', en: 'On June 23, 1757 on the banks of Bhagirathi River between Robert Clive and Siraj-ud-Daulah.' },
        difficulty: 'easy',
      },
      {
        id: 'fc-m-2',
        q: { hi: '1857 के विद्रोह का तत्कालीन कारण क्या था?', pa: '1857 ਵਿਦਰੋਹ ਦਾ ਤੁਰੰਤ ਕਾਰਨ ਕੀ ਸੀ?', en: 'What was the immediate cause of the 1857 Revolt?' },
        a: { hi: 'एनफील्ड राइफल के चर्बीयुक्त कारतूस (गाय और सूअर की चर्बी), जिन्हें दांत से काटना पड़ता था।', pa: 'ਐਨਫੀਲਡ ਰਾਈਫਲ ਦੀਆਂ ਚਰਬੀ ਵਾਲੀਆਂ ਕਾਰਤੂਸਾਂ।', en: 'Enfield rifle cartridges greased with animal fat (cow and pig).' },
        difficulty: 'easy',
      },
      {
        id: 'fc-m-3',
        q: { hi: '1885 में भारतीय राष्ट्रीय कांग्रेस के प्रथम अध्यक्ष कौन थे और कितने प्रतिनिधि शामिल हुए?', pa: 'ਕਾਂਗਰਸ ਦੇ ਪਹਿਲੇ ਪ੍ਰਧਾਨ ਕੌਣ ਸਨ?', en: 'Who was the first president of INC and how many delegates attended?' },
        a: { hi: 'व्योमेश चंद्र बनर्जी (W.C. Bonnerjee) प्रथम अध्यक्ष थे और 72 प्रतिनिधियों ने भाग लिया था।', pa: 'ਡਬਲਿਊ.ਸੀ. ਬੈਨਰਜੀ, 72 ਡੈਲੀਗੇਟ।', en: 'Womesh Chandra Bonnerjee, attended by 72 delegates.' },
        difficulty: 'easy',
      },
      {
        id: 'fc-m-4',
        q: { hi: 'दांडी मार्च की अवधि और कुल दूरी क्या थी?', pa: 'ਦਾਂਡੀ ਮਾਰਚ ਦੀ ਕੁੱਲ ਦੂਰੀ ਅਤੇ ਦਿਨ ਕਿੰਨੇ ਸਨ?', en: 'What was the duration and distance of the Dandi March?' },
        a: { hi: '12 मार्च से 6 अप्रैल 1930 (24 दिन), 241 मील (लगभग 388 किमी), 78 सत्याग्रहियों के साथ।', pa: '12 ਮਾਰਚ - 6 ਅਪ੍ਰੈਲ 1930 (24 ਦਿਨ), 388 ਕਿ.ਮੀ.।', en: 'March 12 to April 6, 1930 (24 days), covering 388 km with 78 chosen followers.' },
        difficulty: 'medium',
      },
    ],
    videos: [
      {
        title: 'Modern Indian History Complete Marathon | Punjab Master Cadre & Clerk',
        channel: 'StudyIQ IAS',
        youtubeId: 'p2aGZ3fXw_0',
        language: 'hi',
        views: '1.8M',
        duration: '2:15:30',
        tags: ['History', 'Modern India', 'Master Cadre'],
      },
    ],
    bookRefs: [
      {
        title: 'Our Pasts - III (Class 8)',
        author: 'NCERT',
        chapters: 'Chapters 1-10 (Colonial Rule to Freedom)',
        type: 'ncert',
      },
      {
        title: 'Punjab School Education Board (PSEB) History Class 10',
        author: 'Punjab State Education Board',
        chapters: 'Complete Freedom Struggle section',
        type: 'state-board',
      },
    ],
    documents: [
      {
            "title": "ERD Punjab · Master Cadre Social Science Official Syllabus PDF",
            "url": "https://erd.punjab.gov.in/master2022/Docs/SocialSciencesyllabus04_05_2022.pdf",
            "language": "English / Punjabi",
            "type": "syllabus"
      },
      {
            "title": "PSEB Class 10 · Samajik Sikhya Complete Textbook · Punjabi",
            "url": "https://static.pseb.ac.in/media/1670561302_Samajik%20Sikhya-10%28Punjabi%29%20Bhag-I.pdf",
            "language": "ਪੰਜਾਬੀ",
            "type": "textbook"
      },
      {
            "title": "NCERT Class 10 · Social Science Textbook · English",
            "url": "https://ncert.nic.in/textbook/pdf/jess301.pdf",
            "language": "English",
            "type": "ncert"
      },
      {
            "title": "NCERT Class 10 · सामाजिक विज्ञान पाठ्यपुस्तक · Hindi",
            "url": "https://ncert.nic.in/textbook/pdf/jhss301.pdf",
            "language": "Hindi",
            "type": "ncert"
      },
      {
            "title": "NIOS Secondary · Social Science Study Modules · Hindi/English",
            "url": "https://nios.ac.in/media/documents/SecSocSciCour/Hindi/Lesson-01.pdf",
            "language": "Bilingual",
            "type": "nios"
      }
],
    syllabusReference: {
      title: "ERD Punjab · Master Cadre Social Science Modern India Syllabus",
      url: "https://erd.punjab.gov.in/master2022/Docs/SocialSciencesyllabus04_05_2022.pdf",
      body: "Education Recruitment Board (ERB), Punjab",
      verifiedOn: "15 March 2024"
    },
  },

  // =========================================================================
  // 2. PUNJAB HISTORY & SIKH GURUS
  // =========================================================================
  'punjab-history': {
    id: 'punjab-history',
    topicId: 'punjab-history',
    subjectId: 'social-science',
    category: 'history',
    title: {
      hi: 'पंजाब का इतिहास — 10 सिख गुरु, रणजीत सिंह व स्वतंत्रता संग्राम',
      pa: 'ਪੰਜਾਬ ਦਾ ਇਤਿਹਾਸ — ਦਸ ਗੁਰੂ ਸਾਹਿਬਾਨ, ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਅਤੇ ਆਜ਼ਾਦੀ ਸੰਘਰਸ਼',
      en: 'History of Punjab — Sikh Gurus, Ranjit Singh & Freedom Movement',
    },
    examRelevance: 'Punjab Master Cadre (12-15 Qs), PSSSB Clerk, Police, Patwari (5-8 Qs)',
    estimatedTime: '40 मिनट',
    content: {
      hi: `
        <div class="space-y-6">
          <div class="bg-emerald-950/60 border border-emerald-500/30 p-4 rounded-xl">
            <h4 class="text-emerald-300 font-bold text-base mb-2">🌾 पंजाब इतिहास का आधिकारिक सिलेबस</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              पंजाब की सभी परीक्षाओं का सबसे मुख्य और अनिवार्य खंड। इसमें 10 सिख गुरु साहिबान, खालसा पंथ की स्थापना, बंदा सिंह बहादुर, सिख मिसलें, महाराजा रणजीत सिंह और पंजाब के स्वतंत्रता सेनानी शामिल हैं।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. दस सिख गुरु साहिबान का कालखंड (1469 - 1708)</h3>
            <div class="space-y-2.5 text-xs text-slate-300">
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <strong class="text-teal-400">1. श्री गुरु नानक देव जी (1469 - 1539):</strong> ननकाना साहिब में जन्म। 'कीरत करो, नाम जपो, वंड छको'। संगत और पंगत (लंगर) प्रथा। 4 उदासियां। जपुजी साहिब, आसा दी वार, सिद्ध गोष्ठ।
              </div>
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <strong class="text-teal-400">2. श्री गुरु अंगद देव जी (1504 - 1552):</strong> मूल नाम: भाई लहणा जी। गुरुमुखी लिपि का मानकीकरण। खडूर साहिब की स्थापना, मल अखाड़ा।
              </div>
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <strong class="text-teal-400">3. श्री गुरु अमरदास जी (1479 - 1574):</strong> गोइंदवाल साहिब (84 पौड़ियों की बाओली)। 22 मंजियों की स्थापना। सती प्रथा व पर्दा प्रथा का विरोध। आनंद साहिब।
              </div>
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <strong class="text-teal-400">4. श्री गुरु रामदास जी (1534 - 1581):</strong> मूल नाम: भाई जेठा जी। चक रामदास (अमृतसर) की नींव 1577 में रखी। संतोखसर व अमृतसर सरोवर। विवाह हेतु 'लांवां' पाठ।
              </div>
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <strong class="text-teal-400">5. श्री गुरु अर्जुन देव जी (1563 - 1606):</strong> हरिमंदिर साहिब की नींव सूफी संत मियां मीर से रखवाई। 1604 में <strong>आदि ग्रंथ</strong> का संकलन (प्रथम ग्रंथी: बाबा बुड्ढा जी)। 1606 में जहांगीर के काल में लाहौर में शहादत दी (प्रथम शहीद गुरु)। सुखमनी साहिब।
              </div>
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <strong class="text-teal-400">6. श्री गुरु हरगोबिंद साहिब जी (1595 - 1644):</strong> 'मीरी और पीरी' तलवारें (राजनीतिक व आध्यात्मिक सत्ता)। 1609 में अकाल तख्त की स्थापना।
              </div>
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <strong class="text-teal-400">7. श्री गुरु हर राय जी (1630 - 1661) व 8. श्री गुरु हरकिशन जी (1656 - 1664):</strong> 'बाल गुरु' (दिल्ली में चेचक पीड़ितों की सेवा में ज्योति-जोत समाए)।
              </div>
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <strong class="text-teal-400">9. श्री गुरु तेग बहादुर जी (1621 - 1675):</strong> 'हिंद दी चादर'। कश्मीरी पंडितों के धर्म की रक्षा हेतु 11 नवंबर 1675 को चांदनी चौक, दिल्ली में औरंगजेब के आदेश पर शहादत दी। आनंदपुर साहिब की स्थापना की।
              </div>
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <strong class="text-teal-400">10. श्री गुरु गोबिंद सिंह जी (1666 - 1708):</strong> जन्म: पटना साहिब। 13 अप्रैल 1699 (बैसाखी) को आनंदपुर साहिब में <strong>खालसा पंथ</strong> की स्थापना (पंज प्यारे, 5 ककार)। जफरनामा लिखा। 1708 में नांदेड़ में गुरु ग्रंथ साहिब को शाश्वत गुरु घोषित किया।
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. महाराजा रणजीत सिंह का साम्राज्य (1799 - 1839)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-2">
              <p>• <strong>सुकरचकिया मिसल:</strong> रणजीत सिंह ने 1799 में लाहौर तथा 1802 में अमृतसर जीतकर सिख साम्राज्य स्थापित किया।</p>
              <p>• <strong>अमृतसर की संधि (1809):</strong> मेटकाफ और रणजीत सिंह के बीच सतलुज नदी को स्थायी सीमा तय किया गया।</p>
              <p>• <strong>विलय (1849):</strong> द्वितीय आंग्ल-सिख युद्ध के बाद 29 मार्च 1849 को लॉर्ड डलहौजी ने पंजाब का ब्रिटिश भारत में विलय किया।</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. स्वतंत्रता आंदोलन में पंजाब की भूमिका</h3>
            <div class="grid grid-cols-2 gap-2 text-xs text-slate-300">
              <span class="bg-slate-800 p-2.5 rounded-lg border border-slate-700">গदर आंदोलन 1913 (सैन फ्रांसिस्को, लाला हरदयाल, सोहन सिंह भकना, करतार सिंह सराभा)</span>
              <span class="bg-slate-800 p-2.5 rounded-lg border border-slate-700">कोमागाटा मारू घटना 1914 (बाबा गुरदित्त सिंह, 376 यात्री)</span>
              <span class="bg-slate-800 p-2.5 rounded-lg border border-slate-700">शहीद भगत सिंह (1926 नौजवान भारत सभा, 1928 सांडर्स वध, 23 मार्च 1931 शहादत)</span>
              <span class="bg-slate-800 p-2.5 rounded-lg border border-slate-700">गुरुद्वारा सुधार आंदोलन (1920-25) एवं 1925 का सिख गुरुद्वारा अधिनियम</span>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6">
          <div class="bg-emerald-950/60 border border-emerald-500/30 p-4 rounded-xl">
            <h4 class="text-emerald-300 font-bold text-base mb-2">🌾 ਪੰਜਾਬ ਦਾ ਇਤਿਹਾਸ</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਦਸ ਗੁਰੂ ਸਾਹਿਬਾਨਾਂ ਦੀਆਂ ਕੁਰਬਾਨੀਆਂ, 1699 ਵਿੱਚ ਖ਼ਾਲਸਾ ਪੰਥ ਦੀ ਸਾਜਨਾ, ਬਾਬਾ ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ, ਸਿੱਖ ਮਿਸਲਾਂ, ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਦਾ ਰਾਜ ਅਤੇ ਆਜ਼ਾਦੀ ਸੰਘਰਸ਼ ਵਿੱਚ ਪੰਜਾਬੀਆਂ ਦਾ ਯੋਗਦਾਨ।
            </p>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6">
          <div class="bg-emerald-950/60 border border-emerald-500/30 p-4 rounded-xl">
            <h4 class="text-emerald-300 font-bold text-base mb-2">🌾 History of Punjab</h4>
            <p class="text-slate-300 text-sm">Vital domain covering Ten Sikh Gurus (1469-1708), Creation of Khalsa (1699), Banda Singh Bahadur, Sikh Misls, Maharaja Ranjit Singh's empire (1799-1839), Annexation of Punjab (1849), Ghadar Party, and Shaheed Bhagat Singh.</p>
          </div>
        </div>
      `,
    },
    summary: {
      hi: 'पंजाब का इतिहास गुरु नानक देव जी (1469) से प्रारंभ होकर दस गुरुओं के बलिदान, 1699 में खालसा पंथ की स्थापना, 12 सिख मिसलों और महाराजा रणजीत सिंह के शासन (1799-1839) से समृद्ध है। 1849 में ब्रिटिश विलय के बाद गदर पार्टी, जलियांवाला बाग और भगत सिंह ने स्वतंत्रता में अमर योगदान दिया।',
      pa: 'ਪੰਜਾਬ ਦਾ ਇਤਿਹਾਸ ਗੁਰੂ ਸਾਹਿਬਾਨਾਂ, ਖਾਲਸਾ ਸਾਜਨਾ (1699), ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਅਤੇ ਆਜ਼ਾਦੀ ਲਹਿਰ ਦੀਆਂ ਸ਼ਹਾਦਤਾਂ ਨਾਲ ਭਰਿਆ ਹੈ।',
      en: "Punjab history encompasses the Ten Sikh Gurus (1469-1708), Creation of Khalsa (1699), Maharaja Ranjit Singh's kingdom (1799-1839), Anglo-Sikh Wars, and legendary contributions to Indian freedom.",
    },
    keyNotes: {
      hi: [
        '📌 1469 — श्री गुरु नानक देव जी का जन्म (ननकाना साहिब)।',
        '📌 1577 — श्री गुरु रामदास जी द्वारा अमृतसर (चक रामदास) की नींव।',
        '📌 1604 — श्री गुरु अर्जुन देव जी द्वारा आदि ग्रंथ का संकलन (प्रथम ग्रंथी: बाबा बुड्ढा जी)।',
        '📌 1606 — श्री गुरु अर्जुन देव जी की शहादत (लाहौर, जहांगीर के काल में)।',
        '📌 1609 — श्री गुरु हरगोबिंद साहिब जी द्वारा अकाल तख्त की स्थापना।',
        '📌 1675 (11 नवंबर) — श्री गुरु तेग बहादुर जी की शहादत चांदनी चौक दिल्ली में।',
        '📌 1699 (13 अप्रैल) — श्री गुरु गोबिंद सिंह जी द्वारा आनंदपुर साहिब में खालसा पंथ की स्थापना।',
        '📌 1708 — श्री गुरु ग्रंथ साहिब जी को नांदेड़ में शाश्वत गुरु घोषित किया।',
        '📌 1799 — महाराजा रणजीत सिंह द्वारा लाहौर पर विजय; 1809 में अमृतसर की संधि।',
        '📌 1849 (29 मार्च) — लॉर्ड डलहौजी द्वारा पंजाब का ब्रिटिश भारत में विलय।',
        '📌 1913 — सैन फ्रांसिस्को में गदर पार्टी की स्थापना (लाला हरदयाल, सोहन सिंह भकना)।',
        '📌 1931 (23 मार्च) — शहीद भगत सिंह, सुखदेव और राजगुरु को लाहौर में फांसी।',
      ],
      pa: [
        '📌 1469 — ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦਾ ਜਨਮ।',
        '📌 1604 — ਆਦਿ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦਾ ਸੰਕਲਨ।',
        '📌 1609 — ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ ਦੀ ਉਸਾਰੀ।',
        '📌 1675 — ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ ਦੀ ਸ਼ਹਾਦਤ (ਚਾਂਦਨੀ ਚੌਕ ਦਿੱਲੀ)।',
        '📌 1699 (13 ਅਪ੍ਰੈਲ) — ਖਾਲਸਾ ਪੰਥ ਦੀ ਸਾਜਨਾ।',
        '📌 1849 — ਪੰਜਾਬ ਦਾ ਅੰਗਰੇਜ਼ੀ ਰਾਜ ਵਿੱਚ ਰਲੇਵਾਂ।',
        '📌 1931 (23 ਮਾਰਚ) — ਸ਼ਹੀਦ ਭਗਤ ਸਿੰਘ ਜੀ ਦੀ ਸ਼ਹਾਦਤ।',
      ],
      en: [
        '📌 1469 — Guru Nanak Dev Ji born at Nankana Sahib.',
        '📌 1604 — Adi Granth compiled by Guru Arjan Dev Ji.',
        '📌 1609 — Akal Takht established by Guru Hargobind Ji.',
        '📌 1675 — Martyrdom of Guru Teg Bahadur Ji at Chandni Chowk, Delhi.',
        '📌 1699 (April 13) — Creation of Khalsa Panth at Anandpur Sahib.',
        '📌 1849 — Annexation of Punjab by Lord Dalhousie.',
        '📌 1931 (March 23) — Martyrdom of Shaheed Bhagat Singh, Sukhdev & Rajguru.',
      ],
    },
    flashcards: [
      {
        id: 'fc-p-1',
        q: { hi: 'खालसा पंथ की स्थापना कब, कहाँ और किसके द्वारा की गई?', pa: 'ਖ਼ਾਲਸਾ ਪੰਥ ਦੀ ਸਾਜਨਾ ਕਦੋਂ, ਕਿੱਥੇ ਅਤੇ ਕਿਸ ਨੇ ਕੀਤੀ?', en: 'When, where, and by whom was the Khalsa Panth created?' },
        a: { hi: '13 अप्रैल 1699 (बैसाखी) को आनंदपुर साहिब में 10वें गुरु श्री गुरु गोबिंद सिंह जी द्वारा।', pa: '13 ਅਪ੍ਰੈਲ 1699 ਨੂੰ ਆਨੰਦਪੁਰ ਸਾਹਿਬ ਵਿਖੇ ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਵੱਲੋਂ।', en: 'On April 13, 1699 at Anandpur Sahib by Guru Gobind Singh Ji.' },
        difficulty: 'easy',
      },
      {
        id: 'fc-p-2',
        q: { hi: 'आदि ग्रंथ साहिब का संकलन किस वर्ष और किसने किया?', pa: 'ਆਦਿ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦਾ ਸੰਕਲਨ ਕਦੋਂ ਹੋਇਆ?', en: 'In which year and by whom was the Adi Granth compiled?' },
        a: { hi: '1604 ई. में पंचम पातशाह श्री गुरु अर्जुन देव जी द्वारा। प्रथम मुख्य ग्रंथी बाबा बुड्ढा जी बने।', pa: '1604 ਈਸਵੀ ਵਿੱਚ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਵੱਲੋਂ।', en: 'In 1604 CE by Guru Arjan Dev Ji with Baba Buddha Ji as first Granthi.' },
        difficulty: 'easy',
      },
      {
        id: 'fc-p-3',
        q: { hi: 'अमृतसर की संधि (1809) की मुख्य शर्त क्या थी?', pa: 'ਅੰਮ੍ਰਿਤਸਰ ਦੀ ਸੰਧੀ (1809) ਦੀ ਮੁੱਖ ਸ਼ਰਤ ਕੀ ਸੀ?', en: 'What was the key term of the Treaty of Amritsar (1809)?' },
        a: { hi: 'सतलुज नदी को महाराजा रणजीत सिंह और अंग्रेजों के बीच की सीमा रेखा निर्धारित किया गया।', pa: 'ਸਤਲੁਜ ਦਰਿਆ ਨੂੰ ਸਰਹੱਦ ਮੰਨਿਆ ਗਿਆ।', en: 'River Satluj was accepted as the boundary between the two powers.' },
        difficulty: 'medium',
      },
    ],
    videos: [
      {
        title: 'Complete Punjab History for Master Cadre & PSSSB Clerk',
        channel: 'Punjab Career Hub',
        youtubeId: 'p2aGZ3fXw_1',
        language: 'pa',
        views: '980K',
        duration: '3:05:10',
        tags: ['Punjab History', 'Master Cadre', 'Gurus'],
      },
    ],
    bookRefs: [
      {
        title: 'History and Culture of Punjab (Class 9 & 10)',
        author: 'Punjab School Education Board (PSEB)',
        chapters: 'Mandatory PSEB standard curriculum',
        type: 'state-board',
      },
    ],
    documents: [
      {
            "title": "ERD Punjab · Master Cadre Social Science Official Syllabus PDF",
            "url": "https://erd.punjab.gov.in/master2022/Docs/SocialSciencesyllabus04_05_2022.pdf",
            "language": "English / Punjabi",
            "type": "syllabus"
      },
      {
            "title": "PSEB Class 10 · Samajik Sikhya Complete Textbook · Punjabi",
            "url": "https://static.pseb.ac.in/media/1670561302_Samajik%20Sikhya-10%28Punjabi%29%20Bhag-I.pdf",
            "language": "ਪੰਜਾਬੀ",
            "type": "textbook"
      },
      {
            "title": "NCERT Class 10 · Social Science Textbook · English",
            "url": "https://ncert.nic.in/textbook/pdf/jess301.pdf",
            "language": "English",
            "type": "ncert"
      },
      {
            "title": "NCERT Class 10 · सामाजिक विज्ञान पाठ्यपुस्तक · Hindi",
            "url": "https://ncert.nic.in/textbook/pdf/jhss301.pdf",
            "language": "Hindi",
            "type": "ncert"
      },
      {
            "title": "NIOS Secondary · Social Science Study Modules · Hindi/English",
            "url": "https://nios.ac.in/media/documents/SecSocSciCour/Hindi/Lesson-01.pdf",
            "language": "Bilingual",
            "type": "nios"
      }
],
    syllabusReference: {
      title: "ERD Punjab · Master Cadre History of Punjab & Sikh Gurus Syllabus",
      url: "https://erd.punjab.gov.in/master2022/Docs/SocialSciencesyllabus04_05_2022.pdf",
      body: "Education Recruitment Board (ERB), Punjab",
      verifiedOn: "15 March 2024"
    },
  },

  // =========================================================================
  // 3. INDIAN POLITY: FUNDAMENTAL RIGHTS (ARTICLES 12-35)
  // =========================================================================
  'fundamental-rights': {
    id: 'fundamental-rights',
    topicId: 'fundamental-rights',
    subjectId: 'social-science',
    category: 'polity',
    title: {
      hi: 'भारतीय राजव्यवस्था — मौलिक अधिकार (अनुच्छेद 12-35)',
      pa: 'ਭਾਰਤੀ ਰਾਜਨੀਤੀ — ਮੌਲਿਕ ਅਧਿਕਾਰ (ਅਨੁਛੇਦ 12-35)',
      en: 'Indian Polity — Fundamental Rights (Articles 12-35)',
    },
    examRelevance: 'Punjab Master Cadre (8-10 Qs), PSSSB Clerk (3 Qs), REET/CTET (4 Qs)',
    estimatedTime: '30 मिनट',
    content: {
      hi: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">⚖️ भारतीय संविधान: भाग III (मैग्ना कार्टा)</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              भारतीय संविधान के <strong>भाग III (अनुच्छेद 12 से 35)</strong> में मौलिक अधिकारों का उल्लेख है। यह अमेरिका के Bill of Rights से प्रेरित है। ये अधिकार <em>न्यायसंगत (Justiciable)</em> हैं।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">6 मूल अधिकार श्रेणियां (मूल संविधान में 7 थे)</h3>
            <p class="text-xs text-amber-300 mb-3">
              ⚠️ संपत्ति का अधिकार (Art. 31) 44वें संविधान संशोधन 1978 द्वारा मौलिक अधिकारों से हटाकर अनुच्छेद 300A के तहत कानूनी अधिकार बना दिया गया।
            </p>
            <div class="space-y-3 text-sm text-slate-300">
              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-teal-400 font-bold text-sm mb-1">1. समता का अधिकार (Right to Equality) — अनुच्छेद 14 से 18</h4>
                <ul class="text-xs space-y-1 list-disc pl-4 text-slate-300">
                  <li><strong>अनुच्छेद 14:</strong> विधि के समक्ष समता (UK) एवं विधियों का समान संरक्षण (USA)।</li>
                  <li><strong>अनुच्छेद 15:</strong> धर्म, मूलवंश, जाति, लिंग या जन्म स्थान के आधार पर भेदभाव का निषेध।</li>
                  <li><strong>अनुच्छेद 16:</strong> लोक नियोजन में अवसर की समानता।</li>
                  <li><strong>अनुच्छेद 17:</strong> अस्पृश्यता (छुआछूत) का अंत।</li>
                  <li><strong>अनुच्छेद 18:</strong> उपाधियों का अंत (सैनिक व शैक्षणिक को छोड़कर)।</li>
                </ul>
              </div>

              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-teal-400 font-bold text-sm mb-1">2. स्वतंत्रता का अधिकार (Right to Freedom) — अनुच्छेद 19 से 22</h4>
                <ul class="text-xs space-y-1 list-disc pl-4 text-slate-300">
                  <li><strong>अनुच्छेद 19 (6 स्वतंत्रताएं):</strong> वाक् व अभिव्यक्ति, शांतिपूर्ण सम्मेलन, संगठन निर्माण, अबाध संचरण, निवास, तथा कोई भी व्यवसाय अपनाने की स्वतंत्रता।</li>
                  <li><strong>अनुच्छेद 20:</strong> अपराधों के दोषसिद्धि के संबंध में संरक्षण (दोहरी सजा निषेध)।</li>
                  <li><strong>अनुच्छेद 21:</strong> प्राण एवं दैहिक स्वतंत्रता का संरक्षण (Right to Life)।</li>
                  <li><strong>अनुच्छेद 21A:</strong> 6 से 14 वर्ष के बच्चों के लिए मुफ्त एवं अनिवार्य शिक्षा (86वां संशोधन 2002)।</li>
                  <li><strong>अनुच्छेद 22:</strong> गिरफ्तारी और निरोध से संरक्षण (24 घंटे में मजिस्ट्रेट पेशी)।</li>
                </ul>
              </div>

              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-teal-400 font-bold text-sm mb-1">3. शोषण के विरुद्ध अधिकार — अनुच्छेद 23 व 24</h4>
                <p class="text-xs text-slate-300">मानव तस्करी व बलात् श्रम पर रोक (Art 23)। 14 वर्ष से कम बच्चों को खतरनाक उद्योगों में नियोजन पर रोक (Art 24)।</p>
              </div>

              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-teal-400 font-bold text-sm mb-1">4. धार्मिक स्वतंत्रता — अनुच्छेद 25 से 28</h4>
                <p class="text-xs text-slate-300">अंतःकरण की स्वतंत्रता, धर्म मानने, आचरण व प्रचार की स्वतंत्रता।</p>
              </div>

              <div class="bg-indigo-900/40 border border-indigo-500/60 p-4 rounded-xl">
                <h4 class="text-indigo-300 font-bold text-base mb-1">5. संवैधानिक उपचारों का अधिकार — अनुच्छेद 32 (संविधान की आत्मा)</h4>
                <p class="text-xs text-slate-300 mb-2">
                  डॉ. बी.आर. अंबेडकर ने अनुच्छेद 32 को "संविधान का हृदय व आत्मा" कहा। इसके तहत सुप्रीम कोर्ट 5 रिटें जारी करता है:
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  <span class="bg-slate-900/80 p-2 rounded">1. <strong>Habeas Corpus (बन्दी प्रत्यक्षीकरण):</strong> अवैध हिरासत से मुक्ति।</span>
                  <span class="bg-slate-900/80 p-2 rounded">2. <strong>Mandamus (परमादेश):</strong> सार्वजनिक अधिकारी को कर्तव्य पालन आदेश।</span>
                  <span class="bg-slate-900/80 p-2 rounded">3. <strong>Prohibition (प्रतिषेध):</strong> निचली अदालत को अधिकार सीमा में रखना।</span>
                  <span class="bg-slate-900/80 p-2 rounded">4. <strong>Certiorari (उत्प्रेषण):</strong> निचली अदालत का अवैध फैसला निरस्त करना।</span>
                  <span class="bg-slate-900/80 p-2 rounded col-span-1 md:col-span-2">5. <strong>Quo-Warranto (अधिकार पृच्छा):</strong> सार्वजनिक पद पर अवैध कब्जे की जांच।</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">⚖️ ਸੰਵਿਧਾਨ ਦਾ ਭਾਗ III — ਮੌਲਿਕ ਅਧਿਕਾਰ</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਅਨੁਛੇਦ 12 ਤੋਂ 35 ਤੱਕ ਕੁੱਲ 6 ਮੌਲਿਕ ਅਧਿਕਾਰ ਹਨ। ਅਨੁਛੇਦ 14 (ਸਮਾਨਤਾ), 17 (ਛੂਤ-ਛਾਤ ਦਾ ਖਾਤਮਾ), 21 (ਜੀਵਨ ਦਾ ਅਧਿਕਾਰ), 21A (ਸਿੱਖਿਆ ਦਾ ਅਧਿਕਾਰ) ਅਤੇ ਅਨੁਛੇਦ 32 (5 ਰਿੱਟਾਂ) ਪ੍ਰਮੁੱਖ ਹਨ।
            </p>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">⚖️ Part III: Fundamental Rights (Articles 12-35)</h4>
            <p class="text-slate-300 text-sm">Borrowed from the American Bill of Rights, Part III is known as the Magna Carta of India. The rights are justiciable under Article 32 (Supreme Court) and Article 226 (High Court).</p>
          </div>
        </div>
      `,
    },
    summary: {
      hi: 'मौलिक अधिकार संविधान के भाग III (अनुच्छेद 12-35) में वर्णित हैं। मूल संविधान में 7 थे, वर्तमान में 6 हैं। अनुच्छेद 14 से 18 समता, 19 से 22 स्वतंत्रता, 23-24 शोषण विरोध, 25-28 धर्म, 29-30 अल्पसंख्यक, तथा अनुच्छेद 32 संवैधानिक उपचार (5 प्रकार की रिट) प्रदान करता है जिसे डॉ. अंबेडकर ने "संविधान का हृदय व आत्मा" कहा।',
      pa: 'ਮੌਲਿਕ ਅਧਿਕਾਰ ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਦੇ ਭਾਗ III ਵਿੱਚ ਦਰਜ ਹਨ। ਅਨੁਛੇਦ 32 ਸੁਪਰੀਮ ਕੋਰਟ ਨੂੰ 5 ਰਿੱਟਾਂ ਜਾਰੀ ਕਰਨ ਦੀ ਤਾਕਤ ਦਿੰਦਾ ਹੈ।',
      en: 'Fundamental Rights (Articles 12-35, Part III) are justiciable safeguards against state overreach. Key articles include Art 14 (Equality), Art 17 (Untouchability), Art 21 (Life & Liberty), Art 21A (Education), and Art 32 (5 Constitutional Writs).',
    },
    keyNotes: {
      hi: [
        '📌 भाग III (अनुच्छेद 12-35) को "भारत का मैग्ना कार्टा" कहा जाता है।',
        '📌 44वें संशोधन (1978) द्वारा संपत्ति के अधिकार को हटाकर Art. 300A में कानूनी अधिकार बनाया गया।',
        '📌 अनुच्छेद 17 — अस्पृश्यता का अंत (Untouchability abolished)।',
        '📌 अनुच्छेद 21A — 6 से 14 वर्ष के बच्चों को अनिवार्य शिक्षा (86वां संविधान संशोधन 2002)।',
        '📌 आपातकाल (Art 352) के दौरान भी अनुच्छेद 20 और 21 को कभी निलंबित नहीं किया जा सकता।',
        '📌 अनुच्छेद 32 — डॉ. अंबेडकर ने इसे "संविधान का हृदय व आत्मा" कहा।',
        '📌 5 रिटें: बन्दी प्रत्यक्षीकरण, परमादेश, प्रतिषेध, उत्प्रेषण, अधिकार पृच्छा।',
        '📌 हाई कोर्ट अनुच्छेद 226 के तहत रिट जारी कर सकता है।',
      ],
      pa: [
        '📌 ਭਾਗ III ਨੂੰ ਭਾਰਤ ਦਾ "ਮੈਗਨਾ ਕਾਰਟਾ" ਕਿਹਾ ਜਾਂਦਾ ਹੈ।',
        '📌 ਆਰਟੀਕਲ 17 — ਛੂਤ-ਛਾਤ ਦਾ ਖਾਤਮਾ।',
        '📌 ਆਰਟੀਕਲ 21A — ਮੁਫ਼ਤ ਸਿੱਖਿਆ (86ਵੀਂ ਸੋਧ 2002)।',
        '📌 ਆਰਟੀਕਲ 32 — ਸੰਵਿਧਾਨ ਦਾ ਦਿਲ ਤੇ ਆਤਮਾ (5 ਰਿੱਟਾਂ)।',
      ],
      en: [
        '📌 Part III (Articles 12-35) is termed the Magna Carta of India.',
        '📌 Article 17: Abolition of untouchability.',
        '📌 Article 21A: Right to free & compulsory education (86th Amendment, 2002).',
        '📌 Articles 20 and 21 can NEVER be suspended during National Emergency.',
        '📌 Article 32: Heart & soul of Constitution, 5 constitutional writs.',
      ],
    },
    flashcards: [
      {
        id: 'fc-fr-1',
        q: { hi: 'डॉ. बी.आर. अंबेडकर ने किस अनुच्छेद को "संविधान का हृदय और आत्मा" कहा था?', pa: 'ਡਾ. ਅੰਬੇਡਕਰ ਨੇ ਕਿਸ ਆਰਟੀਕਲ ਨੂੰ ਸੰਵਿਧਾਨ ਦੀ ਆਤਮਾ ਕਿਹਾ ਸੀ?', en: 'Which article was called the "Heart and Soul of the Constitution" by Dr. Ambedkar?' },
        a: { hi: 'अनुच्छेद 32 (संवैधानिक उपचारों का अधिकार), जिसके तहत सुप्रीम कोर्ट 5 रिटें जारी करता है।', pa: 'ਆਰਟੀਕਲ 32 (5 ਰਿੱਟਾਂ)।', en: 'Article 32 (Right to Constitutional Remedies).' },
        difficulty: 'easy',
      },
      {
        id: 'fc-fr-2',
        q: { hi: 'शिक्षा का अधिकार (अनुच्छेद 21A) किस संविधान संशोधन द्वारा जोड़ा गया?', pa: 'ਸਿੱਖਿਆ ਦਾ ਅਧਿਕਾਰ (21A) ਕਿਹੜੀ ਸੋਧ ਰਾਹੀਂ ਜੁੜਿਆ?', en: 'By which amendment was Article 21A inserted?' },
        a: { hi: '86वें संविधान संशोधन अधिनियम, 2002 द्वारा।', pa: '86ਵੀਂ ਸੋਧ 2002।', en: '86th Constitutional Amendment Act, 2002.' },
        difficulty: 'easy',
      },
    ],
    videos: [
      {
        title: 'Fundamental Rights Complete Master Class (Articles 12-35)',
        channel: 'StudyIQ IAS',
        youtubeId: 'p2aGZ3fXw_2',
        language: 'hi',
        views: '3.1M',
        duration: '1:45:12',
        tags: ['Polity', 'Fundamental Rights', 'Articles 12-35'],
      },
    ],
    bookRefs: [
      {
        title: 'Indian Polity (Chapters 7 to 11)',
        author: 'M. Laxmikanth (McGraw Hill)',
        chapters: 'Fundamental Rights & Writs Analysis',
        type: 'standard',
      },
    ],
    documents: [
      {
            "title": "ERD Punjab · Master Cadre Social Science Official Syllabus PDF",
            "url": "https://erd.punjab.gov.in/master2022/Docs/SocialSciencesyllabus04_05_2022.pdf",
            "language": "English / Punjabi",
            "type": "syllabus"
      },
      {
            "title": "PSEB Class 10 · Samajik Sikhya Complete Textbook · Punjabi",
            "url": "https://static.pseb.ac.in/media/1670561302_Samajik%20Sikhya-10%28Punjabi%29%20Bhag-I.pdf",
            "language": "ਪੰਜਾਬੀ",
            "type": "textbook"
      },
      {
            "title": "NCERT Class 10 · Social Science Textbook · English",
            "url": "https://ncert.nic.in/textbook/pdf/jess301.pdf",
            "language": "English",
            "type": "ncert"
      },
      {
            "title": "NCERT Class 10 · सामाजिक विज्ञान पाठ्यपुस्तक · Hindi",
            "url": "https://ncert.nic.in/textbook/pdf/jhss301.pdf",
            "language": "Hindi",
            "type": "ncert"
      },
      {
            "title": "NIOS Secondary · Social Science Study Modules · Hindi/English",
            "url": "https://nios.ac.in/media/documents/SecSocSciCour/Hindi/Lesson-01.pdf",
            "language": "Bilingual",
            "type": "nios"
      }
],
    syllabusReference: {
      title: "Constitution of India Part III Fundamental Rights & Writs",
      url: "https://legislative.gov.in/constitution-of-india/",
      body: "Ministry of Law and Justice, Govt of India",
      verifiedOn: "15 March 2024"
    },
  },

  // =========================================================================
  // 4. ANCIENT INDIA & INDUS VALLEY CIVILISATION
  // =========================================================================
  'ancient-india': {
    id: 'ancient-india',
    topicId: 'ancient-india',
    subjectId: 'social-science',
    category: 'history',
    title: {
      hi: 'प्राचीन भारत — सिंधु घाटी सभ्यता, वैदिक काल व मौर्य साम्राज्य',
      pa: 'ਪ੍ਰਾਚੀਨ ਭਾਰਤ — ਸਿੰਧੂ ਘਾਟੀ ਸੱਭਿਅਤਾ, ਵੈਦਿਕ ਕਾਲ ਅਤੇ ਮੌਰਿਆ ਸਾਮਰਾਜ',
      en: 'Ancient India — Indus Valley, Vedic Age & Mauryan Empire',
    },
    examRelevance: 'Punjab Master Cadre (8-10 Qs), Lecturer Cadre, REET Level 2',
    estimatedTime: '35 मिनट',
    content: {
      hi: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🏛️ प्राचीन भारतीय इतिहास की रूपरेखा</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              हड़प्पा सभ्यता (कांस्य युगीन), वैदिक काल, बौद्ध व जैन धर्म का उदय, 16 महाजनपद, मौर्य साम्राज्य (अशोक का धम्म) तथा गुप्त काल (स्वर्ण युग) प्राचीन भारत के सबसे महत्वपूर्ण अध्याय हैं।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. सिंधु घाटी सभ्यता (Indus Valley Civilisation - 2500 से 1750 ई.पू.)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-2">
              <p>• <strong>प्रथम खोज:</strong> 1921 में दयाराम साहनी द्वारा <em>हड़प्पा (रावी नदी तट, पाकिस्तान)</em> की खोज। 1922 में राखालदास बनर्जी द्वारा <em>मोहनजोदड़ो (सिंधु नदी, नर्तकी की कांस्य मूर्ति व विशाल स्नानागार)</em> की खोज।</p>
              <p>• <strong>पंजाब के प्रमुख स्थल:</strong> <strong>रोपड़ (रूपनगर, पंजाब)</strong> — सतलुज नदी तट पर यज्ञदत्त शर्मा द्वारा उत्खनन; यहाँ मनुष्य के साथ कुत्ते को दफनाने का साक्ष्य मिला।</p>
              <p>• <strong>अन्य प्रमुख स्थल:</strong> लोथल (गुजरात, प्राचीन बंदरगाह/डॉकयार्ड), कालीबंगा (राजस्थान, जुते हुए खेत व अग्निकुंड), धौलावीरा (गुजरात, उन्नत जल प्रबंधन प्रणाली, 3 भागों में विभाजित नगर)।</p>
              <p>• <strong>विशेषताएँ:</strong> ग्रिड पद्धति (शतरंजनुमा नगर योजना), पक्की ईंटों के मकान, उन्नत जल निकासी व्यवस्था, पशुपति मुहर [आद्य-शिव proto-Shiva, व्याख्या ऐतिहासिक रूप से बहस का विषय (debated)], लिपि भावचित्रात्मक (अपठित)।</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. वैदिक संस्कृति व बौद्ध-जैन धर्म का उदय</h3>
            <div class="space-y-2 text-xs text-slate-300">
              <div class="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                <p class="text-teal-400 font-bold">ऋग्वैदिक काल (1500 - 1000 ई.पू.):</p>
                <p>सप्तसैंधव प्रदेश (पंजाब की भूमि)। ऋग्वेद (सबसे प्राचीन, 10 मंडल, 1028 सूक्त)। गायत्री मंत्र (तीसरे मंडल में, विश्वामित्र द्वारा रचित)।</p>
              </div>
              <div class="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                <p class="text-amber-400 font-bold">बौद्ध धर्म एवं जैन धर्म:</p>
                <p><strong>गौतम बुद्ध:</strong> जन्म लुंबिनी, ज्ञान बोधगया, प्रथम उपदेश सारनाथ (धर्मचक्रप्रवर्तन), महापरिनिर्वाण कुशीनगर। चार आर्य सत्य एवं अष्टांगिक मार्ग। <strong>भगवान महावीर:</strong> 24वें तीर्थंकर, त्रिरत्न (सम्यक दर्शन, सम्यक ज्ञान, सम्यक चरित्र), पंच महाव्रत (सत्य, अहिंसा, अस्तेय, अपरिग्रह, ब्रह्मचर्य)।</p>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. मौर्य साम्राज्य व सम्राट अशोक का धम्म</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-2">
              <p>• <strong>स्थापना:</strong> 322 ई.पू. में चंद्रगुप्त मौर्य ने चाणक्य (कौटिल्य) की सहायता से नंद वंश के धनानंद को हराकर की। पुस्तक: चाणक्य का <em>अर्थशास्त्र</em>, मेगस्थनीज की <em>इंडिका</em>।</p>
              <p>• <strong>कलिंग युद्ध (261 ई.पू.):</strong> 13वें शिलालेख के अनुसार कलिंग युद्ध के भारी नरसंहार के बाद सम्राट अशोक ने 'भेरीघोष' त्यागकर 'धम्मघोष' अपनाया तथा बौद्ध धर्म स्वीकार किया।</p>
              <p>• <strong>सारनाथ स्तंभ:</strong> भारत का राष्ट्रीय प्रतीक (चार सिंहों का शीर्ष) अशोक के सारनाथ सिंह स्तंभ से लिया गया है।</p>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🏛️ ਪ੍ਰਾਚੀਨ ਭਾਰਤ ਦਾ ਇਤਿਹਾਸ</h4>
            <p class="text-slate-300 text-sm">ਸਿੰਧੂ ਘਾਟੀ ਸੱਭਿਅਤਾ (ਹੜੱਪਾ 1921, ਰੋਪੜ ਪੰਜਾਬ), ਰਿਗਵੈਦਿਕ ਕਾਲ, ਬੁੱਧ ਧਰਮ, ਜੈਨ ਧਰਮ ਅਤੇ ਮੌਰਿਆ ਸਾਮਰਾਜ (ਅਸ਼ੋਕ ਦਾ ਧੰਮ)।</p>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🏛️ Ancient Indian Civilisations</h4>
            <p class="text-slate-300 text-sm">Key pillars: Indus Valley Civilisation (Harappa 1921, Mohenjo-Daro 1922, Ropar in Punjab), Vedic culture, Rise of Buddhism & Jainism, and the Mauryan Empire under Ashoka.</p>
          </div>
        </div>
      `,
    },
    summary: {
      hi: 'प्राचीन भारत सिंधु घाटी सभ्यता (कांस्य युगीन नगर योजना, रोपड़, लोथल, कालीबंगा), ऋग्वैदिक संस्कृति (सप्तसैंधव प्रदेश), बौद्ध व जैन धर्म के दार्शनिक सिद्धांतों, तथा मौर्य साम्राज्य (चंद्रगुप्त, चाणक्य, अशोक का कलिंग युद्ध 261 ई.पू.) से निर्मित है।',
      pa: 'ਸਿੰਧੂ ਘਾਟੀ ਸੱਭਿਅਤਾ, ਵੈਦਿਕ ਕਾਲ ਅਤੇ ਮੌਰਿਆ ਕਾਲ ਪ੍ਰਾਚੀਨ ਭਾਰਤ ਦੇ ਮੁੱਖ ਵਿਸ਼ੇ ਹਨ।',
      en: 'Ancient India spans the Bronze Age Indus Valley Civilisation, Vedic period, spiritual reformations of Buddhism/Jainism, and the pan-Indian Mauryan Empire under Ashoka.',
    },
    keyNotes: {
      hi: [
        '📌 1921 — दयाराम साहनी द्वारा हड़प्पा (रावी तट) की खोज।',
        '📌 1922 — राखालदास बनर्जी द्वारा मोहनजोदड़ो (विशाल स्नानागार, कांस्य नर्तकी) की खोज।',
        '📌 रोपड़ (पंजाब) — सतलुज तट पर सिंधु घाटी सभ्यता का प्रमुख स्थल।',
        '📌 लोथल (गुजरात) — विश्व का सबसे प्राचीन मानव-निर्मित डॉकयार्ड/गोदीबाड़ा।',
        '📌 ऋग्वेद — सबसे प्राचीन वेद (10 मंडल, 1028 सूक्त; तीसरे मंडल में गायत्री मंत्र)।',
        '📌 261 ई.पू. — सम्राट अशोक का कलिंग युद्ध (13वां शिलालेख), जिसके बाद धम्म विजय का संकल्प लिया।',
        '📌 कौटिल्य का अर्थशास्त्र — मौर्य युगीन शासन व्यवस्था का मुख्य स्रोत।',
        '📌 सारनाथ का सिंह स्तंभ — भारत का राष्ट्रीय प्रतीक चिन्ह।',
      ],
      pa: [
        '📌 1921 — ਹੜੱਪਾ ਦੀ ਖੋਜ (ਦਯਾਰਾਮ ਸਾਹਨੀ)।',
        '📌 ਰੋਪੜ (ਪੰਜਾਬ) — ਸਤਲੁਜ ਕੰਢੇ ਸਿੰਧੂ ਘਾਟੀ ਦਾ ਅਹਿਮ ਕੇਂਦਰ।',
        '📌 261 ਈ.ਪੂ. — ਕਲਿੰਗਾ ਯੁੱਧ (ਅਸ਼ੋਕ)।',
        '📌 ਰਿਗਵੇਦ — ਸਭ ਤੋਂ ਪੁਰਾਣਾ ਵੇਦ (1028 ਸੂਕਤ)।',
      ],
      en: [
        '📌 1921 — Discovery of Harappa by Dayaram Sahni on River Ravi.',
        '📌 1922 — Discovery of Mohenjo-Daro by R.D. Banerjee (Great Bath, Bronze Dancing Girl).',
        '📌 Ropar (Punjab) — Major Indus Valley site excavated on River Satluj.',
        "📌 Lothal (Gujarat) — World's earliest artificial dockyard.",
        '📌 261 BCE — Kalinga War (13th Rock Edict), transforming Ashoka towards Dhamma.',
      ],
    },
    flashcards: [
      {
        id: 'fc-a-1',
        q: { hi: 'पंजाब में स्थित प्रसिद्ध सिंधु घाटी सभ्यता स्थल कौन-सा है?', pa: 'ਪੰਜਾਬ ਵਿੱਚ ਸਿੰਧੂ ਘਾਟੀ ਦਾ ਪ੍ਰਮੁੱਖ ਕੇਂਦਰ ਕਿਹੜਾ ਹੈ?', en: 'Which is the famous Indus Valley Civilisation site located in Punjab?' },
        a: { hi: 'रोपड़ (रूपनगर), जो सतलुज नदी के किनारे स्थित है।', pa: 'ਰੋਪੜ (ਰੂਪਨਗਰ), ਸਤਲੁਜ ਦਰਿਆ ਦੇ ਕੰਢੇ।', en: 'Ropar (Rupnagar), located on the banks of River Satluj.' },
        difficulty: 'easy',
      },
      {
        id: 'fc-a-2',
        q: { hi: 'कलिंग का युद्ध किस वर्ष हुआ था और इसका उल्लेख अशोक के किस शिलालेख में है?', pa: 'ਕਲਿੰਗਾ ਦੀ ਲੜਾਈ ਕਦੋਂ ਹੋਈ ਸੀ?', en: 'In which year was the Kalinga War fought and in which edict is it mentioned?' },
        a: { hi: '261 ई.पू. में हुआ था और इसका उल्लेख 13वें प्रमुख शिलालेख (13th Major Rock Edict) में मिलता है।', pa: '261 ਈ.ਪੂ. ਵਿੱਚ, 13ਵੇਂ ਸ਼ਿਲਾਲੇਖ ਵਿੱਚ।', en: 'In 261 BCE, inscribed in the 13th Major Rock Edict.' },
        difficulty: 'medium',
      },
    ],
    videos: [
      {
        title: 'Indus Valley Civilisation & Ancient India Complete Revision',
        channel: 'StudyIQ IAS',
        youtubeId: 'p2aGZ3fXw_3',
        language: 'hi',
        views: '1.4M',
        duration: '1:30:15',
        tags: ['Ancient India', 'Indus Valley', 'Master Cadre'],
      },
    ],
    bookRefs: [
      {
        title: 'Our Pasts - I (Class 6)',
        author: 'NCERT',
        chapters: 'Indus Valley, Vedic Age & Ashoka',
        type: 'ncert',
      },
    ],
    documents: [
      {
            "title": "ERD Punjab · Master Cadre Social Science Official Syllabus PDF",
            "url": "https://erd.punjab.gov.in/master2022/Docs/SocialSciencesyllabus04_05_2022.pdf",
            "language": "English / Punjabi",
            "type": "syllabus"
      },
      {
            "title": "PSEB Class 10 · Samajik Sikhya Complete Textbook · Punjabi",
            "url": "https://static.pseb.ac.in/media/1670561302_Samajik%20Sikhya-10%28Punjabi%29%20Bhag-I.pdf",
            "language": "ਪੰਜਾਬੀ",
            "type": "textbook"
      },
      {
            "title": "NCERT Class 10 · Social Science Textbook · English",
            "url": "https://ncert.nic.in/textbook/pdf/jess301.pdf",
            "language": "English",
            "type": "ncert"
      },
      {
            "title": "NCERT Class 10 · सामाजिक विज्ञान पाठ्यपुस्तक · Hindi",
            "url": "https://ncert.nic.in/textbook/pdf/jhss301.pdf",
            "language": "Hindi",
            "type": "ncert"
      },
      {
            "title": "NIOS Secondary · Social Science Study Modules · Hindi/English",
            "url": "https://nios.ac.in/media/documents/SecSocSciCour/Hindi/Lesson-01.pdf",
            "language": "Bilingual",
            "type": "nios"
      }
],
    syllabusReference: {
      title: "ERD Punjab · Master Cadre Social Science Ancient India Syllabus",
      url: "https://erd.punjab.gov.in/master2022/Docs/SocialSciencesyllabus04_05_2022.pdf",
      body: "Education Recruitment Board (ERB), Punjab",
      verifiedOn: "15 March 2024"
    },
  },

  // =========================================================================
  // 5. MEDIEVAL INDIA (DELHI SULTANATE & MUGHALS)
  // =========================================================================
  'medieval-india': {
    id: 'medieval-india',
    topicId: 'medieval-india',
    subjectId: 'social-science',
    category: 'history',
    title: {
      hi: 'मध्यकालीन भारत — दिल्ली सल्तनत व मुग़ल साम्राज्य',
      pa: 'ਮੱਧਕਾਲੀ ਭਾਰਤ — ਦਿੱਲੀ ਸਲਤਨਤ ਅਤੇ ਮੁਗਲ ਸਾਮਰਾਜ',
      en: 'Medieval India — Delhi Sultanate & Mughal Empire',
    },
    examRelevance: 'Punjab Master Cadre (8-10 Qs), Lecturer Cadre (10 Qs)',
    estimatedTime: '35 मिनट',
    content: {
      hi: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">⚔️ मध्यकालीन भारत की राजनीतिक संरचना</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              1206 से 1526 तक दिल्ली सल्तनत (5 राजवंश: गुलाम, खिलजी, तुगलक, सैयद, लोदी) तथा 1526 से 1707 तक मुग़ल साम्राज्य (बाबर से औरंगजेब) मध्यकालीन भारत के केंद्रीय विषय हैं।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. दिल्ली सल्तनत (1206 - 1526 ई.)</h3>
            <div class="space-y-2.5 text-xs text-slate-300">
              <div class="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                <strong class="text-teal-400">गुलाम वंश (1206-1290):</strong> कुतुबुद्दीन ऐबक (लाखबख्श, कुतुब मीनार की नींव), इल्तुतमिश (सल्तनत का वास्तविक संस्थापक, एकता प्रणाली, तुर्कान-ए-चिहलगानी), रजिया सुल्तान (भारत की प्रथम महिला मुस्लिम शासिका 1236-40), बलबन (लौह व रक्त की नीति, सिजदा व पायबोस)।
              </div>
              <div class="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                <strong class="text-amber-400">खिलजी वंश (1290-1320):</strong> अलाउद्दीन खिलजी (बाजार नियंत्रण प्रणाली, दाग व हुलिया प्रथा, दक्षिण भारत विजय सेनापति मलिक काफूर द्वारा)।
              </div>
              <div class="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                <strong class="text-indigo-400">तुगलक वंश (1320-1414):</strong> मुहम्मद बिन तुगलक (राजधानी दिल्ली से दौलताबाद स्थानांतरण, सांकेतिक तांबे की मुद्रा), फिरोज शाह तुगलक (नहरों का निर्माण, दीवान-ए-खैरात)।
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. मुग़ल साम्राज्य (1526 - 1707 ई.)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-2">
              <p>• <strong>पानीपत का प्रथम युद्ध (21 अप्रैल 1526):</strong> बाबर ने इब्राहिम लोदी को हराकर मुग़ल वंश की नींव रखी। तोपखाने व तुलुगमा पद्धति का प्रयोग।</p>
              <p>• <strong>अकबर (1556 - 1605):</strong> पानीपत का द्वितीय युद्ध (1556, बैरम खां vs हेमू)। 1564 में जजिया कर समाप्त किया। मनसबदारी प्रशासनिक प्रणाली लागू की। 1582 में 'दीन-ए-इलाही' धर्म चलाया। सुलह-ए-कुल (सार्वभौमिक शांति) की नीति।</p>
              <p>• <strong>शाहजहाँ:</strong> मुग़ल स्थापत्य कला का स्वर्ण युग (ताजमहल, लाल किला, जामा मस्जिद, मयूर सिंहासन)।</p>
              <p>• <strong>औरंगजेब (1658 - 1707):</strong> 'जिंदा पीर'। 1679 में जजिया कर पुनः लागू किया। श्री गुरु तेग बहादुर जी को 1675 में शहीद करवाया।</p>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">⚔️ ਮੱਧਕਾਲੀ ਭਾਰਤ</h4>
            <p class="text-slate-300 text-sm">ਦਿੱਲੀ ਸਲਤਨਤ (1206-1526) ਅਤੇ ਮੁਗਲ ਸਾਮਰਾਜ (1526-1707, ਪਾਣੀਪਤ ਦੀਆਂ ਲੜਾਈਆਂ, ਅਕਬਰ ਦਾ ਪ੍ਰਬੰਧ)।</p>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">⚔️ Medieval Indian History</h4>
            <p class="text-slate-300 text-sm">Covers Delhi Sultanate (1206-1526), Alauddin Khalji's market reforms, Battles of Panipat, and the Mughal Empire from Babur to Aurangzeb.</p>
          </div>
        </div>
      `,
    },
    summary: {
      hi: 'मध्यकालीन भारत दिल्ली सल्तनत के पांच राजवंशों (गुलाम, खिलजी, तुगलक, सैयद, लोदी) तथा मुग़ल काल (बाबर, अकबर की मनसबदारी व सुलह-ए-कुल, शाहजहाँ की स्थापत्य कला, औरंगजेब) का महत्वपूर्ण कालखंड है।',
      pa: 'ਦਿੱਲੀ ਸਲਤਨਤ ਅਤੇ ਮੁਗਲ ਕਾਲ ਮੱਧਕਾਲੀ ਭਾਰਤ ਦੇ ਮੁੱਖ ਆਧਾਰ ਹਨ।',
      en: 'Medieval India covers the 5 dynasties of the Delhi Sultanate (1206-1526) and the Mughal Empire (1526-1707) renowned for administrative and architectural milestones.',
    },
    keyNotes: {
      hi: [
        '📌 1206 — कुतुबुद्दीन ऐबक द्वारा गुलाम वंश की स्थापना।',
        '📌 रजिया सुल्तान (1236-1240) — भारत की प्रथम महिला मुस्लिम शासिका।',
        '📌 अलाउद्दीन खिलजी — बाजार नियंत्रण प्रणाली एवं दाग व हुलिया प्रथा।',
        '📌 1526 (21 अप्रैल) — पानीपत का प्रथम युद्ध: बाबर ने इब्राहिम लोदी को पराजित किया।',
        '📌 1556 — पानीपत का द्वितीय युद्ध: अकबर ने हेमू को हराया।',
        '📌 1564 — अकबर ने जजिया कर समाप्त किया; मनसबदारी प्रणाली प्रारंभ की।',
        '📌 1679 — औरंगजेब ने जजिया कर पुनः लागू किया।',
      ],
      pa: [
        '📌 1206 — ਗੁਲਾਮ ਵੰਸ਼ ਦੀ ਸਥਾਪਨਾ।',
        '📌 ਰਜ਼ੀਆ ਸੁਲਤਾਨ — ਪਹਿਲੀ ਮਹਿਲਾ ਮੁਸਲਿਮ ਸ਼ਾਸਕ।',
        '📌 1526 — ਪਾਣੀਪਤ ਦੀ ਪਹਿਲੀ ਲੜਾਈ।',
        '📌 1556 — ਪਾਣੀਪਤ ਦੀ ਦੂਜੀ ਲੜਾਈ।',
      ],
      en: [
        '📌 1206 — Slave Dynasty founded by Qutb-ud-din Aibak.',
        '📌 Raziya Sultan (1236-1240) — First female Muslim sovereign of India.',
        '📌 1526 (April 21) — First Battle of Panipat: Babur founded Mughal Empire.',
        '📌 1556 — Second Battle of Panipat: Akbar defeated Hemu.',
        '📌 Mansabdari System introduced by Akbar for civil and military administration.',
      ],
    },
    flashcards: [
      {
        id: 'fc-med-1',
        q: { hi: 'दिल्ली सल्तनत की प्रथम और एकमात्र महिला शासिका कौन थीं?', pa: 'ਦਿੱਲੀ ਸਲਤਨਤ ਦੀ ਪਹਿਲੀ ਮਹਿਲਾ ਸ਼ਾਸਕ ਕੌਣ ਸੀ?', en: 'Who was the first and only female ruler of the Delhi Sultanate?' },
        a: { hi: 'रजिया सुल्तान (1236 - 1240 ई.), जो इल्तुतमिश की पुत्री थीं।', pa: 'ਰਜ਼ੀਆ ਸੁਲਤਾਨ (1236-1240)।', en: 'Raziya Sultan (1236-1240 CE), daughter of Iltutmish.' },
        difficulty: 'easy',
      },
      {
        id: 'fc-med-2',
        q: { hi: 'पानीपत का प्रथम युद्ध कब और किसके मध्य लड़ा गया था?', pa: 'ਪਾਣੀਪਤ ਦੀ ਪਹਿਲੀ ਲੜਾਈ ਕਦੋਂ ਹੋਈ?', en: 'When and between whom was the First Battle of Panipat fought?' },
        a: { hi: '21 अप्रैल 1526 को बाबर और इब्राहिम लोदी के बीच। बाबर विजयी हुआ।', pa: '21 ਅਪ੍ਰੈਲ 1526 ਨੂੰ ਬਾਬਰ ਅਤੇ ਇਬਰਾਹਿਮ ਲੋਦੀ ਵਿਚਕਾਰ।', en: 'On April 21, 1526 between Babur and Ibrahim Lodi.' },
        difficulty: 'easy',
      },
    ],
    videos: [
      {
        title: 'Medieval History Delhi Sultanate & Mughal Empire Complete',
        channel: 'StudyIQ IAS',
        youtubeId: 'p2aGZ3fXw_4',
        language: 'hi',
        views: '1.2M',
        duration: '2:00:30',
        tags: ['Medieval India', 'Mughals', 'Sultanate'],
      },
    ],
    bookRefs: [
      {
        title: 'Our Pasts - II (Class 7)',
        author: 'NCERT',
        chapters: 'Delhi Sultans & Mughal Empire',
        type: 'ncert',
      },
    ],
    documents: [
      {
            "title": "ERD Punjab · Master Cadre Social Science Official Syllabus PDF",
            "url": "https://erd.punjab.gov.in/master2022/Docs/SocialSciencesyllabus04_05_2022.pdf",
            "language": "English / Punjabi",
            "type": "syllabus"
      },
      {
            "title": "PSEB Class 10 · Samajik Sikhya Complete Textbook · Punjabi",
            "url": "https://static.pseb.ac.in/media/1670561302_Samajik%20Sikhya-10%28Punjabi%29%20Bhag-I.pdf",
            "language": "ਪੰਜਾਬੀ",
            "type": "textbook"
      },
      {
            "title": "NCERT Class 10 · Social Science Textbook · English",
            "url": "https://ncert.nic.in/textbook/pdf/jess301.pdf",
            "language": "English",
            "type": "ncert"
      },
      {
            "title": "NCERT Class 10 · सामाजिक विज्ञान पाठ्यपुस्तक · Hindi",
            "url": "https://ncert.nic.in/textbook/pdf/jhss301.pdf",
            "language": "Hindi",
            "type": "ncert"
      },
      {
            "title": "NIOS Secondary · Social Science Study Modules · Hindi/English",
            "url": "https://nios.ac.in/media/documents/SecSocSciCour/Hindi/Lesson-01.pdf",
            "language": "Bilingual",
            "type": "nios"
      }
],
    syllabusReference: {
      title: "ERD Punjab · Master Cadre Medieval India Delhi Sultanate & Mughals",
      url: "https://erd.punjab.gov.in/master2022/Docs/SocialSciencesyllabus04_05_2022.pdf",
      body: "Education Recruitment Board (ERB), Punjab",
      verifiedOn: "15 March 2024"
    },
  },

  // =========================================================================
  // 6. GEOGRAPHY OF PUNJAB (RIVERS, DOABS, SOILS & AGRICULTURE)
  // =========================================================================
  'punjab-geography': {
    id: 'punjab-geography',
    topicId: 'punjab-geography',
    subjectId: 'social-science',
    category: 'geography',
    title: {
      hi: 'पंजाब का भूगोल — नदियां, 5 दोआब, मिट्टी व हरित क्रांति',
      pa: 'ਪੰਜਾਬ ਦਾ ਭੂਗੋਲ — ਦਰਿਆ, 5 ਦੁਆਬੇ, ਮਿੱਟੀ ਅਤੇ ਹਰੀ ਕ੍ਰਾਂਤੀ',
      en: 'Geography of Punjab — Rivers, 5 Doabs, Soils & Agriculture',
    },
    examRelevance: 'Punjab Master Cadre (8-10 Qs), Patwari (10 Qs), Clerk, Police (5 Qs)',
    estimatedTime: '30 मिनट',
    content: {
      hi: `
        <div class="space-y-6">
          <div class="bg-teal-950/60 border border-teal-500/30 p-4 rounded-xl">
            <h4 class="text-teal-300 font-bold text-base mb-2">🌍 पंजाब की भौगोलिक स्थिति (Geographical Profile)</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              पंजाब भारत के उत्तर-पश्चिम में स्थित है। इसका कुल क्षेत्रफल <strong>50,362 वर्ग किमी</strong> है (भारत के कुल क्षेत्रफल का 1.54%)। इसमें 23 जिले और 5 प्रशासनिक मंडल (फतेहगढ़ साहिब, फिरोजपुर, फरीदकोट, जालंधर, पटियाला) हैं। 23वां नवगठित जिला <strong>मलेरकोटला</strong> (2021) है।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. पंजाब की नदियां एवं 5 ऐतिहासिक दोआब</h3>
            <p class="text-slate-300 text-sm mb-3">
              'दोआब' दो नदियों के बीच की भूमि को कहा जाता है। वर्तमान भारतीय पंजाब में मुख्य रूप से 3 नदियां बहती हैं: <strong>सतलुज, ब्यास और रावी</strong>।
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-slate-300">
              <div class="bg-slate-800 p-3 rounded-xl border border-slate-700">
                <strong class="text-teal-400">1. बिस्त दोआब (Bist Doab):</strong> ब्यास और सतलुज के बीच का क्षेत्र (जालंधर, होशियारपुर, कपूरथला, नवांशहर)। इसे 'दोआबा' भी कहा जाता है।
              </div>
              <div class="bg-slate-800 p-3 rounded-xl border border-slate-700">
                <strong class="text-amber-400">2. बारी दोआब (Bari Doab):</strong> ब्यास और रावी के बीच का क्षेत्र (अमृतसर, गुरदासपुर, तरनतारन, पठानकोट)। इसे 'माझा' कहा जाता है।
              </div>
              <div class="bg-slate-800 p-3 rounded-xl border border-slate-700">
                <strong class="text-indigo-400">3. मालवा क्षेत्र:</strong> सतलुज नदी के दक्षिण का विशाल मैदानी भाग (लुधियाना, पटियाला, बठिंडा, संगरूर, मानसा आदि, कुल 15 जिले)।
              </div>
              <div class="bg-slate-800 p-3 rounded-xl border border-slate-700">
                <strong class="text-emerald-400">ऐतिहासिक दोआब (अविभाजित):</strong> रचना दोआब (रावी व चिनाब), चज दोआब (चिनाब व झेलम), सिंध सागर दोआब (झेलम व सिंधु)।
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. प्रमुख नहर प्रणाली व बांध</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-2">
              <p>• <strong>भाखड़ा नांगल बांध:</strong> सतलुज नदी (बिलासपुर, HP) पर स्थित कंक्रीट ग्रेविटी डैम। गोविंद सागर झील।</p>
              <p>• <strong>पोंग बांध (व्यास बांध):</strong> ब्यास नदी पर तलवाड़ा के पास।</p>
              <p>• <strong>रणजीत सागर बांध (थीन बांध):</strong> रावी नदी पर पठानकोट के पास।</p>
              <p>• <strong>हरिके पत्तन:</strong> सतलुज और ब्यास नदियों का संगम (तरनतारन), जहाँ से इंदिरा गांधी नहर निकलती है। प्रसिद्ध रामसर आर्द्रभूमि (Ramsar Wetland)।</p>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6">
          <div class="bg-teal-950/60 border border-teal-500/30 p-4 rounded-xl">
            <h4 class="text-teal-300 font-bold text-base mb-2">🌍 ਪੰਜਾਬ ਦਾ ਭੂਗੋਲ</h4>
            <p class="text-slate-300 text-sm">ਪੰਜਾਬ ਦਾ ਖੇਤਰਫਲ 50,362 ਵਰਗ ਕਿਲੋਮੀਟਰ ਹੈ। 23 ਜ਼ਿਲ੍ਹੇ ਹਨ (23ਵਾਂ ਜ਼ਿਲ੍ਹਾ ਮਲੇਰਕੋਟਲਾ)। ਮੁੱਖ ਦਰਿਆ: ਸਤਲੁਜ, ਬਿਆਸ, ਰਾਵੀ। ਖੇਤਰ: ਮਾਝਾ, ਮਾਲਵਾ ਅਤੇ ਦੁਆਬਾ। ਹਰੀਕੇ ਪੱਤਣ ਸਤਲੁਜ ਤੇ ਬਿਆਸ ਦਾ ਸੰਗਮ ਹੈ।</p>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6">
          <div class="bg-teal-950/60 border border-teal-500/30 p-4 rounded-xl">
            <h4 class="text-teal-300 font-bold text-base mb-2">🌍 Geography of Punjab</h4>
            <p class="text-slate-300 text-sm">Area: 50,362 sq km (1.54% of India). 23 districts (23rd is Malerkotla). Rivers: Satluj, Beas, Ravi. 3 Regions: Majha (Bari Doab), Doaba (Bist Doab), and Malwa (south of Satluj).</p>
          </div>
        </div>
      `,
    },
    summary: {
      hi: 'पंजाब 50,362 वर्ग किमी में फैला 23 जिलों वाला राज्य है। सतलुज, ब्यास और रावी प्रमुख नदियां हैं। पंजाब तीन प्रमुख सांस्कृतिक व भौगोलिक क्षेत्रों में विभाजित है: माझा (बारी दोआब), दोआबा (बिस्त दोआब), और मालवा (सतलुज के दक्षिण का भाग)। हरिके पत्तन सतलुज-ब्यास का संगम है।',
      pa: 'ਪੰਜਾਬ ਦੇ 23 ਜ਼ਿਲ੍ਹੇ ਹਨ। ਸਤਲੁਜ, ਬਿਆਸ ਅਤੇ ਰਾਵੀ ਮੁੱਖ ਦਰਿਆ ਹਨ। ਮਾਝਾ, ਮਾਲਵਾ, ਦੁਆਬਾ ਮੁੱਖ ਭੂਗੋਲਿਕ ਖੇਤਰ ਹਨ।',
      en: 'Punjab spans 50,362 sq km with 23 districts. Watered by Satluj, Beas, and Ravi, it features three cultural-geographic zones: Majha, Doaba, and Malwa.',
    },
    keyNotes: {
      hi: [
        '📌 कुल क्षेत्रफल: 50,362 वर्ग किमी (भारत का 1.54%)।',
        '📌 23वां नवगठित जिला: मलेरकोटला (2021, संगरूर से अलग हुआ)।',
        '📌 माझा (Bari Doab): अमृतसर, गुरदासपुर, तरनतारन, पठानकोट।',
        '📌 दोआबा (Bist Doab): जालंधर, होशियारपुर, कपूरथला, नवांशहर।',
        '📌 मालवा: सतलुज नदी के दक्षिण का क्षेत्र (15 जिले, पंजाब का सबसे बड़ा भूभाग)।',
        '📌 हरिके पत्तन: सतलुज और ब्यास का संगम स्थल (रामसर आर्द्रभूमि)।',
        '📌 रणजीत सागर (थीन) बांध: रावी नदी पर स्थित।',
        '📌 भाखड़ा बांध: सतलुज नदी पर स्थित।',
      ],
      pa: [
        '📌 ਖੇਤਰਫਲ: 50,362 ਵਰਗ ਕਿਲੋਮੀਟਰ।',
        '📌 23ਵਾਂ ਜ਼ਿਲ੍ਹਾ: ਮਲੇਰਕੋਟਲਾ।',
        '📌 ਹਰੀਕੇ ਪੱਤਣ: ਸਤਲੁਜ ਅਤੇ ਬਿਆਸ ਦਾ ਸੰਗਮ।',
        '📌 ਥੀਨ ਡੈਮ: ਰਾਵੀ ਦਰਿਆ ਤੇ।',
      ],
      en: [
        '📌 Total Area: 50,362 sq km (1.54% of India).',
        '📌 23rd District: Malerkotla (carved out in 2021).',
        '📌 Harike Pattan: Confluence of Satluj and Beas (Ramsar Wetland).',
        '📌 Ranjit Sagar (Thein) Dam is built on River Ravi.',
      ],
    },
    flashcards: [
      {
        id: 'fc-pg-1',
        q: { hi: 'सतलुज और ब्यास नदियों का संगम कहाँ होता है?', pa: 'ਸਤਲੁਜ ਅਤੇ ਬਿਆਸ ਦਰਿਆਵਾਂ ਦਾ ਸੰਗਮ ਕਿੱਥੇ ਹੁੰਦਾ ਹੈ?', en: 'Where is the confluence of Rivers Satluj and Beas located?' },
        a: { hi: 'हरिके पत्तन (तरनतारन जिला)। यहाँ से इंदिरा गांधी नहर भी निकलती है।', pa: 'ਹਰੀਕੇ ਪੱਤਣ ਵਿਖੇ।', en: 'At Harike Pattan in Tarn Taran district.' },
        difficulty: 'easy',
      },
      {
        id: 'fc-pg-2',
        q: { hi: 'पंजाब का 23वां नवगठित जिला कौन-सा है?', pa: 'ਪੰਜਾਬ ਦਾ 23ਵਾਂ ਜ਼ਿਲ੍ਹਾ ਕਿਹੜਾ ਹੈ?', en: 'Which is the 23rd newly formed district of Punjab?' },
        a: { hi: 'मलेरकोटला (2021 में संगरूर से अलग होकर बना)।', pa: 'ਮਲੇਰਕੋਟਲਾ।', en: 'Malerkotla (created in 2021 from Sangrur).' },
        difficulty: 'easy',
      },
    ],
    videos: [
      {
        title: 'Complete Punjab Geography | Rivers, Doabs & Dams in 1 Class',
        channel: 'Punjab Career Hub',
        youtubeId: 'p2aGZ3fXw_5',
        language: 'pa',
        views: '450K',
        duration: '1:10:40',
        tags: ['Geography', 'Punjab', 'Doabs'],
      },
    ],
    bookRefs: [
      {
        title: 'Geography of Punjab (Class 9 & 10)',
        author: 'PSEB',
        chapters: 'Physiography and Drainage System',
        type: 'state-board',
      },
    ],
    documents: [
      {
            "title": "ERD Punjab · Master Cadre Social Science Official Syllabus PDF",
            "url": "https://erd.punjab.gov.in/master2022/Docs/SocialSciencesyllabus04_05_2022.pdf",
            "language": "English / Punjabi",
            "type": "syllabus"
      },
      {
            "title": "PSEB Class 10 · Samajik Sikhya Complete Textbook · Punjabi",
            "url": "https://static.pseb.ac.in/media/1670561302_Samajik%20Sikhya-10%28Punjabi%29%20Bhag-I.pdf",
            "language": "ਪੰਜਾਬੀ",
            "type": "textbook"
      },
      {
            "title": "NCERT Class 10 · Social Science Textbook · English",
            "url": "https://ncert.nic.in/textbook/pdf/jess301.pdf",
            "language": "English",
            "type": "ncert"
      },
      {
            "title": "NCERT Class 10 · सामाजिक विज्ञान पाठ्यपुस्तक · Hindi",
            "url": "https://ncert.nic.in/textbook/pdf/jhss301.pdf",
            "language": "Hindi",
            "type": "ncert"
      },
      {
            "title": "NIOS Secondary · Social Science Study Modules · Hindi/English",
            "url": "https://nios.ac.in/media/documents/SecSocSciCour/Hindi/Lesson-01.pdf",
            "language": "Bilingual",
            "type": "nios"
      }
],
    syllabusReference: {
      title: "Punjab Geography, Doabs, Rivers & Agriculture Resources Curriculum",
      url: "https://erd.punjab.gov.in/master2022/Docs/SocialSciencesyllabus04_05_2022.pdf",
      body: "ERD Punjab & PSSSB",
      verifiedOn: "15 March 2024"
    },
  },

  // =========================================================================
  // 7. PSSSB CLERK PREPARATION & RAAVI FONT TYPING GUIDE
  // =========================================================================
  'punjab-clerk-prep': {
    id: 'punjab-clerk-prep',
    topicId: 'punjab-clerk-prep',
    subjectId: 'clerk-special',
    category: 'clerk',
    title: {
      hi: 'पंजाब क्लर्क परीक्षा तैयारी एवं रावी फॉन्ट टाइपिंग गाइड',
      pa: 'ਪੰਜਾਬ ਕਲਰਕ ਪ੍ਰੀਖਿਆ ਅਤੇ ਰਾਵੀ ਫੌਂਟ ਟਾਈਪਿੰਗ ਗਾਈਡ (PSSSB)',
      en: 'Punjab Clerk Exam Strategy & Punjabi Typing (Raavi Font) Guide',
    },
    examRelevance: 'PSSSB Clerk, Clerk IT, Clerk Accounts & Steno (100 Marks Written + Qualifying Typing)',
    estimatedTime: '30 मिनट',
    content: {
      hi: `
        <div class="space-y-6">
          <div class="bg-amber-950/60 border border-amber-500/30 p-4 rounded-xl">
            <h4 class="text-amber-300 font-bold text-base mb-2">💼 PSSSB क्लर्क परीक्षा संरचना एवं चयन प्रक्रिया</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              पंजाब अधीनस्थ सेवा चयन बोर्ड (PSSSB) क्लर्क परीक्षा में दो चरण होते हैं:
              1. लिखित परीक्षा (100 अंक MCQ)।
              2. अनिवार्य पंजाबी (रावी फॉन्ट) एवं अंग्रेजी टाइपिंग टेस्ट (Qualifying)।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">आधिकारिक टाइपिंग टेस्ट मापदंड (PSSSB Typing Rules)</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-teal-400 font-bold text-sm mb-1">⌨️ पंजाबी टाइपिंग (Mandatory)</h4>
                <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4">
                  <li><strong>फॉन्ट:</strong> Raavi Font (Unicode आधारित)।</li>
                  <li><strong>न्यूनतम गति:</strong> 30 शब्द प्रति मिनट (WPM)।</li>
                  <li><strong>न्यूनतम शुद्धता (Accuracy):</strong> 92% (8% तक गलती मान्य)।</li>
                  <li><strong>अवधि:</strong> 10 मिनट (300 शब्द टाइप करने होते हैं)।</li>
                </ul>
              </div>
              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-indigo-400 font-bold text-sm mb-1">⌨️ अंग्रेजी टाइपिंग (Mandatory)</h4>
                <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4">
                  <li><strong>न्यूनतम गति:</strong> 30 शब्द प्रति मिनट (WPM)।</li>
                  <li><strong>न्यूनतम शुद्धता:</strong> 92%।</li>
                  <li><strong>अवधि:</strong> 10 मिनट (300 शब्द)।</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6">
          <div class="bg-amber-950/60 border border-amber-500/30 p-4 rounded-xl">
            <h4 class="text-amber-300 font-bold text-base mb-2">💼 PSSSB ਕਲਰਕ ਟਾਈਪਿੰਗ ਨਿਯਮ</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਰਾਵੀ ਫੌਂਟ (Unicode) ਵਿੱਚ 30 ਸ਼ਬਦ ਪ੍ਰਤੀ ਮਿੰਟ (WPM) ਦੀ ਸਪੀਡ ਅਤੇ 92% ਐਕੂਰੇਸੀ ਲਾਜ਼ਮੀ ਹੈ। 10 ਮਿੰਟ ਵਿੱਚ 300 ਸ਼ਬਦ ਟਾਈਪ ਕਰਨੇ ਹੁੰਦੇ ਹਨ।
            </p>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6">
          <div class="bg-amber-950/60 border border-amber-500/30 p-4 rounded-xl">
            <h4 class="text-amber-300 font-bold text-base mb-2">💼 PSSSB Clerk Examination Guidelines</h4>
            <p class="text-slate-300 text-sm">Mandates qualifying 30 WPM speed with minimum 92% accuracy on Punjabi Raavi font in 10 minutes.</p>
          </div>
        </div>
      `,
    },
    summary: {
      hi: 'पंजाब क्लर्क परीक्षा हेतु 100 अंकों की लिखित परीक्षा के साथ 30 WPM की गति व 92% शुद्धता सहित 10 मिनट का रावी फॉन्ट पंजाबी व अंग्रेजी टाइपिंग टेस्ट उत्तीर्ण करना अनिवार्य है।',
      pa: 'ਪੰਜਾਬ ਕਲਰਕ ਲਈ ਲਿਖਤੀ ਪੇਪਰ ਅਤੇ ਰਾਵੀ ਫੌਂਟ ਟਾਈਪਿੰਗ (30 WPM, 92% ਐਕੂਰੇਸੀ) ਲਾਜ਼ਮੀ ਹੈ।',
      en: 'PSSSB Clerk selection requires clearing written exam followed by mandatory 30 WPM qualifying typing tests in Punjabi (Raavi font) and English with 92% accuracy.',
    },
    keyNotes: {
      hi: [
        '📌 PSSSB पंजाबी टाइपिंग फॉन्ट: Raavi Font (Unicode Inscript/Remington)।',
        '📌 न्यूनतम गति: 30 WPM (10 मिनट में 300 शब्द)।',
        '📌 न्यूनतम शुद्धता: 92% (अधिकतम 8% गलतियां अनुमन्य)।',
      ],
      pa: [
        '📌 ਰਾਵੀ ਫੌਂਟ (Unicode) ਵਿੱਚ 30 WPM ਸਪੀਡ ਲਾਜ਼ਮੀ ਹੈ।',
        '📌 92% ਐਕੂਰੇਸੀ ਹੋਣੀ ਜ਼ਰੂਰੀ ਹੈ।',
      ],
      en: [
        '📌 PSSSB Font: Raavi Font (Unicode Inscript / Remington).',
        '📌 Benchmark: 30 WPM with at least 92% accuracy.',
      ],
    },
    flashcards: [
      {
        id: 'fc-c-1',
        q: { hi: 'PSSSB क्लर्क परीक्षा में पंजाबी टाइपिंग के लिए न्यूनतम गति और शुद्धता क्या है?', pa: 'PSSSB ਕਲਰਕ ਲਈ ਕਿੰਨੀ ਸਪੀਡ ਚਾਹੀਦੀ ਹੈ?', en: 'What is the required speed and accuracy for PSSSB Clerk Punjabi typing?' },
        a: { hi: '30 शब्द प्रति मिनट (WPM) तथा 92% शुद्धता (रावी फॉन्ट)। समय: 10 मिनट।', pa: '30 WPM ਅਤੇ 92% ਐਕੂਰੇਸੀ।', en: '30 WPM on Raavi font with 92% accuracy over 10 minutes.' },
        difficulty: 'easy',
      },
    ],
    videos: [
      {
        title: 'PSSSB Clerk Punjabi Typing Raavi Font Complete A to Z Guide',
        channel: 'Punjab Exam Hub',
        youtubeId: 'p2aGZ3fXw_6',
        language: 'pa',
        views: '350K',
        duration: '45:10',
        tags: ['PSSSB', 'Clerk', 'Raavi Typing'],
      },
    ],
    bookRefs: [
      {
        title: 'Computer Awareness for Competitive Examinations',
        author: 'Arihant Publications',
        chapters: 'Office Tools & Keyboard layout',
        type: 'standard',
      },
    ],
    documents: [
      {
            "title": "ERD Punjab · Master Cadre Social Science Official Syllabus PDF",
            "url": "https://erd.punjab.gov.in/master2022/Docs/SocialSciencesyllabus04_05_2022.pdf",
            "language": "English / Punjabi",
            "type": "syllabus"
      },
      {
            "title": "PSEB Class 10 · Samajik Sikhya Complete Textbook · Punjabi",
            "url": "https://static.pseb.ac.in/media/1670561302_Samajik%20Sikhya-10%28Punjabi%29%20Bhag-I.pdf",
            "language": "ਪੰਜਾਬੀ",
            "type": "textbook"
      },
      {
            "title": "NCERT Class 10 · Social Science Textbook · English",
            "url": "https://ncert.nic.in/textbook/pdf/jess301.pdf",
            "language": "English",
            "type": "ncert"
      },
      {
            "title": "NCERT Class 10 · सामाजिक विज्ञान पाठ्यपुस्तक · Hindi",
            "url": "https://ncert.nic.in/textbook/pdf/jhss301.pdf",
            "language": "Hindi",
            "type": "ncert"
      },
      {
            "title": "NIOS Secondary · Social Science Study Modules · Hindi/English",
            "url": "https://nios.ac.in/media/documents/SecSocSciCour/Hindi/Lesson-01.pdf",
            "language": "Bilingual",
            "type": "nios"
      }
],
    syllabusReference: {
      title: "PSSSB Clerk & IT Assistant Official Scheme & Qualification Norms",
      url: "https://sssb.punjab.gov.in/",
      body: "Punjab Subordinate Services Selection Board (PSSSB)",
      verifiedOn: "15 March 2024"
    },
  },

  // =========================================================================
  // 8. UNION EXECUTIVE & PARLIAMENT (संसद व राष्ट्रपति)
  // =========================================================================
  'parliament': {
    id: 'parliament',
    topicId: 'parliament',
    subjectId: 'social-science',
    category: 'polity',
    title: {
      hi: 'संघीय कार्यपालिका एवं संसद (राष्ट्रपति, पीएम, लोकसभा व राज्यसभा)',
      pa: 'ਭਾਰਤੀ ਸੰਸਦ ਅਤੇ ਸੰਘੀ ਕਾਰਜਪਾਲਿਕਾ (ਰਾਸ਼ਟਰਪਤੀ, ਪ੍ਰਧਾਨ ਮੰਤਰੀ, ਲੋਕ ਸਭਾ ਤੇ ਰਾਜ ਸਭਾ)',
      en: 'Union Executive & Parliament (President, PM, Lok Sabha & Rajya Sabha)',
    },
    examRelevance: 'Punjab Master Cadre (8-10 Qs), PSSSB Clerk, Police (4-5 Qs)',
    estimatedTime: '35 मिनट',
    content: {
      hi: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🏛️ भारतीय संविधान: भाग V (संघ)</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              भारतीय संविधान के <strong>भाग V (अनुच्छेद 52 से 151)</strong> में संघ की कार्यपालिका, संसद, राष्ट्रपति की विधायी शक्तियां और न्यायपालिका का वर्णन है। भारत में संसदीय शासन प्रणाली (ब्रिटेन से प्रेरित) है जिसमें राष्ट्रपति नाममात्र का और प्रधानमंत्री वास्तविक कार्यकारी प्रमुख होता है।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. भारत के राष्ट्रपति (अनुच्छेद 52 - 62)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-2">
              <p>• <strong>अनुच्छेद 52:</strong> भारत का एक राष्ट्रपति होगा (प्रथम नागरिक, तीनों सेनाओं का सर्वोच्च सेनापति)।</p>
              <p>• <strong>निर्वाचक मंडल (Art 54):</strong> संसद के दोनों सदनों के <em>निर्वाचित सदस्य</em> + राज्यों की विधानसभाओं के <em>निर्वाचित सदस्य</em> + दिल्ली और पुडुचेरी विधानसभाओं के निर्वाचित सदस्य (मनोनीत सदस्य भाग नहीं लेते)।</p>
              <p>• <strong>महाभियोग (Impeachment - Art 61):</strong> केवल "संविधान के उल्लंघन" के आधार पर संसद के किसी भी सदन में शुरू हो सकता है। 14 दिन पूर्व लिखित नोटिस और दोनों सदनों में कुल सदस्य संख्या के दो-तिहाई (2/3) बहुमत से पारित होना अनिवार्य है।</p>
              <p>• <strong>अध्यादेश शक्ति (Art 123):</strong> संसद के सत्र में न होने पर राष्ट्रपति अध्यादेश जारी कर सकते हैं, जिसकी अधिकतम अवधि संसद सत्र शुरू होने के 6 सप्ताह तक होती है।</p>
              <p>• <strong>क्षमादान शक्ति (Art 72):</strong> मृत्युदंड और सैन्य अदालतों द्वारा दी गई सजा को भी क्षमा करने का पूर्ण अधिकार।</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. भारतीय संसद (लोकसभा एवं राज्यसभा)</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
              <div class="bg-slate-800 p-3 rounded-xl border border-slate-700">
                <h4 class="text-teal-400 font-bold text-sm mb-1">🏛️ राज्यसभा (उच्च सदन / स्थायी सदन) — Art 80</h4>
                <ul class="space-y-1 list-disc pl-4">
                  <li>अधिकतम संख्या: 250 (वर्तमान 245 = 233 निर्वाचित + 12 राष्ट्रपति द्वारा साहित्य, विज्ञान, कला, समाज सेवा से मनोनीत)।</li>
                  <li>कभी भंग नहीं होती; प्रत्येक सदस्य का कार्यकाल 6 वर्ष, 1/3 सदस्य प्रति 2 वर्ष में सेवानिवृत्त।</li>
                  <li>उपराष्ट्रपति राज्यसभा का पदेन सभापति (Ex-officio Chairman) होता है (Art 64)।</li>
                  <li>विशेष शक्तियां: अनुच्छेद 249 (राज्य सूची पर कानून बनाने का अधिकार) और अनुच्छेद 312 (अखिल भारतीय सेवाओं का सृजन)।</li>
                </ul>
              </div>
              <div class="bg-slate-800 p-3 rounded-xl border border-slate-700">
                <h4 class="text-amber-400 font-bold text-sm mb-1">🏛️ लोकसभा (जनता का सदन / निम्न सदन) — Art 81</h4>
                <ul class="space-y-1 list-disc pl-4">
                  <li>अधिकतम संख्या: 550 (104वें संशोधन द्वारा 2 एंग्लो-इंडियन मनोनयन समाप्त)।</li>
                  <li>कार्यकाल: 5 वर्ष (प्रधानमंत्री की सलाह पर राष्ट्रपति द्वारा समय से पहले भंग हो सकती है)।</li>
                  <li>अध्यक्ष (स्पीकर) का चुनाव सदस्यों द्वारा किया जाता है।</li>
                  <li><strong>धन विधेयक (Money Bill - Art 110):</strong> केवल लोकसभा में पेश हो सकता है। स्पीकर का निर्णय अंतिम होता है। राज्यसभा इसे अधिकतम 14 दिन रोक सकती है।</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🏛️ ਭਾਰਤੀ ਸੰਸਦ ਅਤੇ ਰਾਸ਼ਟਰਪਤੀ</h4>
            <p class="text-slate-300 text-sm">ਰਾਸ਼ਟਰਪਤੀ (ਅਨੁਛੇਦ 52-62, ਮਹਾਂਦੋਸ਼ ਅਨੁਛੇਦ 61), ਲੋਕ ਸਭਾ (5 ਸਾਲ ਮਿਆਦ) ਅਤੇ ਰਾਜ ਸਭਾ (ਸਥਾਈ ਸਦਨ, ਉਪ ਰਾਸ਼ਟਰਪਤੀ ਚੇਅਰਮੈਨ)। ਧਨ ਬਿਲ ਸਿਰਫ਼ ਲੋਕ ਸਭਾ ਵਿੱਚ ਪੇਸ਼ ਹੁੰਦਾ ਹੈ।</p>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🏛️ Union Executive & Parliament</h4>
            <p class="text-slate-300 text-sm">Covers President (Articles 52-62, Impeachment Art 61, Ordinance Art 123), Rajya Sabha (Permanent House, Art 80), Lok Sabha (Art 81), and legislative process including Money Bills (Art 110).</p>
          </div>
        </div>
      `,
    },
    summary: {
      hi: 'संघीय कार्यपालिका में राष्ट्रपति, उपराष्ट्रपति, प्रधानमंत्री और मंत्रिपरिषद शामिल हैं। संसद में राष्ट्रपति, राज्यसभा (स्थायी सदन) और लोकसभा (जनता का सदन) होते हैं। धन विधेयक (अनुच्छेद 110) केवल लोकसभा में पेश हो सकता है और राष्ट्रपति पर महाभियोग केवल अनुच्छेद 61 के तहत संविधान के उल्लंघन पर चलाया जाता है।',
      pa: 'ਭਾਰਤੀ ਸੰਸਦ ਲੋਕ ਸਭਾ, ਰਾਜ ਸਭਾ ਅਤੇ ਰਾਸ਼ਟਰਪਤੀ ਤੋਂ ਮਿਲ ਕੇ ਬਣਦੀ ਹੈ। ਰਾਸ਼ਟਰਪਤੀ ਦਾ ਮਹਾਂਦੋਸ਼ ਆਰਟੀਕਲ 61 ਅਧੀਨ ਹੁੰਦਾ ਹੈ।',
      en: 'The Parliament comprises the President, Council of States (Rajya Sabha - Art 80) and House of the People (Lok Sabha - Art 81). Key constitutional mechanics include Presidential impeachment (Art 61) and Money Bills (Art 110).',
    },
    keyNotes: {
      hi: [
        '📌 अनुच्छेद 52 — भारत का एक राष्ट्रपति होगा।',
        '📌 अनुच्छेद 61 — राष्ट्रपति पर महाभियोग की प्रक्रिया (14 दिन पूर्व सूचना, 2/3 विशेष बहुमत)।',
        '📌 अनुच्छेद 72 — राष्ट्रपति की क्षमादान शक्ति (मृत्युदंड भी क्षमा कर सकते हैं; यह शक्ति निरपेक्ष/absolute नहीं है बल्कि एपुरु सुधाकर वाद 2006 के तहत सीमित न्यायिक समीक्षा के अधीन है)।',
        '📌 अनुच्छेद 110 — धन विधेयक की परिभाषा (केवल लोकसभा में, स्पीकर का निर्णय अंतिम)।',
        '📌 अनुच्छेद 123 — राष्ट्रपति की अध्यादेश जारी करने की शक्ति।',
        '📌 अनुच्छेद 108 — दोनों सदनों की संयुक्त बैठक (आहूत राष्ट्रपति करते हैं, अध्यक्षता लोकसभा स्पीकर करते हैं)।',
        '📌 राज्यसभा एक स्थायी सदन है, इसके 1/3 सदस्य प्रति 2 वर्ष में सेवानिवृत्त होते हैं।',
      ],
      pa: [
        '📌 ਆਰਟੀਕਲ 52 — ਭਾਰਤ ਦਾ ਰਾਸ਼ਟਰਪਤੀ।',
        '📌 ਆਰਟੀਕਲ 61 — ਮਹਾਂਦੋਸ਼ ਦੀ ਪ੍ਰਕਿਰਿਆ।',
        '📌 ਆਰਟੀਕਲ 110 — ਧਨ ਬਿਲ ਦੀ ਪਰਿਭਾਸ਼ਾ।',
        '📌 ਆਰਟੀਕਲ 123 — ਆਰਡੀਨੈਂਸ ਜਾਰੀ ਕਰਨ ਦੀ ਤਾਕਤ।',
      ],
      en: [
        '📌 Article 52: President of India.',
        '📌 Article 61: Procedure for impeachment of President.',
        '📌 Article 110: Definition of Money Bill (Speaker certifies).',
        '📌 Article 123: Power of President to promulgate ordinances.',
        '📌 Article 108: Joint sitting of Parliament presided over by Lok Sabha Speaker.',
      ],
    },
    flashcards: [
      {
        id: 'fc-par-1',
        q: { hi: 'धन विधेयक (Money Bill) संविधान के किस अनुच्छेद में परिभाषित है और इसे प्रमाणित कौन करता है?', pa: 'ਧਨ ਬਿਲ ਕਿਸ ਆਰਟੀਕਲ ਵਿੱਚ ਆਉਂਦਾ ਹੈ?', en: 'Under which article is a Money Bill defined and who certifies it?' },
        a: { hi: 'अनुच्छेद 110 में परिभाषित है और इसे केवल लोकसभा अध्यक्ष (स्पीकर) द्वारा प्रमाणित किया जाता है।', pa: 'ਆਰਟੀਕਲ 110, ਲੋਕ ਸਭਾ ਸਪੀਕਰ ਪ੍ਰਮਾਣਿਤ ਕਰਦਾ ਹੈ।', en: 'Article 110, certified exclusively by the Lok Sabha Speaker.' },
        difficulty: 'easy',
      },
      {
        id: 'fc-par-2',
        q: { hi: 'संसद के दोनों सदनों की संयुक्त बैठक की अध्यक्षता कौन करता है?', pa: 'ਸੰਸਦ ਦੀ ਸਾਂਝੀ ਬੈਠਕ ਦੀ ਪ੍ਰਧਾਨਗੀ ਕੌਣ ਕਰਦਾ ਹੈ?', en: 'Who presides over a joint sitting of both Houses of Parliament?' },
        a: { hi: 'लोकसभा अध्यक्ष (स्पीकर)। संयुक्त बैठक राष्ट्रपति अनुच्छेद 108 के तहत बुलाते हैं।', pa: 'ਲੋਕ ਸਭਾ ਸਪੀਕਰ।', en: 'The Speaker of the Lok Sabha (summoned by the President under Article 108).' },
        difficulty: 'easy',
      },
    ],
    videos: [
      {
        title: 'Indian Parliament & President Complete Masterclass',
        channel: 'StudyIQ IAS',
        youtubeId: 'p2aGZ3fXw_7',
        language: 'hi',
        views: '2.5M',
        duration: '1:50:00',
        tags: ['Polity', 'Parliament', 'President'],
      },
    ],
    bookRefs: [
      {
        title: 'Indian Polity (Chapters 17 to 24)',
        author: 'M. Laxmikanth',
        chapters: 'President, Prime Minister, Parliament',
        type: 'standard',
      },
    ],
    documents: [
      {
            "title": "ERD Punjab · Master Cadre Social Science Official Syllabus PDF",
            "url": "https://erd.punjab.gov.in/master2022/Docs/SocialSciencesyllabus04_05_2022.pdf",
            "language": "English / Punjabi",
            "type": "syllabus"
      },
      {
            "title": "PSEB Class 10 · Samajik Sikhya Complete Textbook · Punjabi",
            "url": "https://static.pseb.ac.in/media/1670561302_Samajik%20Sikhya-10%28Punjabi%29%20Bhag-I.pdf",
            "language": "ਪੰਜਾਬੀ",
            "type": "textbook"
      },
      {
            "title": "NCERT Class 10 · Social Science Textbook · English",
            "url": "https://ncert.nic.in/textbook/pdf/jess301.pdf",
            "language": "English",
            "type": "ncert"
      },
      {
            "title": "NCERT Class 10 · सामाजिक विज्ञान पाठ्यपुस्तक · Hindi",
            "url": "https://ncert.nic.in/textbook/pdf/jhss301.pdf",
            "language": "Hindi",
            "type": "ncert"
      },
      {
            "title": "NIOS Secondary · Social Science Study Modules · Hindi/English",
            "url": "https://nios.ac.in/media/documents/SecSocSciCour/Hindi/Lesson-01.pdf",
            "language": "Bilingual",
            "type": "nios"
      }
],
    syllabusReference: {
      title: "Parliament of India (Lok Sabha & Rajya Sabha) Legislative Rules",
      url: "https://sansad.in/",
      body: "Parliament of India & Legislative Department",
      verifiedOn: "15 March 2024"
    },
  },

  // =========================================================================
  // 9. PHYSIOGRAPHY OF INDIA (PHYSICAL GEOGRAPHY)
  // =========================================================================
  'physical-geography': {
    id: 'physical-geography',
    topicId: 'physical-geography',
    subjectId: 'social-science',
    category: 'geography',
    title: {
      hi: 'भारत का भौतिक स्वरूप एवं अपवाह तंत्र (पर्वत, मैदान, पठार व नदियां)',
      pa: 'ਭਾਰਤ ਦਾ ਭੌਤਿਕ ਸਰੂਪ ਅਤੇ ਦਰਿਆਈ ਪ੍ਰਣਾਲੀ',
      en: 'Physiography of India & Drainage Systems',
    },
    examRelevance: 'Punjab Master Cadre (8-10 Qs), Patwari, Police, SSC (5-6 Qs)',
    estimatedTime: '35 मिनट',
    content: {
      hi: `
        <div class="space-y-6">
          <div class="bg-teal-950/60 border border-teal-500/30 p-4 rounded-xl">
            <h4 class="text-teal-300 font-bold text-base mb-2">🏔️ भारत के 6 भौतिक भू-आकृतिक विभाग</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              भारत को 6 प्रमुख भौतिक भागों में बांटा गया है: 1. उत्तरी पर्वतमाला (हिमालय), 2. उत्तरी भारत का विशाल मैदान, 3. प्रायद्वीपीय पठार, 4. भारतीय मरुस्थल (थार), 5. तटीय मैदान, और 6. द्वीप समूह।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. हिमालय पर्वतमाला की 3 समानांतर श्रेणियां</h3>
            <div class="space-y-2 text-xs text-slate-300">
              <div class="bg-slate-800 p-3 rounded-lg border border-slate-700">
                <strong class="text-teal-400">1. महान हिमालय (हिमाद्रि / Greater Himalayas):</strong> औसत ऊंचाई 6,000 मीटर। विश्व की सर्वोच्च चोटी माउंट एवरेस्ट (8848.86 मी, नेपाल) और भारत की सबसे ऊंची चोटी कंचनजंगा (8586 मी, सिक्किम) इसी में स्थित हैं।
              </div>
              <div class="bg-slate-800 p-3 rounded-lg border border-slate-700">
                <strong class="text-amber-400">2. लघु हिमालय (हिमाचल / Middle Himalayas):</strong> औसत ऊंचाई 3,700 से 4,500 मीटर। पीर पंजाल, धौलाधर श्रेणियां और प्रसिद्ध हिल स्टेशन (शिमला, मनाली, कुल्लू)।
              </div>
              <div class="bg-slate-800 p-3 rounded-lg border border-slate-700">
                <strong class="text-indigo-400">3. शिवालिक (बाह्य हिमालय / Outer Himalayas):</strong> सबसे नवीन श्रेणी, औसत ऊंचाई 900 से 1,100 मीटर। पंजाब के होशियारपुर, रोपड़ के सीमावर्ती भागों में फैली है। यहाँ दून घाटियां (देहरादून, पतलीदून) पाई जाती हैं।
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. भारत की नदियां (हिमालयी बनाम प्रायद्वीपीय)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-2">
              <p>• <strong>हिमालयी नदियां (सदा नीरा / बारहमासी):</strong> सिंधु (मानसरोवर झील से), गंगा (गंगोत्री हिमनद से भागीरथी व अलकनंदा का देवप्रयाग में संगम), ब्रह्मपुत्र (तिब्बत में त्संगपो, अरुणाचल में दिहांग, असम में ब्रह्मपुत्र)।</p>
              <p>• <strong>प्रायद्वीपीय नदियां (मौसमी):</strong> बंगाल की खाड़ी में गिरने वाली (महानदी, गोदावरी - 'दक्षिण गंगा/वृद्ध गंगा', कृष्णा, कावेरी - डेल्टा बनाती हैं) एवं अरब सागर में गिरने वाली (नर्मदा व ताप्ती - भ्रंश घाटी/Rift Valley से बहती हैं और एश्चुअरी/ज्वारनदमुख बनाती हैं)।</p>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6">
          <div class="bg-teal-950/60 border border-teal-500/30 p-4 rounded-xl">
            <h4 class="text-teal-300 font-bold text-base mb-2">🏔️ ਭਾਰਤ ਦਾ ਭੌਤਿਕ ਸਰੂਪ</h4>
            <p class="text-slate-300 text-sm">ਹਿਮਾਲਿਆ ਦੀਆਂ ਤਿੰਨ ਲੜੀਆਂ: ਹਿਮਾਦਰੀ, ਹਿਮਾਚਲ ਅਤੇ ਸ਼ਿਵਾਲਿਕ। ਮੁੱਖ ਦਰਿਆ: ਗੰਗਾ, ਸਿੰਧੂ, ਬ੍ਰਹਮਪੁੱਤਰ। ਦੱਖਣੀ ਭਾਰਤ ਦੀ ਸਭ ਤੋਂ ਲੰਮੀ ਨਦੀ ਗੋਦਾਵਰੀ ਹੈ। ਨਰਮਦਾ ਤੇ ਤਾਪਤੀ ਅਰਬ ਸਾਗਰ ਵਿੱਚ ਡਿੱਗਦੀਆਂ ਹਨ।</p>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6">
          <div class="bg-teal-950/60 border border-teal-500/30 p-4 rounded-xl">
            <h4 class="text-teal-300 font-bold text-base mb-2">🏔️ Physiography of India</h4>
            <p class="text-slate-300 text-sm">Encompasses 3 Himalayan ranges (Himadri, Himachal, Shiwalik), Indo-Gangetic Plains, Peninsular Plateau, and major drainage basins (Himalayan perennial vs Peninsular seasonal rivers).</p>
          </div>
        </div>
      `,
    },
    summary: {
      hi: 'भारत के 6 भौतिक भागों में हिमालय की तीन श्रेणियां (हिमाद्रि, हिमाचल, शिवालिक), उत्तर का विशाल मैदान, प्रायद्वीपीय पठार और तटीय मैदान शामिल हैं। गंगा भारत की सबसे लंबी नदी (2525 किमी) है और गोदावरी प्रायद्वीपीय भारत की सबसे लंबी नदी है जिसे दक्षिण गंगा कहा जाता है। नर्मदा और ताप्ती भ्रंश घाटी से बहकर अरब सागर में गिरती हैं।',
      pa: 'ਹਿਮਾਲਿਆ ਪਰਬਤ, ਉੱਤਰੀ ਮੈਦਾਨ, ਪਠਾਰ ਅਤੇ ਦਰਿਆ ਭਾਰਤ ਦੇ ਮੁੱਖ ਭੂਗੋਲਿਕ ਹਿੱਸੇ ਹਨ।',
      en: "India's physiography features the tripartite Himalayan ranges, fertile northern plains, ancient peninsular shield, and rich river drainage systems (Ganga, Indus, Brahmaputra, Godavari).",
    },
    keyNotes: {
      hi: [
        '📌 माउंट एवरेस्ट (8848.86 मी) — विश्व की सर्वोच्च चोटी (नेपाल/तिब्बत सीमा)।',
        '📌 के2 (गॉडविन ऑस्टिन - 8611 मी) — भारत की सर्वोच्च चोटी (काराकोरम श्रेणी, पीओके)।',
        '📌 कंचनजंगा (8586 मी) — भारतीय भूभाग में हिमालय की सर्वोच्च चोटी (सिक्किम)।',
        '📌 देवप्रयाग — भागीरथी और अलकनंदा का संगम, जहाँ से यह नदी गंगा कहलाती है।',
        '📌 गोदावरी (1465 किमी) — प्रायद्वीपीय भारत की सबसे लंबी नदी (वृद्ध गंगा)।',
        '📌 नर्मदा और ताप्ती — पश्चिम की ओर बहने वाली नदियां जो भ्रंश घाटी (Rift Valley) से बहती हैं और डेल्टा नहीं बनातीं।',
        '📌 माजुली — असम में ब्रह्मपुत्र नदी पर स्थित विश्व का सबसे बड़ा नदी द्वीप।',
      ],
      pa: [
        '📌 ਮਾਊਂਟ ਐਵਰੈਸਟ — ਦੁਨੀਆ ਦੀ ਸਭ ਤੋਂ ਉੱਚੀ ਚੋਟੀ।',
        '📌 ਗੰਗਾ — ਭਾਰਤ ਦਾ ਸਭ ਤੋਂ ਲੰਮਾ ਦਰਿਆ (2525 ਕਿ.ਮੀ.)।',
        '📌 ਮਾਜੁਲੀ — ਬ੍ਰਹਮਪੁੱਤਰ ਦਰਿਆ ਤੇ ਸਭ ਤੋਂ ਵੱਡਾ ਨਦੀ ਟਾਪੂ।',
      ],
      en: [
        '📌 Mount Everest (8848.86 m): Highest peak in the world.',
        '📌 K2 / Godwin-Austen (8611 m): Highest peak in Karakoram range.',
        '📌 Devprayag: Confluence of Bhagirathi and Alaknanda forming the Ganga.',
        '📌 Godavari: Longest peninsular river (Dakshin Ganga).',
        "📌 Majuli: World's largest riverine island in Brahmaputra River, Assam.",
      ],
    },
    flashcards: [
      {
        id: 'fc-geo-1',
        q: { hi: 'भागीरथी और अलकनंदा नदियों का संगम किस स्थान पर होता है जहां से इसे गंगा कहा जाता है?', pa: 'ਭਾਗੀਰਥੀ ਅਤੇ ਅਲਕਨੰਦਾ ਦਾ ਸੰਗਮ ਕਿੱਥੇ ਹੁੰਦਾ ਹੈ?', en: 'Where do Bhagirathi and Alaknanda meet to form the River Ganga?' },
        a: { hi: 'देवप्रयाग (उत्तराखंड)।', pa: 'ਦੇਵਪ੍ਰਯਾਗ ਵਿਖੇ।', en: 'At Devprayag in Uttarakhand.' },
        difficulty: 'easy',
      },
      {
        id: 'fc-geo-2',
        q: { hi: 'प्रायद्वीपीय भारत की कौन-सी दो प्रमुख नदियां भ्रंश घाटी से होकर अरब सागर में गिरती हैं?', pa: 'ਕਿਹੜੀਆਂ ਦੋ ਨਦੀਆਂ ਅਰਬ ਸਾਗਰ ਵਿੱਚ ਡਿੱਗਦੀਆਂ ਹਨ?', en: 'Which two major peninsular rivers flow through rift valleys into the Arabian Sea?' },
        a: { hi: 'नर्मदा और ताप्ती (ये डेल्टा नहीं, एश्चुअरी बनाती हैं)।', pa: 'ਨਰਮਦਾ ਅਤੇ ਤਾਪਤੀ।', en: 'Narmada and Tapi (forming estuaries instead of deltas).' },
        difficulty: 'medium',
      },
    ],
    videos: [
      {
        title: 'Physiography of India Complete Revision with Maps',
        channel: 'StudyIQ IAS',
        youtubeId: 'p2aGZ3fXw_8',
        language: 'hi',
        views: '1.9M',
        duration: '1:40:20',
        tags: ['Geography', 'India', 'Himalayas'],
      },
    ],
    bookRefs: [
      {
        title: 'India: Physical Environment (Class 11)',
        author: 'NCERT',
        chapters: 'Physiography and Drainage',
        type: 'ncert',
      },
    ],
    documents: [
      {
            "title": "ERD Punjab · Master Cadre Social Science Official Syllabus PDF",
            "url": "https://erd.punjab.gov.in/master2022/Docs/SocialSciencesyllabus04_05_2022.pdf",
            "language": "English / Punjabi",
            "type": "syllabus"
      },
      {
            "title": "PSEB Class 10 · Samajik Sikhya Complete Textbook · Punjabi",
            "url": "https://static.pseb.ac.in/media/1670561302_Samajik%20Sikhya-10%28Punjabi%29%20Bhag-I.pdf",
            "language": "ਪੰਜਾਬੀ",
            "type": "textbook"
      },
      {
            "title": "NCERT Class 10 · Social Science Textbook · English",
            "url": "https://ncert.nic.in/textbook/pdf/jess301.pdf",
            "language": "English",
            "type": "ncert"
      },
      {
            "title": "NCERT Class 10 · सामाजिक विज्ञान पाठ्यपुस्तक · Hindi",
            "url": "https://ncert.nic.in/textbook/pdf/jhss301.pdf",
            "language": "Hindi",
            "type": "ncert"
      },
      {
            "title": "NIOS Secondary · Social Science Study Modules · Hindi/English",
            "url": "https://nios.ac.in/media/documents/SecSocSciCour/Hindi/Lesson-01.pdf",
            "language": "Bilingual",
            "type": "nios"
      }
],
    syllabusReference: {
      title: "Physical Geography of India, Monsoon Systems & Natural Resources",
      url: "https://ncert.nic.in/textbook.php",
      body: "NCERT & Ministry of Education, Govt of India",
      verifiedOn: "15 March 2024"
    },
  },

  // =========================================================================
  // 10. COMPUTER AWARENESS & ICT PROFICIENCY
  // =========================================================================
  'computer-awareness': {
    id: 'computer-awareness',
    topicId: 'computer-awareness',
    subjectId: 'clerk-special',
    category: 'clerk',
    title: {
      hi: 'कंप्यूटर ज्ञान एवं सूचना प्रौद्योगिकी (MS Office, नेटवर्किंग व साइबर सुरक्षा)',
      pa: 'ਕੰਪਿਊਟਰ ਗਿਆਨ ਅਤੇ ਸੂਚਨਾ ਤਕਨਾਲੋਜੀ (ਐਮ.ਐਸ. ਆਫਿਸ ਤੇ ਸਾਈਬਰ ਸੁਰੱਖਿਆ)',
      en: 'Computer Knowledge & IT Proficiency (MS Office, Networking & Security)',
    },
    examRelevance: 'PSSSB Clerk (8-10 Qs), Punjab Police (5 Qs), Patwari (10 Qs), SSC',
    estimatedTime: '30 मिनट',
    content: {
      hi: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">💻 कंप्यूटर जागरूकता: परीक्षा का सर्वाधिक स्कोरिंग भाग</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              पंजाब क्लर्क, पुलिस और पटवारी भर्ती में कंप्यूटर से हार्डवेयर, मेमोरी यूनिट्स, एमएस वर्ड/एक्सेल शॉर्टकट्स और इंटरनेट प्रोटोकॉल से सीधे प्रश्न आते हैं।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. कंप्यूटर मेमोरी यूनिट्स व पदानुक्रम</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-1.5">
              <p>• <strong>1 Nibble = 4 Bits</strong> | <strong>1 Byte = 8 Bits</strong></p>
              <p>• 1 Kilobyte (KB) = 1024 Bytes | 1 Megabyte (MB) = 1024 KB</p>
              <p>• 1 Gigabyte (GB) = 1024 MB | 1 Terabyte (TB) = 1024 GB</p>
              <p>• <strong>मेमोरी गति क्रम:</strong> Registers (सबसे तेज) &gt; Cache Memory &gt; RAM (Primary) &gt; SSD/Hard Disk (Secondary)।</p>
              <p>• <strong>RAM vs ROM:</strong> RAM वाष्पशील (Volatile - बिजली जाने पर डेटा नष्ट), जबकि ROM गैर-वाष्पशील (Non-volatile - स्थायी) होती है जिसमें BIOS स्टोर रहता है।</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. MS Office शॉर्टकट कुंजी (Most Asked Shortcuts)</h3>
            <div class="grid grid-cols-2 gap-2 text-xs text-slate-300">
              <span class="bg-slate-800 p-2.5 rounded-lg border border-slate-700"><strong>F7:</strong> Spelling & Grammar Check</span>
              <span class="bg-slate-800 p-2.5 rounded-lg border border-slate-700"><strong>Shift + F7:</strong> Thesaurus (समानार्थक शब्द)</span>
              <span class="bg-slate-800 p-2.5 rounded-lg border border-slate-700"><strong>F4 (Excel):</strong> Absolute Reference ($A$1)</span>
              <span class="bg-slate-800 p-2.5 rounded-lg border border-slate-700"><strong>F12:</strong> Save As डायलॉग बॉक्स</span>
              <span class="bg-slate-800 p-2.5 rounded-lg border border-slate-700"><strong>Ctrl + H:</strong> Find and Replace</span>
              <span class="bg-slate-800 p-2.5 rounded-lg border border-slate-700"><strong>Ctrl + K:</strong> Insert Hyperlink</span>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. इंटरनेट, नेटवर्किंग एवं साइबर सुरक्षा</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-2">
              <p>• <strong>IP Address:</strong> IPv4 (32-bit, 4 दशमलव संख्याओं का समूह जैसे 192.168.1.1) एवं IPv6 (128-bit, हेक्साडेसिमल)।</p>
              <p>• <strong>प्रोटोकॉल:</strong> HTTP (पोर्ट 80), HTTPS (पोर्ट 443, सुरक्षित SSL एन्क्रिप्शन), FTP (पोर्ट 20/21), SMTP (ईमेल भेजने हेतु - पोर्ट 25), POP3/IMAP (ईमेल प्राप्त करने हेतु)।</p>
              <p>• <strong>मैलवेयर प्रकार:</strong> वायरस (होस्ट फ़ाइल से जुड़ता है), वॉर्म (स्वयं प्रतिकृति बनाता है, बिना होस्ट के फैलता है), ट्रोजन हॉर्स (वैध सॉफ्टवेयर का मुखौटा), रैनसमवेयर (फ़ाइलों को एन्क्रिप्ट कर फिरौती मांगना), फिशिंग (नकली वेबसाइट बनाकर पासवर्ड चुराना)।</p>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">💻 ਕੰਪਿਊਟਰ ਜਾਗਰੂਕਤਾ</h4>
            <p class="text-slate-300 text-sm">ਐਮ.ਐਸ. ਵਰਡ, ਐਕਸਲ, ਇੰਟਰਨੈੱਟ ਅਤੇ ਸਾਈਬਰ ਸੁਰੱਖਿਆ। F7 ਸਪੈਲਿੰਗ ਚੈੱਕ, F4 ਐਕਸਲ ਲਾਕਿੰਗ। IPv4 32-bit ਅਤੇ IPv6 128-bit ਹੁੰਦਾ ਹੈ।</p>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">💻 Computer Literacy</h4>
            <p class="text-slate-300 text-sm">Covers Memory Hierarchy, MS Office shortcuts (F7 Spell Check, Ctrl+K Hyperlink), IPv4 vs IPv6, and Cybersecurity definitions.</p>
          </div>
        </div>
      `,
    },
    summary: {
      hi: 'कंप्यूटर ज्ञान में 1 Byte = 8 Bits, RAM वाष्पशील और ROM गैर-वाष्पशील मेमोरी होती है। MS Word में F7 स्पेल चेक और Excel में F4 सेल रेफरेंस फ्रीज करने का काम करता है। IPv4 32-बिट और IPv6 128-बिट का होता है। फ़िशिंग और रैनसमवेयर प्रमुख साइबर खतरे हैं।',
      pa: 'ਕੰਪਿਊਟਰ ਮੈਮੋਰੀ, ਐਮ.ਐਸ. ਆਫਿਸ ਅਤੇ ਸਾਈਬਰ ਸੁਰੱਖਿਆ ਦੇ ਸਵਾਲ।',
      en: 'Synthesizes computer architecture, memory units, MS Office shortcuts, network protocols, and cybersecurity vectors.',
    },
    keyNotes: {
      hi: [
        '📌 1 Byte = 8 Bits; 1 Nibble = 4 Bits; 1 KB = 1024 Bytes।',
        '📌 F7 — MS Office में Spelling & Grammar जांचने की शॉर्टकट कुंजी।',
        '📌 Shift + F7 — थिसॉरस (Thesaurus / पर्यायवाची शब्द) खोलने हेतु।',
        '📌 Ctrl + K — हाइपरलिंक इंसर्ट करने का शॉर्टकट।',
        '📌 IPv4 का आकार 32-बिट तथा IPv6 का आकार 128-बिट होता है।',
        '📌 HTTPS डिफ़ॉल्ट रूप से पोर्ट 443 का उपयोग करता है (SSL/TLS एन्क्रिप्शन)।',
        '📌 फिशिंग — भ्रामक ईमेल या वेबसाइट द्वारा व्यक्तिगत पासवर्ड और बैंकिंग विवरण चुराने का अपराध।',
      ],
      pa: [
        '📌 1 Byte = 8 Bits, F7 ਨਾਲ ਸਪੈਲਿੰਗ ਚੈੱਕ।',
        '📌 IPv4 32-bit, IPv6 128-bit।',
        '📌 HTTPS ਪੋਰਟ 443 ਵਰਤਦਾ ਹੈ।',
      ],
      en: [
        '📌 1 Byte = 8 Bits; 1 Nibble = 4 Bits; 1 KB = 1024 Bytes.',
        '📌 F7: Spell check in Microsoft Office.',
        '📌 IPv4 uses 32-bit addressing, while IPv6 uses 128-bit addressing.',
        '📌 HTTPS operates over port 443 using SSL/TLS encryption.',
      ],
    },
    flashcards: [
      {
        id: 'fc-comp-1',
        q: { hi: 'MS Word में वर्तनी और व्याकरण (Spelling & Grammar) जांचने के लिए किस फंक्शन की का प्रयोग किया जाता है?', pa: 'ਸਪੈਲਿੰਗ ਚੈੱਕ ਲਈ ਕਿਹੜੀ ਕੀਅ ਵਰਤੀ ਜਾਂਦੀ ਹੈ?', en: 'Which function key triggers Spell Check in MS Word?' },
        a: { hi: 'F7 कुंजी।', pa: 'F7 ਕੀਅ।', en: 'F7 key.' },
        difficulty: 'easy',
      },
      {
        id: 'fc-comp-2',
        q: { hi: 'IPv4 और IPv6 पते का आकार क्रमशः कितने बिट्स का होता है?', pa: 'IPv4 ਅਤੇ IPv6 ਕਿੰਨੇ ਬਿੱਟ ਦੇ ਹੁੰਦੇ ਹਨ?', en: 'What are the address sizes of IPv4 and IPv6 respectively?' },
        a: { hi: 'IPv4 = 32 बिट्स, तथा IPv6 = 128 बिट्स।', pa: 'IPv4 = 32 ਬਿੱਟ, IPv6 = 128 ਬਿੱਟ।', en: 'IPv4 is 32-bit and IPv6 is 128-bit.' },
        difficulty: 'easy',
      },
    ],
    videos: [
      {
        title: 'Computer Awareness for PSSSB Clerk & Police Complete Course',
        channel: 'Punjab Career Hub',
        youtubeId: 'p2aGZ3fXw_9',
        language: 'pa',
        views: '520K',
        duration: '1:25:00',
        tags: ['Computer', 'PSSSB', 'Clerk'],
      },
    ],
    bookRefs: [
      {
        title: 'Computer Awareness for General Competitive Exams',
        author: 'Arihant',
        chapters: 'All Modules',
        type: 'standard',
      },
    ],
    documents: [
      {
            "title": "ERD Punjab · Master Cadre Social Science Official Syllabus PDF",
            "url": "https://erd.punjab.gov.in/master2022/Docs/SocialSciencesyllabus04_05_2022.pdf",
            "language": "English / Punjabi",
            "type": "syllabus"
      },
      {
            "title": "PSEB Class 10 · Samajik Sikhya Complete Textbook · Punjabi",
            "url": "https://static.pseb.ac.in/media/1670561302_Samajik%20Sikhya-10%28Punjabi%29%20Bhag-I.pdf",
            "language": "ਪੰਜਾਬੀ",
            "type": "textbook"
      },
      {
            "title": "NCERT Class 10 · Social Science Textbook · English",
            "url": "https://ncert.nic.in/textbook/pdf/jess301.pdf",
            "language": "English",
            "type": "ncert"
      },
      {
            "title": "NCERT Class 10 · सामाजिक विज्ञान पाठ्यपुस्तक · Hindi",
            "url": "https://ncert.nic.in/textbook/pdf/jhss301.pdf",
            "language": "Hindi",
            "type": "ncert"
      },
      {
            "title": "NIOS Secondary · Social Science Study Modules · Hindi/English",
            "url": "https://nios.ac.in/media/documents/SecSocSciCour/Hindi/Lesson-01.pdf",
            "language": "Bilingual",
            "type": "nios"
      }
],
    syllabusReference: {
      title: "PSSSB Clerk Computer IT & Office Productivity Suite Guidelines",
      url: "https://sssb.punjab.gov.in/",
      body: "Punjab Subordinate Services Selection Board (PSSSB)",
      verifiedOn: "15 March 2024"
    },
  },
};

export const ALL_LESSONS: Record<string, Lesson> = {
  ...BASE_LESSONS,
  ...WORLD_HISTORY_LESSONS,
  ...POLITY_EXTRA_LESSONS,
  ...ECONOMICS_LESSONS,
  ...SCIENCE_LESSONS,
  ...MATHEMATICS_LESSONS,
  ...PUNJABI_LESSONS,
  ...HINDI_LESSONS,
  ...ENGLISH_LESSONS,
  ...PATWARI_POLICE_LESSONS,
  ...PEDAGOGY_LESSONS,
  ...RAJASTHAN_LESSONS,
  ...REFERENCE_SST_LESSONS,
  ...SST_MISSING_LESSONS,
  ...SUPPLEMENTAL_LESSONS,
};

export const LESSONS = ALL_LESSONS;

export const TOPIC_ALIASES: Record<string, string> = {
  'ett-child-pedagogy': 'child-development-pedagogy',
  'child-pedagogy': 'child-development-pedagogy',
  'russian-revolution': 'sst-world-history-modern',
  'uno': 'sst-world-history-modern',
  'cold-war': 'sst-world-history-modern',
  'soil': 'sst-india-geography',
  'rivers': 'sst-india-geography',
  'green-revolution': 'sst-india-geography',
  'niti-aayog': 'sst-indian-economy-deep',
  'rbi': 'sst-indian-economy-deep',
  'delhi-sultanate': 'sst-medieval-india',
  'mughal': 'sst-medieval-india',
  'sufi': 'sst-medieval-india',
  'bhakti': 'sst-medieval-india',
  'ranjit-singh': 'sst-punjab-history-deep',
  'misals': 'sst-punjab-history-deep',
  'banda-singh': 'sst-punjab-history-deep',
  'ancient-india': 'sst-harappa',
  'medieval-india': 'sst-medieval-india',
  'punjab-history': 'sst-punjab-history-deep',
  'modern-india': 'sst-national-movement',
  'fundamental-rights': 'sst-fundamental-rights',
  'parliament': 'sst-legislature',
  'judiciary': 'sst-judiciary',
  'local-govt': 'sst-federal-local',
  'indian-economy': 'sst-indian-economy-deep',
  'world-history': 'sst-world-history-modern',
  'punjab-geography': 'sst-geo-punjab',
  'physical-geography': 'sst-india-geography',
  'motion': 'physics-concepts',
  'cell': 'biology-concepts',
  'electricity': 'physics-concepts',
  'constitution': 'sst-constitution',
  'agreement': 'english-grammar-lit',
  'sandhi': 'hindi-vyakaran',
  'computer': 'computer-awareness',
  'psssb-computer-it': 'computer-awareness',
  'computer-it': 'computer-awareness',
  'psssb-raavi-typing': 'punjabi-grammar-lit',
  'punjabi-clerk-prep': 'punjabi-grammar-lit',
  'ett-evs-science': 'environment-ecology',
  'series': 'ssc-cgl-reasoning',
  'punjabi-grammar': 'punjabi-grammar-lit',
  'english-practice': 'english-grammar-lit',
  'ett-primary-math': 'mathematics-core',
};

export function getLessonByTopicId(topicId: string): Lesson | undefined {
  if (LESSONS[topicId]) return LESSONS[topicId];
  const alias = TOPIC_ALIASES[topicId];
  if (alias && LESSONS[alias]) return LESSONS[alias];
  
  // Reverse alias check
  for (const [key, target] of Object.entries(TOPIC_ALIASES)) {
    if (target === topicId && LESSONS[key]) return LESSONS[key];
  }

  return undefined;
}


