import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ExploreScreen from 'screens/ExploreScreen'

const TopTabs = createMaterialTopTabNavigator()

const CommunityStack = () => {
    return (
        <TopTabs.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    fontWeight: "bold"
                },
                tabBarIndicatorStyle: {
                    height: 5,
                    borderRadius: 5,
                    backgroundColor: "#6a7bff",
                },
                tabBarStyle: {
                    borderBottomColor: "gray",
                    borderBottomWidth: 1,
                }
            }}
        >
            <TopTabs.Screen
                options={{
                    title: "Local"
                }}
                name="ExploreScreen"
                component={ExploreScreen}
            />
            <TopTabs.Screen
                options={{
                    title: "Following",
                }}
                name="ExploreScreens"
                component={ExploreScreen}
            />
        </TopTabs.Navigator>
    )
}

export default CommunityStack

const styles = StyleSheet.create({})