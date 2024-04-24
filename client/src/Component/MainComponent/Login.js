import React, {useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Login = ({ setLoginUser}) => {

  const navigate = useNavigate()

  const [ user, setUser] = useState({
      email:"",
      password:""
  })

  const handleChange = e => {
      const { name, value } = e.target
      setUser({
          ...user,
          [name]: value
      })
  }

  const login = () => {
      axios.post("http://localhost:9002/login", user)
      .then(res => {

          alert(res.data.message)
          setLoginUser(res.data.user)
          navigate("/Apply")
      })
  }
  return (
    <div className="login-body">
      <div className="container container-login">
          <div className="forms">
            <h2 id="title">Login</h2>
            <div className="login">
              <div className="input-feild">
                <input type="email" name="email" value={user.email} onChange={handleChange} id="email" placeholder="enter your email" required />
                <i className="bi bi-envelope-fill" />
              </div>
              <div className="input-feild">
                <input type="password" name="password" value={user.password} onChange={handleChange} id="password" placeholder="enter your password" required />
                <i className="bi bi-lock-fill" />
              </div>
              <div className="forgot">
                <a href="/" className="text forgot">Forgot password?</a>
              </div>
              <div className=" loginbutton">
                <button type="submit"className="btn btn-primary"  onClick={login}>Submit</button>
              </div>
            </div>
            <div className="login-signup">
              <span className="not-a-member">Not a member?
                <button onClick={() => navigate("/Signup")} className="text signup-text signupnowbtn">Signup Now</button>
              </span>
            </div>
          </div>
        </div>
      </div>
  )
}
export default Login
