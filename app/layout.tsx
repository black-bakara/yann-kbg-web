import React from 'react';
import Header from '@/components/header/header';
import Logo from '@/components/logo/logo';
import { ModeToggle } from '@/components/mode-toggle';
import '@/styles/globals.css';
import { ThemeProvider } from '@/theme-provider';
import MyAvatar from '@/public/assets/images/profil.jpg';
import Avatar from '@/components/avatar/avatar';
import TitleH1 from '@/components/ui/title-h1';
import { Avatar as AvatarIcon, AvatarImage } from '@/components/ui/avatar';
import { Link } from '@/components/ui/link';
import { CustomButtonLink } from '@/components/custom-button/custom-button';
import ListItemIcon from '@/components/list-item-icon/list-item-icon';
import LinkIcon from '@/components/icon-link/link-icon';

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
        <body className="max-sm:bg-40 relative bg-opacity-50 bg-[url('../public/assets/logo-black.svg')] bg-30 bg-fixed bg-right-bottom bg-no-repeat">
          <div className="absolute inset-0 bg-background opacity-90" />
          <div className="relative z-10">
            <Header>
              <Logo
                color={{ primary: '', secondary: '' }}
                height="3rem"
                width="3rem"
              />
              <div className="flex items-center gap-3">
                <LinkIcon
                  href="mailto:cmwanya@gmail.com"
                  iconClassName="icon-[fluent--mail-edit-32-filled] text-2xl"
                />
                <LinkIcon
                  href="https://wa.me/+243906320283"
                  iconClassName="icon-[ri--whatsapp-fill] text-2xl"
                />
                <ModeToggle />
              </div>
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
                  <CustomButtonLink href="#">
                    <p> Follow</p>
                    <span className="icon-[pajamas--linkedin] text-xl" />
                  </CustomButtonLink>
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
                      <strong className="font-semibold text-main">
                        passion
                      </strong>
                    </p>
                    <p className="my-1">
                      Fullstack Developer. Trainer. Human. Love sharing
                      knowledge <br />
                      Actually developer trainer at{' '}
                      <Link href="https://www.kadea.academy/" target="_blank">
                        kadea academy
                      </Link>
                    </p>
                    <div className="my-4 flex flex-wrap items-center gap-6">
                      <ListItemIcon iconClassName="icon-[ic--round-home-work]">
                        Available
                      </ListItemIcon>
                      <ListItemIcon iconClassName="icon-[ph--link-bold]">
                        <Link href="https://www.kadea.academy/" target="_blank">
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
              </div>
              {children}
            </main>
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
