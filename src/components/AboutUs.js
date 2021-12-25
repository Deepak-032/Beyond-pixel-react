import React from 'react'
import Heading from './Heading'
import Clients from './Clients'
import './styles/AboutUs.css'
import { useDocumentTitle } from './CustomHooks'

function AboutUs() {
    useDocumentTitle("Beyond Pixel · About Us")

    return (
        <div className="max_width">
            <div className="row about_us_container">
                <div className="col-12 col-lg-6 about_content">
                    <Heading LWidth="86px" fontSize="40px" heading={<>About the company</>}></Heading>
                    <div className="about_para">
                        We at Beyond Pixel develop and implement imaginative solutions to help businesses increase brand awareness, better showcase products or services and, ultimately, increase profits. We use creative strategies to help clients achieve their goals. We use market research to help businesses develop strategies that get their business and its products or services better noticed.
                        In this world of ever changing trends and technology we aim to find creative ways to convey information.                     </div>
                </div>
                <div className="col-12 col-lg-6 about_content">
                    <Heading LWidth="86px" fontSize="40px" heading={<>What we do</>}></Heading>
                    <div className="about_para">
                        Beyond Pixel is a creative agency primarily targeting the creative needs of all kinds of independent and corporate clients.<br /><br />
                        Our Services Include:
                        <li>Photography</li>
                        <li>Graphic Designing</li>
                        <li>Cinematography</li>
                        <li>Motion Graphics</li>
                        <li>Ui/Ux Design and Web Development</li>
                    </div>
                </div>
            </div>
            <Heading LWidth="86px" fontSize="40px" heading={<>Meet The Principals</>}></Heading>
            <div className="row about_us_container">
                <div className="col-12 col-lg-6 about_content">
                    <div className="owner_image"><img className="w-100" src="/assets/NItish_Website.jpg" alt="" /></div>
                    <div className="owner_name">Rishi Arora</div>
                    <div className="about_owner">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
                <div className="col-12 col-lg-6 about_content">
                    <div className="owner_image"><img className="w-100" src="/assets/NItish_Website.jpg" alt="" /></div>
                    <div className="owner_name">Nitish Malhotra</div>
                    <div className="about_owner">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </div>
            <Clients bgColor="#FFFF" />
        </div>
    )
}

export default AboutUs
