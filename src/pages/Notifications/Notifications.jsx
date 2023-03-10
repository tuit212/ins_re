import React from 'react'
import '../Pages.scss'
import Navbar from '../../components/Navbar/Navbar'

function Notifications() {
    return (
        <div className='section'>
            <div className="left">
                <Navbar/>
            </div>
            <div className='right'>
                <h1>notifications</h1>
            </div>
        </div>
    )
}

export default Notifications
