import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class Timer extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
            intervalId: 0,
            minutes: 0,
            seconds: 10,
            isActive: false
        };
    }

    onStart() {
        const intervalId = setInterval(() => {
            const { minutes, seconds } = this.state;

            if (!seconds && !minutes) {
                this.setState({
                    minutes: 0,
                    seconds: 0,
                    isActive: false
                });
                return;
            }

            if (!seconds) {
                this.setState({
                    minutes: minutes - 1,
                    seconds: 59
                })
            } else {
                this.setState({
                    seconds: seconds - 1
                });
            }
        }, 1000);
  
        this.setState({
            intervalId,
            isActive: true
        });
    }
  
    onReset() {
        const { intervalId } = this.state;
    
        clearInterval(intervalId);
        this.setState({
            minutes: 25,
            seconds: 0,
            isActive: false
        });
    }

    padString = val => val.toString().length > 1 ? val : `0${val}` 
  
    render() {
        const { minutes, seconds, isActive } = this.state;

        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text style={styles.paragraph}>
                        {this.padString(minutes)}:{this.padString(seconds)}
                    </Text>
                    <Image
                        style={styles.logo}
                        source={require('./../assets/tomato.png')}
                    />
                </View>
                <View style={styles.buttonsContainer}>
                    <Button
                        title="Start"
                        color="#FF0000"
                        accessibilityLabel="Start countdown"
                        disabled={isActive}
                        onPress={() => this.onStart()}
                    />
                    <Button
                        title="Reset"
                        color="#FF0000"
                        accessibilityLabel="Reset timer"
                        onPress={() => this.onReset()}
                    />
                </View>
            </View>
        );
    }
}
  
const styles = StyleSheet.create({
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
  