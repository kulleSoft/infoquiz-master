import { useState } from 'react';
import { Settings as SettingsIcon, Volume2, VolumeX, Moon, Sun, FileText, Info } from 'lucide-react';
import { Settings } from '@/types/quiz';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { TermsModal } from '@/components/TermsModal';

interface SettingsScreenProps {
  settings: Settings;
  onUpdateSetting: <K extends keyof Settings>(key: K, value: Settings[K]) => void;
}

export const SettingsScreen = ({ settings, onUpdateSetting }: SettingsScreenProps) => {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <SettingsIcon className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h1 className="text-xl font-bold">Configurações</h1>
          <p className="text-sm text-muted-foreground">
            Personalize sua experiência
          </p>
        </div>
      </div>

      {/* Settings List */}
      <div className="bg-card rounded-2xl border border-border divide-y divide-border">
        {/* Sound Toggle */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            {settings.soundEnabled ? (
              <Volume2 className="w-5 h-5 text-primary" />
            ) : (
              <VolumeX className="w-5 h-5 text-muted-foreground" />
            )}
            <div>
              <p className="font-medium">Sons do Quiz</p>
              <p className="text-sm text-muted-foreground">
                Feedback sonoro nas respostas
              </p>
            </div>
          </div>
          <Switch
            checked={settings.soundEnabled}
            onCheckedChange={(checked) => onUpdateSetting('soundEnabled', checked)}
          />
        </div>

        {/* Dark Mode Toggle */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            {settings.darkMode ? (
              <Moon className="w-5 h-5 text-primary" />
            ) : (
              <Sun className="w-5 h-5 text-primary" />
            )}
            <div>
              <p className="font-medium">Modo Escuro</p>
              <p className="text-sm text-muted-foreground">
                Tema visual do aplicativo
              </p>
            </div>
          </div>
          <Switch
            checked={settings.darkMode}
            onCheckedChange={(checked) => onUpdateSetting('darkMode', checked)}
          />
        </div>

        {/* View Terms */}
        <button
          onClick={() => setShowTerms(true)}
          className="flex items-center justify-between p-4 w-full hover:bg-muted/50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-muted-foreground" />
            <div className="text-left">
              <p className="font-medium">Termos de Uso</p>
              <p className="text-sm text-muted-foreground">
                Visualizar termos e condições
              </p>
            </div>
          </div>
        </button>
      </div>

      {/* About Section */}
      <div className="bg-card rounded-2xl p-4 border border-border">
        <div className="flex items-center gap-3 mb-3">
          <Info className="w-5 h-5 text-muted-foreground" />
          <p className="font-medium">Sobre o InfoQuiz</p>
        </div>
        <p className="text-sm text-muted-foreground">
          InfoQuiz é um aplicativo educativo gratuito para testar e melhorar seus
          conhecimentos em informática. Desenvolvido com ❤️ para estudantes e
          entusiastas da tecnologia.
        </p>
        <p className="text-xs text-muted-foreground mt-3">
          Versão 1.0.0
        </p>
      </div>

      {/* Terms Modal */}
      <TermsModal
        open={showTerms}
        onAccept={() => {}}
        isSettings
        onClose={() => setShowTerms(false)}
      />
    </div>
  );
};
