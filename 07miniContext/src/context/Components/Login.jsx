import React, { useContext, useState } from 'react'
import UserContext from '../userContext'

function Login() {
  const {setUser} = useContext(UserContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit  = (e)=>{
    e.preventDefault()
    setUser({username , password})
  }
  
  
    return (
    <>
    <h2>Login</h2>
    <input 
    value = {username}
    type="text" 
    placeholder='username' 
    onChange={(e)=>{setUsername(e.target.value)}}
    
    />
    <input 
    value = {password}
    type="text" 
    placeholder='password' 
    onChange={(e)=>{setPassword(e.target.value)}}
    
    />
    <button onClick={handleSubmit} >Submit</button>
    </>
  )
}

export default Login