import React from 'react'
import {ArrowBackOutlined} from "@material-ui/icons"
import "./watch.scss"

const Watch = () => {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined/>
                Home
            </div>
            <video className="video"
                   src="https://media.w3.org/2010/05/sintel/trailer.mp4"
                   autoPlay
                   controls
            />
        </div>
    )
}

export default Watch