import React from 'react'
import { BiChevronRight } from 'react-icons/bi';
import Image from 'next/image';
import HeroButton from '../Button/HeroButton';


interface HeroItemProps{
    label1:string;
          label2: string;
          label3: string;
          src: string;
        
}

const  HeroItem: React.FC<HeroItemProps>=({
    label1,label2, label3,src
})=> {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
        
        <div className='flex flex-col justify-center pt-10 gap-5 text-center'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold font-second2'>
                {label1}
              {" "}
              <span className='font-pacifiko
               bg-clip-text text-transparent
               bg-gradient-to-l from-light to-primary/75
               '>
                {label2}
                </span>
              {" "}

                {label3}
            </h1>

            <div className='flex justify-center items-center'>

                
            </div>
            
            
        </div>

        <div className='min-h-[450px]
         flex justify-center relative'>

            <Image src={src} alt='' width={420} height={420}
            className='spin mx-auto'
            
            >


            </Image>

           




         </div>
        
        
    </div>
  )
}

export default HeroItem