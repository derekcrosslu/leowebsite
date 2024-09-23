'use client';

import Link from 'next/link';
import { InstagramIcon } from 'lucide-react';
import { MobileMenu } from './mobile-menu';

const VimeoEmbed = ({ videoId }: { videoId: string }) => (
  <Link
    href={`/video/${videoId}`}
    className='relative aspect-square overflow-hidden block'
  >
    <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
      <span className='text-white text-lg font-bold'>View Details</span>
    </div>
    <iframe
      src={`https://player.vimeo.com/video/${videoId}?background=1&autoplay=1&loop=1&byline=0&title=0`}
      className='absolute top-0 left-0 w-full h-full'
      frameBorder='0'
      allow='autoplay; fullscreen; picture-in-picture'
      allowFullScreen
    ></iframe>
  </Link>
);

export function FilmmakerWebsiteComponent() {
  const vimeoIds = [
    '1011859730',
    '1011862045',
    '1011862108',
    '1011862226',
    '1011862137',
    '1011862244',
    '1011862558',
    '1011862707',
    '1011862758',
    '1011862290',
    '1011861601',
    '1011862609',
    '1011863010',
    '1011863070',
    '1011862302',
    '1011862840',
  ];

  return (
    <div className='min-h-screen bg-black text-white'>
      <header className='fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-50 backdrop-blur-md'>
        <nav className='container mx-auto px-4 py-4 flex justify-between items-center'>
          <Link
            href='/'
            className='text-xl text-blue-300  hover:text-gray-300 transition-colors'
          >
            LEONARDO CROSS
          </Link>
          <div className='hidden sm:flex items-center space-x-6'>
            <Link
              href='/about'
              className='hover:text-gray-300 transition-colors'
            >
              ABOUT
            </Link>
            <Link
              href='/contact'
              className='hover:text-gray-300 transition-colors'
            >
              CONTACT
            </Link>
            <Link
              href='https://www.instagram.com/leocross__/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <InstagramIcon className='w-6 h-6 hover:text-gray-300 transition-colors' />
            </Link>
          </div>
          <MobileMenu />
        </nav>
      </header>
      <main className='container mx-auto px-4 pt-24 pb-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          {vimeoIds.map((id, index) => (
            <VimeoEmbed
              key={index}
              videoId={id}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
