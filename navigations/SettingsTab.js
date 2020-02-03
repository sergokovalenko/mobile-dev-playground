import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class SettingsTab extends Component {
    constructor(props) {
        super(props);
        const { work, rest } = this.props.navigation.state.params;

        this.state = {
            work,
            rest
        };
    }

    changeWorkTime = val => {
        const { work, rest } = this.state;
        const newState = {
            work: work + val === 0 ? work : work + val,
            rest
        };

        this.props.navigation.setParams(newState);
        this.setState(newState);
    };

    changeRestTime = val => {
        const { work, rest } = this.state;
        const newState = {
            rest: rest + val === 0 ? rest : rest + val,
            work
        };

        this.props.navigation.actions.setParams(newState);
        this.setState(newState);
    };

	render() {
        const { work, rest } = this.state;

		return (
			<View style={styles.container}>
                <Text style={styles.label}>Work</Text>
                <View style={styles.buttonContainer}>
                    <Button 
                        title="<"
                        color="#FF0000"
                        onPress={() => this.changeWorkTime(-1)}
                    />
                    <Text style={styles.paragraph}>
                        {work}
                    </Text>
                    <Button 
                        title=">"
                        color="#FF0000"
                        onPress={() => this.changeWorkTime(1)}
                    />
                </View>
                <Text style={styles.label}>Rest</Text>
                <View style={styles.buttonContainer}>
                    <Button 
                        title="<"
                        color="#FF0000"
                        onPress={() => this.changeRestTime(-1)}
                    />
                    <Text style={styles.paragraph}>
                        {rest}
                    </Text>
                    <Button 
                        title=">"
                        color="#FF0000"
                        onPress={() => this.changeRestTime(1)}
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
