import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../Context/UserContaxt";
import toast from "react-hot-toast";

export default function DisplayProducts() {
  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(false);
  let { userToken } = useContext(userContext);
  let [success, setSuccess] = useState(false);
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

  async function addToCart(id) {
    toast.success("Product added successfully to your cart");

    await axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        { productId: id },
        {
          headers: {
            token: userToken,
          },
        }
      )
      .then((res) => {
        setSuccess(true);
      });
  }

  async function addToWishList(id) {
    toast.success("Product added successfully to your wishlist");

    await axios.post(
      `https://ecommerce.routemisr.com/api/v1/wishlist`,
      { productId: id },
      {
        headers: {
          token: userToken,
        },
      }
    );
  }
  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center py-5">
          <div className="spinner-border text-main" role="status">
            <span className="visually-hidden">
              <i className="fas fa-spinner fa-spin position-absolute"></i>
            </span>
          </div>
        </div>
      ) : (
        <div className="row align-items-center g-3 row-cols-2 row-cols-md-4 row-cols-lg-6 row-gap-4 pb-0 pb-md-5">
          {products.map((product) => {
            return (
              <div className="col product overflow-hidden" key={product._id}>
                <Link
                  className="text-decoration-none  text-black"
                  to={`/DisplayProduct/${product._id}`}
                >
                  <img
                    src={product.imageCover}
                    className="w-100"
                    alt={product.title}
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
                <div className="row justify-content-between align-items-center g-2 my-2">
                  <div className="col-9 ">
                    <button
                      onClick={() => {
                        addToCart(product._id);
                      }}
                      className="btn bg-main text-white w-100"
                    >
                      Add to card
                    </button>
                  </div>
                  <div className="col-3 ">
                    <button
                      onClick={() => {
                        addToWishList(product._id);
                      }}
                      className="btn bg-dark text-white w-100"
                    >
                      <i className="fa-solid fa-heart"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
