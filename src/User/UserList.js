import React from "react"
import axios from "axios"
import Table from "./Table"

const UserList = () => {
    const [user, setUser] = React.useState([])
    React.useEffect(() => {
        axios.get("https://reqres.in/api/users?page=2").then((response => {
            console.log(response)
            setUser(response.data.data)
        }))

    }, [])

    return (
        <>
            {user && user.map((element =>{
               return <Table avatar={element.avatar} email={element.email} firstName={element.first_name} key={element.id} lastname={element.last_name}/>
            }))
            
            }

        </>
    )
}

export default UserList