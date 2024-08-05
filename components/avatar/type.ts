import { StaticImageData } from 'next/image';

export type AvatarProps = {
  imageUrl: string | StaticImageData;
  altText: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
};
