import { Platform } from "react-native"

const theme = {
    textInput: {
        borderRaidus: 5,
        borderWidth: 1,
        borderColor: '#999',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10
    },
    appBar: {
        primary: '#24292e',
        textSecondary: '#999',
        textPrimary: '#fff'
    },
    colors: {
        textPrimary: '#24292e',
        textSecondary: '#586069',
        primary: '#0366d6',
        white: '#fff'

    },
    fontSizes: {
        body: 14,
        subheading: 16
    },
    fonts: {
        main: Platform.select({
            ios: 'Arial',
            android: 'sans-serif-condensed',
            default: 'System'
        })
    },
    fontWeights: {
        normal: '400',
        bold: '700'
    }
}

export default theme