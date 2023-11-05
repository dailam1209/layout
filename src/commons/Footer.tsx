import React from "react";
import { bgFooter, svgFooter } from "../assets/images/footer/footer";

const Footer = () => {
  return (
    <div
      className="w-full h-[850px] mt-[120px]"
      style={{
        backgroundImage: "url(" + bgFooter + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%"
      }}
    >
      <div className=" h-[23px] px-[376.5px] flex-col justify-center">
        <div className="pt-20 mb-[23px] ">
          <img src={svgFooter.title} className="block"></img>
        </div>
        <div className="flex justify-center">
          <img src={svgFooter.connect}></img>
        </div>
        {/* contact */}
        <div className="my-16 flex flex-col items-center justify-center w-full text-[#FFF]">
          <div className="flex h-8 leading-8 mb-2">
            <img src={svgFooter.map} alt="map" className="mr-2"/>
            <span className="text-[16px] font-normal tracking-[0.024px]">98 Hang Gai, Hoan Kiem, Hanoi, Vietnam</span>
          </div>
          <div className="flex h-8 leading-8 mb-2">
            <img src={svgFooter.mail} alt="mail" className="mr-2"/>
            <span className="text-[16px] font-normal tracking-[0.024px]">Info@connektrip.com</span>
          </div>
          <div className="flex h-8 leading-8">
            <img src={svgFooter.phone_active} alt="phone" className="mr-2"/>
            <span className="text-[16px] font-normal tracking-[0.024px]">+84 969 678 760</span>
          </div>
        </div>
        {/* icon contact */}
        <div className="flex justify-center mb-4">
        <img src={svgFooter.phone} alt="phone-no-active" className="mr-8"/>
        <img src={svgFooter.instagram} alt="instagram" className="mr-8"/>
        <img src={svgFooter.tiktok} alt="tiktok" className="mr-8"/>
        <img src={svgFooter.facebook} alt="facebook" className=""/>
        </div>
        <p className="flex justify-center text-[#FFF]">(c) 2022 Published by Okhub</p>
      </div>
    </div>
  );
};

export default Footer;
