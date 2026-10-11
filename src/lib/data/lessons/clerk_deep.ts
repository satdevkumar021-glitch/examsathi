import type { Lesson } from './types';

// ============================================================================
// PSSSB CLERK, PATWARI & PUNJAB POLICE — SEGREGATED DEEP-DIVE CURRICULUM
// Comprehensive Trilingual (English, Punjabi & Hindi) Modules for Computer IT
// (Hardware, MS Office Suite, Networking/Cybersecurity) & Punjabi Culture
// ============================================================================

export const CLERK_DEEP_LESSONS: Record<string, Lesson> = {
  // ==========================================================================
  // TOPIC 1: COMPUTER ARCHITECTURE, HARDWARE, MEMORY HIERARCHY & NUMBER SYSTEMS
  // ==========================================================================
  'clerk-computer-hardware': {
    id: 'clerk-computer-hardware',
    topicId: 'clerk-computer-hardware',
    subjectId: 'clerk-special',
    category: 'clerk',
    coverageStatus: 'complete',
    editorialStatus: 'authored',
    title: {
      en: 'Computer Architecture, CPU Registers, Memory Hierarchy & Number Systems',
      pa: 'ਕੰਪਿਊਟਰ ਆਰਕੀਟੈਕਚਰ, ਸੀ.ਪੀ.ਯੂ. ਰਜਿਸਟਰ, ਮੈਮੋਰੀ ਹਾਇਰਾਰਕੀ ਅਤੇ ਨੰਬਰ ਸਿਸਟਮ',
      hi: 'कंप्यूटर आर्किटेक्चर, सीपीयू रजिस्टर, मेमोरी पदानुक्रम एवं संख्या प्रणाली',
    },
    examRelevance: 'PSSSB Clerk (4–5 Qs), Punjab Patwari (4–5 Qs), Punjab Police Constable & SI, ETT',
    estimatedTime: '45 mins',
    prerequisites: {
      en: [
        'Basic understanding of digital data representation (0 and 1 bits) and functional blocks of a computer.',
        'Familiarity with powers of 2 (2¹⁰ = 1024) for storage unit conversions.',
      ],
      pa: [
        'ਡਿਜੀਟਲ ਡੇਟਾ (0 ਅਤੇ 1 ਬਿੱਟ) ਅਤੇ ਕੰਪਿਊਟਰ ਦੇ ਮੁੱਢਲੇ ਹਿੱਸਿਆਂ ਦੀ ਸਮਝ।',
        'ਮੈਮੋਰੀ ਇਕਾਈਆਂ ਦੇ ਬਦਲਾਅ ਲਈ 2 ਦੀਆਂ ਘਾਤਾਂ (2¹⁰ = 1024) ਦੀ ਜਾਣਕਾਰੀ।',
      ],
      hi: [
        'डिजिटल डेटा (0 और 1 बिट) तथा कंप्यूटर के मूल घटकों की प्रारंभिक समझ।',
        'मेमोरी इकाइयों के रूपांतरण हेतु 2 की घातों (2¹⁰ = 1024) का ज्ञान।',
      ],
    },
    learningObjectives: {
      en: [
        'Compare the Five Generations of Computers (Vacuum Tubes, Transistors, ICs, VLSI Microprocessors, ULSI/AI) and Von Neumann Architecture.',
        'Explain CPU components (ALU, Control Unit) and special-purpose CPU Registers (PC, IR, MAR, MDR, Accumulator).',
        'Master the complete Memory Hierarchy (Registers → L1/L2/L3 Cache → SRAM/DRAM → ROM/PROM/EPROM/EEPROM → SSD/HDD) and exact binary storage units.',
        'Perform rapid conversions across Binary (Base-2), Octal (Base-8), Decimal (Base-10), and Hexadecimal (Base-16), and understand ASCII vs Unicode.',
      ],
      pa: [
        'ਕੰਪਿਊਟਰ ਦੀਆਂ ਪੰਜ ਪੀੜ੍ਹੀਆਂ (ਵੈਕਿਊਮ ਟਿਊਬ, ਟ੍ਰਾਂਜ਼ਿਸਟਰ, ਆਈ.ਸੀ., ਮਾਈਕ੍ਰੋਪ੍ਰੋਸੈਸਰ, ਏ.ਆਈ.) ਅਤੇ ਵੌਨ ਨਿਊਮੈਨ ਆਰਕੀਟੈਕਚਰ ਨੂੰ ਸਮਝਣਾ।',
        'ਸੀ.ਪੀ.ਯੂ. ਦੇ ਭਾਗਾਂ (ALU, CU) ਅਤੇ ਪ੍ਰਮੁੱਖ ਰਜਿਸਟਰਾਂ (PC, IR, MAR, MDR, Accumulator) ਦੇ ਕੰਮਾਂ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਨਾ।',
        'ਮੈਮੋਰੀ ਹਾਇਰਾਰਕੀ (ਰਜਿਸਟਰ, ਕੈਸ਼ੇ, SRAM/DRAM, ROM/PROM/EPROM/EEPROM, SSD/HDD) ਅਤੇ ਮੈਮੋਰੀ ਇਕਾਈਆਂ ਨੂੰ ਚੰਗੀ ਤਰ੍ਹਾਂ ਜਾਣਨਾ।',
        'ਬਾਈਨਰੀ (Base-2), ਔਕਟਲ (Base-8), ਡੈਸੀਮਲ (Base-10) ਅਤੇ ਹੈਕਸਾਡੈਸੀਮਲ (Base-16) ਨੰਬਰ ਸਿਸਟਮ ਦੇ ਸਵਾਲ ਹੱਲ ਕਰਨਾ।',
      ],
      hi: [
        'कंप्यूटर की पांच पीढ़ियों (वैक्यूम ट्यूब, ट्रांजिस्टर, आईसी, माइक्रोप्रोसेसर, एआई) और वॉन न्यूमैन आर्किटेक्चर को समझना।',
        'सीपीयू घटकों (ALU, CU) और प्रमुख रजिस्टरों (PC, IR, MAR, MDR, Accumulator) के कार्यों का विश्लेषण करना।',
        'मेमोरी पदानुक्रम (रजिस्टर, कैश, SRAM/DRAM, ROM/PROM/EPROM/EEPROM, SSD/HDD) और मेमोरी इकाइयों का अध्ययन करना।',
        'बाइनरी (Base-2), ऑक्टल (Base-8), डेसिमल (Base-10) और हेक्साडेसिमल (Base-16) रूपांतरण हल करना।',
      ],
    },
    content: {
      en: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🖥️ 1. Five Generations of Computers & Von Neumann Architecture</h4>
            <div class="overflow-x-auto mb-3">
              <table class="w-full text-xs text-left border-collapse border border-slate-700">
                <thead>
                  <tr class="bg-slate-800 text-indigo-300">
                    <th class="p-2 border border-slate-700">Generation</th>
                    <th class="p-2 border border-slate-700">Core Switching Technology</th>
                    <th class="p-2 border border-slate-700">Memory / Languages</th>
                    <th class="p-2 border border-slate-700">Classic Examples & Pioneers</th>
                  </tr>
                </thead>
                <tbody class="text-slate-300">
                  <tr class="border-b border-slate-800">
                    <td class="p-2 font-bold text-white">1st Gen (1940–1956)</td>
                    <td class="p-2"><strong>Vacuum Tubes</strong> (Thermionic Valves)</td>
                    <td class="p-2">Magnetic Drums; Machine & Assembly Language</td>
                    <td class="p-2"><strong>ENIAC</strong> (Eckert & Mauchly), <strong>EDVAC</strong>, <strong>UNIVAC-I</strong>, IBM 650</td>
                  </tr>
                  <tr class="border-b border-slate-800 bg-slate-900/50">
                    <td class="p-2 font-bold text-white">2nd Gen (1956–1963)</td>
                    <td class="p-2"><strong>Transistors</strong> (Invented at Bell Labs by Shockley, Bardeen, Brattain)</td>
                    <td class="p-2">Magnetic Core; <strong>FORTRAN & COBOL</strong> (Batch OS)</td>
                    <td class="p-2">IBM 1401, IBM 7094, CDC 1604</td>
                  </tr>
                  <tr class="border-b border-slate-800">
                    <td class="p-2 font-bold text-white">3rd Gen (1964–1971)</td>
                    <td class="p-2"><strong>Integrated Circuits (ICs — SSI/MSI)</strong> (Invented by <strong>Jack Kilby & Robert Noyce</strong>; Silicon chips)</td>
                    <td class="p-2">Semiconductor RAM; PASCAL, BASIC, C; Time-Sharing & Multiprogramming OS</td>
                    <td class="p-2">IBM System/360, PDP-8, PDP-11</td>
                  </tr>
                  <tr class="border-b border-slate-800 bg-slate-900/50">
                    <td class="p-2 font-bold text-white">4th Gen (1971–Present)</td>
                    <td class="p-2"><strong>VLSI Microprocessors</strong> (First microprocessor: <strong>Intel 4004</strong> in 1971 by Ted Hoff)</td>
                    <td class="p-2">GUI OS (Windows, macOS, Linux), SQL, Python, C++</td>
                    <td class="p-2">IBM PC, Apple Macintosh, <strong>CRAY-1</strong> (Supercomputer)</td>
                  </tr>
                  <tr class="border-b border-slate-800">
                    <td class="p-2 font-bold text-white">5th Gen (Present & Beyond)</td>
                    <td class="p-2"><strong>ULSI (Ultra Large Scale Integration)</strong>, Quantum & AI / Parallel Processing</td>
                    <td class="p-2">Natural Language Processing (LISP, PROLOG, Neural Nets)</td>
                    <td class="p-2"><strong>PARAM 8000</strong> (India’s 1st Supercomputer by C-DAC / Dr. Vijay Bhatkar), Frontier, AIRAWAT</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">
              • <strong>Von Neumann Architecture (1945):</strong> Proposed by <strong>John von Neumann</strong>, introducing the <strong>Stored-Program Concept</strong> where both program instructions and data are stored together in the same read-write primary memory and fetched sequentially over a single shared system bus.
            </p>
          </div>

          <div class="bg-slate-800/90 border border-slate-700 p-5 rounded-xl">
            <h4 class="text-amber-400 font-bold text-base mb-2">⚙️ 2. CPU Internal Architecture, Special Registers & System Buses</h4>
            <p class="text-slate-300 text-sm mb-2">
              The <strong>Central Processing Unit (CPU)</strong> executes the <strong>Instruction Cycle (Fetch → Decode → Execute → Store)</strong> and consists of three core units:
            </p>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>1. Arithmetic Logic Unit (ALU):</strong> Performs all arithmetic operations ($+$, $-$, $\times$, $\div$) and bitwise logical comparisons (AND, OR, NOT, XOR, $<$, $>$, $=$).</li>
              <li><strong>2. Control Unit (CU):</strong> Acts as the central nervous system / supervisor; decodes instructions and generates timing and control signals without processing data itself.</li>
              <li><strong>3. High-Speed CPU Registers (Fastest Memory in a Computer):</strong>
                <br/>• <strong>Program Counter (PC) / Instruction Pointer:</strong> Holds the memory address of the <strong>NEXT instruction</strong> to be fetched and executed.
                <br/>• <strong>Instruction Register (IR):</strong> Holds the <strong>CURRENT instruction</strong> currently being decoded and executed.
                <br/>• <strong>Memory Address Register (MAR):</strong> Holds the memory address of the location in RAM from which data is to be read or to which data is to be written.
                <br/>• <strong>Memory Data/Buffer Register (MDR / MBR):</strong> Holds the actual data/instruction fetched from or waiting to be written to memory.
                <br/>• <strong>Accumulator (AC):</strong> Stores immediate intermediate results of ALU calculations.
              </li>
              <li><strong>Three System Buses:</strong>
                <br/>• <strong>Address Bus (Unidirectional):</strong> Carries memory addresses from CPU to RAM/I/O; its width determines maximum addressable RAM (e.g., a 32-bit address bus addresses $2^{32}$ bytes = <strong>4 GB RAM</strong>).
                <br/>• <strong>Data Bus (Bidirectional):</strong> Carries actual data between CPU, memory, and peripherals; determines word size (32-bit / 64-bit).
                <br/>• <strong>Control Bus (Bidirectional):</strong> Carries command/timing signals (Read/Write, Interrupts, Clock).
              </li>
            </ul>
          </div>

          <div class="bg-emerald-950/50 border border-emerald-500/30 p-5 rounded-xl">
            <h4 class="text-emerald-300 font-bold text-base mb-2">💾 3. Memory Hierarchy (Speed vs Capacity) & Binary Storage Units</h4>
            <ul class="text-xs text-slate-300 space-y-2 list-disc pl-5">
              <li><strong>Speed Order (Fastest to Slowest):</strong>
                <br/><strong>CPU Registers</strong> (Fastest, smallest, costliest per bit) $\rightarrow$ <strong>Cache Memory (L1 $\rightarrow$ L2 $\rightarrow$ L3)</strong> $\rightarrow$ <strong>Main Memory (RAM)</strong> $\rightarrow$ <strong>Solid State Drive (SSD / NVMe)</strong> $\rightarrow$ <strong>Hard Disk Drive (HDD)</strong> $\rightarrow$ <strong>Optical Discs / Magnetic Tape</strong> (Slowest, cheapest per bit).
              </li>
              <li><strong>SRAM vs DRAM (Volatile Primary Memory):</strong>
                <br/>• <strong>SRAM (Static RAM):</strong> Built using <strong>Flip-Flops (6 transistors)</strong>; does <em>NOT</em> need periodic refreshing as long as power is on; extremely fast and expensive; used to build <strong>CPU Cache Memory</strong>.
                <br/>• <strong>DRAM (Dynamic RAM):</strong> Built using <strong>Capacitors & Transistors</strong>; charge leaks, so it <strong>must be refreshed thousands of times per second</strong>; slower and cheaper; used as <strong>Main System RAM</strong> (DDR4, DDR5).
              </li>
              <li><strong>ROM Variants (Non-Volatile Firmware Memory):</strong> Retains data permanently without power; stores <strong>BIOS (Basic Input Output System) / UEFI</strong> which runs <strong>POST (Power-On Self-Test)</strong> during booting (<em>Cold Boot</em> = turning on from power-off; <em>Warm Boot</em> = restarting via Ctrl+Alt+Del).
                <br/>• <strong>PROM:</strong> Programmable ROM (written once using high-voltage fuse burning; cannot be erased).
                <br/>• <strong>EPROM:</strong> Erasable PROM (erased by exposing quartz window to <strong>Ultraviolet (UV) rays</strong>).
                <br/>• <strong>EEPROM:</strong> Electrically Erasable PROM (erased byte-by-byte using electrical signals; <strong>Flash Memory</strong> used in USB Pen Drives and SSDs is a block-erasable type of EEPROM).
              </li>
              <li><strong>Exact Binary Storage Hierarchy:</strong>
                <br/>• <strong>1 Bit</strong> = Binary Digit (0 or 1) | <strong>1 Nibble = 4 Bits</strong> | <strong>1 Byte = 8 Bits (2 Nibbles)</strong>
                <br/>• <strong>1 KB</strong> = $1024\text{ Bytes} (2^{10})$ | <strong>1 MB</strong> = $1024\text{ KB} (2^{20})$ | <strong>1 GB</strong> = $1024\text{ MB} (2^{30})$ | <strong>1 TB</strong> = $1024\text{ GB} (2^{40})$ | <strong>1 PB (Petabyte)</strong> = $1024\text{ TB} (2^{50})$ | <strong>1 EB (Exabyte)</strong> = $1024\text{ PB}$ | <strong>1 ZB (Zettabyte)</strong> = $1024\text{ EB}$ | <strong>1 YB (Yottabyte)</strong> = $1024\text{ ZB}$.
              </li>
            </ul>
          </div>

          <div class="bg-rose-950/50 border border-rose-500/30 p-5 rounded-xl">
            <h4 class="text-rose-300 font-bold text-base mb-2">🔢 4. Number Systems, Conversions & Character Encoding (ASCII / Unicode)</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>Four Positional Number Systems:</strong>
                <br/>• <strong>Binary (Base / Radix 2):</strong> Digits $\{0, 1\}$.
                <br/>• <strong>Octal (Base 8):</strong> Digits $\{0, 1, 2, 3, 4, 5, 6, 7\}$ — Each Octal digit represents a <strong>3-bit binary group</strong> ($2^3 = 8$).
                <br/>• <strong>Decimal (Base 10):</strong> Digits $\{0\text{–}9\}$.
                <br/>• <strong>Hexadecimal (Base 16):</strong> Digits $\{0\text{–}9, \text{A}=10, \text{B}=11, \text{C}=12, \text{D}=13, \text{E}=14, \text{F}=15\}$ — Each Hex digit represents a <strong>4-bit binary group / 1 Nibble</strong> ($2^4 = 16$).
              </li>
              <li><strong>1’s & 2’s Complement (Signed Negative Numbers):</strong>
                <br/>• <strong>1’s Complement:</strong> Invert all bits ($0 \leftrightarrow 1$). E.g., 1's complement of $1010_2$ is $0101_2$.
                <br/>• <strong>2’s Complement:</strong> $\text{1's Complement} + 1$. E.g., 2's complement of $1010_2 = 0101_2 + 1 = 0110_2$.
              </li>
              <li><strong>Character Codes:</strong> <strong>BCD</strong> (4 bits), <strong>Standard ASCII</strong> (7 bits = $2^7 = 128$ characters; Extended ASCII = 8 bits = 256 characters; <code>'A'</code> = 65, <code>'a'</code> = 97, <code>'0'</code> = 48), <strong>EBCDIC</strong> (8 bits, used in IBM mainframes), and <strong>Unicode (UTF-8 / UTF-16 / UTF-32)</strong> (universal encoding supporting Gurmukhi, Devanagari, and global scripts).</li>
            </ul>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🖥️ 1. ਕੰਪਿਊਟਰ ਦੀਆਂ ਪੰਜ ਪੀੜ੍ਹੀਆਂ ਅਤੇ ਵੌਨ ਨਿਊਮੈਨ ਆਰਕੀਟੈਕਚਰ</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਪਹਿਲੀ ਪੀੜ੍ਹੀ (1940–56):</strong> <strong>ਵੈਕਿਊਮ ਟਿਊਬਾਂ (Vacuum Tubes)</strong>; ਮਸ਼ੀਨੀ ਭਾਸ਼ਾ; ਉਦਾਹਰਨ: ENIAC, EDVAC, UNIVAC-I.</li>
              <li><strong>ਦੂਜੀ ਪੀੜ੍ਹੀ (1956–63):</strong> <strong>ਟ੍ਰਾਂਜ਼ਿਸਟਰ (Transistors)</strong>; FORTRAN ਅਤੇ COBOL ਭਾਸ਼ਾਵਾਂ; ਉਦਾਹਰਨ: IBM 1401.</li>
              <li><strong>ਤੀਜੀ ਪੀੜ੍ਹੀ (1964–71):</strong> <strong>ਇੰਟੀਗ੍ਰੇਟਿਡ ਸਰਕਟ (IC — ਜੈਕ ਕਿਲਬੀ ਅਤੇ ਰਾਬਰਟ ਨੌਇਸ)</strong>; ਸਿਲੀਕਾਨ ਚਿੱਪ।</li>
              <li><strong>ਚੌਥੀ ਪੀੜ੍ਹੀ (1971–ਵਰਤਮਾਨ):</strong> <strong>VLSI ਮਾਈਕ੍ਰੋਪ੍ਰੋਸੈਸਰ</strong> (ਪਹਿਲਾ ਮਾਈਕ੍ਰੋਪ੍ਰੋਸੈਸਰ: <strong>Intel 4004</strong>, 1971)।</li>
              <li><strong>ਪੰਜਵੀਂ ਪੀੜ੍ਹੀ:</strong> <strong>ULSI ਅਤੇ ਆਰਟੀਫੀਸ਼ੀਅਲ ਇੰਟੈਲੀਜੈਂਸ (AI)</strong>; ਭਾਰਤ ਦਾ ਪਹਿਲਾ ਸੁਪਰ ਕੰਪਿਊਟਰ: <strong>PARAM 8000</strong> (C-DAC ਪੁਣੇ, ਡਾ. ਵਿਜੇ ਭਾਟਕਰ)।</li>
              <li><strong>ਵੌਨ ਨਿਊਮੈਨ ਆਰਕੀਟੈਕਚਰ (1945):</strong> ਜੌਨ ਵੌਨ ਨਿਊਮੈਨ ਨੇ <strong>'ਸਟੋਰਡ-ਪ੍ਰੋਗਰਾਮ' (Stored-Program)</strong> ਸਿਧਾਂਤ ਦਿੱਤਾ ਜਿਸ ਵਿੱਚ ਡੇਟਾ ਅਤੇ ਹਦਾਇਤਾਂ ਇੱਕੋ ਮੈਮੋਰੀ ਵਿੱਚ ਸਟੋਰ ਹੁੰਦੀਆਂ ਹਨ।</li>
            </ul>
          </div>

          <div class="bg-slate-800/90 border border-slate-700 p-5 rounded-xl">
            <h4 class="text-amber-400 font-bold text-base mb-2">⚙️ 2. ਸੀ.ਪੀ.ਯੂ. (CPU) ਦੇ ਭਾਗ ਅਤੇ ਪ੍ਰਮੁੱਖ ਰਜਿਸਟਰ</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ALU (Arithmetic Logic Unit):</strong> ਹਿਸਾਬੀ ($+, -, \times, \div$) ਅਤੇ ਤਾਰਕਿਕ (AND, OR, NOT, $<, >$) ਗਣਨਾਵਾਂ ਕਰਦਾ ਹੈ।</li>
              <li><strong>CU (Control Unit):</strong> ਸਾਰੇ ਭਾਗਾਂ ਨੂੰ ਕੰਟਰੋਲ ਸਿਗਨਲ ਭੇਜਦਾ ਹੈ।</li>
              <li><strong>ਪ੍ਰਮੁੱਖ ਰਜਿਸਟਰ (ਸਭ ਤੋਂ ਤੇਜ਼ ਮੈਮੋਰੀ):</strong>
                <br/>• <strong>Program Counter (PC):</strong> <strong>ਅਗਲੀ (Next) ਹਦਾਇਤ</strong> ਦਾ ਮੈਮੋਰੀ ਪਤਾ ਰੱਖਦਾ ਹੈ।
                <br/>• <strong>Instruction Register (IR):</strong> <strong>ਮੌਜੂਦਾ (Current) ਚੱਲ ਰਹੀ ਹਦਾਇਤ</strong> ਨੂੰ ਰੱਖਦਾ ਹੈ।
                <br/>• <strong>MAR (Memory Address Register):</strong> ਮੈਮੋਰੀ ਪਤਾ ਰੱਖਦਾ ਹੈ; <strong>MDR:</strong> ਡੇਟਾ ਰੱਖਦਾ ਹੈ; <strong>Accumulator:</strong> ALU ਦੇ ਨਤੀਜੇ ਰੱਖਦਾ ਹੈ।
              </li>
            </ul>
          </div>

          <div class="bg-emerald-950/50 border border-emerald-500/30 p-5 rounded-xl">
            <h4 class="text-emerald-300 font-bold text-base mb-2">💾 3. ਮੈਮੋਰੀ ਹਾਇਰਾਰਕੀ (SRAM, DRAM, ROM) ਅਤੇ ਮੈਮੋਰੀ ਇਕਾਈਆਂ</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਗਤੀ ਦਾ ਕ੍ਰਮ (ਸਭ ਤੋਂ ਤੇਜ਼ ਤੋਂ ਹੌਲੀ):</strong> <strong>CPU Registers $\rightarrow$ Cache Memory (L1, L2, L3) $\rightarrow$ RAM $\rightarrow$ SSD $\rightarrow$ Hard Disk (HDD)</strong>।</li>
              <li><strong>SRAM ਬਨਾਮ DRAM:</strong> <strong>SRAM (Static RAM)</strong> ਫਲਿੱਪ-ਫਲੌਪ ਤੋਂ ਬਣਦੀ ਹੈ, ਇਸ ਨੂੰ ਵਾਰ-ਵਾਰ ਰਿਫ੍ਰੈਸ਼ ਨਹੀਂ ਕਰਨਾ ਪੈਂਦਾ ਅਤੇ ਇਹ <strong>ਕੈਸ਼ੇ ਮੈਮੋਰੀ (Cache)</strong> ਬਣਾਉਣ ਲਈ ਵਰਤੀ ਜਾਂਦੀ ਹੈ। <strong>DRAM (Dynamic RAM)</strong> ਕੈਪੈਸੀਟਰ ਤੋਂ ਬਣਦੀ ਹੈ ਅਤੇ ਇਸ ਨੂੰ ਹਰ ਸਕਿੰਟ ਹਜ਼ਾਰਾਂ ਵਾਰ ਰਿਫ੍ਰੈਸ਼ ਕਰਨਾ ਪੈਂਦਾ ਹੈ।</li>
              <li><strong>ROM (ਸਥਾਈ / Non-Volatile ਮੈਮੋਰੀ):</strong> ਇਸ ਵਿੱਚ <strong>BIOS</strong> ਸਟੋਰ ਹੁੰਦਾ ਹੈ ਜੋ ਕੰਪਿਊਟਰ ਚੱਲਣ ਸਮੇਂ <strong>POST (Power-On Self-Test)</strong> ਕਰਦਾ ਹੈ। ਕਿਸਮਾਂ: PROM, <strong>EPROM (ਪਰਾਬੈਂਗਣੀ UV ਕਿਰਨਾਂ ਨਾਲ ਮਿਟਾਈ ਜਾਂਦੀ ਹੈ)</strong>, ਅਤੇ <strong>EEPROM (ਬਿਜਲਈ ਸਿਗਨਲ ਨਾਲ ਮਿਟਾਈ ਜਾਂਦੀ ਹੈ — ਪੈੱਨ ਡਰਾਈਵ ਤੇ SSD ਵਿੱਚ ਵਰਤੀ ਜਾਂਦੀ Flash Memory)</strong>।</li>
              <li><strong>ਮੈਮੋਰੀ ਇਕਾਈਆਂ:</strong> 1 Nibble = 4 Bits | 1 Byte = 8 Bits | 1 KB = 1024 Bytes ($2^{10}$) | 1 MB = 1024 KB | 1 GB = 1024 MB | 1 TB = 1024 GB | 1 PB = 1024 TB.</li>
            </ul>
          </div>

          <div class="bg-rose-950/50 border border-rose-500/30 p-5 rounded-xl">
            <h4 class="text-rose-300 font-bold text-base mb-2">🔢 4. ਨੰਬਰ ਸਿਸਟਮ ਅਤੇ ਕੋਡਿੰਗ (ASCII / Unicode)</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਬਾਈਨਰੀ (Base 2: 0–1)</strong>, <strong>ਔਕਟਲ (Base 8: 0–7, 3-ਬਿੱਟ ਗਰੁੱਪ)</strong>, <strong>ਡੈਸੀਮਲ (Base 10: 0–9)</strong>, ਅਤੇ <strong>ਹੈਕਸਾਡੈਸੀਮਲ (Base 16: 0–9 ਅਤੇ A=10 ਤੋਂ F=15, 4-ਬਿੱਟ ਗਰੁੱਪ)</strong>।</li>
              <li><strong>ASCII ਕੋਡ:</strong> ਸਟੈਂਡਰਡ ASCII <strong>7-ਬਿੱਟ</strong> (128 ਅੱਖਰ) ਅਤੇ ਐਕਸਟੈਂਡਡ ASCII <strong>8-ਬਿੱਟ</strong> (256 ਅੱਖਰ) ਦਾ ਹੁੰਦਾ ਹੈ ('A' = 65, 'a' = 97)। ਗੁਰਮੁਖੀ (ਪੰਜਾਬੀ) ਫੌਂਟ ਰਾਵੀ (Raavi) <strong>ਯੂਨੀਕੋਡ (Unicode)</strong> ਉੱਤੇ ਆਧਾਰਿਤ ਹੈ।</li>
            </ul>
          </div>
        </div>
      `,
      hi: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🖥️ 1. कंप्यूटर की पांच पीढ़ियां एवं वॉन न्यूमैन आर्किटेक्चर</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>प्रथम पीढ़ी (1940–56):</strong> <strong>वैक्यूम ट्यूब (Vacuum Tubes)</strong>; मशीनी भाषा; उदाहरण: ENIAC, EDVAC, UNIVAC-I.</li>
              <li><strong>द्वितीय पीढ़ी (1956–63):</strong> <strong>ट्रांजिस्टर (Transistors)</strong>; FORTRAN व COBOL; उदाहरण: IBM 1401.</li>
              <li><strong>तृतीय पीढ़ी (1964–71):</strong> <strong>इंटीग्रेटेड सर्किट (IC — जैक किल्बी व रॉबर्ट नॉइस)</strong>; सिलिकॉन चिप।</li>
              <li><strong>चतुर्थ पीढ़ी (1971–वर्तमान):</strong> <strong>VLSI माइक्रोप्रोसेसर</strong> (प्रथम माइक्रोप्रोसेसर: <strong>Intel 4004</strong>, 1971)।</li>
              <li><strong>पंचम पीढ़ी:</strong> <strong>ULSI एवं कृत्रिम बुद्धिमत्ता (AI)</strong>; भारत का प्रथम सुपर कंप्यूटर: <strong>PARAM 8000</strong> (C-DAC पुणे, डॉ. विजय भटकर)।</li>
            </ul>
          </div>

          <div class="bg-slate-800/90 border border-slate-700 p-5 rounded-xl">
            <h4 class="text-amber-400 font-bold text-base mb-2">⚙️ 2. सीपीयू (CPU) के घटक एवं प्रमुख रजिस्टर</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ALU:</strong> अंकगणितीय व तार्किक गणनाएं करता है; <strong>CU (Control Unit):</strong> नियंत्रण संकेत भेजता है।</li>
              <li><strong>प्रमुख रजिस्टर (सबसे तेज़ मेमोरी):</strong>
                <br/>• <strong>Program Counter (PC):</strong> निष्पादित होने वाले <strong>अगले (Next) निर्देश</strong> का पता रखता है।
                <br/>• <strong>Instruction Register (IR):</strong> <strong>वर्तमान (Current) निर्देश</strong> को रखता है।
                <br/>• <strong>MAR:</strong> मेमोरी पता रखता है; <strong>MDR:</strong> डेटा रखता है; <strong>Accumulator:</strong> ALU के परिणाम रखता है।
              </li>
            </ul>
          </div>

          <div class="bg-emerald-950/50 border border-emerald-500/30 p-5 rounded-xl">
            <h4 class="text-emerald-300 font-bold text-base mb-2">💾 3. मेमोरी पदानुक्रम (SRAM, DRAM, ROM) एवं इकाइयां</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>गति क्रम:</strong> <strong>CPU Registers $\rightarrow$ Cache Memory (L1, L2, L3) $\rightarrow$ RAM $\rightarrow$ SSD $\rightarrow$ HDD</strong>।</li>
              <li><strong>SRAM बनाम DRAM:</strong> <strong>SRAM</strong> फ्लिप-फ्लॉप से बनती है, इसे रिफ्रेश नहीं करना पड़ता और यह <strong>Cache Memory</strong> में प्रयुक्त होती है। <strong>DRAM</strong> कैपेसिटर से बनती है और इसे प्रति सेकंड हजारों बार रिफ्रेश करना पड़ता है।</li>
              <li><strong>ROM (गैर-वाष्पशील / स्थायी):</strong> इसमें <strong>BIOS</strong> होता है जो बूटिंग के समय <strong>POST (Power-On Self-Test)</strong> करता है। प्रकार: PROM, <strong>EPROM (पराबैंगनी UV किरणों से मिटती है)</strong>, और <strong>EEPROM (विद्युत सिग्नल से मिटती है — पेन ड्राइव व SSD की Flash Memory)</strong>।</li>
              <li><strong>इकाइयां:</strong> 1 Nibble = 4 Bits | 1 Byte = 8 Bits | 1 KB = 1024 Bytes ($2^{10}$) | 1 MB = 1024 KB | 1 GB = 1024 MB | 1 TB = 1024 GB.</li>
            </ul>
          </div>

          <div class="bg-rose-950/50 border border-rose-500/30 p-5 rounded-xl">
            <h4 class="text-rose-300 font-bold text-base mb-2">🔢 4. संख्या प्रणाली (Number Systems) एवं ASCII / Unicode</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>बाइनरी (Base 2: 0–1)</strong>, <strong>ऑक्टल (Base 8: 0–7, 3-बिट समूह)</strong>, <strong>डेसिमल (Base 10: 0–9)</strong>, तथा <strong>हेक्साडेसिमल (Base 16: 0–9 एवं A=10 से F=15, 4-बिट समूह)</strong>।</li>
              <li><strong>ASCII:</strong> मानक ASCII <strong>7-बिट</strong> (128 अक्षर) और विस्तारित ASCII <strong>8-बिट</strong> (256 अक्षर) का होता है ('A' = 65, 'a' = 97)। पंजाबी का मानक फॉन्ट रावी (Raavi) <strong>यूनिकोड (Unicode)</strong> पर आधारित है।</li>
            </ul>
          </div>
        </div>
      `,
    },
    workedExamples: [
      {
        title: {
          en: 'Converting Decimal to Binary, Octal & Hexadecimal',
          pa: 'ਡੈਸੀਮਲ ਸੰਖਿਆ ਨੂੰ ਬਾਈਨਰੀ, ਔਕਟਲ ਅਤੇ ਹੈਕਸਾਡੈਸੀਮਲ ਵਿੱਚ ਬਦਲਣਾ',
          hi: 'दशमलव संख्या को बाइनरी, ऑक्टल और हेक्साडेसिमल में बदलना',
        },
        problem: {
          en: 'Convert the Decimal number (45)₁₀ into: (a) Binary (Base-2), (b) Octal (Base-8), and (c) Hexadecimal (Base-16).',
          pa: 'ਡੈਸੀਮਲ ਸੰਖਿਆ (45)₁₀ ਨੂੰ (a) ਬਾਈਨਰੀ, (b) ਔਕਟਲ ਅਤੇ (c) ਹੈਕਸਾਡੈਸੀਮਲ ਵਿੱਚ ਬਦਲੋ।',
          hi: 'दशमलव संख्या (45)₁₀ को (a) बाइनरी, (b) ऑक्टल और (c) हेक्साडेसिमल में बदलिए।',
        },
        steps: {
          en: [
            'Step 1 (Binary): Write powers of 2: 32 + 8 + 4 + 1 = 45 → (101101)₂.',
            'Step 2 (Octal): Group (101101)₂ into 3-bit blocks from right to left: 101 (5) and 101 (5) → (55)₈.',
            'Step 3 (Hexadecimal): Group (00101101)₂ into 4-bit nibbles from right to left: 0010 (2) and 1101 (13 = D) → (2D)₁₆.',
          ],
          pa: [
            'ਕਦਮ 1 (ਬਾਈਨਰੀ): 32 + 8 + 4 + 1 = 45 → (101101)₂.',
            'ਕਦਮ 2 (ਔਕਟਲ): ਸੱਜੇ ਤੋਂ ਖੱਬੇ 3-3 ਬਿੱਟਾਂ ਦੇ ਜੋੜੇ ਬਣਾਓ: 101 (5) ਅਤੇ 101 (5) → (55)₈.',
            'ਕਦਮ 3 (ਹੈਕਸਾਡੈਸੀਮਲ): 4-4 ਬਿੱਟਾਂ ਦੇ ਜੋੜੇ ਬਣਾਓ: 0010 (2) ਅਤੇ 1101 (13 = D) → (2D)₁₆.',
          ],
          hi: [
            'चरण 1 (बाइनरी): 32 + 8 + 4 + 1 = 45 → (101101)₂.',
            'चरण 2 (ऑक्टल): दाएं से बाएं 3-3 बिट के समूह बनाएं: 101 (5) और 101 (5) → (55)₈.',
            'चरण 3 (हेक्साडेसिमल): 4-4 बिट के समूह बनाएं: 0010 (2) और 1101 (13 = D) → (2D)₁₆.',
          ],
        },
        solution: {
          en: '(45)₁₀ = (101101)₂ = (55)₈ = (2D)₁₆.',
          pa: '(45)₁₀ = (101101)₂ = (55)₈ = (2D)₁₆.',
          hi: '(45)₁₀ = (101101)₂ = (55)₈ = (2D)₁₆.',
        },
      },
      {
        title: {
          en: 'Finding the 2’s Complement of a Binary Number',
          pa: 'ਬਾਈਨਰੀ ਸੰਖਿਆ ਦਾ 2’s Complement ਕੱਢਣਾ',
          hi: 'बाइनरी संख्या का 2’s Complement ज्ञात करना',
        },
        problem: {
          en: 'Find the 1’s complement and 2’s complement of the 8-bit binary number 10110100₂.',
          pa: '8-ਬਿੱਟ ਬਾਈਨਰੀ ਸੰਖਿਆ 10110100₂ ਦਾ 1’s complement ਅਤੇ 2’s complement ਪਤਾ ਕਰੋ।',
          hi: '8-बिट बाइनरी संख्या 10110100₂ का 1’s complement और 2’s complement ज्ञात कीजिए।',
        },
        steps: {
          en: [
            'Step 1 (1’s Complement): Invert every 1 to 0 and every 0 to 1 → 01001011₂.',
            'Step 2 (2’s Complement): Add 1 to the least significant bit of 01001011₂ → 01001011 + 1 = 01001100₂.',
          ],
          pa: [
            'ਕਦਮ 1 (1’s Complement): ਸਾਰੇ 1 ਨੂੰ 0 ਅਤੇ 0 ਨੂੰ 1 ਵਿੱਚ ਬਦਲੋ → 01001011₂.',
            'ਕਦਮ 2 (2’s Complement): ਇਸ ਵਿੱਚ 1 ਜੋੜੋ → 01001011 + 1 = 01001100₂.',
          ],
          hi: [
            'चरण 1 (1’s Complement): सभी 1 को 0 तथा 0 को 1 में बदलें → 01001011₂.',
            'चरण 2 (2’s Complement): इसमें 1 जोड़ें → 01001011 + 1 = 01001100₂.',
          ],
        },
        solution: {
          en: '1’s Complement = 01001011₂ | 2’s Complement = 01001100₂.',
          pa: '1’s Complement = 01001011₂ | 2’s Complement = 01001100₂.',
          hi: '1’s Complement = 01001011₂ | 2’s Complement = 01001100₂.',
        },
      },
    ],
    commonMisconceptions: [
      {
        misconception: {
          en: 'Cache memory is built using Dynamic RAM (DRAM).',
          pa: 'ਕੈਸ਼ੇ ਮੈਮੋਰੀ (Cache Memory) ਬਣਾਉਣ ਲਈ DRAM ਦੀ ਵਰਤੋਂ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।',
          hi: 'कैश मेमोरी (Cache Memory) का निर्माण DRAM से किया जाता है।',
        },
        correction: {
          en: 'CPU Cache Memory (L1, L2, L3) is always built using Static RAM (SRAM) made of flip-flops because SRAM does not require refreshing and offers ultra-low latency. Main system RAM is built using DRAM.',
          pa: 'ਕੈਸ਼ੇ ਮੈਮੋਰੀ ਹਮੇਸ਼ਾ ਸਟੈਟਿਕ ਰੈਮ (SRAM) ਤੋਂ ਬਣਾਈ ਜਾਂਦੀ ਹੈ ਕਿਉਂਕਿ ਇਸ ਨੂੰ ਰਿਫ੍ਰੈਸ਼ ਨਹੀਂ ਕਰਨਾ ਪੈਂਦਾ ਅਤੇ ਇਹ ਬਹੁਤ ਤੇਜ਼ ਹੁੰਦੀ ਹੈ। ਮੁੱਖ ਰੈਮ DRAM ਹੁੰਦੀ ਹੈ।',
          hi: 'कैश मेमोरी हमेशा स्टैटिक रैम (SRAM) से बनाई जाती है क्योंकि इसे रिफ्रेश करने की आवश्यकता नहीं होती और यह अत्यंत तीव्र होती है। मुख्य रैम DRAM होती है।',
        },
        whyItMatters: {
          en: 'Direct PSSSB Clerk and Patwari IT question.',
          pa: 'ਪੀ.ਐੱਸ.ਐੱਸ.ਐੱਸ.ਬੀ. ਕਲਰਕ ਅਤੇ ਪਟਵਾਰੀ ਵਿੱਚ ਸਿੱਧਾ ਪੁੱਛਿਆ ਜਾਣ ਵਾਲਾ ਪ੍ਰਸ਼ਨ।',
          hi: 'पीएसएसएसबी क्लर्क और पटवारी में सीधा पूछा जाने वाला प्रश्न।',
        },
      },
      {
        misconception: {
          en: 'The Program Counter (PC) holds the instruction currently being executed.',
          pa: 'ਪ੍ਰੋਗਰਾਮ ਕਾਊਂਟਰ (PC) ਮੌਜੂਦਾ ਚੱਲ ਰਹੀ ਹਦਾਇਤ ਨੂੰ ਰੱਖਦਾ ਹੈ।',
          hi: 'प्रोग्राम काउंटर (PC) वर्तमान में निष्पादित हो रहे निर्देश को रखता है।',
        },
        correction: {
          en: 'The Instruction Register (IR) holds the instruction currently being executed, whereas the Program Counter (PC) holds the memory address of the NEXT instruction to be executed.',
          pa: 'ਇੰਸਟ੍ਰਕਸ਼ਨ ਰਜਿਸਟਰ (IR) ਮੌਜੂਦਾ ਹਦਾਇਤ ਨੂੰ ਰੱਖਦਾ ਹੈ, ਜਦਕਿ ਪ੍ਰੋਗਰਾਮ ਕਾਊਂਟਰ (PC) ਅਗਲੀ ਚੱਲਣ ਵਾਲੀ ਹਦਾਇਤ ਦਾ ਪਤਾ (Address) ਰੱਖਦਾ ਹੈ।',
          hi: 'इंस्ट्रक्शन रजिस्टर (IR) वर्तमान निर्देश को रखता है, जबकि प्रोग्राम काउंटर (PC) अगले निष्पादित होने वाले निर्देश का पता (Address) रखता है।',
        },
        whyItMatters: {
          en: 'Classic CPU register distinction tested in computer awareness papers.',
          pa: 'ਸੀ.ਪੀ.ਯੂ. ਰਜਿਸਟਰਾਂ ਬਾਰੇ ਸਭ ਤੋਂ ਵੱਧ ਪੁੱਛਿਆ ਜਾਣ ਵਾਲਾ ਅੰਤਰ।',
          hi: 'सीपीयू रजिस्टरों से संबंधित सर्वाधिक पूछा जाने वाला अंतर।',
        },
      },
    ],
    quickRevisionSheet: {
      highYieldPoints: {
        en: [
          'Generations: 1st = Vacuum Tubes (ENIAC); 2nd = Transistors; 3rd = ICs (Jack Kilby); 4th = VLSI Microprocessors (Intel 4004); 5th = ULSI & AI (PARAM 8000).',
          'Registers: PC = Address of NEXT instruction; IR = CURRENT instruction; MAR = Memory Address; MDR = Memory Data; Accumulator = ALU results.',
          'Memory Speed: Registers > L1 Cache > L2 Cache > L3 Cache > RAM (DRAM) > SSD > HDD.',
          'ROM & Booting: BIOS stored in ROM runs POST (Power-On Self-Test); EPROM erased by UV rays; EEPROM / Flash erased electrically.',
        ],
        pa: [
          'ਪੀੜ੍ਹੀਆਂ: 1st = ਵੈਕਿਊਮ ਟਿਊਬ; 2nd = ਟ੍ਰਾਂਜ਼ਿਸਟਰ; 3rd = IC (ਜੈਕ ਕਿਲਬੀ); 4th = ਮਾਈਕ੍ਰੋਪ੍ਰੋਸੈਸਰ (Intel 4004); 5th = ULSI ਤੇ AI.',
          'ਰਜਿਸਟਰ: PC = ਅਗਲੀ ਹਦਾਇਤ ਦਾ ਪਤਾ; IR = ਮੌਜੂਦਾ ਹਦਾਇਤ; Accumulator = ALU ਦੇ ਨਤੀਜੇ।',
          'ਮੈਮੋਰੀ ਗਤੀ: ਰਜਿਸਟਰ > ਕੈਸ਼ੇ (SRAM) > ਰੈਮ (DRAM) > SSD > HDD.',
          'ROM: BIOS ਅਤੇ POST; EPROM = UV ਕਿਰਨਾਂ ਨਾਲ ਮਿਟਦੀ ਹੈ; EEPROM = ਬਿਜਲਈ ਸਿਗਨਲ ਨਾਲ।',
        ],
        hi: [
          'पीढ़ियां: 1st = वैक्यूम ट्यूब; 2nd = ट्रांजिस्टर; 3rd = IC (जैक किल्बी); 4th = माइक्रोप्रोसेसर (Intel 4004); 5th = ULSI व AI.',
          'रजिस्टर: PC = अगले निर्देश का पता; IR = वर्तमान निर्देश; Accumulator = ALU परिणाम।',
          'मेमोरी गति: रजिस्टर > कैश (SRAM) > रैम (DRAM) > SSD > HDD.',
          'ROM: BIOS एवं POST; EPROM = UV किरणों से मिटती है; EEPROM = विद्युत सिग्नल से।',
        ],
      },
      examTraps: {
        en: [
          'Trap: 1 Byte = 8 Bits = 2 Nibbles (1 Nibble = 4 Bits). Always use 1024 (2¹⁰) for binary memory conversions.',
          'Trap: MICR (Magnetic Ink Character Recognition) is used to read bank cheques (9-digit code), whereas OMR reads multiple-choice answer sheets.',
        ],
        pa: [
          'ਧੋਖਾ: 1 Byte = 8 Bits = 2 Nibbles (1 Nibble = 4 Bits)।',
          'ਧੋਖਾ: ਬੈਂਕ ਚੈੱਕਾਂ ਨੂੰ ਪੜ੍ਹਨ ਲਈ MICR (9-ਅੰਕਾਂ ਦਾ ਕੋਡ) ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।',
        ],
        hi: [
          'धोखा: 1 Byte = 8 Bits = 2 Nibbles (1 Nibble = 4 Bits)।',
          'धोखा: बैंक चेक पढ़ने के लिए MICR (9-अंकीय कोड) का प्रयोग होता है।',
        ],
      },
    },
    summary: {
      en: 'Covers the five generations of computers, Von Neumann architecture, CPU execution cycle and special registers (PC, IR, MAR, MDR, Accumulator), complete memory hierarchy (SRAM cache vs DRAM main memory, ROM/EPROM/EEPROM firmware, binary storage units), and positional number system conversions (Binary, Octal, Decimal, Hexadecimal) along with ASCII and Unicode.',
      pa: 'ਇਸ ਪਾਠ ਵਿੱਚ ਕੰਪਿਊਟਰ ਦੀਆਂ ਪੰਜ ਪੀੜ੍ਹੀਆਂ, ਵੌਨ ਨਿਊਮੈਨ ਆਰਕੀਟੈਕਚਰ, ਸੀ.ਪੀ.ਯੂ. ਰਜਿਸਟਰ (PC, IR, MAR, MDR), ਮੈਮੋਰੀ ਹਾਇਰਾਰਕੀ (SRAM, DRAM, ROM, EPROM, EEPROM), ਮੈਮੋਰੀ ਇਕਾਈਆਂ ਅਤੇ ਨੰਬਰ ਸਿਸਟਮ (ਬਾਈਨਰੀ, ਔਕਟਲ, ਡੈਸੀਮਲ, ਹੈਕਸਾਡੈਸੀਮਲ) ਦਾ ਵਿਸਤ੍ਰਿਤ ਅਧਿਐਨ ਕੀਤਾ ਗਿਆ ਹੈ।',
      hi: 'इस पाठ में कंप्यूटर की पांच पीढ़ियों, वॉन न्यूमैन आर्किटेक्चर, सीपीयू रजिस्टरों (PC, IR, MAR, MDR), मेमोरी पदानुक्रम (SRAM, DRAM, ROM, EPROM, EEPROM), मेमोरी इकाइयों तथा संख्या प्रणाली (बाइनरी, ऑक्टल, डेसिमल, हेक्साडेसिमल) का विस्तृत अध्ययन किया गया है।',
    },
    keyNotes: {
      en: [
        '📌 CPU Registers (PC, IR, MAR, MDR, AC) are the fastest memory; Cache Memory uses SRAM.',
        '📌 Program Counter (PC) stores the address of the NEXT instruction; Instruction Register (IR) stores the CURRENT instruction.',
        '📌 1 Nibble = 4 Bits; 1 Byte = 8 Bits; 1 KB = 1024 Bytes; 1 GB = 2³⁰ Bytes.',
        '📌 Hexadecimal (Base-16) uses 0–9 and A–F (4 bits per digit); Octal (Base-8) uses 0–7 (3 bits per digit).',
      ],
      pa: [
        '📌 ਸੀ.ਪੀ.ਯੂ. ਰਜਿਸਟਰ ਸਭ ਤੋਂ ਤੇਜ਼ ਮੈਮੋਰੀ ਹਨ; ਕੈਸ਼ੇ ਮੈਮੋਰੀ ਵਿੱਚ SRAM ਵਰਤੀ ਜਾਂਦੀ ਹੈ।',
        '📌 Program Counter (PC) ਅਗਲੀ ਹਦਾਇਤ ਦਾ ਪਤਾ ਰੱਖਦਾ ਹੈ ਅਤੇ IR ਮੌਜੂਦਾ ਹਦਾਇਤ ਰੱਖਦਾ ਹੈ।',
        '📌 1 Nibble = 4 Bits; 1 Byte = 8 Bits; 1 KB = 1024 Bytes; 1 GB = 2³⁰ Bytes.',
        '📌 ਹੈਕਸਾਡੈਸੀਮਲ (Base-16) ਵਿੱਚ 0–9 ਅਤੇ A–F (4-ਬਿੱਟ) ਹੁੰਦੇ ਹਨ; ਔਕਟਲ (Base-8) ਵਿੱਚ 0–7 (3-ਬਿੱਟ) ਹੁੰਦੇ ਹਨ।',
      ],
      hi: [
        '📌 सीपीयू रजिस्टर सबसे तेज़ मेमोरी हैं; कैश मेमोरी में SRAM का उपयोग होता है।',
        '📌 Program Counter (PC) अगले निर्देश का पता रखता है और IR वर्तमान निर्देश रखता है।',
        '📌 1 Nibble = 4 Bits; 1 Byte = 8 Bits; 1 KB = 1024 Bytes; 1 GB = 2³⁰ Bytes.',
        '📌 हेक्साडेसिमल (Base-16) में 0–9 व A–F (4-बिट) होते हैं; ऑक्टल (Base-8) में 0–7 (3-बिट) होते हैं।',
      ],
    },
    flashcards: [
      {
        id: 'fc-cch-1',
        q: {
          en: 'Which CPU register holds the memory address of the NEXT instruction to be fetched and executed?',
          pa: 'ਕਿਹੜਾ ਸੀ.ਪੀ.ਯੂ. ਰਜਿਸਟਰ ਅਗਲੀ ਚੱਲਣ ਵਾਲੀ ਹਦਾਇਤ (Next Instruction) ਦਾ ਮੈਮੋਰੀ ਪਤਾ ਰੱਖਦਾ ਹੈ?',
          hi: 'कौन-सा सीपीयू रजिस्टर निष्पादित होने वाले अगले निर्देश (Next Instruction) का मेमोरी पता रखता है?',
        },
        a: {
          en: 'Program Counter (PC).',
          pa: 'ਪ੍ਰੋਗਰਾਮ ਕਾਊਂਟਰ (Program Counter - PC)।',
          hi: 'प्रोग्राम काउंटर (Program Counter - PC)।',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-cch-2',
        q: {
          en: 'Which type of RAM is used to construct CPU Cache Memory (L1, L2, L3) and does not require periodic refreshing?',
          pa: 'ਸੀ.ਪੀ.ਯੂ. ਕੈਸ਼ੇ ਮੈਮੋਰੀ ਬਣਾਉਣ ਲਈ ਕਿਸ ਕਿਸਮ ਦੀ ਰੈਮ ਵਰਤੀ ਜਾਂਦੀ ਹੈ ਜਿਸ ਨੂੰ ਵਾਰ-ਵਾਰ ਰਿਫ੍ਰੈਸ਼ ਨਹੀਂ ਕਰਨਾ ਪੈਂਦਾ?',
          hi: 'सीपीयू कैश मेमोरी बनाने के लिए किस प्रकार की रैम का उपयोग किया जाता है जिसे बार-बार रिफ्रेश नहीं करना पड़ता?',
        },
        a: {
          en: 'SRAM (Static Random Access Memory, built using flip-flops).',
          pa: 'SRAM (ਸਟੈਟਿਕ ਰੈਮ, ਜੋ ਫਲਿੱਪ-ਫਲੌਪ ਤੋਂ ਬਣਦੀ ਹੈ)।',
          hi: 'SRAM (स्टैटिक रैम, जो फ्लिप-फ्लॉप से बनती है)।',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-cch-3',
        q: {
          en: 'What is the Binary and Hexadecimal equivalent of the Decimal number 45?',
          pa: 'ਡੈਸੀਮਲ ਸੰਖਿਆ 45 ਦਾ ਬਾਈਨਰੀ ਅਤੇ ਹੈਕਸਾਡੈਸੀਮਲ ਰੂਪ ਕੀ ਹੈ?',
          hi: 'दशमलव संख्या 45 का बाइनरी और हेक्साडेसिमल मान क्या है?',
        },
        a: {
          en: 'Binary: (101101)₂ and Hexadecimal: (2D)₁₆.',
          pa: 'ਬਾਈਨਰੀ: (101101)₂ ਅਤੇ ਹੈਕਸਾਡੈਸੀਮਲ: (2D)₁₆.',
          hi: 'बाइनरी: (101101)₂ और हेक्साडेसिमल: (2D)₁₆.',
        },
        difficulty: 'medium',
      },
      {
        id: 'fc-cch-4',
        q: {
          en: 'Which diagnostic test is executed by the BIOS stored in ROM immediately when a computer is powered on?',
          pa: 'ਕੰਪਿਊਟਰ ਚਾਲੂ ਕਰਨ ਸਮੇਂ ROM ਵਿੱਚ ਮੌਜੂਦ BIOS ਵੱਲੋਂ ਕਿਹੜਾ ਟੈਸਟ ਚਲਾਇਆ ਜਾਂਦਾ ਹੈ?',
          hi: 'कंप्यूटर चालू करते ही ROM में स्थित BIOS द्वारा कौन-सा जांच परीक्षण चलाया जाता है?',
        },
        a: {
          en: 'POST (Power-On Self-Test).',
          pa: 'POST (Power-On Self-Test)।',
          hi: 'POST (Power-On Self-Test)।',
        },
        difficulty: 'easy',
      },
    ],
    videos: [
      {
        title: 'Computer Hardware, CPU Registers, Memory Hierarchy & Number Systems | PSSSB Clerk',
        channel: 'NIOS / NCERT Computer Science Archive',
        url: 'https://www.youtube.com/results?search_query=Computer+Architecture+Memory+Hierarchy+Number+System+PSSSB+Clerk',
        language: 'Punjabi / English / Hindi',
      },
    ],
    bookRefs: [
      {
        title: 'Computer Science (Course 330 — Senior Secondary)',
        author: 'National Institute of Open Schooling (NIOS)',
        chapters: 'Lessons 1–3: Anatomy of a Digital Computer, Binary Logic & Memory Organization',
        type: 'ncert',
      },
    ],
    syllabusReference: {
      title: 'PSSSB Clerk & Patwari Official Information Technology Syllabus',
      url: 'https://sssb.punjab.gov.in/',
      body: 'Punjab Subordinate Services Selection Board (PSSSB)',
      verifiedOn: '2026-10-10',
    },
  },

  // ==========================================================================
  // TOPIC 2: MS OFFICE SUITE MASTERY — MS WORD, MS EXCEL FORMULAS & POWERPOINT
  // ==========================================================================
  'clerk-ms-office-mastery': {
    id: 'clerk-ms-office-mastery',
    topicId: 'clerk-ms-office-mastery',
    subjectId: 'clerk-special',
    category: 'clerk',
    coverageStatus: 'complete',
    editorialStatus: 'authored',
    title: {
      en: 'MS Office Mastery: MS Word, MS Excel Formulas ($A$1, VLOOKUP, IF) & MS PowerPoint',
      pa: 'ਐਮ.ਐਸ. ਆਫਿਸ ਮਾਸਟਰੀ: MS Word, MS Excel ਫਾਰਮੂਲੇ ($A$1, VLOOKUP, IF) ਅਤੇ MS PowerPoint',
      hi: 'एमएस ऑफिस मास्टरी: MS Word, MS Excel सूत्र ($A$1, VLOOKUP, IF) एवं MS PowerPoint',
    },
    examRelevance: 'PSSSB Clerk (5–6 Qs), Punjab Patwari (5–6 Qs), Senior Assistant & Police IT',
    estimatedTime: '50 mins',
    prerequisites: {
      en: [
        'Familiarity with Windows GUI conventions and standard keyboard layout (Function keys F1–F12, Ctrl, Alt, Shift).',
      ],
      pa: [
        'ਵਿੰਡੋਜ਼ ਅਤੇ ਕੀਬੋਰਡ ਦੀਆਂ ਫੰਕਸ਼ਨ ਕੁੰਜੀਆਂ (F1 ਤੋਂ F12, Ctrl, Alt, Shift) ਦੀ ਮੁੱਢਲੀ ਜਾਣਕਾਰੀ।',
      ],
      hi: [
        'विंडोज़ और कीबोर्ड की फंक्शन कुंजियों (F1 से F12, Ctrl, Alt, Shift) की बुनियादी जानकारी।',
      ],
    },
    learningObjectives: {
      en: [
        'Master MS Word formatting, page layout (Margins, Gutter, Orientation, Drop Cap, Mail Merge), file extensions (.docx, .dotx), and keyboard shortcuts.',
        'Evaluate MS Excel formulas (`SUM`, `AVERAGE`, `COUNT`, `COUNTA`, `COUNTBLANK`, `COUNTIF`, `IF`, `VLOOKUP`, `MOD`, `LEN`), cell referencing (`A1` vs `$A$1` via F4), and error codes (`#VALUE!`, `#NAME?`, `#DIV/0!`, `#REF!`, `#####`).',
        'Distinguish MS PowerPoint views (Slide Sorter, Master View, Notes Page), transitions vs animations, and presentation shortcuts (F5, Shift+F5, Ctrl+M vs Ctrl+N).',
      ],
      pa: [
        'MS Word ਵਿੱਚ ਫਾਰਮੈਟਿੰਗ, ਪੇਜ ਸੈੱਟਅੱਪ (ਗਟਰ ਮਾਰਜਿਨ, ਡ੍ਰੌਪ ਕੈਪ, ਮੇਲ ਮਰਜ), ਫਾਈਲ ਐਕਸਟੈਂਸ਼ਨਾਂ (.docx) ਅਤੇ ਸ਼ਾਰਟਕੱਟ ਕੁੰਜੀਆਂ ਨੂੰ ਸਮਝਣਾ।',
        'MS Excel ਵਿੱਚ ਸੈੱਲ ਰੈਫਰੈਂਸਿੰਗ (`A1` ਬਨਾਮ `$A$1` - F4 ਕੁੰਜੀ), ਫਾਰਮੂਲੇ (`SUM`, `IF`, `COUNT`, `COUNTA`, `COUNTIF`, `VLOOKUP`) ਅਤੇ ਐਰਰ ਕੋਡਾਂ (`#VALUE!`, `#DIV/0!`) ਨੂੰ ਹੱਲ ਕਰਨਾ।',
        'MS PowerPoint ਦੇ ਵਿਊਜ਼ (Slide Sorter, Slide Master), ਟ੍ਰਾਂਜ਼ੀਸ਼ਨ ਤੇ ਐਨੀਮੇਸ਼ਨ ਅਤੇ ਸ਼ਾਰਟਕੱਟ (F5, Shift+F5, Ctrl+M) ਨੂੰ ਜਾਣਨਾ।',
      ],
      hi: [
        'MS Word में फॉर्मेटिंग, पेज लेआउट (गटर मार्जिन, ड्रॉप कैप, मेल मर्ज), फाइल एक्सटेंशन (.docx) और शॉर्टकट कुंजियों को समझना।',
        'MS Excel में सेल रेफरेंसिंग (`A1` बनाम `$A$1` - F4 कुंजी), प्रमुख सूत्रों (`SUM`, `IF`, `COUNT`, `COUNTA`, `COUNTIF`, `VLOOKUP`) और त्रुटि कोड (`#VALUE!`, `#DIV/0!`) को हल करना।',
        'MS PowerPoint के व्यू (Slide Sorter, Slide Master), ट्रांजिशन व एनीमेशन तथा शॉर्टकट (F5, Shift+F5, Ctrl+M) का अध्ययन करना।',
      ],
    },
    content: {
      en: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">📝 1. Microsoft Word: Document Architecture, Features & Shortcuts</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>File Extensions & Zoom Bounds:</strong> Default extension (Word 2007+): <strong>.docx</strong> (Macro-enabled: <strong>.docm</strong>; Template: <strong>.dotx</strong>; pre-2007: <strong>.doc</strong>). Default font: <strong>Calibri (11 pt)</strong>. <strong>Zoom Range: Minimum 10% to Maximum 500%</strong>. Font size dropdown list: <strong>8 pt to 72 pt</strong> (manual entry allowed from <strong>1 to 1638 pt</strong>).</li>
              <li><strong>Page Setup & High-Yield Features:</strong>
                <br/>• <strong>Gutter Margin:</strong> Extra space added to the <strong>Left or Top margin</strong> specifically for <strong>book binding</strong> so text is not obscured. (Positions: <em>Left</em> and <em>Top</em> only).
                <br/>• <strong>Drop Cap (Insert Tab):</strong> Enlarges the first capital letter of a paragraph; default lines dropped = <strong>3 lines</strong>; maximum lines dropped = <strong>10 lines</strong>.
                <br/>• <strong>Mail Merge (Mailings Tab):</strong> Combines a <strong>Main Document</strong> (letter/envelope) with a <strong>Data Source</strong> (Excel/Access recipient list) to generate personalized bulk letters/labels.
                <br/>• <strong>Header & Footer (Insert Tab):</strong> Printed in the top/bottom margins of every page (Shortcut to link/unlink or edit). <strong>Watermark, Page Color, Page Borders</strong> are under the <strong>Design Tab</strong>.
              </li>
              <li><strong>Essential MS Word Keyboard Shortcuts:</strong>
                <br/>• <strong>F7:</strong> Spelling & Grammar Check | <strong>Shift + F7:</strong> Thesaurus (Synonyms/Antonyms) | <strong>F12:</strong> Save As dialog box.
                <br/>• <strong>Ctrl + E:</strong> Center Align | <strong>Ctrl + J:</strong> Justify Align | <strong>Ctrl + L / R:</strong> Left / Right Align.
                <br/>• <strong>Ctrl + M:</strong> Increase Paragraph Indent | <strong>Ctrl + T:</strong> Hanging Indent.
                <br/>• <strong>Ctrl + = :</strong> Subscript ($\text{H}_2\text{O}$) | <strong>Ctrl + Shift + + :</strong> Superscript ($x^2$).
                <br/>• <strong>Ctrl + K:</strong> Insert Hyperlink | <strong>Ctrl + H:</strong> Find & Replace | <strong>Ctrl + Enter:</strong> Hard Page Break | <strong>Ctrl + Shift + Enter:</strong> Column Break.
                <br/>• <strong>Ctrl + [ / Ctrl + ]:</strong> Decrease / Increase font size by exactly <strong>1 point</strong>.
              </li>
            </ul>
          </div>

          <div class="bg-emerald-950/50 border border-emerald-500/30 p-5 rounded-xl">
            <h4 class="text-emerald-300 font-bold text-base mb-2">📊 2. Microsoft Excel: Grid Limits, Cell Referencing ($A$1) & Formulas</h4>
            <ul class="text-xs text-slate-300 space-y-2 list-disc pl-5">
              <li><strong>Worksheet Specifications (Excel 2007–2021 / 365):</strong>
                <br/>• Extension: <strong>.xlsx</strong> (Macro: <strong>.xlsm</strong>; Template: <strong>.xltx</strong>) | <strong>Zoom Range: 10% to 400%</strong>.
                <br/>• <strong>Total Rows:</strong> <strong>1,048,576</strong> ($2^{20}$) | <strong>Total Columns:</strong> <strong>16,384</strong> ($2^{14}$, labeled from <strong>A to XFD</strong>).
                <br/>• Every Excel formula <strong>MUST begin with an Equal sign (<code>=</code>)</strong>. In a cell, <strong>Numbers align Right by default</strong>, <strong>Text aligns Left by default</strong>, and <strong>Booleans (<code>TRUE</code>/<code>FALSE</code>) align Center</strong>.
              </li>
              <li><strong>Three Types of Cell Referencing (Toggled using the <code>F4</code> Key):</strong>
                <br/>1. <strong>Relative Reference (<code>A1</code>):</strong> Both column and row change automatically when copied to another cell.
                <br/>2. <strong>Absolute Reference (<code>$A$1</code>):</strong> Neither column nor row changes when copied/dragged (both locked with <code>$</code>).
                <br/>3. <strong>Mixed Reference (<code>$A1</code> or <code>A$1</code>):</strong> Either only the column (<code>$A1</code>) or only the row (<code>A$1</code>) is locked.
                <br/>• Cross-sheet reference syntax: <code>=Sheet2!B5</code>.
              </li>
              <li><strong>High-Frequency Excel Functions Tested in PSSSB Clerk:</strong>
                <br/>• <code>=SUM(A1:A5)</code> adds all numbers in range; <code>=AVERAGE(A1:A5)</code> computes arithmetic mean.
                <br/>• <code>=COUNT(range)</code> counts cells containing <strong>ONLY numeric values</strong> (and dates).
                <br/>• <code>=COUNTA(range)</code> counts <strong>all non-empty cells</strong> (numbers, text, booleans).
                <br/>• <code>=COUNTBLANK(range)</code> counts empty cells; <code>=COUNTIF(range, criteria)</code> counts cells matching a condition (e.g., <code>=COUNTIF(B2:B20, "&gt;=60")</code>).
                <br/>• <code>=IF(logical_test, value_if_true, value_if_false)</code> — e.g., <code>=IF(A1&gt;=40, "Pass", "Fail")</code>.
                <br/>• <code>=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])</code> — Vertical lookup across the leftmost column of a table (<code>FALSE</code> or <code>0</code> = Exact Match; <code>TRUE</code> or <code>1</code> = Approximate Match).
                <br/>• <code>=MOD(17, 5)</code> returns the remainder (<strong>2</strong>); <code>=ROUND(14.567, 2)</code> returns <strong>14.57</strong>; <code>=LEN("Punjab")</code> returns character count (<strong>6</strong>); <code>=CONCATENATE(A1, B1)</code> or <code>&amp;</code> joins strings; <code>=NOW()</code> returns current date &amp; time; <code>=TODAY()</code> returns current date only.
              </li>
              <li><strong>Excel Error Codes & Shortcuts:</strong>
                <br/>• <code>#####</code>: Column is not wide enough to display the number, or negative date/time.
                <br/>• <code>#DIV/0!</code>: Division by zero or empty cell | <code>#VALUE!</code>: Wrong data type (e.g., adding text <code>"ABC" + 5</code>).
                <br/>• <code>#NAME?</code>: Misspelled function name (e.g., <code>=SUME(A1:A5)</code>) | <code>#REF!</code>: Referenced cell was deleted | <code>#N/A</code>: Lookup value not found by VLOOKUP.
                <br/>• <em>Excel Shortcuts:</em> <strong>F2:</strong> Edit active cell | <strong>Alt + = :</strong> AutoSum | <strong>Alt + Enter:</strong> New line inside the SAME cell | <strong>Ctrl + ; :</strong> Insert current Date | <strong>Ctrl + Shift + : :</strong> Insert current Time | <strong>Shift + F11:</strong> Insert new Worksheet | <strong>Ctrl + Space:</strong> Select entire Column | <strong>Shift + Space:</strong> Select entire Row.
              </li>
            </ul>
          </div>

          <div class="bg-amber-950/50 border border-amber-500/30 p-5 rounded-xl">
            <h4 class="text-amber-300 font-bold text-base mb-2">📽️ 3. Microsoft PowerPoint: Views, Slide Master & Shortcuts</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>Extension & Zoom:</strong> Default extension: <strong>.pptx</strong> (Slide Show file: <strong>.ppsx</strong>). <strong>Zoom Range: 10% to 400%</strong>.</li>
              <li><strong>Ctrl + M vs Ctrl + N (Classic Exam Trap!):</strong> In PowerPoint, <strong>Ctrl + M</strong> inserts a <strong>New Slide</strong> into the current presentation, whereas <strong>Ctrl + N</strong> creates a <strong>New Blank Presentation file</strong>.</li>
              <li><strong>Slide Show Shortcuts:</strong> <strong>F5:</strong> Start Slide Show from the <strong>First Slide (Beginning)</strong> | <strong>Shift + F5:</strong> Start Slide Show from the <strong>Current Slide</strong> | <strong>Esc:</strong> Exit Slide Show | <strong>B / W:</strong> Turn screen Black / White during presentation.</li>
              <li><strong>PowerPoint Views:</strong>
                <br/>• <strong>Normal View:</strong> Default main editing view | <strong>Slide Sorter View:</strong> Displays thumbnail miniatures of all slides to easily reorder/rearrange them.
                <br/>• <strong>Slide Master View (View Tab):</strong> Applies universal logos, fonts, and backgrounds across all slides simultaneously.
              </li>
              <li><strong>Transitions vs Animations:</strong> <strong>Slide Transitions</strong> are visual movements applied when moving from <em>one slide to the next slide</em>; <strong>Animations</strong> are visual effects applied to <em>individual objects/text/charts on a single slide</em>.</li>
            </ul>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">📝 1. ਮਾਈਕ੍ਰੋਸਾਫਟ ਵਰਡ (MS Word): ਫਾਰਮੈਟਿੰਗ ਅਤੇ ਸ਼ਾਰਟਕੱਟ</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਐਕਸਟੈਂਸ਼ਨ ਅਤੇ ਜ਼ੂਮ ਸੀਮਾ:</strong> ਡਿਫਾਲਟ ਐਕਸਟੈਂਸ਼ਨ: <strong>.docx</strong> (ਟੈਂਪਲੇਟ: <strong>.dotx</strong>)। <strong>ਜ਼ੂਮ ਸੀਮਾ (Zoom): ਘੱਟੋ-ਘੱਟ 10% ਤੋਂ ਵੱਧ ਤੋਂ ਵੱਧ 500%</strong>।</li>
              <li><strong>ਪ੍ਰਮੁੱਖ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ:</strong>
                <br/>• <strong>ਗਟਰ ਮਾਰਜਿਨ (Gutter Margin):</strong> ਬਾਈਂਡਿੰਗ (Binding) ਲਈ ਖੱਬੇ (Left) ਜਾਂ ਉੱਪਰ (Top) ਛੱਡੀ ਜਾਣ ਵਾਲੀ ਵਾਧੂ ਥਾਂ।
                <br/>• <strong>ਡ੍ਰੌਪ ਕੈਪ (Drop Cap):</strong> ਪੈਰੇ ਦੇ ਪਹਿਲੇ ਅੱਖਰ ਨੂੰ ਵੱਡਾ ਕਰਨਾ (ਡਿਫਾਲਟ: <strong>3 ਲਾਈਨਾਂ</strong>, ਵੱਧ ਤੋਂ ਵੱਧ: <strong>10 ਲਾਈਨਾਂ</strong>)।
                <br/>• <strong>ਮੇਲ ਮਰਜ (Mail Merge):</strong> ਇੱਕੋ ਚਿੱਠੀ ਨੂੰ ਕਈ ਲੋਕਾਂ ਦੇ ਪਤਿਆਂ (Data Source) ਨਾਲ ਜੋੜ ਕੇ ਭੇਜਣਾ।
              </li>
              <li><strong>ਪ੍ਰਮੁੱਖ ਸ਼ਾਰਟਕੱਟ ਕੁੰਜੀਆਂ:</strong> <strong>F7:</strong> ਸਪੈਲਿੰਗ ਚੈੱਕ | <strong>Shift + F7:</strong> ਥੀਸਾਰਸ (ਸਮਾਨਾਰਥੀ ਸ਼ਬਦ) | <strong>F12:</strong> Save As | <strong>Ctrl + E:</strong> ਸੈਂਟਰ ਅਲਾਈਨ | <strong>Ctrl + J:</strong> ਜਸਟੀਫਾਈ | <strong>Ctrl + K:</strong> ਹਾਈਪਰਲਿੰਕ | <strong>Ctrl + H:</strong> Find & Replace | <strong>Ctrl + = :</strong> ਸਬਸਕ੍ਰਿਪਟ ($\text{H}_2\text{O}$) | <strong>Ctrl + Shift + + :</strong> ਸੁਪਰਸਕ੍ਰਿਪਟ ($x^2$) | <strong>Ctrl + Enter:</strong> ਪੇਜ ਬ੍ਰੇਕ।</li>
            </ul>
          </div>

          <div class="bg-emerald-950/50 border border-emerald-500/30 p-5 rounded-xl">
            <h4 class="text-emerald-300 font-bold text-base mb-2">📊 2. ਮਾਈਕ੍ਰੋਸਾਫਟ ਐਕਸਲ (MS Excel): ਸੈੱਲ ਰੈਫਰੈਂਸਿੰਗ ($A$1) ਅਤੇ ਫਾਰਮੂਲੇ</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਵਰਕਸ਼ੀਟ ਸੀਮਾਵਾਂ:</strong> ਐਕਸਟੈਂਸ਼ਨ: <strong>.xlsx</strong> | <strong>ਜ਼ੂਮ ਸੀਮਾ: 10% ਤੋਂ 400%</strong> | ਕੁੱਲ ਕਤਾਰਾਂ (Rows): <strong>10,48,576</strong> | ਕੁੱਲ ਕਾਲਮ (Columns): <strong>16,384 (A ਤੋਂ XFD ਤੱਕ)</strong>। ਹਰ ਫਾਰਮੂਲਾ <strong>ਬਰਾਬਰ (<code>=</code>)</strong> ਦੇ ਨਿਸ਼ਾਨ ਨਾਲ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ।</li>
              <li><strong>ਸੈੱਲ ਰੈਫਰੈਂਸਿੰਗ (F4 ਕੁੰਜੀ ਨਾਲ ਬਦਲਿਆ ਜਾਂਦਾ ਹੈ):</strong>
                <br/>• <strong>Relative Reference (<code>A1</code>):</strong> ਕਾਪੀ ਕਰਨ 'ਤੇ ਬਦਲ ਜਾਂਦਾ ਹੈ।
                <br/>• <strong>Absolute Reference (<code>$A$1</code>):</strong> ਕਾਲਮ ਅਤੇ ਰੋਅ ਦੋਵੇਂ ਲਾਕ (Freeze) ਰਹਿੰਦੇ ਹਨ।
                <br/>• <strong>Mixed Reference (<code>$A1</code> ਜਾਂ <code>A$1</code>):</strong> ਕੇਵਲ ਇੱਕ ਹਿੱਸਾ ਲਾਕ ਰਹਿੰਦਾ ਹੈ।
              </li>
              <li><strong>ਪ੍ਰਮੁੱਖ ਫਾਰਮੂਲੇ ਅਤੇ ਐਰਰ ਕੋਡ:</strong>
                <br/>• <code>=COUNT()</code> ਕੇਵਲ ਅੰਕਾਂ ਵਾਲੇ ਸੈੱਲ ਗਿਣਦਾ ਹੈ; <code>=COUNTA()</code> ਸਾਰੇ ਭਰੇ ਹੋਏ ਸੈੱਲ (ਅੰਕ + ਟੈਕਸਟ) ਗਿਣਦਾ ਹੈ।
                <br/>• <code>=IF(A1&gt;=40, "Pass", "Fail")</code> ਸ਼ਰਤ ਦੀ ਜਾਂਚ ਕਰਦਾ ਹੈ; <code>=VLOOKUP()</code> ਖੱਬੇ ਕਾਲਮ ਵਿੱਚੋਂ ਡੇਟਾ ਲੱਭਦਾ ਹੈ।
                <br/>• <strong>ਐਰਰ ਕੋਡ:</strong> <code>#####</code> (ਕਾਲਮ ਦੀ ਚੌੜਾਈ ਘੱਟ ਹੋਣਾ), <code>#DIV/0!</code> (ਜ਼ੀਰੋ ਨਾਲ ਭਾਗ), <code>#NAME?</code> (ਫਾਰਮੂਲੇ ਦੇ ਸਪੈਲਿੰਗ ਗ਼ਲਤ), <code>#VALUE!</code> (ਗ਼ਲਤ ਡੇਟਾ ਕਿਸਮ)।
                <br/>• <strong>ਸ਼ਾਰਟਕੱਟ:</strong> <strong>F2:</strong> ਸੈੱਲ ਐਡਿਟ ਕਰਨਾ | <strong>Alt + Enter:</strong> ਇੱਕੋ ਸੈੱਲ ਦੇ ਅੰਦਰ ਨਵੀਂ ਲਾਈਨ | <strong>Ctrl + ; :</strong> ਅੱਜ ਦੀ ਮਿਤੀ | <strong>Shift + F11:</strong> ਨਵੀਂ ਵਰਕਸ਼ੀਟ।
              </li>
            </ul>
          </div>

          <div class="bg-amber-950/50 border border-amber-500/30 p-5 rounded-xl">
            <h4 class="text-amber-300 font-bold text-base mb-2">📽️ 3. ਮਾਈਕ੍ਰੋਸਾਫਟ ਪਾਵਰਪੁਆਇੰਟ (MS PowerPoint)</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਐਕਸਟੈਂਸ਼ਨ:</strong> <strong>.pptx</strong> | <strong>ਜ਼ੂਮ ਸੀਮਾ: 10% ਤੋਂ 400%</strong>।</li>
              <li><strong>Ctrl + M ਬਨਾਮ Ctrl + N:</strong> <strong>Ctrl + M</strong> ਨਾਲ <strong>ਨਵੀਂ ਸਲਾਈਡ (New Slide)</strong> ਜੁੜਦੀ ਹੈ, ਜਦਕਿ <strong>Ctrl + N</strong> ਨਾਲ ਨਵੀਂ ਪ੍ਰੈਜ਼ੈਂਟੇਸ਼ਨ ਫਾਈਲ ਖੁੱਲ੍ਹਦੀ ਹੈ।</li>
              <li><strong>F5:</strong> ਪਹਿਲੀ ਸਲਾਈਡ ਤੋਂ ਸ਼ੋਅ ਸ਼ੁਰੂ ਕਰਨਾ | <strong>Shift + F5:</strong> ਮੌਜੂਦਾ ਸਲਾਈਡ (Current Slide) ਤੋਂ ਸ਼ੋਅ ਸ਼ੁਰੂ ਕਰਨਾ। ਸਾਰੀਆਂ ਸਲਾਈਡਾਂ ਉੱਤੇ ਇੱਕੋ ਲੋਗੋ/ਡਿਜ਼ਾਈਨ ਲਗਾਉਣ ਲਈ <strong>Slide Master</strong> ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।</li>
            </ul>
          </div>
        </div>
      `,
      hi: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">📝 1. माइक्रोसॉफ्ट वर्ड (MS Word): फॉर्मेटिंग एवं शॉर्टकट</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>एक्सटेंशन एवं ज़ूम सीमा:</strong> डिफ़ॉल्ट एक्सटेंशन: <strong>.docx</strong> (टेम्पलेट: <strong>.dotx</strong>)। <strong>ज़ूम सीमा: न्यूनतम 10% से अधिकतम 500%</strong>।</li>
              <li><strong>प्रमुख विशेषताएं:</strong> <strong>गटर मार्जिन (Gutter Margin):</strong> बाइंडिंग हेतु बाएं (Left) या ऊपर (Top) छोड़ा गया अतिरिक्त स्थान। <strong>ड्रॉप कैप (Drop Cap):</strong> पैराग्राफ के पहले अक्षर को बड़ा करना (डिफ़ॉल्ट: <strong>3 लाइनें</strong>, अधिकतम: <strong>10 लाइनें</strong>)। <strong>मेल मर्ज (Mail Merge):</strong> एक ही पत्र को अनेक प्राप्तकर्ताओं के पतों से जोड़कर भेजना।</li>
              <li><strong>शॉर्टकट:</strong> <strong>F7:</strong> स्पेल चेक | <strong>Shift + F7:</strong> थिसॉरस | <strong>F12:</strong> Save As | <strong>Ctrl + E:</strong> सेंटर | <strong>Ctrl + J:</strong> जस्टिफाई | <strong>Ctrl + K:</strong> हाइपरलिंक | <strong>Ctrl + H:</strong> Find & Replace | <strong>Ctrl + = :</strong> सबस्क्रिप्ट | <strong>Ctrl + Shift + + :</strong> सुपरस्क्रिप्ट।</li>
            </ul>
          </div>

          <div class="bg-emerald-950/50 border border-emerald-500/30 p-5 rounded-xl">
            <h4 class="text-emerald-300 font-bold text-base mb-2">📊 2. माइक्रोसॉफ्ट एक्सेल (MS Excel): सेल रेफरेंसिंग ($A$1) एवं सूत्र</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>वर्कशीट सीमाएं:</strong> एक्सटेंशन: <strong>.xlsx</strong> | <strong>ज़ूम सीमा: 10% से 400%</strong> | कुल पंक्तियां (Rows): <strong>10,48,576</strong> | कुल कॉलम: <strong>16,384 (A से XFD तक)</strong>। प्रत्येक सूत्र <strong>बराबर (<code>=</code>)</strong> चिह्न से शुरू होता है।</li>
              <li><strong>सेल रेफरेंसिंग (F4 कुंजी से टॉगल):</strong> <strong>Relative (<code>A1</code>)</strong>, <strong>Absolute (<code>$A$1</code> — कॉलम व पंक्ति दोनों लॉक)</strong>, तथा <strong>Mixed (<code>$A1</code> या <code>A$1</code>)</strong>।</li>
              <li><strong>प्रमुख सूत्र एवं त्रुटि कोड:</strong> <code>=COUNT()</code> केवल संख्यात्मक सेल गिनता है; <code>=COUNTA()</code> सभी गैर-रिक्त सेल गिनता है। <strong>त्रुटि कोड:</strong> <code>#####</code> (कॉलम चौड़ाई कम होना), <code>#DIV/0!</code> (शून्य से भाग), <code>#NAME?</code> (सूत्र के स्पेलिंग गलत), <code>#VALUE!</code> (गलत डेटा प्रकार)। <strong>शॉर्टकट:</strong> <strong>F2</strong> (सेल संपादन), <strong>Alt + Enter</strong> (एक ही सेल में नई लाइन), <strong>Ctrl + ;</strong> (वर्तमान दिनांक), <strong>Shift + F11</strong> (नई वर्कशीट)।</li>
            </ul>
          </div>

          <div class="bg-amber-950/50 border border-amber-500/30 p-5 rounded-xl">
            <h4 class="text-amber-300 font-bold text-base mb-2">📽️ 3. माइक्रोसॉफ्ट पावरपॉइंट (MS PowerPoint)</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>एक्सटेंशन:</strong> <strong>.pptx</strong> | <strong>ज़ूम सीमा: 10% से 400%</strong>।</li>
              <li><strong>Ctrl + M बनाम Ctrl + N:</strong> <strong>Ctrl + M</strong> से <strong>नई स्लाइड (New Slide)</strong> जुड़ती है, जबकि <strong>Ctrl + N</strong> से नई प्रेजेंटेशन फाइल खुलती है।</li>
              <li><strong>F5:</strong> प्रथम स्लाइड से शो शुरू करना | <strong>Shift + F5:</strong> वर्तमान स्लाइड (Current Slide) से शो शुरू करना। सभी स्लाइडों पर एक समान लोगो/फॉन्ट लगाने हेतु <strong>Slide Master</strong> का प्रयोग होता है।</li>
            </ul>
          </div>
        </div>
      `,
    },
    workedExamples: [
      {
        title: {
          en: 'Evaluating COUNT vs COUNTA vs COUNTIF in MS Excel',
          pa: 'MS Excel ਵਿੱਚ COUNT, COUNTA ਅਤੇ COUNTIF ਦੀ ਗਣਨਾ',
          hi: 'MS Excel में COUNT, COUNTA और COUNTIF की गणना',
        },
        problem: {
          en: 'Suppose cells A1 to A5 contain: A1 = 10, A2 = "Pass", A3 = 25, A4 = (Blank), A5 = 40. What will be the output of: (1) =COUNT(A1:A5), (2) =COUNTA(A1:A5), (3) =COUNTBLANK(A1:A5), and (4) =COUNTIF(A1:A5, ">20")?',
          pa: 'ਮੰਨ ਲਓ ਸੈੱਲ A1 ਤੋਂ A5 ਵਿੱਚ: A1 = 10, A2 = "Pass", A3 = 25, A4 = (ਖਾਲੀ), A5 = 40 ਹਨ। ਹੇਠ ਲਿਖਿਆਂ ਦਾ ਉੱਤਰ ਕੀ ਹੋਵੇਗਾ: (1) =COUNT(A1:A5), (2) =COUNTA(A1:A5), (3) =COUNTBLANK(A1:A5), (4) =COUNTIF(A1:A5, ">20")?',
          hi: 'मान लीजिए सेल A1 से A5 में: A1 = 10, A2 = "Pass", A3 = 25, A4 = (रिक्त), A5 = 40 हैं। निम्नलिखित का परिणाम क्या होगा: (1) =COUNT(A1:A5), (2) =COUNTA(A1:A5), (3) =COUNTBLANK(A1:A5), (4) =COUNTIF(A1:A5, ">20")?',
        },
        steps: {
          en: [
            'Step 1: =COUNT(A1:A5) counts ONLY cells with numbers (10, 25, 40) → Output = 3.',
            'Step 2: =COUNTA(A1:A5) counts all non-empty cells (10, "Pass", 25, 40) → Output = 4.',
            'Step 3: =COUNTBLANK(A1:A5) counts empty cells (A4) → Output = 1.',
            'Step 4: =COUNTIF(A1:A5, ">20") counts numeric cells strictly greater than 20 (25 and 40) → Output = 2.',
          ],
          pa: [
            'ਕਦਮ 1: =COUNT(A1:A5) ਕੇਵਲ ਅੰਕਾਂ ਵਾਲੇ ਸੈੱਲ (10, 25, 40) ਗਿਣਦਾ ਹੈ → 3.',
            'ਕਦਮ 2: =COUNTA(A1:A5) ਸਾਰੇ ਭਰੇ ਹੋਏ ਸੈੱਲ (10, "Pass", 25, 40) ਗਿਣਦਾ ਹੈ → 4.',
            'ਕਦਮ 3: =COUNTBLANK(A1:A5) ਖਾਲੀ ਸੈੱਲ (A4) ਗਿਣਦਾ ਹੈ → 1.',
            'ਕਦਮ 4: =COUNTIF(A1:A5, ">20") 20 ਤੋਂ ਵੱਡੇ ਅੰਕ (25 ਅਤੇ 40) ਗਿਣਦਾ ਹੈ → 2.',
          ],
          hi: [
            'चरण 1: =COUNT(A1:A5) केवल संख्यात्मक सेल (10, 25, 40) गिनता है → 3.',
            'चरण 2: =COUNTA(A1:A5) सभी भरे हुए सेल (10, "Pass", 25, 40) गिनता है → 4.',
            'चरण 3: =COUNTBLANK(A1:A5) रिक्त सेल (A4) गिनता है → 1.',
            'चरण 4: =COUNTIF(A1:A5, ">20") 20 से बड़ी संख्याएं (25 व 40) गिनता है → 2.',
          ],
        },
        solution: {
          en: 'COUNT = 3 | COUNTA = 4 | COUNTBLANK = 1 | COUNTIF = 2.',
          pa: 'COUNT = 3 | COUNTA = 4 | COUNTBLANK = 1 | COUNTIF = 2.',
          hi: 'COUNT = 3 | COUNTA = 4 | COUNTBLANK = 1 | COUNTIF = 2.',
        },
      },
      {
        title: {
          en: 'Copying Formulas with Relative, Absolute & Mixed Cell References',
          pa: 'Relative, Absolute ਅਤੇ Mixed ਸੈੱਲ ਰੈਫਰੈਂਸ ਵਾਲੇ ਫਾਰਮੂਲੇ ਨੂੰ ਕਾਪੀ ਕਰਨਾ',
          hi: 'Relative, Absolute एवं Mixed सेल रेफरेंस वाले सूत्र को कॉपी करना',
        },
        problem: {
          en: 'Cell C1 contains the formula `=$A$1 + B$1 + C1`. If this formula is copied from cell C1 and pasted into cell D3 (1 column right, 2 rows down), what will the new formula in cell D3 become?',
          pa: 'ਸੈੱਲ C1 ਵਿੱਚ ਫਾਰਮੂਲਾ `=$A$1 + B$1 + C1` ਲਿਖਿਆ ਹੈ। ਜੇਕਰ ਇਸ ਨੂੰ C1 ਤੋਂ ਕਾਪੀ ਕਰਕੇ ਸੈੱਲ D3 (1 ਕਾਲਮ ਸੱਜੇ, 2 ਕਤਾਰਾਂ ਹੇਠਾਂ) ਵਿੱਚ ਪੇਸਟ ਕੀਤਾ ਜਾਵੇ, ਤਾਂ D3 ਵਿੱਚ ਨਵਾਂ ਫਾਰਮੂਲਾ ਕੀ ਬਣੇਗਾ?',
          hi: 'सेल C1 में सूत्र `=$A$1 + B$1 + C1` लिखा है। यदि इसे C1 से कॉपी करके सेल D3 (1 कॉलम दाएं, 2 पंक्तियां नीचे) में पेस्ट किया जाए, तो D3 में नया सूत्र क्या बनेगा?',
        },
        steps: {
          en: [
            'Step 1: `$A$1` is an Absolute Reference (both column A and row 1 are locked with `$`), so it remains `$A$1`.',
            'Step 2: `B$1` has an unlocked column B (moves 1 column right to C) and a locked row `$1` (stays `$1`), so `B$1` becomes `C$1`.',
            'Step 3: `C1` is a Relative Reference (moves 1 column right to D and 2 rows down to 3), so `C1` becomes `D3`.',
          ],
          pa: [
            'ਕਦਮ 1: `$A$1` ਪੂਰੀ ਤਰ੍ਹਾਂ ਲਾਕ (Absolute) ਹੈ, ਇਸ ਲਈ ਇਹ `$A$1` ਹੀ ਰਹੇਗਾ।',
            'ਕਦਮ 2: `B$1` ਵਿੱਚ ਕਾਲਮ B ਇੱਕ ਕਦਮ ਸੱਜੇ ਜਾ ਕੇ C ਬਣ ਜਾਵੇਗਾ ਪਰ ਰੋਅ `$1` ਲਾਕ ਰਹੇਗੀ → `C$1`.',
            'ਕਦਮ 3: `C1` (Relative) 1 ਕਾਲਮ ਸੱਜੇ ਅਤੇ 2 ਕਤਾਰਾਂ ਹੇਠਾਂ ਜਾ ਕੇ `D3` ਬਣ ਜਾਵੇਗਾ।',
          ],
          hi: [
            'चरण 1: `$A$1` पूर्णतः लॉक (Absolute) है, अतः यह `$A$1` ही रहेगा।',
            'चरण 2: `B$1` में कॉलम B एक कदम दाएं जाकर C बन जाएगा किंतु पंक्ति `$1` लॉक रहेगी → `C$1`.',
            'चरण 3: `C1` (Relative) 1 कॉलम दाएं और 2 पंक्तियां नीचे जाकर `D3` बन जाएगा।',
          ],
        },
        solution: {
          en: 'The formula in cell D3 will be `=$A$1 + C$1 + D3`.',
          pa: 'ਸੈੱਲ D3 ਵਿੱਚ ਨਵਾਂ ਫਾਰਮੂਲਾ `=$A$1 + C$1 + D3` ਹੋਵੇਗਾ।',
          hi: 'सेल D3 में नया सूत्र `=$A$1 + C$1 + D3` होगा।',
        },
      },
    ],
    commonMisconceptions: [
      {
        misconception: {
          en: 'Maximum zoom percentage in MS Word, MS Excel, and MS PowerPoint is 400% for all three.',
          pa: 'MS Word, MS Excel ਅਤੇ MS PowerPoint ਤਿੰਨਾਂ ਵਿੱਚ ਵੱਧ ਤੋਂ ਵੱਧ ਜ਼ੂਮ 400% ਹੁੰਦਾ ਹੈ।',
          hi: 'MS Word, MS Excel और MS PowerPoint तीनों में अधिकतम ज़ूम 400% होता है।',
        },
        correction: {
          en: 'MS Word supports a maximum zoom of 500% (10% to 500%), whereas MS Excel and MS PowerPoint support a maximum zoom of 400% (10% to 400%).',
          pa: 'MS Word ਵਿੱਚ ਵੱਧ ਤੋਂ ਵੱਧ ਜ਼ੂਮ 500% (10% ਤੋਂ 500%) ਹੁੰਦਾ ਹੈ, ਜਦਕਿ MS Excel ਅਤੇ MS PowerPoint ਵਿੱਚ ਵੱਧ ਤੋਂ ਵੱਧ ਜ਼ੂਮ 400% (10% ਤੋਂ 400%) ਹੁੰਦਾ ਹੈ।',
          hi: 'MS Word में अधिकतम ज़ूम 500% (10% से 500%) होता है, जबकि MS Excel और MS PowerPoint में अधिकतम ज़ूम 400% (10% से 400%) होता है।',
        },
        whyItMatters: {
          en: 'High-frequency PSSSB Clerk question testing exact zoom limits across Office apps.',
          pa: 'ਪੀ.ਐੱਸ.ਐੱਸ.ਐੱਸ.ਬੀ. ਕਲਰਕ ਪ੍ਰੀਖਿਆ ਵਿੱਚ ਜ਼ੂਮ ਸੀਮਾ ਦਾ ਇਹ ਅੰਤਰ ਅਕਸਰ ਪੁੱਛਿਆ ਜਾਂਦਾ ਹੈ।',
          hi: 'पीएसएसएसबी क्लर्क परीक्षा में ज़ूम सीमा का यह अंतर बार-बार पूछा जाता है।',
        },
      },
      {
        misconception: {
          en: 'Pressing Enter inside an MS Excel cell creates a new line within the same cell.',
          pa: 'MS Excel ਵਿੱਚ Enter ਦਬਾਉਣ ਨਾਲ ਉਸੇ ਸੈੱਲ ਦੇ ਅੰਦਰ ਨਵੀਂ ਲਾਈਨ ਸ਼ੁਰੂ ਹੁੰਦੀ ਹੈ।',
          hi: 'MS Excel में Enter दबाने से उसी सेल के भीतर नई लाइन शुरू होती है।',
        },
        correction: {
          en: 'Pressing Enter in MS Excel moves the cursor to the next cell below. To start a new line (line break) inside the SAME Excel cell, you must press Alt + Enter.',
          pa: 'MS Excel ਵਿੱਚ Enter ਦਬਾਉਣ ਨਾਲ ਕਰਸਰ ਹੇਠਲੇ ਸੈੱਲ ਵਿੱਚ ਚਲਾ ਜਾਂਦਾ ਹੈ। ਇੱਕੋ ਸੈੱਲ ਦੇ ਅੰਦਰ ਨਵੀਂ ਲਾਈਨ ਸ਼ੁਰੂ ਕਰਨ ਲਈ Alt + Enter ਦਬਾਇਆ ਜਾਂਦਾ ਹੈ।',
          hi: 'MS Excel में Enter दबाने से कर्सर नीचे वाले सेल में चला जाता है। एक ही सेल के भीतर नई लाइन शुरू करने के लिए Alt + Enter दबाया जाता है।',
        },
        whyItMatters: {
          en: 'Frequently asked practical shortcut question in Punjab Clerk exams.',
          pa: 'ਪੰਜਾਬ ਕਲਰਕ ਪ੍ਰੀਖਿਆਵਾਂ ਵਿੱਚ ਪੁੱਛਿਆ ਜਾਣ ਵਾਲਾ ਪ੍ਰਮੁੱਖ ਪ੍ਰੈਕਟੀਕਲ ਸ਼ਾਰਟਕੱਟ।',
          hi: 'पंजाब क्लर्क परीक्षाओं में पूछा जाने वाला प्रमुख प्रैक्टिकल शॉर्टकट।',
        },
      },
    ],
    quickRevisionSheet: {
      highYieldPoints: {
        en: [
          'MS Word (.docx): Zoom 10%–500%; Font dropdown 8–72 pt (manual 1–1638 pt); Drop Cap default 3 lines (max 10); Gutter Margin (Left/Top for binding); F7 = Spell Check, Shift+F7 = Thesaurus.',
          'MS Excel (.xlsx): Zoom 10%–400%; 1,048,576 Rows × 16,384 Columns (XFD); F4 toggles `$A$1` absolute reference; F2 edits cell; Alt+Enter = line break in cell; Ctrl+; = Current Date.',
          'MS PowerPoint (.pptx): Zoom 10%–400%; Ctrl+M = New Slide, Ctrl+N = New Presentation; F5 = Slide Show from start, Shift+F5 = from current slide; Slide Master for universal layout.',
        ],
        pa: [
          'MS Word (.docx): ਜ਼ੂਮ 10%–500%; ਡ੍ਰੌਪ ਕੈਪ 3 ਲਾਈਨਾਂ (ਵੱਧ ਤੋਂ ਵੱਧ 10); ਗਟਰ ਮਾਰਜਿਨ (Left/Top ਬਾਈਂਡਿੰਗ ਲਈ); F7 = ਸਪੈਲ ਚੈੱਕ, Shift+F7 = ਥੀਸਾਰਸ।',
          'MS Excel (.xlsx): ਜ਼ੂਮ 10%–400%; 10,48,576 Rows × 16,384 Columns (XFD); F4 = `$A$1` ਰੈਫਰੈਂਸ; F2 = ਸੈੱਲ ਐਡਿਟ; Alt+Enter = ਸੈੱਲ ਵਿੱਚ ਨਵੀਂ ਲਾਈਨ; Ctrl+; = ਮਿਤੀ।',
          'MS PowerPoint (.pptx): ਜ਼ੂਮ 10%–400%; Ctrl+M = ਨਵੀਂ ਸਲਾਈਡ; F5 = ਸ਼ੁਰੂ ਤੋਂ ਸਲਾਈਡ ਸ਼ੋਅ, Shift+F5 = ਮੌਜੂਦਾ ਸਲਾਈਡ ਤੋਂ ਸ਼ੋਅ।',
        ],
        hi: [
          'MS Word (.docx): ज़ूम 10%–500%; ड्रॉप कैप 3 लाइनें (अधिकतम 10); गटर मार्जिन (Left/Top बाइंडिंग हेतु); F7 = स्पेल चेक, Shift+F7 = थिसॉरस।',
          'MS Excel (.xlsx): ज़ूम 10%–400%; 10,48,576 Rows × 16,384 Columns (XFD); F4 = `$A$1` रेफरेंस; F2 = सेल एडिट; Alt+Enter = सेल में नई लाइन; Ctrl+; = दिनांक।',
          'MS PowerPoint (.pptx): ज़ूम 10%–400%; Ctrl+M = नई स्लाइड; F5 = प्रारंभ से स्लाइड शो, Shift+F5 = वर्तमान स्लाइड से शो।',
        ],
      },
      examTraps: {
        en: [
          'Trap: In MS Word, Portrait and Landscape are Page Orientations (not Paper Sizes).',
          'Trap: `#####` in Excel is NOT a formula syntax error — it simply means the column width is too narrow to display the numeric value.',
        ],
        pa: [
          'ਧੋਖਾ: Portrait ਅਤੇ Landscape ਪੇਜ ਓਰੀਐਂਟੇਸ਼ਨ (Page Orientation) ਹਨ, ਪੇਪਰ ਸਾਈਜ਼ ਨਹੀਂ।',
          'ਧੋਖਾ: Excel ਵਿੱਚ `#####` ਦਾ ਅਰਥ ਹੈ ਕਿ ਕਾਲਮ ਦੀ ਚੌੜਾਈ ਘੱਟ ਹੈ।',
        ],
        hi: [
          'धोखा: Portrait और Landscape पेज ओरिएंटेशन (Page Orientation) हैं, पेपर साइज़ नहीं।',
          'धोखा: Excel में `#####` का अर्थ है कि कॉलम की चौड़ाई संख्या दिखाने के लिए कम है।',
        ],
      },
    },
    summary: {
      en: 'Comprehensive guide to Microsoft Office for PSSSB Clerk & Patwari exams, covering MS Word (Gutter margin, Drop Cap, Mail Merge, zoom 10%–500%, F7/Shift+F7 shortcuts), MS Excel (1,048,576 rows × 16,384 columns, `$A$1` absolute referencing via F4, `COUNT`/`COUNTA`/`COUNTIF`/`IF`/`VLOOKUP` functions, error codes), and MS PowerPoint (Slide Master, Ctrl+M, F5 vs Shift+F5).',
      pa: 'ਇਸ ਪਾਠ ਵਿੱਚ MS Word (ਗਟਰ ਮਾਰਜਿਨ, ਡ੍ਰੌਪ ਕੈਪ, ਮੇਲ ਮਰਜ, ਸ਼ਾਰਟਕੱਟ), MS Excel (10,48,576 ਕਤਾਰਾਂ × 16,384 ਕਾਲਮ, `$A$1` ਸੈੱਲ ਰੈਫਰੈਂਸਿੰਗ, `COUNT`, `COUNTA`, `IF`, `VLOOKUP` ਫਾਰਮੂਲੇ ਅਤੇ ਐਰਰ ਕੋਡ) ਅਤੇ MS PowerPoint (Ctrl+M, F5, Slide Master) ਦਾ ਸੰਪੂਰਨ ਵੇਰਵਾ ਦਿੱਤਾ ਗਿਆ ਹੈ।',
      hi: 'इस पाठ में MS Word (गटर मार्जिन, ड्रॉप कैप, मेल मर्ज, शॉर्टकट), MS Excel (10,48,576 पंक्तियां × 16,384 कॉलम, `$A$1` सेल रेफरेंसिंग, `COUNT`, `COUNTA`, `IF`, `VLOOKUP` सूत्र व त्रुटि कोड) तथा MS PowerPoint (Ctrl+M, F5, Slide Master) का संपूर्ण अध्ययन किया गया है।',
    },
    keyNotes: {
      en: [
        '📌 MS Word: Zoom 10%–500%; Drop Cap default = 3 lines (max 10); Gutter Margin = Binding space (Left/Top).',
        '📌 MS Excel: 1,048,576 Rows & 16,384 Columns (XFD); F4 toggles `$A$1`; Alt+Enter inserts line break in same cell.',
        '📌 Excel Functions: `COUNT` (numbers only), `COUNTA` (all non-empty cells), `VLOOKUP` (vertical lookup from leftmost column).',
        '📌 MS PowerPoint: Ctrl+M = Insert New Slide; F5 = Slide Show from beginning; Shift+F5 = Slide Show from current slide.',
      ],
      pa: [
        '📌 MS Word: ਜ਼ੂਮ 10%–500%; ਡ੍ਰੌਪ ਕੈਪ ਡਿਫਾਲਟ = 3 ਲਾਈਨਾਂ (ਵੱਧ ਤੋਂ ਵੱਧ 10); ਗਟਰ ਮਾਰਜਿਨ = ਬਾਈਂਡਿੰਗ ਲਈ ਥਾਂ।',
        '📌 MS Excel: 10,48,576 Rows ਤੇ 16,384 Columns (XFD); F4 = `$A$1`; Alt+Enter = ਸੈੱਲ ਵਿੱਚ ਨਵੀਂ ਲਾਈਨ।',
        '📌 Excel ਫਾਰਮੂਲੇ: `COUNT` (ਕੇਵਲ ਅੰਕ), `COUNTA` (ਸਾਰੇ ਭਰੇ ਸੈੱਲ), `VLOOKUP` (ਖੱਬੇ ਕਾਲਮ ਤੋਂ ਖੋਜ)।',
        '📌 MS PowerPoint: Ctrl+M = ਨਵੀਂ ਸਲਾਈਡ; F5 = ਸ਼ੁਰੂ ਤੋਂ ਸਲਾਈਡ ਸ਼ੋਅ; Shift+F5 = ਮੌਜੂਦਾ ਸਲਾਈਡ ਤੋਂ ਸ਼ੋਅ।',
      ],
      hi: [
        '📌 MS Word: ज़ूम 10%–500%; ड्रॉप कैप डिफ़ॉल्ट = 3 लाइनें (अधिकतम 10); गटर मार्जिन = बाइंडिंग हेतु स्थान।',
        '📌 MS Excel: 10,48,576 Rows व 16,384 Columns (XFD); F4 = `$A$1`; Alt+Enter = सेल में नई लाइन।',
        '📌 Excel सूत्र: `COUNT` (केवल अंक), `COUNTA` (सभी गैर-रिक्त सेल), `VLOOKUP` (बाएं कॉलम से खोज)।',
        '📌 MS PowerPoint: Ctrl+M = नई स्लाइड; F5 = प्रारंभ से स्लाइड शो; Shift+F5 = वर्तमान स्लाइड से शो।',
      ],
    },
    flashcards: [
      {
        id: 'fc-cmo-1',
        q: {
          en: 'Which function key is pressed in MS Excel to convert a relative cell reference (A1) into an absolute cell reference ($A$1)?',
          pa: 'MS Excel ਵਿੱਚ ਰਿਲੇਟਿਵ ਸੈੱਲ ਰੈਫਰੈਂਸ (A1) ਨੂੰ ਐਬਸੋਲਿਊਟ ਰੈਫਰੈਂਸ ($A$1) ਵਿੱਚ ਬਦਲਣ ਲਈ ਕਿਹੜੀ ਫੰਕਸ਼ਨ ਕੁੰਜੀ ਦਬਾਈ ਜਾਂਦੀ ਹੈ?',
          hi: 'MS Excel में रिलेटिव सेल रेफरेंस (A1) को एब्सोल्यूट रेफरेंस ($A$1) में बदलने के लिए कौन-सी फंक्शन कुंजी दबाई जाती है?',
        },
        a: {
          en: 'F4 key.',
          pa: 'F4 ਕੁੰਜੀ।',
          hi: 'F4 कुंजी।',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-cmo-2',
        q: {
          en: 'What are the default and maximum number of lines a "Drop Cap" can drop in MS Word?',
          pa: 'MS Word ਵਿੱਚ "Drop Cap" ਦੀਆਂ ਡਿਫਾਲਟ ਅਤੇ ਵੱਧ ਤੋਂ ਵੱਧ ਕਿੰਨੀਆਂ ਲਾਈਨਾਂ ਹੁੰਦੀਆਂ ਹਨ?',
          hi: 'MS Word में "Drop Cap" की डिफ़ॉल्ट और अधिकतम कितनी लाइनें होती हैं?',
        },
        a: {
          en: 'Default = 3 lines; Maximum = 10 lines.',
          pa: 'ਡਿਫਾਲਟ = 3 ਲਾਈਨਾਂ; ਵੱਧ ਤੋਂ ਵੱਧ = 10 ਲਾਈਨਾਂ।',
          hi: 'डिफ़ॉल्ट = 3 लाइनें; अधिकतम = 10 लाइनें।',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-cmo-3',
        q: {
          en: 'Which shortcut key inserts a New Slide in MS PowerPoint, and which shortcut starts the Slide Show from the current slide?',
          pa: 'MS PowerPoint ਵਿੱਚ ਨਵੀਂ ਸਲਾਈਡ ਪਾਉਣ ਅਤੇ ਮੌਜੂਦਾ ਸਲਾਈਡ ਤੋਂ ਸਲਾਈਡ ਸ਼ੋਅ ਸ਼ੁਰੂ ਕਰਨ ਦਾ ਸ਼ਾਰਟਕੱਟ ਕੀ ਹੈ?',
          hi: 'MS PowerPoint में नई स्लाइड जोड़ने और वर्तमान स्लाइड से स्लाइड शो शुरू करने का शॉर्टकट क्या है?',
        },
        a: {
          en: 'Ctrl + M inserts a New Slide; Shift + F5 starts the Slide Show from the current slide (F5 starts from the first slide).',
          pa: 'Ctrl + M (ਨਵੀਂ ਸਲਾਈਡ); Shift + F5 (ਮੌਜੂਦਾ ਸਲਾਈਡ ਤੋਂ ਸ਼ੋਅ)।',
          hi: 'Ctrl + M (नई स्लाइड); Shift + F5 (वर्तमान स्लाइड से शो)।',
        },
        difficulty: 'medium',
      },
      {
        id: 'fc-cmo-4',
        q: {
          en: 'What is the total number of Rows and Columns (with last column label) in a modern MS Excel worksheet?',
          pa: 'ਆਧੁਨਿਕ MS Excel ਵਰਕਸ਼ੀਟ ਵਿੱਚ ਕੁੱਲ ਕਿੰਨੀਆਂ ਕਤਾਰਾਂ (Rows) ਅਤੇ ਕਾਲਮ (ਆਖਰੀ ਕਾਲਮ ਦੇ ਨਾਮ ਸਮੇਤ) ਹੁੰਦੇ ਹਨ?',
          hi: 'आधुनिक MS Excel वर्कशीट में कुल कितनी पंक्तियां (Rows) और कॉलम (अंतिम कॉलम नाम सहित) होते हैं?',
        },
        a: {
          en: '1,048,576 Rows and 16,384 Columns (last column labeled XFD).',
          pa: '10,48,576 ਕਤਾਰਾਂ (Rows) ਅਤੇ 16,384 ਕਾਲਮ (ਆਖਰੀ ਕਾਲਮ XFD)।',
          hi: '10,48,576 पंक्तियां (Rows) और 16,384 कॉलम (अंतिम कॉलम XFD)।',
        },
        difficulty: 'medium',
      },
    ],
    videos: [
      {
        title: 'MS Word, MS Excel Formulas & MS PowerPoint Complete Guide | PSSSB Clerk',
        channel: 'NIOS / NCERT Computer Science Archive',
        url: 'https://www.youtube.com/results?search_query=MS+Word+Excel+PowerPoint+Formulas+Shortcuts+PSSSB+Clerk',
        language: 'Punjabi / English / Hindi',
      },
    ],
    bookRefs: [
      {
        title: 'Data Entry Operations (Course 229)',
        author: 'National Institute of Open Schooling (NIOS)',
        chapters: 'Lessons 3–8: Word Processing, Spreadsheet Formulas & Presentation',
        type: 'ncert',
      },
    ],
    syllabusReference: {
      title: 'PSSSB Clerk Office Productivity Suite Syllabus',
      url: 'https://sssb.punjab.gov.in/',
      body: 'Punjab Subordinate Services Selection Board (PSSSB)',
      verifiedOn: '2026-10-10',
    },
  },

  // ==========================================================================
  // TOPIC 3: COMPUTER NETWORKING, OSI MODEL, PROTOCOLS & CYBERSECURITY
  // ==========================================================================
  'clerk-networking-cybersecurity': {
    id: 'clerk-networking-cybersecurity',
    topicId: 'clerk-networking-cybersecurity',
    subjectId: 'clerk-special',
    category: 'clerk',
    coverageStatus: 'complete',
    editorialStatus: 'authored',
    title: {
      en: 'Computer Networks, OSI 7-Layer Model, TCP/IP Protocols, IPv4/IPv6 & Cybersecurity',
      pa: 'ਕੰਪਿਊਟਰ ਨੈੱਟਵਰਕ, OSI 7-ਲੇਅਰ ਮਾਡਲ, TCP/IP ਪ੍ਰੋਟੋਕੋਲ, IPv4/IPv6 ਅਤੇ ਸਾਈਬਰ ਸੁਰੱਖਿਆ',
      hi: 'कंप्यूटर नेटवर्क, OSI 7-लेयर मॉडल, TCP/IP प्रोटोकॉल, IPv4/IPv6 एवं साइबर सुरक्षा',
    },
    examRelevance: 'PSSSB Clerk (4–5 Qs), Punjab Patwari (3–4 Qs), Punjab Police IT & Senior Assistant',
    estimatedTime: '45 mins',
    prerequisites: {
      en: [
        'Basic concepts of data transmission (Simplex, Half-Duplex, Full-Duplex) and internet connectivity.',
      ],
      pa: [
        'ਡੇਟਾ ਸੰਚਾਰ (Simplex, Half-Duplex, Full-Duplex) ਅਤੇ ਇੰਟਰਨੈੱਟ ਦੀ ਮੁੱਢਲੀ ਜਾਣਕਾਰੀ।',
      ],
      hi: [
        'डेटा संचार (Simplex, Half-Duplex, Full-Duplex) और इंटरनेट की प्रारंभिक समझ।',
      ],
    },
    learningObjectives: {
      en: [
        'Classify network scales (PAN, LAN, MAN, WAN) and physical topologies (Bus, Star, Ring, Mesh, Tree), including the exact Mesh cable formula $n(n-1)/2$.',
        'Map all 7 layers of the ISO-OSI Model to their Data Units (PDUs), hardware devices (Repeater/Hub, Bridge/Switch, Router, Gateway), and protocols.',
        'Contrast IPv4 (32-bit, Classes A–E, Loopback 127.0.0.1) with IPv6 (128-bit hexadecimal) and MAC addresses (48-bit physical address), along with standard TCP/UDP port numbers.',
        'Analyze Malware taxonomy (Virus, Worm, Trojan Horse, Ransomware, Spyware, Rootkit), cyber attacks (Phishing, Spoofing, DDoS, Zero-Day), and the Indian IT Act 2000 (CERT-In).',
      ],
      pa: [
        'ਨੈੱਟਵਰਕ ਦੀਆਂ ਕਿਸਮਾਂ (PAN, LAN, MAN, WAN) ਅਤੇ ਟੋਪੋਲੋਜੀ (Bus, Star, Ring, Mesh — ਸੂਤਰ $n(n-1)/2$) ਨੂੰ ਸਮਝਣਾ।',
        'OSI ਮਾਡਲ ਦੀਆਂ 7 ਪਰਤਾਂ (Layers), ਉਹਨਾਂ ਦੀਆਂ ਡੇਟਾ ਇਕਾਈਆਂ (Bits, Frames, Packets, Segments) ਅਤੇ ਨੈੱਟਵਰਕ ਉਪਕਰਨਾਂ (Hub, Switch, Router, Gateway) ਦਾ ਮਿਲਾਨ ਕਰਨਾ।',
        'IPv4 (32-ਬਿੱਟ, ਕਲਾਸ A ਤੋਂ E, 127.0.0.1), IPv6 (128-ਬਿੱਟ) ਅਤੇ MAC ਐਡਰੈੱਸ (48-ਬਿੱਟ) ਅਤੇ ਪ੍ਰਮੁੱਖ ਪੋਰਟ ਨੰਬਰਾਂ (HTTP 80, HTTPS 443, SMTP 25) ਨੂੰ ਜਾਣਨਾ।',
        'ਮਾਲਵੇਅਰ ਦੀਆਂ ਕਿਸਮਾਂ (ਵਾਇਰਸ, ਵਾਰਮ, ਟ੍ਰੋਜਨ ਹਾਰਸ, ਰੈਨਸਮਵੇਅਰ, ਫਿਸ਼ਿੰਗ) ਅਤੇ ਆਈ.ਟੀ. ਐਕਟ 2000 (CERT-In) ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਨਾ।',
      ],
      hi: [
        'नेटवर्क के प्रकारों (PAN, LAN, MAN, WAN) और टोपोलॉजी (Bus, Star, Ring, Mesh — सूत्र $n(n-1)/2$) को समझना।',
        'OSI मॉडल की 7 परतों (Layers), उनकी डेटा इकाइयों (Bits, Frames, Packets, Segments) और उपकरणों (Hub, Switch, Router, Gateway) का मिलान करना।',
        'IPv4 (32-बिट, क्लास A से E, 127.0.0.1), IPv6 (128-बिट) व MAC पते (48-बिट) तथा प्रमुख पोर्ट नंबरों (HTTP 80, HTTPS 443, SMTP 25) का अध्ययन करना।',
        'मैलवेयर के प्रकारों (वायरस, वॉर्म, ट्रोजन हॉर्स, रैनसमवेयर, फ़िशिंग) और आईटी अधिनियम 2000 (CERT-In) का विश्लेषण करना।',
      ],
    },
    content: {
      en: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🌐 1. Transmission Modes, Network Types & Topologies</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>Three Data Transmission Modes:</strong>
                <br/>• <strong>Simplex:</strong> Unidirectional only (e.g., Keyboard to CPU, Television/Radio broadcast).
                <br/>• <strong>Half-Duplex:</strong> Bidirectional, but only <strong>one direction at a time</strong> (e.g., <strong>Walkie-Talkie</strong>).
                <br/>• <strong>Full-Duplex:</strong> Bidirectional <strong>simultaneously</strong> (e.g., <strong>Telephone call</strong>, modern Fibre-optic Ethernet).
              </li>
              <li><strong>Network Scales (Smallest to Largest):</strong> <strong>PAN</strong> (Personal Area Network — Bluetooth / USB, ~10m) $\rightarrow$ <strong>LAN</strong> (Local Area Network — Ethernet IEEE 802.3 / Wi-Fi IEEE 802.11 inside a building/campus) $\rightarrow$ <strong>MAN</strong> (Metropolitan Area Network — Cable TV / city-wide network) $\rightarrow$ <strong>WAN</strong> (Wide Area Network — The Internet / ARPANET 1969).</li>
              <li><strong>Network Topologies:</strong>
                <br/>• <strong>Bus Topology:</strong> Single shared backbone cable with terminators at both ends.
                <br/>• <strong>Star Topology:</strong> All nodes connect to a central <strong>Hub or Switch</strong> (easy fault isolation; if central hub fails, entire network fails).
                <br/>• <strong>Ring Topology:</strong> Unidirectional loop using a <strong>Token</strong> to prevent collisions.
                <br/>• <strong>Full Mesh Topology:</strong> Every node is directly connected to every other node (highest reliability/redundancy). For $n$ nodes, total point-to-point cables required = $\mathbf{\frac{n(n - 1)}{2}}$ and I/O ports per device = $n - 1$.
              </li>
            </ul>
          </div>

          <div class="bg-slate-800/90 border border-slate-700 p-5 rounded-xl">
            <h4 class="text-amber-400 font-bold text-base mb-2">🏗️ 2. The ISO-OSI 7-Layer Reference Model (Bottom to Top)</h4>
            <p class="text-slate-300 text-xs mb-2">
              Mnemonic (Layer 1 to 7): <em>"<strong>P</strong>lease <strong>D</strong>o <strong>N</strong>ot <strong>T</strong>hrow <strong>S</strong>ausage <strong>P</strong>izza <strong>A</strong>way"</em>
            </p>
            <div class="overflow-x-auto">
              <table class="w-full text-xs text-left border-collapse border border-slate-700">
                <thead>
                  <tr class="bg-slate-800 text-amber-300">
                    <th class="p-2 border border-slate-700">Layer # & Name</th>
                    <th class="p-2 border border-slate-700">Data Unit (PDU)</th>
                    <th class="p-2 border border-slate-700">Hardware Devices</th>
                    <th class="p-2 border border-slate-700">Key Protocols & Core Functions</th>
                  </tr>
                </thead>
                <tbody class="text-slate-300">
                  <tr class="border-b border-slate-800">
                    <td class="p-2 font-bold text-white">7. Application Layer</td>
                    <td class="p-2">Data / Message</td>
                    <td class="p-2">Gateway / Firewall</td>
                    <td class="p-2"><strong>HTTP, HTTPS, FTP, SMTP, POP3, IMAP, DNS, DHCP, Telnet, SSH</strong> (User interface services)</td>
                  </tr>
                  <tr class="border-b border-slate-800 bg-slate-900/50">
                    <td class="p-2 font-bold text-white">6. Presentation Layer</td>
                    <td class="p-2">Data</td>
                    <td class="p-2">Gateway</td>
                    <td class="p-2"><strong>SSL/TLS, JPEG, MPEG, ASCII</strong> (<strong>Encryption/Decryption</strong>, Compression, Data Translation)</td>
                  </tr>
                  <tr class="border-b border-slate-800">
                    <td class="p-2 font-bold text-white">5. Session Layer</td>
                    <td class="p-2">Data</td>
                    <td class="p-2">Gateway</td>
                    <td class="p-2">NetBIOS, RPC (Dialog control, session establishment, checkpointing & synchronization)</td>
                  </tr>
                  <tr class="border-b border-slate-800 bg-slate-900/50">
                    <td class="p-2 font-bold text-white">4. Transport Layer</td>
                    <td class="p-2"><strong>Segment (TCP) / Datagram (UDP)</strong></td>
                    <td class="p-2">Gateway / L4 Switch</td>
                    <td class="p-2"><strong>TCP</strong> (Connection-oriented, reliable) & <strong>UDP</strong> (Connectionless, fast); End-to-End <strong>Port Numbers</strong> & Flow Control</td>
                  </tr>
                  <tr class="border-b border-slate-800">
                    <td class="p-2 font-bold text-white">3. Network Layer</td>
                    <td class="p-2"><strong>Packet</strong></td>
                    <td class="p-2"><strong>Router, L3 Switch</strong></td>
                    <td class="p-2"><strong>IP (IPv4/IPv6), ICMP (Ping), ARP, IPSec</strong> (Logical IP Addressing & Best-Path Routing)</td>
                  </tr>
                  <tr class="border-b border-slate-800 bg-slate-900/50">
                    <td class="p-2 font-bold text-white">2. Data Link Layer</td>
                    <td class="p-2"><strong>Frame</strong></td>
                    <td class="p-2"><strong>Switch, Bridge, NIC</strong></td>
                    <td class="p-2">Ethernet, PPP; <strong>MAC Physical Addressing (48-bit / 6-Byte Hex)</strong>, Error Detection (CRC)</td>
                  </tr>
                  <tr class="border-b border-slate-800">
                    <td class="p-2 font-bold text-white">1. Physical Layer</td>
                    <td class="p-2"><strong>Bits (0 and 1)</strong></td>
                    <td class="p-2"><strong>Hub, Repeater, Modem, Cables</strong></td>
                    <td class="p-2">RJ-45, Fibre Optic, Coaxial; Raw bit stream transmission over physical medium</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="bg-emerald-950/50 border border-emerald-500/30 p-5 rounded-xl">
            <h4 class="text-emerald-300 font-bold text-base mb-2">🔢 3. IPv4 vs IPv6 Addressing, Classes & Standard Port Numbers</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>IPv4 vs IPv6 vs MAC Address:</strong>
                <br/>• <strong>IPv4 Logical Address:</strong> <strong>32-bit (4 Bytes)</strong> written in 4 decimal octets separated by dots (e.g., <code>192.168.1.1</code>), where each octet MUST be between <strong>0 and 255</strong>.
                <br/>• <strong>IPv6 Logical Address:</strong> <strong>128-bit (16 Bytes)</strong> written in 8 groups of 4 hexadecimal digits separated by colons (e.g., <code>2001:0db8:85a3::8a2e:0370:7334</code>).
                <br/>• <strong>MAC Physical / Hardware Address:</strong> <strong>48-bit (6 Bytes)</strong> burned into the NIC (Network Interface Card), written as 12 hexadecimal digits separated by colons/hyphens (e.g., <code>00:1A:2B:3C:4D:5E</code>).
              </li>
              <li><strong>IPv4 Address Classes (First Octet Range):</strong>
                <br/>• <strong>Class A:</strong> <code>1 to 126</code> (Default Subnet Mask: <code>255.0.0.0</code>; note: <strong><code>127.0.0.1</code> is reserved for Loopback / Localhost self-testing!</strong>)
                <br/>• <strong>Class B:</strong> <code>128 to 191</code> (Default Subnet Mask: <code>255.255.0.0</code>)
                <br/>• <strong>Class C:</strong> <code>192 to 223</code> (Default Subnet Mask: <code>255.255.255.0</code>)
                <br/>• <strong>Class D:</strong> <code>224 to 239</code> (Reserved for <strong>Multicasting</strong>) | <strong>Class E:</strong> <code>240 to 255</code> (Reserved for <strong>Research / Experimental use</strong>).
              </li>
              <li><strong>Must-Know Standard TCP/UDP Port Numbers:</strong>
                <br/>• <strong>Port 20 / 21:</strong> FTP (File Transfer Protocol — 20 for Data, 21 for Control) | <strong>Port 22:</strong> SSH (Secure Shell) | <strong>Port 23:</strong> Telnet (Remote login, unencrypted).
                <br/>• <strong>Port 25:</strong> <strong>SMTP</strong> (Simple Mail Transfer Protocol — used for <strong>sending/pushing emails</strong>).
                <br/>• <strong>Port 53:</strong> <strong>DNS</strong> (Domain Name System — translates domain names like <code>punjab.gov.in</code> into IP addresses).
                <br/>• <strong>Port 67 / 68:</strong> DHCP (Dynamic Host Configuration Protocol — automatically assigns IP addresses).
                <br/>• <strong>Port 80:</strong> <strong>HTTP</strong> (HyperText Transfer Protocol) | <strong>Port 443:</strong> <strong>HTTPS</strong> (HTTP Secure over SSL/TLS).
                <br/>• <strong>Port 110:</strong> <strong>POP3</strong> (Post Office Protocol — downloads emails to a single device) | <strong>Port 143:</strong> <strong>IMAP</strong> (Internet Message Access Protocol — syncs emails across multiple devices).
              </li>
            </ul>
          </div>

          <div class="bg-rose-950/50 border border-rose-500/30 p-5 rounded-xl">
            <h4 class="text-rose-300 font-bold text-base mb-2">🛡️ 4. Cybersecurity, Malware Taxonomy & Indian IT Act 2000</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>Malware Taxonomy (Crucial Exam Distinctions):</strong>
                <br/>• <strong>Computer Virus:</strong> Requires a <strong>host program/file</strong> and human action to execute and spread (First network virus: <strong>Creeper</strong>, 1971; First PC boot-sector virus: <strong>Brain</strong>, 1986).
                <br/>• <strong>Computer Worm:</strong> Standalone malicious software that <strong>self-replicates automatically across networks WITHOUT needing a host file</strong> or human intervention (e.g., Morris Worm, ILOVEYOU, Stuxnet).
                <br/>• <strong>Trojan Horse:</strong> Disguises itself as legitimate/useful software to create a backdoor; it <strong>DOES NOT self-replicate</strong>.
                <br/>• <strong>Ransomware:</strong> Encrypts the victim's files and demands ransom payment (usually in cryptocurrency) for the decryption key (e.g., <strong>WannaCry, Petya, Locky</strong>).
                <br/>• <strong>Spyware & Keylogger:</strong> Secretly monitors user activity or records keystrokes to steal passwords/banking PINs (e.g., <strong>Pegasus</strong>).
              </li>
              <li><strong>Cyber Attacks & Defense:</strong>
                <br/>• <strong>Phishing:</strong> Fraudulent emails/websites impersonating banks to trick users into revealing passwords/OTPs (Voice phishing = <em>Vishing</em>; SMS phishing = <em>Smishing</em>; Targeted executive phishing = <em>Spear Phishing / Whaling</em>).
                <br/>• <strong>DoS / DDoS (Distributed Denial of Service):</strong> Flooding a server with bogus traffic from a network of compromised computers (<strong>Botnet</strong>) so legitimate users cannot access it.
                <br/>• <strong>Zero-Day Attack:</strong> Exploiting an unknown software vulnerability before the developer has released a security patch.
              </li>
              <li><strong>Indian Information Technology (IT) Act 2000:</strong> Enacted on <strong>17 October 2000</strong> (amended in 2008); provides legal recognition to <strong>Digital Signatures</strong> and electronic governance. Nodal national agency for cyber incidents: <strong>CERT-In (Indian Computer Emergency Response Team)</strong> under Section 70B. Key Sections: <strong>Sec 66C</strong> (Identity Theft), <strong>Sec 66D</strong> (Cheating by personation / Phishing), <strong>Sec 66F</strong> (Cyber Terrorism). (Note: <strong>Section 66A</strong> was struck down as unconstitutional by the Supreme Court in the <em>Shreya Singhal case, 2015</em>).</li>
            </ul>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🌐 1. ਡੇਟਾ ਸੰਚਾਰ, ਨੈੱਟਵਰਕ ਦੀਆਂ ਕਿਸਮਾਂ ਅਤੇ ਟੋਪੋਲੋਜੀ</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਸੰਚਾਰ ਦੇ ਢੰਗ:</strong> <strong>Simplex</strong> (ਇੱਕ-ਪਾਸੜ, ਜਿਵੇਂ ਕੀਬੋਰਡ ਜਾਂ ਟੀ.ਵੀ.), <strong>Half-Duplex</strong> (ਦੋ-ਪਾਸੜ ਪਰ ਇੱਕ ਸਮੇਂ ਇੱਕ ਪਾਸੇ, ਜਿਵੇਂ <strong>ਵਾਕੀ-ਟਾਕੀ</strong>), ਅਤੇ <strong>Full-Duplex</strong> (ਇੱਕੋ ਸਮੇਂ ਦੋਵੇਂ ਪਾਸੇ, ਜਿਵੇਂ <strong>ਟੈਲੀਫੋਨ ਕਾਲ</strong>)।</li>
              <li><strong>ਨੈੱਟਵਰਕ ਕਿਸਮਾਂ:</strong> PAN (ਬਲੂਟੁੱਥ) $\rightarrow$ LAN (ਇਮਾਰਤ ਦੇ ਅੰਦਰ, Ethernet IEEE 802.3 / Wi-Fi 802.11) $\rightarrow$ MAN (ਸ਼ਹਿਰ ਪੱਧਰੀ) $\rightarrow$ WAN (ਇੰਟਰਨੈੱਟ)।</li>
              <li><strong>ਟੋਪੋਲੋਜੀ (Topologies):</strong> <strong>Star Topology</strong> ਵਿੱਚ ਸਾਰੇ ਕੰਪਿਊਟਰ ਕੇਂਦਰੀ <strong>Hub ਜਾਂ Switch</strong> ਨਾਲ ਜੁੜਦੇ ਹਨ। <strong>Mesh Topology</strong> ਵਿੱਚ $n$ ਕੰਪਿਊਟਰਾਂ ਨੂੰ ਜੋੜਨ ਲਈ ਕੁੱਲ ਕੇਬਲਾਂ ਦਾ ਸੂਤਰ $\mathbf{\frac{n(n-1)}{2}}$ ਹੁੰਦਾ ਹੈ।</li>
            </ul>
          </div>

          <div class="bg-slate-800/90 border border-slate-700 p-5 rounded-xl">
            <h4 class="text-amber-400 font-bold text-base mb-2">🏗️ 2. OSI ਮਾਡਲ ਦੀਆਂ 7 ਪਰਤਾਂ (Layers) ਅਤੇ ਨੈੱਟਵਰਕ ਉਪਕਰਨ</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>1. Physical Layer:</strong> ਇਕਾਈ: <strong>Bits</strong> | ਉਪਕਰਨ: <strong>Hub, Repeater, Modem, Cables</strong>।</li>
              <li><strong>2. Data Link Layer:</strong> ਇਕਾਈ: <strong>Frames</strong> | ਉਪਕਰਨ: <strong>Switch, Bridge, NIC</strong> | <strong>MAC ਐਡਰੈੱਸ (48-ਬਿੱਟ / 6 ਬਾਈਟ)</strong>।</li>
              <li><strong>3. Network Layer:</strong> ਇਕਾਈ: <strong>Packets</strong> | ਉਪਕਰਨ: <strong>Router</strong> | <strong>IP ਐਡਰੈੱਸ (IPv4 = 32-ਬਿੱਟ, IPv6 = 128-ਬਿੱਟ)</strong>।</li>
              <li><strong>4. Transport Layer:</strong> ਇਕਾਈ: <strong>Segments</strong> | ਪ੍ਰੋਟੋਕੋਲ: <strong>TCP ਅਤੇ UDP</strong> (Port Numbers)।</li>
              <li><strong>5. Session Layer</strong> (ਸੈਸ਼ਨ ਕੰਟਰੋਲ) $\rightarrow$ <strong>6. Presentation Layer</strong> (<strong>Encryption/Decryption</strong> ਅਤੇ Compression) $\rightarrow$ <strong>7. Application Layer</strong> (HTTP, HTTPS, FTP, SMTP, DNS)।</li>
            </ul>
          </div>

          <div class="bg-emerald-950/50 border border-emerald-500/30 p-5 rounded-xl">
            <h4 class="text-emerald-300 font-bold text-base mb-2">🔢 3. IPv4 ਬਨਾਮ IPv6, ਪੋਰਟ ਨੰਬਰ ਅਤੇ ਸਾਈਬਰ ਸੁਰੱਖਿਆ</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>IPv4 (32-ਬਿੱਟ, 4 ਆਕਟੇਟ 0–255):</strong> ਕਲਾਸ A (1–126; <strong>127.0.0.1 ਲੂਪਬੈਕ/ਲੋਕਲਹੋਸਟ</strong> ਲਈ ਰਾਖਵਾਂ ਹੈ), ਕਲਾਸ B (128–191), ਕਲਾਸ C (192–223), ਕਲਾਸ D (224–239 ਮਲਟੀਕਾਸਟਿੰਗ), ਕਲਾਸ E (240–255 ਖੋਜ ਲਈ)। <strong>IPv6 = 128-ਬਿੱਟ</strong>।</li>
              <li><strong>ਪ੍ਰਮੁੱਖ ਪੋਰਟ ਨੰਬਰ:</strong> <strong>HTTP = 80</strong> | <strong>HTTPS = 443</strong> | <strong>SMTP = 25</strong> (ਈਮੇਲ ਭੇਜਣ ਲਈ) | <strong>POP3 = 110</strong> ਤੇ <strong>IMAP = 143</strong> (ਈਮੇਲ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ) | <strong>FTP = 20/21</strong> | <strong>DNS = 53</strong> | <strong>SSH = 22</strong>।</li>
              <li><strong>ਮਾਲਵੇਅਰ ਅਤੇ ਆਈ.ਟੀ. ਐਕਟ 2000:</strong> <strong>ਵਾਇਰਸ</strong> ਨੂੰ ਹੋਸਟ ਫਾਈਲ ਚਾਹੀਦੀ ਹੈ; <strong>ਵਾਰਮ (Worm)</strong> ਬਿਨਾਂ ਹੋਸਟ ਦੇ ਆਪਣੇ ਆਪ ਫੈਲਦਾ ਹੈ; <strong>ਟ੍ਰੋਜਨ ਹਾਰਸ</strong> ਆਪਣੀ ਕਾਪੀ ਨਹੀਂ ਬਣਾਉਂਦਾ; <strong>ਰੈਨਸਮਵੇਅਰ (WannaCry)</strong> ਫਾਈਲਾਂ ਨੂੰ ਲਾਕ (Encrypt) ਕਰਕੇ ਫਿਰੌਤੀ ਮੰਗਦਾ ਹੈ। ਭਾਰਤ ਵਿੱਚ ਸਾਈਬਰ ਸੁਰੱਖਿਆ ਦੀ ਮੁੱਖ ਸੰਸਥਾ <strong>CERT-In</strong> ਹੈ।</li>
            </ul>
          </div>
        </div>
      `,
      hi: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🌐 1. डेटा संचार, नेटवर्क के प्रकार एवं टोपोलॉजी</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>संचार मोड:</strong> <strong>Simplex</strong> (एकदिशीय — कीबोर्ड, टीवी), <strong>Half-Duplex</strong> (द्विदिशीय किंतु एक समय में एक ओर — <strong>वॉकी-टॉकी</strong>), तथा <strong>Full-Duplex</strong> (एक साथ दोनों ओर — <strong>टेलीफोन कॉल</strong>)।</li>
              <li><strong>टोपोलॉजी:</strong> <strong>Star Topology</strong> में सभी नोड केंद्रीय <strong>Hub या Switch</strong> से जुड़ते हैं। <strong>Mesh Topology</strong> में $n$ कंप्यूटरों को जोड़ने हेतु कुल केबलों का सूत्र $\mathbf{\frac{n(n-1)}{2}}$ होता है।</li>
            </ul>
          </div>

          <div class="bg-slate-800/90 border border-slate-700 p-5 rounded-xl">
            <h4 class="text-amber-400 font-bold text-base mb-2">🏗️ 2. OSI मॉडल की 7 परतें (Layers) एवं नेटवर्क उपकरण</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>1. Physical Layer:</strong> इकाई: <strong>Bits</strong> | उपकरण: <strong>Hub, Repeater, Modem, Cables</strong>।</li>
              <li><strong>2. Data Link Layer:</strong> इकाई: <strong>Frames</strong> | उपकरण: <strong>Switch, Bridge, NIC</strong> | <strong>MAC पता (48-बिट / 6 बाइट)</strong>।</li>
              <li><strong>3. Network Layer:</strong> इकाई: <strong>Packets</strong> | उपकरण: <strong>Router</strong> | <strong>IP पता (IPv4 = 32-बिट, IPv6 = 128-बिट)</strong>।</li>
              <li><strong>4. Transport Layer:</strong> इकाई: <strong>Segments</strong> | प्रोटोकॉल: <strong>TCP व UDP</strong> (Port Numbers)।</li>
              <li><strong>5. Session Layer</strong> $\rightarrow$ <strong>6. Presentation Layer</strong> (<strong>Encryption/Decryption</strong> व Compression) $\rightarrow$ <strong>7. Application Layer</strong> (HTTP, HTTPS, FTP, SMTP, DNS)।</li>
            </ul>
          </div>

          <div class="bg-emerald-950/50 border border-emerald-500/30 p-5 rounded-xl">
            <h4 class="text-emerald-300 font-bold text-base mb-2">🔢 3. IPv4 बनाम IPv6, पोर्ट नंबर एवं साइबर सुरक्षा</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>IPv4 (32-बिट, 4 ऑक्टेट 0–255):</strong> क्लास A (1–126; <strong>127.0.0.1 लूपबैक/लोकलहोस्ट</strong> हेतु आरक्षित), क्लास B (128–191), क्लास C (192–223), क्लास D (224–239 मल्टीकास्टिंग), क्लास E (240–255 अनुसंधान)। <strong>IPv6 = 128-बिट</strong>।</li>
              <li><strong>प्रमुख पोर्ट नंबर:</strong> <strong>HTTP = 80</strong> | <strong>HTTPS = 443</strong> | <strong>SMTP = 25</strong> (ईमेल भेजने हेतु) | <strong>POP3 = 110</strong> व <strong>IMAP = 143</strong> (ईमेल प्राप्त करने हेतु) | <strong>FTP = 20/21</strong> | <strong>DNS = 53</strong> | <strong>SSH = 22</strong>।</li>
              <li><strong>मैलवेयर एवं आईटी अधिनियम 2000:</strong> <strong>वायरस</strong> को होस्ट फाइल चाहिए; <strong>वॉर्म (Worm)</strong> बिना होस्ट के स्वतः नेटवर्क पर फैलता है; <strong>ट्रोजन हॉर्स</strong> स्वयं की प्रतियां नहीं बनाता; <strong>रैनसमवेयर (WannaCry)</strong> फाइलों को एन्क्रिप्ट कर फिरौती मांगता है। भारत में साइबर सुरक्षा की नोडल एजेंसी <strong>CERT-In</strong> है।</li>
            </ul>
          </div>
        </div>
      `,
    },
    workedExamples: [
      {
        title: {
          en: 'Calculating Cables in a Full Mesh Topology',
          pa: 'Mesh Topology ਵਿੱਚ ਕੁੱਲ ਕੇਬਲਾਂ ਦੀ ਗਿਣਤੀ ਕੱਢਣਾ',
          hi: 'Mesh Topology में कुल केबलों की संख्या ज्ञात करना',
        },
        problem: {
          en: 'An office network connects 10 computers in a Full Mesh Topology. How many dedicated point-to-point cables are required in total, and how many I/O ports must each computer have?',
          pa: 'ਇੱਕ ਦਫ਼ਤਰ ਵਿੱਚ 10 ਕੰਪਿਊਟਰਾਂ ਨੂੰ Full Mesh Topology ਰਾਹੀਂ ਜੋੜਿਆ ਗਿਆ ਹੈ। ਕੁੱਲ ਕਿੰਨੀਆਂ ਕੇਬਲਾਂ ਦੀ ਲੋੜ ਪਵੇਗੀ ਅਤੇ ਹਰੇਕ ਕੰਪਿਊਟਰ ਵਿੱਚ ਕਿੰਨੇ ਪੋਰਟ ਹੋਣੇ ਚਾਹੀਦੇ ਹਨ?',
          hi: 'एक कार्यालय में 10 कंप्यूटरों को Full Mesh Topology में जोड़ा गया है। कुल कितनी केबलों की आवश्यकता होगी और प्रत्येक कंप्यूटर में कितने पोर्ट होने चाहिए?',
        },
        steps: {
          en: [
            'Step 1: Number of nodes n = 10.',
            'Step 2: Total cables in Full Mesh = n(n − 1) / 2 = 10 × (10 − 1) / 2 = (10 × 9) / 2 = 45 cables.',
            'Step 3: Number of I/O ports per computer = n − 1 = 10 − 1 = 9 ports.',
          ],
          pa: [
            'ਕਦਮ 1: ਕੰਪਿਊਟਰਾਂ ਦੀ ਗਿਣਤੀ n = 10.',
            'ਕਦਮ 2: ਕੁੱਲ ਕੇਬਲਾਂ = n(n − 1) / 2 = 10 × 9 / 2 = 45 ਕੇਬਲਾਂ।',
            'ਕਦਮ 3: ਹਰੇਕ ਕੰਪਿਊਟਰ ਵਿੱਚ ਪੋਰਟ = n − 1 = 10 − 1 = 9 ਪੋਰਟ।',
          ],
          hi: [
            'चरण 1: कंप्यूटरों की संख्या n = 10.',
            'चरण 2: कुल केबल = n(n − 1) / 2 = 10 × 9 / 2 = 45 केबल।',
            'चरण 3: प्रत्येक कंप्यूटर में पोर्ट = n − 1 = 10 − 1 = 9 पोर्ट।',
          ],
        },
        solution: {
          en: '45 cables in total, and 9 I/O ports per computer.',
          pa: 'ਕੁੱਲ 45 ਕੇਬਲਾਂ ਅਤੇ ਪ੍ਰਤੀ ਕੰਪਿਊਟਰ 9 ਪੋਰਟ।',
          hi: 'कुल 45 केबल और प्रति कंप्यूटर 9 पोर्ट।',
        },
      },
      {
        title: {
          en: 'Identifying IPv4 Class & Loopback Address',
          pa: 'IPv4 ਐਡਰੈੱਸ ਦੀ ਕਲਾਸ ਅਤੇ ਲੂਪਬੈਕ ਪਤੇ ਦੀ ਪਛਾਣ',
          hi: 'IPv4 पते की क्लास एवं लूपबैक पते की पहचान',
        },
        problem: {
          en: 'Identify the IPv4 Class for: (1) 192.168.10.5, (2) 172.16.0.1, (3) 224.0.0.5, and explain the special meaning of 127.0.0.1.',
          pa: 'ਹੇਠ ਲਿਖੇ IPv4 ਪਤਿਆਂ ਦੀ ਕਲਾਸ ਦੱਸੋ: (1) 192.168.10.5, (2) 172.16.0.1, (3) 224.0.0.5, ਅਤੇ 127.0.0.1 ਦਾ ਮਹੱਤਵ ਦੱਸੋ।',
          hi: 'निम्नलिखित IPv4 पतों की क्लास बताइए: (1) 192.168.10.5, (2) 172.16.0.1, (3) 224.0.0.5, तथा 127.0.0.1 का महत्व स्पष्ट कीजिए।',
        },
        steps: {
          en: [
            'Step 1: Look ONLY at the first octet (before the first dot).',
            'Step 2: 192 falls in 192–223 → Class C.',
            'Step 3: 172 falls in 128–191 → Class B.',
            'Step 4: 224 falls in 224–239 → Class D (Multicasting).',
            'Step 5: 127.0.0.1 is the reserved Loopback / Localhost address used by a host to test its own NIC / TCP/IP stack.',
          ],
          pa: [
            'ਕਦਮ 1: ਪਹਿਲੇ ਅੰਕ (First Octet) ਨੂੰ ਦੇਖੋ: 192 (192–223) → Class C.',
            'ਕਦਮ 2: 172 (128–191) → Class B; 224 (224–239) → Class D (Multicasting).',
            'ਕਦਮ 3: 127.0.0.1 ਲੂਪਬੈਕ (Loopback / Localhost) ਪਤਾ ਹੈ ਜੋ ਕੰਪਿਊਟਰ ਦੇ ਆਪਣੇ ਨੈੱਟਵਰਕ ਕਾਰਡ ਦੀ ਜਾਂਚ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।',
          ],
          hi: [
            'चरण 1: प्रथम ऑक्टेट को देखें: 192 (192–223) → Class C.',
            'चरण 2: 172 (128–191) → Class B; 224 (224–239) → Class D (Multicasting).',
            'चरण 3: 127.0.0.1 लूपबैक (Loopback / Localhost) पता है जो स्वयं के नेटवर्क कार्ड की जांच हेतु प्रयुक्त होता है।',
          ],
        },
        solution: {
          en: '192.168.10.5 = Class C | 172.16.0.1 = Class B | 224.0.0.5 = Class D | 127.0.0.1 = Loopback / Localhost.',
          pa: '192.168.10.5 = Class C | 172.16.0.1 = Class B | 224.0.0.5 = Class D | 127.0.0.1 = Loopback / Localhost.',
          hi: '192.168.10.5 = Class C | 172.16.0.1 = Class B | 224.0.0.5 = Class D | 127.0.0.1 = Loopback / Localhost.',
        },
      },
    ],
    commonMisconceptions: [
      {
        misconception: {
          en: 'SMTP is used both to send and to download emails to a user’s inbox.',
          pa: 'SMTP ਦੀ ਵਰਤੋਂ ਈਮੇਲ ਭੇਜਣ ਅਤੇ ਪ੍ਰਾਪਤ ਕਰਨ (ਡਾਊਨਲੋਡ ਕਰਨ) ਦੋਵਾਂ ਲਈ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।',
          hi: 'SMTP का उपयोग ईमेल भेजने और प्राप्त करने (डाउनलोड करने) दोनों के लिए किया जाता है।',
        },
        correction: {
          en: 'SMTP (Simple Mail Transfer Protocol, Port 25) is strictly a "Push" protocol used for SENDING/forwarding emails between mail servers. For RECEIVING/retrieving emails from a mail server to a client inbox, POP3 (Port 110) or IMAP (Port 143) is used.',
          pa: 'SMTP (ਪੋਰਟ 25) ਕੇਵਲ ਈਮੇਲ ਭੇਜਣ (Sending) ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ। ਈਮੇਲ ਪ੍ਰਾਪਤ ਕਰਨ (Receiving) ਲਈ POP3 (ਪੋਰਟ 110) ਜਾਂ IMAP (ਪੋਰਟ 143) ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।',
          hi: 'SMTP (पोर्ट 25) केवल ईमेल भेजने (Sending) के लिए प्रयुक्त होता है। ईमेल प्राप्त करने (Receiving) के लिए POP3 (पोर्ट 110) या IMAP (पोर्ट 143) का उपयोग होता है।',
        },
        whyItMatters: {
          en: 'One of the most frequently tested protocol distinctions in PSSSB exams.',
          pa: 'ਪੀ.ਐੱਸ.ਐੱਸ.ਐੱਸ.ਬੀ. ਪ੍ਰੀਖਿਆਵਾਂ ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ ਪੁੱਛਿਆ ਜਾਣ ਵਾਲਾ ਪ੍ਰੋਟੋਕੋਲ ਪ੍ਰਸ਼ਨ।',
          hi: 'पीएसएसएसबी परीक्षाओं में सर्वाधिक पूछा जाने वाला प्रोटोकॉल प्रश्न।',
        },
      },
      {
        misconception: {
          en: 'Encryption and Decryption occur at the Application Layer of the OSI Model.',
          pa: 'OSI ਮਾਡਲ ਵਿੱਚ Encryption ਅਤੇ Decryption ਐਪਲੀਕੇਸ਼ਨ ਲੇਅਰ ਉੱਤੇ ਹੁੰਦੀ ਹੈ।',
          hi: 'OSI मॉडल में Encryption और Decryption एप्लीकेशन लेयर पर होते हैं।',
        },
        correction: {
          en: 'In the standard ISO-OSI 7-Layer reference model, Data Encryption/Decryption, Data Compression, and Character Format Translation are core responsibilities of Layer 6 — the Presentation Layer.',
          pa: 'OSI ਮਾਡਲ ਵਿੱਚ ਡੇਟਾ Encryption/Decryption ਅਤੇ Compression ਛੇਵੀਂ ਪਰਤ — Presentation Layer (Layer 6) — ਉੱਤੇ ਹੁੰਦੇ ਹਨ।',
          hi: 'OSI मॉडल में डेटा Encryption/Decryption और Compression छठी परत — Presentation Layer (Layer 6) — के कार्य हैं।',
        },
        whyItMatters: {
          en: 'Direct question in Punjab Police SI, Patwari, and Clerk exams.',
          pa: 'ਪੰਜਾਬ ਪੁਲਿਸ, ਪਟਵਾਰੀ ਅਤੇ ਕਲਰਕ ਪ੍ਰੀਖਿਆਵਾਂ ਵਿੱਚ ਸਿੱਧਾ ਪੁੱਛਿਆ ਜਾਣ ਵਾਲਾ ਪ੍ਰਸ਼ਨ।',
          hi: 'पंजाब पुलिस, पटवारी और क्लर्क परीक्षाओं में सीधा पूछा जाने वाला प्रश्न।',
        },
      },
    ],
    quickRevisionSheet: {
      highYieldPoints: {
        en: [
          'OSI Layers & Devices: L1 Physical (Bits; Hub/Repeater) → L2 Data Link (Frames; Switch/Bridge, 48-bit MAC) → L3 Network (Packets; Router, 32-bit IPv4 / 128-bit IPv6) → L4 Transport (Segments; TCP/UDP) → L5 Session → L6 Presentation (Encryption/Compression) → L7 Application (HTTP, FTP, SMTP, DNS).',
          'Ports: HTTP = 80, HTTPS = 443, SMTP = 25 (Send mail), POP3 = 110 / IMAP = 143 (Receive mail), FTP = 20/21, SSH = 22, Telnet = 23, DNS = 53.',
          'Malware: Virus needs host file; Worm self-replicates across networks without host; Trojan does NOT self-replicate; Ransomware (WannaCry) encrypts files for ransom.',
        ],
        pa: [
          'OSI ਪਰਤਾਂ ਤੇ ਉਪਕਰਨ: L1 Physical (Bits; Hub/Repeater) → L2 Data Link (Frames; Switch/Bridge, 48-ਬਿੱਟ MAC) → L3 Network (Packets; Router, IP) → L4 Transport (Segments; TCP/UDP) → L6 Presentation (Encryption) → L7 Application.',
          'ਪੋਰਟ ਨੰਬਰ: HTTP = 80, HTTPS = 443, SMTP = 25 (ਈਮੇਲ ਭੇਜਣਾ), POP3 = 110 / IMAP = 143 (ਈਮੇਲ ਪ੍ਰਾਪਤ ਕਰਨਾ), FTP = 20/21, DNS = 53.',
          'ਮਾਲਵੇਅਰ: ਵਾਇਰਸ ਨੂੰ ਹੋਸਟ ਚਾਹੀਦਾ ਹੈ; ਵਾਰਮ ਬਿਨਾਂ ਹੋਸਟ ਦੇ ਆਪਣੇ ਆਪ ਫੈਲਦਾ ਹੈ; ਟ੍ਰੋਜਨ ਆਪਣੀ ਕਾਪੀ ਨਹੀਂ ਬਣਾਉਂਦਾ; ਰੈਨਸਮਵੇਅਰ (WannaCry) ਫਿਰੌਤੀ ਮੰਗਦਾ ਹੈ।',
        ],
        hi: [
          'OSI परतें व उपकरण: L1 Physical (Bits; Hub/Repeater) → L2 Data Link (Frames; Switch/Bridge, 48-बिट MAC) → L3 Network (Packets; Router, IP) → L4 Transport (Segments; TCP/UDP) → L6 Presentation (Encryption) → L7 Application.',
          'पोर्ट नंबर: HTTP = 80, HTTPS = 443, SMTP = 25 (ईमेल भेजना), POP3 = 110 / IMAP = 143 (ईमेल प्राप्त करना), FTP = 20/21, DNS = 53.',
          'मैलवेयर: वायरस को होस्ट चाहिए; वॉर्म बिना होस्ट के स्वतः फैलता है; ट्रोजन प्रतियां नहीं बनाता; रैनसमवेयर (WannaCry) फिरौती मांगता है।',
        ],
      },
      examTraps: {
        en: [
          'Trap: ARP (Address Resolution Protocol) maps a known IP address to an unknown physical MAC address.',
          'Trap: DNS translates a human-readable domain name (e.g., google.com) into an IP address.',
        ],
        pa: [
          'ਧੋਖਾ: ARP ਆਈ.ਪੀ. ਪਤੇ ਨੂੰ ਭੌਤਿਕ MAC ਪਤੇ ਵਿੱਚ ਬਦਲਦਾ ਹੈ, ਜਦਕਿ DNS ਡੋਮੇਨ ਨਾਮ ਨੂੰ ਆਈ.ਪੀ. ਪਤੇ ਵਿੱਚ ਬਦਲਦਾ ਹੈ।',
        ],
        hi: [
          'धोखा: ARP आईपी पते को भौतिक MAC पते में बदलता है, जबकि DNS डोमेन नाम को आईपी पते में बदलता है।',
        ],
      },
    },
    summary: {
      en: 'Exam-focused synthesis of Computer Networking and Cybersecurity: Transmission modes, LAN/MAN/WAN, topologies (Mesh formula $n(n-1)/2$), the 7-layer OSI model (PDUs, Hub/Switch/Router/Gateway), IPv4 (32-bit, Classes A–E, 127.0.0.1 loopback) vs IPv6 (128-bit) vs MAC (48-bit), TCP/UDP ports (HTTP 80, HTTPS 443, SMTP 25, DNS 53), Malware taxonomy (Virus, Worm, Trojan, Ransomware), and the Indian IT Act 2000.',
      pa: 'ਕੰਪਿਊਟਰ ਨੈੱਟਵਰਕਿੰਗ ਅਤੇ ਸਾਈਬਰ ਸੁਰੱਖਿਆ ਦਾ ਸੰਪੂਰਨ ਪਾਠ: LAN/MAN/WAN, ਟੋਪੋਲੋਜੀ, OSI ਮਾਡਲ ਦੀਆਂ 7 ਪਰਤਾਂ, Hub/Switch/Router, IPv4 (32-ਬਿੱਟ) ਬਨਾਮ IPv6 (128-ਬਿੱਟ) ਬਨਾਮ MAC (48-ਬਿੱਟ), ਪੋਰਟ ਨੰਬਰ (HTTP 80, HTTPS 443, SMTP 25, DNS 53), ਮਾਲਵੇਅਰ (ਵਾਇਰਸ, ਵਾਰਮ, ਟ੍ਰੋਜਨ, ਰੈਨਸਮਵੇਅਰ) ਅਤੇ ਆਈ.ਟੀ. ਐਕਟ 2000।',
      hi: 'कंप्यूटर नेटवर्किंग एवं साइबर सुरक्षा का संपूर्ण पाठ: LAN/MAN/WAN, टोपोलॉजी, OSI मॉडल की 7 परतें, Hub/Switch/Router, IPv4 (32-बिट) बनाम IPv6 (128-बिट) बनाम MAC (48-बिट), पोर्ट नंबर (HTTP 80, HTTPS 443, SMTP 25, DNS 53), मैलवेयर (वायरस, वॉर्म, ट्रोजन, रैनसमवेयर) और आईटी अधिनियम 2000।',
    },
    keyNotes: {
      en: [
        '📌 OSI Layers: L1 Physical (Bits, Hub), L2 Data Link (Frames, Switch, 48-bit MAC), L3 Network (Packets, Router, IP), L4 Transport (Segments, TCP/UDP).',
        '📌 Addressing: IPv4 = 32-bit (127.0.0.1 is Loopback); IPv6 = 128-bit; MAC Address = 48-bit (6 Bytes Hex).',
        '📌 Ports: HTTP = 80, HTTPS = 443, SMTP = 25 (Send Email), POP3 = 110 / IMAP = 143 (Receive Email), DNS = 53.',
        '📌 Malware: Worms self-replicate across networks without a host; Trojans do NOT self-replicate; WannaCry is Ransomware.',
      ],
      pa: [
        '📌 OSI ਪਰਤਾਂ: L1 Physical (Bits, Hub), L2 Data Link (Frames, Switch, 48-ਬਿੱਟ MAC), L3 Network (Packets, Router, IP), L4 Transport (Segments).',
        '📌 ਪਤੇ: IPv4 = 32-ਬਿੱਟ (127.0.0.1 ਲੂਪਬੈਕ); IPv6 = 128-ਬਿੱਟ; MAC ਪਤਾ = 48-ਬਿੱਟ (6 ਬਾਈਟ)।',
        '📌 ਪੋਰਟ: HTTP = 80, HTTPS = 443, SMTP = 25 (ਈਮੇਲ ਭੇਜਣਾ), POP3 = 110 / IMAP = 143 (ਈਮੇਲ ਪ੍ਰਾਪਤ ਕਰਨਾ), DNS = 53.',
        '📌 ਮਾਲਵੇਅਰ: ਵਾਰਮ ਬਿਨਾਂ ਹੋਸਟ ਦੇ ਫੈਲਦਾ ਹੈ; ਟ੍ਰੋਜਨ ਆਪਣੀ ਕਾਪੀ ਨਹੀਂ ਬਣਾਉਂਦਾ; WannaCry ਇੱਕ ਰੈਨਸਮਵੇਅਰ ਹੈ।',
      ],
      hi: [
        '📌 OSI परतें: L1 Physical (Bits, Hub), L2 Data Link (Frames, Switch, 48-बिट MAC), L3 Network (Packets, Router, IP), L4 Transport (Segments).',
        '📌 पते: IPv4 = 32-बिट (127.0.0.1 लूपबैक); IPv6 = 128-बिट; MAC पता = 48-बिट (6 बाइट)।',
        '📌 पोर्ट: HTTP = 80, HTTPS = 443, SMTP = 25 (ईमेल भेजना), POP3 = 110 / IMAP = 143 (ईमेल प्राप्त करना), DNS = 53.',
        '📌 मैलवेयर: वॉर्म बिना होस्ट के फैलता है; ट्रोजन प्रतियां नहीं बनाता; WannaCry एक रैनसमवेयर है।',
      ],
    },
    flashcards: [
      {
        id: 'fc-cnc-1',
        q: {
          en: 'At which layer of the OSI Model does a Router operate, and what is its Protocol Data Unit (PDU)?',
          pa: 'ਰਾਊਟਰ (Router) OSI ਮਾਡਲ ਦੀ ਕਿਹੜੀ ਪਰਤ ਉੱਤੇ ਕੰਮ ਕਰਦਾ ਹੈ ਅਤੇ ਇਸ ਦੀ ਡੇਟਾ ਇਕਾਈ (PDU) ਕੀ ਹੈ?',
          hi: 'राउटर (Router) OSI मॉडल की किस परत पर कार्य करता है और इसकी डेटा इकाई (PDU) क्या है?',
        },
        a: {
          en: 'Layer 3 — Network Layer; its PDU is a Packet.',
          pa: 'ਤੀਜੀ ਪਰਤ — Network Layer; ਇਸ ਦੀ ਇਕਾਈ Packet ਹੈ।',
          hi: 'तीसरी परत — Network Layer; इसकी इकाई Packet है।',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-cnc-2',
        q: {
          en: 'What is the bit length of an IPv4 address, an IPv6 address, and a physical MAC address?',
          pa: 'IPv4 ਪਤੇ, IPv6 ਪਤੇ ਅਤੇ MAC ਪਤੇ ਦਾ ਆਕਾਰ ਕਿੰਨੇ ਬਿੱਟ ਹੁੰਦਾ ਹੈ?',
          hi: 'IPv4 पते, IPv6 पते और भौतिक MAC पते का आकार कितने बिट होता है?',
        },
        a: {
          en: 'IPv4 = 32 bits (4 Bytes); IPv6 = 128 bits (16 Bytes); MAC Address = 48 bits (6 Bytes).',
          pa: 'IPv4 = 32 ਬਿੱਟ; IPv6 = 128 ਬਿੱਟ; MAC ਐਡਰੈੱਸ = 48 ਬਿੱਟ (6 ਬਾਈਟ)।',
          hi: 'IPv4 = 32 बिट; IPv6 = 128 बिट; MAC पता = 48 बिट (6 बाइट)।',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-cnc-3',
        q: {
          en: 'Which IPv4 address is reserved as the Loopback (Localhost) address for testing a computer’s own network interface?',
          pa: 'ਕੰਪਿਊਟਰ ਦੇ ਆਪਣੇ ਨੈੱਟਵਰਕ ਕਾਰਡ ਦੀ ਜਾਂਚ ਲਈ ਕਿਹੜਾ IPv4 ਪਤਾ ਲੂਪਬੈਕ (Loopback / Localhost) ਵਜੋਂ ਰਾਖਵਾਂ ਹੈ?',
          hi: 'कंप्यूटर के स्वयं के नेटवर्क इंटरफ़ेस की जांच हेतु कौन-सा IPv4 पता लूपबैक (Loopback / Localhost) के रूप में आरक्षित है?',
        },
        a: {
          en: '127.0.0.1',
          pa: '127.0.0.1',
          hi: '127.0.0.1',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-cnc-4',
        q: {
          en: 'How many point-to-point cables are needed to connect 8 computers in a Full Mesh Topology?',
          pa: '8 ਕੰਪਿਊਟਰਾਂ ਨੂੰ Full Mesh Topology ਵਿੱਚ ਜੋੜਨ ਲਈ ਕੁੱਲ ਕਿੰਨੀਆਂ ਕੇਬਲਾਂ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ?',
          hi: '8 कंप्यूटरों को Full Mesh Topology में जोड़ने के लिए कुल कितनी केबलों की आवश्यकता होती है?',
        },
        a: {
          en: '28 cables (using formula n(n-1)/2 = 8 × 7 / 2 = 28).',
          pa: '28 ਕੇਬਲਾਂ (ਸੂਤਰ n(n-1)/2 = 8 × 7 / 2 = 28)।',
          hi: '28 केबल (सूत्र n(n-1)/2 = 8 × 7 / 2 = 28)।',
        },
        difficulty: 'medium',
      },
    ],
    videos: [
      {
        title: 'Computer Networking, OSI Model, IPv4/IPv6 & Cybersecurity | PSSSB Clerk',
        channel: 'NIOS / NCERT Computer Science Archive',
        url: 'https://www.youtube.com/results?search_query=Computer+Networking+OSI+Model+Cyber+Security+PSSSB+Clerk',
        language: 'Punjabi / English / Hindi',
      },
    ],
    bookRefs: [
      {
        title: 'Computer Science (Course 330 — Senior Secondary)',
        author: 'National Institute of Open Schooling (NIOS)',
        chapters: 'Data Communication, Computer Networks & Internet Security',
        type: 'ncert',
      },
    ],
    syllabusReference: {
      title: 'PSSSB Clerk Networking & Cyber Security Syllabus',
      url: 'https://sssb.punjab.gov.in/',
      body: 'Punjab Subordinate Services Selection Board (PSSSB)',
      verifiedOn: '2026-10-10',
    },
  },

  // ==========================================================================
  // TOPIC 4: PUNJABI FOLK CULTURE, DANCES, FAIRS, ORNAMENTS & LITERATURE
  // ==========================================================================
  'punjab-culture-folklore': {
    id: 'punjab-culture-folklore',
    topicId: 'punjab-culture-folklore',
    subjectId: 'clerk-special',
    category: 'clerk',
    coverageStatus: 'complete',
    editorialStatus: 'authored',
    title: {
      en: 'Punjab Culture & Heritage: Folk Dances, Fairs & Festivals, Ornaments, Phulkari & Sufi/Qissa Literature',
      pa: 'ਪੰਜਾਬ ਦਾ ਸੱਭਿਆਚਾਰ ਅਤੇ ਵਿਰਸਾ: ਲੋਕ-ਨਾਚ, ਮੇਲੇ ਤੇ ਤਿਉਹਾਰ, ਗਹਿਣੇ, ਫੁਲਕਾਰੀ ਅਤੇ ਸੂਫ਼ੀ/ਕਿੱਸਾ ਸਾਹਿਤ',
      hi: 'पंजाब की संस्कृति एवं विरासत: लोक नृत्य, मेले व त्योहार, आभूषण, फुलकारी एवं सूफी/किस्सा साहित्य',
    },
    examRelevance: 'PSSSB Clerk (4–5 Qs), Punjab Patwari (4–5 Qs), Master Cadre SST/Punjabi, ETT & Police',
    estimatedTime: '45 mins',
    prerequisites: {
      en: [
        'Cultural regions of Punjab: Majha (Amritsar, Gurdaspur, Tarn Taran, Pathankot), Doaba (Jalandhar, Hoshiarpur, Kapurthala, SBS Nagar), Malwa (15 districts south of Sutlej), and Puadh.',
      ],
      pa: [
        'ਪੰਜਾਬ ਦੇ ਸੱਭਿਆਚਾਰਕ ਖੇਤਰ: ਮਾਝਾ (4 ਜ਼ਿਲ੍ਹੇ), ਦੁਆਬਾ (4 ਜ਼ਿਲ੍ਹੇ), ਮਾਲਵਾ (15 ਜ਼ਿਲ੍ਹੇ) ਅਤੇ ਪੁਆਧ ਦੀ ਭੂਗੋਲਿਕ ਸਮਝ।',
      ],
      hi: [
        'पंजाब के सांस्कृतिक क्षेत्र: माझा (4 जिले), दोआबा (4 जिले), मालवा (15 जिले) और पुआध की भौगोलिक समझ।',
      ],
    },
    learningObjectives: {
      en: [
        'Classify all Punjabi Folk Dances of men (Bhangra, Jhumar, Luddi, Malwai Giddha, Dhamaal, Julli) and women (Giddha, Sammi, Kikli, Jaago) along with traditional musical instruments (Tumbi, Algoza, Dhad, Sarangi, Bugchu).',
        'Identify major Fairs & Festivals of Punjab (Chhapar Mela, Jarag Mela, Roshni Mela Jagraon, Maghi Mela Muktsar, Hola Mohalla Anandpur, Gadri Babian da Mela, Harballabh Sangeet Sammelan) with their exact locations, Desi months, and deities/saints.',
        'Master traditional Punjabi ornaments (Saggi Phul, Pipal Pattian, Kaintha, Gokhru, Nath, Pazeb), varieties of Phulkari (Chope, Subhar, Bagh, Tilpatra, Neelak), wedding rituals (Suhag vs Ghorian, Sithnian, Chhand), and Sufi/Qissa literature.',
      ],
      pa: [
        'ਪੰਜਾਬ ਦੇ ਮਰਦਾਂ ਦੇ ਲੋਕ-ਨਾਚ (ਭੰਗੜਾ, ਝੁੰਮਰ, ਲੁੱਡੀ, ਮਲਵਈ ਗਿੱਧਾ, ਧਮਾਲ, ਜੁੱਲੀ) ਅਤੇ ਔਰਤਾਂ ਦੇ ਲੋਕ-ਨਾਚ (ਗਿੱਧਾ, ਸੰਮੀ, ਕਿੱਕਲੀ, ਜਾਗੋ) ਅਤੇ ਲੋਕ-ਸਾਜ਼ਾਂ (ਤੂੰਬੀ, ਅਲਗੋਜ਼ਾ, ਢੱਡ, ਸਾਰੰਗੀ, ਬੁਗਚੂ) ਦੀ ਪਛਾਣ ਕਰਨਾ।',
        'ਪੰਜਾਬ ਦੇ ਪ੍ਰਮੁੱਖ ਮੇਲਿਆਂ (ਛਪਾਰ ਦਾ ਮੇਲਾ, ਜਰਗ ਦਾ ਮੇਲਾ, ਜਗਰਾਵਾਂ ਦੀ ਰੌਸ਼ਨੀ, ਮਾਘੀ ਮੇਲਾ ਮੁਕਤਸਰ, ਹੋਲਾ ਮਹੱਲਾ, ਹਰਵੱਲਭ ਸੰਗੀਤ ਸੰਮੇਲਨ) ਦੇ ਸਥਾਨਾਂ ਅਤੇ ਦੇਸੀ ਮਹੀਨਿਆਂ ਨੂੰ ਜਾਣਨਾ।',
        'ਪੰਜਾਬੀ ਗਹਿਣਿਆਂ (ਸੱਗੀ ਫੁੱਲ, ਪਿੱਪਲ ਪੱਤੀਆਂ, ਕੈਂਠਾ, ਨੱਥ, ਗੋਖੜੂ), ਫੁਲਕਾਰੀ ਦੀਆਂ ਕਿਸਮਾਂ (ਚੋਪ, ਸੁਭਰ, ਬਾਗ਼, ਤਿਲਪੱਤਰਾ, ਨੀਲਕ), ਲੋਕ-ਗੀਤਾਂ (ਸੁਹਾਗ, ਘੋੜੀਆਂ, ਸਿੱਠਣੀਆਂ) ਅਤੇ ਸੂਫ਼ੀ/ਕਿੱਸਾ ਕਾਵਿ ਦਾ ਅਧਿਐਨ ਕਰਨਾ।',
      ],
      hi: [
        'पंजाब के पुरुष लोक नृत्यों (भांगड़ा, झुम्मर, लुड्डी, मलवई गिद्दा, धमाल, जुल्ली) व महिला लोक नृत्यों (गिद्दा, सम्मी, किक्कली, जागो) तथा लोक वाद्यों (तूंबी, अलगोजा, ढड्ड, सारंगी, बुगचू) को समझना।',
        'पंजाब के प्रमुख मेलों (छपार का मेला, जरग का मेला, जगराओं की रोशनी, माघी मेला मुक्तसर, होला मोहल्ला, हरवल्लभ संगीत सम्मेलन) के स्थानों और देसी महीनों को जानना।',
        'पंजाबी आभूषणों (सग्गी फूल, पीपल पत्तियां, कैंठा, नथ, गोखरू), फुलकारी के प्रकारों (चोप, सुभर, बाग, तिलपत्रा, नीलक), लोकगीतों (सुहाग, घोड़ियां, सिट्ठणियां) और सूफी/किस्सा साहित्य का अध्ययन करना।',
      ],
    },
    content: {
      en: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">💃 1. Folk Dances & Traditional Musical Instruments of Punjab</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <div class="bg-slate-900/80 border border-slate-700 p-4 rounded-xl">
                <h5 class="text-amber-300 font-bold text-xs mb-1.5">🕺 Folk Dances of Men</h5>
                <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4">
                  <li><strong>Bhangra:</strong> Energetic harvest dance of Punjab (originating in Sialkot/Majha during Baisakhi), accompanied by the <em>Dhol</em> and <em>Boliyan</em>.</li>
                  <li><strong>Jhumar (ਝੁੰਮਰ):</strong> Graceful, rhythmic circular dance of the <strong>Sandal Bar</strong> (Jhang/Montgomery region, West Punjab) performed in three tempos (<em>Tinn Taal</em>), expressing ecstasy.</li>
                  <li><strong>Luddi (ਲੁੱਡੀ):</strong> Performed to celebrate a <strong>victory</strong> (in sports, litigation, or battle) with swaying snake-like hand movements and clicking fingers.</li>
                  <li><strong>Malwai Giddha (ਮਲਵਈ ਗਿੱਧਾ / ਬਾਬਿਆਂ ਦਾ ਗਿੱਧਾ):</strong> Performed by men of the Malwa region using folk instruments like <strong>Chimta, Bugchu, Khunda, Kato, and Sapp</strong> while singing philosophical and witty <em>Boliyan</em>.</li>
                  <li><strong>Dhamaal:</strong> Ecstatic dance performed by Sufi devotees at shrines to the beat of the <em>Nagara/Dhol</em>.</li>
                  <li><strong>Julli (ਜੁੱਲੀ):</strong> Religious dance performed by Muslim Sufi Pirs/Fakirs in sitting/kneeling posture (often only dance performed sitting).</li>
                  <li><strong>Dankara (ਡੰਡਾਸ):</strong> Stick dance similar to Dandiya.</li>
                </ul>
              </div>

              <div class="bg-slate-900/80 border border-slate-700 p-4 rounded-xl">
                <h5 class="text-emerald-300 font-bold text-xs mb-1.5">💃 Folk Dances of Women & Instruments</h5>
                <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4">
                  <li><strong>Giddha (ਗਿੱਧਾ):</strong> Queen of Punjabi women’s dances; performed in a circle with rhythmic hand-clapping and dramatic enactment of <em>Boliyan</em> and <em>Tappe</em> (NO Dhol is required in traditional Giddha; only <em>Dholki</em> or clapping).</li>
                  <li><strong>Sammi (ਸੰਮੀ):</strong> Ancient, slow-paced dance of the <strong>Sandal Bar / West Punjab</strong> named after legendary heroine Sammi, performed around a bonfire without any musical instrument (accompanied by clapping and snapping fingers/chutki).</li>
                  <li><strong>Kikli (ਕਿੱਕਲੀ):</strong> Whirling dance of young girls holding hands crosswise in pairs (<em>"Kikli kaleer di, pag mere veer di..."</em>).</li>
                  <li><strong>Folk Musical Instruments (ਲੋਕ-ਸਾਜ਼):</strong>
                    <br/>• <em>String (ਤੰਤੀ ਸਾਜ਼):</em> <strong>Tumbi</strong> (1 string — popularized by Lal Chand Yamla Jatt), <strong>Sarangi</strong> (used by Dhadi singers with <em>Dhad</em>), <strong>Rabaab</strong>, <strong>Ektara</strong>.
                    <br/>• <em>Wind (ਫੂਕ ਸਾਜ਼):</em> <strong>Algoza (Jori)</strong> (twin bamboo flutes played together), <strong>Vanjhli</strong>, <strong>Been</strong>.
                    <br/>• <em>Percussion & Idiophone (ਚਮੜੇ ਤੇ ਘਣ ਸਾਜ਼):</em> <strong>Dhol, Dholki, Dhad, Duff, Gharha, Chimta, Bugchu, Sapp, Kato</strong>.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-slate-800/90 border border-slate-700 p-5 rounded-xl">
            <h4 class="text-amber-400 font-bold text-base mb-2">🎡 2. Major Fairs (Melas) & Festivals of Punjab</h4>
            <div class="overflow-x-auto">
              <table class="w-full text-xs text-left border-collapse border border-slate-700">
                <thead>
                  <tr class="bg-slate-800 text-amber-300">
                    <th class="p-2 border border-slate-700">Fair / Festival</th>
                    <th class="p-2 border border-slate-700">District / Venue</th>
                    <th class="p-2 border border-slate-700">Desi Month / Date</th>
                    <th class="p-2 border border-slate-700">Deity / Saint / Historical Significance</th>
                  </tr>
                </thead>
                <tbody class="text-slate-300">
                  <tr class="border-b border-slate-800">
                    <td class="p-2 font-bold text-white">Chhapar Mela (ਛਪਾਰ ਦਾ ਮੇਲਾ)</td>
                    <td class="p-2"><strong>Chhapar (Ludhiana)</strong></td>
                    <td class="p-2"><strong>Bhadon</strong> (Sept — Anant Chaudas)</td>
                    <td class="p-2">Held at <strong>Guga Mari</strong> in honor of <strong>Guga Pir</strong> (worshipped as Lord of Snakes / Nag Devta).</td>
                  </tr>
                  <tr class="border-b border-slate-800 bg-slate-900/50">
                    <td class="p-2 font-bold text-white">Jarag Mela / Bahriye da Mela (ਜਰਗ ਦਾ ਮੇਲਾ)</td>
                    <td class="p-2"><strong>Jarag (Payal, Ludhiana)</strong></td>
                    <td class="p-2"><strong>Chet</strong> (March–April)</td>
                    <td class="p-2">In honor of <strong>Mata Seetla</strong> (Goddess of Smallpox); sweet <em>Gulgule</em> are cooked a day before (<em>Bahria</em>) and offered to <strong>donkeys</strong> (Mata Seetla’s mount).</td>
                  </tr>
                  <tr class="border-b border-slate-800">
                    <td class="p-2 font-bold text-white">Roshni Mela (ਜਗਰਾਵਾਂ ਦੀ ਰੌਸ਼ਨੀ)</td>
                    <td class="p-2"><strong>Jagraon (Ludhiana)</strong></td>
                    <td class="p-2"><strong>Phagun</strong> (14–16 Phagun / Feb)</td>
                    <td class="p-2">Held at the Dargah of Sufi saint <strong>Hazrat Baba Mohkam-ud-Din</strong> (thousands of earthen lamps lit).</td>
                  </tr>
                  <tr class="border-b border-slate-800 bg-slate-900/50">
                    <td class="p-2 font-bold text-white">Maghi Mela (ਮਾਘੀ ਦਾ ਮੇਲਾ)</td>
                    <td class="p-2"><strong>Sri Muktsar Sahib</strong></td>
                    <td class="p-2"><strong>1 Magh</strong> (14 January)</td>
                    <td class="p-2">Commemorates the martyrdom of the <strong>40 Mukte (Chali Mukte)</strong> at Khidrana (1705).</td>
                  </tr>
                  <tr class="border-b border-slate-800">
                    <td class="p-2 font-bold text-white">Hola Mohalla (ਹੋਲਾ ਮਹੱਲਾ)</td>
                    <td class="p-2"><strong>Sri Anandpur Sahib</strong></td>
                    <td class="p-2"><strong>1 Chet</strong> (day after Holi)</td>
                    <td class="p-2">Started by <strong>Sri Guru Gobind Singh Ji (1701)</strong> for Nihang martial mock battles and gatka.</td>
                  </tr>
                  <tr class="border-b border-slate-800 bg-slate-900/50">
                    <td class="p-2 font-bold text-white">Shaheedi Jor Mela</td>
                    <td class="p-2"><strong>Fatehgarh Sahib</strong></td>
                    <td class="p-2"><strong>11–13 Poh</strong> (26–28 Dec)</td>
                    <td class="p-2">Supreme martyrdom of Younger Sahibzadas Baba Zorawar Singh & Baba Fateh Singh and Mata Gujri Ji.</td>
                  </tr>
                  <tr class="border-b border-slate-800">
                    <td class="p-2 font-bold text-white">Harballabh Sangeet Sammelan</td>
                    <td class="p-2"><strong>Devi Talab, Jalandhar</strong></td>
                    <td class="p-2">December</td>
                    <td class="p-2">World’s oldest festival of Indian Classical Music (started in <strong>1875</strong> in memory of Baba Harballabh).</td>
                  </tr>
                  <tr class="border-b border-slate-800 bg-slate-900/50">
                    <td class="p-2 font-bold text-white">Gadri Babian da Mela & Prof. Mohan Singh Mela</td>
                    <td class="p-2"><strong>Jalandhar</strong> & <strong>Ludhiana</strong></td>
                    <td class="p-2">Oct–Nov</td>
                    <td class="p-2">Desh Bhagat Yadgar Hall (Jalandhar) for Ghadar heroes; Prof. Mohan Singh cultural fair at Ludhiana; Kila Raipur Rural Olympics (Ludhiana).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="bg-emerald-950/50 border border-emerald-500/30 p-5 rounded-xl">
            <h4 class="text-emerald-300 font-bold text-base mb-2">💍 3. Traditional Ornaments (ਗਹਿਣੇ), Phulkari Varieties & Folk Songs</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>Traditional Ornaments by Body Part (High-Frequency PSSSB Questions):</strong>
                <br/>• <strong>Head & Forehead (ਸਿਰ ਅਤੇ ਮੱਥੇ ਦੇ ਗਹਿਣੇ — Women):</strong> <strong>Saggi Phul (ਸੱਗੀ ਫੁੱਲ)</strong>, <strong>Chauk (ਚੌਂਕ)</strong>, <strong>Shingar Patti (ਸ਼ਿੰਗਾਰ ਪੱਟੀ)</strong>, <strong>Tikka (ਟਿੱਕਾ)</strong>, <strong>Bindi</strong>, <strong>Jhumar / Passa</strong>, <strong>Baghiari (ਬਘਿਆੜੀ)</strong>, <strong>Dauni (ਦੌਣੀ)</strong>.
                <br/>• <strong>Ears (ਕੰਨਾਂ ਦੇ ਗਹਿਣੇ):</strong> <strong>Pipal Pattian (ਪਿੱਪਲ ਪੱਤੀਆਂ)</strong>, <strong>Kantala</strong>, <strong>Jhumke</strong>, <strong>Walian</strong>, <strong>Bujhli (ਬੁਝਲੀ)</strong>, <strong>Kokru (ਕੋਕਰੂ)</strong>, <strong>Dhedoo</strong>, <strong>Murkiyan (ਮੁਰਕੀਆਂ — worn by Men in ears!)</strong>.
                <br/>• <strong>Nose (ਨੱਕ ਦੇ ਗਹਿਣੇ):</strong> <strong>Nath (ਨੱਥ)</strong>, <strong>Machhli (ਮਛਲੀ)</strong>, <strong>Laung (ਲੌਂਗ)</strong>, <strong>Koka (ਕੋਕਾ)</strong>, <strong>Nukra</strong>, <strong>Phulli (ਫੁੱਲੀ)</strong>, <strong>Bulaak (ਬੁਲਾਕ)</strong>.
                <br/>• <strong>Neck (ਗਲ ਦੇ ਗਹਿਣੇ):</strong> <strong>Rani Haar</strong>, <strong>Galshri (ਗਲਸਰੀ)</strong>, <strong>Jugni (ਜੁਗਨੀ)</strong>, <strong>Taveet</strong>, <strong>Mohran / Nauratan</strong>, <strong>Hasli (ਹਸਲੀ)</strong>, <strong>Champakkali</strong>; and for <strong>Men: Kaintha (ਕੈਂਠਾ) & Mala</strong>.
                <br/>• <strong>Wrists & Arms (ਵੰਗਾਂ/ਬਾਹਾਂ ਦੇ ਗਹਿਣੇ):</strong> <strong>Gokhru (ਗੋਖੜੂ — heavy gold wrist ornament)</strong>, <strong>Kangan</strong>, <strong>Pariband</strong>, <strong>Churian / Kalire</strong>, <strong>Bahutta / Tadagi (armlet)</strong>.
                <br/>• <strong>Feet & Ankles (ਪੈਰਾਂ ਦੇ ਗਹਿਣੇ):</strong> <strong>Pazeb / Jhanjar (ਪਜ਼ੇਬ / ਝਾਂਜਰ)</strong>, <strong>Bichhue (ਬਿੱਛੂਏ — toes)</strong>, <strong>Bankan</strong>, <strong>Lachhe</strong>.
              </li>
              <li><strong>Varieties of Phulkari Embroidery (ਫੁਲਕਾਰੀ ਦੀਆਂ ਕਿਸਮਾਂ — GI Tag of Punjab):</strong> Embroidered from the reverse side on hand-spun coarse cotton cloth (<em>Khaddar</em>) using untwisted silk thread called <strong>Pat (ਪੱਟ)</strong>:
                <br/>• <strong>Bagh (ਬਾਗ਼):</strong> Embroidery covers every inch of the base cloth so densely that the underlying Khaddar is completely invisible (e.g., <em>Vari da Bagh</em> gifted to the bride by the groom's family).
                <br/>• <strong>Chope (ਚੋਪ):</strong> Embroidered by the maternal grandmother (<em>Nani</em>) with yellow thread on red cloth using a two-sided running stitch (no knots) and draped over the bride during the <em>Chura</em> ceremony.
                <br/>• <strong>Subhar (ਸੁਭਰ):</strong> Red bridal Phulkari with 5 central floral motifs (one in the centre and four at the corners) worn during the 4 <em>Laavan</em> of Anand Karaj.
                <br/>• <strong>Tilpatra (ਤਿਲਪੱਤਰਾ):</strong> Sparse sesame-seed-like dotted embroidery gifted to domestic helpers at weddings.
                <br/>• <strong>Neelak (ਨੀਲਕ):</strong> Phulkari embroidered with yellow/crimson silk on a navy-blue/black Khaddar base.
                <br/>• <strong>Sainchi Phulkari (ਸੈਂਚੀ ਫੁਲਕਾਰੀ):</strong> Specialty of the <strong>Malwa region</strong> depicting scenes of rural life, animals,trains, and wrestlers.
              </li>
              <li><strong>Punjabi Wedding Folk Songs (ਲੋਕ-ਗੀਤ):</strong>
                <br/>• <strong>Suhag (ਸੁਹਾਗ):</strong> Sung at the <strong>Bride's (ਕੁੜੀ ਦੇ)</strong> home before marriage expressing her affectionate bond with her parents (<em>Babul</em>) and prayers for a good match.
                <br/>• <strong>Ghorian (ਘੋੜੀਆਂ):</strong> Sung at the <strong>Groom's (ਮੁੰਡੇ ਦੇ)</strong> home praising the groom and his sisters/mother.
                <br/>• <strong>Sithnian (ਸਿੱਠਣੀਆਂ):</strong> Playful, satirical verses sung by women of the bride's side teasing the groom's wedding party (<em>Barat</em>).
                <br/>• <strong>Chhand Paraga (ਛੰਦ ਪਰਾਗਾ):</strong> Poetic couplets recited by the groom in front of his sisters-in-law (<em>Saliyan</em>) after the wedding.
                <br/>• <strong>Alahniyan (ਅਲਾਹੁਣੀਆਂ) & Vain (ਵੈਣ):</strong> Elegiac songs of mourning sung upon death.
              </li>
            </ul>
          </div>

          <div class="bg-rose-950/50 border border-rose-500/30 p-5 rounded-xl">
            <h4 class="text-rose-300 font-bold text-base mb-2">📚 4. Sufi Poetry & Qissa Kav Tradition of Punjab</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>Punjabi Sufi Poets:</strong>
                <br/>• <strong>Baba Sheikh Farid Ji (1173–1266, Chishti silsila):</strong> Father of Punjabi Poetry; <strong>112 Saloks and 4 Shabads</strong> recorded in Sri Guru Granth Sahib Ji (in Raag Asa & Raag Suhi).
                <br/>• <strong>Shah Hussain (1538–1599, Qadiri/Malamati):</strong> Pioneer of the <strong>Kafi</strong> form in Punjabi (famous for his love of Madho Lal; <em>Mela Chiraghan</em> at Lahore).
                <br/>• <strong>Sultan Bahu (1628–1691):</strong> Famous for his <strong>Siharfi</strong> (30-letter acrostic poems ending with the mystic refrain <strong>"Hoo" — ਹੂ</strong>).
                <br/>• <strong>Baba Bulleh Shah (1680–1757, Kasur — disciple of Shah Inayat Qadiri):</strong> Crown jewel of Punjabi Sufi Kafi (<em>"Bulleh Ki Jana Main Kaun"</em>).
              </li>
              <li><strong>Punjabi Qissa Kav (Romantic Ballads):</strong>
                <br/>• <strong>Heer Ranjha:</strong> First written in Punjabi by <strong>Damodar Das Arora</strong> (during Akbar's reign); immortalized as a masterpiece in <strong>1766 by Waris Shah</strong> in <em>Baint</em> meter (at Malka Hans).
                <br/>• <strong>Mirza Sahiban:</strong> First written by <strong>Peelu</strong> (in <em>Sadd</em> form); later by <strong>Hafiz Barkhurdar</strong>.
                <br/>• <strong>Sassi Punnu:</strong> Masterpiece by <strong>Hashim Shah</strong> (court poet of Maharaja Ranjit Singh).
                <br/>• <strong>Sohni Mahiwal:</strong> Masterpiece by <strong>Fazal Shah</strong> (also Hashim Shah).
                <br/>• <strong>Puran Bhagat & Raja Rasalu:</strong> Masterpiece by <strong>Qadir Yar</strong> (who also wrote <em>Var Hari Singh Nalwa</em>).
              </li>
            </ul>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">💃 1. ਪੰਜਾਬ ਦੇ ਲੋਕ-ਨਾਚ ਅਤੇ ਲੋਕ-ਸਾਜ਼</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਮਰਦਾਂ ਦੇ ਲੋਕ-ਨਾਚ:</strong> <strong>ਭੰਗੜਾ</strong> (ਵਿਸਾਖੀ ਤੇ ਫ਼ਸਲ ਪੱਕਣ ਦੀ ਖੁਸ਼ੀ ਵਿੱਚ), <strong>ਝੁੰਮਰ</strong> (ਸਾਂਦਲ ਬਾਰ ਦਾ ਪ੍ਰਸਿੱਧ ਨਾਚ ਜੋ ਤਿੰਨ ਤਾਲਾਂ ਵਿੱਚ ਨੱਚਿਆ ਜਾਂਦਾ ਹੈ), <strong>ਲੁੱਡੀ</strong> (ਕਿਸੇ ਜਿੱਤ ਦੀ ਖੁਸ਼ੀ ਵਿੱਚ), <strong>ਮਲਵਈ ਗਿੱਧਾ (ਬਾਬਿਆਂ ਦਾ ਗਿੱਧਾ)</strong>, <strong>ਧਮਾਲ</strong>, ਅਤੇ <strong>ਜੁੱਲੀ</strong> (ਸੂਫ਼ੀ ਫ਼ਕੀਰਾਂ ਵੱਲੋਂ ਬੈਠ ਕੇ ਕੀਤਾ ਜਾਣ ਵਾਲਾ ਧਾਰਮਿਕ ਨਾਚ)।</li>
              <li><strong>ਔਰਤਾਂ ਦੇ ਲੋਕ-ਨਾਚ:</strong> <strong>ਗਿੱਧਾ</strong> (ਤਾੜੀਆਂ ਅਤੇ ਬੋਲੀਆਂ ਨਾਲ), <strong>ਸੰਮੀ</strong> (ਸਾਂਦਲ ਬਾਰ / ਪੱਛਮੀ ਪੰਜਾਬ ਦਾ ਪ੍ਰਾਚੀਨ ਨਾਚ ਜੋ ਬਿਨਾਂ ਕਿਸੇ ਸਾਜ਼ ਤੋਂ ਚੁਟਕੀਆਂ ਤੇ ਤਾੜੀਆਂ ਨਾਲ ਨੱਚਿਆ ਜਾਂਦਾ ਹੈ), ਅਤੇ <strong>ਕਿੱਕਲੀ</strong> (ਛੋਟੀਆਂ ਕੁੜੀਆਂ ਦਾ ਨਾਚ)।</li>
              <li><strong>ਲੋਕ-ਸਾਜ਼:</strong> <strong>ਤੰਤੀ ਸਾਜ਼ (ਤਾਰ ਵਾਲੇ):</strong> ਤੂੰਬੀ (ਇੱਕ ਤਾਰ ਵਾਲਾ — ਲਾਲ ਚੰਦ ਯਮਲਾ ਜੱਟ), ਸਾਰੰਗੀ (ਢਾਡੀ ਜਥਿਆਂ ਦਾ ਸਾਜ਼), ਰਬਾਬ, ਇਕਤਾਰਾ। <strong>ਫੂਕ ਸਾਜ਼:</strong> ਅਲਗੋਜ਼ਾ (ਜੋੜੀ), ਵੰਝਲੀ, ਬੀਨ। <strong>ਚਮੜੇ ਤੇ ਘਣ ਸਾਜ਼:</strong> ਢੋਲ, ਢੱਡ, ਚਿਮਟਾ, ਬੁਗਚੂ, ਸੱਪ, ਕਾਟੋ, ਘੜਾ।</li>
            </ul>
          </div>

          <div class="bg-slate-800/90 border border-slate-700 p-5 rounded-xl">
            <h4 class="text-amber-400 font-bold text-base mb-2">🎡 2. ਪੰਜਾਬ ਦੇ ਪ੍ਰਮੁੱਖ ਮੇਲੇ ਅਤੇ ਤਿਉਹਾਰ</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਛਪਾਰ ਦਾ ਮੇਲਾ (ਲੁਧਿਆਣਾ):</strong> <strong>ਭਾਦੋਂ</strong> ਦੇ ਮਹੀਨੇ (ਅਨੰਤ ਚੌਦਸ) ਨੂੰ <strong>ਗੁੱਗਾ ਪੀਰ (ਨਾਗ ਦੇਵਤਾ)</strong> ਦੀ ਯਾਦ ਵਿੱਚ ਗੁੱਗਾ ਮਾੜੀ ਵਿਖੇ ਲੱਗਦਾ ਹੈ।</li>
              <li><strong>ਜਰਗ ਦਾ ਮੇਲਾ / ਬਾਹੜੀਏ ਦਾ ਮੇਲਾ (ਪਾਇਲ, ਲੁਧਿਆਣਾ):</strong> <strong>ਚੇਤ</strong> ਦੇ ਮਹੀਨੇ <strong>ਮਾਤਾ ਸੀਤਲਾ</strong> ਦੀ ਪੂਜਾ ਲਈ ਲੱਗਦਾ ਹੈ, ਜਿੱਥੇ ਬੇਹੇ ਮਿੱਠੇ <strong>ਗੁਲਗੁਲੇ</strong> ਅਤੇ ਮਾਤਾ ਦੀ ਸਵਾਰੀ <strong>ਖੋਤਿਆਂ (ਗਧਿਆਂ)</strong> ਨੂੰ ਭੇਟ ਕੀਤੇ ਜਾਂਦੇ ਹਨ।</li>
              <li><strong>ਜਗਰਾਵਾਂ ਦੀ ਰੌਸ਼ਨੀ (ਲੁਧਿਆਣਾ):</strong> <strong>14–16 ਫੱਗਣ</strong> ਨੂੰ ਸੂਫ਼ੀ ਫ਼ਕੀਰ <strong>ਬਾਬਾ ਮੋਹਕਮ-ਉਦ-ਦੀਨ</strong> ਦੀ ਦਰਗਾਹ ਉੱਤੇ ਲੱਗਦਾ ਹੈ।</li>
              <li><strong>ਮਾਘੀ ਦਾ ਮੇਲਾ (ਸ੍ਰੀ ਮੁਕਤਸਰ ਸਾਹਿਬ):</strong> 1 ਮਾਘ (14 ਜਨਵਰੀ) ਨੂੰ <strong>40 ਮੁਕਤਿਆਂ</strong> ਦੀ ਯਾਦ ਵਿੱਚ।</li>
              <li><strong>ਹੋਲਾ ਮਹੱਲਾ (ਸ੍ਰੀ ਅਨੰਦਪੁਰ ਸਾਹਿਬ):</strong> 1 ਚੇਤ ਨੂੰ (1701 ਵਿੱਚ ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਵੱਲੋਂ ਸ਼ੁਰੂ)।</li>
              <li><strong>ਹਰਵੱਲਭ ਸੰਗੀਤ ਸੰਮੇਲਨ (ਦੇਵੀ ਤਾਲਾਬ, ਜਲੰਧਰ):</strong> ਦਸੰਬਰ ਵਿੱਚ (1875 ਤੋਂ ਸ਼ੁਰੂ, ਭਾਰਤੀ ਸ਼ਾਸਤਰੀ ਸੰਗੀਤ ਦਾ ਸਭ ਤੋਂ ਪੁਰਾਣਾ ਮੇਲਾ)।</li>
            </ul>
          </div>

          <div class="bg-emerald-950/50 border border-emerald-500/30 p-5 rounded-xl">
            <h4 class="text-emerald-300 font-bold text-base mb-2">💍 3. ਪੰਜਾਬੀ ਗਹਿਣੇ, ਫੁਲਕਾਰੀ ਦੀਆਂ ਕਿਸਮਾਂ ਅਤੇ ਲੋਕ-ਗੀਤ</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਸਿਰ ਤੇ ਮੱਥੇ ਦੇ ਗਹਿਣੇ:</strong> <strong>ਸੱਗੀ ਫੁੱਲ, ਚੌਂਕ, ਸ਼ਿੰਗਾਰ ਪੱਟੀ, ਟਿੱਕਾ, ਬਘਿਆੜੀ, ਦੌਣੀ</strong>।</li>
              <li><strong>ਕੰਨਾਂ ਦੇ ਗਹਿਣੇ:</strong> <strong>ਪਿੱਪਲ ਪੱਤੀਆਂ, ਬੁਝਲੀ, ਕੋਕਰੂ, ਝੁਮਕੇ, ਵਾਲੀਆਂ</strong>, ਅਤੇ ਮਰਦਾਂ ਦੇ ਕੰਨਾਂ ਦਾ ਗਹਿਣਾ: <strong>ਮੁਰਕੀਆਂ / ਨੱਤੀਆਂ</strong>।</li>
              <li><strong>ਨੱਕ ਦੇ ਗਹਿਣੇ:</strong> <strong>ਨੱਥ, ਮਛਲੀ, ਲੌਂਗ, ਕੋਕਾ, ਫੁੱਲੀ, ਬੁਲਾਕ, ਨੁਕਰਾ</strong>।</li>
              <li><strong>ਗਲ ਅਤੇ ਬਾਹਾਂ ਦੇ ਗਹਿਣੇ:</strong> ਰਾਣੀ ਹਾਰ, ਗਲਸਰੀ, ਜੁਗਨੀ, ਹਸਲੀ, ਅਤੇ ਮਰਦਾਂ ਦੇ ਗਲ ਦਾ ਗਹਿਣਾ: <strong>ਕੈਂਠਾ</strong>। ਗੁੱਟ ਦਾ ਭਾਰੀ ਗਹਿਣਾ: <strong>ਗੋਖੜੂ</strong>। ਪੈਰਾਂ ਦੇ ਗਹਿਣੇ: <strong>ਪਜ਼ੇਬ (ਝਾਂਜਰ), ਬਿੱਛੂਏ, ਬਾਂਕਾਂ</strong>।</li>
              <li><strong>ਫੁਲਕਾਰੀ ਦੀਆਂ ਕਿਸਮਾਂ (ਖੱਦਰ ਉੱਤੇ ਪੱਟ ਦੇ ਧਾਗੇ ਨਾਲ ਕਢਾਈ):</strong>
                <br/>• <strong>ਬਾਗ਼:</strong> ਜਦੋਂ ਕਢਾਈ ਇੰਨੀ ਸੰਘਣੀ ਹੋਵੇ ਕਿ ਹੇਠਲਾ ਖੱਦਰ ਬਿਲਕੁਲ ਨਾ ਦਿਸੇ (ਜਿਵੇਂ 'ਵਰੀ ਦਾ ਬਾਗ਼')।
                <br/>• <strong>ਚੋਪ:</strong> ਨਾਨੀ ਵੱਲੋਂ ਤਿਆਰ ਕੀਤੀ ਫੁਲਕਾਰੀ ਜੋ ਕੁੜੀ ਨੂੰ ਚੂੜਾ ਚੜ੍ਹਾਉਣ ਸਮੇਂ ਉੱਪਰ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ।
                <br/>• <strong>ਸੁਭਰ:</strong> ਲਾਵਾਂ (ਅਨੰਦ ਕਾਰਜ) ਸਮੇਂ ਦੁਲਹਨ ਵੱਲੋਂ ਲਈ ਜਾਣ ਵਾਲੀ ਲਾਲ ਫੁਲਕਾਰੀ (ਜਿਸ ਵਿੱਚ 5 ਬੂਟੀਆਂ ਹੁੰਦੀਆਂ ਹਨ)।
                <br/>• <strong>ਤਿਲਪੱਤਰਾ:</strong> ਵਿਆਹ ਸਮੇਂ ਲਾਗੀਆਂ ਨੂੰ ਦਿੱਤੀ ਜਾਣ ਵਾਲੀ ਛਿੱਦੀ ਕਢਾਈ ਵਾਲੀ ਫੁਲਕਾਰੀ।
                <br/>• <strong>ਸੈਂਚੀ ਫੁਲਕਾਰੀ:</strong> ਮਾਲਵਾ ਖੇਤਰ ਦੀ ਪ੍ਰਸਿੱਧ ਫੁਲਕਾਰੀ ਜਿਸ ਉੱਤੇ ਪੇਂਡੂ ਜੀਵਨ ਦੇ ਚਿੱਤਰ ਕੱਢੇ ਜਾਂਦੇ ਹਨ।
              </li>
              <li><strong>ਲੋਕ-ਗੀਤ:</strong> <strong>ਸੁਹਾਗ</strong> (ਵਿਆਹ ਸਮੇਂ ਕੁੜੀ ਦੇ ਘਰ ਗਾਏ ਜਾਣ ਵਾਲੇ ਗੀਤ), <strong>ਘੋੜੀਆਂ</strong> (ਮੁੰਡੇ ਦੇ ਘਰ ਗਾਏ ਜਾਣ ਵਾਲੇ ਗੀਤ), <strong>ਸਿੱਠਣੀਆਂ</strong> (ਜੰਞ ਨੂੰ ਦਿੱਤੀਆਂ ਜਾਣ ਵਾਲੀਆਂ ਮਿੱਠੀਆਂ ਗਾਲ੍ਹਾਂ/ਵਿਅੰਗ), ਅਤੇ <strong>ਅਲਾਹੁਣੀਆਂ / ਵੈਣ</strong> (ਮੌਤ ਸਮੇਂ ਦੇ ਸ਼ੋਕ ਗੀਤ)।</li>
            </ul>
          </div>

          <div class="bg-rose-950/50 border border-rose-500/30 p-5 rounded-xl">
            <h4 class="text-rose-300 font-bold text-base mb-2">📚 4. ਪੰਜਾਬੀ ਸੂਫ਼ੀ ਅਤੇ ਕਿੱਸਾ ਕਾਵਿ</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਸੂਫ਼ੀ ਕਵੀ:</strong> <strong>ਬਾਬਾ ਸ਼ੇਖ਼ ਫ਼ਰੀਦ ਜੀ</strong> (ਪੰਜਾਬੀ ਕਵਿਤਾ ਦੇ ਪਿਤਾਮਾ, 112 ਸਲੋਕ ਤੇ 4 ਸ਼ਬਦ), <strong>ਸ਼ਾਹ ਹੁਸੈਨ</strong> (ਕਾਫ਼ੀ ਦੇ ਮੋਢੀ), <strong>ਸੁਲਤਾਨ ਬਾਹੂ</strong> (ਸੀਹਰਫ਼ੀਆਂ — 'ਹੂ'), ਅਤੇ <strong>ਬਾਬਾ ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ</strong> (ਕਸੂਰ, ਮੁਰਸ਼ਦ ਸ਼ਾਹ ਇਨਾਇਤ ਕਾਦਰੀ)।</li>
              <li><strong>ਕਿੱਸਾ ਕਾਵਿ:</strong> <strong>ਹੀਰ ਰਾਂਝਾ</strong> (ਪਹਿਲਾ ਕਿੱਸਾ: <strong>ਦਮੋਦਰ</strong>; ਸ਼ਾਹਕਾਰ ਕਿੱਸਾ: <strong>ਵਾਰਿਸ ਸ਼ਾਹ, 1766</strong> — ਬੈਂਤ ਛੰਦ), <strong>ਮਿਰਜ਼ਾ ਸਾਹਿਬਾਂ</strong> (<strong>ਪੀਲੂ</strong> — ਸੱਦ ਰੂਪ, ਅਤੇ ਹਾਫ਼ਿਜ਼ ਬਰਖ਼ੁਰਦਾਰ), <strong>ਸੱਸੀ ਪੁੰਨੂ</strong> (<strong>ਹਾਸ਼ਮ ਸ਼ਾਹ</strong>), <strong>ਸੋਹਣੀ ਮਹੀਵਾਲ</strong> (<strong>ਫ਼ਜ਼ਲ ਸ਼ਾਹ</strong>), ਅਤੇ <strong>ਪੂਰਨ ਭਗਤ</strong> (<strong>ਕਾਦਰਯਾਰ</strong>)।</li>
            </ul>
          </div>
        </div>
      `,
      hi: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">💃 1. पंजाब के लोक नृत्य एवं लोक वाद्य</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>पुरुषों के लोक नृत्य:</strong> <strong>भांगड़ा</strong> (फसल पकने की खुशी में), <strong>झुम्मर</strong> (सांदल बार का नृत्य जो तीन तालों में नाचा जाता है), <strong>लुड्डी</strong> (किसी विजय की खुशी में), <strong>मलवई गिद्दा (बाबਿਆਂ दा गिद्दा)</strong>, <strong>धमाल</strong>, और <strong>जुल्ली</strong> (सूफी फकीरों द्वारा बैठकर किया जाने वाला धार्मिक नृत्य)।</li>
              <li><strong>महिलाओं के लोक नृत्य:</strong> <strong>गिद्दा</strong> (तालियों और बोलियों के साथ), <strong>सम्मी</strong> (सांदल बार का प्राचीन नृत्य जो बिना किसी वाद्य यंत्र के चुटकियों व तालियों से नाचा जाता है), और <strong>किक्कली</strong> (बालिकाओं का नृत्य)।</li>
              <li><strong>लोक वाद्य:</strong> <strong>तत् वाद्य (तार वाले):</strong> तूंबी (एक तार — लाल चंद यमला जट्ट), सारंगी (ढाडी जत्थों का वाद्य), रबाब, इकतारा। <strong>सुषिर वाद्य (फूंक वाले):</strong> अलगोजा (जोड़ी), वंझली। <strong>ताल व घन वाद्य:</strong> ढोल, ढड्ड, चिमटा, बुगचू, सप्प, काटो, घड़ा।</li>
            </ul>
          </div>

          <div class="bg-slate-800/90 border border-slate-700 p-5 rounded-xl">
            <h4 class="text-amber-400 font-bold text-base mb-2">🎡 2. पंजाब के प्रमुख मेले एवं त्योहार</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>छपार का मेला (लुधियाना):</strong> <strong>भादों</strong> माह में <strong>गुग्गा पीर (नाग देवता)</strong> की स्मृति में गुग्गा माड़ी पर लगता है।</li>
              <li><strong>जरग का मेला / बाहड़िये का मेला (पायल, लुधियाना):</strong> <strong>चेत</strong> माह में <strong>माता शीतला</strong> की पूजा हेतु लगता है, जहां बासी मीठे <strong>गुलगुले</strong> और माता की सवारी <strong>गधों</strong> को अर्पित किए जाते हैं।</li>
              <li><strong>जगराओं की रोशनी (लुधियाना):</strong> <strong>14–16 फाल्गुन</strong> को सूफी संत <strong>बाबा मोहकम-उद-दीन</strong> की दरगाह पर लगता है।</li>
              <li><strong>माघी मेला (श्री मुक्तसर साहिब):</strong> 1 माघ (14 जनवरी) को 40 मुक्तों की स्मृति में। <strong>होला मोहल्ला (श्री आनंदपुर साहिब):</strong> 1 चेत को। <strong>हरवल्लभ संगीत सम्मेलन (देवी तालाब, जालंधर):</strong> दिसंबर में (1875 से प्रारंभ)।</li>
            </ul>
          </div>

          <div class="bg-emerald-950/50 border border-emerald-500/30 p-5 rounded-xl">
            <h4 class="text-emerald-300 font-bold text-base mb-2">💍 3. पारंपरिक आभूषण, फुलकारी के प्रकार, लोकगीत एवं किस्सा साहित्य</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>प्रमुख आभूषण:</strong> <strong>सिर/माथा:</strong> सग्गी फूल, चौंक, शिंगार पट्टी, टिक्का, बघियाड़ी, दौणी। <strong>कान:</strong> पीपल पत्तियां, बुझली, कोकरू, झुमके, तथा पुरुषों के कान का आभूषण: <strong>मुरकियां</strong>। <strong>नाक:</strong> नथ, मछली, लौंग, कोका, फुल्ली, बुलाक। <strong>गला:</strong> रानी हार, गलसरी, जुगनी, हसली, तथा पुरुषों के गले का आभूषण: <strong>कैंठा</strong>। <strong>कलाई:</strong> गोखरू, कंगन। <strong>पैर:</strong> पज़ेब (झांझर), बिछुए।</li>
              <li><strong>फुलकारी के प्रकार (खद्दर पर रेशमी 'पट्ट' के धागे से कढ़ाई):</strong> <strong>बाग</strong> (इतनी घनी कढ़ाई कि नीचे का कपड़ा न दिखे), <strong>चोप</strong> (नानी द्वारा तैयार, चूड़ा चढ़ाने के समय), <strong>सुभर</strong> (आनंद कारज/लावां के समय दुल्हन द्वारा ओढ़ी जाने वाली लाल फुलकारी), <strong>तिलपत्रा</strong> (हल्की कढ़ाई), और <strong>सैंची फुलकारी</strong> (मालवा क्षेत्र)।</li>
              <li><strong>लोकगीत व किस्सा काव्य:</strong> <strong>सुहाग</strong> (कन्या के घर विवाह गीत), <strong>घोड़ियां</strong> (वर के घर विवाह गीत), <strong>सिट्ठणियां</strong> (बारात को हास्य-व्यंग्य), <strong>अलाहुणियां</strong> (शोक गीत)। <strong>किस्सा काव्य:</strong> हीर रांझा (प्रथम: दामोदर; सर्वश्रेष्ठ: <strong>वारिस शाह, 1766</strong>), मिर्ज़ा साहिबां (<strong>पीलू</strong>), सस्सी पुन्नू (<strong>हाशिम शाह</strong>), सोहणी महीवाल (<strong>फज़ल शाह</strong>), पूरन भगत (<strong>कादरयार</strong>)।</li>
            </ul>
          </div>
        </div>
      `,
    },
    workedExamples: [
      {
        title: {
          en: 'Matching Famous Melas of Punjab with Deities/Saints & Desi Months',
          pa: 'ਪੰਜਾਬ ਦੇ ਪ੍ਰਸਿੱਧ ਮੇਲਿਆਂ ਦਾ ਦੇਸੀ ਮਹੀਨਿਆਂ ਅਤੇ ਸਬੰਧਤ ਸ਼ਖ਼ਸੀਅਤਾਂ ਨਾਲ ਮਿਲਾਨ',
          hi: 'पंजाब के प्रसिद्ध मेलों का देसी महीनों एवं संबंधित संतों/देवताओं से मिलान',
        },
        problem: {
          en: 'Match the following fairs with their Desi month and honoured saint/deity: (1) Chhapar Mela, (2) Jarag Mela, (3) Roshni Mela Jagraon, (4) Maghi Mela.',
          pa: 'ਹੇਠ ਲਿਖੇ ਮੇਲਿਆਂ ਦਾ ਉਹਨਾਂ ਦੇ ਦੇਸੀ ਮਹੀਨੇ ਅਤੇ ਸਬੰਧਤ ਪੀਰ/ਦੇਵੀ ਨਾਲ ਮਿਲਾਨ ਕਰੋ: (1) ਛਪਾਰ ਦਾ ਮੇਲਾ, (2) ਜਰਗ ਦਾ ਮੇਲਾ, (3) ਜਗਰਾਵਾਂ ਦੀ ਰੌਸ਼ਨੀ, (4) ਮਾਘੀ ਦਾ ਮੇਲਾ।',
          hi: 'निम्नलिखित मेलों का उनके देसी महीने और संबंधित संत/देवी से मिलान कीजिए: (1) छपार का मेला, (2) जरग का मेला, (3) जगराओं की रोशनी, (4) माघी का मेला।',
        },
        steps: {
          en: [
            'Step 1: Chhapar Mela (Ludhiana) is held in Bhadon in honor of Guga Pir (snake worship).',
            'Step 2: Jarag Mela (Ludhiana) is held in Chet in honor of Mata Seetla (sweet Gulgule / Bahria).',
            'Step 3: Roshni Mela (Jagraon) is held in Phagun at the shrine of Sufi saint Baba Mohkam-ud-Din.',
            'Step 4: Maghi Mela (Sri Muktsar Sahib) is held on 1 Magh in memory of the 40 Mukte.',
          ],
          pa: [
            'ਕਦਮ 1: ਛਪਾਰ ਦਾ ਮੇਲਾ — ਭਾਦੋਂ ਮਹੀਨਾ, ਗੁੱਗਾ ਪੀਰ ਦੀ ਯਾਦ ਵਿੱਚ।',
            'ਕਦਮ 2: ਜਰਗ ਦਾ ਮੇਲਾ — ਚੇਤ ਮਹੀਨਾ, ਮਾਤਾ ਸੀਤਲਾ ਦੀ ਪੂਜਾ (ਮਿੱਠੇ ਗੁਲਗੁਲੇ)।',
            'ਕਦਮ 3: ਜਗਰਾਵਾਂ ਦੀ ਰੌਸ਼ਨੀ — ਫੱਗਣ ਮਹੀਨਾ, ਸੂਫ਼ੀ ਪੀਰ ਬਾਬਾ ਮੋਹਕਮ-ਉਦ-ਦੀਨ।',
            'ਕਦਮ 4: ਮਾਘੀ ਦਾ ਮੇਲਾ (ਮੁਕਤਸਰ) — 1 ਮਾਘ, 40 ਮੁਕਤਿਆਂ ਦੀ ਸ਼ਹਾਦਤ।',
          ],
          hi: [
            'चरण 1: छपार का मेला — भादों माह, गुग्गा पीर की स्मृति में।',
            'चरण 2: जरग का मेला — चेत माह, माता शीतला की पूजा (मीठे गुलगुले)।',
            'चरण 3: जगराओं की रोशनी — फाल्गुन माह, सूफी संत बाबा मोहकम-उद-दीन।',
            'चरण 4: माघी का मेला (मुक्तसर) — 1 माघ, 40 मुक्तों की शहादत।',
          ],
        },
        solution: {
          en: 'Chhapar = Bhadon (Guga Pir) | Jarag = Chet (Mata Seetla) | Jagraon Roshni = Phagun (Baba Mohkam-ud-Din) | Muktsar = Magh (40 Mukte).',
          pa: 'ਛਪਾਰ = ਭਾਦੋਂ (ਗੁੱਗਾ ਪੀਰ) | ਜਰਗ = ਚੇਤ (ਮਾਤਾ ਸੀਤਲਾ) | ਜਗਰਾਵਾਂ ਦੀ ਰੌਸ਼ਨੀ = ਫੱਗਣ (ਬਾਬਾ ਮੋਹਕਮ-ਉਦ-ਦੀਨ) | ਮੁਕਤਸਰ = ਮਾਘ (40 ਮੁਕਤੇ)।',
          hi: 'छपार = भादों (गुग्गा पीर) | जरग = चेत (माता शीतला) | जगराओं की रोशनी = फाल्गुन (बाबा मोहकम-उद-दीन) | मुक्तसर = माघ (40 मुक्ते)।',
        },
      },
      {
        title: {
          en: 'Distinguishing Traditional Punjabi Ornaments & Phulkari Types',
          pa: 'ਪੰਜਾਬੀ ਗਹਿਣਿਆਂ ਅਤੇ ਫੁਲਕਾਰੀ ਦੀਆਂ ਕਿਸਮਾਂ ਦੀ ਪਛਾਣ',
          hi: 'पंजाबी आभूषणों एवं फुलकारी के प्रकारों की पहचान',
        },
        problem: {
          en: '(a) On which body parts are "Saggi Phul", "Pipal Pattian", "Machhli", "Gokhru", and "Kaintha" worn? (b) Differentiate between "Chope", "Subhar", and "Bagh" Phulkaris.',
          pa: '(ੳ) "ਸੱਗੀ ਫੁੱਲ", "ਪਿੱਪਲ ਪੱਤੀਆਂ", "ਮਛਲੀ", "ਗੋਖੜੂ" ਅਤੇ "ਕੈਂਠਾ" ਸਰੀਰ ਦੇ ਕਿਹੜੇ ਅੰਗਾਂ ਦੇ ਗਹਿਣੇ ਹਨ? (ਅ) "ਚੋਪ", "ਸੁਭਰ" ਅਤੇ "ਬਾਗ਼" ਫੁਲਕਾਰੀ ਵਿੱਚ ਅੰਤਰ ਦੱਸੋ।',
          hi: '(क) "सग्गी फूल", "पीपल पत्तियां", "मछली", "गोखरू" और "कैंठा" शरीर के किन अंगों के आभूषण हैं? (ख) "चोप", "सुभर" और "बाग" फुलकारी में अंतर स्पष्ट कीजिए।',
        },
        steps: {
          en: [
            'Step 1: Saggi Phul = Head (Women); Pipal Pattian = Ears (Women); Machhli = Nose (Women); Gokhru = Wrist (Women); Kaintha = Neck (Men).',
            'Step 2: Chope = Embroidered by maternal grandmother (Nani) for the Chura ceremony; Subhar = Draped by bride during the 4 Laavan (5 central motifs); Bagh = Dense embroidery covering the entire base cloth.',
          ],
          pa: [
            'ਕਦਮ 1: ਸੱਗੀ ਫੁੱਲ = ਸਿਰ; ਪਿੱਪਲ ਪੱਤੀਆਂ = ਕੰਨ; ਮਛਲੀ = ਨੱਕ; ਗੋਖੜੂ = ਗੁੱਟ (ਬਾਂਹ); ਕੈਂਠਾ = ਮਰਦਾਂ ਦੇ ਗਲ ਦਾ ਗਹਿਣਾ।',
            'ਕਦਮ 2: ਚੋਪ = ਨਾਨੀ ਵੱਲੋਂ ਚੂੜਾ ਚੜ੍ਹਾਉਣ ਸਮੇਂ ਦਿੱਤੀ ਜਾਣ ਵਾਲੀ ਫੁਲਕਾਰੀ; ਸੁਭਰ = ਲਾਵਾਂ (ਫੇਰਿਆਂ) ਸਮੇਂ ਲਈ ਜਾਣ ਵਾਲੀ ਫੁਲਕਾਰੀ; ਬਾਗ਼ = ਸੰਘਣੀ ਕਢਾਈ ਜਿਸ ਵਿੱਚ ਹੇਠਲਾ ਕੱਪੜਾ ਨਾ ਦਿਸੇ।',
          ],
          hi: [
            'चरण 1: सग्गी फूल = सिर; पीपल पत्तियां = कान; मछली = नाक; गोखरू = कलाई; कैंठा = पुरुषों के गले का आभूषण।',
            'चरण 2: चोप = नानी द्वारा चूड़ा रस्म हेतु निर्मित फुलकारी; सुभर = लावां (फेरों) के समय ओढ़ी जाने वाली फुलकारी; बाग = संपूर्ण कपड़े को ढकने वाली घनी कढ़ाई।',
          ],
        },
        solution: {
          en: 'Saggi Phul (Head), Pipal Pattian (Ears), Machhli (Nose), Gokhru (Wrist), Kaintha (Men’s Neck) | Chope (Chura ceremony by Nani), Subhar (Laavan ceremony), Bagh (Full-coverage embroidery).',
          pa: 'ਸੱਗੀ ਫੁੱਲ (ਸਿਰ), ਪਿੱਪਲ ਪੱਤੀਆਂ (ਕੰਨ), ਮਛਲੀ (ਨੱਕ), ਗੋਖੜੂ (ਗੁੱਟ), ਕੈਂਠਾ (ਮਰਦਾਂ ਦਾ ਗਲ) | ਚੋਪ (ਚੂੜਾ ਚੜ੍ਹਾਉਣ ਸਮੇਂ), ਸੁਭਰ (ਲਾਵਾਂ ਸਮੇਂ), ਬਾਗ਼ (ਸੰਘਣੀ ਕਢਾਈ)।',
          hi: 'सग्गी फूल (सिर), पीपल पत्तियां (कान), मछली (नाक), गोखरू (कलाई), कैंठा (पुरुष गला) | चोप (चूड़ा रस्म), सुभर (लावां रस्म), बाग (सघन कढ़ाई)।',
        },
      },
    ],
    commonMisconceptions: [
      {
        misconception: {
          en: 'Waris Shah was the first poet to write the Qissa of Heer Ranjha in Punjabi.',
          pa: 'ਪੰਜਾਬੀ ਵਿੱਚ ਹੀਰ ਰਾਂਝੇ ਦਾ ਸਭ ਤੋਂ ਪਹਿਲਾ ਕਿੱਸਾ ਵਾਰਿਸ ਸ਼ਾਹ ਨੇ ਲਿਖਿਆ ਸੀ।',
          hi: 'पंजाबी में हीर रांझा का सबसे पहला किस्सा वारिस शाह ने लिखा था।',
        },
        correction: {
          en: 'Damodar Das Arora (during Emperor Akbar’s reign) was the FIRST poet to write the Qissa of Heer Ranjha in Punjabi (claiming to be an eye-witness). Waris Shah wrote the most famous and monumental version much later in 1766 CE.',
          pa: 'ਪੰਜਾਬੀ ਵਿੱਚ ਹੀਰ ਰਾਂਝੇ ਦਾ ਸਭ ਤੋਂ ਪਹਿਲਾ ਕਿੱਸਾ ਅਕਬਰ ਦੇ ਸਮਕਾਲੀ ਕਵੀ ਦਮੋਦਰ ਦਾਸ ਅਰੋੜਾ ਨੇ ਲਿਖਿਆ ਸੀ। ਵਾਰਿਸ ਸ਼ਾਹ ਨੇ ਸਭ ਤੋਂ ਪ੍ਰਸਿੱਧ ਕਿੱਸਾ 1766 ਈ. ਵਿੱਚ ਰਚਿਆ।',
          hi: 'पंजाबी में हीर रांझा का सर्वप्रथम किस्सा अकबर के समकालीन कवि दामोदर दास अरोड़ा ने लिखा था। वारिस शाह ने सर्वाधिक प्रसिद्ध किस्सा 1766 ई. में रचा।',
        },
        whyItMatters: {
          en: 'Classic trap question in PSSSB Punjabi Paper-A and Punjab GK.',
          pa: 'ਪੀ.ਐੱਸ.ਐੱਸ.ਐੱਸ.ਬੀ. ਪੰਜਾਬੀ ਪੇਪਰ-ਏ ਅਤੇ ਪੰਜਾਬ ਜੀ.ਕੇ. ਦਾ ਬਹੁਤ ਮਹੱਤਵਪੂਰਨ ਪ੍ਰਸ਼ਨ।',
          hi: 'पीएसएसएसबी पंजाबी पेपर-ए और पंजाब जीके का अत्यंत महत्वपूर्ण प्रश्न।',
        },
      },
      {
        misconception: {
          en: '"Suhag" folk songs are sung at the groom’s house, and "Ghorian" are sung at the bride’s house.',
          pa: '"ਸੁਹਾਗ" ਮੁੰਡੇ ਦੇ ਵਿਆਹ ਸਮੇਂ ਅਤੇ "ਘੋੜੀਆਂ" ਕੁੜੀ ਦੇ ਵਿਆਹ ਸਮੇਂ ਗਾਈਆਂ ਜਾਂਦੀਆਂ ਹਨ।',
          hi: '"सुहाग" लड़के के विवाह पर और "घोड़ियां" लड़की के विवाह पर गाए जाते हैं।',
        },
        correction: {
          en: '"Suhag" are sung at the BRIDE’S (girl’s) house during her wedding, whereas "Ghorian" are sung at the GROOM’S (boy’s) house.',
          pa: '"ਸੁਹਾਗ" ਕੁੜੀ ਦੇ ਵਿਆਹ ਸਮੇਂ ਕੁੜੀ ਦੇ ਘਰ ਗਾਏ ਜਾਂਦੇ ਹਨ, ਜਦਕਿ "ਘੋੜੀਆਂ" ਮੁੰਡੇ ਦੇ ਵਿਆਹ ਸਮੇਂ ਮੁੰਡੇ ਦੇ ਘਰ ਗਾਈਆਂ ਜਾਂਦੀਆਂ ਹਨ।',
          hi: '"सुहाग" कन्या के विवाह के समय लड़की के घर गाए जाते हैं, जबकि "घोड़ियां" वर के विवाह के समय लड़के के घर गाई जाती हैं।',
        },
        whyItMatters: {
          en: 'Asked repeatedly in Punjab Clerk, Patwari, ETT, and Police exams.',
          pa: 'ਪੰਜਾਬ ਦੀਆਂ ਸਾਰੀਆਂ ਪ੍ਰੀਖਿਆਵਾਂ ਵਿੱਚ ਵਾਰ-ਵਾਰ ਪੁੱਛਿਆ ਜਾਣ ਵਾਲਾ ਪ੍ਰਸ਼ਨ।',
          hi: 'पंजाब की सभी प्रतियोगी परीक्षाओं में बार-बार पूछा जाने वाला प्रश्न।',
        },
      },
    ],
    quickRevisionSheet: {
      highYieldPoints: {
        en: [
          'Dances: Men = Bhangra, Jhumar (Sandal Bar, 3 tempos), Luddi (Victory dance), Malwai Giddha, Dhamaal, Julli (Sitting Sufi dance); Women = Giddha, Sammi (Sandal Bar, no instrument), Kikli.',
          'Fairs (Melas): Chhapar (Ludhiana, Bhadon, Guga Pir); Jarag (Ludhiana, Chet, Mata Seetla, Gulgule); Jagraon Roshni (Phagun, Baba Mohkam-ud-Din); Maghi (Muktsar, 40 Mukte); Hola Mohalla (Anandpur, 1 Chet).',
          'Ornaments: Head = Saggi Phul, Chauk, Baghiari, Dauni; Ears = Pipal Pattian, Bujhli, Kokru, Murkiyan (Men); Nose = Nath, Machhli, Laung, Phulli, Bulaak; Neck = Galshri, Jugni, Kaintha (Men); Wrist = Gokhru.',
          'Phulkari: Bagh (Full dense embroidery), Chope (By Nani at Chura), Subhar (At Laavan), Tilpatra (Sparse), Sainchi (Malwa).',
          'Literature: Baba Farid (112 Saloks, 4 Shabads); Shah Hussain (Kafi); Sultan Bahu (Siharfi - Hoo); Heer = Damodar (1st) & Waris Shah (1766); Mirza = Peelu; Sassi = Hashim; Sohni = Fazal Shah; Puran Bhagat = Qadir Yar.',
        ],
        pa: [
          'ਲੋਕ-ਨਾਚ: ਮਰਦ = ਭੰਗੜਾ, ਝੁੰਮਰ (ਸਾਂਦਲ ਬਾਰ), ਲੁੱਡੀ (ਜਿੱਤ ਦਾ ਨਾਚ), ਮਲਵਈ ਗਿੱਧਾ, ਜੁੱਲੀ (ਬੈਠ ਕੇ); ਔਰਤਾਂ = ਗਿੱਧਾ, ਸੰਮੀ (ਬਿਨਾਂ ਸਾਜ਼ ਤੋਂ), ਕਿੱਕਲੀ।',
          'ਮੇਲੇ: ਛਪਾਰ (ਲੁਧਿਆਣਾ, ਭਾਦੋਂ, ਗੁੱਗਾ ਪੀਰ); ਜਰਗ (ਚੇਤ, ਮਾਤਾ ਸੀਤਲਾ, ਗੁਲਗੁਲੇ); ਜਗਰਾਵਾਂ ਦੀ ਰੌਸ਼ਨੀ (ਫੱਗਣ, ਬਾਬਾ ਮੋਹਕਮ-ਉਦ-ਦੀਨ); ਮਾਘੀ (ਮੁਕਤਸਰ); ਹੋਲਾ ਮਹੱਲਾ (ਅਨੰਦਪੁਰ ਸਾਹਿਬ)।',
          'ਗਹਿਣੇ: ਸਿਰ = ਸੱਗੀ ਫੁੱਲ, ਚੌਂਕ, ਬਘਿਆੜੀ, ਦੌਣੀ; ਕੰਨ = ਪਿੱਪਲ ਪੱਤੀਆਂ, ਬੁਝਲੀ, ਕੋਕਰੂ, ਮੁਰਕੀਆਂ (ਮਰਦ); ਨੱਕ = ਨੱਥ, ਮਛਲੀ, ਲੌਂਗ, ਫੁੱਲੀ, ਬੁਲਾਕ; ਗਲ = ਗਲਸਰੀ, ਜੁਗਨੀ, ਕੈਂਠਾ (ਮਰਦ); ਗੁੱਟ = ਗੋਖੜੂ।',
          'ਫੁਲਕਾਰੀ: ਬਾਗ਼ (ਸੰਘਣੀ ਕਢਾਈ), ਚੋਪ (ਨਾਨੀ ਵੱਲੋਂ ਚੂੜੇ ਸਮੇਂ), ਸੁਭਰ (ਲਾਵਾਂ ਸਮੇਂ), ਤਿਲਪੱਤਰਾ, ਸੈਂਚੀ (ਮਾਲਵਾ)।',
          'ਸਾਹਿਤ: ਬਾਬਾ ਫ਼ਰੀਦ (112 ਸਲੋਕ, 4 ਸ਼ਬਦ); ਸ਼ਾਹ ਹੁਸੈਨ (ਕਾਫ਼ੀ); ਸੁਲਤਾਨ ਬਾਹੂ (ਹੂ); ਹੀਰ = ਦਮੋਦਰ (ਪਹਿਲਾ) ਤੇ ਵਾਰਿਸ ਸ਼ਾਹ; ਮਿਰਜ਼ਾ = ਪੀਲੂ; ਸੱਸੀ = ਹਾਸ਼ਮ; ਸੋਹਣੀ = ਫ਼ਜ਼ਲ ਸ਼ਾਹ; ਪੂਰਨ ਭਗਤ = ਕਾਦਰਯਾਰ।',
        ],
        hi: [
          'लोक नृत्य: पुरुष = भांगड़ा, झुम्मर (सांदल बार), लुड्डी (विजय नृत्य), मलवई गिद्दा, जुल्ली; महिलाएं = गिद्दा, सम्मी (बिना वाद्य के), किक्कली।',
          'मेले: छपार (लुधियाना, भादों, गुग्गा पीर); जरग (चेत, माता शीतला, गुलगुले); जगराओं की रोशनी (फाल्गुन, बाबा मोहकम-उद-दीन); माघी (मुक्तसर); होला मोहल्ला (आनंदपुर)।',
          'आभूषण: सिर = सग्गी फूल, चौंक, बघियाड़ी, दौणी; कान = पीपल पत्तियां, बुझली, कोकरू, मुरकियां (पुरुष); नाक = नथ, मछली, लौंग, फुल्ली, बुलाक; गला = गलसरी, जुगनी, कैंठा (पुरुष); कलाई = गोखरू।',
          'फुलकारी: बाग (सघन कढ़ाई), चोप (नानी द्वारा चूड़ा रस्म), सुभर (लावां के समय), तिलपत्रा, सैंची (मालवा)।',
          'साहित्य: बाबा फरीद (112 सलोक, 4 शब्द); शाह हुसैन (काफी); सुल्तान बाहू (हू); हीर = दामोदर (प्रथम) व वारिस शाह; मिर्ज़ा = पीलू; सस्सी = हाशिम; सोहणी = फज़ल शाह; पूरन भगत = कादरयार।',
        ],
      },
      examTraps: {
        en: [
          'Trap: "Machhli" and "Bulaak" are NOSE ornaments of Punjabi women, while "Gokhru" is a WRIST ornament and "Baghiari" is a HEAD ornament.',
          'Trap: "Julli" is the only Punjabi folk dance performed in a sitting posture (by Sufi Fakirs).',
        ],
        pa: [
          'ਧੋਖਾ: "ਮਛਲੀ" ਅਤੇ "ਬੁਲਾਕ" ਨੱਕ ਦੇ ਗਹਿਣੇ ਹਨ, "ਗੋਖੜੂ" ਗੁੱਟ (ਬਾਂਹ) ਦਾ ਗਹਿਣਾ ਹੈ ਅਤੇ "ਬਘਿਆੜੀ" ਸਿਰ ਦਾ ਗਹਿਣਾ ਹੈ।',
          'ਧੋਖਾ: "ਜੁੱਲੀ" ਇੱਕੋ-ਇੱਕ ਲੋਕ-ਨਾਚ ਹੈ ਜੋ ਬੈਠ ਕੇ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।',
        ],
        hi: [
          'धोखा: "मछली" और "बुलाक" नाक के आभूषण हैं, "गोखरू" कलाई का आभूषण है और "बघियाड़ी" सिर का आभूषण है।',
          'धोखा: "जुल्ली" एकमात्र लोक नृत्य है जो बैठकर किया जाता है।',
        ],
      },
    },
    summary: {
      en: 'Comprehensive guide to Punjabi Culture & Heritage for PSSSB Clerk, Patwari, and Master Cadre exams: Folk dances of men (Bhangra, Jhumar, Luddi, Malwai Giddha, Julli) and women (Giddha, Sammi, Kikli), folk instruments (Tumbi, Algoza, Dhad, Sarangi, Bugchu), famous Melas (Chhapar, Jarag, Jagraon Roshni, Muktsar Maghi, Hola Mohalla), ornaments by body part (Saggi Phul, Pipal Pattian, Machhli, Gokhru, Kaintha), Phulkari types (Bagh, Chope, Subhar, Sainchi), wedding songs (Suhag, Ghorian, Sithnian), and Sufi/Qissa literature.',
      pa: 'ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ ਅਤੇ ਵਿਰਸੇ ਦਾ ਸੰਪੂਰਨ ਪਾਠ: ਮਰਦਾਂ ਅਤੇ ਔਰਤਾਂ ਦੇ ਲੋਕ-ਨਾਚ (ਭੰਗੜਾ, ਝੁੰਮਰ, ਲੁੱਡੀ, ਗਿੱਧਾ, ਸੰਮੀ), ਲੋਕ-ਸਾਜ਼ (ਤੂੰਬੀ, ਅਲਗੋਜ਼ਾ, ਢੱਡ, ਸਾਰੰਗੀ), ਪ੍ਰਸਿੱਧ ਮੇਲੇ (ਛਪਾਰ, ਜਰਗ, ਜਗਰਾਵਾਂ ਦੀ ਰੌਸ਼ਨੀ, ਮਾਘੀ, ਹੋਲਾ ਮਹੱਲਾ), ਗਹਿਣੇ (ਸੱਗੀ ਫੁੱਲ, ਪਿੱਪਲ ਪੱਤੀਆਂ, ਮਛਲੀ, ਗੋਖੜੂ, ਕੈਂਠਾ), ਫੁਲਕਾਰੀ ਦੀਆਂ ਕਿਸਮਾਂ (ਬਾਗ਼, ਚੋਪ, ਸੁਭਰ, ਸੈਂਚੀ), ਲੋਕ-ਗੀਤ (ਸੁਹਾਗ, ਘੋੜੀਆਂ, ਸਿੱਠਣੀਆਂ) ਅਤੇ ਸੂਫ਼ੀ/ਕਿੱਸਾ ਸਾਹਿਤ।',
      hi: 'पंजाबी संस्कृति एवं विरासत का संपूर्ण पाठ: पुरुष व महिला लोक नृत्य (भांगड़ा, झुम्मर, लुड्डी, गिद्दा, सम्मी), लोक वाद्य (तूंबी, अलगोजा, ढड्ड, सारंगी), प्रमुख मेले (छपार, जरग, जगराओं की रोशनी, माघी, होला मोहल्ला), आभूषण (सग्गी फूल, पीपल पत्तियां, मछली, गोखरू, कैंठा), फुलकारी (बाग, चोप, सुभर, सैंची), लोकगीत (सुहाग, घोड़ियां, सिट्ठणियां) तथा सूफी/किस्सा साहित्य।',
    },
    keyNotes: {
      en: [
        '📌 Folk Dances: Jhumar (Sandal Bar), Luddi (Victory dance), Sammi (Women’s dance without musical instruments), Julli (Sitting dance).',
        '📌 Melas: Chhapar Mela (Bhadon, Guga Pir); Jarag Mela (Chet, Mata Seetla, Gulgule); Jagraon Roshni (Phagun, Baba Mohkam-ud-Din).',
        '📌 Ornaments & Phulkari: Saggi Phul (Head), Pipal Pattian (Ears), Machhli/Bulaak (Nose), Gokhru (Wrist), Kaintha (Men’s Neck); Chope & Subhar (Bridal Phulkaris).',
        '📌 Literature: Baba Farid (112 Saloks, 4 Shabads); Heer (1st Damodar, 1766 Waris Shah); Mirza (Peelu); Puran Bhagat (Qadir Yar).',
      ],
      pa: [
        '📌 ਲੋਕ-ਨਾਚ: ਝੁੰਮਰ (ਸਾਂਦਲ ਬਾਰ), ਲੁੱਡੀ (ਜਿੱਤ ਦਾ ਨਾਚ), ਸੰਮੀ (ਬਿਨਾਂ ਸਾਜ਼ ਤੋਂ ਔਰਤਾਂ ਦਾ ਨਾਚ), ਜੁੱਲੀ (ਬੈਠ ਕੇ ਕੀਤਾ ਜਾਣ ਵਾਲਾ ਨਾਚ)।',
        '📌 ਮੇਲੇ: ਛਪਾਰ (ਭਾਦੋਂ, ਗੁੱਗਾ ਪੀਰ); ਜਰਗ (ਚੇਤ, ਮਾਤਾ ਸੀਤਲਾ, ਗੁਲਗੁਲੇ); ਜਗਰਾਵਾਂ ਦੀ ਰੌਸ਼ਨੀ (ਫੱਗਣ, ਬਾਬਾ ਮੋਹਕਮ-ਉਦ-ਦੀਨ)।',
        '📌 ਗਹਿਣੇ ਤੇ ਫੁਲਕਾਰੀ: ਸੱਗੀ ਫੁੱਲ (ਸਿਰ), ਪਿੱਪਲ ਪੱਤੀਆਂ (ਕੰਨ), ਮਛਲੀ/ਬੁਲਾਕ (ਨੱਕ), ਗੋਖੜੂ (ਗੁੱਟ), ਕੈਂਠਾ (ਮਰਦਾਂ ਦਾ ਗਲ); ਚੋਪ ਤੇ ਸੁਭਰ (ਵਿਆਹ ਦੀਆਂ ਫੁਲਕਾਰੀਆਂ)।',
        '📌 ਸਾਹਿਤ: ਬਾਬਾ ਫ਼ਰੀਦ (112 ਸਲੋਕ, 4 ਸ਼ਬਦ); ਹੀਰ (ਪਹਿਲਾ ਦਮੋਦਰ, 1766 ਵਾਰਿਸ ਸ਼ਾਹ); ਮਿਰਜ਼ਾ (ਪੀਲੂ); ਪੂਰਨ ਭਗਤ (ਕਾਦਰਯਾਰ)।',
      ],
      hi: [
        '📌 लोक नृत्य: झुम्मर (सांदल बार), लुड्डी (विजय नृत्य), सम्मी (बिना वाद्य के महिला नृत्य), जुल्ली (बैठकर किया जाने वाला नृत्य)।',
        '📌 मेले: छपार (भादों, गुग्गा पीर); जरग (चेत, माता शीतला, गुलगुले); जगराओं की रोशनी (फाल्गुन, बाबा मोहकम-उद-दीन)।',
        '📌 आभूषण व फुलकारी: सग्गी फूल (सिर), पीपल पत्तियां (कान), मछली/बुलाक (नाक), गोखरू (कलाई), कैंठा (पुरुष गला); चोप व सुभर (विवाह फुलकारी)।',
        '📌 साहित्य: बाबा फरीद (112 सलोक, 4 शब्द); हीर (प्रथम दामोदर, 1766 वारिस शाह); मिर्ज़ा (पीलू); पूरन भगत (कादरयार)।',
      ],
    },
    flashcards: [
      {
        id: 'fc-pcf-1',
        q: {
          en: 'In which Desi month and in whose honour is the famous Chhapar Mela (Ludhiana) celebrated?',
          pa: 'ਛਪਾਰ ਦਾ ਮੇਲਾ (ਲੁਧਿਆਣਾ) ਕਿਹੜੇ ਦੇਸੀ ਮਹੀਨੇ ਅਤੇ ਕਿਸ ਦੀ ਯਾਦ ਵਿੱਚ ਲੱਗਦਾ ਹੈ?',
          hi: 'छपार का मेला (लुधियाना) किस देसी महीने में और किसकी स्मृति में लगता है?',
        },
        a: {
          en: 'In the month of Bhadon (September) at Guga Mari in honour of Guga Pir.',
          pa: 'ਭਾਦੋਂ ਦੇ ਮਹੀਨੇ ਵਿੱਚ ਗੁੱਗਾ ਪੀਰ ਦੀ ਯਾਦ ਵਿੱਚ।',
          hi: 'भादों के महीने में गुग्गा पीर की स्मृति में।',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-pcf-2',
        q: {
          en: 'Which Punjabi folk dance is performed by men to celebrate a victory (in sports or litigation)?',
          pa: 'ਕਿਸੇ ਜਿੱਤ (ਮੁਕੱਦਮੇ ਜਾਂ ਖੇਡ ਵਿੱਚ) ਦੀ ਖੁਸ਼ੀ ਮਨਾਉਣ ਲਈ ਮਰਦਾਂ ਵੱਲੋਂ ਕਿਹੜਾ ਲੋਕ-ਨਾਚ ਨੱਚਿਆ ਜਾਂਦਾ ਹੈ?',
          hi: 'किसी विजय (खेल या मुकदमे में) की खुशी मनाने के लिए पुरुषों द्वारा कौन-सा लोक नृत्य किया जाता है?',
        },
        a: {
          en: 'Luddi (ਲੁੱਡੀ).',
          pa: 'ਲੁੱਡੀ (Luddi)।',
          hi: 'लुड्डी (Luddi)।',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-pcf-3',
        q: {
          en: 'Which variety of Phulkari is embroidered by the maternal grandmother (Nani) and draped over the bride during the Chura ceremony?',
          pa: 'ਨਾਨੀ ਵੱਲੋਂ ਤਿਆਰ ਕੀਤੀ ਕਿਹੜੀ ਫੁਲਕਾਰੀ ਵਿਆਹ ਸਮੇਂ ਕੁੜੀ ਨੂੰ ਚੂੜਾ ਚੜ੍ਹਾਉਣ ਵੇਲੇ ਉੱਪਰ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ?',
          hi: 'नानी द्वारा तैयार की गई कौन-सी फुलकारी विवाह के समय दुल्हन को चूड़ा चढ़ाने की रस्म में ओढ़ाई जाती है?',
        },
        a: {
          en: 'Chope (ਚੋਪ), whereas Subhar (ਸੁਭਰ) is worn during the Laavan ceremony.',
          pa: 'ਚੋਪ (Chope), ਜਦਕਿ ਸੁਭਰ (Subhar) ਲਾਵਾਂ ਸਮੇਂ ਲਈ ਜਾਂਦੀ ਹੈ।',
          hi: 'चोप (Chope), जबकि सुभर (Subhar) लावां के समय ओढ़ी जाती है।',
        },
        difficulty: 'medium',
      },
      {
        id: 'fc-pcf-4',
        q: {
          en: 'On which body parts are the traditional Punjabi ornaments "Saggi Phul", "Machhli", and "Gokhru" worn?',
          pa: 'ਪੰਜਾਬੀ ਗਹਿਣੇ "ਸੱਗੀ ਫੁੱਲ", "ਮਛਲੀ" ਅਤੇ "ਗੋਖੜੂ" ਸਰੀਰ ਦੇ ਕਿਹੜੇ ਅੰਗਾਂ ਉੱਤੇ ਪਹਿਨੇ ਜਾਂਦੇ ਹਨ?',
          hi: 'पारंपरिक पंजाबी आभूषण "सग्गी फूल", "मछली" और "गोखरू" शरीर के किन अंगों पर पहने जाते हैं?',
        },
        a: {
          en: 'Saggi Phul = Head; Machhli = Nose; Gokhru = Wrist.',
          pa: 'ਸੱਗੀ ਫੁੱਲ = ਸਿਰ; ਮਛਲੀ = ਨੱਕ; ਗੋਖੜੂ = ਗੁੱਟ (ਬਾਂਹ)।',
          hi: 'सग्गी फूल = सिर; मछली = नाक; गोखरू = कलाई।',
        },
        difficulty: 'medium',
      },
    ],
    videos: [
      {
        title: 'Punjab Culture, Folk Dances, Fairs, Ornaments & Literature | PSSSB Clerk & Patwari',
        channel: 'PSEB / Punjabi University Archive',
        url: 'https://www.youtube.com/results?search_query=Punjab+Culture+Folk+Dances+Fairs+Ornaments+PSSSB+Clerk',
        language: 'Punjabi / English / Hindi',
      },
    ],
    bookRefs: [
      {
        title: 'Mera Pind (ਮੇਰਾ ਪਿੰਡ)',
        author: 'Giani Gurdit Singh',
        chapters: 'Complete Chapters on Punjabi Rituals, Folk Songs, Fairs and Culture',
        type: 'standard',
      },
      {
        title: 'Punjab دے Mele te Tyohar (ਪੰਜਾਬ ਦੇ ਮੇਲੇ ਤੇ ਤਿਉਹਾਰ)',
        author: 'Sohinder Singh Wanjara Bedi (Punjabi Folklorist)',
        chapters: 'Encyclopedia of Punjabi Folklore, Fairs & Festivals',
        type: 'standard',
      },
    ],
    syllabusReference: {
      title: 'PSSSB Clerk & Patwari Punjab History and Culture Syllabus (Paper A & Paper B)',
      url: 'https://sssb.punjab.gov.in/',
      body: 'Punjab Subordinate Services Selection Board (PSSSB)',
      verifiedOn: '2026-10-10',
    },
  },
};
