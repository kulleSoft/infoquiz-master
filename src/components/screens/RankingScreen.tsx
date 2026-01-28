import { Trophy, Target, CheckCircle, XCircle, Flame, RotateCcw } from 'lucide-react';
import { UserScore } from '@/types/quiz';
import { categories } from '@/data/questions';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface RankingScreenProps {
  score: UserScore;
  accuracy: number;
  onReset: () => void;
}

export const RankingScreen = ({ score, accuracy, onReset }: RankingScreenProps) => {
  const getCategoryName = (id: string) => {
    return categories.find((c) => c.id === id)?.name || id;
  };

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Trophy className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h1 className="text-xl font-bold">Sua Pontuação</h1>
          <p className="text-sm text-muted-foreground">
            Acompanhe seu progresso
          </p>
        </div>
      </div>

      {/* Main Score Card */}
      <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-6 text-white">
        <div className="text-center">
          <p className="text-sm opacity-80 mb-1">Pontuação Total</p>
          <p className="text-5xl font-bold mb-4">{score.totalPoints}</p>
          <div className="flex items-center justify-center gap-2">
            <Flame className="w-5 h-5" />
            <span className="font-medium">{score.quizzesTaken} quizzes completados</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-card rounded-xl p-4 border border-border text-center">
          <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center mx-auto mb-2">
            <CheckCircle className="w-4 h-4 text-success" />
          </div>
          <p className="text-xl font-bold">{score.correctAnswers}</p>
          <p className="text-xs text-muted-foreground">Corretas</p>
        </div>

        <div className="bg-card rounded-xl p-4 border border-border text-center">
          <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center mx-auto mb-2">
            <XCircle className="w-4 h-4 text-destructive" />
          </div>
          <p className="text-xl font-bold">{score.wrongAnswers}</p>
          <p className="text-xs text-muted-foreground">Erradas</p>
        </div>

        <div className="bg-card rounded-xl p-4 border border-border text-center">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
            <Target className="w-4 h-4 text-primary" />
          </div>
          <p className="text-xl font-bold">{accuracy}%</p>
          <p className="text-xs text-muted-foreground">Precisão</p>
        </div>
      </div>

      {/* Recent History */}
      {score.history.length > 0 && (
        <div className="bg-card rounded-2xl p-4 border border-border">
          <h3 className="font-semibold mb-3">Histórico Recente</h3>
          <div className="space-y-2">
            {score.history.slice(0, 5).map((result, index) => (
              <div
                key={index}
                className={cn(
                  'flex items-center justify-between p-3 rounded-xl',
                  'bg-muted/50'
                )}
              >
                <div>
                  <p className="font-medium text-sm">
                    {getCategoryName(result.category)}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(result.date).toLocaleDateString('pt-BR')}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold">
                    {result.score}/{result.total}
                  </p>
                  <p
                    className={cn(
                      'text-xs font-medium',
                      (result.score / result.total) >= 0.7
                        ? 'text-success'
                        : 'text-destructive'
                    )}
                  >
                    {Math.round((result.score / result.total) * 100)}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reset Button */}
      {score.totalPoints > 0 && (
        <Button
          variant="outline"
          onClick={onReset}
          className="w-full gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          Resetar Pontuação
        </Button>
      )}

      {score.totalPoints === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          <Trophy className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p>Complete quizzes para ver sua pontuação!</p>
        </div>
      )}
    </div>
  );
};
