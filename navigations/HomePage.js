import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Timer from './../components/Timer';

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.paragraph}>
					Pomodoro 25 x 5 timer
				</Text>
				<Timer />
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
	paragraph: {
		marginTop: 24,
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});