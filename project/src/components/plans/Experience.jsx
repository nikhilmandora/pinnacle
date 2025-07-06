import React from 'react'

// Images and Icons
import img1 from "../../assets/images/1d982dcd4a06.png"
import img2 from "../../assets/images/3e77c484b4.png"
import img3 from "../../assets/images/9d35221e9c3.png"
import img4 from "../../assets/images/b337b5c79f2.png"

function Experience() {
  return (
    <>
        <div className='my-[40px] '>
            <div className=' my-4 mx-auto px-[2%]'>
                <p className='md:text-[26px] text-[22px] font-superaBold text-center'>
                    Experience Outdoor Living, Balconies As Big As Room!
                </p>
            </div>
            <div className=' sm:flex flex-wrap justify-evenly px-1 sm:px-0'>
                <div className=' sm:w-[48%] mx-auto sm:mx-0 w-[90%] my-2 '>
                    <img src={img1} className='w-[100%] h-[100%] object-cover' />
                </div>
                <div className=' sm:w-[48%] mx-auto sm:mx-0 w-[90%] my-2 '>
                    <img src={img2} className='w-[100%] h-[100%] object-cover' />
                </div>
                <div className=' sm:w-[48%] mx-auto sm:mx-0 w-[90%] my-2 '>
                    <img src={img3} className='w-[100%] h-[100%] object-cover' />
                </div>
                <div className=' sm:w-[48%] mx-auto sm:mx-0 w-[90%] my-2 '>
                    <img src={img4} className='w-[100%] h-[100%] object-cover' />
                </div>
            </div>
        </div>
    </>
  )
}

export default Experience