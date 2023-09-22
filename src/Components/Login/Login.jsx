import React from "react";
import styles from "./Login.module.css";
import { Formik, useFormik } from "formik";

export default function Login() {
  function handleSubmit(values) {
    console.log(values);
  }

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleSubmit,
  });
  return (
    <>
      <div className="w-65 m-auto py-5 mt-5">
        <h2>Login Now:</h2>

        <form action="" className="w-100" onSubmit={formik.handleSubmit}>
          <label htmlFor="email">email:</label>
          <input
            className="form-control mb-2"
            type="email"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlurCapture={formik.handleBlur}
          />
          <label htmlFor="password">password:</label>
          <input
            className="form-control mb-2"
            type="password"
            name="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlurCapture={formik.handleBlur}
          />
          <button
            type="submit"
            className="btn bg-main text-white ms-auto d-block mt-2"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}
