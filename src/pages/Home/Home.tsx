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
    const [genre, setGenre] = React.useState(null)

    React.useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(
                    `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
                    {
                        headers: {
                            token:
                                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMzY2ZGY0ZjRlYThjZWQzNGMxZTQyZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMTMwMTU0OSwiZXhwIjoxNjMxNzMzNTQ5fQ.skta44BT-pjrmgzcOl1M8fOMPUSMAG2QikwpFs62wjo"
                        }
                    }
                )

                setLists(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getRandomLists()
    }, [type, genre])

    return (
        <div className="home">
            <Navbar/>
            <Featured type={type}/>

            {
                lists.map((list: any) => (
                <List list={list} key={list._id}/>
            ))
            }
        </div>
    )
}

export default Home