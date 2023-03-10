import React from 'react'
import '../Pages.scss'
import Navbar from '../../components/Navbar/Navbar'

function Home() {
    return (
        <div className='section'>
            <div className="left">
                <Navbar/>
            </div>
            <div className='right'>
                <h1>salom</h1>
            </div>
        </div>
    )
}

export default Home
