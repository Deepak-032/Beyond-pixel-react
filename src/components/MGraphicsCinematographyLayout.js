import React from 'react'
import Heading from './Heading'

function MGraphicsCinematographyLayout({ name, content, videoSrc, displayHandler }) {
    return (
        <div className="row graphic_design max_width justify-content-between align-items-center">
            <div className="d-flex flex-column align_center col-12 col-lg-6">
                <Heading LWidth="81px" fontSize="40px" marginTop="0px" heading={name} />
                <span className="para text_center">
                    {content}
                </span>
                <div className="m_b_35">
                    <button onClick={displayHandler} className="btn_view_more">Contact Us</button>
                </div>
            </div>
            <div className="col-12 col-lg-6 m_b_35 youtube_video p_e_s">
                <iframe width="100%" height="100%" src={videoSrc} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
            </div>
        </div>
    )
}

export default MGraphicsCinematographyLayout
