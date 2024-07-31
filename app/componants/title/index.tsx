import React from 'react';
import type { TitleProps } from './title';
const Title = ({ children }: TitleProps) => {
  return <h1>{children}</h1>;
};

export default Title;
