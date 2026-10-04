'use client';
import { useState } from 'react';

interface FlipCardProps {
  question: string;
  answer: string;
}

export default function FlipCard({ question, answer }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="w-full h-80 perspective-1000 cursor-pointer" onClick={() => setFlipped(!flipped)}>
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${flipped ? 'rotate-y-180' : ''}`}>
        
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-indigo-600 to-teal-700 rounded-2xl p-6 shadow-xl border border-white/10 flex flex-col items-center justify-center text-center">
          <p className="text-slate-300 text-sm mb-4">Question</p>
          <h3 className="text-2xl font-bold text-white">{question}</h3>
          <p className="absolute bottom-6 text-slate-300/60 text-sm animate-pulse">Tap to flip</p>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-teal-600 to-emerald-700 rounded-2xl p-6 shadow-xl border border-white/10 flex flex-col items-center justify-center text-center rotate-y-180">
          <p className="text-green-200 text-sm mb-4">Answer</p>
          <h3 className="text-xl font-medium text-white">{answer}</h3>
        </div>

      </div>
    </div>
  );
}
