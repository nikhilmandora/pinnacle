import React, { useState } from 'react'

// Images and Icon
import nivesh from "../../assets/images/Group1148.png"
import footerLogo from "../../assets/images/Group53461.png"
import axios from 'axios'
import { toast } from 'react-toastify'

const LetsTalk = ({type}) => {

    const [ enquiryForm , setEnquiryForm ] = useState({
        name: "",
        number: "",
        email: "",
        checkbox: false,
        section: type
      })
    
      const handleSubmit = async (e)=> {
    
        e.preventDefault()
    
        try {
    
          const response = await axios.post("http://localhost:3000/web/enquiry_form_create" , enquiryForm);
    
          if(response?.data?.status == true) {
            toast.success("Form Submited Successfully");
          }
    
          setEnquiryForm({
            name: "",
            number: "",
            email: "",
            checkbox: false,
            section: type
          })
    
        } catch(error) {
          console.log("handleSubmitError:->" , error)
        }
    
      }

  return (
    <>

        <div className=' bg-[#F1F1F1] md:flex md:py-[20px] py-[10px]'>
            <div className=' md:w-[50%] md:p-[20px] p-[10px] grid justify-center items-center'>
                <div className=''>
                    <p className='text-[22px] xs:flex md:block block'>
                        Can't wait to know more?&nbsp;
                        <div className='font-superaBold'>
                            Let's talk!
                        </div>
                    </p>
                </div>
                <div className='justify-center items-center gap-6  md:flex hidden'>
                    <div className=''>
                        <img src={nivesh} className='' />
                    </div>
                    <div className='border-[1px] border-black/50 h-[60px]'></div>
                    <div className=''>
                        <img src={footerLogo} className='' />
                    </div>
                </div>
            </div>
            <div className=' md:w-[50%] p-[20px] grid justify-center'>
                <form className=''>
                    <div className='my-5 mt-0'>
                        <input value={enquiryForm?.name} onChange={(e)=>setEnquiryForm((prev)=>({...prev , name: e.target.value}))} className='border-b border-[#BABABA] bg-[#F1F1F1] placeholder-[#101010] md:w-[75%] w-[100%] py-1' placeholder='Your Name' type="text" />
                    </div>
                    <div className='my-5 mb-1'>
                        <input value={enquiryForm?.number} onChange={(e)=>setEnquiryForm((prev)=>({...prev , number: e.target.value}))} className='border-b border-[#BABABA] bg-[#F1F1F1] appearance-none placeholder-[#101010] md:w-[75%] w-[100%] py-1' placeholder='Enter Your Number' type="number" />
                    </div>
                    <div className='my-5'>
                        <input value={enquiryForm?.email} onChange={(e)=>setEnquiryForm((prev)=>({...prev , email: e.target.value}))} className='border-b border-[#BABABA] bg-[#F1F1F1] appearance-none placeholder-[#101010] md:w-[75%] w-[100%] py-1' placeholder='Email ID' type="email" />
                    </div>
                    <div className='flex items-center md:w-[75%] w-[90%]'>
                        <input value={enquiryForm?.checkbox} onChange={(e) => setEnquiryForm((prev) => ({...prev, checkbox: e.target.checked}))} type="checkbox" className='h-4 w-4' />
                        <p className='text-[10px] ml-2'>
                            I agree to receive newsletters, or relevant marketing content and Sushma Elementa Terms and Conditions
                        </p>
                    </div>
                    <div className='my-5 mb-0'>
                        <button onClick={(e)=>handleSubmit(e)} type='submit' className='md:w-[75%] w-[100%] py-1 bg-[#101010] rounded-full text-white text-center'> Submit </button>
                    </div>
                </form>
            </div>
        </div>

    </>
  )
}

export default LetsTalk
