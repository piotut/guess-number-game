import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";

import Colors from '../constants/colors';
import DefaultStyles from '../constants/default-styles';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState('');
    const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4);

    const numberInputHandler = (value) => {
        setEnteredValue(value.replace(/[^0-9]/g, ''));
    };

    useEffect(() => {
        const updateLayout = () => {
            setButtonWidth(Dimensions.get('window').width / 4);
        };
        Dimensions.addEventListener('change', updateLayout);

        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        };
    });

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0) {
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 and 999.',
                [{text: 'Okay', style: 'destructive', onPressHandler: resetInputHandler}],
            );
            return;
        }
        setConfirmed(true);
        setEnteredValue('');
        setSelectedNumber(parseInt(enteredValue));
        Keyboard.dismiss();
    };

    let confirmedOutput;
    if (confirmed) {
        confirmedOutput =
            <Card style={styles.summaryContainer}>
                <Text>You selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <MainButton onPress={() => props.onStartGame(selectedNumber)}>Start Game</MainButton>
            </Card>
    }

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
                <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
                    <View style={styles.screen}>
                        <Text style={{...DefaultStyles.titleText, ...styles.title}}>Start Game Screen!</Text>
                        <Card style={styles.inputContainer}>
                            <BodyText>Select a number!</BodyText>
                            <Input
                                style={styles.input}
                                keyboardType="numeric"
                                maxLength={3}
                                value={enteredValue}
                                onChangeText={numberInputHandler}
                            />
                            <View style={styles.buttonContainer}>
                                <View style={{width: buttonWidth}}>
                                    <Button title="Reset" onPress={resetInputHandler} color={Colors.accent}/>
                                </View>
                                <View style={{width: buttonWidth}}>
                                    <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary}/>
                                </View>
                            </View>
                        </Card>
                        {confirmedOutput}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
        minWidth: 300,
        maxWidth: '95%',
        alignItems: 'center',
    },
    title: {
        marginVertical: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    button: {
        width: Dimensions.get('window').width / 4,
    },
    input: {
        width: 50,
        textAlign: 'center',
    },
    summaryContainer: {
        margin: 20,
        alignItems: 'center',
    }
});

export default StartGameScreen;