import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTabNavigator from 'navigations/BottomTabNavigator'

const DrawerNavigator = createDrawerNavigator()

const AppStack = () => {
    return (
        <DrawerNavigator.Navigator
            screenOptions={{}}
            initialRouteName="BottomTabNavigator"
        >
            <DrawerNavigator.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
        </DrawerNavigator.Navigator>
    )
}

export default AppStack

const styles = StyleSheet.create({})