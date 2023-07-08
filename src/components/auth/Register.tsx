import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import React from "react";

function Register() {
    const [user, setUser] = useState({
        name:'', email:'', password: ''
    })

    const onChangeInput = (e: any) =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const registerSubmit = async (e: any) =>{
        e.preventDefault()
        try {
            const data = await axios.post("https://backend1-18020197.b4a.run" +'/user/register', {...user})

            localStorage.setItem('firstLogin', "true")
            localStorage.setItem('accesstoken', data.data.accesstoken)
            window.location.href = "/";
        } catch (err) {
            alert(err)
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={registerSubmit}>
                <h2>Register</h2>
                <input type="text" name="name" required
                       placeholder="Name" value={user.name} onChange={onChangeInput} />

                <input type="email" name="email" required
                       placeholder="Email" value={user.email} onChange={onChangeInput} />

                <input type="password" name="password" required autoComplete="on"
                       placeholder="Password" value={user.password} onChange={onChangeInput} />

                <div className="row">
                    <button type="submit">Register</button>
                    <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
    )
}

export default Register
