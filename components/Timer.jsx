import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, Vibration } from 'react-native';
import { Audio } from 'expo-av';

export default class Timer extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
            intervalId: 0,
            minutes: props.workTime,
            seconds: 0,
            isActive: false,
            hasRest: true
        };
        this.restSound = new Audio.Sound();
        this.endSound = new Audio.Sound();
        this.restSound.loadAsync(require('./../assets/rest.mp3'));
        this.endSound.loadAsync(require('./../assets/finish.mp3'));
    }

    componentDidUpdate(oldProps) {
        const { workTime, restTime } = this.props;
        const { intervalId } = this.state;

        if (oldProps.workTime !== workTime || oldProps.restTime !== restTime) {
            clearInterval(intervalId);
            this.setState({
                minutes: workTime,
                seconds: 0,
                isActive: false,
                hasRest: true
            });
        }
    }

    playSound = () => this.restSound.playAsync();

    onStart = () => {
        const intervalId = setInterval(() => {
            const { minutes, seconds, hasRest, intervalId } = this.state;
            const { restTime } = this.props;

            if (!seconds && !minutes) {
                if (hasRest) {
                    this.restSound.playAsync();
                } else {
                    clearInterval(intervalId);
                    this.endSound.playAsync();
                }

                Vibration.vibrate(1000);
                this.setState({
                    minutes: hasRest ? restTime : 0,
                    seconds: 0,
                    hasRest: false
                });

                return;
            }

            this.setState(
                seconds
                    ? { seconds: seconds - 1 }
                    : {
                        minutes: minutes - 1,
                        seconds: 59
                    }
            );
        }, 1000);
  
        this.setState({
            intervalId,
            isActive: true
        });
    }
  
    onReset = () => {
        const { intervalId } = this.state;
        const { workTime } = this.props;
    
        clearInterval(intervalId);
        this.setState({
            minutes: workTime,
            seconds: 0,
            isActive: false
        });
    }

    padString = val => val.toString().length > 1 ? val : `0${val}` 
  
    render() {
        const { minutes, seconds, isActive } = this.state;
        const timerValue = `${this.padString(minutes)}:${this.padString(seconds)}`;

        return (
            <View style={styles.timerWrapper}>
                <View style={styles.container}>
                    <Text style={styles.paragraph}>
                        { timerValue }
                    </Text>
                    <Image
                        style={styles.logo}
                        source={require('./../assets/tomato.png')}
                    />
                </View>
                <View style={styles.buttonsContainer}>
                    <Button
                        onPress={() => this.onStart()}
                        title="Start"
                        color="#FF0000"
                        accessibilityLabel="Start countdown"
                        disabled={isActive}
                    />
                    <Button
                        onPress={() => this.onReset()}
                        title="Reset"
                        color="#FF0000"
                        accessibilityLabel="Reset timer"
                    />
                </View>
            </View>
        );
    }
}
  
const styles = StyleSheet.create({
    timerWrapper: {
        flex: 1
    },
    container: {
        flex: 2,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        flexDirection: 'row'
    },
    paragraph: {
        position: 'absolute',
        fontSize: 70,
        left: '26%',
        zIndex: 100,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ffffff'
    },
    logo: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    buttonsContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
    }
});
  