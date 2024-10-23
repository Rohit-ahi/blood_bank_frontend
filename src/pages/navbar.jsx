


import React, { useState } from 'react'
import "../css/navbar.css"
import { NavLink } from 'react-router-dom'

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

    const closeDonorPopup = ()=>{
        setdonorpopup(false)
    }

    const closeLogPopup =  ()=>{
         setlogpopup(false)
    }


  return (
   <>

    <div className="box">

    <nav className="navbar navbar-expand-lg bg-light shadow-sm ">

      <div className="container">

        <span className="navbar-brand">
          <img src="../images/sitelogo.png" alt="Logo" className="logo"/>
        </span>
  

                {/* for responsive small screen  */}
    {/*                 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>   */}

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
          
            <div className="d-flex">
               <button onClick={donor_popup} className='login01 btn  btn-dark me-2'>Donor</button>
            </div>

           
           <div className="d-flex">
            <button onClick={login_popup} className="login01 btn btn-danger me-2" style={{ marginLeft: '2rem'}}>Login</button>
           </div>

        </div>

      </div>
    </nav>

  </div>


  {donorpopup && (

                <div className="modal fade show" id="donorModal" tabIndex="-1" aria-labelledby="donorModalLabel" aria-hidden="true" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="donorModalLabel">Become a Donor</h5>
                                <button type="button" className="btn-close" onClick={closeDonorPopup} aria-label="Close"></button>
                            </div>

                            <div className="modal-body">
                                <form id="donorForm">
                                    <div className="mb-3">
                                        <label htmlFor="donorName" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="donorName" placeholder="Enter your name" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="donorMobile" className="form-label">Mobile</label>
                                        <input type="tel" className="form-control" id="donorMobile" placeholder="Enter your mobile number" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="donorGender" className="form-label">Gender</label>
                                        <select className="form-select" id="donorGender">
                                            <option selected>Select your gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="donorBloodGroup" className="form-label">Blood Group</label>
                                        <select className="form-select" id="donorBloodGroup">
                                            <option selected>Select your blood group</option>
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                        </select>
                                    </div>

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={closeDonorPopup}>Close</button>
                                        <button type="submit" className="btn btn-primary">Next</button>
                                    </div>
                                </form>
                                <div className="text-center mt-3">
                                    <span>Already have an account? <a className="nav-link" href="/#" onClick={login_popup}> <p style={{ color: 'red' }}>Sign in</p> </a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}



  {

    logpopup && (

    <div className="modal show" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="loginModalLabel">Login</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={closeLogPopup}></button>
          </div>
          <div className="modal-body">
            <form id="loginForm">
              <div className="mb-3">
                <label htmlFor="loginEmail" className="form-label">Email</label>
                <input type="email" className="form-control" id="loginEmail" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label htmlFor="loginPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="loginPassword" placeholder="Enter your password" />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeLogPopup}>Close</button>
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="text-center mt-3">
              <span>Don't have an account? <a className="nav-link" href="/#" onClick={donor_popup}><p style={{ color: 'red' }}>Sign up</p></a></span>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

  

  </> 

  )
}
