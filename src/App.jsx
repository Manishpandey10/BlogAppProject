<<<<<<< HEAD

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
    <h1>A blog app</h1>
    
    </>
  )
=======
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        TODO:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
>>>>>>> 81fcd72 (some changes)
}

export default App
