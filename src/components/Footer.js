import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Footer.css'

function Footer() {
    return (
        <footer className="main_footer">
            <div className="max_width footer row justify-content-between">
                <div className="col-12 col-lg">
                    <div className="footer_headings">About Company</div>
                    <div style={{ marginBottom: "18px" }}>
                        We at Beyond Pixel develop and implement imaginative solutions to help businesses increase brand awareness, better showcase products or services and, ultimately, increase profits. We use creative strategies to help clients achieve their goals. We use market research to help businesses develop strategies that get their business and its products or services better noticed.
                    </div>
                </div>
                <div className="col-4 col-lg fit_content" style={{ marginBottom: "18px" }}>
                    <div className="footer_headings">Information</div>
                    <div><a href="/#services">Services</a></div>
                    <div><Link to="/about us">About Us</Link></div>
                    <div><Link to="#">Download Brochure</Link></div>
                    <div><Link to="/conditions">Terms & Conditions</Link></div>
                    <div><Link to="/policy">Privacy Policy</Link></div>
                </div>
                <div className="col-4 col-lg fit_content" style={{ marginBottom: "18px" }}>
                    <div className="footer_headings">Social Media</div>
                    <div><Link to=""><img className="social_icon" src="/assets/fbIcon.png" alt="" />Facebook</Link></div>
                    <div><Link to=""><img className="social_icon" src="/assets/twitterIcon.png" alt="" />Twitter</Link></div>
                    <div><Link to=""><img className="social_icon" src="/assets/instaIcon.png" alt="" />Instagram</Link></div>
                    <div><Link to=""><img className="social_icon" src="/assets/Behance.png" alt="" />Behance</Link></div>
                </div>
                <div className="col-4 col-lg fit_content">
                    <div className="footer_headings">Contact Us</div>
                    <div>beyondpixel.in@gmail.com</div>
                    <div>+919518068096</div>
                    <div>+919996522669</div>
                </div>
            </div>
            <div className="row max_width">
                <div>
                    <Link to="/">
                        <img
                            className="navbar_logo"
                            src="/assets/Asset9@2x@2x.png"
                            alt="logo"
                        />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
