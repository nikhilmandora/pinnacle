import React, { useState } from 'react'

// Images and Icons
import maholi from "../assets/images/mohali.png"
import download from "../assets/images/vector13.png"
import icon5 from "../assets/images/vector.png"
import icon6 from "../assets/images/group4488.png"
import EnquiryModel from './common/EnquiryModel'

function Maholi() {

  const [enquiryPopup , setEnquiryPopup] = useState(false);


  return (
    <div>
      <div className='bg-[url(/images/group5313.png)] bg-cover sm:h-[100vh] xxs:h-[90vh] md:px-[0px] lg:px-[60px] md:flex xxs:grid xxs:content-between'>

              <div className='md:w-[50%] pb-[50px] flex items-end md:justify-start xxs:justify-center xxs:pt-[20px]'>
                <div className='lg:pl-[40px] md:pl-[10px]'>
                  <p className='text-white lg:text-[32px] font-superaBold xxs:text-center md:text-left md:text-[30px] sm:text-[24px] xxs:text-[22px]'>THE PRIDE OF</p>
                  <img src={maholi} className='lg:h-[50px] mb-2 xxs:mx-auto md:mx-0 sm:h-[40px] xxs:h-[30px]'/>
                  <p className='text-white md:text-[18px] xxs:text-[14px] mb-2 xxs:text-center md:text-left'>
                    Live Amidst Nature And Openness.
                  </p>
                  <hr className='md:w-[300px] mb-2 xxs:w-[220px] xxs:mx-auto md:mx-0'/>
                  <p className='text-white xxs:text-center md:text-left md:text-[16px] xxs:text-[12px] sm:text-[14px]'>
                    Sector 83 Alpha IT City Mohali
                  </p>
                </div>
              </div>


              <div className='md:w-[50%] md:pb-[50px] flex items-end md:justify-end xxs:justify-center xxs:pb-[20px]'>
                <div className='lg:pr-[40px] md:pr-[10px]'>
                  <div className='flex'>
                    <div className='pr-[20px] border-r border-r-gray-300'>
                      <div className='pb-[7px]'>
                        <img src={icon5} className='h-[28px] xxs:mx-auto md:mx-0 object-contain' />
                      </div>
                      <div className='text-white sm:text-[12px] xxs:text-[10px] my-2 xxs:text-center md:text-left'>
                        SPREAD ACROSS
                      </div>
                      <div className='text-white md:text-[26px] sm:text-[22px] xxs:text-[18px] font-superaExtraBold xxs:text-center md:text-left'>
                        08 ACRES
                      </div>
                    </div>
                    <div className='pl-[20px]'>
                      <div className='pb-[7px]'>
                        <img src={icon6} className='h-[28px] xxs:mx-auto md:mx-0 object-contain' />
                      </div>
                      <div className='text-white sm:text-[12px] xxs:text-[10px] my-2 xxs:text-center md:text-left'>
                        HANDOVER DATE
                      </div>
                      <div className='text-white md:text-[26px] sm:text-[22px] xxs:text-[18px] font-superaExtraBold xxs:text-center md:text-left'>
                        DECEMBER 2028
                      </div>
                    </div>
                  </div>
                  <div className='my-3'>
                    <p className='text-white sm:text-[16px] xxs:text-[12px] font-superaBold xxs:text-center md:text-left'>
                      6 Towers | S+36 Floors | 76% Open Area
                    </p>
                  </div>
                  <button className='bg-[#C17B11] flex items-center leading-none px-6 py-2 rounded-full xxs:mx-auto md:mx-0 ' onClick={()=> setEnquiryPopup(true)}>
                    <img src={download} className='w-4 mr-2 mt-[1px] object-contain'/>
                    <p className='text-white text-[16px]'>Brochure</p>
                  </button>
                </div>
              </div>
      </div>

      <EnquiryModel open={enquiryPopup} setEnquiryPopup={setEnquiryPopup} type="Brochure Download" />
    </div>
  )
}

export default Maholi
