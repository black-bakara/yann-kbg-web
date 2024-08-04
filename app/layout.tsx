import Header from '@/components/header/header';
import Logo from '@/components/logo/logo';
import { ModeToggle } from '@/components/mode-toggle';
import '@/styles/globals.css';
import { ThemeProvider } from '@/theme-provider';

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
          <main className="container"> {children}</main>
        </body>
      </ThemeProvider>
    </html>
  );
}
