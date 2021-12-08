import React from 'react'
import GetProjects from '../models/GetProjects'
import { db } from '../firebase';
import UiDesignLayout from './UiDesignLayout';

function UiDesign() {
    // addProject()
    const { projects: uiDesign, error } = GetProjects(db, 'uiDesign')

    return (
        <>
            {error ? <h1 className="text-center">{error}</h1> :
                uiDesign.map((project, index) => {
                    project.id = index + 1
                    return (
                        <UiDesignLayout
                            key={project.id}
                            name={project.name}
                            content={project.content}
                            img={project.img}
                            href={project.href}
                        />
                    )
                })}
        </>
    )
}

export default UiDesign
