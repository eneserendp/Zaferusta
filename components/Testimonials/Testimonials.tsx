import React from 'react'
import TestimonialItem from './TestimonialItem'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const TestimonialsData=[
    {
        id:1,
        img:"/images/person/user2.png",
        name:"Ayşe Hanım",
        description:" Zafer Bey ile çalışmak harikaydı! Evinizin her köşesini titizlikle boyadı. Sonuç mu? Tam hayal ettiğim gibi",
        aosDelay:"100"
    },
    {
        id:2,
        img:"/images/person/user2.png",
        name:"Mehmet Bey",
        description:" 37 yıllık deneyimiyle Zafer Bey, işini ne kadar iyi bildiğini gösterdi. Temiz çalışması ve detaylara gösterdiği özen için teşekkür ederim.",
        aosDelay:"200"
    },
    {
        id:3,
        img:"/images/person/user2.png",
        name:"Elif Hanım",
        description:" Zafer Usta, hem profesyonel hem de samimi bir yaklaşım sergiliyor. İşinin ehli olduğuna şüphe yok! Evimi yenileyerek bana büyük bir mutluluk sağladı.",
        aosDelay:"300"
    },
    {
        id:4,
        img:"/images/person/user2.png",
        name:"Fatma Hanım",
        description:" İç mekan boyama işimi Zafer Bey'e emanet ettim ve sonuç harika! Hijyenik çalışma anlayışı ve işine olan sevgisi kesinlikle takdire şayan.",
        aosDelay:"400"
    },
    {
        id:5,
        img:"/images/person/user2.png",
        name:"Ali Bey",
        description:" Zafer Usta'nın yaptığı tavan uygulamaları evimizin atmosferini tamamen değiştirdi. Mükemmel bir iş çıkardı!",
        aosDelay:"500"
    },
    {
        id:6,
        img:"/images/person/user2.png",
        name:"Zeynep Hanım",
        description:" Zafer Bey, her ayrıntıyı düşünerek çalışıyor. Hem güvenilir hem de sonuç odaklı biri. Eşsiz bir deneyim yaşadım!",
        aosDelay:"600"
    },
    {
        id:7,
        img:"/images/person/user2.png",
        name:"Serkan Bey",
        description:" Zafer Bey'in yaptığı dış mekan boyama işinden çok memnun kaldım. Profesyonel yaklaşımı ve titiz çalışmasıyla evim adeta yeni bir görünüme kavuştu. Kesinlikle tavsiye ederim!",
        aosDelay:"700"
    },
]

function Testimonials() {
  return (
    <div className='py-10'>
        <div className='container'>

            <div className='text-center mb-20'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-second2 font-bold'>
                   Müşterilerimizin Yorumları
                </h1>
                
                <div className='flex justify-center m-4'>
                    <div className='mb-6 h-1 w-full max-w-xl
                     bg-gradient-to-r opacity-50
                      from-primary to-secondary'></div>

                </div>


            </div>

          

<Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >


                {TestimonialsData.map((testimon)=>(

                <SwiperSlide  key={testimon.id}>
                   <TestimonialItem 
                   aosDelay={testimon.aosDelay}
                   description={testimon.description}
                   img={testimon.img}
                   name={testimon.name}
                  

                   >


                   </TestimonialItem>
                   </SwiperSlide>


                ))}

                

</Swiper>

            </div>



        </div>
  )
}

export default Testimonials