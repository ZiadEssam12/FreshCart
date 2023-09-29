import axios from "axios";
import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img2 from "../../Assets/images/1680392991271-cover.jpeg";

export default function CategoriesSlider() {
  let [loading, setLoading] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setLoading(true);
    getAllCategories();
  }, []);
  async function getAllCategories() {
    let Categories = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/categories"
    );
    setCategories(Categories.data.data);
    setLoading(false);
  }
  return (
    <>
      {loading ? (
        <div class="d-flex justify-content-center align-items-center vh-100 py-5">
          <div class="spinner-border text-main" role="status">
            <span class="visually-hidden">
              <i className="fas fa-spinner fa-spin position-absolute"></i>
            </span>
          </div>
        </div>
      ) : (
        <div className="pt-3 pb-5">
          <Slider {...settings}>
            {categories.map((category) => {
              return (
                <div className="CategoriesSlider">
                  <Link
                    to={`/DisplayCategory/${category._id}`}
                    className="text-decoration-none"
                  >
                    <img
                      src={category.image}
                      className="w-100"
                      height={200}
                      alt=""
                    />
                    <p className="text-black">{category.name}</p>
                  </Link>
                </div>
              );
            })}
          </Slider>
        </div>
      )}
    </>
  );
}
