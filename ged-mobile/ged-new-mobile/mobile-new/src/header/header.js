import React, {Component} from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
} from 'native-base';
export default class Index extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button onPress={() => this.props.navigation()} transparent>
              {this.props.icon}
            </Button>
          </Left>
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
        </Header>
      </Container>
    );
  }
}
