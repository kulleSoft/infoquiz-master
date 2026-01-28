import { useState } from 'react';
import { BottomNav } from '@/components/BottomNav';
import { TermsModal } from '@/components/TermsModal';
import { QuizScreen } from '@/components/screens/QuizScreen';
import { CategoriesScreen } from '@/components/screens/CategoriesScreen';
import { RankingScreen } from '@/components/screens/RankingScreen';
import { SettingsScreen } from '@/components/screens/SettingsScreen';
import { useSettings } from '@/hooks/useSettings';
import { useScore } from '@/hooks/useScore';
import { useSound } from '@/hooks/useSound';
import { QuizCategory } from '@/types/quiz';

type Tab = 'quiz' | 'categories' | 'ranking' | 'settings';

const Index = () => {
  const [activeTab, setActiveTab] = useState<Tab>('quiz');
  const { settings, updateSetting, acceptTerms } = useSettings();
  const { score, addQuizResult, resetScore, getAccuracy } = useScore();
  const { playSound } = useSound(settings.soundEnabled);

  const handleQuizComplete = (category: QuizCategory, correct: number, total: number) => {
    addQuizResult(category, correct, total);
  };

  const renderScreen = () => {
    switch (activeTab) {
      case 'quiz':
        return (
          <QuizScreen
            onComplete={handleQuizComplete}
            playSound={playSound}
          />
        );
      case 'categories':
        return (
          <CategoriesScreen
            onComplete={handleQuizComplete}
            playSound={playSound}
          />
        );
      case 'ranking':
        return (
          <RankingScreen
            score={score}
            accuracy={getAccuracy()}
            onReset={resetScore}
          />
        );
      case 'settings':
        return (
          <SettingsScreen
            settings={settings}
            onUpdateSetting={updateSetting}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Terms Modal - Blocking */}
      <TermsModal
        open={!settings.termsAccepted}
        onAccept={acceptTerms}
      />

      {/* Main Content */}
      <main className="max-w-lg mx-auto px-4 pb-24 pt-6">
        {renderScreen()}
      </main>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
