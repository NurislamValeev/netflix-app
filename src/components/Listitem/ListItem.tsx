import React from "react"
import {Link} from "react-router-dom"
import axios from "axios"
import {Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined} from "@material-ui/icons"
import "./listItem.scss"

type ListItemPropsType = {
    index: number
    item: string
}

const ListItem: React.FC<ListItemPropsType> = ({index, item}) => {

    const [isHovered, setIsHovered] = React.useState(false)
    const [movie, setMovie] = React.useState({
        img: "",
        imgSm: "",
        trailer: "",
        duration: "",
        limit: null,
        year: "",
        desc: "",
        genre: ""
    })

    React.useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get("/movies/find/" + item, {
                    headers: {
                        token:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMzY2ZGY0ZjRlYThjZWQzNGMxZTQyZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMTg3NTg5NSwiZXhwIjoxNjMyMzA3ODk1fQ.7nfzInMHlZ19wIwv6YfwIlxyb9QHeXfo5p5xPTMX1YM"
                    }
                })
                setMovie(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getMovie()
    }, [item])

    return (
      <Link to={{pathname: "/watch", state: movie}}>
            <div className="listItem"
                 style={{left: `${isHovered && index * 225 - 50 + index * 2.5}px`}}
                 onMouseEnter={() => setIsHovered(true)}
                 onMouseLeave={() => setIsHovered(false)}
            >
                <img
                    src={movie.imgSm}
                    alt=""
                />
                {isHovered && (
                    <>
                        <video src={movie.trailer} autoPlay={true} muted loop/>
                        <div className="itemInfo">
                            <div className="icons">
                                <PlayArrow className="icon"/>
                                <Add className="icon"/>
                                <ThumbUpAltOutlined className="icon"/>
                                <ThumbDownOutlined className="icon"/>
                            </div>
                            <div className="itemInfoTop">
                                <span>{movie.duration}</span>
                                <span className="limit">+{movie.limit}</span>
                                <span>{movie.year}</span>
                            </div>
                            <div className="desc">
                                {movie.desc}
                            </div>
                            <div className="genre">{movie.genre}</div>
                        </div>
                    </>
                )}

            </div>
        </Link>

    )
}

export default ListItem