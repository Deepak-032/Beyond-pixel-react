import React, { useState, useEffect, useReducer } from 'react'
import { Link, useHistory } from "react-router-dom"
import UploadFile from './UploadFile'
import { auth, signOut, updatePassword } from '../firebase'
import { reauthenticateWithCredential } from "firebase/auth";
import firebase from 'firebase/compat/app';

function BackPanel({ setProjectName }) {
    const history = useHistory()
    const [display, setDisplay] = useState(false)
    const [loading, setLoading] = useState(false)
    const [newPassword, setNewPassword] = useState('')

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

    const changePassword = e => {
        e.preventDefault()
        const user = auth.currentUser
        // const credential = firebase.auth?.EmailAuthProvider?.credential(
        //     user.email, 
        //     '12341234'
        // )
        // reauthenticateWithCredential(user, credential).then(() => {
        //     console.log("User re-authenticated.")
        // }).catch((error) => {
        //     console.log("An error ocurred", error)
        //     // ...
        // });
        updatePassword(user, newPassword)
            .then(() => {
                alert("Password changed successfully.")
            }).catch((e) => {
                alert(e.message)
            })
    }

    return (
        <div className="max_width">
            <div className="d-flex justify-content-between mt-3">
                <Link to="/">
                    <img
                        className="navbar_logo"
                        src="/assets/Group6@2x.png"
                        alt="logo"
                    />
                </Link>
                <button disabled={loading} onClick={logOut} className="btn_contact_us btn_login">Log Out</button>
            </div>
            <UploadFile setProjectName={setProjectName} />
            {display ?
                <form className="form_admin" onSubmit={e => changePassword(e)}>
                    <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} name="newPassword" placeholder="New Password" minLength="8" required />
                    <button type="submit" className="btn_contact_us">Change Password</button>
                </form> :
                <button className="btn_contact_us" style={{ margin: "20px 0" }} onClick={() => setDisplay(!display)}>Change Password</button>
            }
        </div>
    )
}

export default BackPanel
