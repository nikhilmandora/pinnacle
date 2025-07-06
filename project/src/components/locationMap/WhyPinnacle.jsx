import React from 'react'

// Images and Icon
import icone1 from "../../assets/images/c39ac4f452.png"
import icone2 from "../../assets/images/1a06326d.png"
import icone3 from "../../assets/images/81b7b6e7e0.png"
import icone4 from "../../assets/images/5b3ea4f9bb4.png"

function WhyPinnacle() {
  return (
    <>
      <div className=' my-[40px]'>
        <div className=' w-[90%] mx-auto font-superaExtraBold text-[#303030] text-[26px]'>
            WHY <br /> THE PINNACLE?
        </div>
        <div className=' grid md:grid-cols-4 grid-cols-2 w-[90%] mx-auto'>
            <div className='border-r border-r-[#BFBDAC] px-3 my-3'>
                <div className=''>
                    <img src={icone1} className='h-[50px]' />
                </div>
                <div className=' my-2'>
                    <p className='font-superaBold'>
                        Favorite of <br /> IT Giants
                    </p>
                </div>
                <div className=''>
                    <p className='text-[14px] text-[#646363] font-superaBold'>
                      Gachibowli boasts of the biggest names in the commercial world. From Apple, to Amazon, to  Capgemini, you name it and you'll  find it here!
                    </p>
                </div>
            </div>

            <div className='md:border-r md:border-r-[#BFBDAC] px-3 my-3'>
                <div className=''>
                    <img src={icone2} className='h-[50px]' />
                </div>
                <div className=' my-2'>
                    <p className='font-superaBold'>
                      Stay <br /> Connected.
                    </p>
                </div>
                <div className=''>
                    <p className='text-[14px] text-[#646363] font-superaBold'>
                      Gachibowli boasts of the biggest names in the commercial world. From Apple, to Amazon, to  Capgemini, you name it and you'll  find it here!
                    </p>
                </div>
            </div>

            <div className='border-r border-r-[#BFBDAC] px-3 my-3'>
                <div className=''>
                    <img src={icone3} className='h-[50px]' />
                </div>
                <div className=' my-2'>
                    <p className='font-superaBold'>
                      Great <br /> Infrastructure.
                    </p>
                </div>
                <div className=''>
                    <p className='text-[14px] text-[#646363] font-superaBold'>
                      Gachibowli boasts of the biggest names in the commercial world. From Apple, to Amazon, to  Capgemini, you name it and you'll  find it here!
                    </p>
                </div>
            </div>

            <div className='px-3 my-3'>
                <div className=''>
                    <img src={icone4} className='h-[50px]' />
                </div>
                <div className=' my-2'>
                    <p className='font-superaBold'>
                      Best Investment <br /> Opportunities.
                    </p>
                </div>
                <div className=''>
                    <p className='text-[14px] text-[#646363] font-superaBold'>
                      Gachibowli boasts of the biggest names in the commercial world. From Apple, to Amazon, to  Capgemini, you name it and you'll  find it here!
                    </p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default WhyPinnacle
