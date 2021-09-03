import React from "react"
import "./home.scss"
import Navbar from "../Navbar/Navbar"
import Featured from "../Featured/Featured"

const Home: React.FC = () => {
    return (
        <div className="home">
            <Navbar/>
            <Featured type="movie"/>
        </div>
    )
}

export default Home