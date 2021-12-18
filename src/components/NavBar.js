import React, { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom"
import './styles/NavBar.css'

function NavBar({ displayHandler }) {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const ref = useRef(null)

    const toogleNav = () => setClick(!click)
    const closeNav = () => setClick(false)

    useEffect(() => {
        if (click) document.body.style.overflow = "hidden"
        else document.body.style.overflow = "auto"
        function handleClickOutside(event) {
            if (dropdown && !ref.current.contains(event.target)) {
                setDropdown(!dropdown)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)

        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [click, dropdown])

    return (
        <>
            <div className="navbar_container">
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
                        <li onClick={() => setDropdown(!dropdown)} ref={ref}>
                            <div className="cursor menu_services">Services <i className="bi bi-chevron-down"></i></div>
                            <ul className="services_dropdown" style={{ display: dropdown ? "" : "none" }}>
                                <li><Link to="/service/photography" onClick={closeNav}>Photography</Link></li>
                                <li><Link to="/service/graphic design" onClick={closeNav}>Graphic Design</Link></li>
                                <li><Link to="/service/cinematography" onClick={closeNav}>Cinematography</Link></li>
                                <li><Link to="/service/motion graphics" onClick={closeNav}>Motion Graphics</Link></li>
                                <li><Link to="/service/ui design" onClick={closeNav}>Ui Design</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/about us" onClick={closeNav} >
                                About us
                            </Link>
                        </li>
                        <li>
                            <button className="btn_contact d-none d-lg-block" onClick={displayHandler}>
                                Contact Us
                            </button>
                            <Link to=" " className="d-lg-none" onClick={displayHandler} >
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <span onClick={toogleNav} className="hamburgerMenu d-inline d-lg-none">{click ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}</span>
                </div>
            </div>
        </>
    )
}

export default NavBar
