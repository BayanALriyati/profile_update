import {React} from "react";
import { useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./register.css";
import {useState} from "react";

function Add() {
    const [id , setId ] = useState('');
    const [first , setFirst ] = useState('');
    const [last , setLast ] = useState('');
    const [email , setEmail ] = useState('');
    const [password , setPassword ] = useState('');
    const [phone , setPhone ] = useState('');
    const navigate = useNavigate();

    const handleId = (e) => {
      setId(e.target.value)
  }
    const handleFist = (e) => {
        setFirst(e.target.value)
    }
    const handleLast = (e) => {
        setLast(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
       setPassword(e.target.value)
    }
    const handlePhone = (e) => {
        setPhone(e.target.value)
    }
    const handleSubmit = () => {
        const user = {
          id :id ,
          first : first,
          last : last,
          email : email,
          password : password,
          phone : phone,
        }
         localStorage.setItem('user' , JSON.stringify(user))
         navigate('/')

    }
  return (
    <>
     <div className="login">
      <div className="loginWrapper">
        <div className="loginRight">
          <div className="loginBox">
            <input type="hidden" value={id} onChange={(e) => handleId(e)} className="loginInput" /><br/>
            <input placeholder="First name"   value={first} onChange={(e) => handleFist(e)} className="loginInput" /><br/>
            <input placeholder="Last name"   value={last}  onChange={(e) => handleLast(e)} className="loginInput" /><br/>
            <input placeholder="Email"   value={email}  onChange={(e) => handleEmail(e)} className="loginInput" /><br/>
            <input placeholder="Password" value={password}  onChange={(e) => handlePassword(e)} className="loginInput" /><br/>
            <input placeholder="Phone"  value={phone}  onChange={(e) => handlePhone(e)} className="loginInput" /><br/>
            <button className="loginButton" type="submit" onClick={handleSubmit}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
      </>
  )
 }


export default Add;