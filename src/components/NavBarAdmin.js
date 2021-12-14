import React, { useState, useEffect } from 'react'
import { Link, useHistory } from "react-router-dom"
import './styles/NavBar.css'
import { auth, signOut } from '../firebase'

function NavBarAdmin({ setDisplay }) {
    const history = useHistory()
    const [click, setClick] = useState(false)
    const [loading, setLoading] = useState(false)

    const logOut = () => {
        setLoading(true)
        signOut(auth).then(() => {
            history.push('/admin')
            setLoading(false)
        }).catch(e => {
            alert(e.message)
            setLoading(false)
        })
    }
    const toogleNav = () => {
        setClick(!click)
    }
    const closeNav = () => {
        setClick(false)
    }

    useEffect(() => {
        if (click)
            document.body.style.overflow = "hidden"
        else
            document.body.style.overflow = "auto"
    }, [click])

    return (
        <>
            <div className="navbar_container position-sticky">
                <div className="navbar nav_mobile">
                    <Link to="/">
                        <img
                            className="navbar_logo"
                            src="/assets/Group6@2x.png"
                            alt="logo"
                        />
                    </Link>
                    <ul className={click ? "navbar_right active" : "navbar_right"}>
                        <li className="d-lg-none">
                            <Link to="/" onClick={closeNav} >
                                Home
                            </Link>
                        </li>
                        <li className='navbar_admin' onClick={() => {setDisplay('ADD_NEW_PROJECT'); closeNav()}}>
                            Add New project
                        </li>
                        <li className='navbar_admin' onClick={() => {setDisplay('DELETE_PROJECT'); closeNav()}}>
                            Delete project
                        </li>
                        <li className='navbar_admin' onClick={() => {setDisplay('CHANGE_PASSWORD'); closeNav()}}>
                            Change Password
                        </li>
                        <li>
                            <button disabled={loading} onClick={logOut} className="btn_contact_us btn_login">Log Out</button>
                        </li>
                    </ul>
                    <span onClick={toogleNav} className="hamburgerMenu d-inline d-md-none">{click ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}</span>
                </div>
            </div>
        </>
    )
}

export default NavBarAdmin
