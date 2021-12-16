import React from 'react'
import Heading from './Heading'
import VLine from './VLine'
import { Link } from "react-router-dom"

function ServiceTwo() {
    return (
        <div className="position-relative p_t_mobile">
            <div className="row service max_width">
                <img
                    className="service_img_spiral2 position-absolute d-none d-lg-block"
                    src="/assets/MaskGroup2@2x.png"
                    alt=""
                />
                <div className="outer_block_left d-none d-lg-block"></div>
                <div className="col-12 col-lg-6 d-flex d-lg-block justify-content-center">
                    <div className="d-flex flex-row position-relative fit_content">
                        <img
                            style={{
                                top: "-17%",
                                left: "12%"
                            }}
                            className="service_img_bowl position-absolute"
                            src="/assets/Card Mockup@2x.png"
                            alt=""
                        />
                        <img
                            className="service_img_cup"
                            src="/assets/Logo 2 small bottle@2x.png"
                            alt=""
                        />
                        <div className="block_container position-relative">
                            <div className="block_two position-absolute"></div>
                            <img
                                className="service_img_masks_two position-absolute"
                                src="/assets/Book@2x.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column col-12 col-lg-6 mobile align_center p_t_mobile" style={{ paddingLeft: "222.5px" }}>
                    <Heading LWidth="81px" fontSize="40px" marginTop="0" heading={<>Graphic<br />Design</>}>
                        <div className="v_lines d-flex position-absolute d-lg-flex d-none v_line_two">
                            <VLine LHeight="162px" MRight="100px" />
                            <VLine LHeight="267px" />
                        </div>
                    </Heading>
                    <span className="para text_center">
                        Developing graphic designs that are intended to inspire, educate, and captivate customers is our goal at BeyondPixel. We add a contemporary flair to the advertisement profile of your company acting as one of the key components to build brand awareness and influence the customer's decision-making process. We provide services such as:
                        <li>Brand Designing</li>
                        <li>Package Design</li>
                        <li>Logo Designing</li>
                        <li>Creative Social Media Designing</li>
                        <li>Print Designing</li>
                    </span>
                    <div>
                        <Link to="/service/graphic%20design">
                            <button className="btn_view_more">View More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceTwo
