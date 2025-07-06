import React, { useState, useEffect, useRef } from "react";

// Images and Icons
import s1_img from "../assets/images/group5346.png";
import Icon1 from "../assets/images/vector12.png";
import Icon2 from "../assets/images/vector11.png";
import Icon3 from "../assets/images/group5307.png";
import Icon4 from "../assets/images/group5309.png";

function ReadMore() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [tapData, setTapData] = useState([
    { count: 0, text: "Acres Land Area", icon: Icon1, endValue: 8 },
    { count: 0, text: "Luxury Homes", icon: Icon2, endValue: 650 },
    { count: 0, text: "Towers | S+36", icon: Icon3, endValue: 6 },
    { count: 0, text: "Sq ft Club House", icon: Icon4, endValue: 100000 },
  ]);
  const staticsRef = useRef(null);

  useEffect(() => {
    const currentRef = staticsRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!hasAnimated) {
            setHasAnimated(true);
            startCounterAnimation();
          }
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasAnimated]);

  const startCounterAnimation = () => {
    const duration = 1300; // Animation duration
    const stepTime = 20; // Time per step
    const steps = Math.ceil(duration / stepTime);

    const updateCount = (endValue, index) => {
      let startValue = 0;
      const stepValue = endValue / steps;

      const interval = setInterval(() => {
        startValue += stepValue;
        if (startValue >= endValue) {
          startValue = endValue;
          clearInterval(interval);
        }
        setTapData((prev) => {
          const newData = [...prev];

          let formattedValue;
          if (endValue % 1 === 0) {
            // For whole numbers
            formattedValue = Math.floor(startValue).toLocaleString();
          } else {
            // For decimal numbers
            formattedValue = startValue.toFixed(1).toLocaleString();
          }

          // Add leading zero for numbers less than 10
          if (endValue < 10 && endValue % 1 === 0) {
            formattedValue = formattedValue.padStart(2, "0");
          }

          newData[index].count = formattedValue;
          return newData;
        });
      }, stepTime);
    };

    tapData.forEach((item, index) => updateCount(item.endValue, index));
  };

  return (
    <div id="aboutUs" className='scroll-mt-20'>
      <div className="mt-4">
        <div className="bg-[#0B263F] w-[100%] bg-[url(/images/31494dfa-2bce-4198-a3b5-afd0a09a2709.png)] bg-cover md:flex md:p-[60px] xxs:m-auto pt-2 pb-4">
          <div className="md:w-[35%] xxs:w-[45%] flex flex-wrap justify-center mx-auto">
            <img src={s1_img} className="object-contain" />
            <p className="text-[#FFC267] lg:text-[35px] md:text-[32px] text-center mt-4 sm:text-[30px] text-[20px] font-superaBold">
              LUXURY APARTMENTS
            </p>
          </div>
          <div className="md:w-[65%] xxs:px-[20px] flex flex-wrap content-between xxs:my-2 md:my-0">
            <div className="text-white pt-2 font-superaBook md:text-[17px] xxs:text-[14px] md:px-[30px] text-justify">
              Sushma Elementa Kasauli is offering beautifully designed
              residential property in the hills of Kasauli. The property is been
              located in Kasauli, Solan. Sushma Elementa Kasauli is fully RERA
              Registered Project By Sushma Group The possession of this property
              will start from Dec, 2024. The architects those who have designed
              this property are well experienced in their field.
              <br /> <br />
              Elementa kasauli is offering top notch facilities that will add
              values to your life. There are 8 Towers, 7 Floors and 382 Units in
              totality. The project is been spread over 4.4 acres of green and
              clean land. Sushma Elementa is offering 1 BHK apartment, 2 BHK
              apartment and 1 RK Studio Apartment which you can choose as per
              your needs.
            </div>
          </div>
          
        </div>

        <div className="bg-[#F0F0F0]" ref={staticsRef}>
          <div className="bg-[url(/images/image.png)] bg-cover bg-center bg-no-repeat w-full h-full">
            <div className="2xl:container mx-auto py-[55px] cxs:py-[60px] 3xl:py-[68px]  px-[14px] xs:px-[30px] cmd:px-[45px]">
              <div className="grid grid-cols-2 gap-x-5 gap-y-7 xs:gap-6 cxs:gap-8 md:gap-0 md:flex md:justify-between cmd:justify-around">
                {tapData.map((item, index) => (
                  <div
                    key={index}
                    className={`w-full md:w-auto flex justify-start md:justify-center ${
                      index == 3
                        ? "cmd:border-r-[0px]"
                        : "cmd:border-r-[1.29px]"
                    }  border-[#D8D8D8] pr-[4px] cmd:pr-[2%] lg:pr-[2%] 2xl:pr-[4%]`}
                  >
                    <div className="w-full md:w-auto flex items-center gap-2.5 pb-2.5 sm:pb-1.5 lg:pb-2.5 relative before:absolute before:bottom-0 before:left-0 before:w-[90%] before:h-[1.74px] before:bg-[#C7C7C7] md:before:bg-[#D1A963]">
                      <div className="w-[35px] xs:w-[40px] sm:w-[50px] md:w-[35px] cmd:w-[40px] lg:w-[50px] xl:w-[58px] h-[38px] xs:h-[44px] sm:h-[53px] md:h-[40px] cmd:h-[44px] lg:h-[53px] xl:h-[61px] relative">
                        <img src={item.icon} fill alt="" />
                      </div>
                      <div>
                        <h4 className="text-[25px] leading-[20px] bxxs:text-[32px] xs:leading-[26px] cxs:text-[40px] cxs:leading-[36px] sm:text-[45px] sm:leading-[40px] md:text-[35px] md:leading-[30px] cmd:text-[40px] cmd:leading-[36px] lg:text-[45px] lg:leading-[40px] xl:text-[55px] xl:leading-[49px] font-supera800 text-[#444444] md:text-[#173150] font-superaExtraBold">
                          {item.count}
                        </h4>
                        <div className="text-[13px] cxs:text-[14px] sm:text-[16px] md:text-[14px] cmd:text-[14px] lg:text-[16px] xl:text-[18px] mt-2 leading-tight font-supera700 sm:font-supera600 text-[#474747] md:text-[#1A3453]">
                          {item.text}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadMore;
