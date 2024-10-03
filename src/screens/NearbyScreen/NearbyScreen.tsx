import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NearbyScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>Nearby Screen</Text>
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

export default NearbyScreen;
