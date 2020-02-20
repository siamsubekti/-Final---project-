import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import {Item, Input, Form, Button, Thumbnail, Text, Toast} from 'native-base';

import Bgimage from '../../images/wallpaper.png';
import Logo from '../../images/logo.jpg';
import Icon from 'react-native-vector-icons/Ionicons';
import {doCreateUserApi} from '../../api/user';
import {authUser} from '../../actions/user/index';
import {connect} from 'react-redux';

class RegisterForm extends Component {
  // constructor(props) {
  //   super(props);
  // }
  // static navigationOptions = {
  //   header: null
  // }
  state = {
    userName: '',
    password: '',
    email: '',
    loading: false,
  };

  doRegister = async () => {
    //  await this.setState({loading : true});

    await doCreateUserApi(
      this.state.userName,
      this.state.password,
      this.state.email,
    )
      .then(res => {
        if (res.status === 200) {
          console.log('this is response ' + res.data);
          this.props.authUser({
            userName: res.data.userName,
            password: res.data.password,
            email: res.data.email,
          });

          this.setState({loading: false});
          this.props.navigation.navigate('HomeScreen');
        }
      })
      .catch(err => {
        console.log('error', err);
        Toast.show({
          text: 'Failed to Sign Up. Please checking your input',
        });
      })
      .finally(() => {
        // this.props.navigation.navigate('Register');
        this.setState({loading: false});
      });
  };

  render() {
    return (
      <View style={styles.containerStyle}>
        <Image style={styles.bgImageStyle} source={Bgimage} />
        <View style={styles.logoStyle}>
          <Thumbnail large source={Logo} />
          <Text style={styles.textLogoStyle}>G.E.D</Text>
        </View>
        <Form style={styles.formRegister}>
          <Item style={styles.itemStyle}>
            <Icon name="md-person" size={26} color={'black'} />
            <Input
              style={styles.inputStyle}
              placeholder="  Enter you're username"
              onChangeText={userName => this.setState({userName: userName})}
            />
          </Item>
          <Item style={styles.itemStyle}>
            <Icon name="md-lock" size={26} color={'black'} />
            <Input
              style={styles.inputStyle}
              secureTextEntry={true}
              placeholder="  Enter you're password"
              o
              nChangeText={password => this.setState({password: password})}
            />
          </Item>
          <Item style={styles.itemStyle}>
            <Icon name="md-mail" size={26} color={'black'} />
            <Input
              style={styles.inputStyle}
              placeholder="  Enter you're email"
              onChangeText={email => this.setState({email: email})}
            />
          </Item>
        </Form>
        <Button
          block
          info
          style={styles.footerBottomStyle}
          onPress={() => this.doRegister()}>
          <Text style={{fontSize: 20}}>Register</Text>
        </Button>
        <View style={styles.footerSignUpStyle}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('LoginForm')}>
            <Text style={styles.signUpStyle}>
              Already have an account? BACK
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
  },
  inputStyle: {
    color: 'black',
    marginBottom: 6,
    fontSize: 14,
  },
  footerBottomStyle: {
    marginTop: 26,
    paddingTop: 10,
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: '#D2691E',
  },
  footersignUpStyle: {
    marginTop: 25,
    alignItems: 'center',
  },
  signUpStyle: {
    color: 'black',
    fontSize: 16,
    marginLeft: 20,
  },
  formRegister: {
    marginTop: -30,
    paddingLeft: 10,
    paddingRight: 30,
    backgroundColor: '#FFF8DC',
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 10,
  },
});

const mapDispatchToProps = {
  authUser: authUser,
};

export default connect(
  null,
  mapDispatchToProps,
)(RegisterForm);
