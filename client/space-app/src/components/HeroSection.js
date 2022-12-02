import { useState } from "react";
import Slider from "react-slick";
import sliderImg1 from "../images/sliderImg1.jpg";
import sliderImg2 from "../images/sliderImg2.jpg";
import sliderImg3 from "../images/sliderImg3.jpg";
import sliderImg4 from "../images/sliderImg4.jpg";
import sliderImg5 from "../images/sliderImg5.jpg";
import sliderImg6 from "../images/sliderImg6.jpg";
import sliderImg7 from "../images/sliderImg7.jpg";
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa';
const images = [sliderImg3,sliderImg4,sliderImg2,sliderImg7,sliderImg5,sliderImg6,sliderImg1,];

export const HeroSection = () => {
  
        const [imageIndex, setImageIndex] = useState(0);
      
        const settings = {
          infinite: true,
          speed: 300,
          slidesToShow: 3,
          centerMode: true,
          centerPadding: 0,
          slidesToSroll:1,
          autoplay: true,
          autoplaySpeed: 2500,
          arrows: false,
          beforeChange: (current, next) => setImageIndex(next),
        };
      
        return (
            <div className="row">
                <div className="col-xl-2"></div>
                <div className="col-xl-8">
                <div className="Container2">
                <Slider {...settings}>
                        {images.map((img, index) => (
                        <div className={index === imageIndex ? "slide activeSlide" : "slide"} key={index}>
                            <img src={img} alt={img} className="img-fluid sliderImage"/>
                        </div>
                         ))}
                </Slider>
          </div>
                </div>
                <div className="col-xl-2"></div>
         </div>
        );
      }