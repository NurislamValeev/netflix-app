import React from "react"
import "./home.scss"
import Navbar from "../Navbar/Navbar"
import Featured from "../Featured/Featured"
import List from "../List/List"

const Home: React.FC = () => {
    return (
        <div className="home">
            <Navbar/>
            <Featured/>
            <List/>
            <List/>
            <List/>
            <List/>
        </div>
    )
}

export default Home