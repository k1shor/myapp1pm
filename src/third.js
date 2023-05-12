import React from 'react'
import { Link } from 'react-router-dom'

const Third = () => {
    return (
        <>
        {/* <> ... </> react fragment */}
            <h1 className='myheading'>This is third page</h1>
            <div>third</div>
            <div>third division</div>
            <li style={{textAlign:'center',backgroundColor: 'yellow'}}>THirddddd</li>
            <br/>
            <hr/>
            <img src='' />
            <input type={'text'} />

<Link to='/'>Go to First page</Link>
        </>
    )
}

export default Third