import { db, storage, ref, uploadBytesResumable, getDownloadURL } from '../firebase';
import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import './styles/UploadFile.css'
import addProject from "../models/addProject";
import Modal from './Modal';

const initialState = {
    service: '',
    projectName: '',
    projectDesc: '',
    image1: '',
    image2: '',
    image3: '',
    image4: '',
    image: '',
    color: '',
    videoLink: ''
}

function UploadFile({ setProjectName }) {
    const history = useHistory()
    const [state, setState] = useState(initialState)
    const [modal, setModal] = useState(false)
    const [error, setError] = useState('')
    const [count, setCount] = useState(0)
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(false)

    const change = e => {
        if (e.target.name === "service") {
            setState({ ...initialState, [e.target.name]: e.target.value })
            return true
        }
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const fileHandler = e => {
        setState({ ...state, [e.target.name]: e.target.files[0] })
    }

    const upload = e => {
        e.preventDefault()
        setLoading(true)
        setModal(true)
        const { service, projectName, projectDesc, image1, image2, image3, image4, image, color, videoLink } = state
        if (service === "cinematography" || service === "motionGraphics") {
            const data = {
                id: null,
                name: projectName,
                content: projectDesc,
                videoSrc: videoLink
            }
            addProject(db, service, projectName, data)
                .then(() => {
                    alert("Successfully updated the database.")
                    setState({ ...initialState, service })
                })
                .catch(() => {
                    alert("Error while updated the database.")
                    setState({ ...initialState, service })
                })
        } else {
            let data = {
                id: null,
                name: projectName,
                content: projectDesc,
                bgColor: color,
                href: `/${service}/${projectName}`,
                imgSrc: []
            }
            if (color === '') {
                delete data.bgColor
            }
            let images = [image1, image2, image3, image4, image].filter(i => i)
            setTotal(images.length)
            const promises = []
            images.forEach((image, index) => {
                const promise = uploadImageAsPromise(image, service, projectName)
                promises.push(promise)
                promise.then(url => {
                    setCount(prevState => prevState + 1)
                    data.imgSrc[index] = url
                })
                    .catch(err => setError(err))
            })
            Promise.all(promises)
                .then(() => {
                    addProject(db, service, projectName, data)
                        .then(() => {
                            alert("Successfully updated the database.")
                            setState({ ...initialState, service })
                        })
                    setLoading(false)
                })
            // setProjectName(projectName)
            // history.push("/admin/upload/multiple")
        }
    }
    const uploadImageAsPromise = (image, service, projectName) => {
        return new Promise((resolve, reject) => {
            const storageRef = ref(storage, `${service}/${projectName}/${image.name}`)
            const uploadTask = uploadBytesResumable(storageRef, image)
            uploadTask.on('state_changed',
                (snapshot) => {},
                error => reject(error),
                () => {
                    getDownloadURL(uploadTask.snapshot.ref)
                        .then(downloadURL => resolve(downloadURL))
                }
            )
        })
    }

    return (
        <div>
            <form onSubmit={upload} className="form_admin form_upload" method="POST">
                <select defaultValue="DEFAULT" className="highlight" name="service" onChange={change} required>
                    <option value="DEFAULT" disabled>Select the Service</option>
                    <option value="photography">Photography</option>
                    <option value="graphicDesign">Graphic Design</option>
                    <option value="cinematography">Cinematography</option>
                    <option value="motionGraphics">Motion Graphics</option>
                    <option value="uiDesign">Ui Design</option>
                </select>
                {state.service &&
                    <>
                        <input type="text" name="projectName" value={state.projectName} onChange={change} placeholder="Enter new project's name" required />
                        <textarea type="text" name="projectDesc" value={state.projectDesc} onChange={change} placeholder="Enter project's description" required />

                        <div className="upload_file_container">
                            <div className="upload_file_heading">For the selected service page</div>
                            {state.service === "photography" || state.service === "graphicDesign" ?
                                <div className="row justify-content-between">
                                    <div className="col-12 col-lg-6 upload_file">
                                        <div className="input-group mb-3">
                                            <label className="input-group-text" htmlFor="inputGroupFile01">Image 1</label>
                                            <input type="file" name="image1" onChange={fileHandler} className="form-control" id="inputGroupFile01" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <label className="input-group-text" htmlFor="inputGroupFile02">Image 2</label>
                                            <input type="file" name="image2" onChange={fileHandler} className="form-control" id="inputGroupFile02" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <label className="input-group-text" htmlFor="inputGroupFile03">Image 3</label>
                                            <input type="file" name="image3" onChange={fileHandler} className="form-control" id="inputGroupFile03" />
                                        </div>
                                        <input type="color" name="color" onChange={change} disabled={state.service === "photography" ? false : true} />
                                        <div className={`input-group mb-3 ${state.service === "photography" ? "d-none" : ""}`}>
                                            <label className="input-group-text" htmlFor="inputGroupFile04">Image 4</label>
                                            <input type="file" name="image4" onChange={fileHandler} disabled={state.service === "photography" ? true : false} className="form-control" id="inputGroupFile04" required />
                                        </div>
                                    </div>

                                    <div className={`col-12 col-lg-6 d-flex ${state.service === "photography" ? "" : "d-none"}`} style={{ maxWidth: "fit-content" }}>
                                        <div className="image_one d-flex align-items-center">Image 1</div>
                                        <div>
                                            <div className="d-flex">
                                                <div className="image">Image 2</div>
                                                <div className="image">Image 3</div>
                                            </div>
                                            <div className="demo_project_name">Project Name</div>
                                        </div>
                                    </div>

                                </div> :
                                <>
                                    {state.service === "uiDesign" ?
                                        <div className={`input-group mb-3`}>
                                            <label className="input-group-text" htmlFor="inputGroupFile05">Image</label>
                                            <input type="file" name="image" onChange={fileHandler} className="form-control" id="inputGroupFile05" required />
                                        </div> :
                                        <input type="link" name="videoLink" value={state.videoLink} onChange={change} placeholder="Enter link htmlFor the video" required />
                                    }
                                </>
                            }
                        </div>
                    </>
                }
                <button type="submit" disabled={loading} className="btn_contact_us">Upload</button>
            </form>
            {modal && <Modal setModal={setModal} count={count} total={total} error={error} />}
        </div>
    )
}

export default UploadFile
