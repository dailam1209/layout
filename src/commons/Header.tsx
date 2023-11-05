import React, { useEffect, useState } from "react";
import IMAGES from "../assets/images";
import Logo from "./Logo";
import { SVGS } from "../assets/svgs";
import COLORS from "../assets/colors";
import Connect from "./Connect";
import Contact from "./Contact";

export interface headerProps {
  image: any,
  bg: any,
}

const Header: React.FC<headerProps> = ({image, bg}) => {
  const [ number, setNumber ] = useState<number>(1);

  const handleShow = () => {
    const getShow = document.querySelector('.show');
    console.log('getShow', getShow);
    getShow?.classList.add('max-sm:block')
    getShow?.classList.remove('max-sm:ml-[-700px]')
    getShow?.classList.add('max-sm:ml-0')
  };

  const handleHidden = () => {
    const getShow = document.querySelector('.show');
    console.log('getShow remove', getShow);
    getShow?.classList.add('max-sm:ml-[-700px]')
  };


  
  return (
    <div
      className="bg max-h-[850px] h-[850px] w-full max-sm:h-[320px] sm:px-[180px] max-sm:pl-[15px] relative"
      style={{
        backgroundImage: "url(" + image + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%"
      }}
    >
      <div className={`absolute top-[${bg}px] min-w-full right-0 max-sm:top-[227.5px]`}>
      <img src={SVGS.blu_bg} alt='blu-bg' className="w-full"></img>
    </div>
    <nav className="flex w-full justify-between h-[121px] items-start pt-4 max-md:h-[35.06px] max-md:items-center">
        <div className="sm:flex max-sm:hidden w-[141px] h-[103px] top-1">
          <Logo />
        </div>
        <div className="sm:hidden max-sm:flex" onClick={() => handleShow()}>
          <img src={SVGS.tabbar} alt="farme"></img>
        </div>
        <div className={`show z-20 flex max-sm:transition-all max-sm:ease-in-out max-sm:duration-300 max-sm:ml-[-700px]  items-center h-full font-semibold leading-5 max-sm:fixed max-sm:w-full max-sm:top-0 max-sm:left-0 max-sm:bg-[#002634] max-sm:hidden`}>
          <div className="h-[27px] sm:hidden flex justify-between mx-[30px] mt-8">
            <div ></div>
            <div onClick={() => handleHidden()}>
              <img src={SVGS.close} alt="close" className="w-[100%] h-[25.6px] ml-auto"/>
            </div>
          </div>
          <div className="sm:hidden h-[1px] bg-[#F6F6F6] opacity-50 mx-[30px]"></div>
          <ul className="flex  sm:items-center h-full font-semibold leading-5 max-sm:flex-col max-sm:mt-[23.77px]  ">
            <li className="list-none relative flex justify-center max-sm:block max-sm:ml-0 max-sm:h-[39.25px] max-sm:bg-white max-sm:leading-[39.25px] max-sm:mb-[25.6px]  px-5 cursor-pointer">
              <a className="no-underline text-[#DDB152] max-sm:ml-1 max-sm:text-[#002634]">Home</a>
              {number === 1 && <img src={SVGS.farme} alt="farme" className="absolute top-[24px] max-sm:hidden"></img>}
            </li>
            <li className="list-none relative flex justify-center  max-sm:block max-sm:ml-0 max-sm:h-[39.25px] max-sm:leading-[39.25px] max-sm:mb-[25.6px] px-5 cursor-pointer">
              <a className="no-underline  text-white pr-[5px] max-sm:ml-1">Destinations</a>
              <img src={SVGS.chevron_down} alt={"check_down"} className="max-sm:hidden" />
              {number === 2 && <img src={SVGS.farme} alt="farme" className="absolute top-[24px] max-sm:hidden"></img>}
            </li>
            <li className="list-none relative flex justify-center  max-sm:block max-sm:ml-0 max-sm:h-[39.25px] max-sm:leading-[39.25px] max-sm:mb-[25.6px] px-5 cursor-pointer">
              <a className="no-underline text-white pr-[5px] max-sm:ml-1">Travel styles</a>
              <img src={SVGS.chevron_down} alt={"check_down"} className="max-sm:hidden" />
              {number === 3 && <img src={SVGS.farme} alt="farme" className="absolute top-[24px] max-sm:hidden"></img>}
            </li>
            <li className="list-none relative flex justify-center  max-sm:block max-sm:ml-0 max-sm:h-[39.25px] max-sm:leading-[39.25px] max-sm:mb-[25.6px] px-5 cursor-pointer">
              <a className="no-underline text-white max-sm:ml-1">About</a>
              {number === 4 && <img src={SVGS.farme} alt="farme" className="absolute top-[24px] max-sm:hidden"></img>}
            </li>
            <li className="list-none relative flex justify-center  max-sm:block max-sm:ml-0 max-sm:h-[39.25px] max-sm:leading-[39.25px] max-sm:mb-[25.6px] px-5 cursor-pointer">
              <a className="no-underline text-white pr-[5px] max-sm:ml-1">Blog</a>
              <img src={SVGS.chevron_down} alt={"check_down"} className="max-sm:hidden" />
              {number === 5 && <img src={SVGS.farme} alt="farme" className="absolute top-[24px] max-sm:hidden"></img>}
            </li>
            <li className="list-none relative flex justify-center  max-sm:block max-sm:ml-0 max-sm:h-[39.25px] max-sm:leading-[39.25px] max-sm:mb-[25.6px] px-5 cursor-pointer">
              <a className="no-underline text-white">Contact</a>
              {number === 6 && <img src={SVGS.farme} alt="farme" className="absolute top-[24px] max-sm:hidden"></img>}
            </li>
            <Connect/>
          </ul>
        </div>
        {/* mobile logo */}
        <div className="sm:hidden max-sm:block max-md:w-[48px] max-md:h-[35.06px] ">
          <Logo />
        </div>
        {/* call in PC */}
        <div className="block mt-[9px] max-sm:mt-0 max-sm:pr-[15px]">
          <div className="items-center flex mb-1 pb-1 max-sm:h-[35.06px] max-sm:mb-0 max-sm:pb-0">
            <img src={SVGS.phone} className="max-sm:w-[15px] max-sm:leading-[20px] max-sm:h-[20px] items-center" />
            <p className="h-5 text-base leading-5 font-normal text-white pl-[2px] max-sm:hidden">
              +84 969 678 760
            </p>
          </div>
          <button className="w-full h-[48px] rounded-[32px] px-4 py-[14px] bg-gradient-to-r from-[#84C4FF] to-[#5CC4BB] mt-4 top-2 max-sm:hidden">
            <p className="h-[20px] leading-[19.5px] font-bold text-[#000000] whitespace-nowrap">
              PLAN MY TOUR
            </p>
          </button>
        </div>
        {/* end call PC */}
        {/* <div className="sm:hidden max-sm:block">
      <Connect/>
    </div> */}
      </nav>
      <div className="block items-start from-neutral-700 text-[101px] h-[436px] mt-[100px] font-bold text-white max-sm:text-[30px] max-sm:mt-[42px]">
        <h1 className="leading-[125.24px] h-[248px] max-sm:leading-[37.2px] max-sm:h-[74px]">BEGINS
          <span className="px-5 max-sm:px-[3.8px]"></span>
          <span className=" bg-gradient-to-b from-[#2E3192] to-[#1BFFFF] text-transparent bg-clip-text">TOUR</span>  WITH
          <p>A SINGLE STEP</p>
        </h1>
        <div className="mt-[44px] max-sm:mt-[14px] max-sm:ml-[-8px]">
          <img src={SVGS.discovery} className="sm:w-[137px] sm:h-[143px] max-sm:w-[62px] max-sm:h-[52px]" alt="dicovery"></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
