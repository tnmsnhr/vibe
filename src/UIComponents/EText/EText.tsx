import { ColorValue, StyleProp, StyleSheet, TextStyle } from 'react-native'
import React from 'react'
import { useAppTheme } from 'theme/themeContext'
import { TextProps, Text } from 'react-native-paper'
import fonts from 'theme/Fonts';

interface StyledTextPorps {
    display?: boolean;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h5?: boolean;
    h6?: boolean;
    title1?: boolean;
    title2?: boolean;
    body1?: boolean;
    body2?: boolean;
    button1?: boolean;
    button2?: boolean;
    overline?: boolean;
    caption?: boolean;
    subHead?: boolean;
    captionSemiBold?: boolean;
    subTitleRegular?: boolean;
    subTitleSemiBold?: boolean;
    subTitleBold?: boolean;
    title?: boolean;
    textColor?: ColorValue,
    style?: StyleProp<TextStyle>,
    children: React.ReactNode
}

const EText: React.FC<StyledTextPorps> = ({
    display,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    title1,
    title2,
    body1,
    body2,
    button1,
    button2,
    overline,
    caption,
    subHead,
    captionSemiBold,
    subTitleRegular,
    subTitleSemiBold,
    subTitleBold,
    title,
    textColor,
    style,
    ...props

}) => {
    const theme = useAppTheme()
    return (
        <Text
            style={[
                display && fonts.display,
                h1 && fonts.h1,
                h2 && fonts.h2,
                h3 && fonts.h3,
                h4 && fonts.h4,
                h5 && fonts.h5,
                h6 && fonts.h6,
                title1 && fonts.title1,
                title2 && fonts.title2,
                body1 && fonts.body1,
                body2 && fonts.body2,
                button1 && fonts.button1,
                button2 && fonts.button2,
                overline && fonts.overline,
                caption && fonts.caption,
                subHead && fonts.subHead,
                captionSemiBold && fonts.captionSemiBold,
                subTitleRegular && fonts.subTitleRegular,
                subTitleSemiBold && fonts.subTitleSemiBold,
                subTitleBold && fonts.subTitleBold,
                title && fonts.title,
                { color: !!textColor ? textColor : theme.colors.text },
                style
            ]}
        >{props.children}</Text>
    )
}

export default EText

const styles = StyleSheet.create({})