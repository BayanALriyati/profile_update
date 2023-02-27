import {React} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./register.css";
import {useState ,useEffect} from "react";

function Edit() {
  const [user , setUser] = useState({});

  useEffect(()=>{
     var data = localStorage.getItem('user');
     data = JSON.parse(data);
     setUser((data));
     console.log(data);
  },[])
    const navigate = useNavigate();
    // const [user , setUser] = useState({});
    const [id , setId ] = useState('');
    const [first , setFirst ] = useState('');
    const [last , setLast ] = useState('');
    const [email , setEmail ] = useState('');
    const [password , setPassword ] = useState('');
    const [phone , setPhone ] = useState('');
     const handleId = (e) => {
      setId(e.target.value)
  }
    const handleFirst = (e) => {
        setFirst(e.target.value)
        
    }
    const handleLast = (e) => {
        setLast(e.target.value)
        // console.log(e.target.value,"nnn");
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
    const handleSubmit = (e) => {
      
      const user = {
        // id : id,
        first : first,
        last : last,
        email : email,
        password : password,
        phone : phone,
      }
      // let data = localStorage.getItem('user');
    //  data = JSON.parse(data);
    //  setUser((data));
      localStorage.setItem('user' , JSON.stringify(user));
      // localStorage.getItem('user' , JSON.stringify(user));
      console.log(localStorage.setItem('user' , JSON.stringify(user)),"mmmmmmoooooooooo");
       axios.put(`http://localhost/Backend/update.php?id=1&first_name=${first}&last_name=${last}&email=${email}&password=${password}&phone=${phone}`)
              .then((response)=>{
                  // console.log(response.data ,"mmmmmmppppp");
              })
              
      navigate('/')
    }
    
  return (
    <>
     <div className="login">
      <div className="loginWrapper">
        <div className="loginRight">
          <div className="loginBox">
            <input type="hidden" value={id} onChange={(e) => handleId(e)} className="loginInput"/><br/>
            <input placeholder="First name"  name="first" onChange={(e) => handleFirst(e)} className="loginInput" defaultValue={user.first} /><br/>
            <input placeholder="Last name"  name="last" onChange={(e) => handleLast(e)} className="loginInput" defaultValue={user.last} /><br/>
            <input placeholder="Email"  name="email" onChange={(e) => handleEmail(e)} className="loginInput" defaultValue={user.email} /><br/>
            <input placeholder="Password"  name="password" onChange={(e) => handlePassword(e)} className="loginInput" defaultValue={user.password} /><br/>
            <input placeholder="Phone"  name="phone" onChange={(e) => handlePhone(e)} className="loginInput" defaultValue={user.phone} /><br/>
            <button className="loginButton" type="submit" onClick={handleSubmit}>Edit</button>
          </div>
        </div>
      </div>
    </div>
      </>
  )
 }
//  onClick={(e) => handleSubmit(e)}


export default Edit;