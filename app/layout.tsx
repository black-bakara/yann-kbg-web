import Header from '@/components/header/header';
import Logo from '@/components/logo/logo';
import { ModeToggle } from '@/components/mode-toggle';
import '@/styles/globals.css';
import { ThemeProvider } from '@/theme-provider';

import MyAvatar from '@/public/assets/images/profil.jpg';

import React from 'react';
import Avatar from '@/components/avatar/avatar';

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
            <div>
              <div className="min-sm:h-20 size-full h-48 bg-black bg-[url('/assets/images/fordT.jpg')] bg-cover bg-center bg-no-repeat max-md:h-20" />
              <div className="px-5">
                <Avatar
                  imageUrl={MyAvatar}
                  altText="Avatar Christian"
                  className="z-50 -mt-20 h-44 w-44 rounded-full border-4 border-white max-sm:-mt-10 max-sm:h-24 max-sm:w-24"
                />
              </div>
            </div>
            {children}
          </main>
        </body>
      </ThemeProvider>
    </html>
  );
}
