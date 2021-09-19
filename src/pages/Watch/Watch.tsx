import React from 'react'
import {Link, useLocation} from "react-router-dom"
import {ArrowBackOutlined} from "@material-ui/icons"
import "./watch.scss"

const Watch = () => {

  type LocationParamsType = {
    video: string
  }
  const location = useLocation<LocationParamsType>()
  const {state} = location


  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined/>
          Home
        </div>
      </Link>
      <video className="video"
             src={state.video}
             autoPlay
             controls
      />
    </div>
  )
}

export default Watch