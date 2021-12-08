import { doc, setDoc } from '../firebase'

export default async function addSubCollection(db, subCollection, documentName, data) {
    const res = await setDoc(doc(db, subCollection, documentName), data)
    return res
}