import React from 'react'
import { NavLink , Link } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
    return (
        <div className='navbar'>
            <Link to={"/home"} className='logo'>
                Instagram
            </Link>
            <NavLink to={"/home"} className='link'>
                <i class="fa-solid fa-house"></i>
                Home
            </NavLink>
            <NavLink to={"/search"} className='link'>
                <i class="fa-solid fa-search"></i>
                Search
            </NavLink>
            <NavLink to={"/explore"} className='link'>
                <i class="fa-solid fa-compass"></i>
                Explore
            </NavLink>
            <NavLink to={"/reels"} className='link'>
                <i class="fa fa-clapperboard"></i>
                Reels
            </NavLink>
            <NavLink to={"/messages"} className='link'>
                <i class="fa-brands fa-facebook-messenger"></i>
                Messages
            </NavLink>
            <NavLink to={"/notifications"} className='link'>
                <i class="fa-solid fa-heart"></i>
                Notifications
            </NavLink>
            <NavLink to={"/create"} className='link'>
                <i class="fa-regular fa-square-plus"></i>
                Create
            </NavLink>
            <NavLink to={"/profile"} className='link'>
                <i class="fa-solid fa-user"></i>
                Profile
            </NavLink>
        </div>
    )
}

export default Navbar
