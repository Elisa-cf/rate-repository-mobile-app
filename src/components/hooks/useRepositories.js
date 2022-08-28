import { useState, useEffect } from 'react'

const useRepositories = () => {
    const [repositories, setRepositories] = useState(null)

    const fetchRepositories = async () => {
        const response = await global.fetch('http://192.168.8.142:5000/api/repositories')
        const json = await response.json()
        setRepositories(json)
    }

    useEffect(() => {
        fetchRepositories()
    }, [])

    const repositoriesNodes = repositories ? repositories.edges.map(edge =>
        edge.node) : []
    return { repositories: repositoriesNodes }
}

export default useRepositories