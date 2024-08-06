import React from 'react'
import ServiceItem from './ServiceItem'


const ServiceData=[
    {
        id:1,
        img:"/images/12.png",
        name:"İç Dış Mekan Boyama",
        description:" İç ve dış mekan boyama, evinize tazelik ve estetik katmanın en etkili yoludur. Profesyonel hizmetlerimizle mekanlarınızı yenileyin ve hayalinizdeki görünüme kavuşun.",
        aosDelay:"100"
    },
    {
        id:2,
        img:"/images/15.png",
        name:"Dekarasyon Uygulamaları",
        description:" Dekorasyon uygulamaları, yaşam alanlarınızı güzelleştirmenin ve kişiselleştirmenin anahtarıdır. Profesyonel dokunuşlarla evinizi daha işlevsel ve estetik hale getirin, hayalinizdeki atmosferi oluşturun.",
        aosDelay:"300"
    },
    {
        id:3,
        img:"/images/20.png",
        name:"Tadilat ve Tamirat İşleri",
        description:" Tadilat ve tamirat işleri, evinizin değerini artırmanın ve konforunu sağlamanın temel adımlarıdır. Uzman ekibimizle mekanlarınızı güvenli, estetik ve fonksiyonel hale getirerek yaşam alanınızı yenileyin.",
        aosDelay:"500"
    },
    {
        id:4,
        img:"/images/18.png",
        name:"Dekoratif Tavan Uygulamaları",
        description:"Dekoratif tavan uygulamaları, mekanlarınıza derinlik ve zarafet katan estetik unsurlardır. Farklı tasarım seçenekleriyle tavanlarınızı vurgulayarak, her alanı daha şık ve özgün hale getirin.",
        aosDelay:"700"
    },
]

function Services() {
  return (
    <div className='py-10'>
        <div className='container'>

            <div className='text-center mb-20'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-second2 font-bold'>
                    Neler mi Yapıyoruz?
                </h1>
                
                <div className='flex justify-center m-4'>
                    <div className='mb-6 h-1 w-full max-w-xl
                     bg-gradient-to-r opacity-50
                      from-primary to-secondary'></div>

                </div>


            </div>

            <div className='grid grid-cols-1 md:grid-cols-2
            lg:grid-cols-4 gap-14 place-items-center'>

                {ServiceData.map((service)=>(

                   <ServiceItem
                   aosDelay={service.aosDelay}
                   description={service.description}
                   img={service.img}
                   name={service.name}
                   key={service.id}

                   >


                   </ServiceItem>


                ))}

                

            </div>



        </div>
    </div>
  )
}

export default Services