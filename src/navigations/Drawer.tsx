import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { ScreenNames } from '../types/screenNames'
import BottomTabNavigator from './BottomTabNavigator'
import DrawerScreen from 'screens/DrawerScreen'

const Drawer = createDrawerNavigator()

const DrawerGroup = () => {
    return (
        <Drawer.Navigator
            drawerContent={() => <DrawerScreen />}
            screenOptions={{
                headerShown: false,
                drawerPosition: "right",
                drawerStyle: {
                    width: "100%"
                },
            }}
        >
            <Drawer.Screen
                options={{
                }}
                name={"DrawerScreen"}
                component={DrawerScreen}
            />
        </Drawer.Navigator>
    )
}

export default DrawerGroup