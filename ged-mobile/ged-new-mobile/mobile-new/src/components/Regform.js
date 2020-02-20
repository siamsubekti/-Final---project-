import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import {Item, Input, Form, Button, Thumbnail, Text} from 'native-base';

import Bgimage from '../images/wallpaper.png';
import Logo from '../images/logo.jpg';
import Icon from 'react-native-vector-icons/Ionicons';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.containerStyle}>
        <Image style={styles.bgImageStyle} source={Bgimage} />
        <View style={styles.logoStyle}>
          <Thumbnail square large source={Logo} />
          <Text style={styles.textLogoStyle}>G.E.D</Text>
        </View>
        <Form style={styles.formRegister}>
          <Item style={styles.itemStyle}>
            <Icon name="md-person" size={26} color={'white'} />
            <Input style={styles.inputStyle} />
          </Item>
          <Item style={styles.itemStyle}>
            <Icon name="md-lock" size={26} color={'white'} />
            <Input style={styles.inputStyle} secureTextEntry={true} />
          </Item>
          <Item style={styles.itemStyle}>
            <Icon name="md-mail" size={26} color={'white'} />
            <Input style={styles.inputStyle} />
          </Item>
        </Form>
        <Button block info style={styles.footerBottomStyle}>
          <Text>Register</Text>
        </Button>
        <View style={styles.footerSignUpStyle}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('LoginForm')}>
            <Text style={styles.signUpStyle}>
              Already have an account? SIGN IN
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
    backgroundColor: 'orange',
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

export default RegisterForm;
