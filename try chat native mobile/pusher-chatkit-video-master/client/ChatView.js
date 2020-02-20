import React, { Component } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  View,
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';

export default class ChatView extends Component {
  state = {
    messages: [],
    currentUser: null,
    roomID: '8ebb4bbe-8835-4b3e-b3cc-dffe32b99eb3',
  };

  onSendMessage = e => {
    this.props.onSendMessage(e.nativeEvent.text);
    this.refs.input.clear();
  };

  componentDidMount() {
    const chatManager = new ChatManager({
      instanceLocator: 'v1:us1:b3332cc3-a6c4-4ad8-a12f-7076b2d662c9',
      userId: this.props.userID,
      tokenProvider: new TokenProvider({
        url: 'http://localhost:5000/authenticate',
      }),
    });

    chatManager
      .connect()
      .then(currentUser => {
        this.setState({ currentUser });

        currentUser.subscribeToRoom({
          roomId: this.state.roomID,
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
    const { id, senderId, text, createdAt } = data;
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
      this.state.currentUser
        .sendMessage({
          text: message.text,
          roomId: this.state.roomID,
        })
        .then(() => {})
        .catch(err => {
          console.log(err);
        });
    });
  };

  render() {
    let toDisplay = null;

    if (this.state.currentUser === null) {
      toDisplay = (
        <View>
          <ActivityIndicator size="large" />
        </View>
      );
    } else {
      toDisplay = (
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: this.state.currentUser.id,
          }}
        />
      );
    }

    return toDisplay;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
});
