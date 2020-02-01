import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class Timer extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
            intervalId: 0,
            minutes: 25,
            seconds: 10
        };
    }
  
    render() {
        const { minutes, seconds } = this.state;

        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text style={styles.paragraph}>
                        {minutes}:{seconds}
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
                    />
                    <Button
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
  