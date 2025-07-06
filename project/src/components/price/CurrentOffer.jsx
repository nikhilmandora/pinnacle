import React, { useState } from 'react'
import EnquiryModel from '../common/EnquiryModel'

function CurrentOffer() {

  const [enquiryPopup , setEnquiryPopup] = useState(false);
  
  return (
    <>
      <div id="currentOffers" className='scroll-mt-[22vh] my-[40px]'>
        <div className=' text-[26px] py-6 font-superaBold text-center text-[#173F63]'>
          CURRENT OFFER
        </div>
        <div onClick={()=> setEnquiryPopup(true)} className='cursor-pointer bg-[url(/images/Group17.png)] flex items-center h-[75vh] bg-cover bg-center'>
          <div className=' md:w-[50%] w-[100%] text-center'>
              <div className='my-2'>
                <p className='text-[#F4AE43] md:text-[30px] text-[22px] font-superaExtraBold'>
                  STAY TUNED  
                </p> 
              </div>
              <div className='my-2'>
                <p className='text-white md:text-[24px] text-[18px]'>
                  EXCITING LATEST OFFERS ON
                </p>
              </div>
              <div className='my-2'>
                <p className='text-white md:text-[56px] text-[42px] font-superaExtraBold'>
                  THE PINNACLE 
                </p>
              </div>
              <div className='my-2'>  
                <p className='text-white md:text-[30px] text-[22px] font-superaBold'>
                  COMING SOON!
                </p>
              </div>
              <div className='border border-white rounded-lg inline-block px-10 py-3 my-2'>
                <p className='text-white md:text-[14px] text-[10px]'>
                  YOUR DREAM HOME AWAITS!"
                </p>
              </div>
          </div>
        </div>
        <EnquiryModel open={enquiryPopup} setEnquiryPopup={setEnquiryPopup} />
      </div>
    </>
  )
}

export default CurrentOffer
