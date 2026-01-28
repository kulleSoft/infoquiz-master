import { Monitor, Cpu, AppWindow, Settings, Wifi, Code, LucideIcon } from 'lucide-react';
import { CategoryInfo } from '@/types/quiz';
import { cn } from '@/lib/utils';

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Cpu,
  AppWindow,
  Settings,
  Wifi,
  Code,
};

interface CategoryCardProps {
  category: CategoryInfo;
  questionsCount: number;
  onSelect: () => void;
}

export const CategoryCard = ({ category, questionsCount, onSelect }: CategoryCardProps) => {
  const Icon = iconMap[category.icon] || Monitor;

  return (
    <button
      onClick={onSelect}
      className={cn(
        'w-full p-4 rounded-2xl transition-all duration-300',
        'bg-card border border-border hover:border-primary/50',
        'hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1',
        'active:scale-[0.98] text-left group'
      )}
    >
      <div className="flex items-start gap-4">
        <div
          className={cn(
            'w-12 h-12 rounded-xl flex items-center justify-center',
            'bg-gradient-to-br transition-transform group-hover:scale-110',
            category.color
          )}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground truncate">
            {category.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-0.5">
            {category.description}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
              {questionsCount} perguntas
            </span>
          </div>
        </div>
      </div>
    </button>
  );
};
