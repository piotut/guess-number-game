import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

import Card from '../components/Card';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start Game Screen!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a number!</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button title="Reset" onPress={()=>{}} />
                    <Button title="Confirm" onPress={()=>{}} />
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    }
});

export default StartGameScreen;