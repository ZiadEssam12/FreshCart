import React from "react";
import styles from "./Register.module.css";
import { Formik, useFormik } from "formik";
export default function Register() {
  function handleSubmit(values) {}

  function validate(values) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])[A-Za-z](?=.*\d{6,20})\S*$/;
    const phoneregex = /^01[015][0-9]{8}$/;
    let errors = {};
    if (!values.name) {
      errors.name = "Name can't be empty";
    } else if (values.name.split(" ").length < 2) {
      errors.name = "You should add your first and second name";
    }

    if (!values.email) {
      errors.email = "Email can't be empty";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Enter a valid email";
    }

    if (!values.password) {
      errors.password = "Password can't be empty";
    } else if (!passwordRegex.test(values.password)) {
      errors.password =
        "Password should start with a capital then a small letter then from 6 to 20 to any digit";
    }

    if (!values.phone) {
      errors.phone = "Phone can't be empty";
    } else if (!phoneregex.test(values.phone)) {
      errors.phone = "Enter a valid Phone";
    }
    console.log(errors);
    return errors;
  }

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    onSubmit: handleSubmit,
    validate,
  });
  return (
    <>
      <div className="w-65 m-auto py-5">
        <h1>Register Now:</h1>

        <form action="" className="w-100" onSubmit={formik.handleSubmit}>

          <label htmlFor="name">name:</label>
          <input
            className="form-control mb-2"
            type="name"
            name="name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <label htmlFor="email">email:</label>
          <input
            className="form-control mb-2"
            type="email"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <label htmlFor="password">password:</label>
          <input
            className="form-control mb-2"
            type="password"
            name="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <label htmlFor="rePassword">rePassword:</label>
          <input
            className="form-control mb-2"
            type="password"
            name="rePassword"
            id="rePassword"
            value={formik.values.rePassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <label htmlFor="phone">phone:</label>
          <input
            className="form-control mb-2"
            type="phone"
            name="phone"
            id="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          
          <button
            type="submit"
            className="btn bg-main text-white ms-auto d-block mt-2"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
}
