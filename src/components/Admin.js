import React, { useReducer, useEffect, useState } from 'react'
import { Link, useHistory } from "react-router-dom"
import './styles/Admin.css'
import { useDocumentTitle } from './CustomHooks'
import { auth, signInWithEmailAndPassword } from '../firebase'

let initialState = {
    email: "",
    password: ""
}

function Admin() {
    useDocumentTitle("Beyond Pixel · Admin")
    const history = useHistory()
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState(initialState)

    const logIn = async e => {
        e.preventDefault()
        try {
            setLoading(true)
            await signInWithEmailAndPassword(auth, user.email, user.password)
            history.push('/admin/upload')
        } catch (e) {
            alert(e.message)
        }
        setLoading(false)
    }
    const onChangeHandler = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <>
            <div className="admin_container mt-3">
                <Link to="/">
                    <img
                        className="navbar_logo"
                        src="/assets/Group6@2x.png"
                        alt="logo"
                    />
                </Link>
                <form className="form_admin" onSubmit={e => logIn(e)} method="POST">
                    <input type="email" value={user.email} onChange={e => onChangeHandler(e)} name="email" placeholder="Email" />
                    <div className="password">
                        <input type={showPassword ? "text" : "password"} value={user.password} onChange={e => onChangeHandler(e)} name="password" placeholder="Password" minLength="8" />
                        <span className="show_password" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>}</span>
                    </div>
                    <button type="submit" disabled={loading} className="btn_contact_us btn_login">Log In</button>
                </form>
            </div>
        </>
    )
}

export default Admin
