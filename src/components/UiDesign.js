import React from 'react'
import GetProjects from '../models/GetProjects'
import { db } from '../firebase';
import UiDesignLayout from './UiDesignLayout';
import { useDocumentTitle } from './CustomHooks'

function UiDesign() {
    useDocumentTitle("Beyond Pixel · Ui/Ux Design & Website Development")
    const { projects: uiDesign, error } = GetProjects(db, 'uiDesign')

    return (
        <>
            {error ? <h1 className="text-center">{error}</h1> :
                uiDesign.map(project => {
                    return (
                        <UiDesignLayout
                            key={project.id}
                            name={project.name}
                            content={project.content}
                            img={project.imgSrc}
                            href={project.href}
                        />
                    )
                })}
        </>
    )
}

export default UiDesign
