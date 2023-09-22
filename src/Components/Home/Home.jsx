import React from "react";
import styles from "./Home.module.css";
import sliderImg1 from "../../Assets/images/slider-image-1.jpeg";
import sliderImg2 from "../../Assets/images/slider-image-2.jpeg";
import sliderImg3 from "../../Assets/images/slider-image-3.jpeg";
export default function Home() {
  return (
    <>
      <div className="container">
        <div className="d-flex my-3">
          <div className="w-75">
            <img src={sliderImg3} className="" alt="" />
          </div>
          <div className="d-flex flex-column">
            <img src={sliderImg2} className="img-fluid" alt="" />
            <img src={sliderImg1} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
