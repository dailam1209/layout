import React from "react";
import IMAGES from "../assets/images";
import { SVGS } from "../assets/svgs";

export function Rate() {
  const stars = [];
  const number = 5;

  for (let i = 1; i <= number; i++) {
    stars.push(<img key={i} src={SVGS.star} alt="star" className="w-4 h-4 max-sm:w-[8.41px] max-sm:h-2" />);
  }
  return <div className="flex">{stars}</div>;
}

export interface inforProps {
  address: string;
  name: string;
  title: string;
  isHidden: boolean
  isHiddenAdd: boolean,
  hieghtAdd: number
}

export const Information: React.FC<inforProps> = ({ address, name, title, isHidden, isHiddenAdd, hieghtAdd}) => {
  return (
    <div className="w-full items-center ">
      <div className={`flex h-[25px] mb-1 max-sm:h-[${hieghtAdd}px]`}>
        <img src={SVGS.map} className={`w-4 h-4 mr-1 max-sm:h-[${hieghtAdd}px] `}></img>
        <span className="h-[21px] font-medium text-sm leading-[21px] text-white tracking-[0.1%] max-sm:text-[14px]  max-sm:leading-[17.07px] max-sm:tracking-[0.25%] max-sm:whitespace-pre-line">
          {isHiddenAdd ? address.substring(0, 6)+ "..." : address}
        </span>
      </div>
      <span className="font-bold text-[24px] leading-[25px] text-white tracking-[1%] max-sm:text-[14px] max-sm:h-[42px] max-sm:leading-[21px] max-sm:tracking-[0.1%] ">
        {name}
        <p></p>
        {isHidden ? title.substring(0, 12)+ "..." : title}
      </span>
    </div>
  );
};

