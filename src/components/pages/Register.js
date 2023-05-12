import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { register } from '../api/userAPI'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

const Register = () => {
    let [username, setUsername] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [success, setSuccess] = useState(false)
    let [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        register(username, email, password)
        .then(data=> {
            if(data.error){
                setError(data.error)
                setSuccess(false)
            }
            else{
                setSuccess(true)
                setError('')
            }
        })
        .catch(error=> console.log(error))
    }

    const showError = () => {
        if(error){
            return <div className='alert alert-danger'>{error}</div>
        }
    }

    const showSuccess = () => {
        if(success){
            return <div className='alert alert-success'>User Registered Successfully.</div>
        }
    }

    return (
        <>
            <Navbar />
{showError()}
{showSuccess()}
            <div className='row w-100'>
                <div className='col-md-8 col-lg-6 p-5 shadow-lg m-auto'>
                    <form className='p-5 shadow-lg w-100'>
                        <h4 className='text-center'>Register</h4>
                        <div className='form-floating'>
                            <input type={'text'} className='form-control' id='fname' placeholder='xyz' 
                            onChange={(e)=>{setUsername(e.target.value)}}/>
                            <label htmlFor='fname'>User Name</label>
                        </div>
                        {/* <div className='form-floating'>
                            <input type={'text'} className='form-control' id='lname' placeholder='xyz' />
                            <label htmlFor='lname'>Last Name</label>
                        </div> */}

                        {/* <div className='form-floating'>
                            <input type={'date'} className='form-control' id='dob' placeholder='xyz' />
                            <label htmlFor='dob'>Date of Birth</label>
                        </div> */}
                        <div className='form-floating'>
                            <input type={'email'} className='form-control' id='email' placeholder='xyz' 
                            onChange={e=>setEmail(e.target.value)} />
                            <label htmlFor='email'>E-mail</label>
                        </div>
                        <div className='form-floating'>
                            <input type={'password'} className='form-control' id='pwd' placeholder='xyz' 
                            onChange={e=>setPassword(e.target.value)} />
                            <label htmlFor='pwd'>Password</label>
                        </div>
                        {/* <div className='form-floating'>
                            <input type={'number'} className='form-control' id='phone' placeholder='xyz' />
                            <label htmlFor='phone'>Phone</label>
                        </div> */}

                        {/* <div className='form-floating'>
                            <div className='form-control d-flex justify-content-evenly'>
                                <div className='gender-div'>
                                    <input type={'radio'} id='male' name='gender' />
                                    <label htmlFor='male' className='ms-2'>Male</label>
                                </div>

                                <div className='gender-div'>
                                    <input type={'radio'} id='female' name='gender' />
                                    <label htmlFor='female' className='ms-2'>Female</label>
                                </div>
                                <div className='gender-div'>
                                    <input type={'radio'} id='other' name='gender' />
                                    <label htmlFor='other' className='ms-2'>Other</label>
                                </div>
                            </div>
                            <label htmlFor='gender'>Gender</label>
                        </div> */}

                        {/* <div className='form-floating'>
                            <select className='form-control'>
                                <option>Kathmandu</option>
                                <option>Bhaktapur</option>
                                <option>Lalitpur</option>
                            </select>
                            <label>Address</label>
                        </div> */}

{/* <div className='form-floating'>
    <textarea className='form-control' placeholder='asdf' style={{height:'150px'}}></textarea>
    <label>About me</label>
</div> */}

<button className='btn btn-warning mt-2 w-100' onClick={handleSubmit}>Register</button>
Already have an account. <Link to={'/signin'}>Login</Link>
                    </form>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default Register