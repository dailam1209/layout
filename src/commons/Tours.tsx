import React, { useState } from "react";
import { titlesHightLine } from "../assets/images/slides/slide";
import { SVGS } from "../assets/svgs";
import { listImage } from "../assets/images/slides/title";
import "../App.css";
import { prototype } from "events";

export interface titleProps {
  number: number;
}

export const TitleForTour: React.FC<titleProps> = ({ number }) => {
  return (
    <ul className="text-center block w-[331px] max-sm:flex max-sm:min-w-max max-sm:text-left">
      {titlesHightLine.map((item, index) => (
        <li
          className={`list-disctour-${index} w-auto max-sm:mr-6  ${
            index === titlesHightLine.length - 1 ? "mb-0" : "mb-4 max-sm:mb-0"
          } h-[17px] text-[14px] leading-[17px] max-sm:w-[290px] max-sm:line-clamp-1 ${
            number !== index
              ? "text-[#FFFF] font-normal disc"
              : " bg-gradient-to-b from-[#84C4FF] to-[#5CC4BB] text-transparent bg-clip-text font-bold"
          } `}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

function Tours() {
  const [numberSlide, setNumberSlide] = useState<number>(0);
  const [widthImage, setWidthImage] = useState<any>(0);
  const [widthTitle, setWidthTitle] = useState<any>(0);
  const lengthImage = listImage.length;

  const handleNextSlide = (type: string) => {
    let warpper = document.querySelector(".wrapper") as HTMLElement;
    let getValudeWidth = document.querySelector(".images");
    let widthFirst = getValudeWidth?.firstElementChild;
    let widthImageCurrent = widthFirst?.clientWidth;
    setWidthImage(widthImageCurrent);
    if (type == "incre") {
      if (numberSlide == lengthImage - 1) {
        setNumberSlide(0);
      } else {
        setNumberSlide(numberSlide + 1);
      }
    } else {
      if (numberSlide == 0) {
        setNumberSlide(lengthImage - 1);
      } else {
        setNumberSlide(numberSlide - 1);
      }
    }
    let tittleCurrent = document.querySelector(
      `.list-disctour-${numberSlide >= 0 ? numberSlide : 0}`
    );
    console.log(numberSlide, tittleCurrent);
    const widthCurrent = tittleCurrent?.clientWidth;
    setWidthTitle(widthCurrent);
  };

  return (
    <div className="max-sm:ml-[15px]">
      <h2 className="h-[83px] font-bold leading-normal text-[50px] ml-[180px] text-[#FFFFFF] mb-6 max-sm:hidden">
        TOURS & EXPERIENCE
      </h2>
      <h2 className="hidden h-[26px] leading-[26px] font-bold text-[24px] text-[#FFFFFF] mb-6 mt-[64.92px] max-sm:block">
        PRODUCT SUPPLY
      </h2>
      <div className="flex max-sm:block">
        {/* hightLine */}
        <div className="hidden max-sm:flex max-sm:overflow-hidden">
          <div
            className="current-title flex duration-1000 w-full"
            style={{
              transform: `translateX(-${numberSlide * 290 +  (numberSlide > 1 ? (numberSlide - 1) * 24 : 0)}px)`
            }}
          >
            <TitleForTour number={numberSlide} />
          </div>
        </div>
        <div className="max-w-[572px] w-full mr-[29px] bg-[#222] relative max-sm:hidden">
          <div className="h-auto max-w-[364px] w-full  mr-7 py-[53px] ml-auto">
            <div className="item-center justify-center ">
              {/* hightLine */}
              <TitleForTour number={numberSlide} />
              {/* road */}
              <div className="w-full flex-col justify-center items-center my-8 max-sm:hidden">
                <div className="w-full flex justify-center">
                  <div className="h-[44px] w-[1px] bg-white" />
                </div>
                <div className="item-center flex justify-center ">
                  <img
                    src={SVGS.farme_no_active}
                    alt="farme"
                    className="text-white my-4 w-[18.36px] h-6"
                  />
                </div>
                <div className="w-full flex justify-center">
                  <div className="h-[44px] w-[1px] bg-white" />
                </div>
              </div>
              {/* button */}
              <div className="h-[48px] w-24 rounded-[81px] item-center flex justify-center bg-[#000] m-auto  ">
                <div
                  className="flex justify-center cursor-pointer"
                  onClick={() => handleNextSlide("pre")}
                >
                  <img src={SVGS.arrow_left} alt="farme" className="p-3" />
                </div>
                <div
                  className="flex justify-center cursor-pointer"
                  onClick={() => handleNextSlide("incre")}
                >
                  <img src={SVGS.arrow_right} alt="farme" className="p-3" />
                </div>
              </div>
              {/* length image current */}
              <div className="mt-4">
                <div className="w-[364px] h-[4px] bg-black ">
                  <div
                    className={`bg-[#FFD579] duration-700 w-[${
                      (numberSlide / lengthImage) * 364
                    }px] h-full`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* images */}
        <div className="wrapper flex flex-1 py-[29px] w-full overflow-hidden max-sm:block max-sm:py-4">
          <div
            className={`images flex w-[100%] duration-1000`}
            style={{
              transform: `translateX(-${
                numberSlide * widthImage +
                (widthImage > 400 ? 32 * numberSlide : 16 * numberSlide)
              }px)`
            }}
          >
            {listImage.map((image, index) => (
              <div
                className={`min-w-[427px] max-sm:min-w-[213px] max-sm:h-[266px] relative ${
                  index !== listImage.length - 1 ? "mr-8 max-sm:mr-4" : "mr-0"
                } `}
              >
                <img
                  src={image}
                  alt={`image-${index}`}
                  className="min-w-full min-h-full max-sm:min-w-full max-sm:h-full "
                />
                <div className="absolute w-full min-h-full left-0 right-0 bottom-0 mt-auto flex-col flex items-center justify-end text-[#FFF] mb-6 max-sm:mb-4">
                  <img
                    src={SVGS.abosolute_image}
                    alt="abosolute_image"
                    className="w-[86px] mb-4 max-sm:w-8 max-sm:mb-3"
                  ></img>
                  <p className="w-[260px] font-normal tracking-[0.035px] sm:leading-normal text-[14px] max-sm:w-[213px] text-center normal max-sm:h-[33px] line-clamp-2 max-sm:overflow-hidden ">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden max-sm:flex">
          <div className="item-center justify-center max-sm:flex">
            {/* button */}
            <div className="h-[48px] w-24 rounded-[81px] item-center flex justify-center bg-[#000] m-auto max-sm:h-[40px]">
              <div
                className="flex justify-center cursor-pointer"
                onClick={() => handleNextSlide("pre")}
              >
                <img src={SVGS.arrow_left} alt="farme" className="p-3" />
              </div>
              <div
                className="flex justify-center cursor-pointer"
                onClick={() => handleNextSlide("incre")}
              >
                <img src={SVGS.arrow_right} alt="farme" className="p-3" />
              </div>
            </div>
            {/* length image current */}
            <div className="mt-4 max-sm:ml-4 max-sm:h-10 flex max-sm:items-center max-sm:mt-0 max-sm:w-[178px]">
              <div className="w-[364px] h-[4px] bg-black ">
                <div
                  className={`bg-[#FFD579] duration-700 w-[${
                    (numberSlide / lengthImage) * (widthImage > 400 ? 364 : 178)
                  }px] h-full`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tours;
