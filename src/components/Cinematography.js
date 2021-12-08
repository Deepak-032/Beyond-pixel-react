import React, { useState } from 'react'
import CinematographyLayout from './MGraphicsCinematographyLayout'
import { useStateValue } from './StateProvider'
import { useDocumentTitle } from './CustomHooks'
import GetProjects from '../models/GetProjects'
import { db } from '../firebase';

function Cinematography({ displayHandler }) {
    useDocumentTitle("Beyond Pixel · Cinematography")
    // const [{ cinematography }] = useStateValue()
    const { projects : cinematography, error } = GetProjects(db, 'cinematography')

    return (
        <>
            {error ? <h1 className="text-center">{error}</h1> :
                cinematography.map((project, index) => {
                    project.id = index + 1
                    return (
                        <CinematographyLayout
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

export default Cinematography
