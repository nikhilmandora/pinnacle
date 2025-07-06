import React, { useState } from 'react'

// Images and Icons
import downloadImg from "../../assets/images/Creative.png"
import buildingImg2 from "../../assets/images/smallscreen.webp"
import EnquiryModel from '../common/EnquiryModel'



function Download() {

      const [enquiryPopup , setEnquiryPopup] = useState(false);
  

  return (
    <>
      <div className=' bg-[#173F63] relative flex justify-between md:mb-[30px] sm:mb-[350px] xs:mb-[280px] mb-[170px] pb-20 md:pb-0'>
        <div className='md:w-[35%] w-full text-white'>
            <div className='md:text-[32px] text-[26px] text-center md:mt-20 my-10 font-superaBold'>
              DOWNLOADS
            </div>
            <div className=' md:w-[50%] w-full flex flex-wrap md:justify-center md:items-center justify-evenly mx-auto lg:mt-8 md:mt-6'>  
                <div onClick={()=> setEnquiryPopup(true)} className='border border-white rounded-md py-3 my-3 hidden md:flex items-center justify-center text-[20px] w-[220px] font-superaBold hover:bg-[#C17B11] cursor-pointer hover:text-[#173F63] group'>
                  <svg width="38" height="35" className="group-hover:stroke-[#173F63] stroke-[#fff] lg:mr-4 md:mr-3 mr-2 lg:group-hover:stroke-[#173F63]" viewBox="0 0 38 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.2096 7.56543H31.0669C33.4912 7.56543 34.7034 7.56543 35.4561 8.31051C36.2104 9.0522 36.2105 10.2494 36.2105 12.6455V24.499C36.2105 26.8934 36.2104 28.0906 35.4561 28.834C34.7034 29.5791 33.4912 29.5791 31.0669 29.5791H30.2096M7.92076 7.56543H7.0635C4.63916 7.56543 3.42699 7.56543 2.67431 8.31051C1.91992 9.0522 1.91992 10.2494 1.91992 12.6455V24.499C1.91992 26.8934 1.91992 28.0906 2.67431 28.834C3.42528 29.5791 4.63745 29.5791 7.0635 29.5791H7.92076M23.3515 10.9521H14.7789M23.3515 17.7256H14.7789M23.3515 24.499H14.7789M30.2096 26.1924V9.25879C30.2096 6.06511 30.2096 4.46997 29.2049 3.47766C28.2002 2.48535 26.5851 2.48535 23.3515 2.48535H14.7789C11.5453 2.48535 9.93019 2.48535 8.92548 3.47766C7.92076 4.46997 7.92076 6.06511 7.92076 9.25879V26.1924C7.92076 29.3861 7.92076 30.9812 8.92548 31.9735C9.93019 32.9658 11.5453 32.9658 14.7789 32.9658H23.3515C26.5851 32.9658 28.2002 32.9658 29.2049 31.9735C30.2096 30.9812 30.2096 29.3861 30.2096 26.1924Z" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    Brochure
                </div>
                <div onClick={()=> setEnquiryPopup(true)} className=' md:hidden'>
                  <div className='border border-white h-[65px] w-[65px] flex justify-center items-center rounded-[50%] mx-auto'>
                    <svg width="38" height="35" className="stroke-[#fff] lg:group-hover:stroke-[#173F63]" viewBox="0 0 38 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.2096 7.56543H31.0669C33.4912 7.56543 34.7034 7.56543 35.4561 8.31051C36.2104 9.0522 36.2105 10.2494 36.2105 12.6455V24.499C36.2105 26.8934 36.2104 28.0906 35.4561 28.834C34.7034 29.5791 33.4912 29.5791 31.0669 29.5791H30.2096M7.92076 7.56543H7.0635C4.63916 7.56543 3.42699 7.56543 2.67431 8.31051C1.91992 9.0522 1.91992 10.2494 1.91992 12.6455V24.499C1.91992 26.8934 1.91992 28.0906 2.67431 28.834C3.42528 29.5791 4.63745 29.5791 7.0635 29.5791H7.92076M23.3515 10.9521H14.7789M23.3515 17.7256H14.7789M23.3515 24.499H14.7789M30.2096 26.1924V9.25879C30.2096 6.06511 30.2096 4.46997 29.2049 3.47766C28.2002 2.48535 26.5851 2.48535 23.3515 2.48535H14.7789C11.5453 2.48535 9.93019 2.48535 8.92548 3.47766C7.92076 4.46997 7.92076 6.06511 7.92076 9.25879V26.1924C7.92076 29.3861 7.92076 30.9812 8.92548 31.9735C9.93019 32.9658 11.5453 32.9658 14.7789 32.9658H23.3515C26.5851 32.9658 28.2002 32.9658 29.2049 31.9735C30.2096 30.9812 30.2096 29.3861 30.2096 26.1924Z" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </div>
                  <p className=' mt-2 font-superaBold text-center'>
                    Brochure
                  </p>
                </div>
                <div onClick={()=> setEnquiryPopup(true)} className='border border-white rounded-md py-3 my-3 hidden md:flex items-center justify-center text-[20px] w-[220px] font-superaBold hover:bg-[#C17B11] cursor-pointer hover:text-[#173F63] group'>
                <svg width="36" height="36" viewBox="0 0 36 36" className="stroke-[#fff] lg:mr-4 md:mr-3 mr-2 group-hover:stroke-[#173F63] fill-none" xmlns="http://www.w3.org/2000/svg"><path d="M18.1875 11.7057L27.8932 6.85284L18.1875 2V18.1761"  stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.7169 18.1603L2.82005 23.2397C2.5711 23.3807 2.36403 23.5853 2.21997 23.8326C2.0759 24.0798 2 24.3608 2 24.647C2 24.9331 2.0759 25.2141 2.21997 25.4614C2.36403 25.7086 2.5711 25.9132 2.82005 26.0543L16.5698 33.9159C17.0616 34.1999 17.6195 34.3493 18.1874 34.3493C18.7553 34.3493 19.3132 34.1999 19.805 33.9159L33.5547 26.0543C33.8037 25.9132 34.0107 25.7086 34.1548 25.4614C34.2989 25.2141 34.3748 24.9331 34.3748 24.647C34.3748 24.3608 34.2989 24.0798 34.1548 23.8326C34.0107 23.5853 33.8037 23.3807 33.5547 23.2397L24.6578 18.1765M9.27433 19.5515L27.1004 29.7425M27.1004 19.5515L9.29051 29.7425" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    Site Plans
                </div>
                <div onClick={()=> setEnquiryPopup(true)} className=' md:hidden'>
                  <div className='border border-white h-[65px] w-[65px] flex justify-center items-center rounded-[50%] mx-auto'>
                  <svg width="36" height="36" viewBox="0 0 36 36" className="stroke-[#fff]  fill-none" xmlns="http://www.w3.org/2000/svg"><path d="M18.1875 11.7057L27.8932 6.85284L18.1875 2V18.1761"  stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.7169 18.1603L2.82005 23.2397C2.5711 23.3807 2.36403 23.5853 2.21997 23.8326C2.0759 24.0798 2 24.3608 2 24.647C2 24.9331 2.0759 25.2141 2.21997 25.4614C2.36403 25.7086 2.5711 25.9132 2.82005 26.0543L16.5698 33.9159C17.0616 34.1999 17.6195 34.3493 18.1874 34.3493C18.7553 34.3493 19.3132 34.1999 19.805 33.9159L33.5547 26.0543C33.8037 25.9132 34.0107 25.7086 34.1548 25.4614C34.2989 25.2141 34.3748 24.9331 34.3748 24.647C34.3748 24.3608 34.2989 24.0798 34.1548 23.8326C34.0107 23.5853 33.8037 23.3807 33.5547 23.2397L24.6578 18.1765M9.27433 19.5515L27.1004 29.7425M27.1004 19.5515L9.29051 29.7425" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </div>
                  <p className=' mt-2 font-superaBold text-center'>
                    Site Plans
                  </p>
                </div>
                <div onClick={()=> setEnquiryPopup(true)} className='border border-white rounded-md py-3 my-3 hidden md:flex items-center justify-center text-[20px] w-[220px] font-superaBold hover:bg-[#C17B11] cursor-pointer hover:text-[#173F63] group'>
                  <svg width="20" height="28" className="fill-[#fff] group-hover:fill-[#173F63] lg:mr-4 md:mr-3 mr-2  " xmlns="http://www.w3.org/2000/svg"><path d="M19.2679 4.28369C19.677 4.28369 20.0088 3.95194 20.0088 3.54276V1.07297C20.0088 0.663785 19.677 0.332031 19.2679 0.332031H0.991425C0.582243 0.332031 0.250488 0.663785 0.250488 1.07297V3.83592C0.250488 4.2451 0.582243 4.57686 0.991425 4.57686H6.25701C7.94314 4.57686 9.23687 5.19171 10.0216 6.25952H0.991425C0.582243 6.25952 0.250488 6.59128 0.250488 7.00046V9.47025C0.250488 9.87943 0.582243 10.2112 0.991425 10.2112H10.7938C10.41 12.4393 8.75866 13.8314 6.17798 13.8314H0.991425C0.582243 13.8314 0.250488 14.1632 0.250488 14.5723V17.8455C0.250488 18.0523 0.336931 18.2497 0.488885 18.39L10.68 27.7972C10.8168 27.9235 10.9963 27.9937 11.1825 27.9937H16.2803C16.9548 27.9937 17.2784 27.1658 16.7828 26.7083L7.46665 18.1087C12.1901 17.9642 15.5641 14.8118 16.0071 10.2112H19.2679C19.677 10.2112 20.0088 9.87943 20.0088 9.47025V7.00046C20.0088 6.59128 19.677 6.25952 19.2679 6.25952H15.6441C15.4288 5.54693 15.1328 4.88595 14.7641 4.28369H19.2679Z"></path></svg>
                    Price List
                </div>
                <div onClick={()=> setEnquiryPopup(true)} className=' md:hidden'>
                  <div className='border border-white h-[65px] w-[65px] flex justify-center items-center rounded-[50%] mx-auto'>
                    <svg width="20" height="28" className="fill-[#fff]  " xmlns="http://www.w3.org/2000/svg"><path d="M19.2679 4.28369C19.677 4.28369 20.0088 3.95194 20.0088 3.54276V1.07297C20.0088 0.663785 19.677 0.332031 19.2679 0.332031H0.991425C0.582243 0.332031 0.250488 0.663785 0.250488 1.07297V3.83592C0.250488 4.2451 0.582243 4.57686 0.991425 4.57686H6.25701C7.94314 4.57686 9.23687 5.19171 10.0216 6.25952H0.991425C0.582243 6.25952 0.250488 6.59128 0.250488 7.00046V9.47025C0.250488 9.87943 0.582243 10.2112 0.991425 10.2112H10.7938C10.41 12.4393 8.75866 13.8314 6.17798 13.8314H0.991425C0.582243 13.8314 0.250488 14.1632 0.250488 14.5723V17.8455C0.250488 18.0523 0.336931 18.2497 0.488885 18.39L10.68 27.7972C10.8168 27.9235 10.9963 27.9937 11.1825 27.9937H16.2803C16.9548 27.9937 17.2784 27.1658 16.7828 26.7083L7.46665 18.1087C12.1901 17.9642 15.5641 14.8118 16.0071 10.2112H19.2679C19.677 10.2112 20.0088 9.87943 20.0088 9.47025V7.00046C20.0088 6.59128 19.677 6.25952 19.2679 6.25952H15.6441C15.4288 5.54693 15.1328 4.88595 14.7641 4.28369H19.2679Z"></path></svg>
                  </div>
                  <p className=' mt-2 font-superaBold text-center'>
                    Price List
                  </p>
                </div>
            </div>
        </div>

        <img src={downloadImg} className=' absolute lg:h-[200px] md:h-[170px] h-[100px] top-[55%] left-[45%] translate-x-[-50%] translate-y-[-50%] md:block hidden'/>

        <div className='bg-[url(/images/Group5622.png)] hidden md:flex  bg-cover w-[60%] h-[80vh] justify-self-end'></div>

        <div className=' md:hidden absolute rounded-xl top-[80%] left-[50%] translate-x-[-50%] w-[70%]'>
          <img src={buildingImg2} className='rounded-xl w-[100%] h-[60%]'/>
        </div>
      </div>
      <EnquiryModel open={enquiryPopup} setEnquiryPopup={setEnquiryPopup} type="Downloads" />
    </>
  )
}

export default Download
