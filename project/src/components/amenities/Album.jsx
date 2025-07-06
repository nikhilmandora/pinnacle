import React, { useCallback, useEffect, useState } from 'react'

// Images and Icons
import axios from 'axios'

const Album = () => {

  const [ showData , setShowData ] = useState([]);

  const handleShowData = useCallback(async()=>{

    try{

      const response = await axios.get("http://localhost:3000/web/amenities_album_read?status=true");

      if(response?.data?.status == true){
        setShowData(response?.data?.data)
      }

    } catch(error){
      console.log("handleShowDataError:->" , error)
    }

  }, [])

  useEffect(()=>{
    handleShowData()
  }, [handleShowData])

  return (
    <>
      <div className=' my-[40px]'>
        <div className=' text-center text-[26px] font-superaExtraBold text-[#123758] mb-1'>
            <p>AMENITIES</p>
        </div>
        <div className=' text-center text-[14px] text-[#5A5454] mb-5'>
            Discover the Premium amenities at The medallion AURUM mohali  
        </div>
        <div className=' md:px-10 xs:px-6 px-3 grid grid-cols-12 sm:gap-3 gap-1'>
            
            {showData.map((data , index)=>(
              <div key={index} className='overflow-hidden lg:h-[300px] sm:h-[250px] h-[200px] col-span-12 xs:col-span-6 md:col-span-4'>
                <div style={{backgroundImage:`url(${data?.image})`}}  className='hover:scale-125 duration-500 h-[100%] w-[100%] bg-cover'>
                  <div className=' w-full h-full group'>
                    <p className='bg-black/50 hidden w-full h-full justify-center items-center text-[22px] text-white font-superaBold group-hover:flex'>
                      {data?.heading}
                    </p>
                  </div>
                </div>
              </div>
              ))}
              
        </div>
      </div>
    </>
  )
}

export default Album
