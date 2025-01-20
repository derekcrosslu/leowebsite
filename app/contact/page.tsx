import Image from 'next/image';
import Link from 'next/link';
import { InstagramIcon } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className='min-h-screen bg-black text-white flex flex-col items-center px-4 py-16'>
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
              href='/about'
              className='hover:text-gray-300 transition-colors'
            >
              ABOUT
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
      <h1 className='text-4xl md:text-3xl font-light mb-24'>Contact</h1>

      {/* Professional Info Section */}
      <div className='space-y-4 mb-16 text-center'>
        <p className='text-sm tracking-wider'>DIRECTOR / WRITER</p>
        <a
          href='mailto:DANGEVIRTZ@GMAIL.COM'
          className='text-sm tracking-wider hover:opacity-80 transition-opacity'
        >
          LEO22CROSS@GMAIL.COM
        </a>
      </div>

      {/* Image Section */}
      <div className='w-full max-w-3xl mb-16'>
        <div className='relative aspect-[16/10]'>
          <Image
            src='/images/leo.jpeg'
            alt='Leonardo Cross '
            fill
            className='object-cover'
            priority
          />
        </div>
      </div>

      {/* Footer Text */}

    </div>
  );
}
