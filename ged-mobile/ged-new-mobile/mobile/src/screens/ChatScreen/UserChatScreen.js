import React from 'react';
import {View, StyleSheet} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import {ChatManager, TokenProvider} from '@pusher/chatkit-client';
import ContainerBack from '../../components/shared/ContainerBack';
import HeaderSegment from '../../components/shared/HeaderSegment';
import ContainerTop from '../../components/shared/ContainerTop';
import {Header, Left, Right, Button, Icon} from 'native-base';

const CHATKIT_TOKEN_PROVIDER_ENDPOINT =
  'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/fb7eecf2-33fd-40e0-aa8c-cfffd37c6218/token';
const CHATKIT_INSTANCE_LOCATOR = 'v1:us1:fb7eecf2-33fd-40e0-aa8c-cfffd37c6218';
const CHATKIT_ROOM_ID = '5aaa1fe6-ade6-4bf3-9aee-ebd81508c2da';
const CHATKIT_USER_NAME = 'User';

export default class UserChatScreen extends React.Component {
  state = {
    messages: [],
  };

  componentDidMount() {
    const tokenProvider = new TokenProvider({
      url: CHATKIT_TOKEN_PROVIDER_ENDPOINT,
    });

    const chatManager = new ChatManager({
      instanceLocator: CHATKIT_INSTANCE_LOCATOR,
      userId: CHATKIT_USER_NAME,
      tokenProvider: tokenProvider,
    });

    chatManager
      .connect()
      .then(currentUser => {
        this.currentUser = currentUser;
        this.currentUser.subscribeToRoom({
          roomId: CHATKIT_ROOM_ID,
          hooks: {
            onMessage: this.onReceive,
          },
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onReceive = data => {
    const {id, senderId, text, createdAt} = data;
    const incomingMessage = {
      _id: id,
      text: text,
      createdAt: new Date(createdAt),
      user: {
        _id: senderId,
        name: senderId,
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmXGGuS_PrRhQt73sGzdZvnkQrPXvtA-9cjcPxJLhLo8rW-sVA',
      },
    };

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, incomingMessage),
    }));
  };

  onSend = (messages = []) => {
    messages.forEach(message => {
      this.currentUser
        .sendMessage({
          text: message.text,
          roomId: CHATKIT_ROOM_ID,
        })
        .then(() => {})
        .catch(err => {
          console.log(err);
        });
    });
  };

  render() {
    return (
      // <View style={styles.container}>
      <>
        <Header style={{backgroundColor: '#F69314'}}>
          <Left>
            <Button
              transparent
              onPress={() => {
                this.props.navigation.navigate('HomeScreen');
              }}>
              <Icon name="arrow-round-back" />
            </Button>
          </Left>
          <Right />
        </Header>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: CHATKIT_USER_NAME,
          }}
        />
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});