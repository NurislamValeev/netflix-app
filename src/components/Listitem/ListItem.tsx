import React from "react"
import "./listItem.scss"
import {Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined} from "@material-ui/icons"

interface IListItemProps {
    index: number
}

const ListItem = ({index}: IListItemProps) => {

    const [isHovered, setIsHovered] = React.useState(false)
    const trailer = "http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"

    return (
        <div className="listItem"
             style={{left: `${isHovered && index * 225 - 50 + index * 2.5}px`}}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src="https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*35*41_8_muochl_mvg%5Bwmn%5Bzkr%5Be3%5B9WD3XwV5tBgBc1rb6zq1th0DgCV%5BZZZZYAEyNPYHHLRsHBJfS70vsVsLIzrQuZHL5B7FxJcsWQVdxXUIXfE2G2ujnCjALaXd629avV*jMREiITFLsO2bb49%5DbHh.jpg"
                alt=""
            />
            {isHovered && (
                <>
                    <video src={trailer} autoPlay={true} muted loop/>
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className="icon"/>
                            <Add className="icon"/>
                            <ThumbUpAltOutlined className="icon"/>
                            <ThumbDownOutlined className="icon"/>
                        </div>
                        <div className="itemInfoTop">
                            <span>1 hour 14 mins</span>
                            <span className="limit">+16</span>
                            <span>2001</span>
                        </div>
                        <div className="desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ea sequi sint suscipit. Corporis
                            culpa dolor!
                        </div>
                        <div className="genre">Action</div>
                    </div>
                </>
            )}

        </div>

    )
}

export default ListItem