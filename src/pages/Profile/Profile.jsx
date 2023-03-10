import React from 'react'
import '../Pages.scss'
import Navbar from '../../components/Navbar/Navbar'
import { NavLink } from 'react-router-dom'

function Profile() {
    return (
        <div className='section'>
            <div className="left">
                <Navbar/>
            </div>
            <div className='right'>
                <div className="profile">
                    <div className="profile__containr">
                        <div className="profile">
                            <div className="profile__left">
                                salom
                            </div>
                            <div className="profile__right">
                                <div className="profile__right-top">
                                    <h3>asadbek.2305</h3>
                                    <NavLink>Edit Profile</NavLink>
                                    <NavLink>Add tools</NavLink>
                                    <NavLink>
                                        <i class="fa-solid fa-gear"></i>
                                    </NavLink>
                                </div>
                                <div className="profile__right-center">
                                    <div>
                                        <span>2</span>posts
                                    </div>
                                    <div>
                                        <span>985</span>followers
                                    </div>
                                    <div>
                                        <span>2</span>following
                                    </div>
                                </div>
                                <div className="profile__right-bottom">
                                    <h5>Asadbek Asadbek</h5>
                                    <NavLink>tuit_212</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
