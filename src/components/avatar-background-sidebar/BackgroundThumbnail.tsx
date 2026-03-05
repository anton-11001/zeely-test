import { type FC } from 'react';
import { cn } from '@/lib/utils';
import type { BackgroundThumbnailProps } from './types';
import {
  PendingThumbnail,
  GeneratedThumbnail,
  DefaultThumbnail,
} from './thumbnail-variants';

const BACKGROUND_TYPES = {
  PENDING: 'PENDING',
  GENERATED: 'GENERATED',
  DEFAULT: 'DEFAULT',
} as const;

type BackgroundType = keyof typeof BACKGROUND_TYPES;

function getBackgroundType(
  type: BackgroundThumbnailProps['background']['type'],
  imageUrl?: string
): BackgroundType {
  switch (type) {
    case 'generating':
      return BACKGROUND_TYPES.PENDING;
    case 'generated':
      return imageUrl ? BACKGROUND_TYPES.GENERATED : BACKGROUND_TYPES.DEFAULT;
    default:
      return BACKGROUND_TYPES.DEFAULT;
  }
}

const thumbnailMap: Record<BackgroundType, FC<BackgroundThumbnailProps>> = {
  [BACKGROUND_TYPES.PENDING]: PendingThumbnail,
  [BACKGROUND_TYPES.GENERATED]: GeneratedThumbnail,
  [BACKGROUND_TYPES.DEFAULT]: DefaultThumbnail,
};

export function BackgroundThumbnail(props: BackgroundThumbnailProps) {
  const { background } = props;
  const backgroundType = getBackgroundType(
    background.type,
    background.imageUrl
  );
  const ThumbnailComponent = thumbnailMap[backgroundType];
  const isPending = backgroundType === BACKGROUND_TYPES.PENDING;

  return (
    <div
      className={cn(
        'relative aspect-[2/4] overflow-hidden rounded-2xl border bg-muted',
        !isPending && 'cursor-pointer transition-opacity hover:opacity-90'
      )}
    >
      <ThumbnailComponent {...props} />
    </div>
  );
}
