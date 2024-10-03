import React from "react"
import { useColorScheme } from "react-native"
import { darkTheme, lightTheme } from "./Theme"
import { EFontType } from "./Fonts"
import spaces from "./Spaces"
import { Provider as PaperProvider, useTheme } from "react-native-paper"

interface AppThemeProviderProps {
    children: React.ReactNode
}

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({ children }) => {
    const colorScheme = useColorScheme()
    const isDarkTheme = colorScheme === 'dark'
    const themeColor = isDarkTheme ? darkTheme : lightTheme

    const customAppTheme = { ...themeColor, spaces };


    return <PaperProvider theme={customAppTheme}>{children}</PaperProvider>
}

export type AppTheme = typeof lightTheme & EFontType & typeof spaces

export const useAppTheme = () => useTheme<AppTheme>()