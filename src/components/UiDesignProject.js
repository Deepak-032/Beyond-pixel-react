import React from 'react'
import { useParams } from 'react-router-dom'
import { useDocumentTitle } from './CustomHooks'
import './styles/ProjectDetails.css'
import GetProjects from '../models/GetProjects'
import { db } from '../firebase'
import addSubCollection from '../models/addSubCollection'
import ContactUs from './ContactUs'
import LayoutOne from './LayoutOne'
import LayoutThree from './LayoutThree'

function UiDesignProject({ displayHandler }) {
    const { id } = useParams()
    useDocumentTitle(`Beyond Pixel · ${id}`)
    const { projects: project, loading, error } = GetProjects(db, `uiDesign/${id}/subCollection`)
    const data = {
        bgColor: "#787C7C",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        headerImg: "/assets/uidesignheader.png",
        name: "Project Name",
        clientName: "Nitish Malhotra",
        year: "2021",
        paraOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        paraTwo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        imgSrc: [
            "/assets/beauty-skin-center-redesign-u8@2x.png",
            "/assets/scrnli_8_30_2021_3-03-23 AM@2x.png",
            "/assets/free-isometric-website-mock-up-psd-m5@2x.png"
        ]
    }
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
                            year={project[0].year}
                            paraOne={project[0].paraOne}
                            paraTwo={project[0].paraTwo}
                        />
                        {project[0].imgSrc.map(img => <img className="w-100 max_width d-block mb-5" src={img} />)}
                    </>)
            }
        </div>
    )
}

export default UiDesignProject
