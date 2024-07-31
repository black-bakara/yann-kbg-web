import React from 'react';
import { HeaderProps } from './header.type';

const Header = ({ children }: HeaderProps) => {
  return <header className="flex h-4">{children}</header>;
};

export default Header;
