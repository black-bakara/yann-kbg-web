'use client';
import React from 'react';
import type { MenuItemProps } from './type';
import { usePathname } from 'next/navigation';

import Link from 'next/link';

const MenuItem: React.FC<MenuItemProps> = ({ title, href }) => {
  const pathname = usePathname();

  const isActive = pathname === href;
  const activeClassName = isActive
    ? 'border-main text-foreground font-bold'
    : 'border-transparent';

  return (
    <Link
      href={href}
      className={`flex-shrink-0 flex-grow basis-0 cursor-pointer py-1 text-muted-foreground`}
    >
      <span className={`border-b-4 pb-2 ${activeClassName}`}> {title}</span>
    </Link>
  );
};

export default MenuItem;
