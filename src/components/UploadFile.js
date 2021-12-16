import { db } from '../firebase';
import React, { useState, useEffect } from 'react'
import './styles/UploadFile.css'
import addProject from "../models/addProject";
import Modal from './Modal';
import uploadImageAsPromise from '../models/uploadImageAsPromise';

const initialState = {
    service: '',
    projectName: '',
    projectDesc: '',
    image0: '',
    image1: '',
    image2: '',
    image3: '',
    image4: '',
    color: '',
    videoLink: ''
}
const initialStateTwo = {
    projectDesc: '',
    headerImg: '',
    color: '',
    clientName: '',
    role: '',
    year: '',
    paraOne: '',
    paraTwo: ''
}
const initialMessage = 'Uploading the data to the server...'

function UploadFile() {
    const [state, setState] = useState(initialState)
    const [stateTwo, setStateTwo] = useState(initialStateTwo)
    const [loading, setLoading] = useState(false)
    const [startInner, setStartInner] = useState(false)
    const [noOfImages, setNoOfImages] = useState(0)
    const [imageArray, setImageArray] = useState({})
    const [modal, setModal] = useState(false)
    const [count, setCount] = useState(0)
    const [total, setTotal] = useState(0)
    const [message, setMessage] = useState(initialMessage)
    const [error, setError] = useState('')
    const [randomString, setRandomString] = useState('')

    const { service, projectName, projectDesc, image0, image1, image2, image3, image4, color, videoLink } = state

    useEffect(() => {
        if (state.service === "photography") setNoOfImages(3)
        else if (state.service === "graphicDesign") setNoOfImages(4)
        else if (state.service === "uiDesign") setNoOfImages(1)
        else setNoOfImages(0)

        if (startInner) {
            const promises = []
            let data = {
                id: Date.now(),
                name: projectName,
                content: stateTwo.projectDesc,
                headerImg: '',
                imgSrc: null,
                bgColor: stateTwo.color || color,
                clientName: stateTwo.clientName,
                role: stateTwo.role,
                year: stateTwo.year,
                para: [stateTwo.paraOne, stateTwo.paraTwo]
            }
            let images = [stateTwo.headerImg]
            images.push(...Object.values(imageArray))
            images.forEach(image => {
                let dir = `${projectName}/innerGallery`
                const promise = uploadImageAsPromise(image, service, dir)
                promises.push(promise)
                promise.then(() => setCount(prev => prev + 1))
            })
            Promise.all(promises)
                .then(urls => {
                    data.headerImg = urls.splice(0, 1)
                    data.imgSrc = urls
                })
                .then(() => {
                    let dir = `${service}/${projectName}/subCollection`
                    data.para.filter(Boolean).length === 0 && delete data.para
                    data = Object.fromEntries(Object.entries(data).filter(([_, i]) => i))
                    addProject(db, dir, 'innerGallery', data)
                })
                .then(() => {
                    setMessage('Successfully uploaded the data to the server.')
                    setStartInner(false)
                    setState({ ...initialState, service })
                    setStateTwo(initialStateTwo)
                    setRandomString(Math.random().toString(36))
                    setLoading(false)
                })
                .catch(() => setError('Unable to upload the data, please try again.'))
        }
    }, [state.service, startInner]) // eslint-disable-line react-hooks/exhaustive-deps

    const change = e => {
        if (e.target.name === "service") {
            setState({ ...initialState, [e.target.name]: e.target.value })
            setRandomString(Math.random().toString(36))
            return true
        }
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const fileHandler = e => setState({ ...state, [e.target.name]: e.target.files[0] })
    const changeTwo = e => setStateTwo({ ...stateTwo, [e.target.name]: e.target.value })
    const fileHandlerTwo = e => setStateTwo({ ...stateTwo, [e.target.name]: e.target.files[0] })

    const upload = e => {
        e.preventDefault()
        setLoading(true)
        setModal(true)
        setMessage(initialMessage)
        setCount(0)
        setTotal(0)
        setError('')
        const data = {
            id: Date.now(),
            name: projectName,
            content: projectDesc
        }
        if (noOfImages === 0) {
            data.videoSrc = videoLink
            addProject(db, service, projectName, data)
                .then(() => {
                    setMessage('Successfully uploaded the data to the server.')
                    setState({ ...initialState, service })
                    setRandomString(randomString)
                    setLoading(false)
                })
                .catch(() => {
                    setError('Unable to upload the data, please try again.')
                    setState({ ...initialState, service })
                    setRandomString(randomString)
                    setLoading(false)
                })
        } else {
            const promises = []
            data.bgColor = color
            data.href = `/${service}/${projectName}`
            color === '' && delete data.bgColor
            const images = [image0, image1, image2, image3, image4].filter(Boolean)
            let total = images.length + Object.keys(imageArray).length
            stateTwo.headerImg !== '' && ++total
            setTotal(total)
            images.forEach(image => {
                const promise = uploadImageAsPromise(image, service, projectName)
                promises.push(promise)
                promise.then(() => setCount(prev => prev + 1))
            })
            Promise.all(promises)
                .then(urls => data.imgSrc = urls)
                .then(() => addProject(db, service, projectName, data))
                .then(() => setStartInner(true))
                .catch(() => setError('Unable to upload the data, please try again.'))
        }
    }

    return (
        <div className='max_width'>
            <form onSubmit={upload} className="form_admin form_upload mt-5">
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
                        <textarea type="text" name="projectDesc" value={state.projectDesc} onChange={change} placeholder={`Enter project's description (max characters ${noOfImages === 3 ? "116" : "410"})`} maxLength={noOfImages === 3 ? "116" : "410"} required />
                        <div className="upload_file_container row justify-content-between align-items-center">
                            <div className={`col-12 ${noOfImages === 3 && "col-lg-6"} upload_file position-relative`}>
                                <span className="upload_file_heading">For {state.service} page</span>
                                {[...Array(noOfImages)].map((e, i) =>
                                    <div className="input-group mb-3">
                                        <label className="input-group-text" htmlFor={`innerGalleryImage${i}`}>Image {i + 1}</label>
                                        <input type="file" key={randomString} onChange={fileHandler} name={`image${i}`} className="form-control" id={`innerGalleryImage${i}`} required />
                                    </div>
                                )}
                                {noOfImages === 3 &&
                                    <div className="input-group mb-3">
                                        <label className="input-group-text" htmlFor="color">{state.color ? state.color : "Background color"}</label>
                                        <input type="color" key={randomString} className="form-control" name="color" onChange={change} id="color" required />
                                    </div>
                                }
                                {noOfImages === 0 && <input type="link" name="videoLink" value={state.videoLink} onChange={change} placeholder="Enter link htmlFor the video" required />}
                            </div>
                            <div className={`col-12 col-lg-6 d-flex ${noOfImages !== 3 && "d-none"}`} style={{ maxWidth: "fit-content", maxHeight: "145px" }}>
                                <div className="image_one d-flex align-items-center">Image 1</div>
                                <div>
                                    <div className="image d-inline-block">Image 2</div>
                                    <div className="image d-inline-block">Image 3</div>
                                    <div className="demo_project_name">Project Name</div>
                                </div>
                            </div>
                        </div>
                        {/* inner gallery start */}
                        {noOfImages !== 0 &&
                            <div className="upload_file_container form_admin position-relative">
                                <span className="upload_file_heading">For {state.service} inner gallery</span>
                                <div className='d-flex'>
                                    <textarea className='me-3' type="text" name="projectDesc" value={stateTwo.projectDesc} onChange={changeTwo} placeholder="Enter project's description (max characters 410)" maxLength="410" required />
                                    <div className="input-group mb-3" style={{ height: "fit-content" }}>
                                        <label className="input-group-text" htmlFor="headerImage">Header Image</label>
                                        <input type="file" key={randomString} onChange={fileHandlerTwo} name='headerImg' className="form-control" id="headerImage" required />
                                    </div>
                                </div>
                                {noOfImages !== 3 &&
                                    <div className="input-group mb-3" style={{ height: "fit-content" }}>
                                        <label className="input-group-text" htmlFor="color2">{stateTwo.color ? stateTwo.color : "Background color"}</label>
                                        <input type="color" key={randomString} name='color' onChange={changeTwo} className="form-control" id="color2" required />
                                    </div>
                                }
                                {noOfImages === 1 &&
                                    <>
                                        <div className='d-flex mt-4'>
                                            <input className="me-3" type="text" name="clientName" value={stateTwo.clientName} onChange={changeTwo} placeholder="Enter client name" required />
                                            <input className="me-3" type="text" name="role" value={stateTwo.role} onChange={changeTwo} placeholder="Enter roles (separated by commas ',')" required />
                                            <input type="text" name="year" value={stateTwo.year} onChange={changeTwo} placeholder="Enter year" required />
                                        </div>
                                        <textarea type="text" name="paraOne" value={stateTwo.paraOne} onChange={changeTwo} placeholder="Enter case study para one" required />
                                        <textarea type="text" name="paraTwo" value={stateTwo.paraTwo} onChange={changeTwo} placeholder="Enter case study para two" />
                                    </>
                                }
                                <hr className='mb-4' />
                                {[...Array(20)].map((e, i) =>
                                    <div className="input-group mb-3">
                                        <label className="input-group-text" htmlFor={`innerGalleryImage${i}`}>Image {i + 1}</label>
                                        <input type="file" key={randomString} onChange={e => setImageArray({ ...imageArray, [i]: e.target.files[0] })} name={`image${i}`} className="form-control" id={`innerGalleryImage${i}`} />
                                    </div>
                                )}
                            </div>
                        }
                    </>
                }
                <button type="submit" disabled={loading} className="btn_contact_us">Upload</button>
            </form>
            {modal && <Modal setModal={setModal} count={count} total={total} loading={loading} message={message} error={error} />}
        </div>
    )
}

export default UploadFile
