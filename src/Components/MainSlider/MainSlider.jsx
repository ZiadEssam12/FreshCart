import React, { useState } from "react";
import Slider from "react-slick";
import sliderImg1 from "../../Assets/images/slider-image-1.jpeg";
import sliderImg2 from "../../Assets/images/slider-image-2.jpeg";
import sliderImg3 from "../../Assets/images/slider-image-3.jpeg";
import img1 from "../../Assets/images/assortment-citrus-fruits.png";
import img2 from "../../Assets/images/1680392991271-cover.jpeg";
import style from "./MainSlider.module.css";
export default function MainSlider() {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div class="main-slider row justify-content-center py-5">
      <div class="col-12 col-md-9 p-0" height={500}>
        <Slider {...settings}>
          <div>
            <img src={sliderImg1} className="w-100" height={500} alt="" />
          </div>
          <div>
            <img src={sliderImg2} className="w-100" height={500} alt="" />
          </div>
          <div>
            <img src={sliderImg3} className="w-100" height={500} alt="" />
          </div>
        </Slider>
      </div>
      <div class="col-md-3 p-0">
        <img src={img1} className="w-100" height={250} alt="" />
        <img src={img2} className="w-100" height={250} alt="" />
      </div>
    </div>
  );
}
