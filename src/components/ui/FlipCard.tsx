'use client';
import { useState } from 'react';
import { CardRating } from '@/lib/srs';

interface FlipCardProps {
  question: string;
  answer: string;
  onRate?: (rating: CardRating) => void;
}

export default function FlipCard({ question, answer, onRate }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  const handleRate = (rating: CardRating) => {
    onRate?.(rating);
    setFlipped(false);
  };

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div role="button" tabIndex={0} aria-label="Flip study card" aria-pressed={flipped} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setFlipped(!flipped); } }} className="w-full h-80 perspective-1000 cursor-pointer" onClick={() => setFlipped(!flipped)}>
        <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${flipped ? 'rotate-y-180' : ''}`}>
          
          {/* Front */}
          <div aria-hidden={flipped} className="absolute w-full h-full backface-hidden bg-gradient-to-br from-indigo-600 to-teal-700 rounded-2xl p-6 shadow-xl border border-white/10 flex flex-col items-center justify-center text-center">
            <p className="text-slate-300 text-sm mb-4">Question</p>
            <h3 className="text-2xl font-bold text-white">{question}</h3>
            <p className="absolute bottom-6 text-slate-300/60 text-sm animate-pulse">Tap to flip</p>
          </div>

          {/* Back */}
          <div aria-hidden={!flipped} className="absolute w-full h-full backface-hidden bg-gradient-to-br from-teal-600 to-emerald-700 rounded-2xl p-6 shadow-xl border border-white/10 flex flex-col items-center justify-center text-center rotate-y-180">
            <p className="text-green-200 text-sm mb-4">Answer</p>
            <h3 className="text-xl font-medium text-white">{answer}</h3>
          </div>

        </div>
      </div>

      {/* SRS Rating Buttons — only when flipped and onRate is provided */}
      {flipped && onRate && (
        <div className="flex gap-2 w-full justify-center">
          <button
            onClick={() => handleRate('again')}
            className="text-xs px-3 py-1.5 rounded-full font-bold bg-rose-600/80 hover:bg-rose-500 text-white border border-rose-500/60 transition"
          >
            🔴 Again
          </button>
          <button
            onClick={() => handleRate('hard')}
            className="text-xs px-3 py-1.5 rounded-full font-bold bg-orange-600/80 hover:bg-orange-500 text-white border border-orange-500/60 transition"
          >
            🟠 Hard
          </button>
          <button
            onClick={() => handleRate('good')}
            className="text-xs px-3 py-1.5 rounded-full font-bold bg-emerald-600/80 hover:bg-emerald-500 text-white border border-emerald-500/60 transition"
          >
            🟢 Good
          </button>
          <button
            onClick={() => handleRate('easy')}
            className="text-xs px-3 py-1.5 rounded-full font-bold bg-blue-600/80 hover:bg-blue-500 text-white border border-blue-500/60 transition"
          >
            🔵 Easy
          </button>
        </div>
      )}
    </div>
  );
}
