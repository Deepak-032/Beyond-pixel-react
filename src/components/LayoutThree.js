import React from 'react'
import './styles/LayoutThree.css'

function LayoutThree({ name, role, year, paraOne, paraTwo }) {
    const roleArray = role.split(',').filter(Boolean)
    return (
        <div className="row layout_three_row max_width">
            <div className="col-12 col-lg-5 layout_three_container">
                <div className="layout_three_heading">Case Study of<br />{name}</div>
                <div className="layout_three_heading">Role
                    {roleArray.map(role => <li style={{ fontSize: "14px" }}>{role}</li>)}
                </div>
                <div className="layout_three_heading">Year
                    <div>{year}</div>
                </div>
            </div>
            <div className="col-12 col-lg-7 layout_three_position">
                <div className="layout_three_content">{paraOne}</div>
                <div className="layout_three_content">{paraTwo}</div>
            </div>
        </div>
    )
}

export default LayoutThree
