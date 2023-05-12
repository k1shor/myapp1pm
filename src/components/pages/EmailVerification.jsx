import React, { useEffect, useState } from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import { Link, useParams } from 'react-router-dom'
import { verifyEmail } from '../api/userAPI'

const EmailVerification = () => {
    // let params = useParams()
    // let token = params.token

    let {token} = useParams()

    let [error, setError] = useState('')
    let [success, setSuccess] = useState('')

    useEffect(() => {
        verifyEmail(token)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    setSuccess(data.msg)
                }
            })
    }, [])

    const showError = () => {
        if (error) {
            return <div className='alert alert-danger'>{error}. 
            <Link to='/resendVerification'>Resend Verification.</Link></div>
        }
    }
    const showSuccess = () => {
        if (success) {
            return <div className='alert alert-success'>{success}. <Link to='/login'>Login.</Link></div>
        }
    }

    return (
        <>
            <Navbar />
            {showError()}
            {showSuccess()}
            <Footer />
        </>
    )
}

export default EmailVerification