import React, { useRef, useEffect, useReducer } from 'react'
import './styles/ContactUs.css'
import axios from 'axios'

const initialState = {
    name: '',
    email: '',
    _subject: '',
    message: ''
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'ON_CHANGE':
            const { name, value } = action.payload
            return { ...state, [name]: value, }
        case 'RESET':
            return initialState
        default:
            return state
    }
}

function ContactUs({ contactClass, shadow, wrapper = false }) {
    const wrapperRef = useRef(null)
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target) && event.target.getAttribute('class') !== 'btn_contact') {
                document.getElementById("pop_box").style.display = "none"
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [wrapperRef])

    const submit = e => {
        e.preventDefault()
        axios.defaults.headers.post['Content-Type'] = 'application/json'
        axios.post('https://formsubmit.co/ajax/900d7978122455cd8f43e12f844126fd', state)
            .then(() => alert("Your response has been submitted, Thank you!"))
            .catch(() => alert("Your response has not been submitted, please try again."))
        dispatch({ type: 'RESET' })
    }
    return (
        <div className={` ${contactClass} m_t_zero p_t_mobile m_b_zero position-relative`} id="pop_box">
            <img
                className="contact_spiral position-absolute"
                src="/assets/Group4@2x.png"
                alt="spiral"
            />
            <div className={` ${shadow} row pop_up max_width`} ref={wrapper ? wrapperRef : null}>
                <div className="col-12 col-lg-6 pop_up_img" style={{ padding: "0" }}>
                    <div className="position-relative">
                        <img
                            className="contact_img"
                            src="/assets/contactUs.png"
                            alt=""
                        />
                        <div className="contact_img_container"></div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 form_container">
                    <div className="contact_form text_center">
                        <div className="d-flex flex-column align-items-center form_heading">
                            <div>Looking for a Creative Partner?</div>
                            <div>Let's Talk</div>
                            <div className="contact_line"></div>
                        </div>
                        <form onSubmit={submit} method="POST">
                            <div className="d-flex">
                                <input type="text" value={state.name} onChange={event => dispatch({ type: 'ON_CHANGE', payload: event.target })} name="name" placeholder="Name" required />
                                <input type="email" value={state.email} onChange={event => dispatch({ type: 'ON_CHANGE', payload: event.target })} name="email" placeholder="Email" required />
                            </div>
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="text" value={state._subject} onChange={event => dispatch({ type: 'ON_CHANGE', payload: event.target })} name="_subject" placeholder="Subject" required />
                            <textarea value={state.message} onChange={event => dispatch({ type: 'ON_CHANGE', payload: event.target })} name="message" placeholder="Your Message" required />
                            <button type="submit" className="btn_contact_us">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
