import React from 'react';
import type { MenuItemProps } from './type';
import Link from 'next/link';

const MenuItem: React.FC<MenuItemProps> = ({ title, href, className }) => {
  return (
    <li
      className={`flex-shrink-0 flex-grow basis-0 cursor-pointer py-2 text-center text-muted-foreground hover:bg-primary-foreground ${className}`}
    >
      <Link
        href={href}
        className="border-b-4 border-transparent pb-2 active:border-main active:font-semibold active:text-foreground"
      >
        {title}
      </Link>
    </li>
  );
};

export default MenuItem;
