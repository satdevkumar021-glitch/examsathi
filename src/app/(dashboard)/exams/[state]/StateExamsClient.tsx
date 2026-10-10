'use client';
import Link from 'next/link';
import { EXAMS, STATES_CATALOG } from '@/lib/data/exams';
import { ArrowLeft, BookOpen, Clock, Award } from 'lucide-react';
import { useStore } from '@/lib/store';

export default function StateExams({ state }: { state: string }) {
  const { language, setSelectedExam } = useStore();
  const stateKey = state as keyof typeof EXAMS;
  const stateExams = EXAMS[stateKey] || [];

  const stateMeta = STATES_CATALOG.find(s => s.id === state);
  const stateName = stateMeta
    ? (language === 'pa' ? stateMeta.namePunjabi : language === 'hi' ? stateMeta.nameHindi : stateMeta.name)
    : state.charAt(0).toUpperCase() + state.slice(1);

  return (
    <div className="p-4 flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Link href="/exams" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 border border-slate-700 hover:bg-slate-700 transition">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">{stateMeta?.icon || '🎯'}</span>
            <h1 className="text-xl font-bold text-white">{stateName} Examinations</h1>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            {language === 'pa' ? 'ਸਿਲੇਬਸ ਤੇ ਮੌਕ ਟੈਸਟ ਲਈ ਪ੍ਰੀਖਿਆ ਚੁਣੋ' : language === 'hi' ? 'सिलेबस व अभ्यास हेतु परीक्षा चुनें' : 'Select an exam to begin structured preparation'}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {stateExams.length === 0 ? (
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center text-slate-400">
            No exams found for this state.
          </div>
        ) : (
          stateExams.map(exam => {
            const firstSubjectId = exam.subjects && exam.subjects.length > 0 ? exam.subjects[0].id : 'general';
            const subjectLabels = exam.subjects && exam.subjects.length > 0
              ? exam.subjects.map((s) => typeof s === 'string' ? s : s.name).join(', ')
              : 'General Studies, Mental Ability, Language';

            return (
              <Link
                key={exam.id}
                href={`/study/${exam.id}/${firstSubjectId}`}
                onClick={() => setSelectedExam(state, exam.id)}
                className="bg-slate-800/90 hover:bg-slate-800 border border-slate-700 hover:border-indigo-500/50 transition rounded-xl p-4 flex flex-col gap-3 shadow-lg"
              >
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{exam.emoji || '🎯'}</span>
                      <h3 className="text-white font-bold text-lg">{exam.name}</h3>
                    </div>
                    {exam.nameHindi && <p className="text-indigo-300 text-sm mt-0.5">{exam.nameHindi}</p>}
                    {exam.namePunjabi && <p className="text-emerald-300 text-xs mt-0.5">{exam.namePunjabi}</p>}
                  </div>
                  <span className="bg-indigo-950/80 border border-indigo-700/50 text-indigo-300 text-xs px-2.5 py-1 rounded-full font-medium whitespace-nowrap">
                    {exam.body}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <div className="flex items-center gap-1">
                    <Clock size={13} className="text-amber-400" />
                    <span>{exam.duration || '2 Hours'}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award size={13} className="text-emerald-400" />
                    <span>{exam.totalMarks} Marks</span>
                  </div>
                  {exam.level && (
                    <span className="bg-slate-700/60 text-slate-300 px-2 py-0.5 rounded">
                      {exam.level}
                    </span>
                  )}
                </div>

                <div className="h-px w-full bg-slate-700/60"></div>

                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <BookOpen size={14} className="text-teal-400 shrink-0" />
                  <span className="truncate">{subjectLabels}</span>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
}
