import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Alert} from 'react-native';
import {Item, Input, Form, Label, Button, Thumbnail, Text} from 'native-base';
import AuthService from "./service/AuthService";

import BgImage from '../images/wallpaper.png';
import Logo from '../images/logo.jpg';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  static navigationOptions = {
    header: null,
  };

  onLogin = () => {
    // this.props.navigation.navigate('RegisterForm');
    this.props.navigation.navigate('HomeScreen');
  };

  handleClick() {
    const {email, password} = this.state;
    if (email == null) {
      Alert.alert('Notification', 'Username Required !');
      return;
    }
    if (password == null) {
      Alert.alert('Notification', 'Password Required !');
      return;
    }

    if (email == 'operator' && password == 'operator') {
      // Alert.alert(
      //   'Notifiaction',
      //   'Login Success !',
      // );

      this.onLogin();

      return;
    } else {
      Alert.alert('Notification', 'Login Failed !');

      return;
    }
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <Image style={styles.bgImageStyle} source={BgImage} />
        <View style={styles.logoStyle}>
          <Thumbnail square large source={Logo} />
          <Text style={styles.textLogoStyle}>G.E.D</Text>
        </View>
        <Form style={styles.formLoginStyle}>
          <Item floatingLabel>
            <Label>
              <Text style={styles.inputStyle}>Username</Text>
            </Label>
            <Input
              style={styles.inputStyle}
              value={this.state.email}
              onChangeText={email => this.setState({email})}
            />
          </Item>
          <Item floatingLabel>
            <Label>
              <Text style={styles.inputStyle}>Password</Text>
            </Label>
            <Input
              style={styles.inputStyle}
              secureTextEntry={true}
              style={styles.inputStyle}
              value={this.state.password}
              onChangeText={password => this.setState({password})}
            />
          </Item>
        </Form>
        <Button
          onPress={this.handleClick.bind(this)}
          block
          info
          style={styles.footerBottomStyle}>
           {/*<Button onPress={()=>this.props.navigation.navigate('RegisterForm')} block info style={styles.footerBottomStyle}>*/}
          <Text>Sign In</Text>
        </Button>
        <View style={styles.footersignUpStyle}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('RegisterForm')}>
            <Text style={styles.signUpStyle}>
              don't have an account yet? Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  bgImageStyle: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  logoStyle: {
    marginTop: 70,
    marginBottom: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogoStyle: {
    fontSize: 15,
    color: 'white',
  },
  formLoginStyle: {
    marginTop: -30,
    paddingLeft: 10,
    paddingRight: 30,
  },
  inputStyle: {
    color: 'white',
    marginBottom: 6,
    fontSize: 14,
  },
  footerBottomStyle: {
    marginTop: 26,
    paddingTop: 10,
    marginLeft: 16,
    marginRight: 16,
      backgroundColor:'orange',
  },
  footersignUpStyle: {
    marginTop: 25,
    alignItems: 'center',
  },
  signUpStyle: {
    color: 'white',
    fontSize: 12,
  },
});

export default LoginForm;
