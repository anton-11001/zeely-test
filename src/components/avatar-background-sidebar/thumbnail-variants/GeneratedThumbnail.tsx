import type { BackgroundThumbnailProps } from '../types';

export function GeneratedThumbnail({
  background,
  avatarName,
  avatarImageUrl,
}: BackgroundThumbnailProps) {
  const imageUrl = background.imageUrl!;
  return (
    <div className="relative h-full w-full">
      <img
        src={imageUrl}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden
      />
      <img
        src={avatarImageUrl}
        alt={`${avatarName} background`}
        className="absolute inset-0 h-full w-full object-cover object-center"
        style={
          {
            maskImage: `url(${avatarImageUrl})`,
            WebkitMaskImage: `url(${avatarImageUrl})`,
            maskSize: 'cover',
            WebkitMaskSize: 'cover',
            maskPosition: 'center',
            WebkitMaskPosition: 'center',
          } as React.CSSProperties
        }
      />
    </div>
  );
}
