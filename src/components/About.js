import React from 'react'
import Heading from './Heading'

function About() {
    return (
        <div className="max_width" >
            <div className="about row flex-column align_center">
                <Heading LWidth="86px" fontSize="40px" heading={<>How We Solve<br />Problems</>}></Heading>
                <div className="row justify-content-between justify_center">
                    <span className="para margin col-12 col-lg-6 text_center">
                        We at Beyond Pixel develop and implement imaginative solutions to help businesses increase brand awareness, better showcase products or services and, ultimately, increase profits. We use creative strategies to help clients achieve their goals. We use market research to help businesses develop strategies that get their business and its products or services better noticed.                    </span>
                    <span className="para col-12 col-lg-6 text_center">
                        In this world of ever changing trends and technology we aim to find creative ways to convey information.                     </span>
                </div>
            </div>
        </div>
    )
}

export default About
