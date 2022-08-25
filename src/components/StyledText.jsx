import React from "react";
import { Text, StyleSheet } from 'react-native'
import theme from "../../theme.js";

/*const styles = StyleSheet.create({
    text: {
        fontsize: 12,
        color: 'grey'
    },
    bold: {
        fontWeight: 'bold'
    },
    blue: {
        color: 'blue'
    },
    big: {
        fontSize: 20
    },
    small: {
        fontSize: 10
    }
})*/

const styles = StyleSheet.create({
    text: {
        fontsize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    colorPrimary: {
        color: theme.colors.primary
    },
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    subheading: {
        fontSize: theme.fontSizes.subheading
    },
    textAlignCenter: {
        textAlign: 'center'
    }

})

/*export default function StyledText({ blue, bold, children, big, small }) {
    const textStyles = [
        styles.text,
        blue && styles.blue,
        big && styles.big,
        small && styles.small,
        bold && styles.bold
    ]
    return (
        <Text style={textStyles}>
            {children}
        </Text>
    )
}*/

export default function StyledText({ align, children, color, fontSize, fontWeight, style, ...restOfProps }) {
    const textStyles = [
        styles.text,
        align === 'center' && styles.textAlignCenter,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subheading' && styles.fontSize,
        fontWeight === 'bold' && styles.bold,
        style
    ]
    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}
