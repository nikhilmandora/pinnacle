import React from 'react'
import { Link } from 'react-router-dom'
import MENU from '../../constant'

// Images and Icons
import nivesh from "../../assets/images/Group1148.png"
import footerLogo from "../../assets/images/Group53461.png"
import callIcon from "../../assets/images/Group4002.png"
import instagram from "../../assets/images/instagram.png"
import facebook from "../../assets/images/facebook.png"
import twiter from "../../assets/images/twiter.png"
import printrest from "../../assets/images/printrest.png"
import youtube from "../../assets/images/youtube.png"
import location from "../../assets/images/location.png"

function Footer() {
  return (
    <>
      <div className=' bg-[url(/images/footerImg.png)] bg-cover'>
        <div className=' bg-black/90 md:p-[30px] p-[10px]'>
            <div className=''>
                <div className='flex justify-center  items-center gap-6'>
                    <div className='text-white text-[8px] font-superaBook '>
                        <a href="#">
                            <img src={nivesh} className='' />
                            Rera No -PBRERA-SAS79-REA1009
                        </a>
                    </div>
                    <div className='border-[1px] border-white/50 h-[60px]'></div>
                    <div className=''>
                        <a href="#">
                            <img src={footerLogo} className='' />
                        </a>
                    </div>
                </div>

                <hr className='lg:my-4 md:my-2 my-1'/>

                <div className=''>
                    <div className='text-white text-[12px]  font-superaBook my-2'>
                        <ul className='flex flex-wrap gap-4 lg:gap-6 justify-center'>
                            {MENU?.map((menu , index)=>{
                                return(
                                    <li key={index}>
                                        <a href={menu?.url}>{menu?.name}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className=' flex flex-wrap gap-2 justify-center text-[14px] font-superaBook text-white'>
                        <div className=' flex items-center py-1'>
                            <img src={callIcon} className='h-[13px] mr-2' />
                            <a href='tel:+918968066698'>+91 8968066698</a>
                        </div>
                        <div className=' flex items-center py-1'>
                            <img src={callIcon} className='h-[13px] mr-2' />
                            <a href='tel:+919988010405'>+91 9988010405</a>
                        </div>
                        <div className=' flex items-center gap-4 py-1'>
                            <img src={instagram} className='h-[18px] cursor-pointer ' />
                            <img src={facebook} className='h-[18px] cursor-pointer' />
                            <img src={twiter} className='h-[18px] cursor-pointer' />
                            <img src={printrest} className='h-[18px] cursor-pointer' />
                            <img src={youtube} className='h-[18px] cursor-pointer' />
                        </div>
                    </div>
                    
                    <hr className='lg:my-4 md:my-2 my-1'/>

                    <div className=' text-[14px] lg:flex text-white items-center justify-center'>
                        <div className=' flex justify-center items-center'>
                            <p className='sm:text-[16px] text-[14px]'> SALES PARTNERS </p>
                            <img src={location} className='px-2 h-[16px]' />
                            <p className='text-[#FC6602]'>REALTY&nbsp;</p>
                            <p className='text-[#1EC8EC]'>NIVESH :&nbsp;</p>
                        </div> 
                        <a href="https://maps.app.goo.gl/up1TgqUPWjFUQpMz8" target='_blank'>
                            <p className=' text-center lg:text-left sm:text-[14px] text-[12px]'>
                                Showroom No. 12 level 2, UPTOWN insignia PR-7 Airport Road, Zirakpur, Punjab 
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>


        <div className='bg-[#F1F1F1]  px-[50px] py-1 lg:text-[12px] md:text-[10px] text-[8px] lg:flex justify-between text-center lg:text-left'>
            <div className=' lg:block flex justify-center items-center'>
                <ul className='flex lg:gap-8 gap-3'>
                    <li>
                        <a className=''>Disclaimer</a>
                    </li>
                    <li>
                        <a className=''>Term & Conditions</a>
                    </li>
                    <li>
                        <a className=''>Privacy Policy</a> 
                    </li>
                </ul>
            </div>
            <div className=' mt-1'>
                <p className=''>© Copyright 2024 sushma GROUP.&nbsp;REALTY NIVESH All Rights Reserved</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
