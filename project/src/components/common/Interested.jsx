import React, { useState } from "react";
import EnquiryModel from "./EnquiryModel";

// Images and Icons
import Arrow5 from "../../assets/images/VectorArrow5.png";

function Interested() {
  const [enquiryPopup, setEnquiryPopup] = useState(false);

  return (
    <>
      <div className="bg-[#143C60] items-center justify-around my-10 lg:py-10 md:py-8 md:flex hidden">
        <p className="lg:text-[26px] md:text-[22px] text-white font-semibold">
          Are you interested in this Property?
        </p>
        <button onClick={()=> setEnquiryPopup(true)} className="bg-white py-2 px-5 flex items-center rounded-full text-[14px]">
          Connect With Us
          <div className="pl-2">
            <img src={Arrow5} className="h-[8px]" />
          </div>
        </button>
      </div>
      <EnquiryModel open={enquiryPopup} setEnquiryPopup={setEnquiryPopup} type="Connect with us" />
    </>
  );
}

export default Interested;
