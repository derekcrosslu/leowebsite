import React, { useState } from 'react';
import Link from 'next/link';
import { InstagramIcon, Menu, X } from 'lucide-react';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='sm:hidden'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='text-white focus:outline-none'
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className='absolute top-full left-0 right-0 bg-black bg-opacity-90 py-2 text-right'>
          <Link
            href='/about'
            className='block px-4 py-2 text-white hover:bg-gray-800'
            onClick={() => setIsOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            href='/contact'
            className='block px-4 py-2 text-white hover:bg-gray-800'
            onClick={() => setIsOpen(false)}
          >
            CONTACT
          </Link>
          <Link
            href='https://www.instagram.com/'
            className='block px-4 py-2 text-white hover:bg-gray-800'
            target='_blank'
            rel='noopener noreferrer'
            onClick={() => setIsOpen(false)}
          >
            <InstagramIcon
              className='inline-block mr-2'
              size={20}
            />
          </Link>
        </div>
      )}
    </div>
  );
}
