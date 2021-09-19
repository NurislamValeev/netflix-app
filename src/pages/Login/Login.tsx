import React, { useContext } from "react"
import {login} from "../../authContext/apiCalls"
import "./login.scss"
import {AuthContext} from "../../authContext/AuthContext"

const Login = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const {dispatch} = useContext(AuthContext)

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    login({email, password}, dispatch)
  }

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img className="logo"
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
               alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email"
                 placeholder="Email or phone number"
                 onChange={(e) => setEmail(e.target.value)}
          />
          <input type="password"
                 placeholder="Password"
                 onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}>Sign In</button>
          <span>New to Netflix? <b>Sign up now.</b></span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  )
}

export default Login