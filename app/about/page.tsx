import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-black text-white'>
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
              href='/'
              className='hover:text-gray-300 transition-colors'
            >
              FILMS
            </Link>
            <Link
              href='/contact'
              className='hover:text-gray-300 transition-colors'
            >
              CONTACT
            </Link>
          </div>
        </nav>
      </header>
      <main className='container mx-auto px-4 pt-24 pb-12'>
        <h1 className='text-4xl font-bold mb-8'>About Leonardo Cross</h1>
        <div className='space-y-6'>
          <p>
            Leonardo Cross is a visionary filmmaker with a passion for
            storytelling through the lens of a camera. With years of experience
            in the industry, Leonardo has developed a unique style that blends
            innovative cinematography with compelling narratives.
          </p>
          <p>
            Having worked on a diverse range of projects from short films to
            feature-length documentaries, Leonardo&apos;s work has been
            recognized at international film festivals and has garnered critical
            acclaim for its artistic vision and technical excellence.
          </p>
          <p>
            When not behind the camera, Leonardo can be found exploring new
            locations for future projects, mentoring aspiring filmmakers, or
            experimenting with cutting-edge film technologies to push the
            boundaries of visual storytelling.
          </p>
        </div>
      </main>
    </div>
  );
}
