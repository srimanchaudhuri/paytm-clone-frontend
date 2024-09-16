import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Users = () => {
    const [users, setUsers] = useState([])
    const [filter, setFilter] = useState("")

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
        .then(res => {
            setUsers(res.data.user)
        })

    }, [filter])

    return <div className="p-4">
        <div className="font-bold mt-6 text-lg">
            Users
        </div>
        <div className="my-2">
            <input onChange={e => {
                setFilter(e.target.value)
            }} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none  block w-full mt-2 p-2.5" placeholder="Search users..." />
        </div>
        <div>
            {users.map(user => <User key={user._id} user={user} />)}
        </div>
    </div>
}

function User({user}) {

    const navigate = useNavigate()

    return <div className="flex justify-between">
        <div className="flex">
            <div className="flex flex-col justify-center">
            <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-200 rounded-full mr-4">
                    <span className="font-medium text-gray-600">{user.firstName[0]}</span>
                </div>
            </div>
            <div className="flex flex-col justify-center">
                {user.firstName} {user.lastName}
            </div>
        </div>
        <div className="flex flex-col justify-center">
        <button onClick={(e) =>{
            navigate(`/send?id=${user._id}&name=${user.firstName}`)
        }} type="button" className=" mt-4 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300
     font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700
      dark:border-gray-700">Send Money</button>
        </div>
    </div>
}
