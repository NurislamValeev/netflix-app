import React, {PropsWithChildren} from 'react'
import "./list.scss"
import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from "@material-ui/icons"
import ListItem from "../Listitem/ListItem"

const List: React.FC<PropsWithChildren<any>> = ({list}) => {
  const [slideNumber, setSlideNumber] = React.useState(0)
  const [clickLimit, setClickLimit] = React.useState(window.innerWidth / 230)
  const [isMoved, setIsMoved] = React.useState(false)

  const listRef = React.useRef<HTMLDivElement>(null)

  const handleClick = (direction: string) => {
    if (null !== listRef.current) {
      setIsMoved(true)
      let distance = listRef.current.getBoundingClientRect().x - 50

      if (direction === 'left' && slideNumber > 0) {
        setSlideNumber(slideNumber - 1)
        listRef.current.style.transform = `translateX(${230 + distance}px)`
      }

      if (direction === 'right' && slideNumber < 10 - clickLimit) {
        setSlideNumber(slideNumber + 1)
        listRef.current.style.transform = `translateX(${-230 + distance}px)`
      }
    }
  }

  return (
    <div className="list">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined className="sliderArrow left"
                              onClick={() => handleClick("left")}
                              style={{display: !isMoved ? "none" : "block"}}
        />
        <div className="container" ref={listRef}>
          {
            list.content.map((item: string, i: number) => (
              <ListItem index={i} item={item} key={`${item}${i}`}/>
            ))
          }
        </div>
        <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick("right")}/>
      </div>
    </div>
  )
}

export default List