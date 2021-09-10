import React from 'react'
import "./navbar.scss"
import {ArrowDropDown, Notifications, Search} from "@material-ui/icons"
import {Link} from "react-router-dom"

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = React.useState(false)

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => window.onscroll = null
    }

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
                        alt=""
                    />

                    <Link to="/" className="link">
                        <span>Homepage</span>
                    </Link>

                    <Link to="/series" className="link">
                        <span>Series</span>
                    </Link>

                    <Link to="/movies" className="link">
                        <span>Movies</span>
                    </Link>

                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>KID</span>
                    <Notifications className="icon"/>
                    <img
                        src="https://sun9-10.userapi.com/impf/c851128/v851128976/1e1048/p3g0AAM1vJs.jpg?size=1536x2048&quality=96&sign=aeac2525e7a042ddfa280b1c60ba1ce3&type=album"
                        alt=""
                    />
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar