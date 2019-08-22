import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';

import Colors from '../constants/colors';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start Game Screen!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a number!</Text>
                <Input style={styles.input} keyboardType="numeric" maxLength={3}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Reset" onPress={()=>{}} color={Colors.accent}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Confirm" onPress={()=>{}} color={Colors.primary}/>
                    </View>
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
    },
    button: {
        width: '40%',
    },
    input: {
        width: 50,
        textAlign: 'center',
    }
});

export default StartGameScreen;