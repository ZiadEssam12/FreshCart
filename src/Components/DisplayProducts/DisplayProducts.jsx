import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function DisplayProducts() {
  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getAllProducts();
  }, []);
  async function getAllProducts() {
    let products = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/products"
    );
    setProducts(products.data.data);
    setLoading(false);
  }
  return (
    <>
      {loading ? (
        <div class="d-flex justify-content-center align-items-center py-5">
          <div class="spinner-border text-main" role="status">
            <span class="visually-hidden">
              <i className="fas fa-spinner fa-spin position-absolute"></i>
            </span>
          </div>
        </div>
      ) : (
        <div class="row align-items-center g-3 row-cols-2 row-cols-md-4 row-cols-lg-6 pb-0 pb-md-5">
          {products.map((product) => {
            return (
              <div className="col">
                <Link
                  className="text-decoration-none  text-black"
                  to={`/DisplayProduct/${product._id}`}
                >
                  <img
                    src={product.imageCover}
                    className="w-100"
                    alt="product.name"
                    height={300}
                  />
                  <div className="px-2">
                    <p className="text-main p-0 m-0">{product.category.name}</p>
                    <h5 className="text-black">
                      {product.title.split(" ").slice(0, 2).join(" ")}
                    </h5>
                    <p className="d-flex justify-content-between p-0 m-0">
                      <span>{product.price} EGP</span>
                      <span>
                        <i className="fas fa-star rating-color me-1"></i>
                        {product.ratingsAverage}
                      </span>
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
