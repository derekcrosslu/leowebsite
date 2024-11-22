'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';

const MobileMenu = dynamic(
  () => import('./mobile-menu').then((mod) => mod.MobileMenu),
  {
    ssr: false,
  }
);

const VimeoEmbed = ({ videoId }: { videoId: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });

  return (
    <div
      ref={ref}
      className='relative aspect-square overflow-hidden  '
    >
      <Link
        href={`/video/${videoId}`}
        className='block w-full h-full'
      >
        <div className='inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center  h-full  -mb-40 -pb-20 absolute overflow-clip h-80'>
          <span className='text-white text-lg font-bold'>View Details</span>
        </div>
        {inView && (
          <iframe
            src={`https://player.vimeo.com/video/${videoId}?background=1&autoplay=1&loop=1&byline=0&title=0&portrait=0`}
            // className='absolute top-0 left-0 w-full h-full'
            className='w-full h-80   h-full'
            // frameBorder='80'
            allow='autoplay; fullscreen; picture-in-picture'
            allowFullScreen
            title={`Vimeo video ${videoId}`}
            loading='lazy'
          ></iframe>
        )}
      </Link>
    </div>
  );
};

export function FilmmakerWebsiteComponent() {
  const [mounted, setMounted] = useState(false);
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

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className='min-h-screen bg-black text-white'>
      <header className='fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-50 backdrop-blur-md'>
        <nav className='container mx-auto px-4 py-4 flex justify-between items-center'>
          <Link
            href='/'
            className='text-xl text-white hover:text-pink-500 transition-colors'
            aria-label='Leonardo Cross Home'
          >
            LEONARDO CROSS
          </Link>
          <div className='hidden sm:flex items-center space-x-6'>
            <Link
              href='/about'
              className='hover:text-pink-500 transition-colors'
            >
              ABOUT
            </Link>
            <Link
              href='/contact'
              className='hover:text-pink-500 transition-colors'
            >
              CONTACT
            </Link>
            <Link
              href='https://www.instagram.com/leonardo.cross/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
            >
              <Image
                src='/images/instagram-icon.svg'
                alt='Instagram'
                width={24}
                height={24}
                className='hover:opacity-30 transition-opacity'
              />
            </Link>
            <Link
              href='https://www.youtube.com/@leocross8578'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
            >
              <Image
                src='/images/youtube-icon.svg'
                alt='youtube'
                width={28}
                height={28}
                className='hover:opacity-30 transition-opacity'
              />
            </Link>
          </div>
          <MobileMenu />
        </nav>
      </header>
      <main className='container mx-auto px-4 pt-24 pb-12 '>
        <h1 className='sr-only'>Leonardo Cross - Filmmaker Portfolio</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 '>
          {vimeoIds.map((id, index) => (
            <VimeoEmbed
              key={index}
              videoId={id}
            />
          ))}
        </div>
      </main>
      <footer className='bg-gray-900 text-white py-6'>
        <div className='container mx-auto px-4 text-center'>
          <p>
            &copy; {new Date().getFullYear()} Leonardo Cross. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
