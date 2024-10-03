import EText from 'UIComponents/EText';
import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProfileScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <EText>Profile</EText>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ProfileScreen;
