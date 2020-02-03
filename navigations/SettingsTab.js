import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class SettingsTab extends Component {
	render() {
        console.log(this.props.navigation);

		return (
			<View style={styles.container}>
                <Text style={styles.label}>Work</Text>
                <View style={styles.buttonContainer}>
                    <Button 
                        title="<"
                        color="#FF0000"
                    />
                    <Text style={styles.paragraph}>
                        25
                    </Text>
                    <Button 
                        title=">"
                        color="#FF0000"
                    />
                </View>
                <Text style={styles.label}>Rest</Text>
                <View style={styles.buttonContainer}>
                    <Button 
                        title="<"
                        color="#FF0000"
                    />
                    <Text style={styles.paragraph}>
                        5
                    </Text>
                    <Button 
                        title=">"
                        color="#FF0000"
                    />
                </View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
        justifyContent: 'center',
		backgroundColor: '#ecf0f1',
		padding: 8,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        marginTop: 24,
        marginBottom: 24,
		fontSize: 24,
        textAlign: 'center'
    },
    paragraph: {
        fontSize: 18,
        width: 60,
        justifyContent: 'center',
        textAlign: 'center'
    }
});
