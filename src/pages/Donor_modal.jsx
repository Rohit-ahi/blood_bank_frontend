

import React, { useState } from 'react'
import {Modal , Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { toast , ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { storetoken } from '../redux/slice'


export default function Donormodal({close_modal,donor_login}) {

      const apiurl = process.env.REACT_APP_API_URL 
      console.log('apiurl',apiurl)
      const dispatch = useDispatch()
      const [formdata , setformdata] = useState({})

      const data = (e)=>{
            const {name , value}  = e.target 
            setformdata({
                ...formdata ,
                [name] : value     // name ki value key hogi 
            })
      } 

      const reg_data = (e)=>{
            e.preventDefault()

            const sendata = {...formdata}

            fetch(`${apiurl}/noauth/register`,{
                method:"POST",
                headers :{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(sendata)
            })
            .then(res=>res.json()).then(data=>{
                 console.log('data**',data)
                if(data.status) {
                    const msg = <div style={{
                        color: '#155724',  
                        fontSize: '16px',
                        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
                        lineHeight: '1.5',
                        padding: '8px',  
                    }}>
                          <strong>Verification Email Sent!</strong><br />
                          Please check your inbox to verify your account. 
                    </div>
                    toast.success(msg,{
                        position:'top-center',
                        autoClose:3000 ,
                        closeOnClick :true,
                        pauseOnHover:true ,
                        draggable:true,
                        hideProgressBar:true,
                        progress:undefined,
                        style: {
                            backgroundColor: '#d4edda',  // Light green background for success
                            borderRadius: '8px',
                            border: '1px solid #c3e6cb'
                          }
                   })

                    const token = data.data
                    dispatch(storetoken(token))
                    
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
                        autoClose:8000 ,
                        closeOnClick :true,
                        pauseOnHover:true ,
                        draggable:true,
                        hideProgressBar:true,
                        progress:undefined,
                        style: {
                            backgroundColor: '#d4edda',  // Light green background for success
                            borderRadius: '8px',
                            border: '1px solid #c3e6cb'
                          }
                   })
                } 
            })

            .catch((err)=>{
                  
                toast.error(err,{
                    position:'top-center',
                    autoClose:3000 ,
                    closeOnClick :true,
                    pauseOnHover:true ,
                    draggable:true,
                    hideProgressBar:true,
                    style: {
                        backgroundColor: '#d4edda',  // Light green background for success
                        borderRadius: '8px',
                        border: '1px solid #c3e6cb'
                      }
               })
            })

            e.target.reset()
      }


      
  return (
    <>

        <Modal show={true} onHide={close_modal}>
              <Modal.Header closeButton>
                  <Modal.Title>Add Donor</Modal.Title>
              </Modal.Header> 

              <Modal.Body>

                <form onSubmit={reg_data}>

                    <div className='mb-3'>
                        <label htmlFor='name' className='form-label'>Name</label>
                        <input type="text" id='name' placeholder='Enter your name' className='form-control'  name='name' onChange={data} required/>
                    </div>
                            
                    <div className='mb-3'>
                        <label htmlFor="mobile" className='form-label'>Mobile</label>
                        <input type="text" id='mobile' placeholder='Enter your mobile number' name='mobile' onChange={data} className='form-control' pattern='[0-9]{10}' title='please enter a 10 digit number' required/>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input type="text" id='email' className='form-control' placeholder='Enter your Email' name='email' onChange={data} required/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Gender" className="form-label">Gender</label>
                        <select className="form-select" id="Gender" name='gender' onChange={data} required>
                            <option value=''>Select your gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="mb-2">
                        <label htmlFor="donorBloodGroup" className="form-label">Blood Group</label>
                        <select className="form-select" id="donorBloodGroup" name='bloodGroup' onChange={data}  required>
                            <option value=''>Select your blood group</option>
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

                    <Modal.Footer>
                          <Button variant='primary'  type='submit'>Submit</Button> &nbsp; 
                          <Button variant='secondary' onClick={close_modal}>Close</Button>
                    </Modal.Footer>
                    <div className="text-center mt-2">
                        <span>Already have an account? <a className="nav-link" href='/#'  onClick={()=>donor_login()}> <p style={{ color: 'red',cursor:"pointer" }}>Sign in</p> </a></span>
                    </div>
                </form>  

              </Modal.Body> 
        </Modal>   

                     
      <ToastContainer/>
        

    </>
  )
}
