import React from 'react'
import { NavLink , Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <Link to={"/home"}>
                Instagram
            </Link>
            <NavLink to={"/home"}>
                <i class="fa-solid fa-house"></i>
                Home
            </NavLink>
            <NavLink to={"/home"}>
                <i class="fa-solid fa-search"></i>
                Search
            </NavLink>
            <NavLink to={"/home"}>
                <i class="fa-solid fa-compass"></i>
                Explore
            </NavLink>
            <NavLink to={"/home"}>
                <i class="fa-light fa-clapperboard-play"></i>
                Reels
            </NavLink>
            <NavLink to={"/home"}>
                <i class="fa-brands fa-facebook-messenger"></i>
                Messages
            </NavLink>
            <NavLink to={"/home"}>
                <i class="fa-solid fa-heart"></i>
                Notifications
            </NavLink>
            <NavLink to={"/home"}>
                <i class="fa-regular fa-square-plus"></i>
                Create
            </NavLink>
            <NavLink to={"/home"}>
                <i class="fa-solid fa-user"></i>
                Profile
            </NavLink>
        </div>
    )
}

export default Navbar
