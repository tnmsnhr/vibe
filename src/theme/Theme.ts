import { colors } from "./Colors";
import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";
import { DarkTheme, DefaultTheme } from '@react-navigation/native';


const lightTheme = {
    ...MD3LightTheme,
    roundness: 2,
    custom: "property",
    colors: {
        ...MD3LightTheme.colors,
        ...colors.light
    }
};

const darkTheme = {
    ...MD3DarkTheme,
    roundness: 2,
    custom: "property",
    colors: {
        ...MD3DarkTheme.colors,
        ...colors.dark
    }
};

const NavigationDarkTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        background: colors.dark.background,
        card: colors.dark.EColor950,
        text: colors.dark.text,
        border: "transparent"
    },
};

const NavigationDefaultTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: colors.light.background,
        card: colors.light.gray50,
        text: colors.light.text,
        border: "transparent"
    },
};

export { lightTheme, darkTheme, NavigationDarkTheme, NavigationDefaultTheme }