import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'

function Header() {

  const [ showData , setShowData ] = useState({})

  const handleShow = useCallback(async()=>{

    try{

      const response = await axios.get("http://localhost:3000/web/plans_read");

      if(response?.data?.status == true){
        setShowData(response?.data?.data);
      }

    } catch(error) {
      console.log("handleShowError" , error);
    }

  }, [])

  useEffect(()=>{
    handleShow()
  }, [handleShow])

  return (
    <>
        <div style={{backgroundImage: `url(${showData?.image})`}} className='block bg-cover h-[75vh]'>
        <div className='h-full w-full bg-black/50 flex justify-center items-center'>
          <div className='w-[80%]'>
            <p className='text-white text-[46px] font-superaBold text-center'>
              {showData?.heading}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
