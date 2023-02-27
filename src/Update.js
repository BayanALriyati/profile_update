import {React} from "react";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./register.css";


function Update() {
  return (
    <>
     <div className="login">
      <div className="loginWrapper">
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="First name" className="loginInput" /><br/>
            <input placeholder="Last name" className="loginInput" /><br/>
            <input placeholder="Email" className="loginInput" /><br/>
            <input placeholder="Password" className="loginInput" /><br/>
            <input placeholder="Phone" className="loginInput" /><br/>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Image</Form.Label>
            <Form.Control type="file" />
            </Form.Group>
            <button className="loginButton">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
      </>
  )
 }


export default Update;