import { FlatList, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import EText from 'UIComponents/EText'
import ETextInput from 'UIComponents/EInput'
import { EColors } from 'theme/Colors'
import spaces from 'theme/Spaces'
import EIcon from 'UIComponents/Icon'
import { useAppTheme } from 'theme/themeContext'
import { eventTypeData } from 'data/eventTypeData'

const HomeScreen = () => {
    const theme = useAppTheme()
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
            <View style={styles.header}>
                <EText h4>Hello, Tanmoy</EText>
                <EText h4 textColor={EColors.EColor500} style={{
                    marginBottom: spaces.xxxl
                }}>There are 32 events around your location.</EText>
                <ETextInput
                    placeholder="Enter text here"
                    keyboardType="default"
                >
                    <ETextInput.Leading >
                        <EIcon name='search' />
                    </ETextInput.Leading>
                    <ETextInput.Trailing >
                        <View style={[
                            { backgroundColor: theme.colors.background },
                            styles.filter
                        ]}>
                            <EIcon name='filter' size={18} />
                        </View>
                    </ETextInput.Trailing>
                </ETextInput>
            </View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 32,
                    paddingHorizontal: spaces.l
                }}
                data={eventTypeData}
                renderItem={({ index, item }) => {
                    return <View style={[
                        {
                            backgroundColor: theme.colors.background,
                            borderColor: theme.colors.borderColor,
                            marginRight: eventTypeData.length == (index + 1) ? 0 : spaces.l
                        },
                        styles.card
                    ]} key={index}>
                        <EIcon name={item.icon} style={{ marginRight: spaces.m }} size={24} />
                        <EText captionSemiBold>{item.name}</EText>
                    </View>
                }}
            />
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: spaces.l
    },
    filter: {
        borderRadius: 100,
        height: 30,
        width: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    card: {
        paddingHorizontal: spaces.m,
        paddingVertical: spaces.m,
        borderWidth: 1,
        borderRadius: spaces.m,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    }
})