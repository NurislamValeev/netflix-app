import React from "react"
import "./home.scss"
import Navbar from "../../components/Navbar/Navbar"
import Featured from "../../components/Featured/Featured"
import List from "../../components/List/List"

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