import React, { useState } from 'react'
import MotionGraphicsLayout from './MGraphicsCinematographyLayout'
import { useDocumentTitle } from './CustomHooks'
// import { useStateValue } from './StateProvider'
import GetProjects from '../models/GetProjects'
import { db } from '../firebase';

function MotionGraphics({ displayHandler }) {
    useDocumentTitle("Beyond Pixel · Motion Graphics")
    // const [{ motionGraphics }] = useStateValue()
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
                            video={project.videoSrc}
                            displayHandler={displayHandler}
                        />
                    )
                })}
        </>
    )
}

export default MotionGraphics
