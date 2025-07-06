import React, { useState } from 'react'
import EnquiryModel from './common/EnquiryModel';

// Images and Icons
import building01 from "../assets/images/ThePinnaclePPTshort.png"


function PreLaunch() {

    const [enquiryPopup , setEnquiryPopup] = useState(false);

  return (
    <>
      <div onClick={()=> setEnquiryPopup(true)} className='lg:mt-10 mt-[230px] cursor-pointer bg-[url(/images/group5629.png)] bg-cover md:py-[35px] py-[15px] mb-4 bg-center md:bg-left px-[10px] md:px-0'>
        <div className=''>
          <div className='md:w-[50%]  mx-auto md:mx-0'>
                <img src={building01} className='m-auto md:h-[100px] sm:h-[80px] h-[60px]'/>
              </div>
              <div className='md:w-[50%]  mx-auto md:mx-0'>
                <p className=' text-center text-[#F4AE43] md:text-[30px] sm:text-[25px] text-[20px] font-superaBold md:my-2 my-1'>
                  PRE-LAUNCH OFFER!
                </p>
                <p className='text-center text-white md:my-2 my-1  text-[10px] sm:text-[13px] md:text-[16px]'>
                  AVAIL EXCLUSIVE BENEFITS ON
                </p>
                <p className='text-center text-[#F4AE43] md:text-[30px] sm:text-[25px] text-[20px] font-superaBold md:my-2 my-1 '>
                  PINNACLE APARTMENTS
                </p>
                <p className='text-center text-white text-[14px] md:text-[24px] sm:text-[18px] font-semibold md:my-2 my-1 '>
                  MOHALI 
                </p>
                <div className='md:my-2 my-1 flex justify-center'>
                  <div className='border border-white rounded-md text-center text-white inline-block md:py-2 md:px-4 sm:py-1.5 sm:px-3 py-1 px-2 md:text-[14px] sm:text-[12px] text-[10px] '>
                    LIMITED UNITS AVAILABLE, DON'T MISS OUT!
                  </div>
              </div>
          </div>
        </div>
      </div>
      <EnquiryModel open={enquiryPopup} setEnquiryPopup={setEnquiryPopup} type="Pre Launch Offer" />
    </>
  )
}

export default PreLaunch
