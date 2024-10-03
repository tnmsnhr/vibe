import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ScreenNames } from 'types/screenNames'
import HomeScreen from 'screens/HomeScreen'
import EventDetailsScreen from 'screens/EventDetailsScreen'

const HomeStackGroup = createNativeStackNavigator()

const HomeStack = () => {
    return (
        <HomeStackGroup.Navigator>
            <HomeStackGroup.Screen
                options={{
                    headerBackTitle: "Back",
                    headerShown: false
                }}
                name={ScreenNames.Home}
                component={HomeScreen}
            />

            <HomeStackGroup.Screen
                options={{
                    presentation: "modal"
                }}
                name={"ItemDetails"}
                component={EventDetailsScreen}
            />
        </HomeStackGroup.Navigator>
    )
}

export default HomeStack

const styles = StyleSheet.create({})