import React from 'react'
import {Link, useLocation} from "react-router-dom"
import {ArrowBackOutlined} from "@material-ui/icons"
import "./watch.scss"

interface ILocation {
  hash: string
  key: string
  movie: Object
  pathname: string
  search: string
}

const Watch = () => {
  const location: any = useLocation()
  const movie = location.movie
  // console.log(location)
  // const history = useHistory()
  // console.log(history)


  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined/>
          Home
        </div>
      </Link>
      <video className="video"
             src={movie.video}
             autoPlay
             controls
      />
    </div>
  )
}

export default Watch