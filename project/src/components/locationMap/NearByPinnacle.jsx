import React, { useCallback, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import axios from 'axios';

function NearByPinnacle() {

  let imgPath = "http://localhost:3000/assets/nearby/"

  const [imgArray , setImgArray] = useState([]);

  const handleShow = useCallback(async()=>{

    try {

      const response = await axios.get("http://localhost:3000/web/nearby_read?status=true");

      if(response?.data?.status == true){
        setImgArray(response?.data?.data)
      }

    } catch(error) {
      console.log("handleShow:->" , handleShow)
    }

  }, [])

  useEffect(()=>{
    handleShow()
  } , [handleShow])

  return (
    <>
      <div className=' my-4'>
        <div className=''>
            <p className=' text-[26px] text-[#171717] text-center'>
                NEARBY , <span className='font-superaBold'> THE PINNACLE </span>
            </p>
        </div>

        <div className='my-4 flex justify-around mx-auto relative px-4'>
        <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={false}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectCoverflow, Pagination]}
                breakpoints={{
                  1024:{
                    slidesPerView:5,
                  },
                  768:{
                    slidesPerView:4,
                  },
                  640:{
                    slidesPerView:3,
                  },
                  425:{
                    slidesPerView:2,
                  }
                }}
                className="mySwiper"
              >

                {imgArray?.map((items, index)=>{
                  return(
                    <SwiperSlide key={index}>
                      <div style={{backgroundImage:`url(${imgPath}${items?.image})`}} className='bg-cover h-[250px]'>
                        <div className='bg-black/30 h-full w-full flex justify-center items-center text-white font-superaBold text-[30px] text-center'>
                        {items?.km}
                        <br/>
                          KM
                        </div>
                      </div>
                      <p className='text-center font-superaBold text-[18px] text-[#6D6868]'>
                       {items?.heading}
                      </p>
                    </SwiperSlide>
                  )
                })}
              </Swiper>

        </div>
      </div>
    </>
  )
}

export default NearByPinnacle
