import React from 'react'
import PhotographyLayout from './PhotographyLayout'
import { useDocumentTitle } from './CustomHooks'
// import { useStateValue } from './StateProvider'
import './styles/Project.css'
import GetProjects from '../models/GetProjects'
import { db } from '../firebase';

function Photography() {
    useDocumentTitle("Beyond Pixel · Photography")
    // const [{ photography }] = useStateValue()
    const { projects : photography, error } = GetProjects(db, 'photography')

    return (
        <>
            {error ? <h1 className="text-center">{error}</h1> :
                photography.map((project, index) => {
                    project.id = index + 1
                    return (
                        <PhotographyLayout
                            key={project.id}
                            name={project.name}
                            content={project.content}
                            imgSrc={project.imgSrc}
                            bgColor={project.bgColor}
                            href={project.href}
                            reverse={project.id % 2 === 0 ? "row-reverse" : ""}
                        />
                    )
                })}
        </>
    )
}

export default Photography