const Destination = () => {
  return (
    <div className="mt-28 mb-12 sm:px-[180px] max-sm:px-[15px] max-sm:mt-[45px]  ">
      <h2 className="font-bold h-[61px] w-full text-[50px] leading-[82.5px] text-white max-sm:text-[24px] mb-12 ">
        TOP DESTINATIONS
      </h2>
      <div className="grid grid-flow-col grid-cols-12 gap-8  h-auto  max-sm:h-auto max-sm:block max-sm:mb-2 ">
        {/* col 1 */}
        <div className="gird col-span-5 max-sm:mb-4">
          <div className="relative mb-8">
            <img
              src={IMAGES.hoa_lu}
              alt="hoalu"
              className="max-sm:h-[179.22px] max-sm:w-full w-full min-h-full"
            ></img>
            <div className="flex absolute top-0 right-0 ">
              <div className="flex h-[38px] p-[9px] items-center mr-2 mt-2 bg-opacity-20 bg-white rounded-[32px] max-sm:h-5 max-sm:p-1 max-sm:min-w-min ">
                <p className="h-5 w-12 leading-5 font-normal text-base text-white mr-2 max-sm:text-[10px] max-sm:w-[31px]">
                  4.8<span className="px-[1.8px]">/</span>5
                </p>
                <Rate />
              </div>
            </div>
            <div className="block absolute bottom-0 right-0 left-0 p-3 h-[103px] max-sm:h-[82px] max-sm:p-2 ">
              <Information
                address="Nghe An, Viet Nam"
                name="Hoa Lu"
                title="ancient capital Ninh Binh " isHidden={false} isHiddenAdd={false} hieghtAdd={17}              />
            </div>
          </div>
          <div className="grid grid-flow-col gap-8 max-sm:gap-4">
            <div className="relative col-span-3">
              <img src={IMAGES.beach} alt="hoalu" className="w-full min-h-full"></img>
              <div className="flex absolute top-0 right-0 ">
              <div className="flex h-[38px] p-[9px] items-center mr-2 mt-2 bg-opacity-20 bg-white rounded-[32px] max-sm:h-5 max-sm:p-1 max-sm:min-w-min ">
                <p className="h-5 w-12 leading-5 font-normal text-base text-white mr-2 max-sm:text-[10px] max-sm:w-[31px]">
                  4.8<span className="px-[1.8px]">/</span>5
                </p>
                <Rate />
              </div>
              </div>
              <div className="block absolute bottom-0 right-0 left-0 p-3 h-[103px] max-sm:h-[82px] max-sm:p-2">
                <Information
                  address="Nghe An, Viet Nam"
                  name="LY SON"
                  title="beach island" isHidden={false} isHiddenAdd={false} hieghtAdd={17}               />
              </div>
            </div>
            <div className="relative col-span-2">
              <img src={IMAGES.road} alt="hoalu" className="w-full min-h-full"></img>
              <div className="flex absolute top-0 right-0 ">
              <div className="flex h-[38px] p-[9px] items-center mr-2 mt-2 bg-opacity-20 bg-white rounded-[32px] max-sm:h-5 max-sm:p-1 max-sm:min-w-min ">
                <p className="h-5 w-12 leading-5 font-normal text-base text-white mr-2 max-sm:text-[10px] max-sm:w-[31px]">
                  4.8<span className="px-[1.8px]">/</span>5
                </p>
                <Rate />
              </div>
              </div>
              <div className="block absolute bottom-0 right-0 left-0 p-3 h-[103px] max-sm:h-[82px] max-sm:p-2">
                <Information
                  address="Nghe An, Viet Nam"
                  name="PHU QUOC"
                  title="Island" isHidden={false} isHiddenAdd={true}   hieghtAdd={17}             />
              </div>
            </div>
          </div>
        </div>
        {/* col 2 */}
        <div className="gird col-span-4 max-sm:mb-4">
        <div className="relative">
          <img
            src={IMAGES.lua}
            alt="hoalu"
            className="max-sm:h-[469.23px] w-full  "
          ></img>
          <div className="flex absolute top-0 right-0 ">
          <div className="flex h-[38px] p-[9px] items-center mr-2 mt-2 bg-opacity-20 bg-white rounded-[32px] max-sm:h-5 max-sm:p-1 max-sm:min-w-min ">
                <p className="h-5 w-12 leading-5 font-normal text-base text-white mr-2 max-sm:text-[10px] max-sm:w-[31px]">
                  4.8<span className="px-[1.8px]">/</span>5
                </p>
                <Rate />
              </div>
          </div>
          <div className="block absolute bottom-0 right-0 left-0 p-3 h-[103px] max-sm:h-[82px] max-sm:p-2 max-sm:mb-2">
            <Information
                address="Nghe An, Viet Nam"
                name="PU LUONG"
                title="Heaven’s Land" isHidden={false} isHiddenAdd={false}  hieghtAdd={17}          />
          </div>
        </div>
        </div>
        {/* col 3 */}
        <div className="gird col-span-3 max-sm:gap-4 max-sm:flex">
          <div className="relative mb-8 max-sm:h-full">
            <img src={IMAGES.doi} alt="hoalu" className="w-full h-full"></img>
            <div className="flex absolute top-0 right-0 ">
            <div className="flex h-[38px] p-[9px] items-center mr-2 mt-2 bg-opacity-20 bg-white rounded-[32px] max-sm:h-5 max-sm:p-1 max-sm:min-w-min ">
                <p className="h-5 w-12 leading-5 font-normal text-base text-white mr-2 max-sm:text-[10px] max-sm:w-[31px]">
                  4.8<span className="px-[1.8px]">/</span>5
                </p>
                <Rate />
              </div>
            </div>
            <div className="block absolute bottom-0 right-0 left-0 p-3 h-[103px] max-sm:p-2">
              <Information
                address="Nghe An, Viet Nam"
                name="NHA TRANG"
                title="resort beach boss" isHidden={true} isHiddenAdd={false}    hieghtAdd={35}          />
            </div>
          </div>
          <div className="relative max-sm:mb-0 max-sm:h-full">
          <img src={IMAGES.nui} alt="hoalu" className="w-full h-full"></img>
          <div className="flex absolute top-0 right-0 ">
          <div className="flex h-[38px] p-[9px] items-center mr-2 mt-2 bg-opacity-20 bg-white rounded-[32px] max-sm:h-5 max-sm:p-1 max-sm:min-w-min ">
                <p className="h-5 w-12 leading-5 font-normal text-base text-white mr-2 max-sm:text-[10px] max-sm:w-[31px]">
                  4.8<span className="px-[1.8px]">/</span>5
                </p>
                <Rate />
              </div>
          </div>
          <div className="block absolute bottom-0 right-0 left-0 p-3 h-[103px] max-sm:p-2">
            <Information
                address="Nghe An, Viet Nam"
                name="CON CAT"
                title="bay’s heaven " isHidden={true} isHiddenAdd={false}     hieghtAdd={35}       />
          </div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Destination;
