import React from "react";
import { SVGS } from "../assets/svgs";
import "../App.css";
import IMAGES from "../assets/images";

const AboutUs = () => {
  return (
    <div id='about' className="flex mt-[80px] sm:pl-[180px]  sm:pr-[76px] max-sm:px-[15px] max-sm:block max-sm:mt-0">
      <div className=" text-white max-w-[604px] mt-[142px] max-sm:gap-4 max-sm:mt-0">
        <div className="about">
          <h2 className="text-[50px] font-bold leading-[82.5px] max-sm:text-[24px] max-sm:h-[26px] max-sm:leading-[26px] max-sm:mb-4">
            ABOUT US
          </h2>
          <div id="max-sm:multiline-4" className="w-full font-normal text-[16px] multiline leading-[19.5px] tracking-[0.5%] h-[139px]  my-6 max-sm:max-h-[115px] max-sm:tracking-[0.14px]   max-sm:my-0 max-sm:leading-[167.1%] max-sm:multiline-mobile ">
            <p className="max-sm:hidden ">
              If you are planning travel for a vacation in Vietnam with your
              family, your friend group, your spouse or with yourself, you might
              need a personalized trip planner. Connek trip shall be helpful for
              you.<br></br>When traveling, time is a resource you don’t want to waste. Our
              job as your trip consultant is to help you plan your dream
              itineraries, stay up to date the information of travel
              restrictions and changes after Covid-19, get the “Insider”
              knowledge of the destination, protect your from scams and fraud,
              deal with last-minute changes and emergencies, etc. We do our best
              to help you receive the most value for your money. You will have
              complete peace of mind knowing there’re someone take care for you,
              24/7 during your trip, and that is invaluable. “
            </p>
            <p className="hidden font-bold max-sm:block text-[16px] multiline-mobile ">
              Connek Trip's mission:<span className="font-normal text-[#EEEEEE] text-[14px]"> Create connections between tourists and
              local cultural values. We do everything for a beautiful country
              Vietnam that is impressed by many international friends when it
              comes to us. We are proud to be Vietnamese children, we have many
              beauties from the image of women to famous names. The landscape
              creates an unforgettable highlight for Vietnam</span>
            </p>
           
          </div>
          
          <button className="h-[48px] rounded-[24px] px-4 py-[14px] bg-gradient-to-r from-[#84C4FF] to-[#5CC4BB] max-sm:mt-4 max-sm:h-[40px] max-sm:py-[10px] ">
            <p className="h-[20px] leading-[20px] items-center box-shadown-btn font-bold text-[#000000] whitespace-nowrap max-sm:tracking-[0.2px] max-sm:text:[16px]">
              Read more
            </p>
          </button>
        </div>
        <div className="flex justify-between max-sm:mt-[15px] max-sm:gird  max-sm:grid-flow-col max-sm:grid-cols-3 max-sm:h-[113px] max-sm:gap-[50px] max-sm:mb-4">
          <div className="h-[143px]  flex-col mt-[128px] max-sm:mt-0">
            <div className="title mb-4 max-sm:mb-2">
              <p className="text-[38px] h-[57px] font-bold tracking-[0.095px] text-center leading-normal text-white max-sm:text-[20px] max-sm:h-[30px] max-sm:tracking-[0.03px]">
                2500
              </p>
              <p className="text-[16px] h-5 font-normal tracking-[0.08px] text-center leading-normal max-sm:text-[14px] max-sm:h-[34px] max-sm:tracking-[0.0035px] max-sm:leading-4">
                Happy guests
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={SVGS.heart}
                className="w-16 h-[50.29px] max-sm:w-[49.802px] max-sm:h-[40.502px]"
                alt="heart"
              ></img>
            </div>
          </div>
          <div className="h-[143px] flex-col mt-[68px] max-sm:mt-0 max-sm:order-1">
            <div className="title mb-4 max-sm:mb-2">
              <p className="text-[38px] h-[57px] font-bold tracking-[0.095px] text-center leading-normal text-white max-sm:text-[20px] max-sm:h-[30px] max-sm:tracking-[0.03px]">
                8125
              </p>
              <p className="text-[16px] h-5 font-normal tracking-[0.08px] text-center leading-normal max-sm:text-[14px] max-sm:h-[34px] max-sm:tracking-[0.0035px] max-sm:leading-4">
                Trips served
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={SVGS.user}
                className="w-16 h-[50.29px] max-sm:w-[49.802px] max-sm:h-[40.502px]"
                alt="user"
              ></img>
            </div>
          </div>
          <div className="h-[163px] flex-col mt-[1px] max-sm:mt-0">
            <div className="title mb-4 max-sm:mb-2">
              <div className="max-sm:h-[39px]">
                <p className="text-[38px] h-[57px] font-bold tracking-[0.095px] text-center leading-normal text-white max-sm:text-[20px] max-sm:h-[22px] max-sm:tracking-[0.03px] max-sm:leading-[22px]">
                  5
                </p>
                <img
                  src={IMAGES.image_removebg_preview}
                  alt="image-removebg-preview"
                  className="m-auto max-sm:h-[17px]"
                ></img>
              </div>
              <p className="text-[16px] h-5 font-normal tracking-[0.08px] text-center leading-normal max-sm:text-[14px] max-sm:h-[34px] max-sm:tracking-[0.0035px] max-sm:leading-4">
                Tripadvisor rate
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={SVGS.mul_star}
                className="w-16 h-[50.29px] max-sm:w-[34px] max-sm:h-[33px]"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className=" ">
        <img
          src={SVGS.about_us}
          alt={"about-us"}
          className="h-[848px] w-[788px] ml-auto max-sm:ml-0 max-sm:h-full max-sm:w-full"
        ></img>
      </div>
    </div>
  );
};

export default AboutUs;
