import React from 'react'
import '../Accound/Accound.scss'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

function Register() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='Accound-section'>
            <div className="accound">
                <h2>Instagram</h2>
                <p>
                    Register to see photos and videos of your friends.
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input">
                        <label htmlFor="name">Name</label>
                        <input id='name'  {...register("firstName", { required: true, maxLength: 20 })} required placeholder='apple'/>
                    </div>
                    <div className='input'>
                        <label htmlFor="email">email</label>
                        <input id='email' type={"email"} {...register("email")} required placeholder='mackbook'/>
                    </div>
                    <div className="input">
                        <label htmlFor="password">password</label>
                        <input id='password' type={"password"} {...register("parol", { required: true, maxLength: 20 })}
                        placeholder='create a password' required />
                    </div>
                    <div className="input">
                        <label htmlFor="passwordd">password</label>
                        <input id='passwordd' type={"password"} {...register("parol", { required: true, maxLength: 20 })}
                        placeholder='repeat password' required />
                    </div>
                    <input type="submit" className='btn' value={"Sing In"} />
                </form>
                <div className='singUp'>
                    <span>Is it a net account?</span>
                    <Link to={"/"} id='singUp'>Exit</Link>
                </div>
            </div>
        </div>
    )
}

export default Register
