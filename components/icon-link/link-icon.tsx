import React from 'react';
import { LinkIconProps } from './index';
import Link from 'next/link';

const LinkIcon = ({ href, iconClassName }: LinkIconProps) => {
  return (
    <Link
      className={`border-b-2 border-background hover:border-main`}
      href={href}
      target="_blank"
    >
      <span className={iconClassName} />
    </Link>
  );
};

export default LinkIcon;
