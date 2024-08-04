import Header from '@/components/header/header';
import Logo from '@/components/logo/logo';
import { ModeToggle } from '@/components/mode-toggle';
import '@/styles/globals.css';
import { ThemeProvider } from '@/theme-provider';
import Image from 'next/image';
import FordTImage from '@/public/assets/images/fordT.jpg';

import React from 'react';

export default function RootLayout({
  children,
}: React.PropsWithChildren<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body>
          <Header>
            <Logo
              color={{ primary: '', secondary: '' }}
              height="3rem"
              width="3rem"
            />
            <ModeToggle />
          </Header>
          <main className="container lg:px-96">
            <div className="min-sm:h-20 h-48 bg-black opacity-50 max-md:h-20">
              <Image
                src={FordTImage}
                alt="Banner image"
                className="h-full w-full object-cover"
              />
            </div>
            {children}
          </main>
        </body>
      </ThemeProvider>
    </html>
  );
}
