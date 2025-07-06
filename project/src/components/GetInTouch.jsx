import React, { useState } from 'react'

// Images and Icons
import building02 from "../assets/images/building02.png"
import axios from 'axios'
import { toast } from 'react-toastify'


function GetInTouch() {

  const [fDataS , setFDataS] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    city: "",
    homeSize: "",
    broker: "",
    hearAboutUs: "",
    message: ""
  })

  const handleSubmit = async (e)=> {

    e.preventDefault()

    try {

      const response = await axios.post("http://localhost:3000/web/home_form_create" , fDataS);

      if(response?.data?.status == true) {
        toast.success("Form Submited Succesfully");
      }

      setFDataS({
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        city: "",
        homeSize: "",
        broker: "",
        hearAboutUs: "",
        message: ""
      })

    } catch(error) {
      toast.error("Something went wrong. Please Fill All Fields.");
    }

  }

  return (
    <div id='contactUs' className='scroll-mt-20'>
      <div className='bg-[#173F63]  flex justify-between md:h-[100vh] h-[100%]'>
        <img src={building02} className='md:w-[60%] md:block hidden'/>
        <div className='sm:px-[20px] self-center py-[10px] overflow-auto'>
          <div className='flex items-center justify-center'>
            <p className='text-[#D2AA64] font-superaBold text-[20px]'>
              GET IN
            </p>
            <p className='text-white text-[36px] pl-2 font-superaExtraBold leading-8'>
              TOUCH
            </p>
          </div>
          <div className='p-2 lg:mb-4 mb-1'>
            <p className='text-[#D2AA64] text-[12px] text-center'>
              You have any question? feel free to contact us.
            </p>
          </div>
          <div className='md:px-10 sm:px-6 px-2'>

            <form className=''>
              <div className='md:flex justify-between md:mb-2 mb-0'>
                <div className='md:w-[49%] w-[100%]'>

                  <label className='text-[#D2AA64] md:text-[14px] text-[12px] pl-2 font-superaBook' htmlFor='firstName'>
                    First Name
                  </label>
                  <input value={fDataS.firstName} onChange={(e)=>setFDataS((prev)=>({...prev , firstName: e.target.value }))} className='border border-white/50 md:my-2 my-1 font-superaBook w-full p-1.5 md:pl-4 pl-2 rounded-[5px] bg-[#133758] text-[#D2D2D2] md:text-[14px] text-[12px]' id='firstName' name='firstName' type='text' />

                  <label className='text-[#D2AA64] md:text-[14px] text-[12px] pl-2 font-superaBook' htmlFor='lastName'>
                    Last Name
                  </label>
                  <input value={fDataS.lastName} onChange={(e)=>setFDataS((prev)=>({...prev , lastName: e.target.value }))} className='border border-white/50 md:my-2 my-1 font-superaBook w-full p-1.5 md:pl-4 pl-2 rounded-[5px] bg-[#133758] text-[#D2D2D2] md:text-[14px] text-[12px]' id='lastName' name='lastName' type='text' />

                </div>
                
                <div className='md:w-[49%] w-[100%]'>

                  <label className='text-[#D2AA64] md:text-[14px] text-[12px] pl-2 font-superaBook' htmlFor='mobile'>
                    Mobile
                  </label>
                  <input value={fDataS.mobile} onChange={(e)=>setFDataS((prev)=>({...prev , mobile: e.target.value }))} className='border border-white/50 md:my-2 my-1 font-superaBook w-full p-1.5 md:pl-4 pl-2 rounded-[5px] bg-[#133758] text-[#D2D2D2] md:text-[14px] text-[12px] appearance-none' id='mobile' name='mobile' type='tel'/>

                  <label className='text-[#D2AA64] md:text-[14px] text-[12px] pl-2 font-superaBook' htmlFor='email'>
                    Email
                  </label>
                  <input value={fDataS.email} onChange={(e)=>setFDataS((prev)=>({...prev , email: e.target.value }))} className='border border-white/50 md:my-2 my-1 font-superaBook w-full p-1.5 md:pl-4 pl-2 rounded-[5px] bg-[#133758] text-[#D2D2D2] md:text-[14px] text-[12px]' id='email' name='email' type='email' />

                </div>
              </div>
              <div className=''>

                <label className='text-[#D2AA64] md:text-[14px] text-[12px] pl-2 font-superaBook' htmlFor='city'>
                  City
                </label>

                <select value={fDataS.city} onChange={(e)=>setFDataS((prev)=>({...prev , city: e.target.value }))} className='border border-white/50 md:my-2 my-1 font-superaBook w-full p-1.5 md:pl-4 pl-2 rounded-[5px] bg-[#133758] text-[#D2D2D2] md:text-[14px] text-[12px]' id='city' name='city' type='text'>
                  <option> Enter City </option>
                  <option value="Bikaner"> Bikaner </option>
                  <option value="Jaipur"> Jaipur </option>
                  <option value="Jaisalmer"> Jaisalmer </option>
                  <option value="Jodhpur"> Jodhpur </option>
                  <option value="Udaipur"> Udaipur </option>
                </select>

                <select value={fDataS.homeSize} onChange={(e)=>setFDataS((prev)=>({...prev , homeSize: e.target.value }))} className='border border-white/50 md:my-2 my-1 font-superaBook w-full p-1.5 md:pl-4 pl-2 rounded-[5px] bg-[#133758] text-[#D2D2D2] md:text-[14px] text-[12px]' id='homeSize' name='homeSize' type='text'>
                  <option> Preferred Home Size? </option>
                  <option value="3 BHK"> 3 BHK </option>
                  <option value="3 BHK + S"> 3 BHK + S </option>
                  <option value="4BHK + S"> 4BHK + S </option>
                </select>

                <select value={fDataS.broker} onChange={(e)=>setFDataS((prev)=>({...prev , broker: e.target.value }))} className='border border-white/50 md:my-2 my-1 font-superaBook w-full p-1.5 md:pl-4 pl-2 rounded-[5px] bg-[#133758] text-[#D2D2D2] md:text-[14px] text-[12px]' id='broker' name='broker' type='text'>
                  <option> Are you a broker? </option>
                  <option value="Yes"> Yes </option>
                  <option value="No"> No </option>
                </select>

                <select value={fDataS.hearAboutUs} onChange={(e)=>setFDataS((prev)=>({...prev , hearAboutUs: e.target.value }))} className='border border-white/50 md:my-2 my-1 font-superaBook w-full p-1.5 md:pl-4 pl-2 rounded-[5px] bg-[#133758] text-[#D2D2D2] md:text-[14px] text-[12px]' id='hearAboutUs' name='hearAboutUs' type='text'>
                  <option> How did you hear about us? </option>
                  <option value="Instagram"> Instagram </option>
                  <option value="Facebook"> Facebook </option>
                  <option value="Twitter"> Twitter </option>
                  <option value="News Paper"> News Paper </option>
                  <option value="TV"> TV </option>
                  <option value="FM Radio"> FM Radio </option>
                  <option value="Others"> Others </option>
                </select>

                <textarea value={fDataS.message} onChange={(e)=>setFDataS((prev)=>({...prev , message: e.target.value }))} className='border border-white/50 md:my-2 my-1 font-superaBook w-full p-1.5 md:pl-4 pl-2 rounded-[5px] bg-[#133758] text-[#D2D2D2] md:text-[14px] text-[12px]' placeholder='Message' id='message' name='message' type='text'></textarea>

                <div className='md:mt-4 mt-2 flex justify-around'>
                  <button onClick={(e)=>handleSubmit(e)} type='submit' className="py-1 px-9 bg-[#D2AA64] rounded-full md:text-[16px] text-[14px]">
                    Submit
                  </button>
                  <button type='reset' className=" text-[#D2AA64] rounded-full md:text-[16px] text-[14px]">
                    Clear Form
                  </button>
                </div>
              </div>  
            </form>

            
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch