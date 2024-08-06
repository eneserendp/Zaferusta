import Link from 'next/link';
import React from 'react';

interface NavbarItemProps {
  name: string;
  link: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ name, link }) => {
  return (
    <li className='inline-block'>
      <Link href={link} className='text-xl py-4 px-4 text-light hover:text-slate-400 transition duration-200'>
        {name}
      </Link>
    </li>
  );
};

export default NavbarItem;
