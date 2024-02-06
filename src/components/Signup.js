import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar";
import axios from "axios";

const schema = Yup.object().shape({
  username: Yup.string().required("username is required"),
  fullname: Yup.string().required("full Name is required"),
  email: Yup.string()
    .required("Email is required to login")
    .email("Invalid Email Format"),
  password: Yup.string()
    .required("Password is required to sign in")
    .min(4, "Minimum 4 Characters are required for Password"),
  confirm_password: Yup.string()
    .required("Password is required to sign in")
    .min(4, "Minimum 4 Characters are required for Password"),
});

function Signup() {
  const initialValues = {
    username: "",
    fullname: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  // const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
  //   useFormik({
  //     initialValues,
  //     validationSchema: schema,
  //     onSubmit: (values) => {
  //       axios
  //         .post("http://localhost:4000/user/", {
  //           username: values.username,
  //           fullname: values.fullname,
  //           email: values.email,
  //           password: values.password,
  //         })
  //         .then((res) => {
  //           alert("success");
  //           console.log(res);
  //         })
  //         .catch((err) => {
  //           console.log("error: ", err);
  //         });
  //     },
  //   });

  return (
    <>
      <Navbar />
      <Formik
        validationSchema={schema}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          axios
            .post("http://localhost:4000/user/", {
              username: values.username,
              fullname: values.fullname,
              email: values.email,
              password: values.password,
            })
            .then((res) => {
              alert("success");
              console.log(res);
            })
            .catch((err) => {
              console.log("error: ", err);
            });
        }}
      >
        {({
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="signup d-flex justify-content-center">
            <div className="form-group card m-5 p-3 w-50">
              <form onSubmit={handleSubmit}>
                <span className="display-3 d-flex justify-content-center">
                  Sign up
                </span>
                <label htmlFor="username" className="input-label m-2 p-2">
                  User Name
                </label>
                <input
                  type="text"
                  name="username"
                  value={values.username}
                  placeholder="Enter your User Name"
                  className="form-control inp_txt m-2 p-2"
                  id="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                {errors.username && touched.username && (
                  <p className="error m-2 p-2">{errors.username}</p>
                )}
                <label htmlFor="last_name" className="input-label m-2 p-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  value={values.fullname}
                  placeholder="Enter your Full Name"
                  className="form-control inp_txt m-2 p-2"
                  id="fullname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                {errors.fullname && touched.fullname && (
                  <p className="error m-2 p-2">{errors.fullname}</p>
                )}
                <label htmlFor="email" className="input-label m-2 p-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your email id"
                  className="form-control inp_txt m-2 p-2"
                  id="email"
                ></input>
                {errors.email && touched.email && (
                  <p className="error m-2 p-2">{errors.email}</p>
                )}
                <label htmlFor="password" className="input-label m-2 p-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your password"
                  className="form-control m-2 p-2"
                  id="password"
                ></input>
                <label htmlFor="password" className="input-label m-2 p-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirm_password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Confirm Your Password"
                  className="form-control m-2 p-2"
                  id="confirm_password"
                ></input>
                {errors.password && touched.password && (
                  <p className="error m-2 p-2">{errors.password}</p>
                )}
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary">
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default Signup;
