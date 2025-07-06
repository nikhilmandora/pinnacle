import React, { useState } from 'react'

// Images and Icons
import buildingImg from "../../assets/images/3e77c484b4.png"
import envelop from "../../assets/images/PinnacleEnvelope.png"

const LocationMapBody = () => {

    const [mapSwitch , setMapSwitch] = useState(false);

  return (
    <>
        <div className='mt-[40px]'>
            <div className=' py-1'>
                <p className='text-[26px] text-[#173F63] font-superaExtraBold text-center'>
                    LOCATION MAP
                </p>
            </div>
            <div className=' w-[80%] mx-auto py-1 mb-4'>
                <p className='text-[14px] text-[#595858] text-center'>
                    Medallion Aurum Mohali offers premium, modern living with spacious apartments designed for comfort and style. Located in a prime sector 67 of Mohali , these luxury residences provide world-class amenities and a sophisticated urban lifestyle.
                </p>
            </div>
            <div className=' md:flex relative'>


                <div className={`${mapSwitch? "hidden" : "block"} bg-[#173F63] h-[85vh] md:w-[65%] w-[100%]`}>
                    <div className='bg-[url(/images/31494dfa-2bce-4198-a3b5-afd0a09a2709.png)] bg-center bg-cover h-[100%] w-[100%] '>
                        <div className=' flex justify-center items-center pt-[12%] px-2'>
                            <img src={envelop} className='lg:h-[400px] md:h-[300px] h-[300px] object-contain'/>
                        </div>
                    </div>
                </div>
                <div className={`${mapSwitch? "block" : "hidden"} h-[85vh] md:w-[65%] w-[100%]`}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.55602512208!2d76.8092663!3d30.618283699999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fe9ec15cbfd03%3A0x4cb1dcaa577519c8!2sRealty%20Nivesh!5e0!3m2!1sen!2sin!4v1741767468204!5m2!1sen!2sin" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='flex justify-center absolute translate-x-[-50%] top-0 md:left-[32%] left-[50%]'>
                    <div onClick={()=>setMapSwitch(false)} className={`${mapSwitch? "bg-white text-[#173F63]" : "bg-[#173F63] text-white"}  text-[#173F63] text-center py-2 md:px-8 px-3 rounded-bl-2xl font-superaBold md:text-[16px] text-[12px] cursor-pointer`}>
                        Map
                    </div>
                    <div onClick={()=>setMapSwitch(true)} className={`${mapSwitch? "bg-[#173F63] text-white" : "bg-white text-[#173F63]"}   text-center py-2 md:px-8 px-3 rounded-br-2xl font-superaBold md:text-[16px] text-[12px] cursor-pointer`}>
                        Google Map
                    </div>
                </div>


                <img src={buildingImg} className='h-[85vh] w-[35%] object-cover md:block hidden'/>
            </div>
        </div>
    </>
  )
}

export default LocationMapBody
