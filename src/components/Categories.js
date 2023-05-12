import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <>
    <div className='card-group my-5'>
        <div className='card p-4 mx-4 border border-3 rounded'>
            <div className='card-img'>
                <img src='./images/Computers.png' className='w-100' alt=''/>
            </div>
            <div className='card-desc'>
                <h4>Laptop and Computers</h4>
                <Link to='#'>Show more...</Link>
            </div>
        </div>
        <div className='card p-4 mx-4 border border-3 rounded'>
            <div className='card-img'>
                <img src='./images/Accessories.png' className='w-100' alt=''/>
            </div>
            <div className='card-desc'>
                <h4>Accessories</h4>
                <Link to='#'>Show more...</Link>
            </div>
        </div>
        <div className='card p-4 mx-4 border border-3 rounded'>
            <div className='card-img'>
                <img src='./images/phones.png' className='w-100' alt=''/>
            </div>
            <div className='card-desc'>
                <h4>Mobiles and Smartphones</h4>
                <Link to='#'>Show more...</Link>
            </div>
        </div>
        <div className='card p-4 mx-4 border border-3 rounded'>
            <div className='card-img'>
                <img src='./images/homes.png' className='w-100' alt=''/>
            </div>
            <div className='card-desc'>
                <h4>Home and Kitchen</h4>
                <Link to='#'>Show more...</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Categories