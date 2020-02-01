import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Timer from './components/Timer';

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.paragraph}>
					  It's time to work!
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
		margin: 24,
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});
