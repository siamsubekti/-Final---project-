import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default class Home extends React.Component {
	static navigationOptions = {
		title: "Home Screen"
	}

	render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <Button onPress={() => this.props.navigation.navigate('chat', { name: 'Daengweb.id' })}
                        title="Navigate ke ChatScreen" /> 
                </View> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})