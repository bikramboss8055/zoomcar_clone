import "./Slider2.css";
import { useState } from "react";
import Slider from "react-slick";
import car1 from "../img/car1.png";
import car2 from "../img/car2.jfif";
import car3 from "../img/car3.png";
import car4 from "../img/car4.jfif";
import car5 from "../img/car5.png";
import car6 from "../img/car6.png";
import car7 from "../img/car7.png";
import car8 from "../img/car8.jfif";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const images = [car1, car2, car3, car4, car5, car6, car7, car8];

function Slider2() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <TfiArrowCircleRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <TfiArrowCircleLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <Box className="Apppp" >
      <Slider {...settings}>
        {images.map((img, idx) => (
          <Box className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <Link>
              <Image src={img} alt={img} />
            </Link>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default Slider2;