import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar";

const schema = Yup.object().shape({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  email: Yup.string().required("Email is required to login").email("Invalid Email Format"),
  password: Yup.string().required("Password is required to sign in").min(8, "Minimum 8 Characters are required for Password"),
});

function Signup() {
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: (values, action) => {
      console.log(values);
    },
  });

  return (
    <div>
      <Navbar />
      <div className="login">
        <div className="form-group card m-5 p-3 w-50">
          <form onSubmit={handleSubmit}>
            <span className="display-3 d-flex justify-content-center">Sign up</span>
            <label htmlFor="first_name" className="input-label m-2 p-2">
              First Name
            </label>
            <input
              type="text"
              name="first_name"
              value={values.first_name}
              placeholder="Enter your First Name"
              className="form-control inp_txt m-2 p-2"
              id="first_name"
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>
            {errors.first_name && touched.first_name && <p className="error">{errors.first_name}</p>}
            <label htmlFor="last_name" className="input-label m-2 p-2">
              Last Name
            </label>
            <input
              type="text"
              name="last_name"
              value={values.last_name}
              placeholder="Enter your Last Name"
              className="form-control inp_txt m-2 p-2"
              id="last_name"
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>
            {errors.last_name && touched.last_name && <p className="error">{errors.last_name}</p>}
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
            {errors.email && touched.email && <p className="error">{errors.email}</p>}
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
            {errors.password && touched.password && <p className="error">{errors.password}</p>}
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
