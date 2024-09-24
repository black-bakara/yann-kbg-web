import React from 'react';
import Header from '@/components/header/header';
import Logo from '@/components/logo/logo';
import NextLink from 'next/link';
import '@/styles/globals.css';
import { ThemeProvider } from '@/theme-provider';

// import Avatar from '@/components/avatar/avatar';
// import TitleH1 from '@/components/ui/title-h1';
// import { Avatar as AvatarIcon, AvatarImage } from '@/components/ui/avatar';
// import { Link } from '@/components/ui/link';
// import { CustomButtonLink } from '@/components/custom-button/custom-button';
// import ListItemIcon from '@/components/list-item-icon/list-item-icon';

import { Navbar } from '@/components/navbar/navbar';
import { menuItems } from '@/config/menu';
import Footer from '@/components/footer/footer';

import { Toaster } from '@/components/ui/toaster';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link } from '@/components/ui/link';
import ListItemIcon from '@/components/list-item-icon/list-item-icon';

export default function RootLayout({
  children,
}: React.PropsWithChildren<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="relative">
        <div className="absolute inset-0 bg-background opacity-95" />
        <div className="relative z-0 p-0">
          <Header>
            <NextLink href="/">
              <Logo />
            </NextLink>
            <div className="flex items-center gap-3">
              <ListItemIcon iconClassName="icon-[entypo--new-message]">
                <Link href="/contact" target="_blank">
                  Ecrivez-moi
                </Link>
              </ListItemIcon>
              <Avatar>
                <AvatarImage
                  src="/assets/images/principal.jpg"
                  className="object-cover"
                  sizes="lg"
                />
                <AvatarFallback>KBG</AvatarFallback>
              </Avatar>
            </div>
          </Header>
          <div className="lg:container max-sm:px-2 lg:px-72">
            {/* <div>
              <div className="min-sm:h-20 size-full h-48 bg-[url('/assets/images/fordT.webp')] bg-cover bg-center bg-no-repeat max-md:h-20" />
              <div className="flex justify-between p-5 max-sm:px-0">
                <Avatar
                  // altText="Avatar Christian"
                  className="-mt-20 h-44 w-44 rounded-full border-4 border-foreground max-sm:-mt-9 max-sm:h-36 max-sm:w-36"
                />
                <CustomButtonLink
                  href="https://www.linkedin.com/in/christianmwanya/"
                  target="_blank"
                >
                  <p> Follow</p>
                  <span className="icon-[pajamas--linkedin] text-xl" />
                </CustomButtonLink>
              </div>

              <div className="mt-3">
                <TitleH1>
                  <div className="flex">
                    Chris Mwanya
                    <LinkIcon
                      href="https://github.com/ChrisMwanya"
                      iconClassName="icon-[bi--github] text-2xl"
                      className="mx-5"
                    />
                    <AvatarIcon className="bg-main">
                      <AvatarImage src="/assets/images/ford-model-t.png" />
                    </AvatarIcon>
                  </div>
                </TitleH1>
                <div className="my-2">
                  <p className="mb-3 text-sm">
                    Not just sharing knowledge and solution but share{' '}
                    <strong className="font-semibold text-main">passion</strong>
                    ✨
                  </p>
                  <p className="my-1">
                    Fullstack Developer. Trainer. Human. Love sharing knowledge{' '}
                    <br />
                    Currently developer trainer at{' '}
                    <Link href="https://www.kadea.academy/" target="_blank">
                      kadea academy
                    </Link>
                  </p>{' '}
                  <div className="my-4 flex flex-wrap items-center gap-6">
                    <ListItemIcon iconClassName="icon-[ic--round-home-work]">
                      Available
                    </ListItemIcon>
                    <ListItemIcon iconClassName="icon-[ph--link-bold]">
                      <Link
                        href="https://linktr.ee/chrismwanya"
                        target="_blank"
                      >
                        /links
                      </Link>
                    </ListItemIcon>
                    <ListItemIcon iconClassName="icon-[jam--birthday-cake]">
                      Dec 13th
                    </ListItemIcon>
                    <ListItemIcon iconClassName="icon-[majesticons--calendar]">
                      Since 2021
                    </ListItemIcon>
                    <ListItemIcon iconClassName="icon-[ic--baseline-place]">
                      Kinshasa, DRC
                    </ListItemIcon>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="my-1">
              <Navbar menuItems={menuItems} />
            </div>
            <div className="mt-10">{children}</div>

            <Footer />
            <Toaster />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
