import { collection, getDocs, query, orderBy } from '../firebase'
import { useEffect, useState } from 'react'

export default function GetProjects(db, serviceName) {
    const [projects, setProjects] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        (async () => {
            try {
                const q = query(collection(db, serviceName), orderBy("id"))
                const projectsSnapshot = await getDocs(q)
                setProjects(projectsSnapshot.docs.map(doc => doc.data()))
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        })()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    return { projects, loading, error }
}