// for project name on project details page
import React, { useState } from 'react'
import './styles/LayoutOne.css'

function LayoutOne({ bgColor, projectName, content, src, displayHandler }) {
    const [height, setHeight] = useState(0)
    const imageLoadhandler = e => {
        const height = e.target.clientHeight
        setHeight(height)
    }
    return (
        <div style={{ backgroundColor: bgColor, position: "relative", marginBottom: "60px", minHeight: height }}>
            <div className="row layout_one_row max_width">
                <div className="col-12 col-lg-5 layout_one_container">
                    <div className="layout_one_heading">{projectName}</div>
                    <div className="layout_one_content">{content}</div>
                    <button onClick={displayHandler} className="btn_contact">
                        Contact Us
                    </button>
                </div>
                <div className="col-12 col-lg-7 layout_one_img_position">
                    <img
                        style={{ width: "100%", maxHeight: "461px" }}
                        src={src}
                        alt=""
                        onLoad={imageLoadhandler}
                    />
                </div>
            </div>
        </div>
    )
}

export default LayoutOne
