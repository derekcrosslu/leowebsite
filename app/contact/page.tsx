import React from 'react';
import Link from 'next/link';

export default function ContactPage() {
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
              href='/about'
              className='hover:text-gray-300 transition-colors'
            >
              ABOUT
            </Link>
          </div>
        </nav>
      </header>
      <main className='container mx-auto px-4 pt-24 pb-12'>
        <h1 className='text-4xl font-bold mb-8'>Contact Leonardo Cross</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div>
            <h2 className='text-2xl font-semibold mb-4'>Get in Touch</h2>
            <p className='mb-4'>
              For inquiries about projects, collaborations, or any other
              questions, please don&apos;t hesitate to reach out.
            </p>
            <ul className='space-y-2'>
              <li>Email: leonardo@example.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Instagram: @leonardocross</li>
            </ul>
          </div>
          <form className='space-y-4'>
            <div>
              <label
                htmlFor='name'
                className='block mb-1'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                className='w-full p-2 bg-gray-800 rounded'
                required
              />
            </div>
            <div>
              <label
                htmlFor='email'
                className='block mb-1'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='w-full p-2 bg-gray-800 rounded'
                required
              />
            </div>
            <div>
              <label
                htmlFor='message'
                className='block mb-1'
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                rows={4}
                className='w-full p-2 bg-gray-800 rounded'
                required
              ></textarea>
            </div>
            <button
              type='submit'
              className='bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition-colors'
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
