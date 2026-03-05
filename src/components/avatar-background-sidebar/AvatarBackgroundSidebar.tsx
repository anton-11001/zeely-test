import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import ai_icon_2 from '../../assets/icons/ai_icon_2.svg';

import avatarImage from '@/assets/avatar.png';

import { BackgroundThumbnail } from './BackgroundThumbnail';
import { BackgroundIdeaSection } from './BackgroundIdeaSection';
import {
  ASSET_BACKGROUNDS,
  DEFAULT_BACKGROUND,
  GENERATION_TIME_MS,
  GENERATION_UPDATE_INTERVAL_MS,
  EMPTY_BACKGROUND_IDEA_ERROR,
  THUMBNAIL_WIDTH,
} from './constants';
import { formatEstimatedTimeLeft } from '@/utils/time-utils';
import type { AvatarBackgroundSidebarProps } from './types';
import type { BackgroundItem } from './types';
import { useState } from 'react';


export function AvatarBackgroundSidebar({
  open,
  onOpenChange,
  avatarName = 'Avatar',
}: AvatarBackgroundSidebarProps) {
  const [backgrounds, setBackgrounds] = useState<BackgroundItem[]>([DEFAULT_BACKGROUND]);
  const [nextMockIndex, setNextMockIndex] = useState(0);
  const [backgroundIdea, setBackgroundIdea] = useState('');
  const [ideaError, setIdeaError] = useState<string | null>(null);

  const handleGenerateClick = () => {
    const trimmedIdea = backgroundIdea.trim();

    if (!trimmedIdea) {
      setIdeaError(EMPTY_BACKGROUND_IDEA_ERROR);
      return;
    }

    setIdeaError(null);

    const generatingId = `generating-${Date.now()}`;
    const imageIndexToUse = nextMockIndex % ASSET_BACKGROUNDS.length;
    const startTime = Date.now();

    setBackgrounds(prev => [
      ...prev,
      {
        id: generatingId,
        type: 'generating',
        progress: 0,
        estimatedTimeLeft: formatEstimatedTimeLeft(GENERATION_TIME_MS),
      },
    ]);

    setNextMockIndex(prev => prev + 1);

    const intervalId = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, GENERATION_TIME_MS - elapsed);
      const progress = Math.min(100, Math.round((elapsed / GENERATION_TIME_MS) * 100));

      if (remaining <= 0) {
        clearInterval(intervalId);
        setBackgrounds(prev =>
          prev.map(bg =>
            bg.id === generatingId
              ? {
                  id: `generated-${Date.now()}`,
                  type: 'generated',
                  imageUrl: ASSET_BACKGROUNDS[imageIndexToUse],
                }
              : bg
          )
        );
        return;
      }

      setBackgrounds(prev =>
        prev.map(bg =>
          bg.id === generatingId
            ? {
                ...bg,
                progress,
                estimatedTimeLeft: formatEstimatedTimeLeft(remaining),
              }
            : bg
        )
      );
    }, GENERATION_UPDATE_INTERVAL_MS);
  };

  const handleBackgroundIdeaChange = (value: string) => {
    setBackgroundIdea(value);

    if (ideaError) {
      setIdeaError(null);
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="flex w-[400px] flex-col border-l border-border bg-background p-0 [&>button]:text-foreground"
      >
        <SheetHeader className="flex flex-row items-center justify-between space-y-0 px-4 pt-8">
          <SheetTitle className="text-[1.375rem] font-bold text-foreground">
            Change background
          </SheetTitle>
        </SheetHeader>

        <div
          className="flex flex-1 flex-col overflow-y-auto px-6 pb-4 scrollbar-no-arrows"
          style={
            {
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(0, 0, 0, 0.2) transparent',
            } as React.CSSProperties
          }
        >
          <BackgroundIdeaSection
            value={backgroundIdea}
            onChange={handleBackgroundIdeaChange}
            onRegenerate={handleGenerateClick}
            error={ideaError}
          />

          <Button className="mt-6 w-full gap-2 rounded-full bg-black py-6 text-base text-white hover:bg-black/90">
            <img src={ai_icon_2} alt="icon" />
            <span
              onClick={handleGenerateClick}
              className="text-sm font-semibold leading-[0.8] text-center align-middle"
            >
              Generate BG for 1 credit
            </span>
          </Button>

          <section className="mt-10 space-y-3">
            <h3 className="text-sm font-semibold text-foreground">
              Your backgrounds
            </h3>
            <div
              className="grid gap-2"
              style={{
                gridTemplateColumns: `repeat(3, ${THUMBNAIL_WIDTH}px)`,
              }}
            >
              {backgrounds.map(background => (
                <BackgroundThumbnail
                  key={background.id}
                  background={background}
                  avatarName={avatarName}
                  avatarImageUrl={avatarImage}
                />
              ))}
            </div>
          </section>
        </div>
      </SheetContent>
    </Sheet>
  );
}
