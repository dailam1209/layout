import React, { useEffect, useState } from "react";
import { SVGS } from "../assets/svgs";

export interface flowProps {
    clientBodyWidth: number
}

const Folow: React.FC<flowProps> = ({ clientBodyWidth }) => {


    
  return (
    <div className="folow flex relative mt-28 ml-[180px] max-sm:mx-[15px] max-sm:block max-sm:mt-18">
        <h2 className="hidden h-[83px] font-bold leading-normal text-[50px] text-[#FFFFFF] mb-6 max-sm:text-[24px] max-sm:min-w max-sm:mr-auto  max-sm:h-[47px] max-sm:leading-[26.28px] tracking-[0.06px] max-sm:inline">
            CONNECTING & FOLLOWING
          </h2>
      <div className="flex max-sm:hidden ">
        <img
          src={SVGS.folow_1}
          alt="flow-1"
          className="h-[590px] max-sm:w-full"
        ></img>
      </div>
      <img
        src={SVGS.viet_nam}
        alt="viet-nam"
        className=" absolute text-[140px] top-[550px] w-[633px] h-[210px] left-0 max-sm:hidden"
      ></img>
      <div>
        <img
          src={SVGS.folow_1}
          alt="flow-1"
          className="hidden h-[586px] max-sm:w-auto max-sm:block"
        ></img>
        <div className="ml-[21px] max-sm:ml-0">
          <h2 className="h-[83px] font-bold leading-normal text-[50px] text-[#FFFFFF] mb-6 max-sm:text-[24px] max-sm:min-w max-sm:mr-auto  max-sm:h-[47px] max-sm:leading-[26.28px] tracking-[0.06px] max-sm:hidden">
            CONNECTING & FOLLOWING
          </h2>
          <p className="sm:w-[604px] sm:min-h-full font-bold text-[16px] text-[#FFFFFF] max-sm:h-[94px]  max-sm:line-clamp-4">
            Connek Trip's mission:
            <span className="font-normal text-[#EEEEEE] text-[14px]">
              {" "}
              Create connections between tourists and local cultural values. We
              do everything for a beautiful country Vietnam that is impressed by
              many international friends when it comes to us. We are proud to be
              Vietnamese children, we have many beauties from the image of women
              to famous names. The landscape creates an unforgettable highlight
              for Vietnam
            </span>
          </p>
          <div className="min-w-full mt-[124px] max-sm:relative max-sm:mt-4">
            <div className="max-sm:h-[89.71px] max-sm:w-[230px] max-sm:ml-[60px]">
                <img
                src={clientBodyWidth > 400 ? SVGS.folow_2_2 : SVGS.folow_2_mobile}
                alt="flow-1"
                className=" h-[431px] min-w-full max-sm:h-full "
                ></img>
            </div>
            <img src={SVGS.viet_nam} alt="viet-nam" className="hidden max-sm:block max-sm:absolute text-[24px] w-[109px]  max-sm:top-8"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Folow;
