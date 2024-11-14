

import React, {useState } from 'react'
import {Modal, Button} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { toast , ToastContainer } from 'react-toastify'


export default function Emailvarify() {

        const apiurl = process.env.REACT_APP_API_URL
        console.log('apiurl',apiurl)
        const {tok} = useParams()
        console.log('token',tok)

        const[showmodal,setshowmodal] = useState(true)
        const close = ()=> setshowmodal(false)

        const [formdata , setformdata] = useState({})
        const data = (e)=>{
            const {name ,value} =  e.target

            setformdata({
                 ...formdata ,
                 [name] : value
            })

        }
        console.log('formdata',formdata)

        const send_data = (e)=>{
            e.preventDefault()

            fetch(`${apiurl}/noauth/email/verification/${tok}`,{
               method:"Put",
               headers:{
                   'Content-Type': 'application/json'
               },
               body:JSON.stringify(formdata)
            })
            .then(res=>res.json()).then(data=>{
                 console.log('data',data)

                 if(data.status) {

                  const msg = <div style={{
                    color: '#155724',  
                    fontSize: '16px',
                    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
                    lineHeight: '1.5',
                    padding: '8px',  
                   }}>
                      <strong>Successfully Email Verify</strong><br />
                      Please log in your account. 
                  </div>

                   toast.success(msg,{
                    position:'top-center',
                    autoClose:8000,
                    closeOnClick:true,
                    pauseOnHover:true,
                    draggable:true,
                    hideProgressBar:true,
                    progress:undefined,
                    style: {
                     backgroundColor: '#d4edda',  
                     borderRadius: '8px',
                     border: '1px solid #c3e6cb',
                    } 
                   })

                }else {

                  const msg = <div style={{
                    color: '#155724',  
                    fontSize: '16px',
                    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
                    lineHeight: '1.5',
                    padding: '8px',  
                }}>
                      <strong>{data.msg}</strong><br /> 
                </div>
                       toast.error(msg,{
                           position:'top-center',
                           autoClose:8000,
                           closeOnClick:true,
                           pauseOnHover:true,
                           draggable:true,
                           hideProgressBar:true,
                           progress:undefined,
                           style: {
                            backgroundColor: '#d4edda',  
                            borderRadius: '8px',
                            border: '1px solid #c3e6cb',
                            
                          }
                       })
                }
            })
            .catch((err)=>{
                 console.log('error',err.message)
            })

            e.target.reset()
        }

        if (!tok) return <p>Loading...</p>;
      
  return (
    <>
        

        <Modal show={showmodal} onHide={close}>
        <Modal.Header closeButton>
        <Modal.Title>Varify Email</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <form onSubmit={send_data}>
            <div className="mb-3">
              <label htmlFor="pass" className="form-label">Password</label>
              <input type="password" className="form-control" id="pass" name='password' onChange={data} required />
            </div>
            <div className="mb-3">
              <label htmlFor="dob" className="form-label">DOB</label>
              <input type='date' className="form-control" id="dob" rows="2" name='DOB' onChange={data} required></input>
            </div>
            <div className="mb-3">
              <label htmlFor="latitude" className="form-label">Latitude</label>
              <input
                type="text"
                className="form-control"
                id="latitude"
                name='loc_lat'
                onChange={data}
                
              />
            </div>
            <div className="mb-3">
              <label htmlFor="longitude" className="form-label">Longitude</label>
              <input
                type="text"
                className="form-control"
                id="longitude"
                name='loc_long'
                onChange={data}
               
              />
            </div>
          
         <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
          <Button variant="primary" type='submit'>
            Submit
          </Button>
        </Modal.Footer> 
        
        </form>
 
        </Modal.Body>
      </Modal>  

      <ToastContainer/>

    </>
  )
}

