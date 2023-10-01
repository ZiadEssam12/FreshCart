import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { userContext } from "../../Context/UserContaxt";

export default function Cart() {
  let [cart, setCart] = useState({});
  let [loading, setLoading] = useState(false);
  let { userToken } = useContext(userContext);
  let [cartCount, setCartCount] = useState(0);
  async function removeItemFromCart(id) {
    setLoading(true);
    await axios
      .delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
        headers: {
          token: userToken,
        },
      })
      .then((res) => {
        setCart(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }

  useEffect(() => {
    setLoading(true);
    getUserCart();
  }, []);

  async function getUserCart() {
    await axios
      .get(`https://ecommerce.routemisr.com/api/v1/cart`, {
        headers: {
          token: userToken,
        },
      })
      .then((res) => {
        setCart(res.data.data);
      })
      .catch((err) => {});
    setLoading(false);
  }

  async function removeCartitems() {
    setLoading(true);
    await axios
      .delete(`https://ecommerce.routemisr.com/api/v1/cart`, {
        headers: {
          token: userToken,
        },
      })
      .then((res) => {
        setCart(res.data.data);
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
          <div className="mt-4 mb-3 py-4 px-4 bg-main-light">
            <h2>Shop Cart:</h2>
            <p className="text-main">
              Total Cart Price :{" "}
              {cart.totalCartPrice ? cart?.totalCartPrice : "0"} EGP{" "}
            </p>
            <div className="row justify-content-between align-items-center p-0 m-0 row-gap-3">
              {cart?.products?.map((item) => {
                return (
                  <div className="col-12 p-0 m-0" key={item.product.id}>
                    <div className="row justify-content-between align-items-center p-0 m-0 pb-2 border-bottom border-1">
                      <div className="col-4 col-md-1 p-0">
                        <div className="product-img">
                          <img
                            src={item?.product?.imageCover}
                            alt={item?.product?.title}
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="col-4 col-md-9">
                        <p className="fw-bolder">{item?.product.title}</p>
                        <p className="text-main">Price : {item?.price} EGP </p>
                        <button
                          className="bg-transparent border-0 p-0"
                          onClick={() => {
                            removeItemFromCart(item.product.id);
                          }}
                        >
                          <i className="fa-solid fa-trash-can text-main"></i>{" "}
                          Remove
                        </button>
                      </div>
                      <div className="col-4 col-md-2 d-flex align-items-center justify-content-end">
                        <button className="btn btn-outline-danger">-</button>
                        <span className="px-3">{item?.count}</span>
                        <button className="btn btn-outline-success">+</button>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="p-0">
                <button className="btn bg-main text-white w-100">
                  CheckOut
                </button>
              </div>
            </div>
          </div>
          <button
            className="btn bg-danger text-white d-block ms-auto mb-4"
            onClick={() => {
              removeCartitems();
            }}
          >
            <i className="fa-solid fa-trash-can"></i> Clear Cart
          </button>
        </>
      )}
    </>
  );
}