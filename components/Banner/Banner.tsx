import Image from 'next/image'
import React from 'react'


function Banner() {
  return (
    <div className="bg-[url('/images/h1.jpg')] bg-center
    bg-no-repeat bg-cover h-full w-full">
        <div className='min-h-[550px] flex justify-center items-center
        py-12'> 

            <div className='container'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                    <div data-aos="zoom-in">
                    <Image src="/images/2.png" alt='' width={420} height={420}
            className='spinOne mx-auto'
            
            >


            </Image>



                    </div>
                    <div className='flex flex-col justify-center gap-6'>
                        <h1  className='text-3xl md:text-4xl font-bold
                        font-second2' data-aos="fade-up">
                            Hakkımızda
                        </h1>

                        <p  data-aos="fade-up" 
                        className='text-xl text-gray-600 tracking-wide'>
                           Zafer Demirpolat, 51 yaşında ve 37 yıllık deneyimiyle boya badana sektöründe uzmanlaşmış bir ustadır. Ankara'da yaşayan Zafer Bey, işine olan tutkusuyla kaliteli hizmet sunarak müşterilerinin mekanlarını güzelleştirmektedir. Yılların getirdiği bilgi ve tecrübe ile her projede en iyi sonuçları hedeflerken, temiz ve hijyenik çalışma prensiplerine de büyük önem vermektedir. Zafer Bey, her aşamada dikkatli ve özenli çalışarak, müşteri memnuniyetini ön planda tutmaktadır. Mekanlarınızı yenilemek ve yaşam alanlarınızı güzelleştirmek için Zafer Demirpolat ile iletişime geçin ve kaliteli hizmetin tadını çıkarın.
                        </p>

                        <div className='grid grid-cols-2 gap-6'>

                        </div>

                    </div>


                </div>

            </div>
        </div>
                
        
    </div>
  )
}

export default Banner