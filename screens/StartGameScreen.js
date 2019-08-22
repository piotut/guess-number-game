import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from "../components/Header";

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Start Game Screen!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',
    },
});

export default StartGameScreen;