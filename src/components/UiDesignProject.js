import React from 'react'
import { useParams } from 'react-router-dom'
import { useDocumentTitle } from './CustomHooks'
import './styles/ProjectDetails.css'
import GetProjects from '../models/GetProjects'
import { db } from '../firebase'
import ContactUs from './ContactUs'
import LayoutOne from './LayoutOne'
import LayoutThree from './LayoutThree'

function UiDesignProject({ displayHandler }) {
    const { id } = useParams()
    useDocumentTitle(`Beyond Pixel · ${id}`)
    const { projects: project, loading, error } = GetProjects(db, `uiDesign/${id}/subCollection`)

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
                        <LayoutThree
                            name={project[0].clientName}
                            role={project[0].role}
                            year={project[0].year}
                            paraOne={project[0].para[0]}
                            paraTwo={project[0].para[1]}
                        />
                        {project[0].imgSrc.map(img => <img key={img} className="w-100 max_width d-block mb-5" src={img} alt="" />)}
                    </>)
            }
        </div>
    )
}

export default UiDesignProject
