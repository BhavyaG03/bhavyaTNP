import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Signup = () => {

  const navigate = useNavigate()

  const [ user, setUser] = useState({
      fname: "",
      lname: "",
      email:"",
      password:"",
      reEnterPassword: ""
  })

  const handleChange = e => {
      const { name, value } = e.target
      setUser({
          ...user,
          [name]: value
      })
  }

  const Signup = () => {
      const { fname, email, password, reEnterPassword } = user
      if( fname && email && password && (password === reEnterPassword)){
          axios.post("http://localhost:9002/Signup", user)
          .then( res => {
              alert(res.data.message)
              navigate("/login")
          })
      } else {
          alert("invlid input")
      }
      
  }

  return (
    <div className='signup-body'>
      <div className="container container-signup">
          <h2 className="signuph2">Sign Up</h2>
          <div className="from-container">
            < div className="Signup">
              <div className="input-name">
                <i className="fa fa-user lock" />
                <input type="text" name="fname" value={user.fname} placeholder="First Name" className="name signupclass" onChange={ handleChange } />
                <span>
                  <i className="fa fa-user lock" />
                  <input type="text" name="lname" value={user.lname} placeholder="Last Name" className="name signupclass" onChange={ handleChange } />
                </span>
              </div>
              <div className="input-name">
                <i className="fa fa-envelope email" />
                <input type="email" name="email" value={user.email}  placeholder="Email" className="text-name signupclass" onChange={ handleChange } />
              </div>
              <div className="input-name">
                <i className="fa fa-lock  olock" />
                <input type="password" name="password" value={user.password} placeholder="Password" className="text-name signupclass" onChange={ handleChange } />
              </div>
              <div className="input-name">
                <i className="fa fa-lock   olock" />
                <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Confirm Password" className="text-name signupclass" onChange={ handleChange } />
              </div>
              <div className="input-name">
                <input type="radio" className="radio-button" name="r1" />
                <lable style={{marginRight: '30px'}}>Male</lable>
                <input type="radio" className="radio-button" name="r1" />
                <lable>Female</lable>
              </div>
              <div className="input-name term">
                <input type="checkbox" id="cb" className="check-button" />
                <label htmlFor="cb">By clicking on sign-up, you agree to this website's</label><br />
                <label htmlFor="cb" /><a href className="tb"> Terms</a> and <a href className="tb">Conditions</a>
              </div>
              <div className="input-name signupbutton">
                <input type="Submit" defaultValue="Register" onClick={Signup} className="button" />
              </div>
              <div className="login-signup">
              <span className="not-a-member">Already a member?
                <button onClick={() => navigate("/login")} className="text signup-text signupnowbtn">Sign In Now</button>
              </span>
            </div>
            </div>
          </div>
        </div>
      </div>
  )
}
export default Signup