import React from 'react'

// Images and Icons
import sbi from "../../assets/images/sbi.png"
import hdfc from "../../assets/images/hdfc.png"
import icici from "../../assets/images/icici.png"
import bob from "../../assets/images/bob.png"
import kotak from "../../assets/images/kotak.png"


function Banks() {
  return (
    <>
      <div className=' py-4'>
        <div className=' text-[26px] font-superaBold text-center text-[#173F63]'>
            APPROVED BANKS
        </div>
        <div className='text-[14px] text-[#5A5454] text-center mb-8 mt-1'>
            "Easy & Hassle-Free Bank Loan Options for Your Dream Home"
        </div>

        <div class="md:w-[70%] xs:w-[80%] w-[90%] flex md:gap-10 xs:gap-7 gap-4 mx-auto overflow-hidden">
          <div className=' flex justify-evenly md:gap-10 xs:gap-7 gap-4 [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'>
              <div className='border border-gray-300 rounded-md h-[90px] w-[200px] flex justify-center items-center'>
                  <img src={sbi} className='h-[60px]' />
              </div>
              <div className='border border-gray-300 rounded-md h-[90px] w-[200px] flex justify-center items-center'>
                  <img src={hdfc} className='h-[60px]' />
              </div>
              <div className='border border-gray-300 rounded-md h-[90px] w-[200px] flex justify-center items-center'>
                  <img src={icici} className='h-[60px]' />
              </div>
              <div className='border border-gray-300 rounded-md h-[90px] w-[200px] flex justify-center items-center'>
                  <img src={bob} className='h-[60px]' />
              </div>
              <div className='border border-gray-300 rounded-md h-[90px] w-[200px] flex justify-center items-center'>
                  <img src={kotak} className='h-[60px]' />
              </div>
          </div>
          <div className=' flex justify-evenly md:gap-10 xs:gap-7 gap-4 [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'>
              <div className='border border-gray-300 rounded-md h-[90px] w-[200px] flex justify-center items-center'>
                  <img src={sbi} className='h-[60px]' />
              </div>
              <div className='border border-gray-300 rounded-md h-[90px] w-[200px] flex justify-center items-center'>
                  <img src={hdfc} className='h-[60px]' />
              </div>
              <div className='border border-gray-300 rounded-md h-[90px] w-[200px] flex justify-center items-center'>
                  <img src={icici} className='h-[60px]' />
              </div>
              <div className='border border-gray-300 rounded-md h-[90px] w-[200px] flex justify-center items-center'>
                  <img src={bob} className='h-[60px]' />
              </div>
              <div className='border border-gray-300 rounded-md h-[90px] w-[200px] flex justify-center items-center'>
                  <img src={kotak} className='h-[60px]' />
              </div>
          </div>
        </div>


        




      </div>
    </>
  )
}

export default Banks
