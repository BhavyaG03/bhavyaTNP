import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../MainComponent/UserContext'

export default function Header() {
  const{setUserInfo,userInfo}=useContext(UserContext)
  useEffect(()=>{
    fetch(`http://localhost:4000/profile`,{
      credentials:'include'
    }).then(response=>{
      response.json().then(userInfo=>{
        setUserInfo(userInfo)
      })
    })
  },[])
  function logout() {
    fetch('http://localhost:4000/logout',{
      credentials :'include',
      method:'POST',
    })
    setUserInfo(null)
}
const username=userInfo?.username
  return (
    <div>
    <header className="p-3 text-bg-dark bg-black sticky-top sticky">
          <div className="container-fluid">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <img width={100} height={86} src='wwww.png' ></img>
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 ms-4 justify-content-center mb-md-0">
                <li><a href="/" className="nav-a px-2 text-light fs navh"><span className="navh"> Home </span></a></li>
                <li><a href="/About" className="nav-a px-2 text-light fs navh"><span className="navh"> About </span></a></li>
                <li><a href="/Contact" className="nav-a px-2 text-light fs navh"><span className="navh"> Contact </span></a></li>
                <li><a href="/Faq" className="nav-a px-2 text-light fs navh"><span className="navh"> FAQs </span></a></li>
                <li><a href="/Company" className="nav-a px-2 text-light fs navh"><span className="navh"> Company </span></a></li>
              </ul>
              <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
              </form>
              <div className="text-end">
              {username && (
          <>
            <a onClick={logout}>Logout</a>
          </>
        )}
        {!username && (<>
          <Link to="/login" className="btn btn-warning sb">Login</Link>
        <Link to="/register" className="btn btn-outline-danger me-2 lb">Register</Link>
        </>)}
              </div>
            </div>
          </div>
        </header>
      </div>
  );
}
