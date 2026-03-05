import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import ai_icon_1 from '../../assets/icons/ai_icon_1.svg';
import action_back from '../../assets/icons/action_back.svg';
import action_next from '../../assets/icons/action_next.svg';

export function BackgroundIdeaSection({
  value,
  onChange,
  onRegenerate,
  error,
}: {
  value: string;
  onChange: (value: string) => void;
  onRegenerate: () => void;
  error?: string | null;
}) {
  return (
    <section className="space-y-3">
      <h3 className="text-sm font-semibold text-foreground">Background idea</h3>
      <div className="relative min-h-[100px] rounded-xl border border-border bg-white shadow-sm">
        <Textarea
          value={value}
          onChange={e => onChange(e.target.value)}
          className="min-h-[195px] p-4 resize-none rounded-xl border-0 bg-transparent shadow-none focus-visible:ring-0 text-sm font-medium leading-[1.4]"
          placeholder="Describe your background idea..."
        />
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-3 py-2">
          <Button
            variant="ghost"
            size="sm"
            className="h-6 flex items-center justify-center gap-1 px-0 hover:bg-transparent hover:text-teal-700 text-xs font-demibold leading-[1.2]"
          >
            <img src={ai_icon_1} alt="icon" />
            <span className="flex items-center mt-1" onClick={onRegenerate}>
              Regenerate
            </span>
          </Button>
          <div className="flex items-center gap-0.5">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              aria-label="Undo"
            >
              <img src={action_back} alt="icon" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              aria-label="Redo"
            >
              <img src={action_next} alt="icon" />
            </Button>
          </div>
        </div>
      </div>
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </section>
  );
}
