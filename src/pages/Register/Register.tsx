import React from "react"
import "./register.scss"

const Register = () => {

    const [email, setEmail] = React.useState<string | null>(null)
    const [password, setPassword] = React.useState<string | null>(null)

    const emailRef = React.useRef<HTMLInputElement | null>(null)
    const passwordRef = React.useRef<HTMLInputElement | null>(null)

    // React.useEffect(() => {
    //     emailRef.current?.focus()
    //     // passwordRef.current?.focus()
    // }, [])

    const handleStart = () => {
        setEmail(emailRef.current!.value)
    }

    const handleFinish = () => {
        setPassword(passwordRef.current!.value)
    }

    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img className="logo"
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
                         alt=""
                    />
                    <button className="loginButton">Sign In</button>
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