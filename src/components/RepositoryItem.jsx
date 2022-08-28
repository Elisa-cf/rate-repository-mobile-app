import React from 'react'
import { Image, View, StyleSheet, Platform } from 'react-native'
import StyledText from './StyledText'
import RepositoryStats from './RepositoryStats'
import theme from '../../theme'


const RepositoryItemHeader = ({ ownerAvatarUrl, fullName, description, language }) => (
    <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
        <View style={{ paddingRight: 10 }}>
            <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
        </View>
        <View style={{ flex: 1 }}>
            <StyledText fontWeight='bold' fontSize='subheading'>{fullName}</StyledText>
            <StyledText color='secondary' >{description}</StyledText>
            <StyledText style={styles.language}>{language}</StyledText>
        </View>
    </View>

)



const RepositoryItem = (props) => (
    /*<View key={props.id} style={{ padding: 20, paddingBottom: 5, paddingTop: 5 }}>*/
    <View key={props.id} style={styles.container}>
        {/* <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>id: {props.id}</Text> */}
        {/* <Text style={styles.strong}>id: {props.id}</Text> */}
        {/* <StyledText big bold>id: {props.id}</StyledText>
        <StyledText blue>FullName: {props.fullName}</StyledText>
        <StyledText bold>Description: {props.description}</StyledText>
        <StyledText blue>Language: {props.language}</StyledText>
        <StyledText small>Stars: {props.stargazersCount}</StyledText>
        <StyledText small>Forks: {props.forksCount}</StyledText>
        <StyledText small>Review: {props.reviewCount}</StyledText>
        <StyledText small>Rating: {props.ratingAverage}</StyledText> */}
        <RepositoryItemHeader {...props} />
        <RepositoryStats {...props} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingVertical: 5
    },
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: Platform.select({ android: theme.colors.primary, ios: 'orange', default: 'purple' }),
        alignSelf: 'flex-start',
        borderRadius: 4,
        overflow: 'hidden',
        marginVertical: 4

    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4,
    }

    /*strong: {
        color: '#09f',
        fontWeight: 'bold',
        marginBottom: 5
    }*/
})

export default RepositoryItem