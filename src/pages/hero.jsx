

import React from 'react'

export default function Hero() {

  return (
    <>

    <div class="hero01  text-white text-center py-5"  style={{ backgroundImage: "url('/images/banner5.jpg')",backgroundSize: 'cover',height:'23rem'}}>
    <h1>Donate Blood, Save Lives</h1>
    <p class="p">Your donation can give someone a second chance at life.</p>
    <main class="main01">
      <div class="container mt-5" >
        <form class="row g-2">
          <div class="col-sm">
            <input type="text" class="name form-control" placeholder="Name" required/>
          </div>
          <div class="col-sm">
            <input type="number" class="name form-control" placeholder="Mobile" maxlength="10"/>
          </div>
          <div class="col-sm">
            <select class="name form-control">
              <option value="">Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div class="col-auto">
            <button type="submit" class="req_blood btn btn-danger" style={{fontWeight:'bold',fontFamily:'sans-serif', marginLeft: '20px'}}>Req Blood</button>
          </div>
        </form>
      </div>
    </main>
  </div>

    </>
  )
}
