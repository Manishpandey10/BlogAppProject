
import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authWrite from './appwrite/auth_service'
import {login, logout} from './store/authSlice'


function App() {

  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()

  useEffect(()=>{

    authWrite.getCurrentUser()
    .then((userData)=>
    {
      if(userData){
        dispatch(login({userData}))
      }
      else
      {
        dispatch(logout)
      }
    }
  )
  .catch((error)=>{console.error("There's an error while logging in!", error)})
  .finally(()=>setLoading(false))
},[])
  return (
    <>
    <h1>The blog app</h1>
    
    </>
  )
}

export default App
