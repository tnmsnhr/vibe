import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
    BottomTabBarProps as TabBarProps,
} from '@react-navigation/bottom-tabs';
import { useAppTheme } from 'theme/themeContext';
import EText from 'UIComponents/EText';
import { glyphMap } from 'UIComponents/Icon/glyphMap';
import EIcon from 'UIComponents/Icon';

interface BottomTabBarProps extends TabBarProps {

}

const BottomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
    const { top, bottom, left, right } = useSafeAreaInsets();

    const theme = useAppTheme()

    return (
        <View style={[
            styles.tabContainer,
            {
                paddingBottom: bottom,
                backgroundColor: theme.colors.background,
                borderColor: theme.colors.borderColor,
            }
        ]
        }>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                let iconName: keyof typeof glyphMap;
                switch (route.name) {
                    case 'HomeStack':
                        iconName = 'home';
                        break;
                    case 'ProfileStack':
                        iconName = 'dot-3';
                        break;
                    case 'Nearby':
                        iconName = 'location';
                        break;
                    case 'Explore':
                        iconName = 'compass';
                        break;
                    default:
                        iconName = 'home';
                        break;
                }

                return (
                    <TouchableOpacity
                        activeOpacity={0.6}
                        key={index}
                        onPress={onPress}
                        style={[
                            { borderTopColor: isFocused ? theme.colors.primary : "transparent" },
                            styles.tab
                        ]}
                    >
                        <EIcon
                            name={iconName}
                            color={isFocused ? theme.colors.primary : theme.colors.inActiveColor}
                            style={{
                                marginBottom: 4,
                            }} />
                        <EText
                            subTitleSemiBold
                            textColor={isFocused ? theme.colors.primary : theme.colors.inActiveColor}>
                            {label?.toString()}
                        </EText>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    tabContainer: {
        borderTopWidth: 1,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
    },
    tab: {
        paddingTop: 12,
        flex: 1,
        height: "100%",
        display: "flex",
        alignItems: "center",
        borderTopWidth: 2
    },
    activeTab: {

    }
});

export default BottomTabBar;
