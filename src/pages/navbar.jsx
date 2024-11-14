


import React, { useState } from 'react'
import "../css/navbar.css"
import { NavLink } from 'react-router-dom'
import Donormodal from './Donor_modal'
import Loginmodal from './Login_modal'

export default function Navbar() {

    const [donorpopup, setdonorpopup] = useState(false)
    const [logpopup, setlogpopup] = useState(false)
    console.log('donor',donorpopup)

    const donor_popup  = ()=>{
         setdonorpopup(true)
         setlogpopup(false)
    }

    const login_popup =()=>{
        setlogpopup(true)
        setdonorpopup(false)
    }


  return (

  <>

    <nav className="navbar navbar-expand-lg bg-light shadow-sm ">

      <div className="container">

        <span className="navbar-brand">
          <img src="../images/sitelogo.png" alt="Logo" className="logo"/>
        </span>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">

          <ul className="navbar-nav me-5">
            <li className="nav-item">
              <NavLink  className={({ isActive }) =>  isActive ? "nav-link" : "nav-link active" } to="/"  >Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) =>  isActive ? "nav-link" : "nav-link active" } to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) =>  isActive ? "nav-link" : "nav-link active" } to="/what_we_do" >What We Do</NavLink>
            </li>
          </ul>

            <div className="d-flex nav-item">
               <button onClick={donor_popup} className='login01 btn btn-dark' style={{ width: "81px", height: "45px" }}>Donor</button>
            </div>

           <div className="d-flex nav-item">
            <button onClick={login_popup} className="login01 btn btn-danger">Login</button>
           </div>

        </div>

      </div>
    </nav>

   {
      donorpopup && (
         <>
             <Donormodal
               close_modal = {()=>setdonorpopup(false)}
               donor_login = {login_popup}
             />
         </>
      )
   }

   {    
        logpopup && (
          <>
              <Loginmodal
                  close_modal = {()=>setlogpopup(false)}
                  donor_modal = {donor_popup}
              />
          </>
        )
   }

  </>

  )
}
