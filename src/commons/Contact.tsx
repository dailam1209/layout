import React from 'react';
import { SVGS } from '../assets/svgs';

const Contact = () => {
  return (
        <ul className='h-48'>
            <li className='w-12 h-12 mb-6  max-sm:mb-[0px] max-sm:p-2'>
                <a>
                    <img src={SVGS.zalo} alt="zalo"></img>
                </a>
            </li>
            <li className='w-12 h-12 mb-6  max-sm:mb-[0px] max-sm:p-2'>
                <a>
                    <img src={SVGS.messenger} alt="messenger"></img>
                </a>
            </li>
            <li className='w-12 h-12 mb-6  max-sm:mb-[0px] max-sm:p-2'>
                <a>
                    <img src={SVGS.call} alt="call"></img>
                </a>
            </li>
        </ul>
  )
}

export default Contact