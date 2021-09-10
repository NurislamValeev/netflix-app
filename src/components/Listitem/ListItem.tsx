import React from "react"
import "./listItem.scss"
import {Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined} from "@material-ui/icons"

const ListItem = ({index, item}: any) => {

    const [isHovered, setIsHovered] = React.useState(false)

    return (
        <div className="listItem"
             style={{left: `${isHovered && index * 225 - 50 + index * 2.5}px`}}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={item.img}
                alt=""
            />
            {isHovered && (
                <>
                    <video src={item.trailer} autoPlay={true} muted loop/>
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className="icon"/>
                            <Add className="icon"/>
                            <ThumbUpAltOutlined className="icon"/>
                            <ThumbDownOutlined className="icon"/>
                        </div>
                        <div className="itemInfoTop">
                            <span>{item.duration}</span>
                            <span className="limit">+{item.limit}</span>
                            <span>{item.year}</span>
                        </div>
                        <div className="desc">
                            {item.desc}
                        </div>
                        <div className="genre">{item.genre}</div>
                    </div>
                </>
            )}

        </div>

    )
}

export default ListItem