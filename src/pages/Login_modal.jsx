

import React from 'react'
import {Modal,Button} from "react-bootstrap"

export default function Loginmodal({close_modal,donor_modal}) {

  return (
    <>
        <Modal show={true} onHide={close_modal}>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                 <form>

                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>Email</label>
                        <input type="email" id='email' placeholder='Enter email' className='form-control' required />
                    </div> 
                    <div className='mb-3'>
                        <label htmlFor='pass' className='form-label'>Password</label>
                        <input type="password" id='pass' placeholder='Enter password' className='form-control' required />
                    </div> 

                    <Modal.Footer>
                         <Button variant='primary' type='submit'>Login</Button>
                         <Button variant='secondary' onClick={close_modal}>Close</Button>
                    </Modal.Footer>

                    <div className='text-center'>
                        <span> Don't have an account? <p style={{color:'red',cursor:'pointer'}} onClick={()=>donor_modal()}>Sign up</p></span>
                    </div>
                 </form>
            </Modal.Body>
        </Modal>  
    </>
  )
}
