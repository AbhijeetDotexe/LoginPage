import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required to login")
    .email("Invalid Email Format"),
  password: Yup.string()
    .required("Password is required to sign in")
    .min(8, "Minimum 8 Characters are required for Password"),
});

function Login() {
  return (
    <>
      <Navbar />
      <Formik
        validationSchema={schema}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => alert(JSON.stringify(values))}
      >
        {({
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="login">
            <div className="form-group card m-5 p-3 w-50">
              <form onSubmit={handleSubmit}>
                <span className="display-3 d-flex justify-content-center">
                  Login
                </span>
                <label className=" d-flex m-2 p-2">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  placeholder="Enter your email id"
                  className="form-control inp_txt m-2 p-2"
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                <p className="error">{errors.email && touched.email && errors.email}</p>
                <label className="d-flex m-2 p-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  placeholder="Enter your password"
                  className="form-control m-2 p-2"
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                <p className="error">{errors.password && touched.password && errors.password}</p>
                <div className="d-flex justify-content-center ">
                  <button type="submit" className="btn btn-primary">
                    Login
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

export default Login;
