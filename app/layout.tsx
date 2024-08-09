import Header from '@/components/header/header';
import Logo from '@/components/logo/logo';
import { ModeToggle } from '@/components/mode-toggle';
import '@/styles/globals.css';
import { ThemeProvider } from '@/theme-provider';

import MyAvatar from '@/public/assets/images/profil.jpg';

import React from 'react';
import Avatar from '@/components/avatar/avatar';
import TitleH1 from '@/components/ui/title-h1';
import { Avatar as AvatarIcon, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Link } from '@/components/ui/link';

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
              <div className="flex justify-between p-5 max-sm:px-0">
                <Avatar
                  imageUrl={MyAvatar}
                  altText="Avatar Christian"
                  className="z-50 -mt-20 h-44 w-44 rounded-full border-4 border-foreground max-sm:-mt-9 max-sm:h-36 max-sm:w-36"
                />
                <Button className="rounded-3xl bg-main text-sky-50 hover:bg-cyan-600">
                  {' '}
                  Follow
                </Button>
              </div>
              <div className="mt-3">
                <TitleH1>
                  <div className="flex">
                    Chris Mwanya{' '}
                    <AvatarIcon className="ml-5 bg-main">
                      <AvatarImage src="/assets/images/ford-model-t.png" />
                    </AvatarIcon>
                  </div>
                </TitleH1>
                <div className="my-2">
                  <p className="mb-3 text-sm">
                    Not just sharing knowledge and solution but share{' '}
                    <strong className="font-semibold text-main">passion</strong>
                  </p>

                  <p className="my-1">
                    Fullstack Developer. Trainer. Human. Love sharing knowledge{' '}
                    <br />
                    Actually developer trainer at{' '}
                    <Link href="https://www.kadea.academy/" target="_blank">
                      kadea academy
                    </Link>
                  </p>

                  <ul className="my-4 flex items-center gap-6">
                    <li>Available</li>
                    <li>
                      {' '}
                      <Link href="https://www.kadea.academy/" target="_blank">
                        /links
                      </Link>
                    </li>
                    <li>Dec 13th</li>
                    <li>Since 2019</li>
                  </ul>
                </div>
              </div>
            </div>
            {children}
          </main>
        </body>
      </ThemeProvider>
    </html>
  );
}
