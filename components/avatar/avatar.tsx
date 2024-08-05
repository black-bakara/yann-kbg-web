import React from 'react';
import type { AvatarProps } from './type';
import Image from 'next/image';

const Avatar = ({ imageUrl, className, altText }: AvatarProps) => {
  return (
    <div className={` ${className}`}>
      <Image
        src={imageUrl ?? ''}
        className="h-full w-full rounded-full object-cover"
        alt={altText}
      />
    </div>
  );
};

export default Avatar;
