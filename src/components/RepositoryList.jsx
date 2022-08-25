import React from 'react'
import { FlatList, Text } from 'react-native'
import repositories from '../data/repositories'
import RepositoryItem from './RepositoryItem'

const RepositoryList = () => {
    return (
        <FlatList data={repositories}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: repo }) => (
                <RepositoryItem {...repo} />
            )}>
            {/* {repositories.map(repo => (
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
            ))} */}
        </FlatList>
    )
}

export default RepositoryList