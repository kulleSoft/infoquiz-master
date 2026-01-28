import { useState } from 'react';
import { Grid3X3 } from 'lucide-react';
import { CategoryCard } from '@/components/CategoryCard';
import { QuizGame } from '@/components/QuizGame';
import { categories, getQuestionsByCategory } from '@/data/questions';
import { QuizCategory } from '@/types/quiz';

interface CategoriesScreenProps {
  onComplete: (category: QuizCategory, correct: number, total: number) => void;
  playSound: (type: 'correct' | 'wrong' | 'click' | 'complete') => void;
}

export const CategoriesScreen = ({ onComplete, playSound }: CategoriesScreenProps) => {
  const [selectedCategory, setSelectedCategory] = useState<QuizCategory | null>(null);
  const [questions, setQuestions] = useState<ReturnType<typeof getQuestionsByCategory>>([]);

  const handleSelectCategory = (categoryId: QuizCategory) => {
    const categoryQuestions = getQuestionsByCategory(categoryId);
    setQuestions(categoryQuestions);
    setSelectedCategory(categoryId);
    playSound('click');
  };

  const handleComplete = (correct: number, total: number) => {
    if (selectedCategory) {
      onComplete(selectedCategory, correct, total);
    }
  };

  if (selectedCategory) {
    return (
      <QuizGame
        questions={questions}
        category={selectedCategory}
        onComplete={handleComplete}
        onBack={() => setSelectedCategory(null)}
        playSound={playSound}
      />
    );
  }

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Grid3X3 className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h1 className="text-xl font-bold">Categorias</h1>
          <p className="text-sm text-muted-foreground">
            Escolha um tema para o quiz
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="space-y-3">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            questionsCount={getQuestionsByCategory(category.id).length}
            onSelect={() => handleSelectCategory(category.id)}
          />
        ))}
      </div>
    </div>
  );
};
