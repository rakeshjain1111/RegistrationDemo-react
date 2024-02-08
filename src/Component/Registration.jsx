import React from 'react'
import { Button, Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './Registration.css'
function Registration() {
  return (
   <>
        {/* <div className="ractangle postion-relative"> */}
       
        <div className='rform position-absolute' style={/*{top:60,left:41}*/ {top:80,left:500}}>
            <div className='px-3 py-4 border rounded shadow-lg' style={{width:469, background:'#B4E9EF'}}>
                <div className='text-center'>
                    <h3>Registration</h3>
                    <div className='border-top border-danger my-3'></div>
                    <Form>

                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3 mx-2">
                        <Form.Check
                            inline
                            label="Personal"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                            checked
                        />
                        <Form.Check
                            inline
                            label="Company"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                        </div>
                ))}

                <div className='border-top border-danger my-3'></div>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1" className=' bg-primary'><i className="fa fa-envelope"></i></InputGroup.Text>
                    <Form.Control
                    placeholder="Email"
                    aria-label="email"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1" className='pe-3 bg-primary'><i className="fa fa-user"></i></InputGroup.Text>
                    <Form.Control
                    placeholder="User"
                    aria-label="user"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1" className='pe-3 bg-primary'><i className="fa fa-unlock "></i></InputGroup.Text>
                    <Form.Control
                    placeholder="Password"
                    aria-label="password"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>


                <div className='border-top border-danger my-3 '></div>


                {['radio'].map((type) => (
                        <div key={`inline-${type}`} >
                        <Form.Check
                            inline
                            label="Male"
                            name="group2"
                            type={type}
                            id={`inline-${type}-1`}
                            checked
                        />
                        <Form.Check
                            inline
                            label="Female"
                            name="group2"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                        </div>
                ))}
                
                    <div className='border-top border-danger my-3'></div>

                    <p className='text-center'>By clicking Register,You are agree our<br/><a href=''> Privacy Policy for w3Doc</a></p>

                    <Button variant='primary' className='w-100'>Register</Button>

                    </Form>
                </div>
            </div>
        </div>
       {/* </div> */}
   

    
   </>
  )
}

export default Registration