import React from "react";
import { bgFooter, svgFooter } from "../assets/images/footer/footer";

const Footer = () => {
  return (
    <div
      className="w-full h-[850px] mt-[120px] max-sm:h-[425px] max-sm:mt-[46px] max-sm:mb-8"
      style={{
        backgroundImage: "url(" + bgFooter + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%"
      }}
    >
      <div className=" h-[23px] px-[376.5px] flex-col justify-center max-sm:px-[15px]">
        <div className="pt-20 mb-[23px] max-sm:pt-[71px] ">
          <img src={svgFooter.title} className="block"></img>
        </div>
        <div className="flex justify-center max-sm:w-[84px] max-sm:mx-auto">
          <img src={svgFooter.connect}></img>
        </div>
        {/* contact */}
        <div className="my-16 text-[16px] flex flex-col items-center justify-center w-full text-[#FFF] max-sm:text-[14px] max-sm:my-4 tracking-[0.024px] max-sm:tracking-[0.035px]">
          <div className="flex h-8 leading-8 mb-2 max-sm:h-[17px] max-sm:leading-[17px]">
            <img src={svgFooter.map} alt="map" className="mr-2 w-8 h-8 max-sm:w-4 max-sm:h-4"/>
            <span className=" font-normal  ">98 Hang Gai, Hoan Kiem, Hanoi, Vietnam</span>
          </div>
          <div className="flex h-8 leading-8 mb-2 max-sm:h-[17px] max-sm:leading-[17px]">
            <img src={svgFooter.mail} alt="mail" className="mr-2 w-8 h-8 max-sm:w-4 max-sm:h-4"/>
            <span className=" font-normal ">Info@connektrip.com</span>
          </div>
          <div className="flex h-8 leading-8 max-sm:h-[17px] max-sm:leading-[17px]">
            <img src={svgFooter.phone_active} alt="phone" className="mr-2 w-8 h-8 max-sm:w-4 max-sm:h-4"/>
            <span className=" font-normal ">+84 969 678 760</span>
          </div>
        </div>
        {/* icon contact */}
        <div className="flex justify-center mb-4">
        <img src={svgFooter.phone} alt="phone-no-active" className="mr-8 w-8 h-8 max-sm:w-4 max-sm:h-4"/>
        <img src={svgFooter.instagram} alt="instagram" className="mr-8 w-8 h-8 max-sm:w-4 max-sm:h-4"/>
        <img src={svgFooter.tiktok} alt="tiktok" className="mr-8 w-8 h-8 max-sm:w-4 max-sm:h-4"/>
        <img src={svgFooter.facebook} alt="facebook" className="w-8 h-8 max-sm:w-4 max-sm:h-4"/>
        </div>
        <p className="flex justify-center text-[#FFF] text-[12px] font-normal max-sm:tracking-[0.048px]">(c) 2022 Published by Okhub</p>
      </div>
    </div>
  );
};

export default Footer;
