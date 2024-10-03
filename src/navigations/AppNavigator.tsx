import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native';
import { darkTheme, lightTheme, NavigationDarkTheme, NavigationDefaultTheme } from "../theme/Theme"

const Stack = createNativeStackNavigator()

const AppNavigator: React.FC = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const themeColor = isDarkMode ? { ...darkTheme, ...NavigationDarkTheme } : { ...lightTheme, ...NavigationDefaultTheme }
    return (
        <NavigationContainer
            theme={themeColor}
        >
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="AppStack" component={BottomTabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
