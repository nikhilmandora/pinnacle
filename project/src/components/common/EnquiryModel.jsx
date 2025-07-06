import React, { useState } from "react";

// Images and Icon
import logo2 from "../../assets/images/logo2.webp";
import SaleParter from "../../assets/images/realtynives.webp";
import axios from "axios";
import { toast } from "react-toastify";

function EnquiryModel({ open, setEnquiryPopup, type }) {

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
        setEnquiryPopup(false);
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
      <div className={`h-screen w-screen ${open ? "flex fixed top-0" : "hidden"} justify-center items-center bg-black/75 z-10`} >
        <div className=" bg-white rounded-lg w-[85%] h-[75%] md:flex md:py-[20px] py-[10px] relative">
          <svg onClick={()=>setEnquiryPopup(false)} className="w-4 sm:w-5 lg:w-6 absolute top-[7%] right-[1%] translate-x-[-50%] translate-y-[-50%] cursor-pointer" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.3379 2.66028L21.9657 0.288086L12.561 9.69275L3.15637 0.288086L0.78418 2.66028L10.1888 12.0649L0.78418 21.4696L3.15637 23.8418L12.561 14.4371L21.9657 23.8418L24.3379 21.4696L14.9332 12.0649L24.3379 2.66028Z" fill="#929090"></path>
          </svg>
          <div className=" w-[50%] py-[50px] px-[40px] hidden md:block ">
            <div className="mb-8">
              <p className="text-[32px] text-[#555555] font-superaExtraBold">
                Talk to our Relationship <br /> Manager!
              </p>
            </div>
            <div>
              <div className="mb-8">
                <img src={logo2} className="w-[50%]" />
              </div>
              <div>
                <img src={SaleParter} className="w-[50%]" />
              </div>
            </div>
          </div>
          <div className="md:w-[50%] p-[20px] grid justify-center items-center">


            <form>
              <div className="my-5 mt-0">
                <input className="border-b border-[#BABABA] placeholder-[#101010] md:w-[75%] w-[100%] py-1" placeholder="Your Name" type="text" onChange={(e)=>setEnquiryForm((prev)=>({...prev , name: e.target.value}))} value={enquiryForm?.name} />
              </div>
              <div className="my-5 mb-1">
                <input className="border-b border-[#BABABA] appearance-none placeholder-[#101010] md:w-[75%] w-[100%] py-1" placeholder="Enter Your Number" type="number" onChange={(e)=>setEnquiryForm((prev)=>({...prev , number: e.target.value}))} value={enquiryForm?.number} />
              </div>
              <div className="my-5">
                <input className="border-b border-[#BABABA] appearance-none placeholder-[#101010] md:w-[75%] w-[100%] py-1" placeholder="Email ID" type="email" onChange={(e)=>setEnquiryForm((prev)=>({...prev , email: e.target.value}))} value={enquiryForm?.email} />
              </div>
              <div className="flex items-center md:w-[75%] w-[90%]">
                <input type="checkbox" className="h-4 w-4" onChange={(e) => setEnquiryForm((prev) => ({...prev, checkbox: e.target.checked}))} value={enquiryForm?.checkbox} />
                <p className="text-[10px] ml-2">
                  I agree to receive newsletters, or relevant marketing content
                  and Sushma Elementa Terms and Conditions
                </p>
              </div>
              <div className="my-5 mb-0">
                <button onClick={(e)=>handleSubmit(e)} className="md:w-[75%] w-[100%] py-1 bg-[#101010] rounded-full text-white text-center" type="submit">
                  Submit
                </button>
              </div>
            </form>


          </div>
        </div>
      </div>
    </>
  );
}

export default EnquiryModel;
