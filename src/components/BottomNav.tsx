import { Home, Grid3X3, Trophy, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

type Tab = 'quiz' | 'categories' | 'ranking' | 'settings';

interface BottomNavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const tabs = [
  { id: 'quiz' as Tab, label: 'Quiz', icon: Home },
  { id: 'categories' as Tab, label: 'Categorias', icon: Grid3X3 },
  { id: 'ranking' as Tab, label: 'Ranking', icon: Trophy },
  { id: 'settings' as Tab, label: 'Config', icon: Settings },
];

export const BottomNav = ({ activeTab, onTabChange }: BottomNavProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-t border-border safe-area-bottom">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={cn(
              'flex flex-col items-center justify-center flex-1 h-full transition-all duration-200',
              'hover:bg-muted/50 active:scale-95',
              activeTab === id
                ? 'text-primary'
                : 'text-muted-foreground'
            )}
          >
            <div
              className={cn(
                'relative p-1.5 rounded-xl transition-all duration-200',
                activeTab === id && 'bg-primary/10'
              )}
            >
              <Icon
                className={cn(
                  'w-5 h-5 transition-transform duration-200',
                  activeTab === id && 'scale-110'
                )}
              />
              {activeTab === id && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
              )}
            </div>
            <span className="text-[10px] font-medium mt-0.5">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};
