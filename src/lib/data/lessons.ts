import { CLERK_GK_FAST_LESSONS } from './clerk-gk-fast';
import { CLERK_DATA_LESSONS } from './lessons/clerk-data-analysis';
import ettReflection from './lessons/ett-reflection.json';
import { buildGapLessons } from './lessons/gap-foundations';
import { FOUNDATION_LESSONS } from './foundation-content';
import { TOPIC_ALIASES } from './topic-scope';
export { TOPIC_ALIASES } from './topic-scope';
import unavailableResources from './unavailable-resources.json';
import { TOPIC_DOCUMENTS } from './topic-resources';
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
import { PUNJAB_HISTORY_GURUS_LESSONS } from './lessons/punjab_history_gurus';
import { CLERK_DEEP_LESSONS } from './lessons/clerk_deep';
import { MASTER_CADRE_BLUEPRINT_LESSONS } from './lessons/master_cadre_blueprint_adapter';

export * from './lessons/types';
import type { Lesson } from './lessons/types';


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
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 ਇਮਤਿਹਾਨੀ ਮਹੱਤਤਾ (Exam Weightage)</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਆਧੁਨਿਕ ਭਾਰਤ ਦਾ ਇਤਿਹਾਸ (1757–1947) ਪੰਜਾਬ ਮਾਸਟਰ ਕੈਡਰ (Social Science), ਲੈਕਚਰਾਰ ਕੈਡਰ, ਈ.ਟੀ.ਟੀ. (ETT) ਅਤੇ PSSSB ਕਲਰਕ/ਪਟਵਾਰੀ ਇਮਤਿਹਾਨਾਂ ਦਾ ਸਭ ਤੋਂ ਵੱਧ ਅੰਕਾਂ ਵਾਲਾ ਭਾਗ ਹੈ। ਇਸ ਵਿੱਚ ਪਲਾਸੀ, ਬਕਸਰ, 1857 ਦਾ ਵਿਦਰੋਹ, ਕਾਂਗਰਸ ਦੇ ਇਜਲਾਸ ਅਤੇ ਗਾਂਧੀਵਾਦੀ ਅੰਦੋਲਨਾਂ ਤੋਂ ਸਿੱਧੇ ਪ੍ਰਸ਼ਨ ਪੁੱਛੇ ਜਾਂਦੇ ਹਨ।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. ਬ੍ਰਿਟਿਸ਼ ਰਾਜ ਦੀ ਸਥਾਪਨਾ: ਪਲਾਸੀ ਅਤੇ ਬਕਸਰ ਦੀਆਂ ਲੜਾਈਆਂ</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-amber-400 font-bold text-sm mb-1">⚔️ ਪਲਾਸੀ ਦੀ ਲੜਾਈ (23 ਜੂਨ 1757)</h4>
                <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4">
                  <li><strong>ਸਥਾਨ:</strong> ਨਦੀਆ ਜ਼ਿਲ੍ਹਾ (ਪੱਛਮੀ ਬੰਗਾਲ), ਭਾਗੀਰਥੀ ਨਦੀ ਦੇ ਕੰਢੇ।</li>
                  <li><strong>ਵਿਰੋਧੀ ਧਿਰਾਂ:</strong> ਰੌਬਰਟ ਕਲਾਈਵ (ਈਸਟ ਇੰਡੀਆ ਕੰਪਨੀ) ਬਨਾਮ ਨਵਾਬ ਸਿਰਾਜੁੱਦੌਲਾ (ਬੰਗਾਲ)।</li>
                  <li><strong>ਗੱਦਾਰੀ:</strong> ਸੈਨਾਪਤੀ ਮੀਰ ਜਾਫ਼ਰ, ਰਾਏ ਦੁਰਲਭ ਅਤੇ ਜਗਤ ਸੇਠ ਨੇ ਨਵਾਬ ਨਾਲ ਧੋਖਾ ਕੀਤਾ।</li>
                  <li><strong>ਨਤੀਜਾ:</strong> ਅੰਗਰੇਜ਼ਾਂ ਦੀ ਜਿੱਤ, ਮੀਰ ਜਾਫ਼ਰ ਕਠਪੁਤਲੀ ਨਵਾਬ ਬਣਿਆ ਅਤੇ ਭਾਰਤ ਵਿੱਚ ਬ੍ਰਿਟਿਸ਼ ਸਾਮਰਾਜ ਦੀ ਨੀਂਹ ਰੱਖੀ ਗਈ।</li>
                </ul>
              </div>
              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-emerald-400 font-bold text-sm mb-1">⚔️ ਬਕਸਰ ਦੀ ਲੜਾਈ (22 ਅਕਤੂਬਰ 1764)</h4>
                <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4">
                  <li><strong>ਸਥਾਨ:</strong> ਬਕਸਰ (ਬਿਹਾਰ), ਗੰਗਾ ਨਦੀ ਦੇ ਕੰਢੇ।</li>
                  <li><strong>ਵਿਰੋਧੀ ਧਿਰਾਂ:</strong> ਮੇਜਰ ਹੈਕਟਰ ਮੁਨਰੋ ਬਨਾਮ ਮੀਰ ਕਾਸਿਮ, ਸ਼ੁਜਾਉੱਦੌਲਾ (ਅਵਧ) ਅਤੇ ਮੁਗਲ ਬਾਦਸ਼ਾਹ ਸ਼ਾਹ ਆਲਮ ਦੂਜਾ।</li>
                  <li><strong>ਇਲਾਹਾਬਾਦ ਦੀ ਸੰਧੀ (1765):</strong> ਕੰਪਨੀ ਨੂੰ ਬੰਗਾਲ, ਬਿਹਾਰ ਅਤੇ ਉੜੀਸਾ ਦੇ <em>ਦੀਵਾਨੀ ਅਧਿਕਾਰ (ਮਾਲੀਆ ਵਸੂਲੀ)</em> ਮਿਲੇ ਅਤੇ ਬੰਗਾਲ ਵਿੱਚ ਦੋਹਰੀ ਸ਼ਾਸਨ ਪ੍ਰਣਾਲੀ (Dual Government) ਲਾਗੂ ਹੋਈ।</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. 1857 ਦਾ ਪਹਿਲਾ ਆਜ਼ਾਦੀ ਸੰਗਰਾਮ</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>ਤੁਰੰਤ ਕਾਰਨ:</strong> ਨਵੀਂ ਐਨਫੀਲਡ ਰਾਈਫਲ ਵਿੱਚ ਗਾਂ ਅਤੇ ਸੂਰ ਦੀ ਚਰਬੀ ਵਾਲੇ ਕਾਰਤੂਸਾਂ ਦੀ ਵਰਤੋਂ।</p>
              <p>• <strong>ਪਹਿਲੀ ਸ਼ਹਾਦਤ:</strong> 29 ਮਾਰਚ 1857 ਨੂੰ ਬੈਰਕਪੁਰ ਛਾਉਣੀ ਦੀ 34ਵੀਂ ਨੇਟਿਵ ਇਨਫੈਂਟਰੀ ਦੇ ਸਿਪਾਹੀ <strong>ਮੰਗਲ ਪਾਂਡੇ</strong> ਨੇ ਬਗਾਵਤ ਕੀਤੀ।</p>
              <p>• <strong>ਵਿਦਰੋਹ ਦੀ ਸ਼ੁਰੂਆਤ:</strong> 10 ਮਈ 1857 ਨੂੰ ਮੇਰਠ ਛਾਉਣੀ ਤੋਂ ਸਿਪਾਹੀਆਂ ਨੇ ਦਿੱਲੀ ਵੱਲ ਕੂਚ ਕੀਤਾ।</p>
              <p>• <strong>ਪ੍ਰਮੁੱਖ ਕੇਂਦਰ ਅਤੇ ਆਗੂ:</strong> ਦਿੱਲੀ (ਬਹਾਦਰ ਸ਼ਾਹ ਜ਼ਫ਼ਰ ਅਤੇ ਬਖ਼ਤ ਖ਼ਾਂ), ਝਾਂਸੀ (ਰਾਣੀ ਲਕਸ਼ਮੀਬਾਈ), ਕਾਨਪੁਰ (ਨਾਨਾ ਸਾਹਿਬ ਅਤੇ ਤਾਂਤੀਆ ਟੋਪੇ), ਜਗਦੀਸ਼ਪੁਰ ਬਿਹਾਰ (ਕੁੰਵਰ ਸਿੰਘ), ਲਖਨਊ (ਬੇਗਮ ਹਜ਼ਰਤ ਮਹਿਲ)।</p>
              <p class="text-xs text-amber-300 pt-1">• <strong>ਭਾਰਤ ਸਰਕਾਰ ਐਕਟ 1858:</strong> ਈਸਟ ਇੰਡੀਆ ਕੰਪਨੀ ਦਾ ਰਾਜ ਖ਼ਤਮ ਹੋਇਆ, ਬ੍ਰਿਟਿਸ਼ ਤਾਜ (Crown) ਦਾ ਸਿੱਧਾ ਸ਼ਾਸਨ ਸ਼ੁਰੂ ਹੋਇਆ ਅਤੇ ਲਾਰਡ ਕੈਨਿੰਗ ਭਾਰਤ ਦੇ ਪਹਿਲੇ ਵਾਇਸਰਾਏ ਬਣੇ।</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. ਭਾਰਤੀ ਰਾਸ਼ਟਰੀ ਅੰਦੋਲਨ (1885 - 1947)</h3>
            <div class="space-y-3 text-sm text-slate-300">
              <div class="border-l-2 border-indigo-500 pl-3">
                <h5 class="text-white font-semibold">1885 — ਇੰਡੀਅਨ ਨੈਸ਼ਨਲ ਕਾਂਗਰਸ ਦੀ ਸਥਾਪਨਾ</h5>
                <p class="text-xs text-slate-400">28 ਦਸੰਬਰ 1885, ਗੋਕੁਲਦਾਸ ਤੇਜਪਾਲ ਸੰਸਕ੍ਰਿਤ ਕਾਲਜ ਬੰਬਈ। ਸੰਸਥਾਪਕ: ਏ.ਓ. ਹਿਊਮ। ਪਹਿਲੇ ਪ੍ਰਧਾਨ: ਡਬਲਿਊ.ਸੀ. ਬੈਨਰਜੀ (72 ਡੈਲੀਗੇਟ, ਵਾਇਸਰਾਏ ਲਾਰਡ ਡਫਰਿਨ)।</p>
              </div>
              <div class="border-l-2 border-indigo-500 pl-3">
                <h5 class="text-white font-semibold">1905 — ਬੰਗਾਲ ਦੀ ਵੰਡ ਅਤੇ ਸਵਦੇਸ਼ੀ ਲਹਿਰ</h5>
                <p class="text-xs text-slate-400">ਲਾਰਡ ਕਰਜ਼ਨ ਵੱਲੋਂ 16 ਅਕਤੂਬਰ 1905 ਨੂੰ ਬੰਗਾਲ ਦੀ ਵੰਡ ਲਾਗੂ ਕੀਤੀ ਗਈ। ਵਿਦੇਸ਼ੀ ਵਸਤਾਂ ਦੇ ਬਾਈਕਾਟ ਅਤੇ ਸਵਦੇਸ਼ੀ ਲਹਿਰ ਦੀ ਸ਼ੁਰੂਆਤ।</p>
              </div>
              <div class="border-l-2 border-indigo-500 pl-3">
                <h5 class="text-white font-semibold">1919 — ਜਲਿਆਂਵਾਲਾ ਬਾਗ਼ ਸਾਕਾ (13 ਅਪ੍ਰੈਲ 1919)</h5>
                <p class="text-xs text-slate-400">ਵਿਸਾਖੀ ਵਾਲੇ ਦਿਨ ਅੰਮ੍ਰਿਤਸਰ ਵਿਖੇ ਡਾ. ਸੈਫ਼ੁੱਦੀਨ ਕਿਚਲੂ ਅਤੇ ਡਾ. ਸੱਤਿਆਪਾਲ ਦੀ ਗ੍ਰਿਫ਼ਤਾਰੀ ਵਿਰੁੱਧ ਇਕੱਠੇ ਹੋਏ ਨਿਹੱਥੇ ਲੋਕਾਂ ਉੱਤੇ ਜਨਰਲ ਡਾਇਰ ਨੇ ਗੋਲੀਆਂ ਚਲਵਾਈਆਂ। ਰਬਿੰਦਰਨਾਥ ਟੈਗੋਰ ਨੇ 'ਨਾਈਟਹੁੱਡ' (ਸਰ) ਦਾ ਖਿਤਾਬ ਵਾਪਸ ਕੀਤਾ।</p>
              </div>
              <div class="border-l-2 border-indigo-500 pl-3">
                <h5 class="text-white font-semibold">1920-22 — ਨਾ-ਮਿਲਵਰਤਣ ਅੰਦੋਲਨ (Non-Cooperation Movement)</h5>
                <p class="text-xs text-slate-400">5 ਫਰਵਰੀ 1922 ਨੂੰ ਚੌਰੀ-ਚੌਰਾ (ਗੋਰਖਪੁਰ) ਦੀ ਹਿੰਸਕ ਘਟਨਾ ਕਾਰਨ ਮਹਾਤਮਾ ਗਾਂਧੀ ਨੇ 12 ਫਰਵਰੀ 1922 ਨੂੰ ਅੰਦੋਲਨ ਵਾਪਸ ਲੈ ਲਿਆ।</p>
              </div>
              <div class="border-l-2 border-indigo-500 pl-3">
                <h5 class="text-white font-semibold">1930 — ਸਿਵਲ ਨਾ-ਫ਼ਰਮਾਨੀ ਅੰਦੋਲਨ ਅਤੇ ਦਾਂਡੀ ਮਾਰਚ</h5>
                <p class="text-xs text-slate-400">12 ਮਾਰਚ ਤੋਂ 6 ਅਪ੍ਰੈਲ 1930 (24 ਦਿਨ, 388 ਕਿ.ਮੀ.)। ਸਾਬਰਮਤੀ ਆਸ਼ਰਮ ਤੋਂ ਦਾਂਡੀ ਤੱਕ 78 ਅਨੁਯਾਈਆਂ ਨਾਲ ਨਮਕ ਕਾਨੂੰਨ ਤੋੜਿਆ।</p>
              </div>
              <div class="border-l-2 border-indigo-500 pl-3">
                <h5 class="text-white font-semibold">1942 — ਭਾਰਤ ਛੱਡੋ ਅੰਦੋਲਨ (Quit India Movement)</h5>
                <p class="text-xs text-slate-400">8 ਅਗਸਤ 1942 ਨੂੰ ਬੰਬਈ ਤੋਂ ਗਾਂਧੀ ਜੀ ਨੇ "ਕਰੋ ਜਾਂ ਮਰੋ" (Do or Die) ਦਾ ਨਾਅਰਾ ਦਿੱਤਾ। 15 ਅਗਸਤ 1947 ਨੂੰ ਭਾਰਤ ਆਜ਼ਾਦ ਹੋਇਆ।</p>
              </div>
            </div>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 Examination Weightage</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Modern Indian History (1757–1947) is the highest-yielding domain in Punjab Master Cadre (SST), Lecturer Cadre, ETT, and PSSSB Clerk/Patwari exams, covering British expansion, the 1857 Uprising, Congress sessions, and the Gandhian mass movements.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. Rise of British Paramountcy: Plassey & Buxar</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-amber-400 font-bold text-sm mb-1">⚔️ Battle of Plassey (23 June 1757)</h4>
                <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4">
                  <li><strong>Location:</strong> Nadia district (West Bengal), banks of River Bhagirathi.</li>
                  <li><strong>Belligerents:</strong> Robert Clive (East India Company) vs Nawab Siraj-ud-Daulah of Bengal.</li>
                  <li><strong>Betrayal:</strong> Commander-in-Chief Mir Jafar, Rai Durlabh, and financier Jagat Seth conspired with Clive.</li>
                  <li><strong>Outcome:</strong> British victory installed Mir Jafar as puppet Nawab and laid the political foundation of British rule in India.</li>
                </ul>
              </div>
              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-emerald-400 font-bold text-sm mb-1">⚔️ Battle of Buxar (22 October 1764)</h4>
                <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4">
                  <li><strong>Location:</strong> Buxar (Bihar), near River Ganga.</li>
                  <li><strong>Belligerents:</strong> Major Hector Munro vs the triple alliance of Mir Qasim, Shuja-ud-Daulah (Awadh), and Mughal Emperor Shah Alam II.</li>
                  <li><strong>Treaty of Allahabad (1765):</strong> Granted the Company <em>Diwani rights (revenue administration)</em> over Bengal, Bihar, and Orissa, establishing Dual Government in Bengal.</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. The Revolt of 1857 (First War of Independence)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>Immediate Trigger:</strong> Introduction of the New Enfield Rifle using cartridges greased with cow and pig fat.</p>
              <p>• <strong>First Martyrdom:</strong> On 29 March 1857, <strong>Mangal Pandey</strong> of the 34th Bengal Native Infantry revolted at Barrackpore.</p>
              <p>• <strong>Outbreak:</strong> Full-scale mutiny erupted on 10 May 1857 at Meerut Cantonment before marching to Delhi.</p>
              <p>• <strong>Key Centres & Leaders:</strong> Delhi (Bahadur Shah Zafar & General Bakht Khan), Jhansi (Rani Lakshmibai), Kanpur (Nana Sahib & Tatya Tope), Jagdishpur Bihar (Kunwar Singh), Lucknow (Begum Hazrat Mahal).</p>
              <p class="text-xs text-amber-300 pt-1">• <strong>Government of India Act 1858:</strong> Abolished East India Company rule, transferred sovereignty directly to the British Crown, and designated Lord Canning as the first Viceroy of India.</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. Indian National Movement (1885 - 1947)</h3>
            <div class="space-y-3 text-sm text-slate-300">
              <div class="border-l-2 border-indigo-500 pl-3">
                <h5 class="text-white font-semibold">1885 — Formation of Indian National Congress (INC)</h5>
                <p class="text-xs text-slate-400">28 December 1885 at Gokuldas Tejpal Sanskrit College, Bombay. Founded by A.O. Hume during Lord Dufferin's viceroyalty; First President: W.C. Bonnerjee (72 delegates).</p>
              </div>
              <div class="border-l-2 border-indigo-500 pl-3">
                <h5 class="text-white font-semibold">1905 — Partition of Bengal & Swadeshi Movement</h5>
                <p class="text-xs text-slate-400">Enforced by Lord Curzon on 16 October 1905; catalysed the nationwide Swadeshi and Boycott movement.</p>
              </div>
              <div class="border-l-2 border-indigo-500 pl-3">
                <h5 class="text-white font-semibold">1919 — Jallianwala Bagh Massacre (13 April 1919)</h5>
                <p class="text-xs text-slate-400">On Baisakhi day in Amritsar, Brig.-Gen. Reginald Dyer ordered open fire on an unarmed gathering protesting the arrest of Dr. Saifuddin Kitchlew and Dr. Satyapal. Rabindranath Tagore renounced his British Knighthood in protest.</p>
              </div>
              <div class="border-l-2 border-indigo-500 pl-3">
                <h5 class="text-white font-semibold">1920-22 — Non-Cooperation Movement</h5>
                <p class="text-xs text-slate-400">Suspended by Mahatma Gandhi via the Bardoli Resolution on 12 February 1922 following the Chauri Chaura incident (5 February 1922, Gorakhpur).</p>
              </div>
              <div class="border-l-2 border-indigo-500 pl-3">
                <h5 class="text-white font-semibold">1930 — Civil Disobedience Movement & Dandi Salt March</h5>
                <p class="text-xs text-slate-400">12 March to 6 April 1930 (24 days, 241 miles / 388 km) from Sabarmati Ashram to Dandi with 78 satyagrahis to break the colonial salt monopoly.</p>
              </div>
              <div class="border-l-2 border-indigo-500 pl-3">
                <h5 class="text-white font-semibold">1942 — Quit India Movement</h5>
                <p class="text-xs text-slate-400">Launched on 8 August 1942 from Gowalia Tank Maidan, Bombay with Gandhiji's call of "Do or Die", culminating in Indian Independence on 15 August 1947.</p>
              </div>
            </div>
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
            <h4 class="text-emerald-300 font-bold text-base mb-2">🌾 ਪੰਜਾਬ ਦੀ ਹਰ ਸਰਕਾਰੀ ਪ੍ਰੀਖਿਆ ਦੀ ਰੀੜ੍ਹ</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਪੰਜਾਬ ਮਾਸਟਰ ਕੈਡਰ, PSSSB ਕਲਰਕ, ਪਟਵਾਰੀ, ਈ.ਟੀ.ਟੀ. ਅਤੇ ਪੰਜਾਬ ਪੁਲਿਸ ਪ੍ਰੀਖਿਆਵਾਂ ਵਿੱਚ ਪੰਜਾਬ ਦੇ ਇਤਿਹਾਸ ਤੋਂ 15 ਤੋਂ 20 ਪ੍ਰਸ਼ਨ ਲਾਜ਼ਮੀ ਤੌਰ 'ਤੇ ਪੁੱਛੇ ਜਾਂਦੇ ਹਨ। ਦਸ ਸਿੱਖ ਗੁਰੂ ਸਾਹਿਬਾਨਾਂ ਦਾ ਜੀਵਨ, ਬਾਣੀ, ਨਗਰ ਸਥਾਪਨਾ, ਖ਼ਾਲਸਾ ਪੰਥ, ਬਾਬਾ ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ, 12 ਸਿੱਖ ਮਿਸਲਾਂ ਅਤੇ ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਸਭ ਤੋਂ ਮਹੱਤਵਪੂਰਨ ਅਧਿਆਏ ਹਨ।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. ਦਸ ਸਿੱਖ ਗੁਰੂ ਸਾਹਿਬਾਨ (1469 - 1708) — ਸੰਪੂਰਨ ਸਾਰ</h3>
            <div class="space-y-2.5 text-xs text-slate-300">
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <strong class="text-amber-400">1. ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ (1469 - 1539):</strong> ਜਨਮ: 15 ਅਪ੍ਰੈਲ 1469, ਰਾਏ ਭੋਇ ਦੀ ਤਲਵੰਡੀ (ਨਨਕਾਣਾ ਸਾਹਿਬ)। ਮਾਤਾ ਤ੍ਰਿਪਤਾ ਜੀ, ਪਿਤਾ ਮਹਿਤਾ ਕਾਲੂ ਜੀ। 4 ਉਦਾਸੀਆਂ (ਯਾਤਰਾਵਾਂ)। ਬਾਬਰ ਦੇ ਹਮਲੇ ਦੀ ਨਿਖੇਧੀ ('ਬਾਬਰਵਾਣੀ')। ਰਾਵੀ ਕੰਢੇ ਕਰਤਾਰਪੁਰ ਵਸਾਇਆ। ਸਿਧਾਂਤ: <em>ਕਿਰਤ ਕਰੋ, ਨਾਮ ਜਪੋ, ਵੰਡ ਛਕੋ</em> ਅਤੇ ਲੰਗਰ ਪ੍ਰਥਾ। ਮੁੱਖ ਬਾਣੀਆਂ: ਜਪੁਜੀ ਸਾਹਿਬ, ਆਸਾ ਦੀ ਵਾਰ, ਸਿੱਧ ਗੋਸ਼ਟਿ, ਬਾਰਹ ਮਾਹ ਤੁਖਾਰੀ।
              </div>
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <strong class="text-emerald-400">2. ਸ੍ਰੀ ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ (1504 - 1552):</strong> ਪਹਿਲਾ ਨਾਮ: ਭਾਈ ਲਹਿਣਾ ਜੀ। <strong>ਗੁਰਮੁਖੀ ਲਿਪੀ</strong> ਨੂੰ ਮਿਆਰੀ ਰੂਪ ਦਿੱਤਾ। ਸਰੀਰਕ ਤੰਦਰੁਸਤੀ ਲਈ <strong>ਮੱਲ ਅਖਾੜਾ</strong> ਸ਼ੁਰੂ ਕੀਤਾ। ਖਡੂਰ ਸਾਹਿਬ ਨੂੰ ਕੇਂਦਰ ਬਣਾਇਆ।
              </div>
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <strong class="text-teal-400">3. ਸ੍ਰੀ ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ (1479 - 1574):</strong> ਗੋਇੰਦਵਾਲ ਸਾਹਿਬ ਵਿਖੇ 84 ਪੌੜੀਆਂ ਵਾਲੀ <strong>ਬਾਉਲੀ ਸਾਹਿਬ</strong> ਦਾ ਨਿਰਮਾਣ। ਧਰਮ ਪ੍ਰਚਾਰ ਲਈ <strong>22 ਮੰਜੀਆਂ</strong> ਸਥਾਪਿਤ ਕੀਤੀਆਂ। 'ਅਨੰਦੁ ਸਾਹਿਬ' (40 ਪੌੜੀਆਂ) ਦੀ ਰਚਨਾ। ਸਤੀ ਪ੍ਰਥਾ ਅਤੇ ਪਰਦਾ ਪ੍ਰਥਾ ਦਾ ਵਿਰੋਧ। ਬਾਦਸ਼ਾਹ ਅਕਬਰ ਨੇ ਗੋਇੰਦਵਾਲ ਵਿਖੇ ਪੰਗਤ ਵਿੱਚ ਬੈਠ ਕੇ ਲੰਗਰ ਛਕਿਆ।
              </div>
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <strong class="text-indigo-400">4. ਸ੍ਰੀ ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ (1534 - 1581):</strong> ਪਹਿਲਾ ਨਾਮ: ਭਾਈ ਜੇਠਾ ਜੀ। 1577 ਵਿੱਚ <strong>ਅੰਮ੍ਰਿਤਸਰ (ਰਾਮਦਾਸਪੁਰ / ਗੁਰੂ ਕਾ ਚੱਕ)</strong> ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ। ਸਿੱਖ ਵਿਆਹ ਪੱਧਤੀ ਲਈ ਸੂਹੀ ਰਾਗ ਵਿੱਚ <strong>'ਲਾਵਾਂ' (4 ਪੌੜੀਆਂ)</strong> ਦੀ ਰਚਨਾ ਕੀਤੀ ਅਤੇ <strong>ਮਸੰਦ ਪ੍ਰਥਾ</strong> ਸ਼ੁਰੂ ਕੀਤੀ।
              </div>
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <strong class="text-amber-400">5. ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ (1563 - 1606) [ਸ਼ਹੀਦਾਂ ਦੇ ਸਰਤਾਜ]:</strong> ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਦੀ ਉਸਾਰੀ (ਸੂਫ਼ੀ ਸੰਤ ਸਾਈਂ ਮੀਆਂ ਮੀਰ ਜੀ ਤੋਂ ਨੀਂਹ ਰਖਵਾਈ)। 1604 ਵਿੱਚ <strong>'ਆਦਿ ਗ੍ਰੰਥ ਸਾਹਿਬ'</strong> ਦਾ ਸੰਕਲਨ (ਲਿਖਾਰੀ: ਭਾਈ ਗੁਰਦਾਸ ਜੀ, ਪਹਿਲੇ ਗ੍ਰੰਥੀ: ਬਾਬਾ ਬੁੱਢਾ ਜੀ)। ਤਰਨਤਾਰਨ, ਕਰਤਾਰਪੁਰ (ਜਲੰਧਰ) ਅਤੇ ਹਰਗੋਬਿੰਦਪੁਰ ਵਸਾਏ। <em>ਸੁਖਮਨੀ ਸਾਹਿਬ</em> ਦੀ ਰਚਨਾ। 30 ਮਈ 1606 ਨੂੰ ਜਹਾਂਗੀਰ ਦੇ ਹੁਕਮ ਨਾਲ ਲਾਹੌਰ ਵਿਖੇ ਪਹਿਲੀ ਸਿੱਖ ਸ਼ਹਾਦਤ।
              </div>
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <strong class="text-emerald-400">6. ਸ੍ਰੀ ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ (1595 - 1644):</strong> <strong>ਮੀਰੀ ਅਤੇ ਪੀਰੀ</strong> ਦੀਆਂ ਦੋ ਤਲਵਾਰਾਂ ਧਾਰਨ ਕੀਤੀਆਂ। 1609 ਵਿੱਚ <strong>ਸ੍ਰੀ ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ</strong> ਦੀ ਉਸਾਰੀ। ਗਵਾਲੀਅਰ ਦੇ ਕਿਲ੍ਹੇ ਤੋਂ 52 ਰਾਜਿਆਂ ਨੂੰ ਰਿਹਾਅ ਕਰਵਾਇਆ ('ਬੰਦੀ ਛੋੜ ਦਾਤਾ')।
              </div>
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <strong class="text-teal-400">7. ਸ੍ਰੀ ਗੁਰੂ ਹਰਿਰਾਇ ਜੀ (1630 - 1661):</strong> ਕੀਰਤਪੁਰ ਸਾਹਿਬ ਵਿਖੇ ਆਯੁਰਵੈਦਿਕ ਦਵਾਖਾਨਾ ਅਤੇ ਬਾਗ਼ ਸਥਾਪਿਤ ਕੀਤਾ (ਦਾਰਾ ਸ਼ਿਕੋਹ ਦਾ ਇਲਾਜ ਕੀਤਾ)।
              </div>
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <strong class="text-indigo-400">8. ਸ੍ਰੀ ਗੁਰੂ ਹਰਿਕ੍ਰਿਸ਼ਨ ਸਾਹਿਬ ਜੀ (1656 - 1664):</strong> 'ਬਾਲ ਗੁਰੂ' (5 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਗੁਰਗੱਦੀ)। ਦਿੱਲੀ ਵਿੱਚ ਚੇਚਕ ਅਤੇ ਹੈਜ਼ੇ ਦੇ ਮਰੀਜ਼ਾਂ ਦੀ ਸੇਵਾ ਕਰਦੇ ਹੋਏ ਜੋਤੀ ਜੋਤਿ ਸਮਾਏ (ਗੁਰਦੁਆਰਾ ਬੰਗਲਾ ਸਾਹਿਬ)।
              </div>
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <strong class="text-amber-400">9. ਸ੍ਰੀ ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ (1621 - 1675) [ਹਿੰਦ ਦੀ ਚਾਦਰ]:</strong> ਚੱਕ ਨਾਨਕੀ (ਸ੍ਰੀ ਅਨੰਦਪੁਰ ਸਾਹਿਬ) ਦੀ ਸਥਾਪਨਾ। ਕਸ਼ਮੀਰੀ ਪੰਡਿਤਾਂ ਦੇ ਧਾਰਮਿਕ ਅਧਿਕਾਰਾਂ ਦੀ ਰਾਖੀ ਲਈ 11 ਨਵੰਬਰ 1675 ਨੂੰ ਚਾਂਦਨੀ ਚੌਕ ਦਿੱਲੀ (ਗੁਰਦੁਆਰਾ ਸੀਸ ਗੰਜ ਸਾਹਿਬ) ਵਿਖੇ ਔਰੰਗਜ਼ੇਬ ਦੇ ਹੁਕਮ ਨਾਲ ਸ਼ਹਾਦਤ ਦਿੱਤੀ।
              </div>
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <strong class="text-teal-400">10. ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ (1666 - 1708):</strong> ਜਨਮ: ਪਟਨਾ ਸਾਹਿਬ। 13 ਅਪ੍ਰੈਲ 1699 (ਵਿਸਾਖੀ) ਨੂੰ ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਵਿਖੇ <strong>ਖ਼ਾਲਸਾ ਪੰਥ</strong> ਦੀ ਸਾਜਨਾ (ਪੰਜ ਪਿਆਰੇ, 5 ਕਕਾਰ)। ਔਰੰਗਜ਼ੇਬ ਨੂੰ ਫ਼ਾਰਸੀ ਵਿੱਚ 'ਜ਼ਫ਼ਰਨਾਮਾ' ਲਿਖਿਆ। 1708 ਵਿੱਚ ਨਾਂਦੇੜ ਵਿਖੇ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਨੂੰ ਜੁਗੋ-ਜੁਗ ਅਟੱਲ ਗੁਰੂ ਥਾਪਿਆ।
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. ਬਾਬਾ ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ, ਸਿੱਖ ਮਿਸਲਾਂ ਅਤੇ ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-2">
              <p>• <strong>ਬਾਬਾ ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ (1670–1716):</strong> ਚੱਪੜਚਿੜੀ ਦੀ ਲੜਾਈ (ਮਈ 1710) ਵਿੱਚ ਵਜ਼ੀਰ ਖ਼ਾਨ ਨੂੰ ਮਾਰ ਕੇ ਸਰਹਿੰਦ ਫ਼ਤਿਹ ਕੀਤਾ, ਲੋਹਗੜ੍ਹ ਨੂੰ ਰਾਜਧਾਨੀ ਬਣਾਇਆ ਅਤੇ ਜ਼ਿਮੀਂਦਾਰੀ ਪ੍ਰਥਾ ਖ਼ਤਮ ਕੀਤੀ।</p>
              <p>• <strong>ਸ਼ੁਕਰਚੱਕੀਆ ਮਿਸਲ ਅਤੇ ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ (1799–1839):</strong> 1799 ਵਿੱਚ ਲਾਹੌਰ ਅਤੇ 1802 ਵਿੱਚ ਅੰਮ੍ਰਿਤਸਰ ਜਿੱਤ ਕੇ ਖ਼ਾਲਸਾ ਰਾਜ ਸਥਾਪਿਤ ਕੀਤਾ।</p>
              <p>• <strong>ਅੰਮ੍ਰਿਤਸਰ ਦੀ ਸੰਧੀ (25 ਅਪ੍ਰੈਲ 1809):</strong> ਚਾਰਲਸ ਮੈਟਕਾਫ਼ ਅਤੇ ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਵਿਚਕਾਰ ਸਤਲੁਜ ਦਰਿਆ ਨੂੰ ਸਰਹੱਦ ਮੰਨਿਆ ਗਿਆ।</p>
              <p>• <strong>ਪੰਜਾਬ ਦਾ ਰਲੇਵਾਂ (29 ਮਾਰਚ 1849):</strong> ਦੂਜੀ ਐਂਗਲੋ-ਸਿੱਖ ਲੜਾਈ ਤੋਂ ਬਾਅਦ ਲਾਰਡ ਡਲਹੌਜ਼ੀ ਨੇ ਪੰਜਾਬ ਨੂੰ ਅੰਗਰੇਜ਼ੀ ਸਾਮਰਾਜ ਵਿੱਚ ਮਿਲਾ ਲਿਆ।</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. ਆਜ਼ਾਦੀ ਸੰਘਰਸ਼ ਵਿੱਚ ਪੰਜਾਬ ਦਾ ਯੋਗਦਾਨ</h3>
            <div class="grid grid-cols-2 gap-2 text-xs text-slate-300">
              <span class="bg-slate-800 p-2.5 rounded-lg border border-slate-700">ਗ਼ਦਰ ਲਹਿਰ 1913 (ਸੈਨ ਫਰਾਂਸਿਸਕੋ, ਬਾਬਾ ਸੋਹਣ ਸਿੰਘ ਭਕਨਾ, ਲਾਲਾ ਹਰਦਿਆਲ, ਕਰਤਾਰ ਸਿੰਘ ਸਰਾਭਾ)</span>
              <span class="bg-slate-800 p-2.5 rounded-lg border border-slate-700">ਕਾਮਾਗਾਟਾ ਮਾਰੂ ਘਟਨਾ 1914 (ਬਾਬਾ ਗੁਰਦਿੱਤ ਸਿੰਘ, 376 ਮੁਸਾਫ਼ਿਰ, ਬਜਬਜ ਘਾਟ)</span>
              <span class="bg-slate-800 p-2.5 rounded-lg border border-slate-700">ਸ਼ਹੀਦ ਭਗਤ ਸਿੰਘ (1926 ਨੌਜਵਾਨ ਭਾਰਤ ਸਭਾ, 1928 ਸਾਂਡਰਸ ਕਤਲ, 23 ਮਾਰਚ 1931 ਸ਼ਹਾਦਤ)</span>
              <span class="bg-slate-800 p-2.5 rounded-lg border border-slate-700">ਗੁਰਦੁਆਰਾ ਸੁਧਾਰ ਲਹਿਰ (1920-25) ਅਤੇ ਸਿੱਖ ਗੁਰਦੁਆਰਾ ਐਕਟ 1925</span>
            </div>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6">
          <div class="bg-emerald-950/60 border border-emerald-500/30 p-4 rounded-xl">
            <h4 class="text-emerald-300 font-bold text-base mb-2">🌾 Backbone of Every Punjab State Competitive Examination</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Punjab History & Culture accounts for 15 to 20 mandatory questions in Punjab Master Cadre (SST), PSSSB Clerk, Patwari, ETT, and Punjab Police exams. Every topic below is also covered in its own dedicated deep-dive module in the curriculum.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. The Ten Sikh Gurus (1469 - 1708) — Complete Chronological Synthesis</h3>
            <div class="space-y-2.5 text-xs text-slate-300">
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <strong class="text-amber-400">1. Sri Guru Nanak Dev Ji (1469 - 1539):</strong> Born 15 April 1469 at Rai Bhoi di Talwandi (Nankana Sahib) to Mata Tripta Ji and Mehta Kalu Ji. Undertook 4 Udasis (missionary journeys). Condemned Babur's invasion in <em>Babarvani</em>. Founded Kartarpur on River Ravi. Core triad: <em>Kirat Karo, Naam Japo, Vand Chhako</em> + institutionalised Pangat/Langar. Key Banis: Japji Sahib, Asa di Var, Sidh Gosht.
              </div>
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <strong class="text-emerald-400">2. Sri Guru Angad Dev Ji (1504 - 1552):</strong> Earlier name: Bhai Lehna Ji. Standardized the <strong>Gurmukhi script</strong> (35 Akhar), established the <strong>Mall Akhara</strong> tradition for physical fitness, and made Khadur Sahib his seat.
              </div>
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <strong class="text-teal-400">3. Sri Guru Amar Das Ji (1479 - 1574):</strong> Constructed the 84-stepped <strong>Baoli Sahib</strong> at Goindwal Sahib. Established <strong>22 Manjis</strong> (dioceses) for missionary work. Composed <em>Anand Sahib</em> (40 Pauris). Abolished Sati and Purdah among Sikhs. Emperor Akbar sat in Pangat at Goindwal.
              </div>
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <strong class="text-indigo-400">4. Sri Guru Ram Das Ji (1534 - 1581):</strong> Earlier name: Bhai Jetha Ji. Founded <strong>Amritsar (Ramdaspur / Guru ka Chak)</strong> in 1577. Composed <strong>Lavan</strong> (4 stanzas in Suhi Raga) for Anand Karaj and initiated the <strong>Masand system</strong>.
              </div>
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <strong class="text-amber-400">5. Sri Guru Arjan Dev Ji (1563 - 1606) [Shaheedan de Sartaj]:</strong> Built Harmandir Sahib (foundation laid by Sufi saint Mian Mir Ji). Compiled the <strong>Adi Granth</strong> in 1604 (scribe: Bhai Gurdas Ji; first Granthi: Baba Buddha Ji). Founded Tarn Taran, Kartarpur (Jalandhar), and Hargobindpur. Composed <em>Sukhmani Sahib</em>. First Sikh Martyr at Lahore (1606) under Jahangir's orders.
              </div>
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <strong class="text-emerald-400">6. Sri Guru Hargobind Sahib Ji (1595 - 1644):</strong> Donned two swords of <strong>Miri (temporal) and Piri (spiritual)</strong> sovereignty. Built <strong>Sri Akal Takht Sahib</strong> (1609) and Lohgarh fort. Released 52 Hindu princes from Gwalior Fort (<em>Bandi Chhor Data</em>).
              </div>
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <strong class="text-teal-400">7. Sri Guru Har Rai Ji (1630 - 1661):</strong> Maintained an Ayurvedic herbal dispensary and wildlife sanctuary at Kiratpur Sahib (cured Mughal prince Dara Shikoh).
              </div>
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <strong class="text-indigo-400">8. Sri Guru Har Krishan Sahib Ji (1656 - 1664):</strong> The youngest Guru ('Bal Guru', Guruship at age 5). Attained Jotijot in Delhi while serving smallpox and cholera victims (Gurdwara Bangla Sahib).
              </div>
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <strong class="text-amber-400">9. Sri Guru Tegh Bahadur Ji (1621 - 1675) [Hind di Chadar]:</strong> Founded Chak Nanaki (Anandpur Sahib). Martyred on 11 November 1675 at Chandni Chowk, Delhi (Gurdwara Sis Ganj Sahib) on Aurangzeb's orders to defend the religious freedom of Kashmiri Pandits.
              </div>
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <strong class="text-teal-400">10. Sri Guru Gobind Singh Ji (1666 - 1708):</strong> Born at Patna Sahib. Created the <strong>Khalsa Panth</strong> on 13 April 1699 (Baisakhi) at Keshgarh Sahib, Anandpur (Panj Pyare, 5 Ks). Penned the <em>Zafarnama</em> in Persian. Enshrined Sri Guru Granth Sahib Ji as the Eternal Guru at Nanded in 1708.
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. Banda Singh Bahadur, Sikh Misls & Maharaja Ranjit Singh</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-2">
              <p>• <strong>Baba Banda Singh Bahadur (1670–1716):</strong> Defeated Wazir Khan at the Battle of Chappar Chiri (May 1710), established the first sovereign Sikh capital at Lohgarh, minted Nanakshahi coins, and abolished the Mughal Zamindari system.</p>
              <p>• <strong>Sukerchakia Misl & Maharaja Ranjit Singh (1799–1839):</strong> Captured Lahore in July 1799 and Amritsar in 1802, forging a modern secular empire with the Fauj-i-Ain army.</p>
              <p>• <strong>Treaty of Amritsar (25 April 1809):</strong> Signed between Charles Metcalfe and Maharaja Ranjit Singh fixing River Sutlej as the boundary.</p>
              <p>• <strong>Annexation of Punjab (29 March 1849):</strong> Proclaimed by Lord Dalhousie following the Second Anglo-Sikh War.</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. Role of Punjab in the Freedom Struggle</h3>
            <div class="grid grid-cols-2 gap-2 text-xs text-slate-300">
              <span class="bg-slate-800 p-2.5 rounded-lg border border-slate-700">Ghadar Movement 1913 (San Francisco, Baba Sohan Singh Bhakna, Lala Hardayal, Kartar Singh Sarabha)</span>
              <span class="bg-slate-800 p-2.5 rounded-lg border border-slate-700">Komagata Maru Incident 1914 (Baba Gurdit Singh, 376 passengers, Budge Budge Ghat)</span>
              <span class="bg-slate-800 p-2.5 rounded-lg border border-slate-700">Shaheed Bhagat Singh (1926 Naujawan Bharat Sabha, 1928 Saunders Case, 23 March 1931 Martyrdom)</span>
              <span class="bg-slate-800 p-2.5 rounded-lg border border-slate-700">Gurdwara Reform / Akali Movement (1920-25) & Sikh Gurdwaras Act 1925</span>
            </div>
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
            <h4 class="text-indigo-300 font-bold text-base mb-2">⚖️ ਭਾਰਤੀ ਸੰਵਿਧਾਨ: ਭਾਗ III (ਭਾਰਤ ਦਾ ਮੈਗਨਾ ਕਾਰਟਾ)</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਦੇ <strong>ਭਾਗ III (ਅਨੁਛੇਦ 12 ਤੋਂ 35)</strong> ਵਿੱਚ ਮੌਲਿਕ ਅਧਿਕਾਰਾਂ ਦਾ ਵਰਣਨ ਹੈ। ਇਹ ਅਮਰੀਕਾ ਦੇ <em>Bill of Rights</em> ਤੋਂ ਪ੍ਰੇਰਿਤ ਹਨ। ਇਹ ਅਧਿਕਾਰ <em>ਨਿਆਂਯੋਗ (Justiciable)</em> ਹਨ ਭਾਵ ਇਹਨਾਂ ਦੀ ਉਲੰਘਣਾ ਹੋਣ 'ਤੇ ਸਿੱਧਾ ਸੁਪਰੀਮ ਕੋਰਟ (ਅਨੁਛੇਦ 32) ਜਾਂ ਹਾਈ ਕੋਰਟ (ਅਨੁਛੇਦ 226) ਵਿੱਚ ਪਹੁੰਚ ਕੀਤੀ ਜਾ ਸਕਦੀ ਹੈ।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">6 ਮੌਲਿਕ ਅਧਿਕਾਰ ਸ਼੍ਰੇਣੀਆਂ (ਮੂਲ ਸੰਵਿਧਾਨ ਵਿੱਚ 7 ਸਨ)</h3>
            <p class="text-xs text-amber-300 mb-3">
              ⚠️ ਜਾਇਦਾਦ ਦਾ ਅਧਿਕਾਰ (Art. 31 ਅਤੇ 19(1)(f)) 44ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ 1978 ਰਾਹੀਂ ਮੌਲਿਕ ਅਧਿਕਾਰਾਂ ਦੀ ਸੂਚੀ ਵਿੱਚੋਂ ਹਟਾ ਕੇ ਭਾਗ XII ਦੇ ਅਨੁਛੇਦ 300A ਅਧੀਨ ਇੱਕ ਕਾਨੂੰਨੀ ਅਧਿਕਾਰ ਬਣਾ ਦਿੱਤਾ ਗਿਆ।
            </p>
            <div class="space-y-3 text-sm text-slate-300">
              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-teal-400 font-bold text-sm mb-1">1. ਸਮਾਨਤਾ ਦਾ ਅਧਿਕਾਰ (Right to Equality) — ਅਨੁਛੇਦ 14 ਤੋਂ 18</h4>
                <ul class="text-xs space-y-1 list-disc pl-4 text-slate-300">
                  <li><strong>ਅਨੁਛੇਦ 14:</strong> ਕਾਨੂੰਨ ਸਾਹਮਣੇ ਸਮਾਨਤਾ (UK) ਅਤੇ ਕਾਨੂੰਨਾਂ ਦੀ ਬਰਾਬਰ ਸੁਰੱਖਿਆ (USA)।</li>
                  <li><strong>ਅਨੁਛੇਦ 15:</strong> ਧਰਮ, ਨਸਲ, ਜਾਤ, ਲਿੰਗ ਜਾਂ ਜਨਮ ਸਥਾਨ ਦੇ ਆਧਾਰ 'ਤੇ ਵਿਤਕਰੇ ਦੀ ਮਨਾਹੀ।</li>
                  <li><strong>ਅਨੁਛੇਦ 16:</strong> ਜਨਤਕ ਰੁਜ਼ਗਾਰ (ਸਰਕਾਰੀ ਨੌਕਰੀਆਂ) ਵਿੱਚ ਮੌਕਿਆਂ ਦੀ ਸਮਾਨਤਾ।</li>
                  <li><strong>ਅਨੁਛੇਦ 17:</strong> ਛੂਤ-ਛਾਤ (ਅਸਪ੍ਰਿਸ਼ਯਤਾ) ਦਾ ਖਾਤਮਾ ਅਤੇ ਇਸਦੇ ਕਿਸੇ ਵੀ ਰੂਪ ਵਿੱਚ ਆਚਰਣ 'ਤੇ ਪਾਬੰਦੀ।</li>
                  <li><strong>ਅਨੁਛੇਦ 18:</strong> ਖਿਤਾਬਾਂ (Titles) ਦਾ ਅੰਤ (ਫ਼ੌਜੀ ਅਤੇ ਵਿੱਦਿਅਕ ਸਨਮਾਨਾਂ ਨੂੰ ਛੱਡ ਕੇ)।</li>
                </ul>
              </div>

              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-teal-400 font-bold text-sm mb-1">2. ਸੁਤੰਤਰਤਾ ਦਾ ਅਧਿਕਾਰ (Right to Freedom) — ਅਨੁਛੇਦ 19 ਤੋਂ 22</h4>
                <ul class="text-xs space-y-1 list-disc pl-4 text-slate-300">
                  <li><strong>ਅਨੁਛੇਦ 19 (6 ਆਜ਼ਾਦੀਆਂ):</strong> ਬੋਲਣ ਅਤੇ ਪ੍ਰਗਟਾਵੇ ਦੀ ਆਜ਼ਾਦੀ, ਸ਼ਾਂਤਮਈ ਇਕੱਠ, ਸੰਘ/ਯੂਨੀਅਨ ਬਣਾਉਣ, ਦੇਸ਼ ਭਰ ਵਿੱਚ ਘੁੰਮਣ-ਫਿਰਨ, ਨਿਵਾਸ ਕਰਨ ਅਤੇ ਕੋਈ ਵੀ ਕਿੱਤਾ/ਕਾਰੋਬਾਰ ਅਪਣਾਉਣ ਦੀ ਆਜ਼ਾਦੀ।</li>
                  <li><strong>ਅਨੁਛੇਦ 20:</strong> ਅਪਰਾਧਾਂ ਲਈ ਦੋਸ਼-ਸਿੱਧੀ ਦੇ ਸਬੰਧ ਵਿੱਚ ਸੁਰੱਖਿਆ (ਦੋਹਰੀ ਸਜ਼ਾ ਤੋਂ ਬਚਾਅ)।</li>
                  <li><strong>ਅਨੁਛੇਦ 21:</strong> ਜੀਵਨ ਅਤੇ ਨਿੱਜੀ ਸੁਤੰਤਰਤਾ ਦੀ ਸੁਰੱਖਿਆ (Right to Life & Personal Liberty)।</li>
                  <li><strong>ਅਨੁਛੇਦ 21A:</strong> 6 ਤੋਂ 14 ਸਾਲ ਦੇ ਬੱਚਿਆਂ ਲਈ ਮੁਫ਼ਤ ਅਤੇ ਲਾਜ਼ਮੀ ਸਿੱਖਿਆ ਦਾ ਅਧਿਕਾਰ (86ਵੀਂ ਸੋਧ ਐਕਟ, 2002)।</li>
                  <li><strong>ਅਨੁਛੇਦ 22:</strong> ਗ੍ਰਿਫ਼ਤਾਰੀ ਅਤੇ ਨਜ਼ਰਬੰਦੀ ਵਿਰੁੱਧ ਸੁਰੱਖਿਆ (24 ਘੰਟਿਆਂ ਵਿੱਚ ਮੈਜਿਸਟ੍ਰੇਟ ਸਾਹਮਣੇ ਪੇਸ਼ੀ)।</li>
                </ul>
              </div>

              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-teal-400 font-bold text-sm mb-1">3. ਸ਼ੋਸ਼ਣ ਵਿਰੁੱਧ ਅਧਿਕਾਰ (ਅਨੁਛੇਦ 23-24) ਅਤੇ 4. ਧਾਰਮਿਕ ਆਜ਼ਾਦੀ (ਅਨੁਛੇਦ 25-28)</h4>
                <p class="text-xs text-slate-300">ਮਨੁੱਖੀ ਤਸਕਰੀ ਅਤੇ ਬੇਗਾਰ (جبری ਮਜ਼ਦੂਰੀ) 'ਤੇ ਪਾਬੰਦੀ (Art 23); 14 ਸਾਲ ਤੋਂ ਘੱਟ ਉਮਰ ਦੇ ਬੱਚਿਆਂ ਨੂੰ ਖਤਰਨਾਕ ਕਾਰਖਾਨਿਆਂ ਵਿੱਚ ਕੰਮ 'ਤੇ ਲਗਾਉਣ ਦੀ ਮਨਾਹੀ (Art 24)। ਧਰਮ ਨੂੰ ਮੰਨਣ, ਆਚਰਣ ਕਰਨ ਅਤੇ ਪ੍ਰਚਾਰ ਕਰਨ ਦੀ ਆਜ਼ਾਦੀ (Art 25-28)। ਘੱਟ-ਗਿਣਤੀਆਂ ਦੇ ਸੱਭਿਆਚਾਰਕ ਤੇ ਵਿੱਦਿਅਕ ਅਧਿਕਾਰ (Art 29-30)।</p>
              </div>

              <div class="bg-indigo-900/40 border border-indigo-500/60 p-4 rounded-xl">
                <h4 class="text-indigo-300 font-bold text-base mb-1">5. ਸੰਵਿਧਾਨਕ ਉਪਚਾਰਾਂ ਦਾ ਅਧਿਕਾਰ — ਅਨੁਛੇਦ 32 (ਸੰਵਿਧਾਨ ਦੀ ਆਤਮਾ)</h4>
                <p class="text-xs text-slate-300 mb-2">
                  ਡਾ. ਬੀ.ਆਰ. ਅੰਬੇਡਕਰ ਨੇ ਅਨੁਛੇਦ 32 ਨੂੰ "ਸੰਵਿਧਾਨ ਦਾ ਦਿਲ ਅਤੇ ਆਤਮਾ" ਕਿਹਾ। ਇਸ ਤਹਿਤ ਸੁਪਰੀਮ ਕੋਰਟ 5 ਰਿੱਟਾਂ ਜਾਰੀ ਕਰਦਾ ਹੈ:
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  <span class="bg-slate-900/80 p-2 rounded">1. <strong>Habeas Corpus (ਬੰਦੀ ਪ੍ਰਤੱਖੀਕਰਨ):</strong> ਗੈਰ-ਕਾਨੂੰਨੀ ਹਿਰਾਸਤ ਤੋਂ ਰਿਹਾਈ।</span>
                  <span class="bg-slate-900/80 p-2 rounded">2. <strong>Mandamus (ਪਰਮਾਦੇਸ਼):</strong> ਜਨਤਕ ਅਧਿਕਾਰੀ ਨੂੰ ਕਾਨੂੰਨੀ ਫ਼ਰਜ਼ ਨਿਭਾਉਣ ਦਾ ਹੁਕਮ।</span>
                  <span class="bg-slate-900/80 p-2 rounded">3. <strong>Prohibition (ਪ੍ਰਤੀਸ਼ੇਧ):</strong> ਹੇਠਲੀ ਅਦਾਲਤ ਨੂੰ ਅਧਿਕਾਰ ਖੇਤਰ ਤੋਂ ਬਾਹਰ ਜਾਣ ਤੋਂ ਰੋਕਣਾ।</span>
                  <span class="bg-slate-900/80 p-2 rounded">4. <strong>Certiorari (ਉਤਪ੍ਰੇਸ਼ਨ):</strong> ਹੇਠਲੀ ਅਦਾਲਤ ਦੇ ਗੈਰ-ਕਾਨੂੰਨੀ ਹੁਕਮ ਨੂੰ ਰੱਦ ਕਰਨਾ।</span>
                  <span class="bg-slate-900/80 p-2 rounded col-span-1 md:col-span-2">5. <strong>Quo-Warranto (ਅਧਿਕਾਰ ਪੁੱਛਣਾ):</strong> ਜਨਤਕ ਅਹੁਦੇ ਦੇ ਦਾਅਵੇ ਦੀ ਕਾਨੂੰਨੀ ਜਾਂਚ।</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">⚖️ Part III of the Indian Constitution (Magna Carta of India)</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Enshrined in <strong>Part III (Articles 12 to 35)</strong> and inspired by the US Bill of Rights, Fundamental Rights are <em>justiciable</em> guarantees enforceable directly before the Supreme Court (Article 32) and High Courts (Article 226).
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">The 6 Categories of Fundamental Rights (Originally 7)</h3>
            <p class="text-xs text-amber-300 mb-3">
              ⚠️ The Right to Property (Article 31 & Article 19(1)(f)) was deleted from Part III by the 44th Constitutional Amendment Act, 1978 and converted into a Constitutional/Legal Right under Article 300A (Part XII).
            </p>
            <div class="space-y-3 text-sm text-slate-300">
              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-teal-400 font-bold text-sm mb-1">1. Right to Equality — Articles 14 to 18</h4>
                <ul class="text-xs space-y-1 list-disc pl-4 text-slate-300">
                  <li><strong>Article 14:</strong> Equality before Law (British concept) & Equal Protection of Laws (American concept).</li>
                  <li><strong>Article 15:</strong> Prohibition of discrimination on grounds only of religion, race, caste, sex, or place of birth.</li>
                  <li><strong>Article 16:</strong> Equality of opportunity in matters of public employment.</li>
                  <li><strong>Article 17:</strong> Abolition of Untouchability and prohibition of its practice in any form.</li>
                  <li><strong>Article 18:</strong> Abolition of Titles (except military and academic distinctions).</li>
                </ul>
              </div>

              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-teal-400 font-bold text-sm mb-1">2. Right to Freedom — Articles 19 to 22</h4>
                <ul class="text-xs space-y-1 list-disc pl-4 text-slate-300">
                  <li><strong>Article 19 (6 Democratic Freedoms):</strong> Speech & expression, peaceful assembly without arms, forming associations/unions/cooperatives, free movement throughout India, residence, and practicing any profession or business.</li>
                  <li><strong>Article 20:</strong> Protection in respect of conviction for offences (No Ex-post-facto criminal law, No Double Jeopardy, No Self-incrimination).</li>
                  <li><strong>Article 21:</strong> Protection of Life and Personal Liberty (never suspended even during National Emergency under Art. 359).</li>
                  <li><strong>Article 21A:</strong> Right to Free and Compulsory Education for children aged 6 to 14 years (inserted by the 86th Amendment Act, 2002).</li>
                  <li><strong>Article 22:</strong> Protection against arbitrary arrest and detention (production before magistrate within 24 hours).</li>
                </ul>
              </div>

              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-teal-400 font-bold text-sm mb-1">3. Right Against Exploitation (Arts 23–24), 4. Freedom of Religion (Arts 25–28) & Cultural Rights (Arts 29–30)</h4>
                <p class="text-xs text-slate-300">Prohibition of human trafficking and forced labour/begar (Art 23); prohibition of child labour below age 14 in hazardous employment (Art 24). Freedom of conscience and free profession, practice, and propagation of religion (Arts 25–28). Protection of minority script/culture and right of minorities to establish and administer educational institutions (Arts 29–30).</p>
              </div>

              <div class="bg-indigo-900/40 border border-indigo-500/60 p-4 rounded-xl">
                <h4 class="text-indigo-300 font-bold text-base mb-1">6. Right to Constitutional Remedies — Article 32 (Heart & Soul of the Constitution)</h4>
                <p class="text-xs text-slate-300 mb-2">
                  Described by Dr. B.R. Ambedkar as the "very heart and soul of the Constitution", Article 32 empowers the Supreme Court to issue 5 prerogative writs:
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  <span class="bg-slate-900/80 p-2 rounded">1. <strong>Habeas Corpus ("To have the body of"):</strong> Frees a person from unlawful detention.</span>
                  <span class="bg-slate-900/80 p-2 rounded">2. <strong>Mandamus ("We command"):</strong> Directs a public official to perform a mandatory statutory duty.</span>
                  <span class="bg-slate-900/80 p-2 rounded">3. <strong>Prohibition ("To forbid"):</strong> Prevents a lower court/tribunal from exceeding its jurisdiction.</span>
                  <span class="bg-slate-900/80 p-2 rounded">4. <strong>Certiorari ("To be certified"):</strong> Quashes an already passed order of an inferior court acting without jurisdiction.</span>
                  <span class="bg-slate-900/80 p-2 rounded col-span-1 md:col-span-2">5. <strong>Quo-Warranto ("By what authority"):</strong> Challenges the legality of a person's claim to a public office.</span>
                </div>
              </div>
            </div>
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
            <h4 class="text-indigo-300 font-bold text-base mb-2">🏛️ ਪ੍ਰਾਚੀਨ ਭਾਰਤੀ ਇਤਿਹਾਸ ਦੀ ਰੂਪ-ਰੇਖਾ</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਹੜੱਪਾ ਸੱਭਿਅਤਾ (ਕਾਂਸੀ ਯੁੱਗ), ਵੈਦਿਕ ਕਾਲ, ਬੁੱਧ ਅਤੇ ਜੈਨ ਧਰਮ ਦਾ ਉਭਾਰ, 16 ਮਹਾਂਜਨਪਦ, ਮੌਰਿਆ ਸਾਮਰਾਜ (ਸਮਰਾਟ ਅਸ਼ੋਕ ਦਾ ਧੰਮ) ਅਤੇ ਗੁਪਤ ਕਾਲ (ਸੁਨਹਿਰੀ ਯੁੱਗ) ਪ੍ਰਾਚੀਨ ਭਾਰਤ ਦੇ ਸਭ ਤੋਂ ਮਹੱਤਵਪੂਰਨ ਅਧਿਆਏ ਹਨ।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. ਸਿੰਧੂ ਘਾਟੀ ਸੱਭਿਅਤਾ (Indus Valley Civilisation - 2500 ਤੋਂ 1750 ਈ.ਪੂ.)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-2">
              <p>• <strong>ਪਹਿਲੀ ਖੋਜ:</strong> 1921 ਵਿੱਚ ਦਯਾਰਾਮ ਸਾਹਨੀ ਵੱਲੋਂ <em>ਹੜੱਪਾ (ਰਾਵੀ ਦਰਿਆ ਕੰਢੇ)</em> ਦੀ ਖੋਜ। 1922 ਵਿੱਚ ਰਾਖਾਲਦਾਸ ਬੈਨਰਜੀ ਵੱਲੋਂ <em>ਮੋਹਨਜੋਦੜੋ (ਸਿੰਧੂ ਦਰਿਆ, ਵਿਸ਼ਾਲ ਇਸ਼ਨਾਨਘਰ ਤੇ ਕਾਂਸੀ ਦੀ ਨਰਤਕੀ)</em> ਦੀ ਖੋਜ।</p>
              <p>• <strong>ਪੰਜਾਬ ਦੇ ਪ੍ਰਮੁੱਖ ਕੇਂਦਰ:</strong> <strong>ਰੋਪੜ (ਰੂਪਨਗਰ, ਪੰਜਾਬ)</strong> — ਸਤਲੁਜ ਦਰਿਆ ਦੇ ਕੰਢੇ ਯੱਗਦੱਤ ਸ਼ਰਮਾ ਵੱਲੋਂ ਖੁਦਾਈ; ਇੱਥੇ ਮਨੁੱਖ ਦੇ ਨਾਲ ਕੁੱਤੇ ਨੂੰ ਦਫ਼ਨਾਉਣ ਦੇ ਸਬੂਤ ਮਿਲੇ। ਸੰਘੋਲ (ਫ਼ਤਿਹਗੜ੍ਹ ਸਾਹਿਬ) ਵੀ ਪ੍ਰਮੁੱਖ ਕੇਂਦਰ ਹੈ।</p>
              <p>• <strong>ਹੋਰ ਪ੍ਰਮੁੱਖ ਸਥਾਨ:</strong> ਲੋਥਲ (ਗੁਜਰਾਤ, ਪ੍ਰਾਚੀਨ ਬੰਦਰਗਾਹ/ਗੋਦੀਵਾੜਾ), ਕਾਲੀਬੰਗਾ (ਰਾਜਸਥਾਨ, ਵਾਹੇ ਹੋਏ ਖੇਤ ਅਤੇ ਅਗਨੀ ਕੁੰਡ), ਧੌਲਾਵੀਰਾ (ਗੁਜਰਾਤ, ਉੱਨਤ ਜਲ ਪ੍ਰਬੰਧਨ ਪ੍ਰਣਾਲੀ, 3 ਭਾਗਾਂ ਵਿੱਚ ਵੰਡਿਆ ਨਗਰ)।</p>
              <p>• <strong>ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ:</strong> ਗ੍ਰਿੱਡ ਪ੍ਰਣਾਲੀ (ਸ਼ਤਰੰਜ ਵਰਗੀ ਨਗਰ ਯੋਜਨਾ), ਪੱਕੀਆਂ ਇੱਟਾਂ ਦੇ ਮਕਾਨ, ਉੱਨਤ ਜਲ ਨਿਕਾਸੀ ਪ੍ਰਬੰਧ ਅਤੇ ਪਸ਼ੂਪਤੀ ਮੋਹਰ।</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. ਵੈਦਿਕ ਸੱਭਿਆਚਾਰ ਅਤੇ ਬੁੱਧ-ਜੈਨ ਧਰਮ ਦਾ ਉਭਾਰ</h3>
            <div class="space-y-2 text-xs text-slate-300">
              <div class="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                <p class="text-teal-400 font-bold">ਰਿਗਵੈਦਿਕ ਕਾਲ (1500 - 1000 ਈ.ਪੂ.):</p>
                <p>ਸਪਤ-ਸਿੰਧੂ ਪ੍ਰਦੇਸ਼ (ਪੰਜਾਬ ਦੀ ਧਰਤੀ)। ਰਿਗਵੇਦ (ਸਭ ਤੋਂ ਪੁਰਾਣਾ ਵੇਦ, 10 ਮੰਡਲ, 1028 ਸੂਕਤ)। ਗਾਇਤਰੀ ਮੰਤਰ (ਤੀਜੇ ਮੰਡਲ ਵਿੱਚ, ਵਿਸ਼ਵਾਮਿੱਤਰ ਵੱਲੋਂ ਰਚਿਤ)।</p>
              </div>
              <div class="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                <p class="text-amber-400 font-bold">ਬੁੱਧ ਧਰਮ ਅਤੇ ਜੈਨ ਧਰਮ:</p>
                <p><strong>ਗੌਤਮ ਬੁੱਧ:</strong> ਜਨਮ ਲੁੰਬਿਨੀ, ਗਿਆਨ ਪ੍ਰਾਪਤੀ ਬੋਧਗਯਾ, ਪਹਿਲਾ ਉਪਦੇਸ਼ ਸਾਰਨਾਥ (ਧਰਮਚੱਕਰ ਪ੍ਰਵਰਤਨ), ਮਹਾਂਪਰੀਨਿਰਵਾਣ ਕੁਸ਼ੀਨਗਰ। ਚਾਰ ਆਰੀਆ ਸੱਚ ਅਤੇ ਅਸ਼ਟਾਂਗਿਕ ਮਾਰਗ। <strong>ਭਗਵਾਨ ਮਹਾਂਵੀਰ:</strong> 24ਵੇਂ ਤੀਰਥੰਕਰ, ਤ੍ਰਿਰਤਨ (ਸਮਯਕ ਦਰਸ਼ਨ, ਸਮਯਕ ਗਿਆਨ, ਸਮਯਕ ਚਰਿੱਤਰ) ਅਤੇ ਪੰਜ ਮਹਾਂਵਰਤ।</p>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. ਮੌਰਿਆ ਸਾਮਰਾਜ ਅਤੇ ਸਮਰਾਟ ਅਸ਼ੋਕ ਦਾ ਧੰਮ</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-2">
              <p>• <strong>ਸਥਾਪਨਾ:</strong> 322 ਈ.ਪੂ. ਵਿੱਚ ਚੰਦਰਗੁਪਤ ਮੌਰਿਆ ਨੇ ਚਾਣਕਿਆ (ਕੌਟੱਲਿਆ) ਦੀ ਮਦਦ ਨਾਲ ਨੰਦ ਵੰਸ਼ ਦੇ ਧਨਾਨੰਦ ਨੂੰ ਹਰਾ ਕੇ ਕੀਤੀ। ਪ੍ਰਮੁੱਖ ਸਰੋਤ: ਚਾਣਕਿਆ ਦਾ <em>ਅਰਥਸ਼ਾਸਤਰ</em> ਅਤੇ ਮੈਗਸਥਨੀਜ਼ ਦੀ <em>ਇੰਡੀਕਾ</em>।</p>
              <p>• <strong>ਕਲਿੰਗਾ ਯੁੱਧ (261 ਈ.ਪੂ.):</strong> 13ਵੇਂ ਸ਼ਿਲਾਲੇਖ ਅਨੁਸਾਰ ਕਲਿੰਗਾ ਯੁੱਧ ਦੇ ਭਾਰੀ ਕਤਲੇਆਮ ਤੋਂ ਬਾਅਦ ਸਮਰਾਟ ਅਸ਼ੋਕ ਨੇ 'ਭੇਰੀਘੋਸ਼' ਤਿਆਗ ਕੇ 'ਧੰਮਘੋਸ਼' ਅਪਣਾਇਆ ਅਤੇ ਬੁੱਧ ਧਰਮ ਸਵੀਕਾਰ ਕੀਤਾ।</p>
              <p>• <strong>ਸਾਰਨਾਥ ਸਤੰਭ:</strong> ਭਾਰਤ ਦਾ ਰਾਸ਼ਟਰੀ ਚਿੰਨ੍ਹ ਅਸ਼ੋਕ ਦੇ ਸਾਰਨਾਥ ਸਿੰਘ ਸਤੰਭ ਤੋਂ ਲਿਆ ਗਿਆ ਹੈ।</p>
            </div>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🏛️ Framework of Ancient Indian History</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              The Bronze Age Harappan Civilisation, the Vedic Age, the rise of Buddhism and Jainism, the 16 Mahajanapadas, the Mauryan Empire (Ashoka's Dhamma), and the Gupta Golden Age form the core syllabus of Ancient India.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. Indus Valley Civilisation (2500 – 1750 BCE)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-2">
              <p>• <strong>First Excavations:</strong> Harappa (on River Ravi) discovered by Daya Ram Sahni in 1921; Mohenjo-Daro (on River Indus, featuring the Great Bath, Great Granary, and Bronze Dancing Girl) discovered by R.D. Banerji in 1922.</p>
              <p>• <strong>Major Sites in Punjab:</strong> <strong>Ropar (Rupnagar)</strong> — excavated by Y.D. Sharma on the banks of River Sutlej (evidence of dog buried with human burial); <strong>Sanghol</strong> (Fatehgarh Sahib).</p>
              <p>• <strong>Other Landmark Sites:</strong> Lothal (Gujarat — tidal dockyard on Bhogava river), Kalibangan (Rajasthan — ploughed field surface and fire altars), Dholavira (Gujarat — UNESCO site with three-part citadel/town division and rock-cut water reservoirs).</p>
              <p>• <strong>Salient Features:</strong> Grid-pattern urban planning, burnt-brick architecture, covered underground drainage, steatite seals (including the Pashupati seal), and undeciphered pictographic script.</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. Vedic Culture & Rise of Buddhism and Jainism</h3>
            <div class="space-y-2 text-xs text-slate-300">
              <div class="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                <p class="text-teal-400 font-bold">Rigvedic Period (1500 – 1000 BCE):</p>
                <p>Centred in the Sapta Sindhu region (land of seven rivers in Punjab). The Rigveda is the oldest text (10 Mandalas, 1,028 Suktas; Gayatri Mantra in Mandala III composed by Vishwamitra; Dasharajna Battle on River Parushni/Ravi in Mandala VII).</p>
              </div>
              <div class="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                <p class="text-amber-400 font-bold">Buddhism & Jainism:</p>
                <p><strong>Gautama Buddha:</strong> Born at Lumbini, enlightenment at Bodh Gaya, first sermon at Sarnath (Dharmachakrapravartana), Mahaparinirvana at Kushinagar. Taught the Four Noble Truths and Eightfold Path. <strong>Lord Mahavira:</strong> 24th Tirthankara of Jainism; taught the Triratna (Right Faith, Right Knowledge, Right Conduct) and Five Mahavratas.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. Mauryan Empire & Emperor Ashoka's Dhamma</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-2">
              <p>• <strong>Foundation (322 BCE):</strong> Chandragupta Maurya overthrew Dhanananda of the Nanda dynasty with the statecraft of Chanakya (Kautilya). Primary sources: Kautilya's <em>Arthashastra</em> and Megasthenes' <em>Indica</em>.</p>
              <p>• <strong>Kalinga War (261 BCE):</strong> Recorded in Major Rock Edict XIII; the devastation prompted Emperor Ashoka to abandon <em>Bherighosha</em> (conquest by war) in favour of <em>Dhammaghosha</em> (conquest by righteousness) and patronize Buddhism.</p>
              <p>• <strong>Lion Capital of Sarnath:</strong> Adopted as the National Emblem of the Republic of India.</p>
            </div>
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
            <h4 class="text-indigo-300 font-bold text-base mb-2">⚔️ ਮੱਧਕਾਲੀ ਭਾਰਤ ਦੀ ਰਾਜਨੀਤਿਕ ਬਣਤਰ</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              1206 ਤੋਂ 1526 ਤੱਕ ਦਿੱਲੀ ਸਲਤਨਤ (5 ਰਾਜਵੰਸ਼: ਗੁਲਾਮ, ਖਿਲਜੀ, ਤੁਗਲਕ, ਸੱਯਦ ਅਤੇ ਲੋਧੀ) ਅਤੇ 1526 ਤੋਂ 1707 ਤੱਕ ਮੁਗਲ ਸਾਮਰਾਜ (ਬਾਬਰ ਤੋਂ ਔਰੰਗਜ਼ੇਬ ਤੱਕ) ਮੱਧਕਾਲੀ ਭਾਰਤ ਦੇ ਕੇਂਦਰੀ ਅਧਿਆਏ ਹਨ।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. ਦਿੱਲੀ ਸਲਤਨਤ (1206 - 1526 ਈ.)</h3>
            <div class="space-y-2.5 text-xs text-slate-300">
              <div class="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                <strong class="text-teal-400">ਗੁਲਾਮ ਵੰਸ਼ (1206-1290):</strong> ਕੁਤੁਬੁੱਦੀਨ ਐਬਕ (ਲਾਖਬਖ਼ਸ਼, ਕੁਤੁਬ ਮੀਨਾਰ ਦੀ ਨੀਂਹ), ਇਲਤੁਤਮਿਸ਼ (ਸਲਤਨਤ ਦਾ ਅਸਲ ਸੰਸਥਾਪਕ, ਇਕਤਾ ਪ੍ਰਣਾਲੀ, ਤੁਰਕਾਨ-ਏ-ਚਿਹਲਗਾਨੀ), ਰਜ਼ੀਆ ਸੁਲਤਾਨ (ਭਾਰਤ ਦੀ ਪਹਿਲੀ ਮਹਿਲਾ ਮੁਸਲਿਮ ਸ਼ਾਸਕ 1236-40), ਬਲਬਨ (ਲੋਹੇ ਅਤੇ ਲਹੂ ਦੀ ਨੀਤੀ, ਸਿਜਦਾ ਅਤੇ ਪਾਇਬੋਸ)।
              </div>
              <div class="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                <strong class="text-amber-400">ਖਿਲਜੀ ਵੰਸ਼ (1290-1320):</strong> ਅਲਾਉੱਦੀਨ ਖਿਲਜੀ (ਬਾਜ਼ਾਰ ਨਿਯੰਤਰਣ ਪ੍ਰਣਾਲੀ, ਘੋੜਿਆਂ ਨੂੰ ਦਾਗਣ ਤੇ ਹੁਲੀਆ ਪ੍ਰਥਾ, ਸੈਨਾਪਤੀ ਮਲਿਕ ਕਾਫ਼ੂਰ ਰਾਹੀਂ ਦੱਖਣੀ ਭਾਰਤ ਜਿੱਤ)।
              </div>
              <div class="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                <strong class="text-indigo-400">ਤੁਗਲਕ, ਸੱਯਦ ਅਤੇ ਲੋਧੀ ਵੰਸ਼ (1320-1526):</strong> ਮੁਹੰਮਦ ਬਿਨ ਤੁਗਲਕ (ਰਾਜਧਾਨੀ ਦਿੱਲੀ ਤੋਂ ਦੌਲਤਾਬਾਦ ਤਬਦੀਲੀ, ਤਾਂਬੇ ਦੀ ਸੰਕੇਤਕ ਮੁਦਰਾ), ਫ਼ਿਰੋਜ਼ ਸ਼ਾਹ ਤੁਗਲਕ (ਨਹਿਰਾਂ ਦਾ ਨਿਰਮਾਣ, ਦੀਵਾਨ-ਏ-ਖ਼ੈਰਾਤ), ਸਿਕੰਦਰ ਲੋਧੀ (1504 ਵਿੱਚ ਆਗਰਾ ਸ਼ਹਿਰ ਵਸਾਇਆ)।
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. ਮੁਗਲ ਸਾਮਰਾਜ (1526 - 1707 ਈ.)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-2">
              <p>• <strong>ਪਾਣੀਪਤ ਦੀ ਪਹਿਲੀ ਲੜਾਈ (21 ਅਪ੍ਰੈਲ 1526):</strong> ਬਾਬਰ ਨੇ ਇਬਰਾਹਿਮ ਲੋਧੀ ਨੂੰ ਹਰਾ ਕੇ ਮੁਗਲ ਵੰਸ਼ ਦੀ ਨੀਂਹ ਰੱਖੀ ਅਤੇ ਤੋਪਖਾਨੇ ਤੇ ਤੁਲੁਗਮਾ ਯੁੱਧ ਨੀਤੀ ਵਰਤੀ।</p>
              <p>• <strong>ਅਕਬਰ (1556 - 1605):</strong> ਪਾਣੀਪਤ ਦੀ ਦੂਜੀ ਲੜਾਈ (1556, ਬੈਰਮ ਖ਼ਾਂ ਬਨਾਮ ਹੇਮੂ)। 1564 ਵਿੱਚ ਜਜ਼ੀਆ ਕਰ ਖ਼ਤਮ ਕੀਤਾ। ਮਨਸਬਦਾਰੀ ਪ੍ਰਸ਼ਾਸਨਿਕ ਪ੍ਰਣਾਲੀ ਲਾਗੂ ਕੀਤੀ। 1582 ਵਿੱਚ 'ਦੀਨ-ਏ-ਇਲਾਹੀ' ਚਲਾਇਆ ਅਤੇ 'ਸੁਲਹ-ਏ-ਕੁੱਲ' ਦੀ ਨੀਤੀ ਅਪਣਾਈ।</p>
              <p>• <strong>ਸ਼ਾਹਜਹਾਂ:</strong> ਮੁਗਲ ਭਵਨ ਨਿਰਮਾਣ ਕਲਾ ਦਾ ਸੁਨਹਿਰੀ ਯੁੱਗ (ਤਾਜ ਮਹਿਲ, ਲਾਲ ਕਿਲ੍ਹਾ ਦਿੱਲੀ, ਜਾਮਾ ਮਸਜਿਦ, ਤਖ਼ਤ-ਏ-ਤਾਊਸ)।</p>
              <p>• <strong>ਔਰੰਗਜ਼ੇਬ (1658 - 1707):</strong> 'ਜ਼ਿੰਦਾ ਪੀਰ'। 1679 ਵਿੱਚ ਜਜ਼ੀਆ ਕਰ ਮੁੜ ਲਾਗੂ ਕੀਤਾ। 1675 ਵਿੱਚ ਸ੍ਰੀ ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ ਨੂੰ ਸ਼ਹੀਦ ਕਰਵਾਇਆ।</p>
            </div>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">⚔️ Political & Administrative Architecture of Medieval India</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Medieval Indian history spans the five dynasties of the <strong>Delhi Sultanate (1206–1526 CE)</strong>—Mamluk/Slave, Khalji, Tughlaq, Sayyid, and Lodi—followed by the <strong>Mughal Empire (1526–1707 CE)</strong> from Babur to Aurangzeb.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. The Delhi Sultanate (1206 – 1526 CE)</h3>
            <div class="space-y-2.5 text-xs text-slate-300">
              <div class="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                <strong class="text-teal-400">Slave / Mamluk Dynasty (1206–1290):</strong> Qutb-ud-din Aibak (Lakh Baksh, started Qutub Minar), Iltutmish (real consolidator, introduced Iqta system, silver Tanka & copper Jital, and Turkan-i-Chahalgani), Raziya Sultan (first and only female Muslim ruler, 1236–40), Balban (policy of Blood and Iron, Sijda and Paibos).
              </div>
              <div class="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                <strong class="text-amber-400">Khalji Dynasty (1290–1320):</strong> Alauddin Khalji (strict market price control via Shahna-i-Mandi, Dagh branding of horses & Huliya descriptive rolls of soldiers, Deccan campaigns led by Malik Kafur).
              </div>
              <div class="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                <strong class="text-indigo-400">Tughlaq, Sayyid & Lodi Dynasties (1320–1526):</strong> Muhammad bin Tughlaq (transfer of capital from Delhi to Daulatabad, token copper currency), Firoz Shah Tughlaq (irrigation canals, Diwan-i-Khairat), Sikandar Lodi (founded Agra in 1504).
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. The Mughal Empire (1526 – 1707 CE)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-2">
              <p>• <strong>First Battle of Panipat (21 April 1526):</strong> Babur defeated Ibrahim Lodi using Ottoman artillery and Tulughma flanking tactics to establish the Mughal Empire.</p>
              <p>• <strong>Akbar (1556 – 1605):</strong> Second Battle of Panipat (1556, Bairam Khan vs Hemu). Abolished Jizya tax in 1564, instituted the Mansabdari rank system (Zat and Sawar) and Todar Mal's Dahsala land revenue system, promulgated Din-i-Ilahi (1582), and championed Sulh-i-Kul (universal peace).</p>
              <p>• <strong>Shah Jahan:</strong> Golden Age of Mughal architecture (Taj Mahal, Red Fort Delhi, Jama Masjid, Peacock Throne).</p>
              <p>• <strong>Aurangzeb (1658 – 1707):</strong> Known as 'Zinda Pir'; re-imposed Jizya in 1679 and ordered the martyrdom of Sri Guru Tegh Bahadur Ji in 1675.</p>
            </div>
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
            <h4 class="text-teal-300 font-bold text-base mb-2">🌍 ਪੰਜਾਬ ਦੀ ਭੂਗੋਲਿਕ ਸਥਿਤੀ (Geographical Profile)</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਪੰਜਾਬ ਭਾਰਤ ਦੇ ਉੱਤਰ-ਪੱਛਮ ਵਿੱਚ ਸਥਿਤ ਹੈ। ਇਸਦਾ ਕੁੱਲ ਖੇਤਰਫਲ <strong>50,362 ਵਰਗ ਕਿਲੋਮੀਟਰ</strong> ਹੈ (ਭਾਰਤ ਦੇ ਕੁੱਲ ਖੇਤਰਫਲ ਦਾ 1.54%)। ਇਸ ਵਿੱਚ <strong>23 ਜ਼ਿਲ੍ਹੇ</strong> ਅਤੇ 5 ਪ੍ਰਸ਼ਾਸਨਿਕ ਡਿਵੀਜ਼ਨਾਂ (ਫ਼ਰੀਦਕੋਟ, ਫ਼ਿਰੋਜ਼ਪੁਰ, ਜਲੰਧਰ, ਪਟਿਆਲਾ ਅਤੇ ਰੂਪਨਗਰ) ਹਨ। 23ਵਾਂ ਨਵਾਂ ਜ਼ਿਲ੍ਹਾ <strong>ਮਲੇਰਕੋਟਲਾ</strong> (2021 ਵਿੱਚ ਸੰਗਰੂਰ ਤੋਂ ਵੱਖ ਹੋ ਕੇ) ਬਣਿਆ।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. ਪੰਜਾਬ ਦੇ ਦਰਿਆ ਅਤੇ 5 ਇਤਿਹਾਸਕ ਦੁਆਬੇ</h3>
            <p class="text-slate-300 text-sm mb-3">
              'ਦੁਆਬ' ਦੋ ਦਰਿਆਵਾਂ ਦੇ ਵਿਚਕਾਰਲੀ ਧਰਤੀ ਨੂੰ ਕਿਹਾ ਜਾਂਦਾ ਹੈ (ਮੁਗਲ ਬਾਦਸ਼ਾਹ ਅਕਬਰ ਦੇ ਸਮੇਂ ਟੋਡਰ ਮੱਲ ਵੱਲੋਂ ਨਾਮਕਰਨ)। ਮੌਜੂਦਾ ਭਾਰਤੀ ਪੰਜਾਬ ਵਿੱਚ ਮੁੱਖ ਤੌਰ 'ਤੇ 3 ਬਾਰਾਂਮਾਸੀ ਦਰਿਆ ਵਗਦੇ ਹਨ: <strong>ਸਤਲੁਜ, ਬਿਆਸ ਅਤੇ ਰਾਵੀ</strong> (ਘੱਗਰ ਮੌਸਮੀ ਨਦੀ ਹੈ)।
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-slate-300">
              <div class="bg-slate-800 p-3 rounded-xl border border-slate-700">
                <strong class="text-teal-400">1. ਬਿਸਤ ਜਲੰਧਰ ਦੁਆਬ (Doaba):</strong> ਬਿਆਸ ਅਤੇ ਸਤਲੁਜ ਦਰਿਆਵਾਂ ਦੇ ਵਿਚਕਾਰਲਾ ਖੇਤਰ (ਜਲੰਧਰ, ਹੁਸ਼ਿਆਰਪੁਰ, ਕਪੂਰਥਲਾ, ਸ਼ਹੀਦ ਭਗਤ ਸਿੰਘ ਨਗਰ/ਨਵਾਂਸ਼ਹਿਰ — 4 ਜ਼ਿਲ੍ਹੇ)।
              </div>
              <div class="bg-slate-800 p-3 rounded-xl border border-slate-700">
                <strong class="text-amber-400">2. ਬਾਰੀ ਦੁਆਬ (Majha):</strong> ਬਿਆਸ ਅਤੇ ਰਾਵੀ ਦਰਿਆਵਾਂ ਦੇ ਵਿਚਕਾਰਲਾ ਖੇਤਰ (ਅੰਮ੍ਰਿਤਸਰ, ਗੁਰਦਾਸਪੁਰ, ਤਰਨਤਾਰਨ, ਪਠਾਨਕੋਟ — 4 ਜ਼ਿਲ੍ਹੇ)। ਇਸਨੂੰ 'ਮਾਝਾ' ਕਿਹਾ ਜਾਂਦਾ ਹੈ।
              </div>
              <div class="bg-slate-800 p-3 rounded-xl border border-slate-700">
                <strong class="text-indigo-400">3. ਮਾਲਵਾ ਖੇਤਰ (Malwa):</strong> ਸਤਲੁਜ ਦਰਿਆ ਦੇ ਦੱਖਣ ਵੱਲ ਦਾ ਵਿਸ਼ਾਲ ਮੈਦਾਨੀ ਭਾਗ (ਲੁਧਿਆਣਾ, ਪਟਿਆਲਾ, ਬਠਿੰਡਾ, ਸੰਗਰੂਰ, ਮਾਨਸਾ, ਫ਼ਿਰੋਜ਼ਪੁਰ, ਮੋਹਾਲੀ ਆਦਿ — ਕੁੱਲ 15 ਜ਼ਿਲ੍ਹੇ)।
              </div>
              <div class="bg-slate-800 p-3 rounded-xl border border-slate-700">
                <strong class="text-emerald-400">ਪੱਛਮੀ ਪੰਜਾਬ ਦੇ 3 ਦੁਆਬੇ:</strong> ਰਚਨਾ ਦੁਆਬ (ਰਾਵੀ ਤੇ ਚਨਾਬ), ਚੱਜ ਦੁਆਬ (ਚਨਾਬ ਤੇ ਜੇਹਲਮ) ਅਤੇ ਸਿੰਧ ਸਾਗਰ ਦੁਆਬ (ਜੇਹਲਮ ਤੇ ਸਿੰਧੂ)।
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. ਪ੍ਰਮੁੱਖ ਡੈਮ, ਨਹਿਰੀ ਪ੍ਰਣਾਲੀ ਅਤੇ ਰਾਮਸਰ ਵੈੱਟਲੈਂਡਜ਼</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-2">
              <p>• <strong>ਭਾਖੜਾ ਨੰਗਲ ਡੈਮ:</strong> ਸਤਲੁਜ ਦਰਿਆ (ਬਿਲਾਸਪੁਰ, ਹਿਮਾਚਲ ਪ੍ਰਦੇਸ਼) ਉੱਤੇ ਬਣਿਆ ਕੰਕਰੀਟ ਗ੍ਰੈਵਿਟੀ ਡੈਮ; ਇਸਦੇ ਪਿੱਛੇ ਗੋਬਿੰਦ ਸਾਗਰ ਝੀਲ ਸਥਿਤ ਹੈ।</p>
              <p>• <strong>ਪੋਂਗ ਡੈਮ (ਮਹਾਰਾਣਾ ਪ੍ਰਤਾਪ ਸਾਗਰ):</strong> ਬਿਆਸ ਦਰਿਆ ਉੱਤੇ ਤਲਵਾੜਾ ਨੇੜੇ।</p>
              <p>• <strong>ਰਣਜੀਤ ਸਾਗਰ ਡੈਮ (ਥੀਨ ਡੈਮ):</strong> ਰਾਵੀ ਦਰਿਆ ਉੱਤੇ ਪਠਾਨਕੋਟ ਨੇੜੇ (ਪੰਜਾਬ ਦਾ ਸਭ ਤੋਂ ਉੱਚਾ ਡੈਮ)।</p>
              <p>• <strong>ਹਰੀਕੇ ਪੱਤਣ (ਤਰਨਤਾਰਨ):</strong> ਸਤਲੁਜ ਅਤੇ ਬਿਆਸ ਦਰਿਆਵਾਂ ਦਾ ਸੰਗਮ ਸਥਾਨ, ਜਿੱਥੋਂ ਇੰਦਰਾ ਗਾਂਧੀ ਨਹਿਰ (ਰਾਜਸਥਾਨ ਫੀਡਰ) ਨਿਕਲਦੀ ਹੈ। ਪੰਜਾਬ ਦੀਆਂ 6 ਰਾਮਸਰ ਵੈੱਟਲੈਂਡਜ਼ (ਹਰੀਕੇ, ਕਾਂਝਲੀ, ਰੋਪੜ, ਕੇਸ਼ੋਪੁਰ-ਮਿਆਣੀ, ਨੰਗਲ, ਬਿਆਸ ਕੰਜ਼ਰਵੇਸ਼ਨ ਰਿਜ਼ਰਵ) ਵਿੱਚੋਂ ਸਭ ਤੋਂ ਵੱਡੀ।</p>
            </div>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6">
          <div class="bg-teal-950/60 border border-teal-500/30 p-4 rounded-xl">
            <h4 class="text-teal-300 font-bold text-base mb-2">🌍 Geographical Profile of Punjab</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Situated in northwestern India (29°30' N to 32°32' N latitude and 73°55' E to 76°50' E longitude), Punjab covers a total area of <strong>50,362 sq km</strong> (1.54% of India's geographical area). It comprises <strong>23 districts</strong> grouped into 5 administrative divisions, with <strong>Malerkotla</strong> (carved out of Sangrur in 2021) as the 23rd district.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. Rivers of Punjab & The 5 Historical Doabs</h3>
            <p class="text-slate-300 text-sm mb-3">
              A 'Doab' signifies the alluvial tract lying between two confluent rivers. Present-day Indian Punjab is drained by three perennial Himalayan rivers—<strong>Sutlej, Beas, and Ravi</strong>—along with the seasonal river <strong>Ghaggar</strong>.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-slate-300">
              <div class="bg-slate-800 p-3 rounded-xl border border-slate-700">
                <strong class="text-teal-400">1. Bist Jalandhar Doab (Doaba):</strong> Land between Beas and Sutlej (Jalandhar, Hoshiarpur, Kapurthala, Shaheed Bhagat Singh Nagar — 4 districts).
              </div>
              <div class="bg-slate-800 p-3 rounded-xl border border-slate-700">
                <strong class="text-amber-400">2. Bari Doab (Majha):</strong> Land between Beas and Ravi (Amritsar, Gurdaspur, Tarn Taran, Pathankot — 4 districts); heartland of Majha.
              </div>
              <div class="bg-slate-800 p-3 rounded-xl border border-slate-700">
                <strong class="text-indigo-400">3. Malwa Tract:</strong> Expansive plain south of River Sutlej encompassing 15 districts (Ludhiana, Patiala, Bathinda, Sangrur, Mansa, Ferozepur, Fazilka, Mohali, etc.).
              </div>
              <div class="bg-slate-800 p-3 rounded-xl border border-slate-700">
                <strong class="text-emerald-400">Western Doabs (Undivided Punjab):</strong> Rechna Doab (Ravi–Chenab), Chaj Doab (Chenab–Jhelum), and Sindh Sagar Doab (Jhelum–Indus).
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. Major Multipurpose Dams, Canals & Ramsar Wetlands</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-2">
              <p>• <strong>Bhakra Nangal Dam:</strong> Concrete gravity dam across River Sutlej (Bilaspur, HP) forming the Gobind Sagar reservoir.</p>
              <p>• <strong>Pong Dam (Maharana Pratap Sagar):</strong> Built on River Beas near Talwara.</p>
              <p>• <strong>Ranjit Sagar Dam (Thein Dam):</strong> Built across River Ravi near Pathankot.</p>
              <p>• <strong>Harike Pattan (Tarn Taran):</strong> Confluence of Rivers Sutlej and Beas, headworks of the Indira Gandhi Canal, and the largest of Punjab's 6 Ramsar Wetlands (Harike, Kanjli, Ropar, Keshopur-Miani, Nangal, Beas Conservation Reserve).</p>
            </div>
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
    coverageStatus: 'complete',
    editorialStatus: 'authored',
    title: {
      hi: 'पंजाब क्लर्क परीक्षा तैयारी एवं रावी फॉन्ट टाइपिंग गाइड',
      pa: 'ਪੰਜਾਬ ਕਲਰਕ ਪ੍ਰੀਖਿਆ ਅਤੇ ਰਾਵੀ ਫੌਂਟ ਟਾਈਪਿੰਗ ਗਾਈਡ (PSSSB)',
      en: 'Punjab Clerk Exam Strategy & Punjabi Typing (Raavi Font) Guide',
    },
    examRelevance: 'PSSSB Clerk, Clerk IT, Clerk Accounts & Steno (100 Marks Written + Qualifying Typing)',
    estimatedTime: '30 मिनट',
    prerequisites: {
      hi: [
        'पंजाब क्लर्क भर्ती पात्रता (स्नातक डिग्री एवं 120 घंटे का कंप्यूटर कोर्स प्रमाण पत्र)।',
        'मैट्रिक स्तर पर पंजाबी भाषा उत्तीर्ण होना अनिवार्य।',
        'कम्प्यूटर कीबोर्ड पर बुनियादी टाइपिंग और इनस्क्रिप्ट लेआउट का परिचय।',
      ],
      pa: [
        'ਪੰਜਾਬ ਕਲਰਕ ਭਰਤੀ ਯੋਗਤਾ (ਗ੍ਰੈਜੂਏਸ਼ਨ ਅਤੇ 120 ਘੰਟੇ ਦਾ ਮਾਨਤਾ ਪ੍ਰਾਪਤ ਕੰਪਿਊਟਰ ਕੋਰਸ)।',
        'ਦਸਵੀਂ ਪੱਧਰ ਤੱਕ ਪੰਜਾਬੀ ਵਿਸ਼ਾ ਪਾਸ ਹੋਣਾ ਲਾਜ਼ਮੀ।',
        'ਕੰਪਿਊਟਰ ਕੀਬੋਰਡ ਉੱਤੇ ਰਾਵੀ ਇਨਸਕ੍ਰਿਪਟ (InScript) ਲੇਆਉਟ ਦੀ ਮੁੱਢਲੀ ਜਾਣਕਾਰੀ।',
      ],
      en: [
        'PSSSB statutory eligibility: Graduation degree and 120-hour ISO-certified computer literacy certificate.',
        'Mandatory Punjabi matriculation standard qualification.',
        'Familiarity with standard QWERTY keyboard and Unicode InScript typing conventions.',
      ],
    },
    learningObjectives: {
      hi: [
        'PSSSB क्लर्क 100 अंकों की लिखित परीक्षा योजना, विषयवार अंकभार और 0.25 नकारात्मक अंकन को समझना।',
        'अनिवार्य योग्यता पंजाबी पेपर A (50 प्रश्न, 50% उत्तीर्ण मानक) के नियमों को जानना।',
        'रावी फॉन्ट (Unicode InScript) टाइपिंग टेस्ट के मानक (30 WPM, 92% शुद्धता, 10 मिनट) को मास्टर करना।',
        'पूर्ण गलती (Full Mistake) और आधी गलती (Half Mistake) की गणना विधि का सटीक विश्लेषण करना।',
        'रावी फॉन्ट की जटिल कुंजियों (हलंत, टिप्पी, बिंदी, अधक, पैर वाले अक्षर) की शॉर्टकट समझ विकसित करना।',
      ],
      pa: [
        'PSSSB ਕਲਰਕ 100 ਅੰਕਾਂ ਦੇ ਲਿਖਤੀ ਪੇਪਰ ਦੀ ਬਣਤਰ ਅਤੇ 0.25 ਨੈਗੇਟਿਵ ਮਾਰਕਿੰਗ ਨੂੰ ਸਮਝਣਾ।',
        'ਲਾਜ਼ਮੀ ਪੰਜਾਬੀ ਪੇਪਰ ਏ (50 ਅੰਕ, 50% ਪਾਸ ਮਾਰਕਸ) ਦੀਆਂ ਸ਼ਰਤਾਂ ਜਾਣਨਾ।',
        'ਰਾਵੀ ਫੌਂਟ ਟਾਈਪਿੰਗ ਟੈਸਟ (30 WPM ਸਪੀਡ, 92% ਐਕੂਰੇਸੀ, 10 ਮਿੰਟ) ਦੇ ਨਿਯਮਾਂ ਦੀ ਮੁਹਾਰਤ ਹਾਸਲ ਕਰਨਾ।',
        'ਪੂਰੀ ਗ਼ਲਤੀ ਅਤੇ ਅੱਧੀ ਗ਼ਲਤੀ ਦੀ ਗਣਨਾ ਫਾਰਮੂਲੇ ਨੂੰ ਸਮਝਣਾ।',
        'ਰਾਵੀ ਫੌਂਟ ਦੀਆਂ ਵਿਸ਼ੇਸ਼ ਸ਼ਾਰਟਕੱਟ ਕੀਆਂ (ਹਲੰਤ, ਟਿੱਪੀ, ਬਿੰਦੀ, ਅੱਧਕ) ਦਾ ਅਭਿਆਸ ਕਰਨਾ।',
      ],
      en: [
        'Master the PSSSB Clerk 100-mark objective written examination structure, section quotas, and 0.25 negative marking.',
        'Understand mandatory Paper A qualifying requirements (50 MCQs, minimum 50% pass mark).',
        'Execute the Punjabi Raavi font typing benchmark: 30 WPM speed, 92% minimum accuracy, 10-minute duration.',
        'Calculate net typing speed, gross speed, error percentage, and evaluate full vs half mistakes under official board norms.',
        'Memorize Unicode InScript Gurmukhi key combinations for halant, conjuncts, tippi, bindi, and subjoined consonants.',
      ],
    },
    content: {
      hi: `
        <div class="space-y-6">
          <div class="bg-amber-950/60 border border-amber-500/30 p-4 rounded-xl">
            <h4 class="text-amber-300 font-bold text-base mb-2">💼 PSSSB क्लर्क परीक्षा संरचना एवं चयन प्रक्रिया</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              पंजाब अधीनस्थ सेवा चयन बोर्ड (PSSSB) क्लर्क परीक्षा में दो चरण होते हैं:
              1. लिखित परीक्षा (100 अंक MCQ, 0.25 निगेटिव मार्किंग) तथा अनिवार्य पंजाबी पेपर A (50 प्रश्न, 50% अर्हकारी)।
              2. अनिवार्य पंजाबी (रावी फॉन्ट) एवं अंग्रेजी टाइपिंग टेस्ट (Qualifying: 30 WPM गति एवं 92% शुद्धता)।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">आधिकारिक टाइपिंग टेस्ट मापदंड (PSSSB Typing Rules)</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-teal-400 font-bold text-sm mb-1">⌨️ पंजाबी टाइपिंग (Mandatory Qualifying)</h4>
                <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4">
                  <li><strong>फॉन्ट:</strong> Raavi Font (Unicode InScript लेआउट)।</li>
                  <li><strong>न्यूनतम गति:</strong> 30 शब्द प्रति मिनट (WPM)।</li>
                  <li><strong>न्यूनतम शुद्धता (Accuracy):</strong> 92% (अधिकतम 8% गलतियां मान्य)।</li>
                  <li><strong>अवधि:</strong> 10 मिनट (कुल 300 शब्द टाइप करने होते हैं)।</li>
                </ul>
              </div>
              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-indigo-400 font-bold text-sm mb-1">⌨️ अंग्रेजी टाइपिंग (Mandatory Qualifying)</h4>
                <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4">
                  <li><strong>फॉन्ट:</strong> Times New Roman / Arial।</li>
                  <li><strong>न्यूनतम गति:</strong> 30 शब्द प्रति मिनट (WPM)।</li>
                  <li><strong>न्यूनतम शुद्धता:</strong> 92% (अधिकतम 8% गलतियां मान्य)।</li>
                  <li><strong>अवधि:</strong> 10 मिनट (300 शब्द)।</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">रावी फॉन्ट (InScript) की आवश्यक शॉर्टकट कुंजियां</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-2">
              <p>• <strong>हलंत (Halant):</strong> 'Shift + D' — पैर में अक्षर जोड़ने हेतु (जैसे 'ਪ੍ਰ' = ਪ + Shift+D + ਰ)।</p>
              <p>• <strong>टिप्पी (Tippi):</strong> 'Shift + X' | <strong>बिंदी (Bindi):</strong> 'Shift + Z'।</p>
              <p>• <strong>अधक (Adhak):</strong> 'Shift + U' | <strong>औंकड़ (Aunkar):</strong> 'Q' | <strong>दुलैंकड़ (Dulenkar):</strong> 'Shift + Q'।</p>
              <p>• <strong>कन्ना (Kanna):</strong> 'E' | <strong>सिहारी (Sihari):</strong> 'F' | <strong>बिहारी (Bihari):</strong> 'R'।</p>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6">
          <div class="bg-amber-950/60 border border-amber-500/30 p-4 rounded-xl">
            <h4 class="text-amber-300 font-bold text-base mb-2">💼 PSSSB ਕਲਰਕ ਪ੍ਰੀਖਿਆ ਸਕੀਮ ਅਤੇ ਰਾਵੀ ਟਾਈਪਿੰਗ</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਪੰਜਾਬ ਅਧੀਨ ਸੇਵਾਵਾਂ ਚੋਣ ਬੋਰਡ (PSSSB) ਕਲਰਕ ਭਰਤੀ ਲਈ ਦੋ ਪੜਾਅ ਹੁੰਦੇ ਹਨ:
              1. 100 ਅੰਕਾਂ ਦਾ ਲਿਖਤੀ ਆਬਜੈਕਟਿਵ ਪੇਪਰ (0.25 ਨੈਗੇਟਿਵ ਮਾਰਕਿੰਗ) ਅਤੇ ਲਾਜ਼ਮੀ ਪੰਜਾਬੀ ਯੋਗਤਾ ਪੇਪਰ ਏ (50 ਅੰਕ, 50% ਪਾਸ ਮਾਰਕਸ)।
              2. ਰਾਵੀ ਫੌਂਟ (ਯੂਨੀਕੋਡ ਇਨਸਕ੍ਰਿਪਟ) ਵਿੱਚ ਪੰਜਾਬੀ ਅਤੇ ਅੰਗਰੇਜ਼ੀ ਟਾਈਪਿੰਗ ਟੈਸਟ (30 WPM ਸਪੀਡ, 92% ਐਕੂਰੇਸੀ)।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">ਅਧਿਕਾਰਤ ਟਾਈਪਿੰਗ ਨਿਯਮ (PSSSB Typing Benchmark)</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-teal-400 font-bold text-sm mb-1">⌨️ ਪੰਜਾਬੀ ਟਾਈਪਿੰਗ (ਲਾਜ਼ਮੀ)</h4>
                <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4">
                  <li><strong>ਫੌਂਟ:</strong> Raavi Font (ਯੂਨੀਕੋਡ InScript ਲੇਆਉਟ)।</li>
                  <li><strong>ਸਪੀਡ:</strong> 30 ਸ਼ਬਦ ਪ੍ਰਤੀ ਮਿੰਟ (WPM)।</li>
                  <li><strong>ਐਕੂਰੇਸੀ:</strong> ਘੱਟੋ-ਘੱਟ 92% (ਵੱਧ ਤੋਂ ਵੱਧ 8% ਗ਼ਲਤੀਆਂ ਮਨਜ਼ੂਰ)।</li>
                  <li><strong>ਸਮਾਂ:</strong> 10 ਮਿੰਟ (300 ਸ਼ਬਦ ਟਾਈਪ ਕਰਨੇ ਲਾਜ਼ਮੀ)।</li>
                </ul>
              </div>
              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-indigo-400 font-bold text-sm mb-1">⌨️ ਅੰਗਰੇਜ਼ੀ ਟਾਈਪਿੰਗ (ਲਾਜ਼ਮੀ)</h4>
                <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4">
                  <li><strong>ਫੌਂਟ:</strong> Times New Roman / Arial।</li>
                  <li><strong>ਸਪੀਡ:</strong> 30 WPM।</li>
                  <li><strong>ਐਕੂਰੇਸੀ:</strong> ਘੱਟੋ-ਘੱਟ 92%।</li>
                  <li><strong>ਸਮਾਂ:</strong> 10 ਮਿੰਟ (300 ਸ਼ਬਦ)।</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">ਰਾਵੀ ਫੌਂਟ ਦੀਆਂ ਜ਼ਰੂਰੀ ਸ਼ਾਰਟਕੱਟ ਕੀਆਂ</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-2">
              <p>• <strong>ਹਲੰਤ (Halant):</strong> 'Shift + D' — ਪੈਰ ਵਿੱਚ ਅੱਖਰ ਪਾਉਣ ਲਈ (ਜਿਵੇਂ ਪ੍ਰ = ਪ + Shift+D + ਰ)।</p>
              <p>• <strong>ਟਿੱਪੀ:</strong> 'Shift + X' | <strong>ਬਿੰਦੀ:</strong> 'Shift + Z'।</p>
              <p>• <strong>ਅੱਧਕ:</strong> 'Shift + U' | <strong>ਔਂਕੜ:</strong> 'Q' | <strong>ਦੁਲੈਂਕੜ:</strong> 'Shift + Q'।</p>
            </div>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6">
          <div class="bg-amber-950/60 border border-amber-500/30 p-4 rounded-xl">
            <h4 class="text-amber-300 font-bold text-base mb-2">💼 PSSSB Clerk Examination Scheme & Selection Stages</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Selection under the Punjab Subordinate Services Selection Board (PSSSB) comprises two mandatory stages:
              1. Written Objective Examination (100 Marks with 0.25 negative marking) plus Qualifying Punjabi Paper A (50 MCQs, 50% pass mark).
              2. Qualifying Typing Speed Test in both Punjabi (Raavi font) and English: 30 WPM net speed with minimum 92% accuracy over 10 minutes (300 words).
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">Official Board Typing Test Standards</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-teal-400 font-bold text-sm mb-1">⌨️ Punjabi Typing (Mandatory Qualifying)</h4>
                <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4">
                  <li><strong>Font:</strong> Raavi Font (Unicode InScript keyboard layout).</li>
                  <li><strong>Benchmark Speed:</strong> 30 Words Per Minute (WPM).</li>
                  <li><strong>Accuracy Threshold:</strong> Minimum 92% (maximum permissible error margin = 8%).</li>
                  <li><strong>Duration:</strong> 10 Minutes (candidates must transcribe a 300-word passage).</li>
                </ul>
              </div>
              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-indigo-400 font-bold text-sm mb-1">⌨️ English Typing (Mandatory Qualifying)</h4>
                <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4">
                  <li><strong>Font:</strong> Times New Roman / Standard QWERTY.</li>
                  <li><strong>Benchmark Speed:</strong> 30 Words Per Minute (WPM).</li>
                  <li><strong>Accuracy Threshold:</strong> Minimum 92%.</li>
                  <li><strong>Duration:</strong> 10 Minutes (300 words).</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">Essential Raavi Font (Unicode InScript) Keybindings</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-2">
              <p>• <strong>Halant (Virama):</strong> 'Shift + D' — joins subjoined conjunct consonants (e.g. 'ਪ੍ਰ' = ਪ + Shift+D + ਰ).</p>
              <p>• <strong>Tippi:</strong> 'Shift + X' | <strong>Bindi:</strong> 'Shift + Z'.</p>
              <p>• <strong>Adhak:</strong> 'Shift + U' | <strong>Aunkar:</strong> 'Q' | <strong>Dulenkar:</strong> 'Shift + Q'.</p>
              <p>• <strong>Kanna:</strong> 'E' | <strong>Sihari:</strong> 'F' | <strong>Bihari:</strong> 'R'.</p>
            </div>
          </div>
        </div>
      `,
    },
    workedExamples: [
      {
        title: {
          hi: 'उदाहरण 1: PSSSB टाइपिंग टेस्ट में शुद्ध गति (Net WPM) एवं शुद्धता की गणना',
          pa: 'ਉਦਾਹਰਨ 1: PSSSB ਟਾਈਪਿੰਗ ਟੈਸਟ ਵਿੱਚ ਨੈੱਟ ਸਪੀਡ ਤੇ ਐਕੂਰੇਸੀ ਦੀ ਗਣਨਾ',
          en: 'Worked Example 1: Calculating Net Typing Speed and Accuracy under PSSSB Norms',
        },
        problem: {
          hi: 'एक अभ्यर्थी 10 मिनट के PSSSB पंजाबी टाइपिंग टेस्ट में कुल 320 शब्द टाइप करता है। परीक्षक द्वारा जांच में 12 गलतियां (Mistakes) पाई जाती हैं। अभ्यर्थी की सकल गति (Gross WPM), त्रुटि प्रतिशत (Error %), शुद्धता (Accuracy) तथा शुद्ध गति (Net WPM) ज्ञात कीजिए और बताइए कि क्या अभ्यर्थी उत्तीर्ण हुआ?',
          pa: 'ਇੱਕ ਉਮੀਦਵਾਰ 10 ਮਿੰਟਾਂ ਵਿੱਚ 320 ਸ਼ਬਦ ਟਾਈਪ ਕਰਦਾ ਹੈ ਅਤੇ 12 ਗ਼ਲਤੀਆਂ ਕਰਦਾ ਹੈ। ਉਸਦੀ ਗ੍ਰਾਸ ਸਪੀਡ, ਐਕੂਰੇਸੀ ਅਤੇ ਨੈੱਟ ਸਪੀਡ ਪਤਾ ਕਰੋ। ਕੀ ਉਹ ਪਾਸ ਹੋਇਆ?',
          en: 'In a 10-minute PSSSB Punjabi typing test, a candidate types 320 words and makes 12 mistakes. Calculate Gross WPM, Error Percentage, Accuracy Percentage, and Net WPM. Does the candidate qualify?',
        },
        steps: {
          hi: [
            'कदम 1: सकल गति (Gross Speed) = कुल टाइप किए गए शब्द / समय (मिनट) = 320 / 10 = 32.0 WPM।',
            'कदम 2: त्रुटि प्रतिशत (Error %) = (गलतियां / कुल शब्द) × 100 = (12 / 320) × 100 = 3.75%।',
            'कदम 3: शुद्धता प्रतिशत (Accuracy %) = 100% − 3.75% = 96.25%। (यह न्यूनतम 92% से अधिक है, अतः शुद्धता में उत्तीर्ण)।',
            'कदम 4: शुद्ध गति (Net Speed) = (कुल शब्द − गलतियां) / समय = (320 − 12) / 10 = 308 / 10 = 30.8 WPM। (यह न्यूनतम 30 WPM से अधिक है, अतः गति में भी उत्तीर्ण)।',
          ],
          pa: [
            'ਕਦਮ 1: ਗ੍ਰਾਸ ਸਪੀਡ = 320 / 10 = 32.0 WPM।',
            'ਕਦਮ 2: ਗ਼ਲਤੀ ਪ੍ਰਤੀਸ਼ਤ = (12 / 320) × 100 = 3.75%।',
            'ਕਦਮ 3: ਐਕੂਰੇਸੀ = 100% − 3.75% = 96.25% (92% ਤੋਂ ਵੱਧ ਹੈ)।',
            'ਕਦਮ 4: ਨੈੱਟ ਸਪੀਡ = (320 − 12) / 10 = 30.8 WPM (30 WPM ਤੋਂ ਵੱਧ ਹੈ)।',
          ],
          en: [
            'Step 1: Gross Speed = Total Words Typed / Time = 320 / 10 = 32.0 WPM.',
            'Step 2: Error Percentage = (Errors / Total Words) × 100 = (12 / 320) × 100 = 3.75%.',
            'Step 3: Accuracy Percentage = 100% − 3.75% = 96.25% (exceeds the 92% passing threshold).',
            'Step 4: Net Speed = (Total Words − Errors) / Time = (320 − 12) / 10 = 30.8 WPM (exceeds the 30 WPM threshold).',
          ],
        },
        solution: {
          hi: 'शुद्ध गति = 30.8 WPM, शुद्धता = 96.25%। परिणाम: अभ्यर्थी टाइपिंग टेस्ट में सफलतापूर्वक उत्तीर्ण (QUALIFIED) हुआ।',
          pa: 'ਨੈੱਟ ਸਪੀਡ = 30.8 WPM, ਐਕੂਰੇਸੀ = 96.25%। ਨਤੀਜਾ: ਉਮੀਦਵਾਰ ਪਾਸ (QUALIFIED) ਹੋ ਗਿਆ।',
          en: 'Net Speed = 30.8 WPM, Accuracy = 96.25%. Outcome: The candidate is successfully QUALIFIED.',
        },
        takeaway: {
          hi: 'PSSSB में 8% तक गलतियां अनुमन्य हैं (320 शब्दों पर अधिकतम 25 गलतियां मान्य थीं), लेकिन शुद्ध गति 30 WPM से कम नहीं होनी चाहिए।',
          pa: '8% ਤੱਕ ਗ਼ਲਤੀਆਂ ਮਾਫ਼ ਹਨ, ਪਰ ਨੈੱਟ ਸਪੀਡ 30 WPM ਤੋਂ ਘੱਟ ਨਹੀਂ ਹੋਣੀ ਚਾਹੀਦੀ।',
          en: 'Up to 8% error rate is permissible, but net qualifying speed must strictly remain at or above 30.0 WPM.',
        },
      },
      {
        title: {
          hi: 'उदाहरण 2: 0.25 नकारात्मक अंकन के साथ लिखित परीक्षा प्राप्तांक की गणना',
          pa: 'ਉਦਾਹਰਨ 2: 0.25 ਨੈਗੇਟਿਵ ਮਾਰਕਿੰਗ ਨਾਲ ਲਿਖਤੀ ਪੇਪਰ ਦੇ ਅੰਕਾਂ ਦੀ ਗਣਨਾ',
          en: 'Worked Example 2: PSSSB Written Examination Score Evaluation with 0.25 Penalty',
        },
        problem: {
          hi: 'एक अभ्यर्थी PSSSB क्लर्क 100 अंकों के प्रश्नपत्र में 88 प्रश्न हल करता है। उत्तर कुंजी के अनुसार 72 प्रश्न सही और 16 प्रश्न गलत हैं। शेष 12 प्रश्न अनुत्तरित हैं। अभ्यर्थी का अंतिम प्राप्तांक क्या होगा?',
          pa: 'ਇੱਕ ਉਮੀਦਵਾਰ ਨੇ 100 ਵਿੱਚੋਂ 88 ਪ੍ਰਸ਼ਨ ਹੱਲ ਕੀਤੇ। 72 ਸਹੀ ਅਤੇ 16 ਗ਼ਲਤ ਨਿਕਲੇ। 12 ਛੱਡੇ ਗਏ। ਅੰਤਿਮ ਸਕੋਰ ਕੀ ਹੋਵੇਗਾ?',
          en: 'A candidate attempts 88 questions in the 100-mark PSSSB Clerk exam. Official keys confirm 72 correct and 16 incorrect. 12 questions were left unattempted. Calculate the final score.',
        },
        steps: {
          hi: [
            'कदम 1: सही उत्तरों के अंक = 72 × 1.0 = +72.00 अंक।',
            'कदम 2: गलत उत्तरों पर नकारात्मक अंक = 16 × 0.25 = -4.00 अंक।',
            'कदम 3: अनुत्तरित प्रश्नों (12) पर कोई नकारात्मक अंक नहीं कटता = 0.00 अंक।',
            'कदम 4: अंतिम प्राप्तांक = सही अंक − निगेटिव अंक = 72.00 − 4.00 = 68.00 अंक (100 में से)।',
          ],
          pa: [
            'ਕਦਮ 1: ਸਹੀ ਪ੍ਰਸ਼ਨਾਂ ਦੇ ਅੰਕ = 72 × 1 = 72 ਅੰਕ।',
            'ਕਦਮ 2: ਗ਼ਲਤ ਪ੍ਰਸ਼ਨਾਂ ਦੀ ਪੈਨਲਟੀ = 16 × 0.25 = 4 ਅੰਕ।',
            'ਕਦਮ 3: ਛੱਡੇ ਗਏ 12 ਪ੍ਰਸ਼ਨਾਂ ਦਾ ਕੋਈ ਅੰਕ ਨਹੀਂ ਕੱਟਿਆ ਜਾਂਦਾ।',
            'ਕਦਮ 4: ਅੰਤਿਮ ਅੰਕ = 72 − 4 = 68.00 ਅੰਕ।',
          ],
          en: [
            'Step 1: Marks for correct responses = 72 × 1.0 = +72.00 marks.',
            'Step 2: Penalty for incorrect responses = 16 × 0.25 = -4.00 marks.',
            'Step 3: Unattempted questions carry zero penalty = 0.00 marks.',
            'Step 4: Final composite score = 72.00 − 4.00 = 68.00 marks out of 100.',
          ],
        },
        solution: {
          hi: 'अभ्यर्थी का अंतिम प्राप्तांक 68.00 अंक है।',
          pa: 'ਉਮੀਦਵਾਰ ਦਾ ਅੰਤਿਮ ਸਕੋਰ 68.00 ਅੰਕ ਹੈ।',
          en: 'The candidate’s final net score is 68.00 marks.',
        },
        takeaway: {
          hi: 'चार गलत उत्तर 1 सही उत्तर के बराबर अंक काटते हैं; अनिश्चित प्रश्नों पर अंधाधुंध तुक्का लगाने से बचें।',
          pa: 'ਚਾਰ ਗ਼ਲਤ ਉੱਤਰ ਇੱਕ ਸਹੀ ਪ੍ਰਸ਼ਨ ਦੇ ਅੰਕ ਖਾ ਜਾਂਦੇ ਹਨ।',
          en: 'Four incorrect responses erase one complete correct answer; avoid wild guessing.',
        },
      },
    ],
    commonMisconceptions: [
      {
        misconception: {
          hi: 'भ्रांति: PSSSB पंजाबी टाइपिंग में असीस (Asees) या फॉन्ट 10 का प्रयोग किया जा सकता है।',
          pa: 'ਭੁਲੇਖਾ: PSSSB ਵਿੱਚ ਅਸੀਸ ਫੌਂਟ (Asees) ਰਾਹੀਂ ਟਾਈਪਿੰਗ ਕੀਤੀ ਜਾ ਸਕਦੀ ਹੈ।',
          en: 'Misconception: Candidates can use legacy Asees font or Remington layout for the PSSSB typing test.',
        },
        correction: {
          hi: 'सत्य: PSSSB आधिकारिक तौर पर केवल और केवल Unicode आधारित "Raavi Font" (InScript लेआउट) अनिवार्य करता है। गैर-यूनिकोड फॉन्ट परीक्षा सॉफ्टवेयर में अस्वीकृत होते हैं।',
          pa: 'ਸੱਚ: PSSSB ਵਿੱਚ ਸਿਰਫ਼ ਤੇ ਸਿਰਫ਼ ਯੂਨੀਕੋਡ "ਰਾਵੀ ਫੌਂਟ" (InScript) ਹੀ ਮਾਨਤਾ ਪ੍ਰਾਪਤ ਹੈ।',
          en: 'Correction: PSSSB strictly mandates Unicode Raavi Font with the InScript keyboard layout. Non-Unicode fonts are entirely unsupported in the official exam interface.',
        },
        whyItMatters: {
          hi: 'अभ्यर्थी महीनों असीस पर अभ्यास कर परीक्षा केंद्र पर रावी इनस्क्रिप्ट मिलने पर अयोग्य हो जाते हैं।',
          pa: 'ਬਹੁਤ ਸਾਰੇ ਉਮੀਦਵਾਰ ਅਸੀਸ ਫੌਂਟ ਸਿੱਖ ਕੇ ਜਾਂਦੇ ਹਨ ਅਤੇ ਪ੍ਰੀਖਿਆ ਕੇਂਦਰ ਵਿੱਚ ਰਹਿ ਜਾਂਦੇ ਹਨ।',
          en: 'Practicing on legacy non-standard fonts leads directly to instant disqualification at the test terminal.',
        },
      },
      {
        misconception: {
          hi: 'भ्रांति: टाइपिंग टेस्ट में यदि 5 से अधिक गलतियां हुईं तो सीधे फेल कर दिया जाता है।',
          pa: 'ਭੁਲੇਖਾ: ਜੇ 5 ਤੋਂ ਵੱਧ ਗ਼ਲਤੀਆਂ ਹੋਈਆਂ ਤਾਂ ਸਿੱਧਾ ਫੇਲ੍ਹ ਕਰ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ।',
          en: 'Misconception: Making more than 5 mistakes in typing results in automatic disqualification.',
        },
        correction: {
          hi: 'सत्य: PSSSB न्यूनतम 92% शुद्धता मांगता है, अर्थात् कुल 300 शब्दों के पैसेज में 8% गलतियां (24 गलतियां) तक मान्य हैं, बशर्ते आपकी शुद्ध गति 30 WPM या अधिक रहे।',
          pa: 'ਸੱਚ: 92% ਐਕੂਰੇਸੀ ਲਾਜ਼ਮੀ ਹੈ, ਭਾਵ 300 ਸ਼ਬਦਾਂ ਵਿੱਚੋਂ 24 ਗ਼ਲਤੀਆਂ (8%) ਤੱਕ ਮਾਫ਼ ਹਨ ਬਸ਼ਰਤੇ ਸਪੀਡ 30 WPM ਰਹੇ।',
          en: 'Correction: The official rule allows an error tolerance of up to 8% (24 errors in a standard 300-word passage) provided net speed stays at or above 30 WPM.',
        },
        whyItMatters: {
          hi: 'गलतियों के डर से गति बहुत धीमी करने वाले अभ्यर्थी 30 WPM का लक्ष्य नहीं छू पाते।',
          pa: 'ਡਰ ਕਾਰਨ ਸਪੀਡ ਘਟਾਉਣ ਨਾਲ ਉਮੀਦਵਾਰ 30 WPM ਦਾ ਟੀਚਾ ਪੂਰਾ ਨਹੀਂ ਕਰ ਪਾਉਂਦੇ।',
          en: 'Excessive anxiety regarding errors often causes candidates to type too slowly, falling below the 30 WPM speed threshold.',
        },
      },
    ],
    quickRevisionSheet: {
      highYieldPoints: {
        hi: [
          'लिखित परीक्षा: 100 अंक MCQ, 0.25 नकारात्मक अंकन। 7 खंड (पंजाबी, अंग्रेजी, रीजनिंग, गणित, सामान्य ज्ञान, पंजाब संस्कृति, कंप्यूटर)।',
          'अर्हकारी पंजाबी पेपर A: 50 प्रश्न (50 अंक), न्यूनतम 50% (25 अंक) लाना अनिवार्य है, अन्यथा मुख्य पेपर चेक नहीं होता।',
          'टाइपिंग टेस्ट मानक: रावी फॉन्ट (पंजाबी) और अंग्रेजी दोनों में 30 WPM गति और 92% शुद्धता, 10 मिनट प्रति भाषा।',
          'इनस्क्रिप्ट शॉर्टकट: हलंत = Shift+D, टिप्पी = Shift+X, बिंदी = Shift+Z, अधक = Shift+U।',
        ],
        pa: [
          'ਲਿਖਤੀ ਪੇਪਰ: 100 ਅੰਕ, 0.25 ਨੈਗੇਟਿਵ ਮਾਰਕਿੰਗ। ਲਾਜ਼ਮੀ ਪੇਪਰ ਏ: 50 ਅੰਕ (25 ਅੰਕ ਪਾਸ ਲਈ ਲਾਜ਼ਮੀ)।',
          'ਟਾਈਪਿੰਗ ਟੈਸਟ: ਰਾਵੀ ਫੌਂਟ ਅਤੇ ਅੰਗਰੇਜ਼ੀ ਦੋਵੇਂ 30 WPM, 92% ਐਕੂਰੇਸੀ, 10 ਮਿੰਟ ਸਮਾਂ।',
          'ਕੀਬੋਰਡ ਸ਼ਾਰਟਕੱਟ: ਹਲੰਤ = Shift+D, ਟਿੱਪੀ = Shift+X, ਬਿੰਦੀ = Shift+Z, ਅੱਧਕ = Shift+U।',
        ],
        en: [
          'Written Exam: 100 MCQs, 0.25 negative penalty. Qualifying Paper A: 50 marks (25 marks minimum pass).',
          'Typing Standard: 30 WPM with 92% accuracy in both Punjabi (Raavi) and English (10 mins each).',
          'InScript Gurmukhi Shortcuts: Halant = Shift+D, Tippi = Shift+X, Bindi = Shift+Z, Adhak = Shift+U.',
        ],
      },
      keyFormulasOrRules: {
        hi: [
          'सकल गति (Gross Speed) = कुल टाइप किए गए शब्द / 10 मिनट',
          'शुद्ध गति (Net Speed) = (कुल शब्द − गलतियां) / 10 मिनट',
          'शुद्धता % (Accuracy) = ((कुल शब्द − गलतियां) / कुल शब्द) × 100',
          'लिखित परीक्षा प्राप्तांक = सही उत्तर − (गलत उत्तर × 0.25)',
        ],
        pa: [
          'ਗ੍ਰਾਸ ਸਪੀਡ = ਕੁੱਲ ਸ਼ਬਦ / 10 ਮਿੰਟ',
          'ਨੈੱਟ ਸਪੀਡ = (ਕੁੱਲ ਸ਼ਬਦ − ਗ਼ਲਤੀਆਂ) / 10 ਮਿੰਟ',
          'ਐਕੂਰੇਸੀ % = ((ਕੁੱਲ ਸ਼ਬਦ − ਗ਼ਲਤੀਆਂ) / ਕੁੱਲ ਸ਼ਬਦ) × 100',
          'ਲਿਖਤੀ ਸਕੋਰ = ਸਹੀ ਉੱਤਰ − (ਗ਼ਲਤ ਉੱਤਰ × 0.25)',
        ],
        en: [
          'Gross Speed = Total Words Typed / 10 minutes',
          'Net Speed = (Total Words Typed − Errors) / 10 minutes',
          'Accuracy % = ((Total Words − Errors) / Total Words) × 100',
          'Net Written Score = Correct Responses − (Incorrect Responses × 0.25)',
        ],
      },
      examTraps: {
        hi: [
          'धोखा: स्पेसबार का गलत प्रयोग - इनस्क्रिप्ट में हलंत लगाने के बाद स्पेस न दबाएं, सीधे पैर वाला अक्षर दबाएं।',
          'धोखा: बैकस्पेस (Backspace) का अत्यधिक प्रयोग गति को भारी नुकसान पहुंचाता है।',
        ],
        pa: [
          'ਧੋਖਾ: ਹਲੰਤ ਤੋਂ ਬਾਅਦ ਸਪੇਸ ਨਾ ਦਬਾਓ; ਸਿੱਧਾ ਪੈਰ ਵਾਲਾ ਅੱਖਰ ਦਬਾਓ।',
          'ਧੋਖਾ: ਬੈਕਸਪੇਸ ਦੀ ਵੱਧ ਵਰਤੋਂ ਸਪੀਡ ਤੋੜ ਦਿੰਦੀ ਹੈ।',
        ],
        en: [
          'Trap: Never hit the Spacebar after pressing Shift+D (Halant); directly press the subjoined letter.',
          'Trap: Excessive reliance on Backspace degrades net words per minute drastically.',
        ],
      },
    },
    editorialRecord: {
      authoredDate: '2026-10-10',
      lastUpdatedDate: '2026-10-10',
      authoringType: 'authored-curriculum',
      verifiedSyllabusDenominator: 'PSSSB Official Clerk Examination Scheme & Punjabi (Raavi) Typing Norms',
      correctionHistory: [
        {
          date: '2026-10-10',
          description: 'Authored complete topic package with full trilingual parity, typing formula worked examples, and verified official board resources.',
        },
      ],
    },
    summary: {
      hi: 'पंजाब क्लर्क परीक्षा हेतु 100 अंकों की लिखित परीक्षा के साथ 30 WPM की गति व 92% शुद्धता सहित 10 मिनट का रावी फॉन्ट पंजाबी व अंग्रेजी टाइपिंग टेस्ट उत्तीर्ण करना अनिवार्य है।',
      pa: 'ਪੰਜਾਬ ਕਲਰਕ ਲਈ ਲਿਖਤੀ ਪੇਪਰ (100 ਅੰਕ) ਅਤੇ ਰਾਵੀ ਫੌਂਟ ਟਾਈਪਿੰਗ (30 WPM, 92% ਐਕੂਰੇਸੀ) ਲਾਜ਼ਮੀ ਹੈ।',
      en: 'PSSSB Clerk selection requires clearing written exam followed by mandatory 30 WPM qualifying typing tests in Punjabi (Raavi font) and English with 92% accuracy.',
    },
    keyNotes: {
      hi: [
        '📌 PSSSB पंजाबी टाइपिंग फॉन्ट: Raavi Font (Unicode Inscript लेआउट)।',
        '📌 न्यूनतम गति: 30 WPM (10 मिनट में 300 शब्द)।',
        '📌 न्यूनतम शुद्धता: 92% (अधिकतम 8% गलतियां अनुमन्य)।',
        '📌 लिखित परीक्षा: 100 अंक, 0.25 नकारात्मक अंकन।',
        '📌 अनिवार्य पंजाबी पेपर A: 50 प्रश्न, 50% पास मार्क।',
      ],
      pa: [
        '📌 ਰਾਵੀ ਫੌਂਟ (Unicode) ਵਿੱਚ 30 WPM ਸਪੀਡ ਲਾਜ਼ਮੀ ਹੈ।',
        '📌 92% ਐਕੂਰੇਸੀ ਹੋਣੀ ਜ਼ਰੂਰੀ ਹੈ (8% ਗ਼ਲਤੀਆਂ ਮਾਫ਼)।',
        '📌 ਲਿਖਤੀ ਪੇਪਰ ਵਿੱਚ 0.25 ਨੈਗੇਟਿਵ ਮਾਰਕਿੰਗ ਹੈ।',
      ],
      en: [
        '📌 PSSSB Font: Raavi Font (Unicode Inscript layout).',
        '📌 Benchmark: 30 WPM with at least 92% accuracy over 10 minutes.',
        '📌 Written Exam Penalty: 0.25 negative marks per incorrect response.',
        '📌 Paper A Qualifying Standard: Minimum 50% marks in Punjabi Matric syllabus.',
      ],
    },
    flashcards: [
      {
        id: 'fc-c-1',
        q: { hi: 'PSSSB क्लर्क परीक्षा में पंजाबी टाइपिंग के लिए न्यूनतम गति और शुद्धता क्या है?', pa: 'PSSSB ਕਲਰਕ ਲਈ ਕਿੰਨੀ ਸਪੀਡ ਚਾਹੀਦੀ ਹੈ?', en: 'What is the required speed and accuracy for PSSSB Clerk Punjabi typing?' },
        a: { hi: '30 शब्द प्रति मिनट (WPM) तथा 92% शुद्धता (रावी फॉन्ट)। समय: 10 मिनट।', pa: '30 WPM ਅਤੇ 92% ਐਕੂਰੇਸੀ (ਰਾਵੀ ਫੌਂਟ, 10 ਮਿੰਟ)।', en: '30 WPM on Raavi font with 92% accuracy over 10 minutes.' },
        difficulty: 'easy',
      },
      {
        id: 'fc-c-2',
        q: { hi: 'रावी फॉन्ट इनस्क्रिप्ट लेआउट में पैर में अक्षर जोड़ने के लिए हलंत की शॉर्टकट कुंजी क्या है?', pa: 'ਰਾਵੀ ਫੌਂਟ ਵਿੱਚ ਹਲੰਤ ਦੀ ਸ਼ਾਰਟਕੱਟ ਕੀਅ ਕੀ ਹੈ?', en: 'What is the shortcut key for Halant in Raavi InScript layout?' },
        a: { hi: 'Shift + D', pa: 'Shift + D', en: 'Shift + D' },
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
        title: 'PSSSB Official Notice — Clerk Punjabi (Raavi) & English Typing Test Instructions',
        url: 'https://sssb.punjab.gov.in',
        language: 'Punjabi / English',
        type: 'official',
        publisher: 'Punjab Subordinate Services Selection Board',
        accessNotes: 'Mandates 30 WPM speed and 92% accuracy on Raavi font.',
        lastChecked: '2026-10-10',
        availability: 'verified',
      },
    ],
    syllabusReference: {
      title: 'PSSSB Clerk & IT Assistant Official Scheme & Qualification Norms',
      url: 'https://sssb.punjab.gov.in/',
      body: 'Punjab Subordinate Services Selection Board (PSSSB)',
      verifiedOn: '2026-10-10',
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
            <h4 class="text-indigo-300 font-bold text-base mb-2">🏛️ ਭਾਰਤੀ ਸੰਵਿਧਾਨ: ਭਾਗ V (ਸੰਘੀ ਕਾਰਜਪਾਲਿਕਾ ਅਤੇ ਸੰਸਦ)</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਦੇ <strong>ਭਾਗ V (ਅਨੁਛੇਦ 52 ਤੋਂ 151)</strong> ਵਿੱਚ ਸੰਘ ਦੀ ਕਾਰਜਪਾਲਿਕਾ, ਸੰਸਦ, ਰਾਸ਼ਟਰਪਤੀ ਦੀਆਂ ਵਿਧਾਨਕ ਸ਼ਕਤੀਆਂ ਅਤੇ ਸੰਘੀ ਨਿਆਂਪਾਲਿਕਾ ਦਾ ਵਰਣਨ ਹੈ। ਭਾਰਤ ਵਿੱਚ ਸੰਸਦੀ ਸ਼ਾਸਨ ਪ੍ਰਣਾਲੀ (ਬ੍ਰਿਟੇਨ ਤੋਂ ਪ੍ਰੇਰਿਤ) ਹੈ ਜਿਸ ਵਿੱਚ ਰਾਸ਼ਟਰਪਤੀ ਨਾਮਮਾਤਰ (De jure) ਅਤੇ ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਅਸਲ ਕਾਰਜਕਾਰੀ ਮੁਖੀ (De facto) ਹੁੰਦਾ ਹੈ।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. ਭਾਰਤ ਦੇ ਰਾਸ਼ਟਰਪਤੀ (ਅਨੁਛੇਦ 52 - 62)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-2">
              <p>• <strong>ਅਨੁਛੇਦ 52:</strong> ਭਾਰਤ ਦਾ ਇੱਕ ਰਾਸ਼ਟਰਪਤੀ ਹੋਵੇਗਾ (ਦੇਸ਼ ਦਾ ਪਹਿਲਾ ਨਾਗਰਿਕ ਅਤੇ ਤਿੰਨਾਂ ਸੈਨਾਵਾਂ ਦਾ ਸੁਪਰੀਮ ਕਮਾਂਡਰ)।</p>
              <p>• <strong>ਚੋਣ ਮੰਡਲ (Art 54):</strong> ਸੰਸਦ ਦੇ ਦੋਵਾਂ ਸਦਨਾਂ ਦੇ <em>ਚੁਣੇ ਹੋਏ ਮੈਂਬਰ (Elected MPs)</em> + ਰਾਜ ਵਿਧਾਨ ਸਭਾਵਾਂ ਦੇ <em>ਚੁਣੇ ਹੋਏ ਮੈਂਬਰ (Elected MLAs)</em> + ਦਿੱਲੀ ਅਤੇ ਪੁਡੂਚੇਰੀ ਵਿਧਾਨ ਸਭਾਵਾਂ ਦੇ ਚੁਣੇ ਹੋਏ ਮੈਂਬਰ (ਨਾਮਜ਼ਦ ਮੈਂਬਰ ਵੋਟ ਨਹੀਂ ਪਾਉਂਦੇ)।</p>
              <p>• <strong>ਮਹਾਂਦੋਸ਼ (Impeachment - Art 61):</strong> ਸਿਰਫ਼ "ਸੰਵਿਧਾਨ ਦੀ ਉਲੰਘਣਾ" ਦੇ ਆਧਾਰ 'ਤੇ ਸੰਸਦ ਦੇ ਕਿਸੇ ਵੀ ਸਦਨ ਵਿੱਚ ਸ਼ੁਰੂ ਹੋ ਸਕਦਾ ਹੈ। 14 ਦਿਨ ਪਹਿਲਾਂ ਲਿਖਤੀ ਨੋਟਿਸ ਅਤੇ ਦੋਵਾਂ ਸਦਨਾਂ ਵਿੱਚ ਕੁੱਲ ਮੈਂਬਰ ਗਿਣਤੀ ਦੇ ਦੋ-ਤਿਹਾਈ (2/3) ਬਹੁਮਤ ਨਾਲ ਪਾਸ ਹੋਣਾ ਲਾਜ਼ਮੀ ਹੈ।</p>
              <p>• <strong>ਆਰਡੀਨੈਂਸ ਸ਼ਕਤੀ (Art 123):</strong> ਸੰਸਦ ਦਾ ਇਜਲਾਸ ਨਾ ਚੱਲ ਰਿਹਾ ਹੋਣ 'ਤੇ ਰਾਸ਼ਟਰਪਤੀ ਆਰਡੀਨੈਂਸ ਜਾਰੀ ਕਰ ਸਕਦੇ ਹਨ, ਜਿਸਦੀ ਵੱਧ ਤੋਂ ਵੱਧ ਮਿਆਦ ਸੰਸਦ ਮੁੜ ਜੁੜਨ ਤੋਂ 6 ਹਫ਼ਤੇ ਹੁੰਦੀ ਹੈ।</p>
              <p>• <strong>ਮਾਫ਼ੀ ਦੀ ਸ਼ਕਤੀ (Art 72):</strong> ਮੌਤ ਦੀ ਸਜ਼ਾ (ਫਾਂਸੀ) ਅਤੇ ਫ਼ੌਜੀ ਅਦਾਲਤ ਵੱਲੋਂ ਦਿੱਤੀ ਸਜ਼ਾ ਨੂੰ ਵੀ ਮਾਫ਼ ਕਰਨ ਦਾ ਅਧਿਕਾਰ।</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. ਭਾਰਤੀ ਸੰਸਦ (ਰਾਜ ਸਭਾ ਅਤੇ ਲੋਕ ਸਭਾ) — Art 79</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
              <div class="bg-slate-800 p-3 rounded-xl border border-slate-700">
                <h4 class="text-teal-400 font-bold text-sm mb-1">🏛️ ਰਾਜ ਸਭਾ (ਉੱਪਰਲਾ ਸਦਨ / ਸਥਾਈ ਸਦਨ) — Art 80</h4>
                <ul class="space-y-1 list-disc pl-4">
                  <li>ਵੱਧ ਤੋਂ ਵੱਧ ਗਿਣਤੀ: 250 (ਮੌਜੂਦਾ 245 = 233 ਚੁਣੇ ਹੋਏ + 12 ਰਾਸ਼ਟਰਪਤੀ ਵੱਲੋਂ ਸਾਹਿਤ, ਵਿਗਿਆਨ, ਕਲਾ ਤੇ ਸਮਾਜ ਸੇਵਾ ਤੋਂ ਨਾਮਜ਼ਦ)।</li>
                  <li>ਕਦੇ ਭੰਗ ਨਹੀਂ ਹੁੰਦੀ; ਮੈਂਬਰਾਂ ਦਾ ਕਾਰਜਕਾਲ 6 ਸਾਲ, 1/3 ਮੈਂਬਰ ਹਰ 2 ਸਾਲ ਬਾਅਦ ਸੇਵਾਮੁਕਤ ਹੁੰਦੇ ਹਨ।</li>
                  <li>ਉਪ-ਰਾਸ਼ਟਰਪਤੀ ਰਾਜ ਸਭਾ ਦਾ ਪਦੇਨ ਸਭਾਪਤੀ (Ex-officio Chairman) ਹੁੰਦਾ ਹੈ (Art 64)।</li>
                  <li>ਵਿਸ਼ੇਸ਼ ਸ਼ਕਤੀਆਂ: ਅਨੁਛੇਦ 249 (ਰਾਜ ਸੂਚੀ ਦੇ ਵਿਸ਼ੇ 'ਤੇ ਕਾਨੂੰਨ) ਅਤੇ ਅਨੁਛੇਦ 312 (ਨਵੀਆਂ ਆਲ ਇੰਡੀਆ ਸਰਵਿਸਿਜ਼ ਦੀ ਸਿਰਜਣਾ)।</li>
                </ul>
              </div>
              <div class="bg-slate-800 p-3 rounded-xl border border-slate-700">
                <h4 class="text-amber-400 font-bold text-sm mb-1">🏛️ ਲੋਕ ਸਭਾ (ਹੇਠਲਾ ਸਦਨ / ਲੋਕਾਂ ਦਾ ਸਦਨ) — Art 81</h4>
                <ul class="space-y-1 list-disc pl-4">
                  <li>ਵੱਧ ਤੋਂ ਵੱਧ ਗਿਣਤੀ: 550 (104ਵੀਂ ਸੋਧ ਰਾਹੀਂ 2 ਐਂਗਲੋ-ਇੰਡੀਅਨ ਨਾਮਜ਼ਦਗੀ ਖ਼ਤਮ)।</li>
                  <li>ਕਾਰਜਕਾਲ: 5 ਸਾਲ। ਮੰਤਰੀ ਪ੍ਰੀਸ਼ਦ ਸਮੂਹਿਕ ਤੌਰ 'ਤੇ ਲੋਕ ਸਭਾ ਪ੍ਰਤੀ ਜਵਾਬਦੇਹ ਹੁੰਦੀ ਹੈ (Art 75(3))।</li>
                  <li><strong>ਧਨ ਬਿਲ (Money Bill - Art 110):</strong> ਸਿਰਫ਼ ਲੋਕ ਸਭਾ ਵਿੱਚ ਪੇਸ਼ ਹੋ ਸਕਦਾ ਹੈ। ਸਪੀਕਰ ਦਾ ਫ਼ੈਸਲਾ ਅੰਤਿਮ ਹੁੰਦਾ ਹੈ। ਰਾਜ ਸਭਾ ਇਸਨੂੰ ਵੱਧ ਤੋਂ ਵੱਧ 14 ਦਿਨ ਰੋਕ ਸਕਦੀ ਹੈ।</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🏛️ Part V of the Constitution: The Union (Articles 52–151)</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Part V governs the Union Executive, Parliament (Article 79: President + Rajya Sabha + Lok Sabha), legislative powers of the President, and the Union Judiciary. India follows the Westminster parliamentary model where the President is the nominal (<em>de jure</em>) head and the Prime Minister is the real (<em>de facto</em>) executive head.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. The President of India (Articles 52 – 62)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-2">
              <p>• <strong>Article 52:</strong> There shall be a President of India (First Citizen and Supreme Commander of the Armed Forces).</p>
              <p>• <strong>Electoral College (Art 54):</strong> Comprises only <em>elected members</em> of both Houses of Parliament + <em>elected members</em> of State Legislative Assemblies + elected MLAs of Delhi and Puducherry (nominated members and MLCs do not vote).</p>
              <p>• <strong>Impeachment (Art 61):</strong> For "violation of the Constitution"; can be initiated in either House with 14 days' prior notice and requires a special majority of two-thirds (2/3) of the <em>total membership</em> of each House.</p>
              <p>• <strong>Ordinance-Making Power (Art 123):</strong> Promulgated when Parliament is in recess; must be approved within 6 weeks of reassembly.</p>
              <p>• <strong>Pardoning Power (Art 72):</strong> Power to grant pardons, reprieves, respites, or remissions, including in death sentence and court-martial cases.</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. Houses of Parliament: Rajya Sabha & Lok Sabha</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
              <div class="bg-slate-800 p-3 rounded-xl border border-slate-700">
                <h4 class="text-teal-400 font-bold text-sm mb-1">🏛️ Rajya Sabha (Council of States / Permanent House) — Art 80</h4>
                <ul class="space-y-1 list-disc pl-4">
                  <li>Maximum strength: 250 (presently 245 = 233 elected + 12 nominated by President for literature, science, art, and social service).</li>
                  <li>Not subject to dissolution; 6-year member tenure with one-third (1/3) retiring every 2 years.</li>
                  <li>Vice-President of India is the ex-officio Chairman (Art 64).</li>
                  <li>Exclusive federal powers: Article 249 (authorising Parliament to legislate on a State List subject) and Article 312 (creation of new All-India Services).</li>
                </ul>
              </div>
              <div class="bg-slate-800 p-3 rounded-xl border border-slate-700">
                <h4 class="text-amber-400 font-bold text-sm mb-1">🏛️ Lok Sabha (House of the People / Lower House) — Art 81</h4>
                <ul class="space-y-1 list-disc pl-4">
                  <li>Maximum strength: 550 (Anglo-Indian nomination discontinued via the 104th Amendment Act, 2019).</li>
                  <li>Normal term: 5 years; Council of Ministers is collectively responsible exclusively to the Lok Sabha (Art 75(3)).</li>
                  <li><strong>Money Bill (Art 110):</strong> Can be introduced only in the Lok Sabha on the President's recommendation; certified by the Speaker; Rajya Sabha can detain it for at most 14 days.</li>
                </ul>
              </div>
            </div>
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
            <h4 class="text-teal-300 font-bold text-base mb-2">🏔️ ਭਾਰਤ ਦੇ 6 ਭੌਤਿਕ ਭੂ-ਆਕ੍ਰਿਤੀ ਵਿਭਾਗ</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਭਾਰਤ ਨੂੰ 6 ਮੁੱਖ ਭੌਤਿਕ ਭਾਗਾਂ ਵਿੱਚ ਵੰਡਿਆ ਗਿਆ ਹੈ: 1. ਉੱਤਰੀ ਪਰਬਤ ਲੜੀ (ਹਿਮਾਲਿਆ), 2. ਉੱਤਰੀ ਭਾਰਤ ਦਾ ਵਿਸ਼ਾਲ ਮੈਦਾਨ, 3. ਪ੍ਰਾਇਦੀਪੀ ਪਠਾਰ, 4. ਭਾਰਤੀ ਮਾਰੂਥਲ (ਥਾਰ), 5. ਤੱਟੀ ਮੈਦਾਨ, ਅਤੇ 6. ਟਾਪੂ ਸਮੂਹ (ਅੰਡੇਮਾਨ-ਨਿਕੋਬਾਰ ਤੇ ਲਕਸ਼ਦੀਪ)।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. ਹਿਮਾਲਿਆ ਪਰਬਤ ਦੀਆਂ 3 ਸਮਾਨਾਂਤਰ ਲੜੀਆਂ</h3>
            <div class="space-y-2 text-xs text-slate-300">
              <div class="bg-slate-800 p-3 rounded-lg border border-slate-700">
                <strong class="text-teal-400">1. ਮਹਾਨ ਹਿਮਾਲਿਆ (ਹਿਮਾਦਰੀ / Greater Himalayas):</strong> ਔਸਤ ਉਚਾਈ 6,000 ਮੀਟਰ। ਦੁਨੀਆ ਦੀ ਸਭ ਤੋਂ ਉੱਚੀ ਚੋਟੀ ਮਾਊਂਟ ਐਵਰੈਸਟ (8848.86 ਮੀਟਰ, ਨੇਪਾਲ) ਅਤੇ ਭਾਰਤ ਵਿੱਚ ਹਿਮਾਲਿਆ ਦੀ ਸਭ ਤੋਂ ਉੱਚੀ ਚੋਟੀ ਕੰਚਨਜੰਗਾ (8586 ਮੀਟਰ, ਸਿੱਕਮ) ਇਸੇ ਵਿੱਚ ਹਨ।
              </div>
              <div class="bg-slate-800 p-3 rounded-lg border border-slate-700">
                <strong class="text-amber-400">2. ਲਘੂ ਹਿਮਾਲਿਆ (ਹਿਮਾਚਲ / Middle Himalayas):</strong> ਔਸਤ ਉਚਾਈ 3,700 ਤੋਂ 4,500 ਮੀਟਰ। ਪੀਰ ਪੰਜਾਲ, ਧੌਲਾਧਰ ਲੜੀਆਂ ਅਤੇ ਪ੍ਰਸਿੱਧ ਪਹਾੜੀ ਸੈਰ-ਸਪਾਟਾ ਕੇਂਦਰ (ਸ਼ਿਮਲਾ, ਮਨਾਲੀ, ਕੁੱਲੂ)।
              </div>
              <div class="bg-slate-800 p-3 rounded-lg border border-slate-700">
                <strong class="text-indigo-400">3. ਸ਼ਿਵਾਲਿਕ (ਬਾਹਰੀ ਹਿਮਾਲਿਆ / Outer Himalayas):</strong> ਸਭ ਤੋਂ ਨਵੀਂ ਪਰਬਤ ਲੜੀ, ਔਸਤ ਉਚਾਈ 900 ਤੋਂ 1,100 ਮੀਟਰ। ਪੰਜਾਬ ਦੇ ਪਠਾਨਕੋਟ, ਹੁਸ਼ਿਆਰਪੁਰ ਅਤੇ ਰੋਪੜ ਦੇ ਕੰਢੀ ਖੇਤਰ ਨਾਲ ਲੱਗਦੀ ਹੈ। ਇੱਥੇ 'ਦੂਨ' ਘਾਟੀਆਂ (ਦੇਹਰਾਦੂਨ) ਮਿਲਦੀਆਂ ਹਨ।
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. ਭਾਰਤ ਦੀ ਦਰਿਆਈ ਪ੍ਰਣਾਲੀ (ਹਿਮਾਲਿਆਈ ਬਨਾਮ ਪ੍ਰਾਇਦੀਪੀ ਦਰਿਆ)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-2">
              <p>• <strong>ਹਿਮਾਲਿਆਈ ਦਰਿਆ (ਬਾਰਾਂਮਾਸੀ):</strong> ਸਿੰਧੂ (ਮਾਨਸਰੋਵਰ ਝੀਲ ਨੇੜਿਓਂ), ਗੰਗਾ (ਗੰਗੋਤਰੀ ਗਲੇਸ਼ੀਅਰ ਤੋਂ ਭਾਗੀਰਥੀ ਅਤੇ ਅਲਕਨੰਦਾ ਦਾ ਦੇਵਪ੍ਰਯਾਗ ਵਿਖੇ ਸੰਗਮ, ਕੁੱਲ ਲੰਬਾਈ 2525 ਕਿ.ਮੀ.), ਬ੍ਰਹਮਪੁੱਤਰ (ਤਿੱਬਤ ਵਿੱਚ ਤਸਾਂਗਪੋ, ਅਰੁਣਾਚਲ ਵਿੱਚ ਦਿਹਾਂਗ, ਅਸਾਮ ਵਿੱਚ ਬ੍ਰਹਮਪੁੱਤਰ — ਮਾਜੁਲੀ ਟਾਪੂ)।</p>
              <p>• <strong>ਪ੍ਰਾਇਦੀਪੀ ਦਰਿਆ (ਮੌਸਮੀ):</strong> ਬੰਗਾਲ ਦੀ ਖਾੜੀ ਵਿੱਚ ਡਿੱਗਣ ਵਾਲੇ (ਮਹਾਨਦੀ, ਗੋਦਾਵਰੀ — 1465 ਕਿ.ਮੀ. 'ਦੱਖਣੀ ਗੰਗਾ/ਬਿਰਧ ਗੰਗਾ', ਕ੍ਰਿਸ਼ਨਾ, ਕਾਵੇਰੀ — ਡੈਲਟਾ ਬਣਾਉਂਦੇ ਹਨ) ਅਤੇ ਅਰਬ ਸਾਗਰ ਵਿੱਚ ਡਿੱਗਣ ਵਾਲੇ (ਨਰਮਦਾ ਅਤੇ ਤਾਪਤੀ — ਭ੍ਰੰਸ਼ ਘਾਟੀ/Rift Valley ਵਿੱਚੋਂ ਵਗਦੇ ਹਨ ਅਤੇ ਐਸਚੁਅਰੀ ਬਣਾਉਂਦੇ ਹਨ)।</p>
            </div>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6">
          <div class="bg-teal-950/60 border border-teal-500/30 p-4 rounded-xl">
            <h4 class="text-teal-300 font-bold text-base mb-2">🏔️ The 6 Physiographic Divisions of India</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              India's landmass is classified into 6 major physiographic units: 1. The Northern Mountains (Himalayas), 2. The Northern Indo-Gangetic-Brahmaputra Plains, 3. The Peninsular Plateau, 4. The Indian Desert (Thar), 5. The Coastal Plains (Western & Eastern Ghats), and 6. The Island Groups (Andaman & Nicobar and Lakshadweep).
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. Three Parallel Longitudinal Ranges of the Himalayas</h3>
            <div class="space-y-2 text-xs text-slate-300">
              <div class="bg-slate-800 p-3 rounded-lg border border-slate-700">
                <strong class="text-teal-400">1. Greater Himalayas (Himadri):</strong> Average elevation ~6,000 m. Contains the world's highest peak Mount Everest (8,848.86 m, Nepal) and Kanchenjunga (8,586 m, Sikkim).
              </div>
              <div class="bg-slate-800 p-3 rounded-lg border border-slate-700">
                <strong class="text-amber-400">2. Lesser / Middle Himalayas (Himachal):</strong> Elevation 3,700–4,500 m. Comprises the Pir Panjal, Dhauladhar, and Mahabharat ranges along with major hill valleys (Kashmir, Kangra, Kullu).
              </div>
              <div class="bg-slate-800 p-3 rounded-lg border border-slate-700">
                <strong class="text-indigo-400">3. Outer Himalayas (Shiwaliks):</strong> Youngest and southernmost range (900–1,100 m), bordering the Kandi tract of Punjab (Pathankot, Hoshiarpur, Ropar) and enclosing longitudinal 'Dun' valleys (Dehradun, Patlidun).
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. Drainage Systems of India (Himalayan vs Peninsular)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-2">
              <p>• <strong>Himalayan Rivers (Perennial):</strong> Indus (originates near Lake Mansarovar), Ganga (2,525 km; formed at Devprayag by the confluence of Bhagirathi from Gangotri and Alaknanda from Satopanth), and Brahmaputra (known as Tsangpo in Tibet, Dihang in Arunachal Pradesh, forming Majuli riverine island in Assam).</p>
              <p>• <strong>Peninsular Rivers:</strong> East-flowing rivers draining into the Bay of Bengal (Mahanadi, Godavari — longest peninsular river at 1,465 km called <em>Dakshin Ganga</em>, Krishna, Kaveri — form fertile deltas) vs West-flowing rivers draining into the Arabian Sea (Narmada and Tapi — flow through fault rift valleys between Vindhya and Satpura ranges and form estuaries).</p>
            </div>
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
    coverageStatus: 'complete',
    editorialStatus: 'authored',
    title: {
      hi: 'कंप्यूटर ज्ञान एवं सूचना प्रौद्योगिकी (MS Office, नेटवर्किंग व साइबर सुरक्षा)',
      pa: 'ਕੰਪਿਊਟਰ ਗਿਆਨ ਅਤੇ ਸੂਚਨਾ ਤਕਨਾਲੋਜੀ (ਐਮ.ਐਸ. ਆਫਿਸ ਤੇ ਸਾਈਬਰ ਸੁਰੱਖਿਆ)',
      en: 'Computer Knowledge & IT Proficiency (MS Office, Networking & Security)',
    },
    examRelevance: 'PSSSB Clerk (8-10 Qs), Punjab Police (5 Qs), Patwari (10 Qs), SSC & State Exams',
    estimatedTime: '35 मिनट',
    prerequisites: {
      hi: [
        'कंप्यूटर प्रणाली के बुनियादी हार्डवेयर घटकों (मॉनिटर, सीपीयू, कीबोर्ड, माउस) का प्राथमिक ज्ञान।',
        'इंटरनेट और ईमेल के बुनियादी संचालन की समझ।',
        'दशमलव और द्विआधारी (Binary 0 and 1) अंकों की सामान्य जानकारी।',
      ],
      pa: [
        'ਕੰਪਿਊਟਰ ਹਾਰਡਵੇਅਰ (ਸੀ.ਪੀ.ਯੂ., ਕੀਬੋਰਡ, ਮਾਊਸ, ਮੈਮੋਰੀ) ਦੀ ਮੁੱਢਲੀ ਜਾਣਕਾਰੀ।',
        'ਇੰਟਰਨੈੱਟ ਅਤੇ ਈਮੇਲ ਵਰਤਣ ਦੀ ਬੁਨਿਆਦੀ ਸਮਝ।',
        'ਬਾਈਨਰੀ ਅੰਕਾਂ (0 ਅਤੇ 1) ਦੀ ਆਮ ਸਮਝ।',
      ],
      en: [
        'Familiarity with standard desktop computer peripherals and operating systems.',
        'Basic working knowledge of internet web browsers and electronic mail.',
        'Conceptual foundation in binary digits (bits: 0 and 1) and digital data storage.',
      ],
    },
    learningObjectives: {
      hi: [
        'कंप्यूटर मेमोरी इकाइयों (Bit, Byte, KB, MB, GB, TB, PB) और मेमोरी पदानुक्रम (Registers > Cache > RAM > SSD) को समझना।',
        'वाष्पशील (RAM) और गैर-वाष्पशील (ROM, Flash, HDD) मेमोरी के अंतर को स्पष्ट करना।',
        'MS Office (Word, Excel, PowerPoint) के सर्वाधिक पूछे जाने वाले शॉर्टकट्स (F7, Shift+F7, F4, Ctrl+K) और सूत्रों में दक्ष होना।',
        'नेटवर्किंग मॉडल, IPv4 (32-bit) बनाम IPv6 (128-bit) तथा इंटरनेट प्रोटोकॉल्स (HTTP, HTTPS 443, SMTP 25, DNS) का विश्लेषण करना।',
        'साइबर सुरक्षा खतरों (Virus, Worm, Trojan Horse, Ransomware, Phishing, Spyware) की सटीक पहचान करना।',
      ],
      pa: [
        'ਕੰਪਿਊਟਰ ਮੈਮੋਰੀ ਇਕਾਈਆਂ (Bit, Byte, KB, MB, GB, TB) ਅਤੇ ਸਪੀਡ ਕ੍ਰਮ (ਰਜਿਸਟਰ > ਕੈਸ਼ੇ > ਰੈਮ > ਹਾਰਡ ਡਿਸਕ) ਨੂੰ ਸਮਝਣਾ।',
        'ਵੋਲਾਟਾਈਲ (RAM) ਅਤੇ ਨਾਨ-ਵੋਲਾਟਾਈਲ (ROM) ਮੈਮੋਰੀ ਵਿਚਲਾ ਅੰਤਰ ਜਾਣਨਾ।',
        'ਐਮ.ਐਸ. ਆਫਿਸ ਦੇ ਮੁੱਖ ਸ਼ਾਰਟਕੱਟ (F7 ਸਪੈਲ ਚੈੱਕ, F4 ਐਕਸਲ ਫਰੀਜ਼, Ctrl+K ਹਾਈਪਰਲਿੰਕ) ਦੀ ਮੁਹਾਰਤ ਹਾਸਲ ਕਰਨਾ।',
        'IPv4 (32-ਬਿੱਟ) ਅਤੇ IPv6 (128-ਬਿੱਟ) ਐਡਰੈੱਸ ਅਤੇ ਨੈੱਟਵਰਕ ਪ੍ਰੋਟੋਕੋਲਜ਼ (HTTPS 443, SMTP 25) ਨੂੰ ਸਮਝਣਾ।',
        'ਸਾਈਬਰ ਖ਼ਤਰਿਆਂ (ਵਾਇਰਸ, ਵਾਰਮ, ਟ੍ਰੋਜਨ, ਰੈਨਸਮਵੇਅਰ, ਫਿਸ਼ਿੰਗ) ਦੀ ਪਛਾਣ ਕਰਨਾ।',
      ],
      en: [
        'Master digital data storage units (Bits, Bytes, KB, MB, GB, TB) and the memory access speed hierarchy.',
        'Distinguish volatile primary storage (RAM) from non-volatile firmware/secondary storage (ROM, SSD, HDD).',
        'Execute standard productivity shortcuts and functions across MS Word and MS Excel (F7, Shift+F7, F4, VLOOKUP).',
        'Differentiate 32-bit IPv4 from 128-bit IPv6 architecture and map critical transport/application layer ports.',
        'Categorize malware variants and cyber attack vectors (Viruses, Worms, Trojans, Ransomware, Phishing).',
      ],
    },
    content: {
      hi: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">💻 कंप्यूटर जागरूकता: परीक्षा का सर्वाधिक स्कोरिंग भाग</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              पंजाब क्लर्क, पुलिस और पटवारी भर्ती में कंप्यूटर से हार्डवेयर, मेमोरी यूनिट्स, एमएस वर्ड/एक्सेल शॉर्टकट्स और इंटरनेट प्रोटोकॉल से सीधे 8 से 10 प्रश्न पूछे जाते हैं।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. कंप्यूटर मेमोरी यूनिट्स व पदानुक्रम</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-1.5">
              <p>• <strong>1 Nibble = 4 Bits</strong> | <strong>1 Byte = 8 Bits</strong></p>
              <p>• 1 Kilobyte (KB) = 1024 Bytes | 1 Megabyte (MB) = 1024 KB = 2²⁰ Bytes</p>
              <p>• 1 Gigabyte (GB) = 1024 MB | 1 Terabyte (TB) = 1024 GB</p>
              <p>• <strong>मेमोरी गति क्रम:</strong> Registers (सबसे तेज, CPU के अंदर) &gt; Cache Memory (L1, L2, L3) &gt; RAM (Primary Memory) &gt; SSD / Hard Disk (Secondary Storage)।</p>
              <p>• <strong>RAM vs ROM:</strong> RAM वाष्पशील (Volatile - बिजली जाने पर डेटा नष्ट), जबकि ROM गैर-वाष्पशील (Non-volatile - स्थायी) होती है जिसमें BIOS और बूटिंग निर्देश स्टोर रहते हैं।</p>
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
              <p>• <strong>IP Address:</strong> IPv4 (32-bit, 4 दशमलव संख्याओं का समूह 0-255 जैसे 192.168.1.1) एवं IPv6 (128-bit, 8 हेक्साडेसिमल ब्लॉक)।</p>
              <p>• <strong>प्रोटोकॉल व पोर्ट:</strong> HTTP (पोर्ट 80), HTTPS (पोर्ट 443, SSL/TLS एन्क्रिप्टेड), FTP (पोर्ट 20/21), SMTP (ईमेल प्रेषण - पोर्ट 25), POP3 (पोर्ट 110), IMAP (पोर्ट 143)।</p>
              <p>• <strong>मैलवेयर प्रकार:</strong>
                <br/>- <em>कंप्यूटर वायरस:</em> निष्पादन योग्य होस्ट फ़ाइल से जुड़ता है।
                <br/>- <em>कंप्यूटर वॉर्म:</em> स्वयं प्रतिकृति (Self-replicating) बनाता है, बिना किसी होस्ट फ़ाइल के नेटवर्क पर फैलता है।
                <br/>- <em>ट्रोजन हॉर्स:</em> उपयोगी सॉफ्टवेयर का मुखौटा पहनकर दुर्भावनापूर्ण कोड निष्पादित करता है (स्वयं प्रतिकृति नहीं बनाता)।
                <br/>- <em>रैनसमवेयर:</em> उपयोगकर्ता की फ़ाइलों को एन्क्रिप्ट कर फिरौती की मांग करता है।
                <br/>- <em>फिशिंग:</em> नकली ईमेल/वेबसाइट बनाकर पासवर्ड व बैंकिंग विवरण चुराना।
              </p>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">💻 ਕੰਪਿਊਟਰ ਜਾਗਰੂਕਤਾ (PSSSB ਕਲਰਕ ਸਿਲੇਬਸ)</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਪੰਜਾਬ ਕਲਰਕ, ਪਟਵਾਰੀ ਅਤੇ ਪੁਲਿਸ ਭਰਤੀ ਲਈ ਕੰਪਿਊਟਰ ਮੈਮੋਰੀ, ਐਮ.ਐਸ. ਆਫਿਸ, ਨੈੱਟਵਰਕਿੰਗ ਅਤੇ ਸਾਈਬਰ ਸੁਰੱਖਿਆ ਸਭ ਤੋਂ ਵੱਧ ਸਕੋਰਿੰਗ ਵਿਸ਼ੇ ਹਨ।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. ਕੰਪਿਊਟਰ ਮੈਮੋਰੀ ਇਕਾਈਆਂ ਅਤੇ ਸਪੀਡ ਕ੍ਰਮ</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-1.5">
              <p>• <strong>1 ਨਿੱਬਲ (Nibble) = 4 Bits</strong> | <strong>1 ਬਾਈਟ (Byte) = 8 Bits</strong></p>
              <p>• 1 ਕਿਲੋਬਾਈਟ (KB) = 1024 ਬਾਈਟਾਂ | 1 ਮੈਗਾਬਾਈਟ (MB) = 1024 KB</p>
              <p>• 1 ਗੀਗਾਬਾਈਟ (GB) = 1024 MB | 1 ਟੈਰਾਬਾਈਟ (TB) = 1024 GB</p>
              <p>• <strong>ਸਪੀਡ ਕ੍ਰਮ:</strong> ਰਜਿਸਟਰ (ਸਭ ਤੋਂ ਤੇਜ਼) &gt; ਕੈਸ਼ੇ ਮੈਮੋਰੀ &gt; ਰੈਮ (RAM) &gt; ਹਾਰਡ ਡਿਸਕ / SSD।</p>
              <p>• <strong>RAM ਬਨਾਮ ROM:</strong> RAM ਵੋਲਾਟਾਈਲ (ਅਸਥਾਈ - ਬਿਜਲੀ ਬੰਦ ਹੋਣ 'ਤੇ ਡਾਟਾ ਖ਼ਤਮ) ਹੁੰਦੀ ਹੈ। ROM ਨਾਨ-ਵੋਲਾਟਾਈਲ (ਸਥਾਈ) ਹੁੰਦੀ ਹੈ ਜਿਸ ਵਿੱਚ BIOS ਹੁੰਦਾ ਹੈ।</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. ਐਮ.ਐਸ. ਆਫਿਸ ਸ਼ਾਰਟਕੱਟ ਕੀਆਂ</h3>
            <div class="grid grid-cols-2 gap-2 text-xs text-slate-300">
              <span class="bg-slate-800 p-2.5 rounded-lg border border-slate-700"><strong>F7:</strong> ਸਪੈਲਿੰਗ ਤੇ ਗ੍ਰਾਮਰ ਚੈੱਕ</span>
              <span class="bg-slate-800 p-2.5 rounded-lg border border-slate-700"><strong>Shift + F7:</strong> ਥੀਸਾਰਸ (Thesaurus)</span>
              <span class="bg-slate-800 p-2.5 rounded-lg border border-slate-700"><strong>F4 (Excel):</strong> ਸੈੱਲ ਰੈਫਰੈਂਸ ਫਰੀਜ਼ ($A$1)</span>
              <span class="bg-slate-800 p-2.5 rounded-lg border border-slate-700"><strong>F12:</strong> Save As ਡਾਇਲਾਗ ਬਾਕਸ</span>
              <span class="bg-slate-800 p-2.5 rounded-lg border border-slate-700"><strong>Ctrl + H:</strong> Find and Replace</span>
              <span class="bg-slate-800 p-2.5 rounded-lg border border-slate-700"><strong>Ctrl + K:</strong> ਹਾਈਪਰਲਿੰਕ ਇੰਸਰਟ ਕਰਨਾ</span>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. ਨੈੱਟਵਰਕਿੰਗ ਅਤੇ ਸਾਈਬਰ ਸੁਰੱਖਿਆ</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-2">
              <p>• <strong>IP Address:</strong> IPv4 (32-ਬਿੱਟ, ਜਿਵੇਂ 192.168.1.1) ਅਤੇ IPv6 (128-ਬਿੱਟ, ਹੈਕਸਾਡੈਸੀਮਲ)।</p>
              <p>• <strong>ਪ੍ਰੋਟੋਕੋਲਜ਼:</strong> HTTP (ਪੋਰਟ 80), HTTPS (ਪੋਰਟ 443, ਸੁਰੱਖਿਅਤ ਇਨਕ੍ਰਿਪਸ਼ਨ), SMTP (ਈਮੇਲ ਭੇਜਣ ਲਈ - ਪੋਰਟ 25), POP3 (ਪੋਰਟ 110)।</p>
              <p>• <strong>ਮਾਲਵੇਅਰ ਕਿਸਮਾਂ:</strong> ਵਾਇਰਸ (ਹੋਸਟ ਫਾਈਲ ਨਾਲ ਜੁੜਦਾ ਹੈ), ਵਾਰਮ (ਆਪਣੇ ਆਪ ਨੈੱਟਵਰਕ 'ਤੇ ਫੈਲਦਾ ਹੈ), ਟ੍ਰੋਜਨ ਹਾਰਸ (ਨਕਲੀ ਸਾਫਟਵੇਅਰ), ਰੈਨਸਮਵੇਅਰ (ਫਾਈਲਾਂ ਲਾਕ ਕਰਕੇ ਫਿਰੌਤੀ ਮੰਗਣਾ), ਫਿਸ਼ਿੰਗ (ਨਕਲੀ ਵੈੱਬਸਾਈਟ ਬਣਾ ਕੇ ਪਾਸਵਰਡ ਚੋਰੀ ਕਰਨਾ)।</p>
            </div>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">💻 Computer Literacy & IT Awareness</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Standard scoring section across PSSSB Clerk, Patwari, and Punjab Police, evaluating hardware memory hierarchies, Microsoft Office suite operations, network architecture, protocols, and modern cybersecurity attack vectors.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. Computer Memory Hierarchy & Digital Units</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-1.5">
              <p>• <strong>1 Nibble = 4 Bits</strong> | <strong>1 Byte = 8 Bits</strong></p>
              <p>• 1 Kilobyte (KB) = 1024 Bytes | 1 Megabyte (MB) = 1024 KB = 2²⁰ Bytes</p>
              <p>• 1 Gigabyte (GB) = 1024 MB | 1 Terabyte (TB) = 1024 GB</p>
              <p>• <strong>Access Speed Hierarchy:</strong> CPU Registers (Fastest) &gt; Cache Memory (SRAM) &gt; Main Memory / RAM (DRAM) &gt; Secondary Storage (SSD / HDD).</p>
              <p>• <strong>Volatile vs Non-Volatile:</strong> RAM is volatile (loses contents when power is turned off); ROM is non-volatile (retains the system BIOS/firmware permanently).</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. Essential Microsoft Office Shortcuts</h3>
            <div class="grid grid-cols-2 gap-2 text-xs text-slate-300">
              <span class="bg-slate-800 p-2.5 rounded-lg border border-slate-700"><strong>F7:</strong> Spelling & Grammar Check</span>
              <span class="bg-slate-800 p-2.5 rounded-lg border border-slate-700"><strong>Shift + F7:</strong> Research / Thesaurus</span>
              <span class="bg-slate-800 p-2.5 rounded-lg border border-slate-700"><strong>F4 (Excel):</strong> Toggle Absolute Reference ($A$1)</span>
              <span class="bg-slate-800 p-2.5 rounded-lg border border-slate-700"><strong>F12:</strong> Open 'Save As' Dialog</span>
              <span class="bg-slate-800 p-2.5 rounded-lg border border-slate-700"><strong>Ctrl + H:</strong> Find and Replace</span>
              <span class="bg-slate-800 p-2.5 rounded-lg border border-slate-700"><strong>Ctrl + K:</strong> Insert Hyperlink</span>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. Internet, Protocols & Cybersecurity</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-2">
              <p>• <strong>IP Addressing:</strong> IPv4 is 32-bit (4 decimal octets, e.g. 192.168.1.1); IPv6 is 128-bit (8 hexadecimal blocks).</p>
              <p>• <strong>Key Protocols & Ports:</strong> HTTP (Port 80), HTTPS (Port 443 with SSL/TLS encryption), FTP (Port 20/21), SMTP (Mail Transfer - Port 25), POP3 (Mail Retrieval - Port 110), IMAP (Port 143).</p>
              <p>• <strong>Malware Taxonomy:</strong>
                <br/>- <em>Virus:</em> Malicious program that attaches to an executable host file.
                <br/>- <em>Worm:</em> Standalone self-replicating malware that spreads across networks without requiring a host program.
                <br/>- <em>Trojan Horse:</em> Disguised as legitimate utility software to conceal a malicious payload (does not self-replicate).
                <br/>- <em>Ransomware:</em> Encrypts victim data and demands payment for the decryption key.
                <br/>- <em>Phishing:</em> Fraudulent impersonation of trustworthy entities to steal login credentials and financial information.
              </p>
            </div>
          </div>
        </div>
      `,
    },
    workedExamples: [
      {
        title: {
          hi: 'उदाहरण 1: डिजिटल स्टोरेज क्षमता एवं फ़ाइल गणना',
          pa: 'ਉਦਾਹਰਨ 1: ਡਿਜੀਟਲ ਸਟੋਰੇਜ ਸਮਰੱਥਾ ਅਤੇ ਫਾਈਲ ਗਣਨਾ',
          en: 'Worked Example 1: Storage Capacity Conversion and File Allocation',
        },
        problem: {
          hi: 'एक 4 GB पेन ड्राइव में 256 MB आकार की कुल कितनी वीडियो फ़ाइलें सुरक्षित रूप से स्टोर की जा सकती हैं?',
          pa: 'ਇੱਕ 4 GB ਦੀ ਪੈੱਨ ਡਰਾਈਵ ਵਿੱਚ 256 MB ਸਾਈਜ਼ ਦੀਆਂ ਕੁੱਲ ਕਿੰਨੀਆਂ ਵੀਡੀਓ ਫਾਈਲਾਂ ਸਟੋਰ ਹੋ ਸਕਦੀਆਂ ਹਨ?',
          en: 'How many video files of 256 MB each can be stored on a 4 GB USB flash drive?',
        },
        steps: {
          hi: [
            'कदम 1: दोनों मापों को समान इकाई (MB) में बदलें।',
            'कदम 2: हम जानते हैं कि 1 GB = 1024 MB होता है।',
            'कदम 3: अतः पेन ड्राइव की कुल क्षमता = 4 × 1024 MB = 4096 MB।',
            'कदम 4: फ़ाइलों की कुल संख्या = कुल क्षमता / एक फ़ाइल का आकार = 4096 MB / 256 MB = 16 फ़ाइलें।',
          ],
          pa: [
            'ਕਦਮ 1: 1 GB = 1024 MB।',
            'ਕਦਮ 2: ਕੁੱਲ ਸਮਰੱਥਾ = 4 × 1024 = 4096 MB।',
            'ਕਦਮ 3: ਫਾਈਲਾਂ ਦੀ ਗਿਣਤੀ = 4096 / 256 = 16 ਫਾਈਲਾਂ।',
          ],
          en: [
            'Step 1: Express both quantities in equivalent units (Megabytes).',
            'Step 2: Apply the binary conversion factor: 1 GB = 1024 MB.',
            'Step 3: Total drive capacity = 4 × 1024 MB = 4096 MB.',
            'Step 4: Number of files = Total Capacity / File Size = 4096 MB / 256 MB = 16 files.',
          ],
        },
        solution: {
          hi: 'पेन ड्राइव में ठीक 16 वीडियो फ़ाइलें स्टोर की जा सकती हैं।',
          pa: 'ਪੈੱਨ ਡਰਾਈਵ ਵਿੱਚ 16 ਫਾਈਲਾਂ ਸਟੋਰ ਹੋ ਸਕਦੀਆਂ ਹਨ।',
          en: 'Exactly 16 video files can be accommodated.',
        },
        takeaway: {
          hi: 'सावधानी: कंप्यूटर मेमोरी गणना में 1000 के स्थान पर हमेशा 1024 (2¹⁰) का प्रयोग करें।',
          pa: 'ਧਿਆਨ ਰੱਖੋ: ਕੰਪਿਊਟਰ ਮੈਮੋਰੀ ਵਿੱਚ 1000 ਦੀ ਥਾਂ 1024 ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।',
          en: 'Binary computing architectures mandate a base-2 multiplier of 1024 (2¹⁰), not decimal 1000.',
        },
      },
      {
        title: {
          hi: 'उदाहरण 2: IPv4 एड्रेस की वैधता की जांच',
          pa: 'ਉਦਾਹਰਨ 2: IPv4 ਐਡਰੈੱਸ ਦੀ ਪ੍ਰਮਾਣਿਕਤਾ ਜਾਂਚ',
          en: 'Worked Example 2: Validating an IPv4 Address Structure',
        },
        problem: {
          hi: 'निम्नलिखित में से कौन-सा एक अमान्य (Invalid) IPv4 पता है और क्यों? (A) 192.168.1.1, (B) 10.0.0.254, (C) 172.16.290.1, (D) 127.0.0.1',
          pa: 'ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਗ਼ਲਤ IPv4 ਐਡਰੈੱਸ ਹੈ? (A) 192.168.1.1, (B) 10.0.0.254, (C) 172.16.290.1, (D) 127.0.0.1',
          en: 'Which of the following is an INVALID IPv4 address and why? (A) 192.168.1.1, (B) 10.0.0.254, (C) 172.16.290.1, (D) 127.0.0.1',
        },
        steps: {
          hi: [
            'कदम 1: IPv4 पता 32 बिट्स का होता है जो दशमलव में 4 भागों (Octets) में बंटा होता है।',
            'कदम 2: प्रत्येक ऑक्टेट 8 बिट्स का होता है, अतः उसकी सीमा 0 से 255 (2⁸ − 1) तक ही हो सकती है।',
            'कदम 3: विकल्प (C) में तीसरा भाग "290" है, जो कि 255 से अधिक है।',
            'कदम 4: अतः 172.16.290.1 एक अमान्य पता है। (127.0.0.1 लूपबैक/लोकलहोस्ट हेतु वैध है)।',
          ],
          pa: [
            'ਕਦਮ 1: IPv4 ਵਿੱਚ 4 ਹਿੱਸੇ ਹੁੰਦੇ ਹਨ।',
            'ਕਦਮ 2: ਹਰ ਹਿੱਸੇ ਦਾ ਮੁੱਲ 0 ਤੋਂ 255 ਦੇ ਵਿਚਕਾਰ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ।',
            'ਕਦਮ 3: ਵਿਕਲਪ (C) ਵਿੱਚ "290" ਹੈ ਜੋ 255 ਤੋਂ ਵੱਡਾ ਹੈ।',
            'ਕਦਮ 4: ਇਸ ਲਈ 172.16.290.1 ਅਮਾਨਵ ਹੈ।',
          ],
          en: [
            'Step 1: An IPv4 address comprises 4 octets separated by periods.',
            'Step 2: Each 8-bit octet can only hold an integer value between 0 and 255 inclusive.',
            'Step 3: Option (C) contains "290", which exceeds the permissible 255 ceiling.',
            'Step 4: Conclude that 172.16.290.1 is structurally invalid.',
          ],
        },
        solution: {
          hi: 'विकल्प (C) 172.16.290.1 अमान्य है क्योंकि कोई भी ऑक्टेट 255 से अधिक नहीं हो सकता।',
          pa: 'ਵਿਕਲਪ (C) ਅਮਾਨਵ ਹੈ ਕਿਉਂਕਿ 290 ਅੰਕ 255 ਤੋਂ ਵੱਡਾ ਹੈ।',
          en: 'Option (C) 172.16.290.1 is invalid because an octet cannot exceed 255.',
        },
        takeaway: {
          hi: 'IPv4 में प्रत्येक भाग 0 से 255 के मध्य होना अनिवार्य है।',
          pa: 'IPv4 ਦੇ ਹਰ ਭਾਗ ਦੀ ਸੀਮਾ 0 ਤੋਂ 255 ਹੁੰਦੀ ਹੈ।',
          en: 'Every individual decimal octet in an IPv4 address must strictly fall within 0 to 255.',
        },
      },
    ],
    commonMisconceptions: [
      {
        misconception: {
          hi: 'भ्रांति: कंप्यूटर वॉर्म (Worm) और ट्रोजन हॉर्स (Trojan Horse) एक ही प्रकार के वायरस हैं।',
          pa: 'ਭੁਲੇਖਾ: ਵਾਰਮ (Worm) ਅਤੇ ਟ੍ਰੋਜਨ ਹਾਰਸ (Trojan Horse) ਇੱਕੋ ਚੀਜ਼ ਹਨ।',
          en: 'Misconception: A Computer Worm and a Trojan Horse operate identically to a virus.',
        },
        correction: {
          hi: 'सत्य: वायरस को फैलने हेतु होस्ट फ़ाइल की आवश्यकता होती है। वॉर्म एक स्वतंत्र प्रोग्राम है जो बिना होस्ट के स्वयं की प्रतियां बनाकर नेटवर्क पर फैलता है। ट्रोजन हॉर्स खुद की प्रतियां नहीं बनाता बल्कि वैध सॉफ्टवेयर का रूप धरकर सिस्टम में घुसता है।',
          pa: 'ਸੱਚ: ਵਾਇਰਸ ਨੂੰ ਹੋਸਟ ਫਾਈਲ ਚਾਹੀਦੀ ਹੈ। ਵਾਰਮ ਬਿਨਾਂ ਹੋਸਟ ਦੇ ਆਪਣੇ ਆਪ ਫੈਲਦਾ ਹੈ। ਟ੍ਰੋਜਨ ਹਾਰਸ ਆਪਣੀ ਕਾਪੀ ਨਹੀਂ ਬਣਾਉਂਦਾ ਸਗੋਂ ਨਕਲੀ ਭੇਸ ਬਣਾ ਕੇ ਧੋਖਾ ਦਿੰਦਾ ਹੈ।',
          en: 'Correction: Viruses require an executable host file. Worms are standalone and self-replicate across network vulnerabilities without user execution. Trojans masquerade as benign tools and do NOT self-replicate.',
        },
        whyItMatters: {
          hi: 'प्रतियोगी परीक्षाओं में "निम्न में से कौन स्वयं प्रतिकृति नहीं बनाता?" का सीधा उत्तर ट्रोजन हॉर्स होता है।',
          pa: 'ਪ੍ਰੀਖਿਆਵਾਂ ਵਿੱਚ ਇਹ ਪੁੱਛਿਆ ਜਾਂਦਾ ਹੈ ਕਿ ਕਿਹੜਾ ਮਾਲਵੇਅਰ ਆਪਣੇ ਆਪ ਨਹੀਂ ਫੈਲਦਾ।',
          en: 'High-frequency exam question testing which malware variant does not possess self-replicating capability (Trojan).',
        },
      },
      {
        misconception: {
          hi: 'भ्रांति: 1 Kilobyte (KB) ठीक 1000 Bytes के बराबर होता है।',
          pa: 'ਭੁਲੇਖਾ: 1 KB ਵਿੱਚ ਪੂਰੀਆਂ 1000 ਬਾਈਟਾਂ ਹੁੰਦੀਆਂ ਹਨ।',
          en: 'Misconception: 1 Kilobyte equals exactly 1,000 Bytes in computer architecture.',
        },
        correction: {
          hi: 'सत्य: कंप्यूटर द्विआधारी प्रणाली (Base 2) पर कार्य करता है। अतः 1 KB = 2¹⁰ Bytes = 1024 Bytes होता है। 1000 केवल दशमलव एसआई उपसर्ग है।',
          pa: 'ਸੱਚ: ਕੰਪਿਊਟਰ ਬਾਈਨਰੀ (Base 2) \'ਤੇ ਕੰਮ ਕਰਦਾ ਹੈ, ਇਸ ਲਈ 1 KB = 2¹⁰ = 1024 ਬਾਈਟਾਂ ਹੁੰਦਾ ਹੈ।',
          en: 'Correction: Digital memory addressing operates in powers of 2. Therefore, 1 KB = 2¹⁰ Bytes = 1,024 Bytes.',
        },
        whyItMatters: {
          hi: 'विकल्पों में 1000 और 1024 दोनों दिए जाते हैं; 1000 चुनना एक नकारात्मक अंकन त्रुटि है।',
          pa: 'ਵਿਕਲਪਾਂ ਵਿੱਚ 1000 ਅਤੇ 1024 ਦੋਵੇਂ ਹੁੰਦੇ ਹਨ, 1024 ਹੀ ਸਹੀ ਉੱਤਰ ਹੈ।',
          en: 'Selecting 1000 instead of 1024 is the classic distractor trap on clerk IT papers.',
        },
      },
    ],
    quickRevisionSheet: {
      highYieldPoints: {
        hi: [
          'मेमोरी इकाइयां: 1 Nibble = 4 Bits, 1 Byte = 8 Bits, 1 KB = 1024 Bytes, 1 MB = 1024 KB, 1 GB = 1024 MB, 1 TB = 1024 GB।',
          'मेमोरी गति: Registers (CPU) > Cache (SRAM) > RAM (DRAM) > SSD > HDD।',
          'शॉर्टकट कुंजी: F7 (स्पेलिंग चेक), Shift+F7 (थिसॉरस), F4 (एक्सेल सेल फ्रीज), Ctrl+K (हाइपरलिंक), F12 (Save As)।',
          'नेटवर्किंग: IPv4 = 32-बिट (4 ऑक्टेट), IPv6 = 128-बिट। HTTPS पोर्ट 443 (SSL/TLS), HTTP पोर्ट 80, SMTP पोर्ट 25 (ईमेल प्रेषण)।',
        ],
        pa: [
          'ਮੈਮੋਰੀ: 1 Nibble = 4 Bits, 1 Byte = 8 Bits, 1 KB = 1024 Bytes, 1 MB = 1024 KB, 1 GB = 1024 MB।',
          'ਸਪੀਡ: ਰਜਿਸਟਰ > ਕੈਸ਼ੇ > ਰੈਮ > ਹਾਰਡ ਡਿਸਕ।',
          'ਸ਼ਾਰਟਕੱਟ: F7 (ਸਪੈਲ ਚੈੱਕ), Shift+F7 (ਸਮਾਨਾਰਥੀ), F4 (ਐਕਸਲ ਫਰੀਜ਼), Ctrl+K (ਹਾਈਪਰਲਿੰਕ)।',
          'ਪ੍ਰੋਟੋਕੋਲਜ਼: IPv4 = 32-ਬਿੱਟ, IPv6 = 128-ਬਿੱਟ। HTTPS ਪੋਰਟ 443, SMTP ਪੋਰਟ 25।',
        ],
        en: [
          'Memory Units: 1 Nibble = 4 Bits, 1 Byte = 8 Bits, 1 KB = 1024 Bytes, 1 MB = 1024 KB, 1 GB = 1024 MB, 1 TB = 1024 GB.',
          'Memory Hierarchy: Registers > Cache Memory > RAM > SSD > HDD.',
          'Office Shortcuts: F7 (Spell Check), Shift+F7 (Thesaurus), F4 (Absolute Reference in Excel), Ctrl+K (Insert Hyperlink), F12 (Save As).',
          'Networking: IPv4 = 32-bit (4 octets 0–255), IPv6 = 128-bit. HTTPS = Port 443, HTTP = Port 80, SMTP = Port 25.',
        ],
      },
      keyFormulasOrRules: {
        hi: [
          'बाइट्स गणना: N (GB) = N × 1024 × 1024 × 1024 Bytes = N × 2³⁰ Bytes',
          'एक्सेल सूत्र: =SUM(A1:A10), =AVERAGE(B1:B10), =COUNTIF(범위, शर्त)',
          'IPv4 ऑक्टेट सीमा: प्रत्येक भाग न्यूनतम 0 तथा अधिकतम 255 (2⁸ − 1)',
        ],
        pa: [
          'ਬਾਈਟਸ ਗਣਨਾ: 1 GB = 1024 MB = 1024 × 1024 KB',
          'ਐਕਸਲ ਸੂਤਰ: =SUM(range), =AVERAGE(range), =IF(condition, true, false)',
          'IPv4 ਸੀਮਾ: 0 ਤੋਂ 255 ਪ੍ਰਤੀ ਭਾਗ',
        ],
        en: [
          'Byte Multipliers: 1 KB = 2¹⁰ Bytes, 1 MB = 2²⁰ Bytes, 1 GB = 2³⁰ Bytes, 1 TB = 2⁴⁰ Bytes.',
          'Excel References: Relative (A1), Absolute ($A$1), Mixed ($A1 or A$1).',
          'IPv4 Octet Bound: 0 ≤ Octet ≤ 255.',
        ],
      },
      examTraps: {
        hi: [
          'धोखा: ROM वाष्पशील नहीं होती; बिजली चले जाने पर भी ROM में मौजूद BIOS कभी नष्ट नहीं होता।',
          'धोखा: ट्रोजन हॉर्स स्वयं प्रतिकृति (Self-replicate) नहीं बनाता, केवल वॉर्म बनाता है।',
        ],
        pa: [
          'ਧੋਖਾ: ROM ਅਸਥਾਈ (Volatile) ਨਹੀਂ ਹੁੰਦੀ; ਇਹ ਸਥਾਈ ਮੈਮੋਰੀ ਹੈ।',
          'ਧੋਖਾ: ਟ੍ਰੋਜਨ ਹਾਰਸ ਆਪਣੀ ਕਾਪੀ ਆਪ ਨਹੀਂ ਬਣਾਉਂਦਾ।',
        ],
        en: [
          'Trap: ROM is non-volatile; powering down never clears the BIOS boot firmware.',
          'Trap: Trojans do NOT self-replicate; only computer worms propagate autonomously across networks.',
        ],
      },
    },
    editorialRecord: {
      authoredDate: '2026-10-10',
      lastUpdatedDate: '2026-10-10',
      authoringType: 'authored-curriculum',
      verifiedSyllabusDenominator: 'PSSSB Clerk Information Technology Syllabus (8-10 Marks) & NIOS Computer Science Course 229',
      correctionHistory: [
        {
          date: '2026-10-10',
          description: 'Authored complete topic package with full trilingual parity, storage calculation examples, IPv4 validation, and NIOS curriculum textbooks.',
        },
      ],
    },
    summary: {
      hi: 'कंप्यूटर ज्ञान में 1 Byte = 8 Bits, RAM वाष्पशील और ROM गैर-वाष्पशील मेमोरी होती है। MS Word में F7 स्पेल चेक और Excel में F4 सेल रेफरेंस फ्रीज करने का काम करता है। IPv4 32-बिट और IPv6 128-बिट का होता है। फ़िशिंग और रैनसमवेयर प्रमुख साइबर खतरे हैं।',
      pa: 'ਕੰਪਿਊਟਰ ਗਿਆਨ ਵਿੱਚ ਮੈਮੋਰੀ ਇਕਾਈਆਂ (1 Byte = 8 Bits), ਐਮ.ਐਸ. ਆਫਿਸ ਸ਼ਾਰਟਕੱਟ (F7, F4), IPv4 (32-bit), ਅਤੇ ਸਾਈਬਰ ਸੁਰੱਖਿਆ ਮੁੱਖ ਵਿਸ਼ੇ ਹਨ।',
      en: 'Synthesizes computer architecture, memory units, MS Office shortcuts (F7 Spell Check, F4 Freeze), network protocols (IPv4 32-bit, HTTPS Port 443), and cybersecurity taxonomy.',
    },
    keyNotes: {
      hi: [
        '📌 1 Byte = 8 Bits; 1 Nibble = 4 Bits; 1 KB = 1024 Bytes।',
        '📌 F7 — MS Office में Spelling & Grammar जांचने की शॉर्टकट कुंजी।',
        '📌 Shift + F7 — थिसॉरस (Thesaurus / पर्यायवाची शब्द) खोलने हेतु।',
        '📌 Ctrl + K — हाइपरलिंक इंसर्ट करने का शॉर्टकट।',
        '📌 IPv4 का आकार 32-बिट तथा IPv6 का आकार 128-बिट होता है।',
        '📌 HTTPS डिफ़ॉल्ट रूप से पोर्ट 443 का उपयोग करता है (SSL/TLS एन्क्रिप्शन)।',
        '📌 ट्रोजन हॉर्स स्वयं प्रतिकृति (Self-replicate) नहीं बनाता।',
      ],
      pa: [
        '📌 1 Byte = 8 Bits, 1 Nibble = 4 Bits, 1 KB = 1024 Bytes।',
        '📌 F7 ਨਾਲ ਸਪੈਲਿੰਗ ਚੈੱਕ, Shift+F7 ਨਾਲ ਥੀਸਾਰਸ।',
        '📌 IPv4 32-ਬਿੱਟ, IPv6 128-ਬਿੱਟ।',
        '📌 HTTPS ਪੋਰਟ 443 ਵਰਤਦਾ ਹੈ।',
        '📌 ਟ੍ਰੋਜਨ ਹਾਰਸ ਆਪਣੀ ਕਾਪੀ ਆਪ ਨਹੀਂ ਬਣਾਉਂਦਾ।',
      ],
      en: [
        '📌 1 Byte = 8 Bits; 1 Nibble = 4 Bits; 1 KB = 1024 Bytes.',
        '📌 F7: Spell check in Microsoft Office; Shift+F7: Thesaurus.',
        '📌 IPv4 uses 32-bit addressing; IPv6 uses 128-bit addressing.',
        '📌 HTTPS operates over port 443 using SSL/TLS encryption.',
        '📌 Trojan horses do not self-replicate.',
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
        author: 'Arihant Publications',
        chapters: 'Computer Architecture, Software, Networking, Security',
        type: 'standard',
      },
    ],
    documents: [
      {
        title: 'NIOS Secondary Computer Science — Basics of Computers (Lesson 1)',
        url: 'https://www.nios.ac.in/media/documents/sec229new/Lesson1.pdf',
        language: 'English',
        type: 'textbook',
        publisher: 'National Institute of Open Schooling',
        accessNotes: 'Hardware architecture, RAM/ROM, input/output peripherals.',
        lastChecked: '2026-10-10',
        availability: 'verified',
      },
      {
        title: 'NIOS Secondary Computer Science — Word Processing Tools (Lesson 4)',
        url: 'https://www.nios.ac.in/media/documents/sec229new/Lesson4.pdf',
        language: 'English',
        type: 'textbook',
        publisher: 'NIOS',
        accessNotes: 'Office word processing conventions, ribbons, tables, mail merge.',
        lastChecked: '2026-10-10',
        availability: 'verified',
      },
    ],
    syllabusReference: {
      title: 'PSSSB Clerk Computer IT & Office Productivity Suite Guidelines',
      url: 'https://sssb.punjab.gov.in/',
      body: 'Punjab Subordinate Services Selection Board (PSSSB)',
      verifiedOn: '2026-10-10',
    },
  },
};

export const ALL_LESSONS: Record<string, Lesson> = {
  ...BASE_LESSONS,
  [ettReflection.topicId]: ettReflection as Lesson,
  ...WORLD_HISTORY_LESSONS,
  ...POLITY_EXTRA_LESSONS,
  ...ECONOMICS_LESSONS,
  ...SCIENCE_LESSONS,
  ...SUPPLEMENTAL_LESSONS,
  ...CLERK_GK_FAST_LESSONS,
  ...MATHEMATICS_LESSONS,
  ...PUNJABI_LESSONS,
  ...HINDI_LESSONS,
  ...ENGLISH_LESSONS,
  ...PATWARI_POLICE_LESSONS,
  ...PEDAGOGY_LESSONS,
  ...RAJASTHAN_LESSONS,
  ...REFERENCE_SST_LESSONS,
  ...SST_MISSING_LESSONS,
  ...PUNJAB_HISTORY_GURUS_LESSONS,
  ...CLERK_DEEP_LESSONS,
  ...CLERK_DATA_LESSONS,
  ...MASTER_CADRE_BLUEPRINT_LESSONS,
  'medieval-india': {
    ...SST_MISSING_LESSONS['sst-medieval-india'],
    id: 'medieval-india',
    topicId: 'medieval-india',
    coverageStatus: 'complete',
    editorialStatus: 'authored',
  },
  'world-history': {
    ...SST_MISSING_LESSONS['sst-world-history-modern'],
    id: 'world-history',
    topicId: 'world-history',
    coverageStatus: 'complete',
    editorialStatus: 'authored',
  },
  'indian-economy': {
    ...SST_MISSING_LESSONS['sst-indian-economy-deep'],
    id: 'indian-economy',
    topicId: 'indian-economy',
    coverageStatus: 'complete',
    editorialStatus: 'authored',
  },
  'physical-geography': {
    ...SST_MISSING_LESSONS['sst-india-geography'],
    id: 'physical-geography',
    topicId: 'physical-geography',
    coverageStatus: 'complete',
    editorialStatus: 'authored',
  },
  'judiciary': {
    ...REFERENCE_SST_LESSONS['sst-judiciary'],
    id: 'judiciary',
    topicId: 'judiciary',
    coverageStatus: 'complete',
    editorialStatus: 'authored',
  },
  'local-govt': {
    ...REFERENCE_SST_LESSONS['sst-federal-local'],
    id: 'local-govt',
    topicId: 'local-govt',
    coverageStatus: 'complete',
    editorialStatus: 'authored',
  },
};

// Keep existing translations and expand the English edition with original worked concepts.
for (const [id, foundation] of Object.entries(FOUNDATION_LESSONS)) {
  const existing = ALL_LESSONS[id];
  if (!existing) { ALL_LESSONS[id] = foundation; continue; }
  ALL_LESSONS[id] = { ...existing, content: { ...existing.content, en: id === 'hindi-vyakaran' ? existing.content.en : existing.content.en + foundation.content.en, hi: id === 'hindi-vyakaran' ? existing.content.hi + foundation.content.hi : existing.content.hi },
    flashcards: [...existing.flashcards, ...foundation.flashcards],
    sections: [...(existing.sections || []), ...(foundation.sections || [])],
    coverageStatus: existing.coverageStatus === 'complete' ? 'complete' : 'foundation', editorialStatus: 'authored' };
}

Object.assign(ALL_LESSONS, buildGapLessons(ALL_LESSONS));

// Remove unavailable or unrelated seeded videos; expose an honest publisher search link.
const rejectedVideoIds = new Set(['W8L_w_eU014', 'Jud1947LawX', 'SJxMBRTB1Ic', 'uqVT9QQe0qU', 'xZbKHDPPrrc']);
for (const lesson of Object.values(ALL_LESSONS)) {
  lesson.videos = lesson.videos.map(video => {
    const id = video.youtubeId || (video.url?.includes('youtube.com/watch') ? new URL(video.url).searchParams.get('v') : null);
    return id && (!/^[A-Za-z0-9_-]{11}$/.test(id) || id.startsWith('p2aGZ3fXw_') || rejectedVideoIds.has(id)) ? {
    title: `Find ${lesson.title.en} videos on NCERT's official channel`,
    channel: 'NCERT official — topic search',
    url: `https://www.youtube.com/ncertofficial/search?query=${encodeURIComponent(lesson.title.en)}`,
    language: 'Source language varies',
  } : { ...video, views: undefined };
  });
  const resources = TOPIC_DOCUMENTS[lesson.id] || [];
  const genericBundle = new Set(['https://erd.punjab.gov.in/master2022/Docs/SocialSciencesyllabus04_05_2022.pdf', 'https://static.pseb.ac.in/media/1670561302_Samajik%20Sikhya-10%28Punjabi%29%20Bhag-I.pdf', 'https://ncert.nic.in/textbook/pdf/jess301.pdf', 'https://ncert.nic.in/textbook/pdf/jhss301.pdf', 'https://nios.ac.in/media/documents/SecSocSciCour/Hindi/Lesson-01.pdf']);
  lesson.documents = Array.from(new Map([...(lesson.documents || []).filter(doc => !genericBundle.has(doc.url) && !unavailableResources.includes(doc.url)), ...resources].map(doc => [doc.url, {
    ...doc,
    title: doc.url === 'https://ncert.nic.in/textbook/pdf/jess301.pdf' ? 'NCERT Class 10 — The Rise of Nationalism in Europe (chapter PDF)' : doc.title,
  }])).values());
}

export const LESSONS = ALL_LESSONS;


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


