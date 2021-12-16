import React from 'react'
import PhotographyLayout from './PhotographyLayout'
import { useDocumentTitle } from './CustomHooks'
import './styles/Project.css'
import GetProjects from '../models/GetProjects'
import { db } from '../firebase';

function Photography() {
    useDocumentTitle("Beyond Pixel · Photography")
    const { projects, error } = GetProjects(db, 'photography')

    return (
        <>
            {error ? <h1 className="text-center">{error}</h1> :
                projects.map((project, index) => {
                    return (
                        <PhotographyLayout
                            key={project.id}
                            name={project.name}
                            content={project.content}
                            imgSrc={project.imgSrc}
                            bgColor={project.bgColor}
                            href={project.href}
                            reverse={index % 2 ? "row-reverse" : ""}
                        />
                    )
                })}
        </>
    )
}

export default Photography
