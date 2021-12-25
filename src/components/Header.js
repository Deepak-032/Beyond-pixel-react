import React from 'react'
import ContactUs from './ContactUs'
import './styles/Header.css'

function Header({ image, content, headerClass, display, captionClass, displayContact = false, mobile = false, displayHandler }) {

    return (
        <div className="header position-relative">
            <div className={`${headerClass}`}>
                <div className={`position-relative header_spiral ${display}`}>
                    <img
                        className="w-100 header_img"
                        src={image}
                        alt=""
                    />
                    <div className={`${captionClass} text-center`}>
                        {content}
                    </div>
                </div>
                {mobile &&
                    <div className="position-relative d-md-none">
                        <img
                            className="position-absolute w-100"
                            style={{ top: "28%", zIndex: "-1" }}
                            src="/assets/mobileSpiral.webp"
                            alt=""
                        />
                        <div className={`${captionClass} header_caption_hero position-static`} style={{ fontSize: "80px" }}>
                            {content}
                        </div>
                    </div>
                }
            </div>
            {displayContact &&
                <div className="btn_container">
                    <button onClick={displayHandler} className="btn_contact">Contact Us</button>
                </div>
            }
            <ContactUs contactClass="pop_up_container" wrapper={true} />
        </div>
    )
}

export default Header
