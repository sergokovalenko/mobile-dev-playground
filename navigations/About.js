import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AboutTab = () => {
	return (
		<View style={styles.container}>
            <View style={styles.container}>
            <View style={styles.row}>    
                    <Text style={[styles.paragraph, styles.right]}>
                        App:
                    </Text>
                    <Text style={[styles.paragraph, styles.left]}>
                        Pomodoro Timer
                    </Text>
                </View>
                <View style={styles.row}>    
                    <Text style={[styles.paragraph, styles.right]}>
                        Author:
                    </Text>
                    <Text style={[styles.paragraph, styles.left]}>
                        Sergei Kovalenko
                    </Text>
                </View>
                <View style={styles.row}>    
                    <Text style={[styles.paragraph, styles.right]}>
                        Email:
                    </Text>
                    <Text style={[styles.paragraph, styles.left]}>
                        sergokovalenko.dev@gmail.com
                    </Text>
                </View>
                <View style={styles.row}>    
                    <Text style={[styles.paragraph, styles.right]}>
                        GitHub:
                    </Text>
                    <Text style={[styles.paragraph, styles.left]}>
                        sergokovalenko
                    </Text>
                </View>
            </View>
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
		fontSize: 18,
        textAlign: 'center'
    },
    row: {
        flexDirection: 'row'
    },
    right: {
        textAlign: 'right',
        width: 65
    },
    left: {
        textAlign: 'left',
        marginLeft: 10
    }
});

export default AboutTab;
