import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MENU from "../../constant";

// Images and Icons
import logo from "../../assets/images/logo.png";
import icon from "../../assets/images/humburger.png";

const pageContent = {

  "/price": [
    {
      name: "Price",
      url: "#priceList",
    },
    {
      name: "Payment Structure",
      url: "#paymentStructure",
    },
    {
      name: "Current Offers",
      url: "#currentOffers",
    },
  ],

  "/plan": [
    {
      name: "Unit Plan",
      url: "#unitPlans"
    },
    {
      name: "Site Plans",
      url: "#sitePlans"
    },
    {
      name: "Tower Plan",
      url: "#towerPlans"
    },
  ]
  
};

function NavMenu() {

  const [activeSection, setActiveSection] = useState("");
  const [navBarTwo, setNavBarTwo] = useState(false);
  const [tabOpen, setTabOpen] = useState(-1);
  const location = useLocation();
  const subMenuContent = pageContent[location.pathname] || null

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentContent = pageContent[location.pathname];
      if (!currentContent) return;
  
      for (let i = 0; i < currentContent.length; i++) {
        const sectionId = currentContent[i].url.replace("#", "");
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);
  

  return (
    <>
      {/* First */}

      <div
        className={`fixed z-10  w-full ${
          scrolled? "bg-[#173F63]" : `${location.pathname == "/" ? 'bg-transparent': 'bg-[#173F63]'}`}`}>
        <div className="w-full h-full px-[5%] py-3 relative">
          <div className="flex justify-between">
            <div className="">
              <Link to="/" onClick={scrollToTop}>
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <div
              className={`w-[100%] text-white lg:text-[14px] items-center  ${
                navBarTwo === false ? "flex" : "invisible"
              }`}
            >
              <div className="w-full lg:block hidden">
                <ul className="h-[100%] flex justify-evenly text-[18px] items-center">
                  {MENU?.map((menu, index) => {
                    return (
                      <li key={index} className={`${location.pathname == menu?.url? "text-[#FFC267]": "text-white"} hover:text-[#FFC267]`}>
                        
                        {menu?.url.includes("#") ? (
                        <a href={menu.url}
                          onClick={(e) => { e.preventDefault();
                            const [path, hash] = menu.url.split("#");
                            if (location.pathname !== path) {
                              window.location.href = menu.url;
                            } else {
                              const target = document.getElementById(hash);
                              if (target) {
                                target.scrollIntoView({ behavior: "smooth" });
                              }
                            }
                          }} 
                          className="cursor-pointer" >
                          {menu?.name}
                        </a>
                          ) : (
                            <Link to={menu?.url} onClick={scrollToTop}>
                              {menu?.name}
                            </Link>
                          )}


                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div
              className="items-center grid justify-items-end cursor-pointer"
              onClick={() => setNavBarTwo(true)}
            >
              <img src={icon} className="" />
            </div>
          </div>



          {subMenuContent && (
            <div className=" w-[75%] rounded-bl-3xl rounded-br-3xl py-2 bg-white drop-shadow-xl absolute top-full z-50 flex justify-around translate-x-[-50%] left-[50%]">
              {subMenuContent?.map((item , index) => (
                // <div key={index} className="cursor-pointer rounded-full px-8 text-[#173F63] font-superaExtraBold text-[22px] py-1 hover:bg-[#C17B11] hover:text-white">
                //   <a href={item?.url}>
                //     {item?.name}
                //   </a>
                // </div>
                <div key={index} className={`cursor-pointer rounded-full px-8 font-superaExtraBold text-[22px] py-1 ${activeSection === item.url.replace("#", "") ? "bg-[#C17B11] text-white" : "text-[#173F63] hover:bg-[#C17B11] hover:text-white"}`} >
                  <a href={item?.url}>
                    {item?.name}
                  </a>
                </div>

              ))}
            </div>
          )}

          
        </div>
      </div>

      {/* Second */}

      <div
        className={`bg-[#173F63] py-4 z-20 fixed w-full ${
          navBarTwo === false ? "hidden" : "hidden lg:flex"
        } text-white justify-around`}
      >
        <div className="w-[15%] flex items-center ">
          <Link to="/" onClick={scrollToTop}>
            <img src={logo} className="" />
          </Link>
        </div>
          {MENU?.map((menu, index) => {
            return (
              <>
                {menu?.menu?.length ? (
                  <div key={index}>
                    <div className="font-superaBold text-[18px] py-3 hover:text-[#FFC267]">
                      {menu?.url.includes("#") ? (
                        <a
                          href={menu.url}
                          onClick={(e) => {
                            e.preventDefault();
                            const [path, hash] = menu.url.split("#");
                            if (location.pathname !== path) {
                              window.location.href = menu.url;
                            } else {
                              const target = document.getElementById(hash);
                              if (target) {
                                target.scrollIntoView({ behavior: "smooth" });
                              }
                            }
                          }}
                          className="cursor-pointer"
                        >
                          {menu?.name}
                        </a>
                      ) : (
                        <Link to={menu?.url} onClick={scrollToTop}>
                          {menu?.name}
                        </Link>
                      )}
                    </div>

                    <ul className="grid gap-y-2">
                      {menu?.menu?.map((subMenu, index) => (
                        <li
                          key={index}
                          className="cursor-pointer group hover:text-[#FFC267]"
                        >
                          <Link to={subMenu?.url} className="flex gap-2">
                            {subMenu?.icon} {subMenu?.name}
                          </Link>
                          {subMenu?.button}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </>
            );
          })}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          cursor="pointer"
          onClick={() => setNavBarTwo(false)}
        >
          <path
            d="M0.981 16L0 15.019L7.019 8L0 0.981L0.981 0L8 7.019L15.019 0L16 0.981L8.981 8L16 15.019L15.019 16L8 8.981L0.981 16Z"
            fill="white"
          ></path>
        </svg>
      </div>

      {/* Third */}

      <div
        className={`bg-black/50 w-screen h-screen fixed ${
          navBarTwo == false ? "hidden" : "block lg:hidden"
        } z-30`}
      >
        <div className="w-[75%]  bg-gray-800 h-screen absolute right-0 top-0 p-5">
          <div className=" flex items-center justify-between mb-6">
            <div className="">
              <Link to="/" onClick={scrollToTop}>
                <img src={logo} className="sm:w-[75%] w-[65%]" />
              </Link>
            </div>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-[20px] md:h-[20px] xs:w-[18px] xs:h-[18px] w-[16px] h-[16px]"
                viewBox="0 0 16 16"
                fill="none"
                cursor="pointer"
                onClick={() => setNavBarTwo(false)}
              >
                <path
                  d="M0.981 16L0 15.019L7.019 8L0 0.981L0.981 0L8 7.019L15.019 0L16 0.981L8.981 8L16 15.019L15.019 16L8 8.981L0.981 16Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
          <div className=" overflow-scroll h-[80%] text-white sm:text-[16px] xxs:text-[14px] text-[12px]">
            <ul>                        
              {MENU?.map((menu, index) => {
                return (
                  <li key={index} className="overflow-hidden">
                    <div
                      className="border-b border-b-gray-600 py-3 px-2 flex justify-between items-center"
                      onClick={() => setTabOpen(tabOpen == index ? -1 : index)}
                    >
                      {menu?.url.includes("#") ? (
                        <a
                          href={menu.url}
                          onClick={(e) => {
                            e.preventDefault();
                            const [path, hash] = menu.url.split("#");
                            setNavBarTwo(false);
                            if (location.pathname !== path) {
                              window.location.href = menu.url;
                            } else {
                              const target = document.getElementById(hash);
                              if (target) {
                                target.scrollIntoView({ behavior: "smooth" });
                              }
                            }
                          }}
                          className="cursor-pointer"
                        >
                          {menu?.name}
                        </a>
                      ) : (
                        <Link to={menu?.url} onClick={() => setNavBarTwo(false)}>
                          {menu?.name}
                        </Link>
                      )}
                      
                      {menu?.menu.length !== 0 && (
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          className={`w-5 h-5 ${
                            tabOpen == index ? "rotate-0" : "rotate-[-180deg]"
                          } duration-500`}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path fill="none" d="M0 0h24v24H0V0z"></path>
                          <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                        </svg>
                      )}
                    </div>

                    {menu?.menu.length !== 0 && (
                      <div
                        className={`px-6 duration-500 ${
                          tabOpen !== index
                            ? "h-[0px] opacity-0 duration-500"
                            : "duration-500 opacity-100 py-4"
                        }`}
                      >
                        <ul className="text-[15px]">
                          {menu?.menu?.map((subMenu, index) => (
                            <li key={index} className="py-2">
                              {subMenu?.button ? (
                                subMenu?.button
                              ) : (
                                <Link to={subMenu?.url} className="flex gap-2 items-center">
                                  <div>{subMenu?.icon}</div>
                                  {subMenu?.name}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div
          className="w-[25%] h-screen"
          onClick={() => setNavBarTwo(false)}
        ></div>
      </div>
    </>
  );
}

export default NavMenu;
