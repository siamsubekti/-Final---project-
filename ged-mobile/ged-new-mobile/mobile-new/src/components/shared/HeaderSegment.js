import React from 'react';
import {
  Button,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Row,
  Col,
  StyleSheet,
} from 'native-base';
import {withNavigation} from 'react-navigation';
import {connect} from 'react-redux';
import {logout} from '../../actions/user';

class HeaderSegment extends React.Component {
  openDrawer = () => {
    this.props.onOpenDrawer();
  };

  render() {
    return (
      <Header style={{backgroundColor: 'transparent'}}>
        <Left>
          <Row>
            <Col>
              <Button transparent onPress={this.openDrawer}>
                <Icon style={{color: '#F69314'}} name="menu" />
              </Button>
            </Col>
            <Col />
          </Row>
        </Left>

        <Right>
          {/*<Button*/}
          {/*    transparent*/}
          {/*    onPress={() => {*/}
          {/*        this.props.navigation.navigate('Login')*/}
          {/*    }}*/}
          {/*>*/}
          {/*    <Icon name="arrow-round-back"/>*/}
          {/*</Button>*/}
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              textAlign: 'center',
              color: '#F69314',
              font: 13,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            I am. Operator
          </Text>
        </Right>
      </Header>
    );
  }
}

const mapStateToProps = state => {
  return {userActive: state.userActive};
};

const mapDispatchToProps = {
  logout: logout,
};

export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(HeaderSegment),
);
