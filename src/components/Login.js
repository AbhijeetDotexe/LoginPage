import React from 'react'

function Login() {
  return (
    <div className='login'>
        <h1>Login</h1>
        <input type="email" name='email' placeholder='Enter your emailID' ></input>

        <input type="password" name='password' placeholder='Enter your Password'></input>
        <button type='submit'>Login</button>
    </div>
  )
}

export default Login