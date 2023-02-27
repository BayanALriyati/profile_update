import {React, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom"
import "./register.css";
// import 'bootstrap/dist/css/bootstrap.min.css';


function Profile() {
  const navigate = useNavigate()
  const [user , setUser] = useState({});

  useEffect(()=>{
     var data = localStorage.getItem('user');
     data = JSON.parse(data);
     setUser((data));
  },[])

  
  const handleEdit = (user) => {
    localStorage.setItem('editIndex', user)
    navigate('/edit')
}
  return (
    <>
     <div className="profile">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/7.jpeg"
                alt=""
              />
            </div>
            
            <div className="profileInfo">
                <span className="profileInfoDesc">Hello my friends!</span>
                <p>{user.first} {user.last}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.password}</p>
                <button onClick={(user) => handleEdit(user)}>Update</button>
                
              
            </div>
         
          </div>
        </div>
      </div>
  {/* //  )})} */}
      </>
    
  )
 }


export default Profile;