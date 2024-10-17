import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
  display: 'swap',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Leonardo Cross - Filmmaker',
  description:
    'Portfolio of Leonardo Cross, featuring a collection of cinematic works and visual storytelling.',
  keywords: [
    'filmmaker',
    'director',
    'cinematography',
    'visual storytelling',
    'Leonardo Cross',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.leonardocross.com',
    siteName: 'Leonardo Cross Filmmaker',
    title: 'Leonardo Cross - Filmmaker Portfolio',
    description:
      'Explore the cinematic works and visual storytelling of Leonardo Cross.',
    images: [
      {
        url: 'https://www.leonardocross.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Leonardo Cross Filmmaker',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@leonardocross',
    creator: '@leonardocross',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='preconnect'
          href='https://player.vimeo.com'
        />
        <link
          rel='dns-prefetch'
          href='https://player.vimeo.com'
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
