import defaultCardImage from '@/assets/default card (ava + bg).png';
import bgImage1 from '@/assets/bg12321321.png';
import bgImage2 from '@/assets/bg123213454.png';
import bgImage3 from '@/assets/bg12797897.png';
import bgImage4 from '@/assets/bg234234532.png';
import { BackgroundItem } from './types';

export const ASSET_BACKGROUNDS = [
  bgImage1,
  bgImage2,
  bgImage3,
  bgImage4,
] as const;

export const DEFAULT_CARD_IMAGE = defaultCardImage;

export const GENERATION_TIME_MS = 10000;

export const GENERATION_UPDATE_INTERVAL_MS = 300;

export const EMPTY_BACKGROUND_IDEA_ERROR = '  Please write an idea..';

export const THUMBNAIL_WIDTH = 112;
export const THUMBNAIL_HEIGHT = 198;
export const THUMBNAIL_RADIUS = 16;

export const DEFAULT_BACKGROUND: BackgroundItem = {
  id: 'default',
  type: 'default',
  imageUrl: DEFAULT_CARD_IMAGE,
}