import React from 'react'
import { Link } from 'react-router-dom'
import Heading from './Heading'

function UiDesignLayout({ name, content, img, href }) {
    return (
        <div className="row graphic_design max_width justify-content-between align-items-center">
            <div className="d-flex flex-column align_center col-12 col-lg-6">
                <Heading LWidth="81px" fontSize="40px" marginTop="0px" heading={name} />
                <span className="para text_center">
                    {content}
                </span>
                <div className="m_b_35">
                    <Link to={href}>
                        <button className="btn_view_more">View More</button>
                    </Link>
                </div>
            </div>
            <div className="col-12 col-lg-6 m_b_35 p_e_s">
                <img className="w-100 box_shadow" src={img}  alt=""/>
            </div>
        </div>
    )
}

export default UiDesignLayout
