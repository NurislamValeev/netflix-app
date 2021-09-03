import React from "react"
import "./featured.scss"
import {InfoOutlined, PlayArrow} from "@material-ui/icons"

interface IFeatured {
    type: string
}

const Featured = ({type}: IFeatured) => {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
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
                src="https://cdn.tatlerasia.com/asiatatler/i/hk/2021/06/01113317-most-watched-netflix-original-movies-2021-extraction_cover_1280x720.jpeg"
                alt=""
            />
            <div className="info">
                <img src="https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRKrgH8goki6B50_fsipiwG8-efCu0w57iY4KsMiMOkV_xpwmCR1bwdO-qexN7jGsMEEVHu_udqNGVab2eGM-RxjYidvNBjuWkAE.png?r=df1"
                     alt=""
                />
                <span className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores blanditiis eaque eligendi eum hic minus molestiae necessitatibus odit veniam. Accusamus aliquid aspernatur deserunt, exercitationem fugit minima odit sed suscipit.</span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Featured