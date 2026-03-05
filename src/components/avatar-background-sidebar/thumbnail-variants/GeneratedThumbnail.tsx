import type { BackgroundThumbnailProps } from '../types';

export function GeneratedThumbnail({
  background,
  avatarName,
  avatarImageUrl,
}: BackgroundThumbnailProps) {
  const imageUrl = background.imageUrl!;
  return (
    <div className="relative size-full">
      <img
        src={imageUrl}
        alt=""
        className="absolute inset-0 size-full object-cover object-center"
        aria-hidden
      />
      <img
        src={avatarImageUrl}
        alt={`${avatarName} background`}
        className="absolute inset-0 size-full object-cover object-center"
        style={
          {
            maskImage: `url(${avatarImageUrl})`,
            WebkitMaskImage: `url(${avatarImageUrl})`,
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskPosition: 'center',
          } as React.CSSProperties
        }
      />
    </div>
  );
}
