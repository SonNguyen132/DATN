import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import './login.css'

function Login() {
    const [user, setUser] = useState({
        email:'', password: ''
    })

    const onChangeInput = (e: any) =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const loginSubmit = async (e: any) =>{
        e.preventDefault()
        try {
            const data = await axios.post("https://backend1-18020197.b4a.run" + '/user/login', {...user})

            localStorage.setItem('firstLogin', "true")
            localStorage.setItem('accesstoken', data.data.accesstoken)

            window.location.href = "/";
        } catch (err) {
            alert(err)
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={loginSubmit}>
                <h2>Login</h2>
                <input type="email" name="email" required
                       placeholder="Email" value={user.email} onChange={onChangeInput} />

                <input type="password" name="password" required autoComplete="on"
                       placeholder="Password" value={user.password} onChange={onChangeInput} />

                <div className="row">
                    <button type="submit">Sign in</button>
                    <Link to="/register">Register</Link>
                </div>
            </form>
        </div>
    )
}

export default Login
