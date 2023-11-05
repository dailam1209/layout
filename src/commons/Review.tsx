import React from "react";
import { listImageReview } from "../assets/images/review/review";
import IMAGES from "../assets/images";
import { Rate } from "./Destination";
import "../App.css";

export const Iterm = () => {
  return (
    <>
      {listImageReview.map((image, index) => (
        <div key={index} className=" p-6 gird col-span-1 grid-flow-col">
          <div className="image mr-8">
            <img src={image} alt={`image-${index}`} />
          </div>
          <div>
            <div>
              <p className="text-[20px] font-normal leading-[23.68px] tracking-[0.16px]">
                Lê Hoàng Hà (banking staff)
              </p>
            </div>
            <p className="text-[16px] font-normal leading-[23.68px] tracking-[0.16px]">
              Amet minim mollit non deserunt ullamco est sit aliqua ullamco est
              sit aliqua ullamco est sit aliqua
            </p>
            <p className="text-[14px] font-light leading-normal tracking-[0.14px]">
              “Amet minim mollit non deserunt ests ullamco est sit aliqua”.
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

const Review = () => {
  return (
    <div className="mx-[180px] max-sm:mx-[15px] grid grid-cols-2 gap-8 max-sm:block mt-[147px]">
      <div className="w-[605px]  flex-col">
        <h2 className="text-[47px] h-[83px] items-center flex font-bold text-white leading-normal amx-sm:text-[24px] max-sm:min-w tracking-[0.06px] max-sm:h-[26px]">CUSTOMERS's REVIEW</h2>
        <button className="w-auto h-[48px] rounded-[32px] px-4 py-[14px] bg-gradient-to-r from-[#84C4FF] to-[#5CC4BB] mt-6 top-2">
            <p className="h-[20px] leading-[19.5px] font-bold text-[#000000] whitespace-nowrap">
              Book your trip
            </p>
          </button>
      </div>
      {listImageReview.map((image, index) => (
        <div
          key={index}
          className="w-[604px] p-6 gird grid-rows-1 h-[260px] bg-review  text-white flex items-start "
        >
          <div className="image mr-8 min-w-[212px] h-[212px]">
            <img
              src={image}
              alt={`image-${index} `}
              className="min-w-full h-full"
            />
          </div>
          <div className="h-[212px] w-full flex-col justify-between">
            <div className="mb-[28px]">
              <p className="text-[20px] font-medium leading-normal tracking-[0.03px] mb-1">
                Lê Hoàng Hà (banking staff)
              </p>
              <Rate />
            </div>
            <p className="text-[16px] font-normal leading-[23.68px] tracking-[0.16px] mb-[28px]">
              Amet minim mollit non deserunt ullamco est sit aliqua ullamco est
              sit aliqua ullamco est sit aliqua
            </p>
            <p className="text-[14px] font-light h-[34px] flex  items-center leading-normal tracking-[0.14px]">
              “Amet minim mollit non deserunt ests ullamco est sit aliqua”.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review;
