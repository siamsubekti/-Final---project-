import React, {Component} from 'react';
import {
  Container,
  Content,
  Left,
  Icon,
  Text,
  List,
  ListItem,
} from 'native-base';
import styles from './style';
const datas = [
  {
    name: 'Anatomy',
    route: 'Anatomy',
    icon: 'phone-portrait',
    bg: '#C5F442',
  },
  {
    name: 'Home',
    route: 'HomeScreen',
    icon: 'home',
    bg: '#477EEA',
  },
  {
    name: 'Users',
    route: 'UsersScreen',
    icon: 'paper',
    bg: '#DA4437',
  },
];
export default class CustomHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
    };
  }
  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{flex: 1, backgroundColor: '#fff', top: -1}}>
          {datas.map((data, index) => {
            return (
              <List key={index}>
                <ListItem
                  noBorder
                  onPress={() => this.props.navigation.navigate(data.route)}>
                  <Left>
                    <Icon
                      active
                      name={data.icon}
                      style={{color: '#777', fontSize: 26, width: 30}}
                    />
                    <Text style={styles.text}>{data.name}</Text>
                  </Left>
                </ListItem>
              </List>
            );
          })}
        </Content>
      </Container>
    );
  }
}
