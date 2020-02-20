import React, {Component} from 'react';
import {
    TouchableOpacity,
    View,
    ActivityIndicator,
    Text,
    Alert,
} from 'react-native';

export default class ListUser extends React.Component {
    state = {
        jsonData: '',
    };
    componentDidMount() {
        fetch('https://reqres.in/api/users', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(json => {
                this.setState({
                    jsonData: json.body,
                });
            })
            .catch(error => {
                console.error(error);
            });
    }
    render() {
        return (
            <View style={{ paddingTop: 30 }}>
                <Text>{this.state.jsonData}</Text>
                {/*<Footer/>*/}
            </View>

        );
    }
}
