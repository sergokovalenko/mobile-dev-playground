import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Timer from './../components/Timer';

export default class App extends Component {
	render() {
		const work = this.props.navigation.getParam('minutes', 25);
		const rest = this.props.navigation.getParam('rest', 5);

		return (
			<View style={styles.container}>
				<Text style={styles.paragraph}>
					Pomodoro {work} x {rest} timer
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