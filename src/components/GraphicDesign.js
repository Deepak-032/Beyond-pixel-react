import React from 'react'
import GraphicDesignLayout from './GraphicDesignLayout'
import { useDocumentTitle } from './CustomHooks'
import GetProjects from '../models/GetProjects'
import { db } from '../firebase';

function GraphicDesign() {
    useDocumentTitle("Beyond Pixel · Graphic Design")
    const { projects : graphicDesign, error } = GetProjects(db, 'graphicDesign')
    
    return (
        <>
            {error ? <h1 className="text-center">{error}</h1> :
                graphicDesign.map(project => {
                    return (
                        <GraphicDesignLayout
                            key={project.id}
                            name={project.name}
                            content={project.content}
                            href={project.href}
                            images={project.imgSrc}
                        />
                    )
                })}
        </>
    )
}

export default GraphicDesign
