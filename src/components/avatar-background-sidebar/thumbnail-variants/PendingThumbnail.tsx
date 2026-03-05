import type { BackgroundThumbnailProps } from '../types';

export function PendingThumbnail({ background }: BackgroundThumbnailProps) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/90 p-4">
      <div className="relative h-14 w-14">
        <svg className="h-14 w-14 -rotate-90" viewBox="0 0 36 36" aria-hidden>
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-white/20"
          />
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray={`${(background.progress ?? 0) * 0.94} 94`}
            strokeLinecap="round"
            className="text-emerald-500 transition-all duration-300"
          />
        </svg>
      </div>
      <span className="text-sm font-medium text-white">
        {background.progress ?? 0}%
      </span>
      {background.estimatedTimeLeft && (
        <span className="text-xs text-white/80">
          {background.estimatedTimeLeft}
        </span>
      )}
    </div>
  );
}
