import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'

function Header() {

  const [ showData , setShowData ] = useState({});

  const handleShow = useCallback(async()=>{

    try {

      const response = await axios("http://localhost:3000/web/gallery_read");

      if(response?.data?.status == true) {
        setShowData(response?.data?.data);
      }

    } catch(error) {
      console.log("handleShowError:->" , error)
    }

  }, [])

  useEffect(()=>{
    handleShow()
  }, [handleShow])

  return (
    <>
      <div style={{backgroundImage: `url(${showData?.image})`}} className='bg-cover h-[75vh]'>
        <div className='bg-black/50 h-full w-full'>
            <div className=''>
                <p className='text-white text-[46px]  font-superaBold text-center md:pt-[15%] sm:pt-[20%] pt-[25%]'>
                    {showData?.heading}
                </p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Header
