import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import theme from '../../theme'

const styles = StyleSheet.create({
    textInput:
    {
        borderRaidus: theme.textInput.borderRaidus,
        borderWidth: theme.textInput.borderWidth,
        borderColor: theme.textInput.borderColor,
        paddingHorizontal: theme.textInput.paddingHorizontal,
        paddingVertical: theme.textInput.paddingVertical,
        marginBottom: theme.textInput.marginBottom
    }
    ,
    error: {
        borderColor: 'red'
    }
})

const StyledTextInput = ({ style = {}, error, ...props }) => {
    const inputStyle = [
        styles.textInput,
        style,
        error && styles.error
    ]
    return <TextInput style={inputStyle} {...props} />
}

export default StyledTextInput