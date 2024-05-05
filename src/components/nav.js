'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const navLinks = [
  { name: 'About', href: '/About' },
  { name: 'Mission', href: '/Mission' },
  { name: 'Auxilliary', href: '/Auxilliary' },
  { name: 'Events', href: '/Events' },
  { name: 'Contact', href: '/Contact' },
];
const mobileLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/About' },
  { name: 'Mission', href: '/Mission' },
  { name: 'Auxilliary', href: '/Auxilliary' },
  { name: 'Events', href: '/Events' },
  { name: 'Contact', href: '/Contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  const pathname = usePathname();

  return (
    <nav className='w-full h-24 bg-white shadow-xl '>
      <div className='flex items-center justify-between w-full h-full px-4 2xl:px-16'>
        <Link href='/'>
          <Image
            src='/mt lovely logo.png'
            width={250}
            height={150}
            className='cursor-pointer '
            alt='Logo'
          />
        </Link>
        <div className='hidden sm:flex'>
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                href={link.href}
                key={link.name}
                className={
                  isActive
                    ? ' font-semibold mr-4'
                    : 'text-blue-500 mr-4 hover:underline decoration-black'
                }
              >
                {link.name}
              </Link>
            );
          })}
          {/* <ul className='hidden sm:flex'>
            <Link href='/about'>
              <li className='ml-10 text-xl uppercase hover:border-b'>
                Why Us
              </li>
            </Link>
            <Link href='/contact'>
              <li className='ml-10 text-xl uppercase hover:border-b'>
                Contact Us
              </li>
            </Link>
            <Link href='/services'>
              <li className='ml-10 text-xl uppercase hover:border-b'>
                Blog
              </li>
            </Link>
          </ul> */}
        </div>
        <div
          onClick={handleNav}
          className='pl-24 cursor-pointer sm:hidden'
        >
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? 'fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
        }
      >
        <div className='flex items-center justify-end w-full'>
          <div onClick={handleNav} className='cursor-pointer '>
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className='flex flex-col '>
          {mobileLinks.map((link) => {
            return (
              <Link
                href={link.href}
                key={link.name}
                onClick={() => setMenuOpen(false)}
                className='py-4 cursor-pointer'
              >
                {link.name}
              </Link>
            );
          })}

          {/* <ul>
            <Link href='/'>
              <li
                onClick={() => setMenuOpen(false)}
                className='py-4 cursor-pointer '
              >
                Home
              </li>
            </Link>
            <Link href='/about'>
              <li
                onClick={() => setMenuOpen(false)}
                className='py-4 cursor-pointer '
              >
                Why Us
              </li>
            </Link>
            <Link href='/contact'>
              <li
                onClick={() => setMenuOpen(false)}
                className='py-4 cursor-pointer '
              >
                Contact Us
              </li>
            </Link>
            <Link href='/services'>
              <li
                onClick={() => setMenuOpen(false)}
                className='py-4 cursor-pointer '
              >
                Blog
              </li>
            </Link>
          </ul> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
