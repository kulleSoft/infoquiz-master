import { Shield, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

interface TermsModalProps {
  open: boolean;
  onAccept: () => void;
  isSettings?: boolean;
  onClose?: () => void;
}

export const TermsModal = ({ open, onAccept, isSettings, onClose }: TermsModalProps) => {
  return (
    <Dialog open={open} onOpenChange={isSettings ? onClose : undefined}>
      <DialogContent className="max-w-md mx-4 max-h-[90vh]">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <DialogTitle className="text-xl">Termos de Uso</DialogTitle>
          <DialogDescription>
            Por favor, leia e aceite nossos termos para continuar
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[40vh] pr-4">
          <div className="space-y-4 text-sm text-muted-foreground">
            <section>
              <h3 className="font-semibold text-foreground mb-2">1. Sobre o InfoQuiz</h3>
              <p>
                O InfoQuiz é um aplicativo educativo gratuito projetado para testar e
                aprimorar seus conhecimentos em informática através de quizzes
                interativos.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-foreground mb-2">2. Publicidade</h3>
              <p>
                Este aplicativo exibe anúncios para manter o serviço gratuito. Os
                anúncios são fornecidos por terceiros e podem ser personalizados com
                base em seus interesses.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-foreground mb-2">3. Armazenamento de Dados</h3>
              <p>
                Seus dados de progresso (pontuação, histórico de quizzes) são
                armazenados localmente no seu dispositivo. Não coletamos informações
                pessoais identificáveis.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-foreground mb-2">4. Uso Adequado</h3>
              <p>
                O conteúdo deste aplicativo é apenas para fins educativos. Não nos
                responsabilizamos pelo uso indevido das informações apresentadas.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-foreground mb-2">5. Atualizações</h3>
              <p>
                Podemos atualizar estes termos periodicamente. Recomendamos revisá-los
                regularmente através do menu de configurações.
              </p>
            </section>
          </div>
        </ScrollArea>

        <div className="pt-4">
          {isSettings ? (
            <Button onClick={onClose} className="w-full">
              Fechar
            </Button>
          ) : (
            <Button onClick={onAccept} className="w-full gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Aceitar e Continuar
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
