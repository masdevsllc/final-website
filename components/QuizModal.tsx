
import React, { useState } from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../siteConfig';
import { PrimaryButton } from './PrimaryButton';

interface QuizModalProps {
  /** Callback to close the modal */
  onClose: () => void;
  /** Callback to claim the audit (usually scrolls to final CTA) */
  onAuditClaim: () => void;
}

/**
 * QuizModal - ROI Calculator tool.
 * Content driven by siteConfig.quiz.
 */
export const QuizModal: React.FC<QuizModalProps> = ({ onClose, onAuditClaim }) => {
  const { quiz } = siteConfig;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-[#121420]/95 backdrop-blur-xl">
      <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl max-w-2xl w-full relative shadow-2xl">
        <button onClick={onClose} className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors">
          <XCircle size={32} />
        </button>
        {!finished ? (
          <>
            <div className="mb-8">
              <span className="text-[#30f797] font-bold text-sm tracking-widest uppercase italic">Step {currentQuestion + 1} of {quiz.questions.length}</span>
              <div className="h-1 bg-white/10 w-full mt-4 rounded-full overflow-hidden">
                <div className="h-full bg-[#30f797] transition-all duration-500" style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}></div>
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-8 uppercase italic tracking-tight">
              {quiz.questions[currentQuestion].question}
            </h3>
            <div className="grid gap-4">
              {quiz.questions[currentQuestion].options.map((opt, i) => (
                <button key={i} onClick={handleNext} className="p-5 text-left rounded-xl border border-white/10 hover:border-[#30f797] hover:bg-[#30f797]/5 transition-all font-extrabold uppercase tracking-wide text-sm md:text-base">
                  {opt}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-[#30f797]/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-[#30f797]/30">
              <CheckCircle2 size={40} className="text-[#30f797]" />
            </div>
            <h3 className="text-3xl font-black mb-4 uppercase italic tracking-tight">{quiz.title}</h3>
            <p className="text-xl text-white/70 mb-12 font-medium">{quiz.subheadline}</p>
            <PrimaryButton onClick={onAuditClaim}>
              {quiz.ctaText}
            </PrimaryButton>
          </div>
        )}
      </div>
    </div>
  );
};
