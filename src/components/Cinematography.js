import React from 'react'
import CinematographyLayout from './MGraphicsCinematographyLayout'
import { useDocumentTitle } from './CustomHooks'
import GetProjects from '../models/GetProjects'
import { db } from '../firebase';

function Cinematography({ displayHandler }) {
    useDocumentTitle("Beyond Pixel · Cinematography")
    const { projects, error } = GetProjects(db, 'cinematography')

    return (
        <>
            {error ? <h1 className="text-center">{error}</h1> :
                projects.map(project => {
                    return (
                        <CinematographyLayout
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

export default Cinematography
