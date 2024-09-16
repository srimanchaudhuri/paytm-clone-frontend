import { useState } from "react";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
export default function() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    return <div className=" bg-slate-300 h-screen flex justify-center">
    <div className="flex justify-center flex-col">
        <div className="bg-white h-max rounded-lg w-100 px-4 p-2 flex flex-col text-center">
        <Heading lable={'Sign up'}/>
        <SubHeading lableText={'Enter your information to create an account'}/>
        <div className="flex flex-col text-left">
        <InputBox onChange={e => {
            setFirstName(e.target.value)
        }} id={'firstName'} labelName={'First Name'} placeholder={'John'}/>
        <InputBox onChange={e => {
            setLastName(e.target.value)
        }} id={'lastName'} labelName={'Last Name'} placeholder={'Doe'}/>
        <InputBox onChange={e => {
            setUsername(e.target.value)
        }} id={'email'} labelName={'Email'} placeholder={'john23@example.com'}/>
        <InputBox onChange={e => {
            setPassword(e.target.value)
        }} id={'password'} labelName={'Password'} placeholder={'********'}/>
        </div>
        <Button onClick={
            async()=> {
                const res = await axios.post("http://localhost:3000/api/v1/user/signup", {
                    username, firstName, lastName, password
                })
                localStorage.setItem("token", res.data.token)
                navigate('/dashboard')
            }
        } name={'Sign up'}/>
        <BottomWarning to={'/signin'} warningText={'Already have an account?'} linkText={'Sign in'}/>
    </div> 
    </div>
    </div>
}