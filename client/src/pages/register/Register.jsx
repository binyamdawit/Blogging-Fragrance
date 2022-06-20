import "./register.css"
import { Link } from "react-router-dom"

export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label><strong>Username</strong></label>
            <input type="text" className="registerInput" placeholder="Enter your username"/>
            <label><strong>Email</strong></label>
            <input type="text" className="registerInput" placeholder="Enter your email"/>
            <label><strong>Password</strong></label>
            <input type="password" className="registerInput" placeholder="Enter your password"/>
            <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton">
          <Link className="link" to="/login">Login</Link>
        </button>
    </div>
  )
}
