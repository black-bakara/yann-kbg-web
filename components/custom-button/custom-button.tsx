import React from 'react';
import { CustomButtonProps, CustomButtonLinkProps } from './type';
import { Button } from '../ui/button';
import Link from 'next/link';

export const CustomButtonLink = ({
  children,
  href,
  target,
}: CustomButtonLinkProps) => {
  return (
    <CustomButton>
      <Link href={href} target={target} className="flex items-center gap-2">
        {children}
      </Link>
    </CustomButton>
  );
};

export const CustomButton = ({ children }: CustomButtonProps) => {
  return (
    <Button className="hover:bg-main-50 rounded-3xl border-4 border-main bg-main text-sky-50 hover:border-foreground">
      {children}
    </Button>
  );
};
