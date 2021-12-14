import React, { useState } from 'react'
import UploadFile from './UploadFile'
import { auth, updatePassword } from '../firebase'
import NavBarAdmin from './NavBarAdmin';

function BackPanel() {
    const [display, setDisplay] = useState('ADD_NEW_PROJECT')
    const [newPassword, setNewPassword] = useState('')

    const changePassword = e => {
        e.preventDefault()
        const user = auth.currentUser
        updatePassword(user, newPassword)
            .then(() => {
                alert("Password changed successfully.")
            }).catch((e) => {
                alert(e.message)
            })
    }
    return (
        <>
            <NavBarAdmin setDisplay={setDisplay} />
            {
                {
                    'ADD_NEW_PROJECT': <UploadFile />,
                    'DELETE_PROJECT': "delete project",
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
