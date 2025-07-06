import React, { useCallback, useEffect, useState } from 'react'

// Images and Icons
import sitePlan from "../../assets/images/71053eaa6980.png"
import axios from 'axios'

function SitePlan() {

    const [ showData , setShowData ] = useState([])

    const handleShow = useCallback(async()=>{

        try {

            const response = await axios.get("http://localhost:3000/web/site_plans_read?status=true");

            if(response?.data?.status == true){
                setShowData(response?.data?.data)
            }

        } catch(error){
            console.log("handleShowError:->" , error)
        }

    }, [])

    useEffect(()=>{
        handleShow()
    }, [handleShow])

  return (
    <>
        <div id='sitePlans' className='scroll-mt-[18vh] bg-[url(/images/Vector505.png)] bg-cover bg-center mx-auto '>
            <div className='my-2 pt-10'>
                <p className='text-[#173F63] text-[26px] font-superaBold text-center'>
                    SITE PLANS
                </p>
            </div>
            <div className=' mx-auto my-2'>
                <p className='text-[#5A5454] text-[14px] text-center'>
                    Explore The Pinnacle floor plans, Site plan & Tower plans
                </p>
            </div>
            <div className=''>
                <div className=' mx-auto w-[80%]'>
                    <img src={sitePlan} className='w-[100%]' />
                </div>
            </div>
            <div className='md:my-10 my-2 flex justify-center'>
                <ul className='list-decimal list-inside grid md:grid-cols-3 xs:grid-cols-2 md:gap-x-14 md:gap-y-4 gap-x-6 gap-y-2 text-[#565555] pb-10 place-content-center text-[14px] md:text-[16px]'>
                    {showData?.map((showingData , index)=>(
                    <li key={index}> {showingData?.entry} </li>
                    ))}
                </ul>
            </div>
        </div>  
    </>
  )
}

export default SitePlan