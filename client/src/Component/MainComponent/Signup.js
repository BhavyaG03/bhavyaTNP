import {React,useState} from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom';
const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const[redirect,setRedirect]=useState(false)
    const register=async(e)=>{
        e.preventDefault()
          const response = await axios.post('http://localhost:4000/register',
          {
            username:username,
            password:password
          })
          if (response.status===201) {
            console.log(response.data)
            alert('Registration successful')
            setRedirect(true)
          } else {
            alert('Registration failed')
          }
          
         
         setUsername('');
         setPassword('');
    }
    if (redirect) {
      return<Navigate to={'/login'}></Navigate>
    }
  return (
    <div>
        <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input type="text"
             placeholder="username"
             value={username}
             onChange={e => setUsername(e.target.value)}/>
      <input type="password"
             placeholder="password"
             value={password}
             onChange={e => setPassword(e.target.value)}/>
      <button>Register</button>
    </form>
    </div>
  )
}

export default Signup