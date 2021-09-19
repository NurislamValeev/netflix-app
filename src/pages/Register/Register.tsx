import axios from "axios"
import React from "react"
import "./register.scss"
import {Link, useHistory} from "react-router-dom"

const Register = () => {

  const [email, setEmail] = React.useState<string | null>(null)
  const [password, setPassword] = React.useState<string | null>(null)
  const [username, setUsername] = React.useState<string | null>(null)
  const history = useHistory()

  const emailRef = React.useRef<HTMLInputElement | null>(null)
  const usernameRef = React.useRef<HTMLInputElement | null>(null)
  const passwordRef = React.useRef<HTMLInputElement | null>(null)

  // React.useEffect(() => {
  //     emailRef.current?.focus()
  //     // passwordRef.current?.focus()
  // }, [])

  const handleStart = () => {
    setEmail(emailRef.current!.value)
  }

  const handleFinish = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setPassword(passwordRef.current!.value)
    setUsername(usernameRef.current!.value)
    try {
      await axios.post("auth/register", {email, username, password})
      history.push("/login")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img className="logo"
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
               alt=""
          />
          <Link className="loginButton" to={"/login"}>Sign In</Link>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        {
          !email
            ? (
              <div className="input">
                <input type="email" placeholder="Email address" ref={emailRef} autoFocus/>
                <button className="registerButton" onClick={handleStart}>Get Started</button>
              </div>
            )
            : (
              <form className="input">
                <input type="username" placeholder="username" ref={usernameRef} autoFocus/>
                <input type="password" placeholder="Password" ref={passwordRef} autoFocus/>
                <button className="registerButton" onClick={handleFinish}>Start</button>
              </form>
            )
        }

      </div>
    </div>
  )
}

export default Register