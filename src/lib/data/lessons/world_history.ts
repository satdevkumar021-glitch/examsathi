import { Lesson } from './types';

export const WORLD_HISTORY_LESSONS: Record<string, Lesson> = {
  'world-history': {
    id: 'world-history',
    topicId: 'world-history',
    subjectId: 'social-science',
    category: 'history',
    title: {
      hi: 'विश्व इतिहास: पुनर्जागरण, क्रांतियां एवं विश्व युद्ध',
      pa: 'ਵਿਸ਼ਵ ਇਤਿਹਾਸ: ਪੁਨਰ-ਜਾਗਰਣ, ਕ੍ਰਾਂਤੀਆਂ ਤੇ ਵਿਸ਼ਵ ਯੁੱਧ',
      en: 'World History: Renaissance, Revolutions & World Wars',
    },
    examRelevance: 'Punjab Master Cadre SST (6-8 Qs), Lecturer History (15-20 Qs), CTET / UGC NET',
    estimatedTime: '40 मिनट',
    content: {
      hi: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 परीक्षा हेतु विशेष महत्व</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              विश्व इतिहास पंजाब मास्टर कैडर (Social Studies) और स्कूल लेक्चरर (इतिहास) के पाठ्यक्रम का अनिवार्य भाग है। इसमें फ्रांसीसी क्रांति, औद्योगिक क्रांति, प्रथम व द्वितीय विश्व युद्ध और संयुक्त राष्ट्र संघ (UN) से सीधे तथ्यात्मक प्रश्न पूछे जाते हैं।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. यूरोपीय पुनर्जागरण एवं धर्म सुधार (Renaissance & Reformation)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-3 text-sm">
              <p>• <strong>प्रारंभ:</strong> 14वीं शताब्दी में इटली के <em>फ्लोरेंस (Florence)</em> नगर से।</p>
              <p>• <strong>प्रमुख विचारक व कृतियां:</strong></p>
              <ul class="list-disc pl-5 space-y-1 text-slate-300">
                <li><strong>दांते (Dante):</strong> <em>'डिवाइन कॉमेडी' (Divine Comedy)</em> - इतालवी राष्ट्रभाषा के जनक।</li>
                <li><strong>पेट्रार्क (Petrarch):</strong> 'मानववाद का जनक' (Father of Humanism) कहलाते हैं।</li>
                <li><strong>मैकियावेली (Machiavelli):</strong> प्रसिद्ध ग्रंथ <em>'द प्रिंस' (The Prince)</em> - आधुनिक राजनीति दर्शन के पिता।</li>
                <li><strong>लियोनार्डो दा विंची:</strong> 'मोनालिसा' (Mona Lisa) एवं 'द लास्ट सपर' (The Last Supper) चित्रकला।</li>
                <li><strong>माइकल एंजेलो:</strong> 'द लास्ट जजमेंट' (The Last Judgment) तथा सिस्टिन चैपल की छत पर चित्रकारी।</li>
              </ul>
              <p>• <strong>धर्म सुधार आंदोलन (Reformation):</strong> 1517 ई. में जर्मनी में <strong>मार्टिन लूथर</strong> ने कैथोलिक चर्च की 'पापमोचन पत्रों' (Indulgences) की बिक्री के विरुद्ध 95 थीसिस (95 Theses) प्रस्तुत कीं, जिससे प्रोटेस्टेंट मत का जन्म हुआ।</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. प्रमुख क्रांतियां (Major World Revolutions)</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-amber-400 font-bold text-base mb-2">🇫🇷 फ्रांसीसी क्रांति (1789)</h4>
                <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
                  <li><strong>शासक:</strong> लुई 16वां (बूर्बों वंश) एवं रानी मेरी अंतोनेत।</li>
                  <li><strong>बास्तील का पतन:</strong> <em>14 जुलाई 1789</em> को क्रांतिकारियों ने बास्तील के राजकीय जेलखाने को तोड़ा। (फ्रांस का राष्ट्रीय दिवस)।</li>
                  <li><strong>नारा:</strong> स्वतंत्रता, समानता और बंधुत्व (Liberty, Equality, Fraternity)।</li>
                  <li><strong>दार्शनिक:</strong> रूसो (सामाजिक संविदा / Social Contract), वॉल्टेयर, मोंटेस्क्यू (शक्ति पृथक्करण / Separation of Powers)।</li>
                  <li><strong>मानव अधिकारों की घोषणा:</strong> 26 अगस्त 1789 को नेशनल असेंबली द्वारा।</li>
                </ul>
              </div>

              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-emerald-400 font-bold text-base mb-2">🇷🇺 रूसी क्रांति (1917)</h4>
                <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
                  <li><strong>जारशाही:</strong> जार निकोलस द्वितीय (रोमानोव वंश) का अत्याचारी शासन।</li>
                  <li><strong>फरवरी/मार्च क्रांति (1917):</strong> जार का तख्तापलट, केरेन्स्की की मेंशेविक सरकार बनी।</li>
                  <li><strong>अक्टूबर/नवंबर क्रांति (बोल्शेविक क्रांति):</strong> <em>7 नवंबर 1917</em> को <strong>व्लादिमीर लेनिन</strong> के नेतृत्व में बोल्शेविकों ने सत्ता संभाली। नारा: "भूमि, शांति और रोटी" (Bread, Peace, Land)।</li>
                  <li><strong>न्यू इकोनॉमिक पॉलिसी (NEP):</strong> 1921 में लेनिन द्वारा शुरू की गई।</li>
                </ul>
              </div>
            </div>

            <div class="mt-4 bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
              <h4 class="text-cyan-400 font-bold text-base mb-2">🏭 औद्योगिक क्रांति (Industrial Revolution)</h4>
              <p class="text-xs text-slate-300 mb-2">सर्वप्रथम 18वीं शताब्दी के उत्तरार्ध में <strong>इंग्लैंड</strong> में सूती वस्त्र उद्योग से प्रारंभ हुई।</p>
              <div class="grid grid-cols-2 gap-2 text-xs text-slate-300">
                <p>• <strong>फ्लाइंग शटल (1733):</strong> जॉन के</p>
                <p>• <strong>स्पिनिंग जेनी (1764):</strong> जेम्स हारग्रीव्स</p>
                <p>• <strong>वाष्प इंजन (1769):</strong> जेम्स वाट</p>
                <p>• <strong>भाप चालित रेल इंजन (1814):</strong> जॉर्ज स्टीफेंसन</p>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. प्रथम एवं द्वितीय विश्व युद्ध (World Wars I & II)</h3>
            <div class="space-y-4">
              <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-sm">
                <h4 class="text-rose-400 font-bold text-base mb-1">⚔️ प्रथम विश्व युद्ध (28 जुलाई 1914 - 11 नवंबर 1918)</h4>
                <p class="text-xs text-slate-300 mb-2">• <strong>तत्कालिक कारण:</strong> ऑस्ट्रिया के राजकुमार आर्कड्यूक फ्रांसिस फर्डीनेंड की साराजेवो (बोस्निया) में 28 जून 1914 को हत्या।</p>
                <p class="text-xs text-slate-300 mb-2">• <strong>दो गुट:</strong> <em>मित्र राष्ट्र</em> (ब्रिटेन, फ्रांस, रूस, इटली, अमेरिका 1917 में शामिल) बनाम <em>धुरी राष्ट्र</em> (जर्मनी, ऑस्ट्रिया-हंगरी, तुर्की, बुल्गारिया)।</p>
                <p class="text-xs text-slate-300">• <strong>वर्साय की संधि (28 जून 1919):</strong> जर्मनी पर थोपी गई अपमानजनक संधि, जिसने द्वितीय विश्व युद्ध के बीज बोए। इसके तहत 10 जनवरी 1920 को <em>राष्ट्र संघ (League of Nations)</em> का गठन हुआ।</p>
              </div>

              <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-sm">
                <h4 class="text-rose-400 font-bold text-base mb-1">⚔️ द्वितीय विश्व युद्ध (1 सितंबर 1939 - 2 सितंबर 1945)</h4>
                <p class="text-xs text-slate-300 mb-2">• <strong>आरंभ:</strong> 1 सितंबर 1939 को हिटलर द्वारा पोलैंड पर आक्रमण।</p>
                <p class="text-xs text-slate-300 mb-2">• <strong>धुरी शक्तियां (Axis Powers):</strong> जर्मनी (हिटलर), इटली (मुसोलिनी), जापान। <strong>मित्र राष्ट्र (Allies):</strong> ब्रिटेन (विंस्टन चर्चिल), सोवियत संघ (स्टालिन), अमेरिका (एफ.डी. रूजवेल्ट), फ्रांस।</p>
                <p class="text-xs text-slate-300 mb-2">• <strong>पर्ल हार्बर पर हमला:</strong> 7 दिसंबर 1941 को जापानी वायुसेना द्वारा अमेरिकी नौसैनिक अड्डे पर्ल हार्बर पर हमला, जिससे अमेरिका युद्ध में कूदा।</p>
                <p class="text-xs text-slate-300">• <strong>परमाणु बम हमला:</strong> अमेरिका द्वारा <em>6 अगस्त 1945 को हिरोशिमा ('लिटिल बॉय')</em> तथा <em>9 अगस्त 1945 को नागासाकी ('फैट मैन')</em> पर परमाणु बम गिराए जाने के बाद जापान ने 2 सितंबर 1945 को आत्मसमर्पण किया।</p>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">4. संयुक्त राष्ट्र संघ (United Nations Organization - UNO)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>स्थापना दिवस:</strong> <strong>24 अक्टूबर 1945</strong> (प्रत्येक वर्ष संयुक्त राष्ट्र दिवस मनाया जाता है)।</p>
              <p>• <strong>मुख्यालय:</strong> न्यूयॉर्क (मैनहट्टन द्वीप), अमेरिका।</p>
              <p>• <strong>सदस्य देश:</strong> 193 (नवीनतम सदस्य: दक्षिणी सूडान, 2011)।</p>
              <p>• <strong>सुरक्षा परिषद (Security Council):</strong> 15 सदस्य (5 स्थायी सदस्य वीटो पावर सहित: अमेरिका, रूस, ब्रिटेन, फ्रांस, चीन; 10 अस्थायी सदस्य 2 वर्ष के कार्यकाल हेतु)।</p>
              <p>• <strong>अंतर्राष्ट्रीय न्यायालय (ICJ):</strong> हेग (नीदरलैंड्स) में स्थित, जिसमें 15 न्यायाधीश 9 वर्ष के लिए चुने जाते हैं।</p>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 ਪ੍ਰੀਖਿਆ ਦ੍ਰਿਸ਼ਟੀ ਤੋਂ</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਵਿਸ਼ਵ ਇਤਿਹਾਸ ਪੰਜਾਬ ਮਾਸਟਰ ਕੈਡਰ (ਸਮਾਜਿਕ ਸਿੱਖਿਆ) ਅਤੇ ਸਕੂਲ ਲੈਕਚਰਾਰ ਪ੍ਰੀਖਿਆ ਦਾ ਜ਼ਰੂਰੀ ਹਿੱਸਾ ਹੈ। ਇਸ ਵਿੱਚ ਫ੍ਰਾਂਸੀਸੀ ਕ੍ਰਾਂਤੀ, ਉਦਯੋਗਿਕ ਕ੍ਰਾਂਤੀ, ਪਹਿਲਾ ਤੇ ਦੂਜਾ ਵਿਸ਼ਵ ਯੁੱਧ ਅਤੇ ਸੰਯੁਕਤ ਰਾਸ਼ਟਰ (UN) ਸ਼ਾਮਲ ਹਨ।
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-3 text-sm">
            <h3 class="text-lg font-bold text-white">ਪ੍ਰਮੁੱਖ ਇਤਿਹਾਸਕ ਘਟਨਾਵਾਂ</h3>
            <p>• <strong>ਫ੍ਰਾਂਸੀਸੀ ਕ੍ਰਾਂਤੀ (1789):</strong> 14 ਜੁਲਾਈ 1789 ਨੂੰ ਬਾਸਤੀਲ ਦਾ ਪਤਨ। ਨਾਅਰਾ: ਆਜ਼ਾਦੀ, ਸਮਾਨਤਾ ਅਤੇ ਭਾਈਚਾਰਾ (Liberty, Equality, Fraternity)।</p>
            <p>• <strong>ਰੂਸੀ ਕ੍ਰਾਂਤੀ (1917):</strong> 7 ਨਵੰਬਰ 1917 ਨੂੰ ਲੈਨਿਨ ਦੀ ਅਗਵਾਈ ਹੇਠ ਬੋਲਸ਼ੇਵਿਕ ਕ੍ਰਾਂਤੀ। ਨਾਅਰਾ: 'ਰੋਟੀ, ਸ਼ਾਂਤੀ ਅਤੇ ਜ਼ਮੀਨ'।</p>
            <p>• <strong>ਪਹਿਲਾ ਵਿਸ਼ਵ ਯੁੱਧ (1914-1918):</strong> ਸ਼ੁਰੂਆਤ 28 ਜੁਲਾਈ 1914, ਵਰਸਾਏ ਦੀ ਸੰਧੀ 28 ਜੂਨ 1919।</p>
            <p>• <strong>ਦੂਜਾ ਵਿਸ਼ਵ ਯੁੱਧ (1939-1945):</strong> 1 ਸਤੰਬਰ 1939 ਨੂੰ ਜਰਮਨੀ ਦਾ ਪੋਲੈਂਡ 'ਤੇ ਹਮਲਾ। 6 ਅਤੇ 9 ਅਗਸਤ 1945 ਨੂੰ ਹੀਰੋਸ਼ੀਮਾ ਅਤੇ ਨਾਗਾਸਾਕੀ 'ਤੇ ਪਰਮਾਣੂ ਬੰਬ।</p>
            <p>• <strong>ਯੂ.ਐਨ.ਓ. (UNO):</strong> ਸਥਾਪਨਾ 24 ਅਕਤੂਬਰ 1945। ਹੈੱਡਕੁਆਰਟਰ ਨਿਊਯਾਰਕ। ਵੀਟੋ ਪਾਵਰ ਵਾਲੇ 5 ਪੱਕੇ ਮੈਂਬਰ (ਅਮਰੀਕਾ, ਬ੍ਰਿਟੇਨ, ਰੂਸ, ਫਰਾਂਸ, ਚੀਨ)।</p>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 Examination Focus</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              World History is a core segment for Punjab Master Cadre (SST), School Lecturer History, and CTET. Key recurring areas include the Renaissance, French Revolution, Industrial Revolution, World Wars I & II, and the UN Charter.
            </p>
          </div>

          <div class="space-y-4 text-sm">
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2">
              <h4 class="text-amber-400 font-bold text-base">Key Revolutions & Movements</h4>
              <p>• <strong>Renaissance:</strong> Originated in Florence, Italy (14th century). Petrarch (Father of Humanism), Machiavelli (The Prince), Leonardo da Vinci (Mona Lisa), Martin Luther (1517 Reformation & 95 Theses).</p>
              <p>• <strong>Industrial Revolution:</strong> Began in Britain (late 18th century) in textiles. Inventions: Flying Shuttle (John Kay), Steam Engine (James Watt 1769), Steam Locomotive (George Stephenson 1814).</p>
              <p>• <strong>French Revolution (1789):</strong> Storming of the Bastille on 14 July 1789. Philosophers: Rousseau (The Social Contract), Montesquieu (Separation of Powers), Voltaire.</p>
              <p>• <strong>Bolshevik Russian Revolution (1917):</strong> Vladimir Lenin led the overthrow of the provisional government on 7 Nov 1917 under the slogan "Peace, Bread, Land".</p>
            </div>

            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2">
              <h4 class="text-rose-400 font-bold text-base">The World Wars & United Nations</h4>
              <p>• <strong>World War I (1914-1918):</strong> Triggered by assassination of Archduke Franz Ferdinand in Sarajevo (28 June 1914). Ended with Treaty of Versailles (1919) and creation of League of Nations (1920).</p>
              <p>• <strong>World War II (1939-1945):</strong> Germany attacked Poland on 1 Sept 1939. Ended after atomic bombs dropped on Hiroshima (6 Aug 1945) and Nagasaki (9 Aug 1945).</p>
              <p>• <strong>United Nations:</strong> Established 24 October 1945 (San Francisco Charter). Headquarters: New York. 5 permanent Security Council members with Veto power (US, UK, Russia, France, China). International Court of Justice located in The Hague, Netherlands.</p>
            </div>
          </div>
        </div>
      `,
    },
    summary: {
      hi: 'विश्व इतिहास में इटली का पुनर्जागरण, मार्टिन लूथर का धर्म सुधार, 1789 की फ्रांसीसी क्रांति, 1917 की रूसी क्रांति, प्रथम व द्वितीय विश्व युद्ध और 24 अक्टूबर 1945 को संयुक्त राष्ट्र संघ की स्थापना सर्वाधिक परीक्षा-उपयोगी बिंदु हैं।',
      pa: 'ਵਿਸ਼ਵ ਇਤਿਹਾਸ ਵਿੱਚ ਇਟਲੀ ਦਾ ਪੁਨਰਜਾਗਰਣ, 1789 ਦੀ ਫਰਾਂਸੀਸੀ ਕ੍ਰਾਂਤੀ, 1917 ਦੀ ਰੂਸੀ ਕ੍ਰਾਂਤੀ, ਦੋਵੇਂ ਵਿਸ਼ਵ ਯੁੱਧ ਅਤੇ 24 ਅਕਤੂਬਰ 1945 ਨੂੰ ਯੂ.ਐਨ.ਓ. ਦੀ ਸਥਾਪਨਾ ਮੁੱਖ ਵਿਸ਼ੇ ਹਨ।',
      en: 'World History covers Renaissance (Italy), Reformation (1517), French Revolution (1789), Russian Revolution (1917), Industrial Revolution (Britain), WWI (1914-18), WWII (1939-45), and the establishment of the United Nations (24 Oct 1945).',
    },
    keyNotes: {
      hi: [
        '📌 14 जुलाई 1789: बास्तील के किले का पतन (फ्रांस का राष्ट्रीय दिवस)।',
        '📌 मार्टिन लूथर ने 1517 में 95 थीसिस के साथ प्रोटेस्टेंट सुधार शुरू किया।',
        '📌 7 नवंबर 1917: लेनिन के नेतृत्व में रूस में बोल्शेविक क्रांति हुई।',
        '📌 28 जून 1919: वर्साय की संधि पर हस्ताक्षर किए गए।',
        '📌 24 अक्टूबर 1945: संयुक्त राष्ट्र संघ (UNO) की स्थापना (न्यूयॉर्क मुख्यालय)।',
      ],
      pa: [
        '📌 14 ਜੁਲਾਈ 1789: ਬਾਸਤੀਲ ਜੇਲ੍ਹ ਦਾ ਪਤਨ।',
        '📌 7 ਨਵੰਬਰ 1917: ਲੈਨਿਨ ਦੀ ਅਗਵਾਈ ਵਿੱਚ ਰੂਸੀ ਬੋਲਸ਼ੇਵਿਕ ਕ੍ਰਾਂਤੀ।',
        '📌 28 ਜੂਨ 1919: ਵਰਸਾਏ ਦੀ ਸੰਧੀ।',
        '📌 24 ਅਕਤੂਬਰ 1945: ਸੰਯੁਕਤ ਰਾਸ਼ਟਰ ਸੰਘ ਦੀ ਸਥਾਪਨਾ।',
      ],
      en: [
        '📌 14 July 1789: Storming of the Bastille in Paris.',
        '📌 1517: Martin Luther initiated the Protestant Reformation with 95 Theses.',
        '📌 7 November 1917: Vladimir Lenin led the Bolshevik Revolution in Russia.',
        '📌 28 June 1919: Treaty of Versailles signed in the Hall of Mirrors.',
        '📌 24 October 1945: United Nations established; headquartered in New York.',
      ],
    },
    flashcards: [
      {
        id: 'fc-wh-1',
        q: { hi: 'फ्रांसीसी क्रांति का प्रसिद्ध नारा क्या था?', pa: 'ਫਰਾਂਸੀਸੀ ਕ੍ਰਾਂਤੀ ਦਾ ਨਾਅਰਾ ਕੀ ਸੀ?', en: 'What was the famous slogan of the French Revolution?' },
        a: { hi: 'स्वतंत्रता, समानता और बंधुत्व (Liberty, Equality, Fraternity)।', pa: 'ਆਜ਼ਾਦੀ, ਸਮਾਨਤਾ ਅਤੇ ਭਾਈਚਾਰਾ।', en: 'Liberty, Equality, Fraternity.' },
        difficulty: 'easy',
      },
      {
        id: 'fc-wh-2',
        q: { hi: 'संयुक्त राष्ट्र संघ (UNO) की स्थापना किस तिथि को हुई और इसका मुख्यालय कहाँ है?', pa: 'ਯੂ.ਐਨ.ਓ. ਦੀ ਸਥਾਪਨਾ ਕਦੋਂ ਹੋਈ ਅਤੇ ਹੈੱਡਕੁਆਰਟਰ ਕਿੱਥੇ ਹੈ?', en: 'When was the UN established and where is its headquarters?' },
        a: { hi: '24 अक्टूबर 1945 को; मुख्यालय न्यूयॉर्क (USA) में है।', pa: '24 ਅਕਤੂਬਰ 1945, ਨਿਊਯਾਰਕ।', en: '24 October 1945; Headquarters in New York, USA.' },
        difficulty: 'easy',
      },
    ],
    videos: [
      {
        title: 'Complete World History for Master Cadre & Competitive Exams',
        channel: 'World History Hub',
        youtubeId: 'W8L_w_eU014',
        language: 'hi',
        views: '410K',
        duration: '1:45:00',
        tags: ['World History', 'French Revolution', 'Master Cadre'],
      },
    ],
    bookRefs: [
      {
        title: 'Class 9 & 10 History - India and the Contemporary World I & II',
        author: 'NCERT / PSEB',
        chapters: 'French Revolution, Russian Revolution, Rise of Nationalism',
        type: 'ncert',
      },
      {
        title: 'Mastering Modern World History',
        author: 'Norman Lowe',
        chapters: 'World Wars and UN',
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
            "title": "NCERT Class 9 · India and the Contemporary World I · English",
            "url": "https://ncert.nic.in/textbook/pdf/iess301.pdf",
            "language": "English",
            "type": "ncert"
      },
      {
            "title": "NCERT Class 9 · भारत और समकालीन विश्व भाग-1 · Hindi",
            "url": "https://ncert.nic.in/textbook/pdf/ihss301.pdf",
            "language": "Hindi",
            "type": "ncert"
      },
      {
            "title": "NIOS · World History & Revolutions Lesson PDF",
            "url": "https://nios.ac.in/media/documents/SecSocSciCour/English/Lesson-03.pdf",
            "language": "English",
            "type": "nios"
      }
],
    syllabusReference: {
      "title": "ERD Punjab · Master Cadre Social Science (World History) Syllabus",
      "url": "https://erd.punjab.gov.in/master2022/Docs/SocialSciencesyllabus04_05_2022.pdf"
},
  },
};
