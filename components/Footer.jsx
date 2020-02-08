import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Notifications } from 'expo';

const footer = ({ navigation }) => {
    const [work, setWork] = useState(25);
    const [rest, setRest] = useState(5);
    const updateMinutes = newVal => setWork(newVal);
    const updateRest = newVal => setRest(newVal);
    const onSettingsTabOpen = () => {
        Notifications.dismissAllNotificationsAsync();
        Notifications.presentLocalNotificationAsync({
            title: 'Timer has been stopped',
            body: ''
        });
        navigation.navigate('Settings', { updateMinutes, updateRest });
    }
    const onHomeTabOpen = () => {
        Notifications.dismissAllNotificationsAsync();
        navigation.navigate('Home', { work, rest });
    };

    return (
        <View style={styles.tabBarStyle}>
            <TouchableOpacity
                style={[styles.tabStyle, styles.withBorder]}
                onPress={onHomeTabOpen}
            >
                <Text style={styles.label}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.tabStyle, styles.withBorder]}
                onPress={onSettingsTabOpen}
            >
                <Text style={styles.label}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.tabStyle}
                onPress={() => navigation.navigate('About')}
            >
                <Text style={styles.label}>About</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    tabBarStyle: {
        height: 40,
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    tabStyle: {
        backgroundColor: 'red',
        width: '30%',
        flex: 1,
        height: 40,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    withBorder: {
        borderRightWidth: 1,
        borderRightColor: 'white'
    },
    label: {
        color: 'white'
    }
});

export default footer;
