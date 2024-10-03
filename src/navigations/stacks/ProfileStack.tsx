import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack'
import { ScreenNames } from 'types/screenNames'
import ProfileScreen from 'screens/ProfileScreen'
import DrawerGroup from 'navigations/Drawer'
import { DarkTheme, DefaultTheme } from '@react-navigation/native'
import { RootStackParamList } from 'navigations/type'

const ProfileStackGroup = createNativeStackNavigator<RootStackParamList>()

type Props = NativeStackScreenProps<RootStackParamList, "ProfileStack">;


const ProfileStack = ({ navigation }: Props) => {
    return (
        <ProfileStackGroup.Navigator screenOptions={{}}>
            <ProfileStackGroup.Screen
                options={{
                    headerRight: () => {
                        return <Pressable onPress={() => {
                            navigation.navigate("Drawer")
                        }}>
                            <Text>Open</Text>
                        </Pressable>
                    },

                }}
                name={ScreenNames.Profile}
                component={ProfileScreen} />
            <ProfileStackGroup.Screen name="Drawer" component={DrawerGroup} />
        </ProfileStackGroup.Navigator>
    )
}

export default ProfileStack
