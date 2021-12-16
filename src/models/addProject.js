import { doc, setDoc } from '../firebase'

export default async function addProject(db, collectionName, documentName, data) {
    const res = await setDoc(doc(db, collectionName, documentName), data)
    return res
}
