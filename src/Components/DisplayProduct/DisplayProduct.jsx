import React, { useEffect, useState } from "react";
import img2 from "../../Assets/images/1680392991271-cover.jpeg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function DisplayProduct() {
  let { id } = useParams();
  let [productInfo, setProduct] = useState({});
  let [loading, setLoading] = useState(false);
  let [quantity, setQuantity] = useState(1);

  useEffect(() => {
    {
      setLoading(true);
      getProductById();
    }
  }, []);
  async function getProductById() {
    let productInfo = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`
    );
    setProduct(productInfo.data.data);
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
        <div class="row justify-content-center align-items-center g-4 py-0 py-lg-5 my-0 mb-4 mb-md-0 my-lg-5">
          <div className="col-12 col-md-3">
            <img src={productInfo?.imageCover} className="w-100" alt="" />
          </div>
          <div className="col-12 col-md-8">
            <h2>{productInfo?.title}</h2>
            <p className="px-2">{productInfo?.description}</p>
            <h3>
              <Link className="text-main text-decoration-none fs-5" to="/">
                {productInfo?.category?.name}
              </Link>
            </h3>
            <h4 className="my-3 d-flex justify-content-between h5">
              <p>{productInfo?.price} EGP</p>
              <p>
                {" "}
                <i className="fas fa-star rating-color"></i>{" "}
                {productInfo?.ratingsAverage}
              </p>
            </h4>
            <button className="btn bg-main text-white w-100">
              Add to card
            </button>
          </div>
          <div className="col-12 col-md-1">
            <button className="btn btn-outline-danger">-</button>
            <span className="px-1">{1}</span>
            <button className="btn btn-outline-success">+</button>
          </div>
        </div>
      )}
    </>
  );
}
