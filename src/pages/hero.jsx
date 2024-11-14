

import React from 'react'
import { useState } from 'react'
import {Modal , Button} from 'react-bootstrap'
import '../css/hero.css'


export default function Hero() {

     const[reqpopup,setreqpopup] = useState(false)

     console.log('reqpopup',reqpopup)

     const[lat,setlat] = useState('')
     const[long,setlong] = useState('')

     const[mapurl,setmapurl] = useState('')
  
    const reqblood = (e)=>{
      e.preventDefault()
      setreqpopup(true)
      e.target.reset()
    }
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

    <div className="hero01  text-white text-center py-5"  style={{ backgroundImage: "url('/images/banner5.jpg')",backgroundSize: 'cover'}}>

    <h1>Donate Blood, Save Lives</h1>
    <p className="p">Your donation can give someone a second chance at life.</p>
    <main className="main05">
      <div className="container mt-5" >
      <form onSubmit={reqblood}>
        <div className="row g-2">
          <div className="col-sm">
            <input type="text" className="abc form-control" placeholder="Name" required/>
          </div>
          <div className="col-sm">
            <input type="number"className=" abc form-control" placeholder="Mobile" maxlength="10" required/>
          </div>
          <div className="col-sm">
            <select className=" abc form-control" required>
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
          <div className="col-auto">
            <button className=" tb0 btn" type='submit'>Req Blood</button>
          </div>
        </div>
      </form>

    </div>
  </main>

  </div>

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
              <input type='text' className="form-control" id="address" rows="2" required />
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

    </>
  )
}
