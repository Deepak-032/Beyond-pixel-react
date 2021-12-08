import React from 'react'
import { useParams } from 'react-router-dom'
import LayoutOne from './LayoutOne'
import LayoutTwo from './LayoutTwo'
import ContactUs from './ContactUs'
import { useDocumentTitle } from './CustomHooks'
import './styles/ProjectDetails.css'
import { db } from '../firebase'
import addSubCollection from '../models/addSubCollection'
import GetProjects from '../models/GetProjects'

function GraphicDesignProject({ displayHandler }) {
    const { id } = useParams()
    useDocumentTitle(`Beyond Pixel · ${id}`)
    const { projects: project, loading, error } = GetProjects(db, `graphicDesign/${id}/subCollection`)
    let array = [], subArray = []
    !loading &&
        project[0].imgSrc.forEach((p, i) => {
            (i + 1) % 5 === 0 ? array.push(p) : subArray.push(p)
            if ((i + 1) % 4 === 0 || i === project[0].imgSrc.length - 1) {
                array.push(subArray)
                subArray = []
            }
        })
    // addSubCollection(db, `graphicDesign/${id}/subCollection`, "innerGallery", details)
    return (
        !loading &&
        <div>
            <div className="empty"></div>
            <ContactUs contactClass="pop_up_container" wrapper={true} />
            {project.length === 0 ?
                <img className="w-50 d-block m-auto" src="/pagenotfound.webp" alt="Page not found." /> :
                error ? <h1 className="text-center">{error}</h1> :
                    <>
                        <LayoutOne
                            bgColor={project[0].bgColor}
                            projectName={project[0].name}
                            content={project[0].content}
                            src={project[0].headerImg}
                            displayHandler={displayHandler}
                        />
                        {array.map((subArray, index) => {
                            if (index % 2 === 0) {
                                return (<div className="max_width">
                                    <LayoutTwo layoutTwoSrc={subArray} styling={true} />
                                </div>)
                            } else {
                                return <div className="max_width margin_img_gd">
                                    <img
                                        className="w-100 "
                                        src={subArray}
                                        alt=""
                                    />
                                </div>
                            }
                        })}
                    </>
            }
        </div>
    )
}

export default GraphicDesignProject
