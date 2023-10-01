import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../Context/UserContaxt";
import axios from "axios";
import { Link } from "react-router-dom";

export default function WishList() {
  let [wishlist, setWishlist] = useState([]);
  let { userToken } = useContext(userContext);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");
  useEffect(() => {
    setLoading(true);
    getUserWishlist();
  }, []);

  async function getUserWishlist() {
    await axios
      .get(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
        headers: {
          token: userToken,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setWishlist(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response.data.message);
        setLoading(false);
      });
  }
  async function addToCart(id) {
    await axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
        { productId: id },
        {
          headers: {
            token: userToken,
          },
        }
      )
      .then(() => {});
  }
  async function removeItemFromWishlist(id) {
    setLoading(true);
    await axios
      .delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, {
        headers: {
          token: userToken,
        },
      })
      .then((res) => {
        setWishlist(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
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
        <>
          {wishlist.length === 0 ? (
            <div className="d-flex justify-content-center align-items-center py-5 vh-100 flex-column row-gap-4">
              <h2 className="text-main">Your wishlist is empty</h2>
              <Link to={"/Home"}>
                {" "}
                <button className="btn bg-main text-white">
                  Keep Shopping?
                </button>{" "}
              </Link>
            </div>
          ) : (
            <div className="mt-4 mb-3 py-4 px-4 bg-main-light">
              <h2>My wish List :</h2>
              <div className="row justify-content-between align-items-center p-0 m-0 row-gap-3 p-2">
                {wishlist?.map((item) => {
                  return (
                    <div className="col-12 p-0 m-0" key={item.id}>
                      <div className="row justify-content-between align-items-center p-0 m-0 pb-2 border-bottom border-1">
                        <div className="col-4 col-md-1 p-0">
                          <div className="product-img">
                            <img
                              src={item?.imageCover}
                              alt={item?.title}
                              className="w-100"
                            />
                          </div>
                        </div>
                        <div className="col-4 col-md-9">
                          <p className="fw-bolder">{item.title}</p>
                          <p className="text-main">
                            Price : {item?.price} EGP{" "}
                          </p>
                          <button
                            className="bg-transparent border-0 p-0"
                            onClick={() => {
                              removeItemFromWishlist(item.id);
                            }}
                          >
                            <i className="fa-solid fa-trash-can text-main"></i>{" "}
                            Remove
                          </button>
                        </div>
                        <div className="col-4 col-md-2 d-flex align-items-center justify-content-end">
                          <button
                            onClick={() => {
                              addToCart(item.product.id);
                            }}
                            className="btn bg-main text-white w-100"
                          >
                            Add to card
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}