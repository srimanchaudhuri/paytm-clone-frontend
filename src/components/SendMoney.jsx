import axios from "axios";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function () {

    const [amount, setAmount] = useState('')
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get("name")
    const userId = searchParams.get("id")
    const navigate = useNavigate()



    return <div className="bg-slate-100 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
        <div className="flex flex-col space-y-1.5 bg-white p-36">
            <div className=" font-bold text-3xl rounded-sm">
                Send Money
            </div>
            <div className="flex text-left">
            <div className="flex flex-row justify-center">
            <div class=" my-4 relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-green-500 rounded-full mr-4">
                    <span class="font-medium text-white">S</span>
                </div>
                <div className="flex flex-col text-xl justify-center font-semibold">
                    {name}
                </div>
            </div>
            </div>
            <div className="font-semibold text-sm">
                Amount (in Rs)
            </div>
            <div>
            <input onChange={(e) => {
                setAmount(e.target.value)
            }} type="text" class=" mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none  block w-full p-2.5" placeholder='Enter Amount' />
            </div>
            <div>
            <button onClick={async () => {
                axios.post("http://localhost:3000/api/v1/account/transfer", {
                    to: userId,
                    amount: Number(amount)
                }, {headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }})
                .then(res => {
                    alert(res.data.message)
                    navigate('/dashboard')
                })


            }} type="button" class=" mt-4 w-full text-white bg-green-500 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300
     font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Initiate Transfer</button>
            </div>
        </div>
    </div>
     </div>
}