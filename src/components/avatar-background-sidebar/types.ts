export type BackgroundItem = {
  id: string;
  type: "default" | "generated" | "generating";
  imageUrl?: string;
  progress?: number;
  estimatedTimeLeft?: string;
};

export type AvatarBackgroundSidebarProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  avatarName?: string;
};

export type BackgroundThumbnailProps = {
  background: BackgroundItem;
  avatarName: string;
  avatarImageUrl: string;
};
