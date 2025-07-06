import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'

const Header = () => {

  const [ showData , setShowData ] = useState({});

  const handleShow = useCallback(async()=>{

    try{

      const response = await axios("http://localhost:3000/web/amenities_read");

      if(response?.data?.status == true){
        setShowData(response?.data?.data);
      }

    }catch(error){
      console.log("handleShowError:->" , error);
    }

  }, [])

  useEffect(()=>{
    handleShow()
  }, [handleShow])

  return (
    <>
      <div className='bg-[url(/images/28211964ec9.png)] bg-cover h-[75vh]'>
        <div className='h-full w-full bg-black/50'>
          <div className=''>
            <p className='text-white md:text-[46px] text-[26px] font-superaBold text-center md:pt-[10%] pt-[25%] pb-4'>
              {showData?.heading}
            </p>
          </div>
          <div className=' text-white flex justify-center'>
            <div className='md:px-4 px-2'>
              <p className='text-center md:text-[26px] text-[22px] font-superaBold'>
                {showData?.first?.number} +
              </p>
              <p className='text-center text-[12px]'>
              {showData?.first?.text}
              </p>
            </div>
            <div className='border-x-2 border-x-white-600 md:px-4 px-2'>
              <p className='text-center md:text-[26px] text-[22px] font-superaBold'>
                {showData?.second?.number} +
              </p>
              <p className='text-center text-[12px]'>
                {showData?.second?.text}
              </p>
            </div>
            <div className='md:px-4 px-2'>
              <p className='text-center md:text-[26px] text-[22px] font-superaBold'>
                {showData?.third?.number} +
              </p>
              <p className='text-center text-[12px]'>
                {showData?.third?.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
