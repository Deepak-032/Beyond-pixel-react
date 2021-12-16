import React from 'react'
import Heading from './Heading'
import VLine from './VLine'
import { Link } from "react-router-dom"

function ServiceOne() {
    return (
        <div className="position-relative p_t_mobile">
            <div className="service_one row reverse max_width" id="services">
                <div className="d-flex flex-column col-12 col-lg-6 align_center">
                    <Heading LWidth="81px" fontSize="40px" marginTop="70px" heading={<>Photography</>}>
                        <div className="v_lines d-flex position-absolute d-lg-flex d-none">
                            <VLine LHeight="629px" MRight="100px" />
                            <VLine LHeight="557.5px" MRight="100px" />
                            <VLine LHeight="424px" MRight="100px" />
                        </div>
                    </Heading>
                    <span className="para text_center">
                        We invest noteworthy energy to your objective to get the perfect moment in the perfect place. We will be there with you consistently your exceptional minutes are gotten until the end of time. We are indulged in commercial and editorial photography focused on creating relevant and consistent visual content for brand storytelling.                    </span>
                    <div>
                        <Link to="/service/photography">
                            <button className="btn_view_more">View More</button>
                        </Link>
                    </div>
                </div>
                <div className="col-12 col-lg-6 d-flex justify_content">
                    <div className="d-flex flex-row position-relative fit_content">
                        <img
                            className="service_img_bowl position-absolute"
                            src="/assets/pano 1@2x.png"
                            alt=""
                        />
                        <img
                            className="service_img_cup"
                            src="/assets/e1440a118507173.608a6cd833752.jpg"
                            alt=""
                        />
                        <div className="block position-relative"></div>
                        <img
                            className="service_img_masks position-absolute"
                            src="/assets/RAP_9642 copy1@2x.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className="outer_block_right d-none d-lg-block"></div>
                <img
                    className="service_img_spiral position-absolute d-lg-block d-none"
                    src="/assets/MaskGroup1@2x.png"
                    alt=""
                />
            </div>
        </div>
    )
}

export default ServiceOne
