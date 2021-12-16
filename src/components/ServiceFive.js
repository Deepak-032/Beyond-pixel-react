import React from 'react'
import Heading from './Heading'
import VLine from './VLine'
import { Link } from "react-router-dom"
import './styles/ServiceFive.css'

function ServiceFive() {
    return (
        <div className="position-relative p_t_mobile">
            <div className="service row reverse max_width">
                <div className="d-flex flex-column col-12 col-lg-6 align_center">
                    <Heading LWidth="81px" fontSize="40px" marginTop="70px" heading={<>Ui Design</>}>
                        <div className="v_lines d-flex position-absolute d-lg-flex d-none">
                            <VLine LHeight="360.5px" MRight="100px" />
                            <VLine LHeight="95px" MRight="0" />
                        </div>
                    </Heading>
                    <span className="para text_center">
                        In this new era of digitalisation we provide you a team of diverse talent that are enthusiast and empathize towards designing your brand identity when it comes to custom websites.
                        We put a great thought and research for the future vision of your brand's website that aligns with the values and trends of design and technology.
                    </span>
                    <div>
                        <Link to="/service/ui%20design">
                            <button className="btn_view_more">View More</button>
                        </Link>
                    </div>
                </div>
                <div className="col-12 col-lg-6 d-flex justify_content">
                    <div className="d-flex flex-row position-relative fit_content">
                        <img
                            className="service_img_cup"
                            src="/assets/UI_2_GT-02@2x.png"
                            alt=""
                        />
                        <div className="block_s5 position-absolute"></div>
                        <div className="mask_container" style={{ width: "5.1vw" }}>
                            <img
                                className="service_img_masks_s5 position-absolute"
                                src="/assets/responsive-mockup-freebie-n8@2x.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="outer_block_right d-none d-lg-block" style={{ width: "54.75%" }}></div>
                <img
                    className="service_img_spiral position-absolute d-none d-lg-block"
                    src="/assets/MaskGroup1@2x.png"
                    alt=""
                />
            </div>
        </div>
    )
}

export default ServiceFive
