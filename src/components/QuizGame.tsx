import { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, XCircle, Sparkles } from 'lucide-react';
import { Question, QuizCategory } from '@/types/quiz';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface QuizGameProps {
  questions: Question[];
  category: QuizCategory;
  onComplete: (correct: number, total: number) => void;
  onBack: () => void;
  playSound: (type: 'correct' | 'wrong' | 'click' | 'complete') => void;
}

export const QuizGame = ({
  questions,
  category,
  onComplete,
  onBack,
  playSound,
}: QuizGameProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return;

    playSound('click');
    setSelectedAnswer(answerIndex);
    setShowResult(true);

    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    
    setTimeout(() => {
      if (isCorrect) {
        playSound('correct');
        setCorrectCount((prev) => prev + 1);
      } else {
        playSound('wrong');
      }
    }, 100);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setIsComplete(true);
      playSound('complete');
    }
  };

  useEffect(() => {
    if (isComplete) {
      onComplete(correctCount, questions.length);
    }
  }, [isComplete, correctCount, questions.length, onComplete]);

  if (isComplete) {
    const percentage = Math.round((correctCount / questions.length) * 100);
    const isGood = percentage >= 70;

    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] animate-scale-in">
        <div
          className={cn(
            'w-24 h-24 rounded-full flex items-center justify-center mb-6',
            isGood ? 'bg-success/20' : 'bg-destructive/20'
          )}
        >
          {isGood ? (
            <Sparkles className="w-12 h-12 text-success animate-bounce-soft" />
          ) : (
            <XCircle className="w-12 h-12 text-destructive" />
          )}
        </div>

        <h2 className="text-2xl font-bold mb-2">
          {isGood ? 'Parabéns!' : 'Continue tentando!'}
        </h2>

        <p className="text-muted-foreground mb-6 text-center">
          Você acertou {correctCount} de {questions.length} perguntas
        </p>

        <div className="text-5xl font-bold mb-8">
          <span className={isGood ? 'text-success' : 'text-destructive'}>
            {percentage}%
          </span>
        </div>

        <div className="flex gap-3">
          <Button variant="outline" onClick={onBack}>
            Voltar
          </Button>
          <Button
            onClick={() => {
              setCurrentIndex(0);
              setSelectedAnswer(null);
              setShowResult(false);
              setCorrectCount(0);
              setIsComplete(false);
            }}
          >
            Tentar Novamente
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-slide-up">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={onBack}
          className="p-2 rounded-xl hover:bg-muted transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex-1">
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-1">
            <span>Questão {currentIndex + 1} de {questions.length}</span>
            <span>{correctCount} acertos</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Question */}
      <div className="bg-card rounded-2xl p-6 border border-border mb-6">
        <h2 className="text-lg font-semibold leading-relaxed">
          {currentQuestion.question}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {currentQuestion.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = index === currentQuestion.correctAnswer;
          const showCorrectness = showResult;

          return (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={showResult}
              className={cn(
                'w-full p-4 rounded-xl text-left transition-all duration-200',
                'border-2 active:scale-[0.98]',
                !showResult && 'hover:border-primary/50 hover:bg-muted/50',
                !showResult && !isSelected && 'border-border bg-card',
                showCorrectness && isCorrect && 'border-success bg-success/10',
                showCorrectness && isSelected && !isCorrect && 'border-destructive bg-destructive/10 animate-shake',
                !showCorrectness && isSelected && 'border-primary bg-primary/10'
              )}
            >
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    'w-8 h-8 rounded-lg flex items-center justify-center font-semibold text-sm',
                    'transition-colors',
                    !showResult && 'bg-muted text-muted-foreground',
                    showCorrectness && isCorrect && 'bg-success text-success-foreground',
                    showCorrectness && isSelected && !isCorrect && 'bg-destructive text-destructive-foreground'
                  )}
                >
                  {showCorrectness && isCorrect ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : showCorrectness && isSelected && !isCorrect ? (
                    <XCircle className="w-5 h-5" />
                  ) : (
                    String.fromCharCode(65 + index)
                  )}
                </span>
                <span className="flex-1">{option}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      {showResult && (
        <div className="mt-6 animate-slide-up">
          <Button onClick={handleNext} className="w-full">
            {currentIndex < questions.length - 1 ? 'Próxima Pergunta' : 'Ver Resultado'}
          </Button>
        </div>
      )}
    </div>
  );
};
