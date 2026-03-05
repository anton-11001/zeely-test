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
          className="size-full object-cover object-center"
        />
      )}
      {background.type === 'default' && (
        <span className="absolute left-2 top-2 rounded bg-muted/95 px-[4px] py-[6px] text-[10px] font-bold text-foreground leading-none">
          DEFAULT
        </span>
      )}
    </>
  );
}
