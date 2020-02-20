import React, {Component} from 'react';
import {
  StyleSheet,
  AsyncStorage,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Item, Input, Form, Label, Button, Thumbnail, Text} from 'native-base';
import Api from '../../api/api';
import AuthService from '../../components/service/AuthService';

import BgImage from '../../images/wallpaper.png';
import Logo from '../../images/logo.jpg';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    };
  }
  componentDidMount() {
    AsyncStorage.clear();
  }
  containsRoles = (roles, roleName) => {
    if (roles === roleName) return true;
    else return false;
  };

  handleClick = event => {
    event.preventDefault();
    const credentials = {
      userName: this.state.email,
      password: this.state.password,
    };

    AuthService.login(credentials)
      .then(res => {
        console.log(res.status, 'ini');
        if (res.status === 200) {
          console.log(res.data);
          AsyncStorage.setItem('userInfo', res.data.jwt);
          AsyncStorage.setItem('role', res.data.role[0].roleName);
          AsyncStorage.setItem('idUser', res.data.idUser);

          console.log(res.data.role[0].roleName, 'panggil menu');
          let roles = JSON.stringify(res.role);

          console.log('role login', res.data.role[0].userName);
          if (this.containsRoles(res.data.role[0].roleName, 'user')) {
            this.props.navigation.navigate('HomeScreen');
          } else if (this.containsRoles(res.data.role[0].roleName, 'courier')) {
            this.props.navigation.navigate('Courier');
          } else if (
            this.containsRoles(res.data.role[0].roleName, 'post storage')
          ) {
            this.props.navigation.navigate('OperatorStorageScreen');
          }
        }
      })
      .catch(error => {
        console.log('error', error);
        alert('username/password failed!');
      });
  };

  render() {
    return (
      <View style={styles.containerStyle}>
        <Image style={styles.bgImageStyle} source={BgImage} />
        <View style={styles.logoStyle}>
          <Thumbnail large source={Logo} />
          <Text style={styles.textLogoStyle}>G.E.D</Text>
        </View>
        <Form style={styles.formLoginStyle}>
          <Item>
            <Input
              style={styles.inputStyle}
              value={this.state.email}
              onChangeText={email => this.setState({email})}
              placeholder="username"
            />
          </Item>
          <Item>
            <Input
              style={styles.inputStyle}
              secureTextEntry={true}
              style={styles.inputStyle}
              value={this.state.password}
              onChangeText={password => this.setState({password})}
              placeholder="password"
            />
          </Item>
        </Form>
        <Button
          onPress={this.handleClick.bind(this)}
          block
          info
          style={styles.footerBottomStyle}>
          <Text style={{fontSize: 20}}>Sign In</Text>
        </Button>
        <View style={styles.footersignUpStyle}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('RegisterForm')}>
            <Text style={styles.signUpStyle}>
              Don't have an account yet? Register
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
    fontSize: 30,
    color: 'black',
    fontStyle: 'normal',
  },
  formLoginStyle: {
    marginTop: -30,
    paddingLeft: 10,
    paddingRight: 30,
    backgroundColor: '#FFF8DC',
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 10,
  },
  inputStyle: {
    color: 'black',
    marginBottom: 6,
    fontSize: 18,
  },
  footerBottomStyle: {
    marginTop: 50,
    paddingTop: 10,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#D2691E',
  },
  footersignUpStyle: {
    marginTop: 25,
    alignItems: 'center',
  },
  signUpStyle: {
    color: 'black',
    fontSize: 14,
  },
});

export default LoginForm;
