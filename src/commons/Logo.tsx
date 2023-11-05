import React from 'react';
import IMAGES from '../assets/images';
import { SVGS } from '../assets/svgs';

const Logo = () => {
  return (
      <img src={SVGS.logo} alt={'logo'} className='w-full h-full' ></img>
  )
}

export default Logo