import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Timer from './../components/Timer';

const homePage = ({ navigation }) => {
	const work = navigation.getParam('work', 25);
	const rest = navigation.getParam('rest', 5);

	return (
		<View style={styles.container}>
			<Text style={styles.paragraph}>
				Pomodoro {work} x {rest} timer
			</Text>
			<Timer workTime={work} restTime={rest} />
		</View>
	);
};

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

export default homePage;
