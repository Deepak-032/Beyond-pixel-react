import React, { useState, useEffect } from 'react'
import UploadFile from './UploadFile'
import { auth, updatePassword, signOut } from '../firebase'
import NavBarAdmin from './NavBarAdmin';
import { useDocumentTitle } from './CustomHooks'
import DeleteProject from './DeleteProject'

function BackPanel() {
    useDocumentTitle("Beyond Pixel · Admin back panel")
    const [display, setDisplay] = useState('ADD_NEW_PROJECT')
    const [newPassword, setNewPassword] = useState('')

    const changePassword = e => {
        e.preventDefault()
        const user = auth.currentUser
        updatePassword(user, newPassword)
            .then(() => {
                alert("Password successfully changed.")
            }).catch((e) => {
                alert(e.message)
            })
    }
    useEffect(() => {
        return () => {
            signOut(auth).then(() => {
                alert("You have been automatically logged out.")
            }).catch(e => {
                alert(e.message)
            })
        }
    }, [])
    return (
        <>
            <NavBarAdmin setDisplay={setDisplay} />
            {
                {
                    'ADD_NEW_PROJECT': <UploadFile />,
                    'DELETE_PROJECT': <DeleteProject />,
                    'CHANGE_PASSWORD':
                        <form className="form_admin max_width mt-5" onSubmit={e => changePassword(e)}>
                            <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} name="newPassword" placeholder="New Password" minLength="8" required />
                            <button type="submit" className="btn_contact_us">Change Password</button>
                        </form>
                }[display]
            }
        </>
    )
}

export default BackPanel
