import React, { useState, useEffect } from 'react'
import { db, collection, getDocs, query, orderBy, doc, deleteDoc, deleteObject, ref, storage, listAll } from '../firebase'
import Modal from './Modal'

const initialState = {
    service: 'DEFAULT',
    projects: null,
    delete: '',
    message: '',
    error: ''
}
function DeleteProject() {
    const [state, setState] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(false)

    useEffect(() => {
        if (state.service)
            (async () => {
                try {
                    const q = query(collection(db, state.service), orderBy("id"))
                    const projectsSnapshot = await getDocs(q)
                    setState({ ...state, projects: projectsSnapshot.docs.map(doc => doc.data()) })
                } catch (error) {
                    alert("Error cannot get the data.")
                }
            })()
    }, [state.service, modal]) // eslint-disable-line react-hooks/exhaustive-deps

    const cleanStorage = dir => {
        const deleteRref = ref(storage, dir)
        listAll(deleteRref)
            .then(res => {
                res.prefixes.forEach(folderRef => cleanStorage(folderRef))
                res.items.forEach(itemRef => deleteObject(itemRef))
            }).catch(() => setState({ error: 'Error occured, please try again later.' }))
    }
    const change = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const deleteHandler = async e => {
        e.preventDefault()
        setState({ ...state, error: '', message: `Deleting the project: ${state.delete}` })
        setLoading(true)
        setModal(true)
        if (state.service === 'cinematography' || state.service === 'motionGraphics') {
            await deleteDoc(doc(db, state.service, state.delete))
                .then(() => {
                    setLoading(false)
                    setState({ ...initialState, message: `Successfully deleted the project, ${state.delete}` })
                }).catch(() => setState({ error: 'Error occured, please try again later.' }))
        } else {
            await deleteDoc(doc(db, `${state.service}/${state.delete}/subCollection`, "innerGallery"))
                .then(async () => {
                    await deleteDoc(doc(db, state.service, state.delete))
                    cleanStorage(`${state.service}/${state.delete}`)
                }).then(() => {
                    setLoading(false)
                    setState({ ...initialState, message: `Successfully deleted the project, ${state.delete}` })
                }).catch(() => setState({ error: 'Error occured, please try again later.' }))
        }
    }

    return (
        <>
            <form onSubmit={deleteHandler} className="max_width form_admin form_upload mt-5">
                <select value={state.service} className="highlight" name="service" onChange={change} required>
                    <option value="DEFAULT" disabled>Select the Service</option>
                    <option value="photography">Photography</option>
                    <option value="graphicDesign">Graphic Design</option>
                    <option value="cinematography">Cinematography</option>
                    <option value="motionGraphics">Motion Graphics</option>
                    <option value="uiDesign">Ui Design</option>
                </select>
                {state.service !== 'DEFAULT' &&
                    <select defaultValue="DEFAULT" className="highlight" name="service" onChange={e => setState({ ...state, delete: e.target.value })} required>
                        <option value="DEFAULT" disabled>Select the project to delete</option>
                        {state.projects?.map(project => <option value={project.name}>{project.name}</option>)}
                    </select>
                }
                <button type="submit" disabled={(state.delete ? false : true) && !loading} className="btn_contact_us">Delete</button>
            </form>
            {modal && <Modal setModal={setModal} total={0} loading={loading} message={state.message} error={state.error} />}
        </>
    )
}

export default DeleteProject
