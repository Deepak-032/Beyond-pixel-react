import React from 'react'
import Heading from './Heading'
import VLine from './VLine'
import { Link } from "react-router-dom"

function ServiceFour() {
    return (
        <div className="position-relative p_t_mobile">
            <div className="row service max_width">
                <img
                    style={{ top: "-48%" }}
                    className="service_img_spiral2 position-absolute d-none d-lg-block"
                    src="/assets/MaskGroup2@2x.png"
                    alt=""
                />
                <div className="outer_block_left d-none d-lg-block" style={{
                    width: "42.6%",
                    height: "105%",
                    top: "-10%"
                }}></div>
                <div className="col-12 col-lg-6 d-flex d-lg-block justify-content-center">
                    <div className="d-flex flex-row position-relative fit_content">
                        <img
                            className="service_img_cup"
                            src="/assets/5151637@2x.png"
                            alt=""
                        />
                        <div className="block_container position-absolute"
                            style={{
                                top: "-30%",
                                left: "0",
                                maxWidth: "100%",
                                width: "18.5vw",
                                height: "144%"
                            }}>
                            <div className="block_two position-absolute" style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%" }}></div>
                            <img
                                style={{
                                    top: "51%",
                                    left: "100%",
                                    maxWidth: "248px",
                                    width: "18vw"
                                }}
                                className="service_img_masks_two position-absolute"
                                src="/assets/5144512@2x.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column col-12 col-lg-6 mobile align_center p_t_mobile" style={{ paddingLeft: "222.5px" }}>
                    <Heading LWidth="81px" fontSize="40px" marginTop="0" heading={<>Motion<br />Graphics</>}>
                        <div className="v_lines d-flex position-absolute d-lg-flex d-none v_line_two">
                            <VLine LHeight="162px" MRight="100px" />
                            <VLine LHeight="267px" />
                        </div>
                    </Heading>
                    <span className="para text_center">
                        Motion graphics are awesome and highly versatile storytelling tools, which makes them a great addition to your brand’s content marketing mix if you’re looking to tell an interesting story in a succinct format, engage people on social media, or explain your product. They’re emotionally captivating, make content easier to comprehend, don’t require much from the viewer and they are easy to repurpose.                    </span>
                    <div>
                        <Link to="/service/motion graphics">
                            <button className="btn_view_more">View More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceFour
