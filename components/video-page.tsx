import React from 'react';
import Link from 'next/link';
import { InstagramIcon } from 'lucide-react';

interface VideoPageProps {
  videoId: string;
  title: string;
  description: string;
  credits: string;
  frames: string[];
  backgroundColor: string;
}

export function VideoPage({
  videoId,
  title,
  description,
  credits,
  frames,
  backgroundColor,
}: VideoPageProps) {
  return (
    <div
      className={`min-h-screen text-white`}
      style={{ backgroundColor }}
    >
      <header className='fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-50 backdrop-blur-md'>
        <nav className='container mx-auto px-4 py-4 flex justify-between items-center'>
          <Link
            href='/'
            className='text-2xl font-bold hover:text-gray-300 transition-colors'
          >
            LEONARDO CROSS
          </Link>
          <div className='flex items-center space-x-6'>
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
              href='https://instagram.com/filmmaker'
              target='_blank'
              rel='noopener noreferrer'
            >
              <InstagramIcon className='w-6 h-6 hover:text-gray-300 transition-colors' />
            </Link>
          </div>
        </nav>
      </header>
      <main className='container mx-auto px-4 pt-24 pb-12'>
        <h1 className='text-4xl font-bold mb-8'>{title}</h1>
        <div className='aspect-video mb-8'>
          <iframe
            src={`https://player.vimeo.com/video/${videoId}`}
            className='w-full h-full'
            frameBorder='0'
            allow='autoplay; fullscreen; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
          <div>
            <h2 className='text-2xl font-semibold mb-4'>Description</h2>
            <p>{description}</p>
          </div>
          <div>
            <h2 className='text-2xl font-semibold mb-4'>Credits</h2>
            <p>{credits}</p>
          </div>
        </div>
        <h2 className='text-2xl font-semibold mb-4'>Frames</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {frames.map((frame, index) => (
            <img
              key={index}
              src={frame}
              alt={`Frame ${index + 1}`}
              className='w-full h-auto'
            />
          ))}
        </div>
      </main>
    </div>
  );
}
