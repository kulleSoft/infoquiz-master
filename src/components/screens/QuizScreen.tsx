import { useState } from 'react';
import { Play, Shuffle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { QuizGame } from '@/components/QuizGame';
import { getRandomQuestions, categories } from '@/data/questions';
import { QuizCategory } from '@/types/quiz';

interface QuizScreenProps {
  onComplete: (category: QuizCategory, correct: number, total: number) => void;
  playSound: (type: 'correct' | 'wrong' | 'click' | 'complete') => void;
}

export const QuizScreen = ({ onComplete, playSound }: QuizScreenProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [questions, setQuestions] = useState<ReturnType<typeof getRandomQuestions>>([]);

  const startQuiz = () => {
    const randomQuestions = getRandomQuestions(10);
    setQuestions(randomQuestions);
    setIsPlaying(true);
    playSound('click');
  };

  const handleComplete = (correct: number, total: number) => {
    onComplete('basico', correct, total); // Random quiz uses 'basico' as default category
  };

  if (isPlaying) {
    return (
      <QuizGame
        questions={questions}
        category="basico"
        onComplete={handleComplete}
        onBack={() => setIsPlaying(false)}
        playSound={playSound}
      />
    );
  }

  return (
    <div className="space-y-8 animate-slide-up">
      {/* Hero Section */}
      <div className="text-center pt-4">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent mb-4 animate-pulse-glow">
          <Zap className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-2xl font-bold mb-2">InfoQuiz</h1>
        <p className="text-muted-foreground">
          Teste seus conhecimentos em informática!
        </p>
      </div>

      {/* Quick Play Card */}
      <div className="bg-card rounded-2xl p-6 border border-border">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Shuffle className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="font-semibold">Quiz Rápido</h2>
            <p className="text-sm text-muted-foreground">
              10 perguntas aleatórias de todas as categorias
            </p>
          </div>
        </div>
        <Button onClick={startQuiz} className="w-full gap-2">
          <Play className="w-4 h-4" />
          Iniciar Quiz
        </Button>
      </div>

      {/* Stats Preview */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-card rounded-xl p-4 border border-border text-center">
          <p className="text-2xl font-bold text-primary">{categories.length}</p>
          <p className="text-xs text-muted-foreground">Categorias</p>
        </div>
        <div className="bg-card rounded-xl p-4 border border-border text-center">
          <p className="text-2xl font-bold text-primary">30+</p>
          <p className="text-xs text-muted-foreground">Perguntas</p>
        </div>
        <div className="bg-card rounded-xl p-4 border border-border text-center">
          <p className="text-2xl font-bold text-primary">∞</p>
          <p className="text-xs text-muted-foreground">Diversão</p>
        </div>
      </div>
    </div>
  );
};
