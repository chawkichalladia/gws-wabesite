import './globals.css';

import { clsx } from 'clsx';
import type { Metadata } from 'next';

import { open_Sans } from '@/utils/fonts';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          open_Sans.className,
          'container max-w-[90%] overflow-x-hidden mx-auto bg-black text-white text-justify md:text-center text-base md:text-lg'
        )}
      >
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.galactechwebsolutions.com'),
  title: 'Galactech Web Solutions',
  description:
    'The official Website for Galactech Web Solution web development agency, where your web applications gets made with galactic level of care and attention to details',
  applicationName: 'Galactech Web Solutions official website',
  authors: [
    { name: 'Galactech Web Solutions', url: 'https://www.galactechwebsolutions.com' },
    { name: 'Chawki Ben Challadia', url: 'https://www.chawkichalladia.com' },
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    noarchive: true,
    nosnippet: false,
    notranslate: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Galactech Web Solutions',
    url: 'https://www.galactechwebsolutions.com',
    description:
      'The official Website for Galactech Web Solution web development agency, where your web applications gets made with galactic level of care and attention to details',
    images: [
      {
        url: '/og_image_dark.png',
        width: 500,
        height: 500,
        alt: 'GWS logo alt',
      },
      {
        url: '/og_image_light.png',
        width: 500,
        height: 500,
        alt: 'GWS white logo alt',
      },
    ],
  },
};
