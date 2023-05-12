import React from 'react'
import { Link } from 'react-router-dom'

const Firstpage = () => {
  return (
    <div>
      <h1>This is a first page</h1>
      <Link to={'/third'}>Third Page</Link>

      
      <h1 className="text-3xl font-bold underline bg-lime-500 text-red-300">
        Hello world!
      </h1>
    </div>
  )
}

export default Firstpage


// jsx - javascript extensive
