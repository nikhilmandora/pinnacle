import React, { useCallback, useEffect, useState } from "react";
import EnquiryModel from "./common/EnquiryModel";
import Marquee from "react-fast-marquee";

// Images and Icons
import call from "../assets/images/call.png";
import whatsapp from "../assets/images/whatsapp.png";
import downloadicon from "../assets/images/download.png";
import arrowButton from "../assets/images/arrowbutton.png";
import building from "../assets/images/building.png";
import rupee from "../assets/images/rupee.png";
import key from "../assets/images/key.png";
import leftArrow from "../assets/images/leftArrow.png";
import rightArrow from "../assets/images/rightArrow.png";
import axios from "axios";

function OurProducts() {

  const [enquiryPopup, setEnquiryPopup] = useState(false);

  const [shareButton, SetShareButton] = useState(false);

  const [productDetail, setProductDetail] = useState(0);

  let imgPath = "http://localhost:3000/assets/products/"

  const [showProduct , setShowProduct] = useState([])

  const handleShowProduct = useCallback(async()=>{

    try {

      const response = await axios.get("http://localhost:3000/web/ourProducts_read?status=true");

      if(response?.data?.status == true) {
        setShowProduct(response?.data?.data)
      }

    } catch(error) {
      console.log("handleShowProductError:=>" , error)
    }

  } , [])

  useEffect(()=>{
    handleShowProduct()
  } , [handleShowProduct])

  return (
    <div id="product" className='scroll-mt-20'>
      <div className="relative">
        <div className="mt-10 px-[60px]">
          <p className=" md:text-[26px] font-superaExtraBold text-[#123758] text-center text-[22px]">
            OUR PRODUCTS
          </p>
          <p className=" md:text-[14px] text-[12px] text-[#5D615B] text-center p-1 mt-1 font-superaBold">
            The pinnacle Offers Luxury 3+1 BHK & 4+1 BHK Apartments In Mohali
            Near Chandigarh
          </p>

          <div className="md:border-b md:border-[#D0CBCB] justify-between py-4 hidden md:flex">
            <div className="flex">
              {showProduct?.map((products, index) => {
                return (
                  <div
                    onClick={()=>setProductDetail(index)}
                    key={index}
                    className={`${productDetail == index? "text-[#173F63]" : "text-[#787878]"} px-[20px] py-1 font-superaExtraBold cursor-pointer`}
                  >
                    {products?.product}
                  </div>
                );
              })}
            </div>

            <div className="px-[20px] text-[20px] font-superaExtraBold text-[#173F63]">
              {`0${productDetail+1} / 0${showProduct?.length}`}
            </div>
          </div>

          <div className="md:border-b md:border-[#D0CBCB] py-4 md:hidden flex justify-evenly">
            {showProduct?.map((product, index)=>{
              return(
                <button key={index} 
                onClick={()=>setProductDetail(index)}
                className={`${productDetail == index? "bg-[url(/images/17fa657947f4da8473307239aa188ce1.png)] text-[#173F63]" : "bg-[#173F63] text-white"} py-2 font-superaBold  bg-cover bg-center rounded-md w-[30%]`}>
                  {product?.product}
                </button>
              )
            })}
          </div>
        </div>

        <div className=" mt-[30px] h-auto">
          <div style={{ backgroundImage: `url(${imgPath}${showProduct[productDetail]?.image})` }} className=" bg-cover lg:h-[100vh] h-[60vh] relative">
            <div className="animate-right-left bg-[url(/images/rectangle2794.png)] bg-cover md:w-[13%] w-[25%] h-[40px] md:text-[18px] text-[14px] flex justify-center items-center absolute top-4 font-superaExtraBold md:tracking-widest text-[#173F63]">
              Selling Fast
            </div>
            <img
              src={leftArrow}
              onClick={() => setProductDetail((prev) => prev == 0 ? showProduct.length - 1 : prev - 1)}
              className=" absolute top-[50%] left-[4%] h-[25px] cursor-pointer"
              />
            <img
              src={rightArrow}
              onClick={()=>setProductDetail((prev)=>showProduct.length == prev + 1 ? 0 : prev + 1)}
              className=" absolute top-[50%] right-[4%] h-[25px] cursor-pointer"
            />
            <div
              onClick={() => SetShareButton(shareButton == true ? false : true)}
              className={`${
                shareButton == true ? "rotate-[360deg]" : "rotate-0"
              } duration-500 bg-[url(/images/group4809.png)] bg-cover h-[40px] w-[40px] cursor-pointer absolute top-4 right-6 font-medium`}
            ></div>
            <div
              className={`overflow-hidden ${
                shareButton == true ? "h-[200px]" : "h-[0px]"
              }  duration-500 absolute right-6 top-16 z-50`}
            >
              <svg className="my-1" viewBox="0 0 64 64" width="38" height="38">
                <circle cx="32" cy="32" r="32" fill="#0965FE"></circle>
                <path
                  d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
                  fill="white"
                ></path>
              </svg>
              <svg className="my-3" viewBox="0 0 64 64" width="38" height="38">
                <circle cx="32" cy="32" r="32" fill="#00aced"></circle>
                <path
                  d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
                  fill="white"
                ></path>
              </svg>
              <svg className="my-3" viewBox="0 0 64 64" width="38" height="38">
                <circle cx="32" cy="32" r="32" fill="#0077B5"></circle>
                <path
                  d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"
                  fill="white"
                ></path>
              </svg>
              <svg className="" viewBox="0 0 64 64" width="38" height="38">
                <circle cx="32" cy="32" r="32" fill="#25D366"></circle>
                <path
                  d="m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"
                  fill="white"
                ></path>
              </svg>
            </div>
            <div className=" text-[14px] w-[50vw] hidden lg:block absolute font-superaBold bottom-8 ml-20">
              Reckoned as the most sought after 2/3/4 BHK Flats & Apartments in
              Zirakpur and appointed with higher-end features, strategic
              location on PR-7, Chandigarh International Airport Road Mohali.
            </div>
            <div className=" bg-[url(/images/group5324.png)] bg-cover h-[125px] w-[125px] absolute top-[3%] right-[35%] font-medium hidden lg:block animate-spin-slow"></div>

            <div className="bg-[#173F63] h-[100%] w-[300px] absolute right-[7%] hidden lg:block">
              <div className="bg-[url(/images/31494dfa-2bce-4198-a3b5-afd0a09a2709.png)] h-[100%] flex flex-wrap content-evenly">
                <div className="bg-white h-[11%] w-[120%] flex justify-center items-center text-[20px] font-superaExtraBold text-[#173F63] overflow-hidden">
                  <Marquee>Ask Us For The Best Offers</Marquee>
                </div>
                <div className=" text-white pl-8">
                  <p className="font-superaBold text-[36px]">
                    HIGH RISE LUXURY APARTMENTS
                  </p>
                  <div className="flex">
                    <p className="text-[35px] font-superaBold">
                      {showProduct[productDetail]?.area}
                    </p>
                    <p className="leading-4 pt-3 pl-2 text-[13px]">
                      SQ FT.
                    </p>
                  </div>
                  <p className="">Ground + S + 36 Storey</p>
                </div>
                <div className="bg-white w-full flex justify-center py-1">
                  <div className="border-r border-[#5251514D] p-1 pr-2 ">
                    <img src={building} className="h-6 m-auto pb-1" />
                    <p className="text-[10px] text-[#505050] text-center">
                      Type
                    </p>
                    <p className="text-[11px] font-superaBold text-[#173F63] text-center">
                      Semi Furnished
                    </p>
                  </div>
                  <div className="p-1 mx-1">
                    <img src={rupee} className="h-6 m-auto pb-1" />
                    <p className="text-[10px] text-[#505050] text-center">
                      Start From
                    </p>
                    <p className="text-[11px] font-superaBold text-[#173F63] text-center">
                      On Request
                    </p>
                    <p className="text-[6px] text-center text-[#173F63] cursor-pointer">
                      T$C Apply
                    </p>
                  </div>
                  <div className="border-l border-[#5251514D] p-1 pl-2">
                    <img src={key} className="h-6 m-auto pb-1" />
                    <p className="text-[10px] text-[#505050] text-center">
                      Hand Over
                    </p>
                    <p className="text-[11px] font-superaBold text-[#173F63] text-center">
                      December 2028
                    </p>
                  </div>
                </div>
                <div className="w-[100%] flex justify-evenly">
                  <a href="tel:+919988010405">
                    <img
                      src={call}
                      className="w-10 h-10 cursor-pointer hover:rounded-full hover:bg-[#C17B11]"
                    />
                  </a>
                  <img
                    src={whatsapp}
                    className="w-10 h-10 cursor-pointer hover:rounded-full hover:bg-[#C17B11]"
                  />
                  <img
                    onClick={() => setEnquiryPopup(true)}
                    src={downloadicon}
                    className="w-10 h-10 cursor-pointer hover:rounded-full hover:bg-[#C17B11]"
                  />
                </div>
                <button
                  onClick={() => setEnquiryPopup(true)}
                  className="bg-white text-[#173F63] flex rounded-md py-1 px-3 text-[14px] font-superaBold ml-4 hover:bg-[#C17B11]"
                >
                  Explore Now
                  <img src={arrowButton} className="h-3 self-center pl-2" />
                </button>
              </div>
            </div>
          </div>

          <div className=" lg:hidden w-[100%] absolute bottom-[-45%]">
            <div className=" w-[80%] mx-auto bg-[#173F63]">
              <div className=" text-white px-[3%] py-2">
                <p className=" sm:text-[32px] text-[22px] font-superaBold my-2 text-center">
                  HIGH RISE LUXURY APARTMENTS
                </p>
                <p className=" sm:text-[24px] text-[16px] font-superaBold my-2 text-center">
                  {showProduct[productDetail]?.area} SQ.FT | GROUND +17 STOREY
                </p>
                <Marquee className="h-6 py-[20px] bg-white text-[#173F63] font-superaExtraBold text-[18px]">
                  Ask Us For The Best Offers
                </Marquee>
              </div>
              <div className="bg-white  flex justify-between py-2">
                <div className=" w-[33.33%] text-center">
                  <img
                    src={building}
                    className=" sm:h-[35px] h-[30px] mx-auto"
                  />
                  <p className=" text-[11px] sm:text-[14px] text-[#173F63] my-1">
                    Type
                  </p>
                  <p className=" text-[#173F63] text-[14px] sm:text-[16px] font-superaBold">
                    SEMI FURNISHED
                  </p>
                </div>
                <div className="border-x-2 border-[#5251514D] w-[33.33%] text-center">
                  <img src={rupee} className=" sm:h-[35px] h-[30px] mx-auto" />
                  <p className=" text-[11px] sm:text-[14px] text-[#173F63] my-1">
                    Start From
                  </p>
                  <p className=" text-[#173F63] text-[14px] sm:text-[16px] font-superaBold">
                    ON REQUEST
                  </p>
                </div>
                <div className=" w-[33.33%] text-center">
                  <img src={key} className=" sm:h-[35px] h-[30px] mx-auto" />
                  <p className=" text-[11px] sm:text-[14px] text-[#173F63] my-1">
                    Hand Over
                  </p>
                  <p className=" text-[#173F63] text-[14px] sm:text-[16px] font-superaBold">
                    DECEMBER 2028
                  </p>
                </div>
              </div>
              <div className=" px-[3%] flex justify-between items-center py-2">
                <div className=" flex">
                  <a href="tel:+919988010405">
                    <img
                      src={call}
                      className=" sm:h-10 sm:w-10 h-8 w-8 cursor-pointer"
                    />
                  </a>
                  <img
                    src={whatsapp}
                    className=" sm:h-10 sm:w-10 h-8 w-8 cursor-pointer sm:mx-4 mx-2"
                  />
                  <img
                    onClick={() => setEnquiryPopup(true)}
                    src={downloadicon}
                    className=" sm:h-10 sm:w-10 h-8 w-8 cursor-pointer"
                  />
                </div>
                <div className="">
                  <button
                    onClick={() => setEnquiryPopup(true)}
                    className="rounded-md sm:text-[14px] py-1.5 px-3 flex bg-white content-center text-[#173F63] text-[10px]"
                  >
                    Enquiry Now
                    <img
                      src={arrowButton}
                      className="self-center sm:h-[15px] h-[12px] ml-2"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnquiryModel open={enquiryPopup} setEnquiryPopup={setEnquiryPopup} type="Our Product" />
    </div>
  );
}

export default OurProducts;
