import React, {Component} from 'react';
 import {
Container,
  Header,
Content,
   Card,
  CardItem,
  Text,
   Icon,
   Right,
 } from 'native-base';
 import Footer from '../../footer/footer';

 
 export default class UserExample extends Component {
render() {
     return (
       <Container>
         <Header />
         <Content>
           <Card>
             <CardItem>
               <Icon active name="paper" />
               <Text>SEND</Text>
               <Right>
                 <Icon
                   name="arrow-forward"
                   onPress={() =>this.props.navigation.navigate('LoginForm')}/>
               </Right>
             </CardItem>
             <CardItem>
               <Icon active name="paper-plane" />
               <Text>RECEIVED</Text>
               <Right>
           <Icon name="arrow-forward" onPress={()=>this.props.navigation.navigate('Fetch')}/>
               </Right>
   </CardItem>
             <CardItem>
               <Icon active name="navigate" />
               <Text>Traking</Text>
               <Right>
                 <Icon name="arrow-forward" onPress={()=>this.props.navigation.navigate('MyComponent')}/>
               </Right>
             </CardItem>
               <CardItem>
                   <Icon active name="ios-qr-scanner" />
                   <Text>SCAN QR</Text>
                   <Right>
                       <Icon name="arrow-forward" onPress={()=>this.props.navigation.navigate('MyComponent')}/>
                   </Right>
               </CardItem>
           </Card>
         </Content>
    <Footer />
      </Container>
     );
   }
}
