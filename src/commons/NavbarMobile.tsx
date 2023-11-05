import React from "react";
import { svgNavbarMobile } from "../assets/images/navbarmobile/navmobile";

export interface navbarMobileProps {
    onClick: (section: string) => void
}

export const NavbarMobile = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth"});
      };
    
  return (
    <div className="sm:hidden max-sm:h-[48px] flex justify-between leading-[48px] items-center bg-[#D9D9D9] fixed bottom-0 right-0 left-0">
      <div className="flex justify-between min-h-full  w-[50%] px-12">
        <div className="">
            <a href="#header" onClick={() => scrollToSection("header")}>
                <img src={svgNavbarMobile.home} alt='home' className="h-full"></img>
            </a>
        </div>
        <div className="">
          <img src={svgNavbarMobile.safari} alt='safari' className="h-full"></img>
        </div>
      </div>
      <div className="flex justify-between min-h-full  w-[50%] px-12">
        <div>
          <img src={svgNavbarMobile.document} alt='document' className="h-full"></img>
        </div>
        <div>
          <img src={svgNavbarMobile.user} alt='user' className="h-full"></img>
        </div>
      </div>

        <div className="absolute bottom-5 navbar-mobile p-3 rounded-full">
      <div className="circle-container">
            <img src={svgNavbarMobile.map} alt='user' className="w-7 h-7"></img>
            </div>
      </div>
    </div>
  );
};
