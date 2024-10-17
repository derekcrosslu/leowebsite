import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { VimeoEmbedProps } from './types';

export const VimeoEmbed: React.FC<VimeoEmbedProps> = ({ videoId }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: '100px' }
    );

    const element = document.getElementById(`vimeo-${videoId}`);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [videoId]);

  return (
    <Link
      href={`/video/${videoId}`}
      className='relative aspect-square overflow-hidden block'
    >
      <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
        <span className='text-white text-lg font-bold'>View Details</span>
      </div>
      <div
        id={`vimeo-${videoId}`}
        className='w-full h-full bg-gray-800 flex items-center justify-center'
      >
        {isIntersecting ? (
          <>
            <iframe
              src={`https://player.vimeo.com/video/${videoId}?background=1&autoplay=1&loop=1&byline=0&title=0`}
              className='absolute top-0 left-0 w-full h-full'
              frameBorder='0'
              allow='autoplay; fullscreen; picture-in-picture'
              allowFullScreen
              loading='lazy'
              onLoad={() => setIsLoaded(true)}
              style={{ opacity: isLoaded ? 1 : 0 }}
            ></iframe>
            {!isLoaded && (
              <div className='animate-pulse bg-gray-700 w-full h-full absolute top-0 left-0'></div>
            )}
          </>
        ) : (
          <div className='animate-pulse bg-gray-700 w-full h-full'></div>
        )}
      </div>
    </Link>
  );
};

export default VimeoEmbed;
