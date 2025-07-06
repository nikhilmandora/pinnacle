import React, { useCallback, useEffect, useState } from "react";

// Images and Icons
import rectangle from "../../assets/images/Group6135.png";
import squar from "../../assets/images/plansbottom.webp";
import bhkTower from "../../assets/images/towerplanmap.webp";
import bhkTower2 from "../../assets/images/bhkTower2.webp";
import bhkTower3 from "../../assets/images/bhkTower3.webp";
import axios from "axios";

function TowerPlans() {
  
  const [imgChange, setImgChange] = useState(1);

  const [ showData , setShowData ] = useState([]);

  const handleShowData = useCallback(async()=>{

    try {

      const response = await axios.get("http://localhost:3000/web/tower_plans_read?status=true");

      if(response?.data?.status == true){
        setShowData(response?.data?.data);
      }

    } catch(error) {
      console.log("handleShowDataError:->" , error)
    }

  }, [])

  useEffect(()=>{
    handleShowData()
  }, [handleShowData])

  return (
    <>
      <div id="towerPlans" className="scroll-mt-[22vh] md:my-16 my-8">
        <div className=" py-2 md:mb-16 mb-8">
          <div className="mx-auto my-2">
            <p className="text-[26px] font-superaBold text-[#1C1B1A] text-center">
              TOWER PLANS
            </p>
          </div>
          <div className="mx-auto my-2">
            <p className="text-[14px] text-[#5A5454] text-center px-4 mb-4">
              Click on the buttons below to view the tower plans in detail!
            </p>
          </div>
          <div className=" md:flex items-center">
            <div className=" md:w-[50%]">

              {showData?.map((showingData , index)=>(

              <div className={`${imgChange == index + 1? 'bg-[#173F63] text-white border-none':'border'}  border-[#474536] text-[#173F63] mx-auto table py-2 my-6 w-[200px] md:w-[50%] rounded-full text-center font-superaBold cursor-pointer`}
              onClick={() => setImgChange(index + 1)} >
                {showingData?.button}
              </div>
              
              ))}

            </div>

            <div className="border border-gray-300 md:rounded-bl-[40px] md:rounded-tl-[40px] rounded-[40px] md:rounded-tr-none md:rounded-br-none pl-[2.5%] md:w-[50%] h-[320px] flex justify-center items-center">
              <img src={imgChange == 1 ? bhkTower : imgChange == 2 ? bhkTower2 : bhkTower3} />     
            </div>
          </div>
        </div>

        <div className="flex">
          <img src={rectangle} className=" md:block hidden" />
          <img src={squar} className=" md:hidden block" />
        </div>
      </div>
    </>
  );
}

export default TowerPlans;
