// import React, { Component } from 'react';
// import { Container, Content, Text, Body } from 'native-base';
// import { CustomHeader } from '../../components/CustomHeader';
// import styles from './style.js';

// export default class DataScreen extends Component {

//   constructor(props) {
//     super(props);

//     const { navigation } = this.props;
//     this.state = {
//       id: navigation.getParam('id') || null,
//     };
//   }

//   render() {
//     const { id } = this.state;

//     return (
//       <Container>
//         <Body navigation={this.props.navigation} title="Data" />
//         <Content padder contentContainerStyle={styles.content}>
//           <Text>This is transaction {id} screen.</Text>
//         </Content>
//       </Container>
//     );
//   }
// }
