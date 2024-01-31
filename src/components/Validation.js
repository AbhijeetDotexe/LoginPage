import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    email: Yup.string().required("Email is required to login").email("Invalid Email Format"),
    Password: Yup.string().required("Password is required to sign in").min(8, "Minimum 8 Characters are required for Password")
});

function Validation() {
  return (
    <>
    <Formik
        validationSchema={schema}
        initialValues={{
            email:"",
            password:""
        }}
        onSubmit={(values)=>alert(JSON.stringify(values))}
        >
       {({
        values,
        touched,
        errors,
        handleBlur,
        handleChange,
        handleSubmit
       })=>(
        <div className='login'>
            <div className='form'>
                <form validate onSubmit={handleSubmit}>
                    <h1>Login</h1>
                        <input type='email' name='email' onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder='Enter your email id' className='form-control inp_txt' id='email'></input>
                        <p className='error'>
                            {
                                errors.email && touched.email
                            }
                        </p>
                        <input type='password' name='password' placeholder='Enter your password' onChange={handleChange} onBlur={handleBlur} className='form-control'>
                        </input>
                        <p className='error'>
                            {errors.email && touched.email}
                        </p>
                        <button type='submit'>Login</button>
                </form>
            </div>
        </div>
       )

       }     

        </Formik>
    </>
  )
}

export default Validation