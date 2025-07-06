import React from 'react'

// Images and Icons
import transLogo from "../../assets/images/ThePinnaclePPT.png"
import logoWithText from "../../assets/images/Group111.png"

function GalleryBody() {
  return (
    <>
      <div className=' mt-[40px]'>
        <div className=''>
            <p className='md:text-[26px] font-superaExtraBold text-[#123758] text-center text-[22px]'>
                PROJECT WALK THROUGH
            </p>
        </div>
        <div className=' '>
            <p className='md:text-[14px] text-[12px] text-[#5D615B] text-center p-1 mt-1 font-superaBold'>
                Explore The Pinnacle mohali  Project gallery & Construction Updates.
            </p>
        </div>
        <div className=' mt-[30px]'>
            <div className='bg-[#123758] w-[80%] mx-auto grid items-center relative md:py-[60px] py-[30px]'>
                <div className=' flex justify-center p-2'>
                    <img src={logoWithText} className='h-[200px]' />
                </div>
                <div className=''>
                    <p className='text-white font-superaBook text-center p-2 text-[14px]'>
                        Our stunning sample flat at Pinnacle Apartments, Mohali is coming soon - worth the wait! 
                    </p>
                </div>
                <div className=' absolute top-[50%] translate-y-[-50%] right-[0%]'>
                    <img src={transLogo} className='md:h-[350px] h-[300px]'/>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default GalleryBody
