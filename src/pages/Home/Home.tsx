import React from "react"
import "./home.scss"
import Navbar from "../../components/Navbar/Navbar"
import Featured from "../../components/Featured/Featured"
import List from "../../components/List/List"
import axios from "axios"

type HomePropsType = {
  type?: string
}

// type ListType = {
//     content: Array<string>
//     createdAt: string
//     genre: string
//     title: string
//     type: string
//     updatedAt: string
//     __v: number
//     _id: string
// }

const Home = ({type}: HomePropsType) => {
  const [lists, setLists] = React.useState([])
  const [genre, setGenre] = React.useState("")

  React.useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMzY2ZGY0ZjRlYThjZWQzNGMxZTQyZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMTg3NTg5NSwiZXhwIjoxNjMyMzA3ODk1fQ.7nfzInMHlZ19wIwv6YfwIlxyb9QHeXfo5p5xPTMX1YM"
            }
          }
        )

        setLists(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getRandomLists()
  }, [genre, type])

  return (
    <div className="home">
      <Navbar/>
      <Featured type={type} setGenre={setGenre}/>

      {
        lists.map((list: any) => (
          <List list={list} key={list._id}/>
        ))
      }
    </div>
  )
}

export default Home