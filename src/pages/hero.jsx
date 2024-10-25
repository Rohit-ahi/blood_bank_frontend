

import React from 'react'
import { useState } from 'react'
import  Modal  from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function Hero() {

     const[reqpopup,setreqpopup] = useState(false)

     const[lat,setlat] = useState('')
     const[long,setlong] = useState('')

     const[mapurl,setmapurl] = useState('')
  
    const reqblood = ()=>setreqpopup(true)
    const reqClose = ()=>setreqpopup(false)
     

    const handleLatitudeChange = (e) => {
      setlat(e.target.value);
      updateMapUrl(e.target.value, long);
    };
  
    const handleLongitudeChange = (e) => {
      setlong(e.target.value);
      updateMapUrl(lat, e.target.value);
    };

    const updateMapUrl = (lat, long) => {
      if (lat && long) {
        const mapUrl = `https://maps.google.com/maps?q=${lat},${long}&z=15&output=embed`;
        setmapurl(mapUrl);
      }
    };

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
            <button onClick={reqblood} type="submit" class="req_blood btn btn-danger" style={{fontWeight:'bold',fontFamily:'sans-serif', marginLeft: '20px'}}>Req Blood</button>
          </div>
        </form>
      </div>
    </main>
  </div>

  {/* ********* */}

     <Modal show={reqpopup} onHide={reqClose}>
        <Modal.Header closeButton>
          <Modal.Title>Blood Request Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="requestDate" className="form-label">Request Date</label>
              <input type="date" className="form-control" id="requestDate" required />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <input type='text' className="form-control" id="address" rows="2" required></input>
            </div>

            <div className="mb-3">
              <label htmlFor="address" className="form-label">Reason</label>
              <textarea className="form-control" id="address" rows="2" required></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="latitude" className="form-label">Latitude</label>
              <input
                type="text"
                className="form-control"
                id="latitude"
                value={lat}
                onChange={handleLatitudeChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="longitude" className="form-label">Longitude</label>
              <input
                type="text"
                className="form-control"
                id="longitude"
                value={long}
                onChange={handleLongitudeChange}
                required
              />
            </div>

           
            {mapurl && (
              <div style={{ marginTop: '20px' }} >
                <iframe
                  title='myif'
                  src={mapurl}
                  width="100%"
                  height="300"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            )}
          
        <Modal.Footer>
          <Button variant="secondary" onClick={reqClose}>
            Close
          </Button>
          <Button variant="primary" type='submit'>
            Submit Request
          </Button>
        </Modal.Footer>
        </form>

        </Modal.Body>
      </Modal> 

      {/* *********** */}

     

    </>
  )
}
