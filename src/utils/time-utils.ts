export function formatEstimatedTimeLeft(remainingMs: number): string {
  const remainingSeconds = Math.ceil(remainingMs / 1000);
  if (remainingSeconds <= 0) return 'Almost done...';
  if (remainingSeconds <= 3) return 'Almost done...';
  if (remainingSeconds >= 60) {
    const minutes = Math.ceil(remainingSeconds / 60);
    return `${minutes} minute${minutes > 1 ? 's' : ''} left`;
  }
  return `${remainingSeconds} seconds left`;
}
