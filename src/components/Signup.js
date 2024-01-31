import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required to login")
    .email("Invalid Email Format"),
  password: Yup.string()
    .required("Password is required to sign in")
    .min(8, "Minimum 8 Characters are required for Password"),
});

function Signup() {
  return (
    <div>
      <>
        <Formik
          validationSchema={schema}
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => alert(JSON.stringify(values))}
        >
          {({
            touched,
            errors,
            // values,
            handleSubmit
          }) => (
            <div className="login">
              <div className="form-group card m-4 p-3">
                <form validate="true" onSubmit={handleSubmit}>
                  <span className="display-3 d-flex justify-content-center">
                    Sign up
                  </span>
                  <input
                    type="email"
                    name="email"
                    // value={values.email}
                    placeholder="Enter your email id"
                    className="form-control inp_txt m-2 p-2"
                    id="email"
                  ></input>
                  <p className="error">{errors.email && touched.email}</p>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="form-control m-2 p-2"
                  ></input>
                  <p className="error">{errors.email && touched.email}</p>
                  <div className="d-flex justify-content-center ">
                    <button type="submit" className="btn btn-primary ">
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </Formik>
      </>
    </div>
  );
}

export default Signup;
