import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Services", link: "/#" },
  { id: 3, name: "About", link: "/#" },
  { id: 4, name: "Contact", link: "/#" },
];

function Footer() {
  return (
    <div className="bg-[url('/images/footer2.png')] bg-center bg-no-repeat bg-cover h-full w-full">
      <div className='bg-black/60 min-h-[400px]'>
        <div className='container grid md:grid-cols-3 pb-20 pt-5'>
          <div className='col-span-3 text-center py-8'>
            <a className='font-semibold text-2xl md:text-3xl font-pacifiko text-light'>Zafer Usta</a>
            <p className='pt-4 text-light'>
              Zafer Demirpolat Boya Badana, 37 yıllık deneyimiyle kaliteli ve profesyonel hizmet sunmaktadır. İç ve dış mekan boyama, dekorasyon uygulamaları ve tadilat hizmetlerimiz için bize ulaşın. Hayalinizdeki mekanları birlikte gerçekleştirelim!
            </p>
          </div>

          <div className='col-span-2 grid md:grid-cols-2 md:pl-10 sm:grid-cols-3'>
            <div className='py-0 px-4 col-span-2 sm:col-auto flex items-center'>
              <h1 className='text-xl font-semibold text-white mr-2'>Address:</h1>
              <div className='space-y-4 text-light'>
                <p>Türkiye, Ankara</p>
              </div>
            </div>
            <div className='py-0 px-4 col-span-2 sm:col-auto flex items-center'>
              <h1 className='text-xl font-semibold text-white mr-2'>Telefon No:</h1>
              <div className='space-y-4 text-light'>
                <p>+90 542 507 13 49</p>
              </div>
            </div>
          </div>

          <div className='py-0 px-4 col-span-2 sm:col-auto flex items-center'>
            <h1 className='text-xl font-semibold text-white mr-2'>Mail:</h1>
            <a href="mailto:eneserendp@gmail.com" className='space-y-4 text-light'>
              <p className='cursor-pointer'>eneserendp@gmail.com</p>
            </a>
          </div>

          <div className='col-span-3 text-center py-8'>
            <h1 className='text-sm font-semibold text-white'>Web Developer : Enes Eren Demirpolat</h1>
            <div className='flex justify-center gap-3 mt-4'>
              <a href='https://www.linkedin.com/in/enes-eren-demirpolat-3b1450220/' aria-label='LinkedIn'>
                <FaLinkedin className='text-3xl duration-300 text-light hover:scale-110' />
              </a>
             
              <a href='https://github.com/eneserendp' aria-label='GitHub'>
                <FaGithub className='text-3xl duration-300 text-light hover:scale-110' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
