import React, { useState } from 'react'

// images and Icons
import call from "../../assets/images/Group1074.png"
import mail from "../../assets/images/Group4953.png"
import address from "../../assets/images/Group4954.png"

function Address() {

    const [mapSwitch , setMapSwitch] = useState(false);

  return (
    <>
      <div className='my-20 '>
    
        <div className='relative'>

            <div className={mapSwitch? "block" : "hidden" }>
                <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d223.55541509848058!2d73.03961052881576!3d26.297774629788698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x39418d00010f6d67%3A0x72302132f49ef0b4!2zRGFyYSBIb3NwaXRhbC0gIHBzeWNoaWF0cnksIERl4oCmIOCkpuCkvuCksOCkviDgpLngpYngpLjgpY3gpKrgpL_gpJ_gpLIg4KSq4KWN4KS44KWN4KSv4KWN4KSa4KS_4KSF4KSf4KWN4KSw4KWALCDgpKHgpYfigKY!3m2!1d26.297725!2d73.0397107!4m5!1s0x39418ded26b9504f%3A0x91462e9405988121!2sAdiyogi%20Technosoft%20Pvt.%20Ltd.%20-%20IT%20Company%20in%20Jodhpur%2C%20opp.%20Rajasthan%20Patrika%20Office%2C%20Bhadwasiya%2C%20Paota%2C%20Jodhpur%2C%20Rajasthan!3m2!1d26.2977295!2d73.0397076!5e0!3m2!1sen!2sin!4v1739878046304!5m2!1sen!2sin" width="100%" height="260px" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className=''></iframe>
            </div>   
        
            <div className={mapSwitch? "hidden" : "block" }>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186.5873468203725!2d73.03942915052176!3d26.29772504931692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418d00010f6d67%3A0x72302132f49ef0b4!2sDara%20Hospital-%20psychiatry%2C%20De-addiction%2C%20Sex%20Diseases!5e1!3m2!1sen!2sin!4v1739878378051!5m2!1sen!2sin" width="100%" height="260px" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className=''></iframe>
            </div>

            <div className='absolute top-0 left-[50%] translate-x-[-50%]'>
                <div className='flex justify-center'>
                    <div onClick={()=>setMapSwitch(true)} className={`${mapSwitch? "bg-[#173F63] text-white" : "bg-white"} py-2 px-4 rounded-bl-3xl md:w-[200px] sm:w-[180px] w-[130px] text-center md:text-[16px] sm:[14px] text-[12px] cursor-pointer font-superaBold`}>
                        Near By
                    </div>
                    <div onClick={()=>setMapSwitch(false)} className={`${mapSwitch? "bg-white" : "bg-[#173F63] text-white"} rounded-br-3xl py-2 px-4 md:w-[200px] sm:w-[180px] w-[130px] text-center md:text-[16px] sm:[14px] text-[12px] cursor-pointer font-superaBold`}>
                        Google Maps
                    </div>
                </div>
            </div>
        </div>




        <div className='md:bg-[#173F63]  text-white md:flex md:justify-around text-[14px] md:text-center font-superaBook items-center my-20 md:px-6'>

            <div className='md:w-[33.3%] bg-[#173F63] w-full relative   my-4  md:my-0 md:h-[100px] h-[75px] flex items-center md:justify-center md:pl-0 pl-[5%]'>
                <img src={call} className='md:absolute md:top-[-38%] md:left-[50%] md:h-[50px] md:w-[50px] md:translate-x-[-50%] md:translate-y-0  h-[40px] w-[40px]'/>
                <div className=' md:block md:pl-0 pl-[5%] md:pr-0 pr-[1%]'>
                    <div className=' my-1'>
                        <a href='tel:+918968066698'>
                            <p className='md:text-[16px] text-[14px]'>
                                +91 - 8968066698
                            </p>
                        </a>
                    </div>
                    
                    <div className=' my-1'>
                        <a href='tel:+919988010405'>
                            <p className='md:text-[16px] text-[14px]'>
                                +91 - 9988010405
                            </p>
                        </a>
                    </div>
                </div>
            </div>


            <div className='md:w-[33.3%] bg-[#173F63] w-full relative  my-4 md:my-0 md:h-[100px] h-[75px] flex items-center md:justify-center md:pl-0 pl-[5%]'>
                <img src={mail} className='md:absolute md:top-[-38%] md:left-[50%] md:h-[50px] md:w-[50px] md:translate-x-[-50%] md:translate-y-0  h-[40px] w-[40px]'/>
                <div className=' md:pl-0 pl-[5%] md:pr-0 pr-[1%]'>
                    <a href='mailto:sales@realtynivesh.com'>
                        <p className='md:text-[16px] text-[14px]'>
                            sales@realtynivesh.com
                        </p>
                    </a>
                </div>
            </div>


            <div className='md:w-[33.3%] bg-[#173F63] w-full relative  my-4 md:my-0 md:h-[100px] h-[75px] flex items-center md:justify-center md:pl-0 pl-[5%] md:pr-0 pr-[1%]'>
                <img src={address} className='md:absolute md:top-[-38%] md:left-[50%] md:h-[50px] md:w-[50px] md:translate-x-[-50%] md:translate-y-0  h-[40px] w-[40px]'/>
                <a href='https://maps.app.goo.gl/up1TgqUPWjFUQpMz8' target='_blank' className='md:text-[16px] text-[14px]  md:pl-0 pl-[5%] md:pr-0 pr-[1%]'>
                    Showroom No. 12 level 2, UPTOWN insignia PR-7 Airport Road, Zirakpur, Punjab
                </a>
            </div>
        </div>
      </div>
    </>
  )
}

export default Address
