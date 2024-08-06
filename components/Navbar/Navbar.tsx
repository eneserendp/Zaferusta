import Image from 'next/image';
import React from 'react';
import NavbarItem from './NavbarItem';
import OrderButton from '../Button/OrderButton';
import { FaBrush, FaCoffee } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <div className='bg-gradient-to-r from-secondary to-secondary/75 shadow-lg text-light'>
      <div className='container py-3'>
        <div className='flex items-center justify-between'>

          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            className='font-poppins font-bold text-xl lg:text-3xl md:text-2xl flex items-center justify-center gap-2 mx-auto'
          >
            <Image src="/images/firca.png" alt='' width={50} height={50} />
            Zafer Usta
          </div>

          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="400"
            className='hidden lg:flex items-center gap-3 justify-between'
          >
            {/* Add NavbarItems or other components here */}
          </div>

          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="500"
          >
            {/* Add OrderButton or other components here */}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
