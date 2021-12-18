import React from 'react'
import { useParams } from 'react-router-dom'
import LayoutOne from './LayoutOne'
import ContactUs from './ContactUs'
import { useDocumentTitle } from './CustomHooks'
import './styles/ProjectDetails.css'
import GetProjects from '../models/GetProjects'
import { db } from '../firebase'

function PhotographyProject({ displayHandler }) {
    const { id } = useParams()
    useDocumentTitle(`Beyond Pixel · ${id}`)
    const { projects: project, loading, error } = GetProjects(db, `photography/${id}/subCollection`)
    
    return (
        !loading &&
        <div>
            <div className="empty"></div>
            <ContactUs contactClass="pop_up_container" wrapper={true} />
            {project.length === 0 ?
                <img className="w-50 d-block m-auto" src="/pagenotfound.webp" alt="Page not found." /> :
                error ? <h1 className="text-center">{error}</h1> :
                    (<>
                        <LayoutOne
                            bgColor={project[0].bgColor}
                            projectName={project[0].name}
                            content={project[0].content}
                            src={project[0].headerImg}
                            displayHandler={displayHandler}
                        />
                        {project[0].imgSrc.map((img, index) => {
                            if (index % 6 === 0 || (index + 1) % 6 === 0) {
                                return <img key={index} className="w-100" src={img} alt="" />
                            } else {
                                return <img key={index} className="w-50" src={img} alt="" />
                            }
                        })}
                    </>)
            }
        </div>
    )
}

export default PhotographyProject
