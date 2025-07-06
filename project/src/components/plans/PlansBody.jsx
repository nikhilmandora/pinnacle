import React, { useEffect, useState } from "react";

// Images and Icons

import leftCArrow from "../../assets/images/Group1168.png";
import rightCArrow from "../../assets/images/Group1167.png";
import map1 from "../../assets/images/image15.png";
import map2 from "../../assets/images/image13.png";
import map3 from "../../assets/images/image11.png";
import model3D from "../../assets/images/house-interior-and-exterior.jpg";

const PlansBody = () => {

  const [ otherDetails , setOtherDetails ] = useState([]);
  const [ otherDetailsT , setOtherDetailsT ] = useState([]);
  const [ otherDetailsZ , setOtherDetailsZ ] = useState([]);
  const [ areaData , setAreaData ] = useState({});
  const [ selectedType , setSelectedType ] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0);

  const [ model , setModel ] = useState(true);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % productArray.length;
    setCurrentIndex(nextIndex);
    setOtherDetails(productArray[nextIndex]);
  };
  
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + productArray.length) % productArray.length;
    setCurrentIndex(prevIndex);
    setOtherDetails(productArray[prevIndex]);
  };

  useEffect(() => {
    setOtherDetails(productArray[currentIndex]);
  }, [currentIndex]);

  const productArray = [
     {
      name: "3BHK",
      plansDetails: [
        {
          sqft: "2300-2500",
            types: [
              {
                "Type 1": {
                  image: map1,
                  reraCarpet: "500",
                  balcony: "100",
                  external: "50",
                  common: "200"
                }
              }
            ]
        }
      ]
    },
    {
      name: "3BHK+S",
      plansDetails: [
        {
          sqft: "2500-3000",
            types: [
              {
                "Type 1": {
                  image: map2,
                  reraCarpet: "510",
                  balcony: "110",
                  external: "55",
                  common: "220"
                },
                "Type 2": {
                  image: map3,
                  reraCarpet: "550",
                  balcony: "150",
                  external: "70",
                  common: "250"
                }
              }
            ]
        }
      ]
    },
    {
      name: "4BHK+S",
      plansDetails: [
        {
          sqft: "3000-3500",
            types: [
              {
                "Type 1": {
                  image: map3,
                  reraCarpet: "600",
                  balcony: "120",
                  external: "90",
                  common: "270"
                },
                "Type 2": {
                  image: map2,
                  reraCarpet: "1000",
                  balcony: "200",
                  external: "100",
                  common: "1000"
                },
                "Type 3": {
                  image: map3,
                  reraCarpet: "1500",
                  balcony: "300",
                  external: "150",
                  common: "300"
                }
              }
            ]
        }
      ]
    }
  ]

  useEffect(() => {
    if (productArray.length > 0) {
      setOtherDetails(productArray[0]);
    }
  }, []);

  useEffect(() => {
    if (otherDetails?.plansDetails?.length > 0) {
      setOtherDetailsT(otherDetails.plansDetails[0]);
    }
  }, [otherDetails]);

  useEffect(() => {
    if (otherDetailsT?.types?.length > 0) {
      setOtherDetailsZ(otherDetailsT.types[0]);
      setAreaData(otherDetailsT.types[0]['Type 1']);
    }
  }, [otherDetailsT]);

  return (
    <>
      <div id="unitPlans" className="mt-[40px] scroll-mt-[24vh]">
        <div className="text-[26px] text-[#003353] text-center font-superaBold">
          PLANS
        </div>
        <div className="text-[14px] text-[#5A5454] text-center my-2 px-2">
          Explore the pinnacle floor plans, Site plan & Tower plans
        </div>
        
        <div className="pt-4">
          
          <div className=" mx-auto md:flex md:justify-between md:px-[10%] px-[5%] my-3">
          <div className={`${model == true? "flex" : "opacity-0"} justify-between text-[14px] md:text-[16px]`}>
          {productArray?.map((product, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index); 
                setOtherDetails(product); 
                setSelectedType(0);
              }}
              className={`${
                index === currentIndex
                  ? "bg-[#003353] text-white" 
                  : "bg-[#EFEFEF] text-[#4B4B4B]" 
              } py-1 px-4 rounded-md sm:mr-8`}
            >
              {product?.name}
            </button>
          ))}
        </div>
            <div className="">
              <div onClick={()=>setModel(!model)} className="border border-[#003353] md:flex hidden rounded-sm">
                <div className={`${model == true ? "bg-[#003353] text-white " : "bg-white text-[#003353]"} py-1 px-2 text-[14px] sm:text-[16px] rounded-sm cursor-pointer`}>
                  2D View
                </div>
                <div className={`${model == true ? "bg-white text-[#003353]" : "bg-[#003353] text-white"} py-1 text-[14px] sm:text-[16px] px-2 cursor-pointer `}>
                  3D View
                </div>
              </div>
              <div className="md:hidden flex justify-evenly mt-2 border-b border-b-[#808080]">
                <div className="text-[#003353] text-[14px] border-b border-b-[#003353] cursor-pointer">
                  2D View
                </div>
                <div className="text-[#808080] text-[14px] border-b border-b-[#808080] cursor-pointer">
                  3D View
                </div>
              </div>
            </div>
          </div>

          <div className={`${model == true ? "block" : "hidden"}`}>
          <div className="md:flex md:px-[8%] px-[10%] lg:justify-evenly md:justify-between items-center relative ">
            <img
              src={leftCArrow}
              onClick={handlePrev}
              className="cursor-pointer absolute top-[50%] left-[1%] translate-y-[-50%] h-[50px] w-[50px] hidden md:block"
            />
            <img
              src={rightCArrow}
              onClick={handleNext}
              className="cursor-pointer absolute top-[50%] right-[1%] translate-y-[-50%] h-[50px] w-[50px] hidden md:block"
            />

            <div className="relative">
              <img
                src={Object.values(otherDetailsZ)[0]?.image}
                className="object-contain mx-auto w-[50%] md:w-[auto]"
              />
              <img
                src={leftCArrow}
                className=" absolute top-[50%] left-[-10%] translate-y-[-50%] h-[35px] w-[35px] md:hidden block"
              />
              <img
                src={rightCArrow}
                className=" absolute top-[50%] right-[-10%] translate-y-[-50%] h-[35px] w-[35px] md:hidden block"
              />
            </div>
            <div className=" mx-auto">
              <div className="bg-[#003353] text-white rounded-md py-2 px-6 hidden md:inline-block">
                {otherDetails?.plansDetails?.map((productsT , index)=>(
                <p key={index} onLoad={()=>setOtherDetailsT(productsT)}>{productsT?.sqft} Sq.Ft.</p>
                ))}
              </div>
              <div className="lg:my-3 my-1">
                <p className="text-[#003353] font-superaBold md:text-[18px] text-[16px]">
                  EXCLUSIVE {otherDetails?.name} APARTMENT
                </p>
              </div>
              <div className="lg:mt-3 mt-1">
                <p className="text-[#837F7F] md:text-[18px] text-[16px] font-superaBold">
                  {otherDetailsT?.sqft} Sq.Ft.
                </p>
              </div>
              <div className="lg:mb-3 mb-1">
                <p className="text-[#888884] md:text-[16px] text-[14px]">
                  Where comfort meets happiness, everyday!
                </p>
              </div>
              {Object.entries(otherDetailsZ).map(([key, value], index) => (
              <button key={index} 
              onClick={() => {
                setSelectedType(index)
                setAreaData(value);
                // setOtherDetailsZ({ [key]: value });
              }}
              className={`${selectedType == index ? "bg-[#003353]" : "bg-gray-400"}  font-superaBook me-2 text-[12px] text-white py-1 px-3 rounded-md lg:my-3 my-1`}>
                {key}
              </button>
              ))}
              <div className=" flex lg:my-3 my-1">
                <div className=" w-[50%]">
                  <p className="text-[#737373] text-[14px] underline">
                    Rera Carpet Area
                  </p>
                  <p className="text-[#003353] font-superaBold text-[20px]">
                    {areaData?.reraCarpet || "---"}
                  </p>
                </div>
                <div className="  w-[50%]">
                  <p className="text-[#737373] text-[14px] underline">
                    Balcony Area
                  </p>
                  <p className="text-[#003353] font-superaBold text-[20px]">
                    {areaData?.balcony || "---"}
                  </p>
                </div>
              </div>
              <div className=" flex">
                <div className=" w-[50%]">
                  <p className="text-[#737373] text-[14px] underline">
                    External Wall Area
                  </p>
                  <p className="text-[#003353] font-superaBold text-[20px]">
                    {areaData?.external || "---"}
                  </p>
                </div>
                <div className="  w-[50%]">
                  <p className="text-[#737373] text-[14px] underline">
                    Common Area
                  </p>
                  <p className="text-[#003353] font-superaBold text-[20px]">
                    {areaData?.common || "---"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#FFFCF6] py-4">
            <div className="flex px-[10%] my-3">
              <p className="text-[#363636] font-superaBold inline-block text-nowrap">
                Browse From Here
              </p>
              <div className="border-b border-b-[#898989] w-full"></div>
            </div>
            <div className=" px-[10%] md:flex hidden justify-evenly my-8">
              {productArray?.map((products , index)=>(
              <button key={index}
              onClick={() => {
                setCurrentIndex(index); // Update current index
                setOtherDetails(products); // Update details based on clicked button
              }}
              className={`${
                index === currentIndex
                  ? "bg-[#003353] text-white" // Active button style
                  : "bg-[#EFEFEF] text-[#4B4B4B]" // Inactive button style
              } py-2 lg:w-[25%] w-[30%] rounded-sm font-superaBold text-[14px] relative`}
              >
                {products?.name}
                
              </button>
                ))}
              
            </div>
            <div className=" px-[10%] flex">
              <div className="border border-gray-400 border-l-[5px] border-l-[#003353] rounded-md bg-white">
                <div className="md:flex m-2  items-center gap-1 ">
                  <img src={Object.values(otherDetailsZ)[0]?.image} className="md:h-[50px] h-[80px]  mx-auto"/>
                  <div>
                    <div className="text-[#4B4B4B] font-superaBold  text-center md:text-left">
                      <span className="text-[#003353]"> {otherDetails?.name} </span> 
                      {otherDetailsT?.sqft} Sq.Ft.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

          <div className={`${model == false ? "block" : "hidden"} flex justify-center items-center`}>
            <img src={model3D} />
          </div>

        </div>

      </div>
    </>
  );
};

export default PlansBody;
