import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { InstagramIcon } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-black text-white'>
      <header className='fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-50 backdrop-blur-md'>
        <nav className='container mx-auto px-4 py-4 flex justify-between items-center'>
          <Link
            href='/'
            className='text-2xl font-bold hover:text-gray-300 transition-colors'
          >
            <Image
              src='/images/firma.svg'
              alt='Leo'
              width={200}
              height={80}
            />
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
            <Link
              href='https://instagram.com/filmmaker'
              target='_blank'
              rel='noopener noreferrer'
            >
              <InstagramIcon className='w-6 h-6 hover:text-gray-300 transition-colors' />
            </Link>
            <Link
              href='https://vimeo.com/user92885025'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Vimeo'
            >
              <Image
                src='/images/vimeo-icon.svg'
                alt='youtube'
                width={28}
                height={28}
                className='hover:opacity-30 transition-opacity'
              />
            </Link>
          </div>
        </nav>
      </header>
      <main className='container mx-auto pt-36 pb-12 px-10'>
        <div className='space-y-6 lg:flex md:space-x-6 md:space-y-0 '>
          <p className='text-xl pr-20 pl-10 pt-10 pb-10'>
            Leonardo Cross is a 22-year-old Peruvian-American filmmaker. Leo was
            born in the US but moved to Peru as an infant. Leo demonstrated a
            passion for filmmaking at a young age and made his first film at 12.
            When Leo was 16, he left his family and friends behind and moved to
            the US to study film at The High School of Art and Design in New
            York City. He then did a 30-month program at Ghetto Film School,
            where he wrote and directed the 2021 Thesis film, and also was a
            directing fellow at Reel Works Media Makers. Leo won 1st place at
            the ABC/Disney Get Reel With Your Dreams Competition for his public
            service announcement addressing gun violence. In addition, he won
            1st prize in a national filmmaking competition, Lights Camera Save!,
            sponsored by the American Bankers Association for his public service
            announcement encouraging teenagers to save money. He was featured in
            the New York Post because of it and won a national Gold Medal at the
            Scholastic Art Awards. Leo is currently a senior at Emerson College.
          </p>
          <Image
            src='/images/about.jpeg'
            alt='about leo'
            width={280}
            height={390}
            className='w-full'
          />
        </div>
      </main>
    </div>
  );
}
