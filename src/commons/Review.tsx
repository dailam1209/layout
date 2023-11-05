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
            <img src={image.url} alt={`image-${index}`} />
          </div>
          <div>
            <div>
              <p className="text-[20px] font-normal leading-[23.68px] tracking-[0.16px]">
                Lê Hoàng Hà (banking staff)
              </p>
            </div>
            <p className="text-[16px] font-normal leading-[23.68px] tracking-[0.16px]">
            {image.comment}
            </p>
            <p className="text-[14px] font-light leading-normal tracking-[0.14px]">
              {image.feel}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

const Review = () => {
  return (
    <div className="sm:mx-[180px] max-sm:mx-[15px] grid grid-cols-2 gap-8 max-sm:block mt-[147px] max-sm:mt-[64.53px] max-sm:grid-cols-1">
      <div className="sm:w-[605px]  flex-col  max-sm:min-w-min">
        <h2 className="text-[47px] h-[83px] items-center flex font-bold text-white leading-normal max-sm:text-[24px] max-sm:min-w tracking-[0.06px] max-sm:h-[26px]">
          CUSTOMERS's REVIEW
        </h2>
        <button className="w-auto h-[48px] rounded-[32px] px-4 py-[14px] bg-gradient-to-r from-[#84C4FF] to-[#5CC4BB] mt-6 top-2 max-sm:py-[10px] max-sm:mt-4 max-sm:mb-6 box-btn">
          <p className="h-[20px] leading-[19.5px] font-bold text-[#000000] whitespace-nowrap">
            Book your trip
          </p>
        </button>
      </div>
      {listImageReview.map((image, index) => (
        <div
          key={index}
          className="w-[604px] p-6 gird grid-rows-1 h-[260px] bg-review  text-white flex items-start max-sm:w-auto  max-sm:p-2 max-sm:block max-sm:h-auto max-sm:mb-2"
        >
          <div className="flex"> 

          {/* image */}

            <div className="image mr-8 min-w-[212px] h-[212px] max-sm:min-w-[82px] max-sm:h-[82px] max-sm:mr-2">
              <img
                src={image.url}
                alt={`image-${index} `}
                className="w-full h-full"
              />
            </div>
          {/* title for mobile */}
            <div className="hidden max-sm:block">
              <div className="mb-[28px] max-sm:mb-2 ">
                <p className="text-[20px] font-medium leading-normal tracking-[0.03px] mb-1 max-sm:text-[14px] max-sm:h-5 line-clamp-1 max-sm:line-clamp-1 ">
                  Lê Hoàng Hà (banking staff)
                </p>
                <Rate />
              </div>
              <p className="text-[16px] font-normal leading-[23.68px] tracking-[0.16px] mb-[28px] max-sm:leading-normal max-sm:text-[14px] max-sm:line-clamp-2 max-sm:tracking-[0.035px] max-sm:mb-0 max-sm:mt-auto">
                {image.feel}
              </p>
            </div>
          </div>
          {/* for pc */}
          <div className="h-[212px] w-full flex flex-col justify-between max-sm:hidden">
            <div className="mb-[28px] ">
              <p className="text-[20px] font-medium leading-normal tracking-[0.03px] mb-1 max-sm:text-[14px] max-sm:h-5 line-clamp-1 max-sm:line-clamp-1">
                Lê Hoàng Hà (banking staff)
              </p>
              <Rate />
            </div>
            <p className={`text-[16px] font-normal leading-[23.68px] tracking-[0.16px] mb-[28px]`}>
            {image.comment}
            </p>
            <p className="text-[14px] font-light h-[34px] leading-normal mb-0 tracking-[0.14px] normal">
            {image.feel}
            </p>
          </div>
          <p className="hidden text-[14px] font-light h-[34px]  items-center max-sm:leading-normal tracking-[0.14px] max-sm:mt-2 max-sm:block normal">
          {image.feel}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Review;
