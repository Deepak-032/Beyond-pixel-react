import React from 'react'
import GraphicDesignLayout from './GraphicDesignLayout'
import { useDocumentTitle } from './CustomHooks'
// import { useStateValue } from './StateProvider'
import GetProjects from '../models/GetProjects'
import { db } from '../firebase';

function GraphicDesign() {
    useDocumentTitle("Beyond Pixel · Graphic Design")
    // const [{ graphicDesign }] = useStateValue()
    const { projects : graphicDesign, error } = GetProjects(db, 'graphicDesign')
    
    return (
        <>
            {error ? <h1 className="text-center">{error}</h1> :
                graphicDesign.map((project, index) => {
                    project.id = index + 1
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
