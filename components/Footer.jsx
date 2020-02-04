import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

export default ({ navigation }) => {
    const [minutes, setMinutes] = useState(25);
    const [rest, setRest] = useState(5);
    const updateMinutes = newVal => setMinutes(newVal);
    const updateRest = newVal => setRest(newVal);

    return (
        <View style={styles.tabBarStyle}>
            <TouchableOpacity
                style={styles.tabStyle}
                onPress={() => navigation.navigate('Home', { minutes, rest })}
            />
            <TouchableOpacity
                style={styles.tabStyle}
                onPress={() => navigation.navigate('Settings', { updateMinutes, updateRest })}
            />
        </View>
    );
};

const styles = {
    tabStyle: {
        color: 'red'
    }
};
