import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function() {
    const navigate = useNavigate()
 
    return <div className=" shadow h-14 flex flex-row justify-between">
        <div className="flex flex-col justify-center h-full mx-4">
            PayTM App
        </div>
        <div className="flex flex-row justify-center">
            <div onClick={() => {
                localStorage.removeItem("token")
                navigate('/signup')
            }} className=" flex flex-col justify-center mr-4 font-medium cursor-pointer">
                Logout
            </div>
        </div>
    </div>
}