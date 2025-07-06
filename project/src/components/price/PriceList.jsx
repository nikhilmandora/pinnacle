import React, { useCallback, useEffect, useState } from 'react'

// Images and Icons
import golden from "../../assets/images/17fa65794.png"
import axios from 'axios'

function PriceList() {

    const [ showData , setShowData ] = useState([])

    const handleShow = useCallback(async()=>{

        try {

            const response = await axios.get("http://localhost:3000/web/price_list_read?status=true")

            if(response?.data?.status == true){
                setShowData(response?.data?.data)
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
        <div id="priceList" className='mt-6 scroll-mt-[24vh]'>
            <div className=''>
                <p className='text-[26px] text-[#173F63] font-superaExtraBold text-center py-1'>
                    PRICE LIST
                </p>
            </div>
            <div className=''>
                <p className=' text-[14px] text-[#5A5454] text-center py-1'>
                    Explore The PINNACLE mohali Price list, Payment Plan and Latest offers
                </p>
            </div>

            <div className=' mt-[20px]'>
                <div className=' w-[90%] mx-auto'>
                    {showData?.map((showingData , index)=>(
                    <div key={index} className=' bg-[#F8F2E8] h-[200px] hidden md:flex justify-between rounded-xl my-5'>
                        <div className='rounded-bl-xl rounded-tl-xl  w-[30%]'>
                            <img src={showingData?.image} className='rounded-bl-xl object-cover rounded-tl-xl h-[100%] w-[100%]' />
                        </div>
                        <div className=' w-[44%] p-4'>
                            <p className='text-[#173F63] font-superaExtraBold text-[22px]'>
                                {showingData?.heading}
                            </p>
                            <p className='text-[#173F63] font-superaBold text-[14px] my-1'>
                                {showingData?.area} SQFT.
                            </p>
                            <p className='text-[#173F63] text-[13px]'>
                             {showingData?.description}
                            </p>
                        </div>
                        <div className=' w-[26%] rounded-tr-xl rounded-br-xl flex'>
                            <div className='bg-[#173F63] w-[95%] text-white text-center grid items-center leading-[1px]'>
                                <p className='text-[9px]'>
                                    Company Price
                                </p>
                                <p className='text-[9px] flex justify-center items-center'>
                                    <span className='text-[20px] line-through mr-2'> ₹{showingData?.companyPrice}/- </span> Per Sq.Ft.
                                </p>
                                <p className='text-[14px]'>
                                    Our Price
                                </p>
                                <p className='text-[24px] font-superaBold'>
                                    ₹{showingData?.ourPrice}/- *
                                </p>
                                <p className='text-[14px]'>
                                    Per Sq.FT.
                                </p>
                            </div>
                            <img src={golden} className='rounded-tr-xl rounded-br-xl w-[5%] object-cover'/>
                        </div>
                    </div>
                    ))}

                    {showData?.map((showingData , index)=>(
                    <div className='md:hidden my-5'>
                        <div className=''>
                            <img src={showingData?.image} className='h-[100%] w-[100%] object-cover' />
                        </div>
                        <div className='bg-[url(/images/17fa657947f4da8473307239aa188ce1.png)] bg-cover py-1 w-[65%] my-4 rounded-br-full'>
                            <p className='text-white sm:text-[24px] xs:text-[18px] text-[14px] font-superaBold'>
                                {showingData?.heading} | {showingData?.area} SQFT.
                            </p>
                        </div>
                        <div className='my-4 sm:text-[14px] text-[12px] pr-5 font-superaBold text-[#7b7a7a]'>
                            <p className=''>
                                {showingData?.description}
                            </p>
                        </div>
                        <button className='bg-[#173F63] flex w-[100%] justify-center py-3 rounded-md'>
                            <svg sm:width="18" sm:height="23" width="13" height="17" class="group-hover:fill-[#fff] fill-[#fff] " viewBox="0 0 43 56" xmlns="http://www.w3.org/2000/svg"><path d="M36.9739 18.9836H34.3744V13.7846C34.3744 6.61 28.5515 0.787109 21.3769 0.787109C14.2022 0.787109 8.37933 6.61 8.37933 13.7846V18.9836H5.77982C2.92037 18.9836 0.580811 21.3232 0.580811 24.1827V50.1777C0.580811 53.0372 2.92037 55.3767 5.77982 55.3767H36.9739C39.8333 55.3767 42.1729 53.0372 42.1729 50.1777V24.1827C42.1729 21.3232 39.8333 18.9836 36.9739 18.9836ZM21.3769 42.3792C18.5174 42.3792 16.1778 40.0396 16.1778 37.1802C16.1778 34.3207 18.5174 31.9812 21.3769 31.9812C24.2363 31.9812 26.5759 34.3207 26.5759 37.1802C26.5759 40.0396 24.2363 42.3792 21.3769 42.3792ZM29.4353 18.9836H13.3184V13.7846C13.3184 9.33948 16.9317 5.72617 21.3769 5.72617C25.822 5.72617 29.4353 9.33948 29.4353 13.7846V18.9836Z"></path></svg>
                            <p className='text-white ml-4 font-superaBold sm:text-[16px] text-[14px]'>
                                Unlock Price
                            </p>
                            
                        </button>
                    </div>                   
                    ))}

                </div>
            </div>
        </div>
    </>
  )
}

export default PriceList
