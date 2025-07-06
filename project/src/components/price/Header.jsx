import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'

const Header = () => {

  const [ formData , setFormData ] = useState({})
  console.log(formData)

  const handleShow = useCallback(async()=>{

    try {

      const response = await axios.get("http://localhost:3000/web/price_read")

      if(response?.data?.status == true){
        setFormData(response?.data?.data)
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
      <div style={{backgroundImage: `url(${formData?.image})`}} className='bg-cover h-[75vh]'>
        <div className='bg-black/50 h-full w-full'>
            <div className=''>
                <p className='text-white text-[46px]  font-superaBold text-center md:pt-[15%] sm:pt-[20%] pt-[25%]'>
                    {formData?.heading}
                </p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Header
