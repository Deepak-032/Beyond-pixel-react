import { doc, setDoc } from '../firebase'

export default async function addProject(db, serviceName, projectName, data) {
    const res = await setDoc(doc(db, serviceName, projectName), data)
    return res
}
