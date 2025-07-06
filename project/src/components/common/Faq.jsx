import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'

function Faq() {

  const [faqToggel , setFaqToggel] = useState(-1);

  const [faqArray , setFaqArray] = useState([]);

  const handleFaqS = useCallback(async()=>{

    try {

      const response = await axios.get("http://localhost:3000/web/faq_read?status=true")

      if(response?.data?.status == true) {
        setFaqArray(response?.data?.data);
      }

    } catch(error) {
      console.log("handleFaqS:->" , error)
    }

  }, [])

  useEffect(()=>{
    handleFaqS()
  }, [handleFaqS])

  return (
    <div id='faq' className='scroll-mt-24'>
      <div className='md:w-[75%] w-[85%] m-auto md:my-16 my-8'>
        <div className='md:text-[26px] text-[22px] font-superaBold text-[#173F63] text-center mt-6 mb-3'>
          FREQUENTLY ASKED QUESTIONS
        </div>

        <div className='h-[400px] overflow-y-auto'>

        {faqArray?.map((faq , index)=>{
          return(
            <div key={index} onClick={()=>setFaqToggel(faqToggel == index ? -1 : index)} className='py-2 md:px-3 w-[100%] border-b border-gray-200 my-2 cursor-pointer'>
              <div className='flex justify-between items-center'>
                <p className='md:text-[16px] text-[12px] text-[#4B4B4B] w-[85%] font-superaBold'>
                {faq?.ques}
                </p>
                <p className='text-[20px] text-[#4B4B4B]'>
                  {faqToggel == index ? "-" : "+" }
                </p>
              </div>
              <div className={`my-1 ${faqToggel == index ? "block" : "hidden"}`}>
                <p className='md:text-[15px] text-[11px] text-[#727272] w-[85%]'>
                  {faq?.ans}
                </p>
              </div>
            </div>
          )
        })}

        </div>

        
      </div>
    </div>
  )
}

export default Faq
