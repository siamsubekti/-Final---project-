import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  ListView,
  TouchableOpacity,
  View,
  Image,
  Text,
  TouchableHighlight,
} from 'react-native';
import ContainerTop from '../../components/shared/ContainerTop';
import Sidebar from '../../components/shared/Sidebar';
import {Container, Content, Drawer, StyleProvider} from 'native-base';

export default class OperatorStorageScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.header}>OPERATOR STORAGE </Text>
        </View>

        <Image
          style={styles.icon}
          source={require('../../assets/qr-code.png')}
        />
        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.props.navigation.navigate('ScanScreen')}>
          <Text style={styles.buttonText}>Scan Barcode</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.props.navigation.navigate('StorageChat')}>
          <Text style={styles.buttonText}>Chat</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFDEAD',
    alignItems: 'center',
    paddingTop: 10,
  },
  top: {
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: 'black',
    fontSize: 28,
    borderColor: 'black',
    borderWidth: 2,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: 'rgba(255,255,255, .1)',
  },
  icon: {
    width: 200,
    height: 200,
    marginBottom: 50,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 22,
    color: '#5F6D7A',
  },
  description: {
    marginTop: 20,
    textAlign: 'center',
    color: '#A9A9A9',
    fontSize: 16,
    margin: 40,
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: 'orange',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});
