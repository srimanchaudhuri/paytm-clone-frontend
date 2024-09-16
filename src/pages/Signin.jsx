import { useState } from "react";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()


    return <div className=" bg-slate-300 h-screen flex justify-center">
    <div className="flex justify-center flex-col text-center">
        <div className="bg-white h-max rounded-lg w-100 px-4 p-2">
        <Heading lable={'Sign in'} />
        <SubHeading lableText={'Enter your credentials to access your account'}/>
        <div className="text-left">
        <InputBox onChange={e => {
            setUsername(e.target.value)
        }} id={'email'} labelName={'Email'} placeholder={'john23@example.com'}/>
        <InputBox onChange={e => {
            setPassword(e.target.value)
        }}
        id={'password'} labelName={'Password'} placeholder={'********'}/>
        </div>
        <Button 
        onClick={async () => {
            const res = await axios.post("http://localhost:3000/api/v1/user/signin", {
                username, password
            })
            console.log(res.data.token);
            localStorage.setItem('token', res.data.token)
            navigate('/dashboard')
        }}
        name={'Sign in'}/>
        <BottomWarning to={'/signup'} warningText={'Don\'t have an account?'} linkText={'Sign up'}/>
    </div>
    </div> 
    </div>
}