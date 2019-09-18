import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Button,
    Image,
    Dimensions,
} from 'react-native';

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <Image
                source={require('../assets/success.png')}
                style={styles.image}
                resizeMode="contain"
            />
            <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
            <BodyText>Number was: {props.userNumber}</BodyText>
            <MainButton onPress={props.onRestart}>New Game</MainButton>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
    }
});

export default GameOverScreen;