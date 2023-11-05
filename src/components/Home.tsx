import { useEffect, useState } from "react";
import Header from '../commons/Header';
import IMAGES from "../assets/images";
import Contact from "../commons/Contact";
import Destination from "../commons/Destination";
import AboutUs from "../commons/AboutUs";
import Tours from "../commons/Tours";
import Folow from "../commons/Folow";
import Review from "../commons/Review";
import Footer from "../commons/Footer";
import { NavbarMobile } from "../commons/NavbarMobile";

const Home = () => {

    const [image, setImage ] = useState<String>('');
  const [bgWidth, setBgWidth] = useState<any>();

  let width = document.body.clientWidth; 
  const getWidthBg = document.querySelector('.bg');
  const widthBg = Number(getWidthBg?.clientHeight) > 370 ? Number(getWidthBg?.clientHeight) - 370 : Number(getWidthBg?.clientHeight) - 119


  useEffect(() => {
    setBgWidth(width)
    if(width && width  < 640) {
      setImage(IMAGES.image_2)
    } else {
      setImage(IMAGES.image_1)
    }
  }, [width, widthBg])
  return (
    <div id="home" className="min-h-max w-full " style={{
        backgroundImage: "url(" + IMAGES.background + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
        <Header image={image} bg={widthBg}/>
        <div className="fixed z-10 top-[550px] max-sm:top-[393px] right-7 mb-11">
            <Contact/>
        </div>
        <Destination/>
        <AboutUs/>
        <Tours/>
        <Folow clientBodyWidth={width}/>
        <Review/>
        <Footer/>
        <NavbarMobile/>
    </div>
  )
}

export default Home