import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import ExploreScreen from '../screens/ExploreScreen';
import { ScreenNames } from '../types/screenNames';
import HomeStack from './stacks/HomeStack';
import ProfileStack from './stacks/ProfileStack';
import CommunityStack from './stacks/CommunityStack';
import EIcon from 'UIComponents/Icon';
import { glyphMap } from 'UIComponents/Icon/glyphMap';
import { RootStackParamList } from './type';
import { useAppTheme } from 'theme/themeContext';
import BottomTabBar from './BottomTabBar';

const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomTabNavigator: React.FC = () => {
    const theme = useAppTheme()
    return (
        <Tab.Navigator
            initialRouteName='Home'
            id='bottom-tab'
            backBehavior='history'
            tabBar={(props) => <BottomTabBar {...props} />}
        >
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: "Home"
                }}
                name={ScreenNames.HomeStack}
                component={HomeStack} />
            <Tab.Screen
                name="Nearby"
                component={CommunityStack} />
            <Tab.Screen name="Explore" component={ExploreScreen} />
            <Tab.Screen name={ScreenNames.ProfileStack} component={ProfileStack}
                options={{
                    headerShown: false,
                    tabBarLabel: "Profile"
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
    tabBarLabelStyle: {
        fontWeight: "bold",
    }
})
