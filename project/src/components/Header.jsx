import React, { useCallback, useEffect, useState } from 'react'
import EnquiryModel from './common/EnquiryModel';
import axios from 'axios';

function Header() {

    const [enquiryPopup , setEnquiryPopup] = useState(false);

    const [beData , setBeData] = useState([]);

    const handleBeData = useCallback( async ()=> {

        try{

            const response = await axios.get("http://localhost:3000/web/hero_read");

            if(response?.data?.status == true) {
                setBeData(response?.data?.data)
            }

        } catch(error) {
            console.log("BackEndData:=>" , error)
        }

    }, [])

    useEffect(()=>{
        handleBeData()
    } , [handleBeData])

  return (
    <div id='/header'>
        <div style={{background: `url(${beData?.image})`}} className={`bg-cover bg-top`}>
            <div className="bg-[url(/images/rectangle2803.png)] bg-cover h-screen flex items-center xxs:justify-center md:justify-start">
                <div className='lg:pl-[60px] md:pl-[50px] sm:pl-[40px] xxs:px-[25px]'>
                    <div className='text-center md:text-start'>
                        <div className='lg:text-[60px] md:text-[50px] sm:text-[40px] text-white xxs:text-[30px] font-bold'>
                            {beData?.heading} 
                        </div>
                        <div className='text-white lg:text-[24px] md:text-[22px] xxs:text-[18px] sm:mt-1 xxs:mt-2 '>
                            {beData?.subHeading}
                        </div>
                        <div className='text-white lg:text-[16px] md:text-[14px] xxs:text-[12px] sm:mt-1 xxs:mt-2 xxs'>
                            {beData?.subSubHeading}
                        </div>
                        <button className='bg-white sm:px-[24px] sm:py-[6px] lg:text-[14px] font-superaBold text-[10px] rounded-full mt-4 mb-4 xxs:text-[9px] xxs:px-[18px] xxs:py-[4px] xxs:pt-[5px] hover:bg-[#C17B11]' onClick={()=> setEnquiryPopup(true)}>
                            {beData?.button?.name}
                        </button>
                        <div className='text-white lg:text-[14px] md:text-[12px] xxs:text-[10px]'>
                            {beData?.text}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <EnquiryModel open={enquiryPopup} setEnquiryPopup={setEnquiryPopup} type="Header (Enquiry Button)"/>
    </div>
  )
}

export default Header
