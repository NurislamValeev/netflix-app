import React, {ChangeEvent, Dispatch, SetStateAction} from "react"
import axios from "axios"
import "./featured.scss"
import {PlayArrow} from "@material-ui/icons"
import {Link} from "react-router-dom"

type FeaturedPropsType = {
  type?: string
  setGenre: Dispatch<SetStateAction<string>>
}

const Featured: React.FC<FeaturedPropsType> = ({type, setGenre}) => {
  const [content, setContent] = React.useState({
    img: "",
    imgTitle: "",
    imgSm: "",
    desc: "",
    video: "",
    trailer: "",
    duration: "",
    limit: null,
    year: "",
    genre: ""
  })

  React.useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMzY2ZGY0ZjRlYThjZWQzNGMxZTQyZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMTg3NTg5NSwiZXhwIjoxNjMyMzA3ODk1fQ.7nfzInMHlZ19wIwv6YfwIlxyb9QHeXfo5p5xPTMX1YM"
            }
          })
        setContent(res.data[0])
      } catch (err) {
        console.log(err)
      }
    }
    getRandomContent()
  }, [type])

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setGenre(e.target.value)}
          >
            <option value="">Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src={content.img}
        alt=""
      />
      <div className="info">
        <img src={content.imgTitle}
             alt=""
        />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <Link to={{pathname: "/watch", state: content} as Object} className="play">
            <button className="playButton">
              <PlayArrow/>
              Play
            </button>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default Featured