import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
import axios from "axios";
import { Helmet } from "react-helmet";

export default function Products() {
  let [Products, setProducts] = useState([]);
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getAllProducts();
  }, []);

  async function getAllProducts() {
    let Products = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/Products"
    );
    setProducts(Products.data.data);
    setLoading(false);
  }
  return (
    <>
      <Helmet>
        <title>Products</title>
      </Helmet>

      {loading ? (
        <div className="d-flex justify-content-center align-items-center vh-100 py-5">
          <div className="spinner-border text-main" role="status">
            <span className="visually-hidden">
              <i className="fas fa-spinner fa-spin position-absolute"></i>
            </span>
          </div>
        </div>
      ) : (
        <div className="my-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center align-items-center gx-4 gy-4">
            {loading ? (
              <div className="d-flex justify-content-center align-items-center py-5">
                <div className="spinner-border text-main" role="status">
                  <span className="visually-hidden">
                    <i className="fas fa-spinner fa-spin position-absolute"></i>
                  </span>
                </div>
              </div>
            ) : (
              Products.map((Product) => (
                <div className="col" key={Product._id}>
                  <div className="card h-100">
                    <img
                      src={Product.image}
                      className="card-img-top w-100"
                      alt={Product.name}
                      height={300}
                    />
                    <div className="card-body">
                      <h5 className="text-main fw-bolder text-center">
                        {Product.name}
                      </h5>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
}
