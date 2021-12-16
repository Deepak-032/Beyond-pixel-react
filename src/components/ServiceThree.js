import React from 'react'
import Heading from './Heading'
import VLine from './VLine'
import { Link } from "react-router-dom"

function ServiceThree() {
    return (
        <div className="position-relative p_t_mobile">
            <div className="service row reverse max_width">
                <div className="d-flex flex-column col-12 col-lg-6 align_center">
                    <Heading LWidth="81px" fontSize="40px" marginTop="70px" heading={<>Cinematography</>}>
                        <div className="v_lines d-flex position-absolute d-lg-flex d-none">
                            <VLine LHeight="362px" MRight="100px" />
                            <VLine LHeight="131px" MRight="0" />
                        </div>
                    </Heading>
                    <span className="para text_center">
                        Videos are a big part of how customers and clients like to consume content What better way to advertise or promote your art or business than with your videos themselves.
                        A film serves as a great way to develop a business identity. It allow you to let new consumers to know what your business offers.                    </span>
                    <div>
                        <Link to="/service/cinematography">
                            <button className="btn_view_more">View More</button>
                        </Link>
                    </div>
                </div>
                <div className="d-flex justify_content col-12 col-lg-6">
                    <div className="d-flex flex-row position-relative fit_content">
                        <img
                            className="service_img_bowl position-absolute"
                            src="/assets/pexels-alex-fu-1767783@2x.png"
                            alt=""
                        />
                        <img
                            className="service_img_cup"
                            src="/assets/pexels-kyle-loftus-6621402@2x.png"
                            alt=""
                        />
                        <div className="block position-relative"></div>
                        <img
                            className="service_img_masks position-absolute"
                            src="/assets/pexels-flo-dahm-699459@2x.png"
                            alt=""
                        />
                    </div>
                </div>
                {/* <div className="outer_block_right"></div> */} {/* this service does not uses this div */}
                <img
                    className="service_img_spiral position-absolute d-none d-lg-block"
                    src="/assets/MaskGroup1@2x.png"
                    alt=""
                />
            </div>
        </div>
    )
}

export default ServiceThree
