import React from 'react'
import MotionGraphicsLayout from './MGraphicsCinematographyLayout'
import { useDocumentTitle } from './CustomHooks'
import GetProjects from '../models/GetProjects'
import { db } from '../firebase';

function MotionGraphics({ displayHandler }) {
    useDocumentTitle("Beyond Pixel · Motion Graphics")
    const { projects : motionGraphics, error } = GetProjects(db, 'motionGraphics')

    return (
        <>
            {error ? <h1 className="text-center">{error}</h1> :
                motionGraphics.map((project, index) => {
                    project.id = index + 1
                    return (
                        <MotionGraphicsLayout
                            key={project.id}
                            name={project.name}
                            content={project.content}
                            videoSrc={project.videoSrc}
                            displayHandler={displayHandler}
                        />
                    )
                })}
        </>
    )
}

export default MotionGraphics
