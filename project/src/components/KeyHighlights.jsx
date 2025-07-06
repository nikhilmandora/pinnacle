import React, { useCallback, useEffect, useState } from "react";

// Images and Icons
import arrow1 from "../assets/images/group2428.png";
import axios from "axios";

function KeyHighlights() {

  const [highlightToggle, setHighlightToggle] = useState(0);

  let imgPath = "http://localhost:3000/assets/keyHighlights/"

  const [ highlightArray , setHighlightArray ] = useState([]);

  const handleShowDetails = useCallback(async()=>{

    try {

      const response = await axios.get("http://localhost:3000/web/key_highlights_read?status=true");

      if(response?.data?.status == true) {
        setHighlightArray(response?.data?.data);
      }

    } catch(error) {
      console.log("handleShowDetailsError:=>" , error);
    }

  } ,[])

  useEffect(()=>{
    handleShowDetails()
  }, [handleShowDetails])

  useEffect(() => {
    const intervalID = setInterval(() => {
      setHighlightToggle((prev) =>
        highlightArray?.length == prev + 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(intervalID);
  }, [highlightArray]);

  return (
    <div>
      <div className="lg:p-[30px] p-[15px] pb-0">
        <p className="md:text-[26px] font-superaExtraBold text-[#123758] text-center text-[22px]">
          KEY HIGHLIGHTS
        </p>
        <p className="md:text-[14px] text-[12px] text-[#5D615B] text-center p-1 mt-1 font-superaBold">
          Your Dream Home Awaits you to Own Exquisite Site in Sushma Belleza
        </p>

        <div className="md:flex mt-8 cursor-pointer hidden">
          {highlightArray?.map((highlights, index) => {
            return (
              <div key={index}
                onClick={() => setHighlightToggle(highlightToggle == index ? index : index)}
                style={{ backgroundImage: `url(${imgPath}${highlights.image})`}}
                className={`${highlightToggle == index ? "w-[50%]" : "w-[10%]"} bg-cover bg-center h-[400px] duration-500`}>
                <div className="bg-black/50 w-full h-full flex flex-wrap content-between relative">
                  <div className="p-3 flex justify-between w-[100%] ">
                    <div className={`${highlightToggle == index? "text-[24px] font-superaBold text-white p-1 pt-2" : "text-white text-[18px] font-superaBold absolute bottom-[36%] translate-y-[-50%] left-[50%] translate-x-[-50%] rotate-[270deg] w-[300px]"} duration-500`}>
                      {highlights?.heading}
                    </div>
                    <div className={`${highlightToggle == index ? "" : "w-[100%]"} flex justify-center`}>
                      <img src={arrow1} className={`${highlightToggle == index ? "h-[60px]" : "h-[35px] flex justify-self-center"} duration-500`} />
                    </div>
                  </div>
                  <div className={`${highlightToggle == index ? "block" : "hidden"} text-white text-[14px] pl-3 pb-6 w-[80%]`}>
                    {highlights?.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {highlightArray?.map((highlights, index) => {
          return (
            <div key={index}
              style={{ backgroundImage: `url(${imgPath}${highlights.image})`}}
              className={`md:hidden bg-cover h-[90vh] px-[15px] py-[20px] flex items-end bg-center mt-4 ${highlightToggle == index ? "block" : "hidden"}`}>
              <div className="bg-white p-[15px] relative after:absolute after:left-0 after:top-full after:bg-center after:h-2 after:w-full after:bg-[url(/images/17fa657947f4da8473307239aa188ce1.png)] after:bg-cover">
                <h3 className="text-[20px] text-[#303030] font-semibold">
                  {highlights?.heading}
                </h3>
                <p className="mt-2 text-[#303030] text-[14px]">
                  {highlights?.description}
                </p>
              </div>
            </div>
          );
        })}


        <div className="flex justify-end md:hidden">
          <div onClick={() => setHighlightToggle((prev) => prev == 0 ? highlightArray.length - 1 : prev - 1)}
            className="border border-gray-400 rounded-md py-1 px-2 m-2 cursor-pointer">
            <svg width="8" height="16" class="group-hover:fill-[#173f63] fill-[#858080]" viewBox="0 0 18 31" xmlns="http://www.w3.org/2000/svg" >
              <path d="M17.0719 2.86381L14.58 0.374226L1.00704 13.9425C0.788251 14.1599 0.614618 14.4184 0.496132 14.7032C0.377647 14.988 0.316649 15.2934 0.316649 15.6018C0.316649 15.9102 0.377647 16.2156 0.496132 16.5004C0.614618 16.7852 0.788251 17.0437 1.00704 17.2611L14.58 30.8364L17.0696 28.3468L4.3304 15.6053L17.0719 2.86381Z"></path>
            </svg>
          </div>
          <div onClick={() => setHighlightToggle((prev) => highlightArray.length == prev + 1 ? 0 : prev + 1)} className="border border-gray-400 rounded-md py-1 px-2 m-2 cursor-pointer" >
            <svg width="8" height="16" class="group-hover:fill-[#173f63] fill-[#858080]" viewBox="0 0 17 31" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.119248 2.86381L2.61118 0.374226L16.1841 13.9425C16.4029 14.1599 16.5765 14.4184 16.695 14.7032C16.8135 14.988 16.8745 15.2934 16.8745 15.6018C16.8745 15.9102 16.8135 16.2156 16.695 16.5004C16.5765 16.7852 16.4029 17.0437 16.1841 17.2611L2.61118 30.8364L0.121594 28.3468L12.8608 15.6053L0.119248 2.86381Z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="p-[50px] shadow-lg hidden md:flex">
        <div className="w-[65%]">
          <div className="text-[#4E4E4E] md:text-[12px] lg:text-[16px]">
            A FEW WORDS ABOUT
          </div>
          <div className="font-bold text-[#173F63] md:text-[20px] lg:text-[28px] font-superaExtraBold">
            THE PINNACLE
          </div>
        </div>
        <div>
          <p className="text-[#565656] pl-2">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default KeyHighlights;
