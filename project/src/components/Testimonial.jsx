import React, { useEffect, useState } from "react";

// Images and Icons
import partition from "../assets/images/group4969.png";
import invertedComa from "../assets/images/invertedComa.png";
import stars from "../assets/images/Stars.png";
import profilePic from "../assets/images/blankprofile.webp";
import axios from "axios";

function Testimonial() {

  const [changeComment, setChangeComment] = useState(0);

  const [testimonialArray, seTestimonialArray] = useState([]);

  useEffect(() => {

    const fetchData = async () => {

      try {
        
        const { data } = await axios.get('http://localhost:3000/web/testimonial_show?status=true');
        
        if (data.status) {
          seTestimonialArray(data.data);
        }

      } catch (error) {
        alert("Can't Show Data");
      }
    };

    fetchData();
    
  }, []); 

  useEffect(() => {

    const intervel = setInterval(() => {

      setChangeComment((prev) => {

        if(!testimonialArray?.length) return 0; 

      return  prev == testimonialArray?.length - 1 ? 0 : prev + 1;

      });

    }, 2000);

    return () => clearInterval(intervel);

  }, [testimonialArray?.length]);

  return (
    <>
      <div className="lg:mt-10 bg-[url(/images/rectangle2892.png)] bg-cover h-[90vh] mb-[20px]">
        <div className=" bg-[url(/images/rectangle2895.png)] bg-cover h-[90vh] grid items-center p-6 md:p-0">
          <div className=" text-white md:text-[36px] text-[28px] font-superaExtraBold text-center">
            TESTIMONIAL
          </div>

          <div className=" md:flex hidden items-center">
            <div className=" w-[50%] justify-center items-center flex">
              <div className="inline-table">
                {testimonialArray?.map((testimonial, index) => (
                  <div
                    key={index}
                    onClick={() => setChangeComment(index)}
                    className={`border border-white mb-2 bg-white/25 ${
                      changeComment == index
                        ? "bg-white/50 text-black"
                        : "bg-black/25 text-white"
                    } flex cursor-pointer items-center lg:pl-6 md:pl-5 lg:pr-16 md:pr-14 lg:py-3 md:py-2 rounded-md`}
                  >
                    <div className="">
                      <img
                        src={profilePic}
                        className="rounded-full h-[45px] w-[45px] object-cover"
                      />
                    </div>
                    <div className=" pl-4">
                      <p className=" text-[14px] font-superaBold">
                        {testimonial.name}
                      </p>
                      <p className=" text-[9px]">{testimonial.work}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <img
              src={partition}
              className="lg:h-[370px] md:h-[300px] hidden md:block "
            />

            <div className=" w-[50%] justify-center items-center flex">
              <div className="lg:w-[60%] md:w-[70%] inline-table ">
                <div className=" flex justify-center">
                  <img src={invertedComa} className="md:h-[40px] h-[30px] " />
                </div>
                <div className="text-white md:text-[14px] text-[10px] font-superaBook my-3 ">
                  {testimonialArray[changeComment]?.comment}
                </div>
                <hr className="w-[60%] my-3 " />
                <div className="">
                  <img src={stars} className="md:h-[20px] h-[15px]" />
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <div className=" mx-auto my-3 sm:my-6 w-[90%] sm:w-[70%]">
              <div className="p-[3px] h-[60px] w-[60px] mx-auto mb-2 ">
                <img src={profilePic} className=" rounded-full" />
              </div>
              <div className=" text-white">
                <p className="text-[14px] text-center  font-superaBold">
                  {testimonialArray.length ? testimonialArray[changeComment]?.name : "KUCH BHI"}
                </p>
                <p className="text-[9px] text-center ">
                  {testimonialArray.length ? testimonialArray[changeComment]?.work : "KUCH BHI"}
                </p>
              </div>
            </div>

            <div className=" sm:w-[70%] w-[95%] mx-auto">
              <div className="">
                <div className=" flex justify-center">
                  <img src={invertedComa} className="h-[30px]" />
                </div>
                <div className="text-white sm:text-[14px] text-[12px] font-superaBook sm:my-3 my-2  text-center">
                  {testimonialArray.length ? testimonialArray[changeComment]?.comment : "KUCH BHI"}
                </div>
                <div className="">
                  <img src={stars} className="sm:h-[20px] h-[15px] mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
