import { collection, getDocs } from '../firebase'
import { useEffect, useState } from 'react'

export default function GetProjects(db, serviceName) {
    const [projects, setProjects] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        (async () => {
            try {
                const projectsSnapshot = await getDocs(collection(db, serviceName))
                setProjects(projectsSnapshot.docs.map(doc => doc.data()))
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        })()
    }, [])
    return { projects, loading, error }
}