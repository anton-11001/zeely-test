import { BackgroundThumbnailProps } from '../types';

export function DefaultThumbnail({
  background,
  avatarName,
}: BackgroundThumbnailProps) {
  return (
    <>
      {background.imageUrl && (
        <img
          src={background.imageUrl}
          alt={`${avatarName} background`}
          className="h-full w-full object-cover rounded-2xl border-2 border-black"
        />
      )}
      {background.type === 'default' && (
        <span className="absolute right-2 top-2 rounded bg-muted/95 px-2 py-0.5 text-xs font-medium text-foreground">
          DEFAULT
        </span>
      )}
    </>
  );
}
