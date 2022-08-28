import { FlatList, Text } from 'react-native'
/*import repositories from '../data/repositories'*/
import RepositoryItem from './RepositoryItem'
import useRepositories from './hooks/useRepositories'

const RepositoryList = () => {
    const { repositories } = useRepositories()

    return (
        <FlatList data={repositories}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: repo }) => (
                <RepositoryItem {...repo} />
            )}></FlatList>
    )
}

/*const [repositories, setRepositories] = useState(null)

const fetchRepositories = async () => {
    const response = await global.fetch('http://localhost:5000/api/repositories')
    const json = await response.json()
    setRepositories(json)
}

useEffect(() => {
    fetchRepositories()
}, [])

const repositoriesNodes = repositories ? repositories.edges.map(edge =>
    edge.node) : []

return (
    <FlatList data={repositoriesNodes}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({ item: repo }) => (
            <RepositoryItem {...repo} />
        )}>
        {/* <FlatList data={repositories}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({ item: repo }) => (
            <RepositoryItem {...repo} />
        )}> */
/* {repositories.map(repo => (
<View key={repo.id}>
    <Text>id: {repo.id}</Text>
    <Text>FullName: {repo.fullName}</Text>
    <Text>Description: {repo.description}</Text>
    <Text>Language: {repo.language}</Text>
    <Text>Stars: {repo.stargazersCount}</Text>
    <Text>Forks: {repo.forksCount}</Text>
    <Text>Review: {repo.reviewCount}</Text>
    <Text>Rating: {repo.rating}</Text>
</View>
))} 
</FlatList>
)
}*/

export default RepositoryList