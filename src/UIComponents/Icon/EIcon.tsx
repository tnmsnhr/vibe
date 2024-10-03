import { StyleSheet, ViewStyle } from 'react-native'
import { createIconSet } from 'react-native-vector-icons';

import React from 'react'
import { glyphMap } from './glyphMap';
import { useAppTheme } from 'theme/themeContext';

const CustomIcon = createIconSet(glyphMap, 'icomoon', 'icomoon.ttf');

type IconName = keyof typeof glyphMap;

interface CustomIconProps {
    name: IconName;
    size?: number;
    color?: string;
    style?: ViewStyle
}

const EIcon: React.FC<CustomIconProps> = ({ name, size = 20, color, style }) => {
    const theme = useAppTheme()
    return <CustomIcon name={name} size={size} color={color ? color : theme.colors.iconColor} style={style} />
}

export default EIcon

const styles = StyleSheet.create({})