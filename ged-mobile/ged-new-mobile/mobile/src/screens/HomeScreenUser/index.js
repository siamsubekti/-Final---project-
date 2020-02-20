import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import FooterTabsIconTextExample from '../../footer/footer';
import ContainerTop from '../../components/shared/ContainerTop';
import getTheme from '../../../native-base-theme/components';
import platform from '../../../native-base-theme/variables/platform';
import {StyleProvider} from 'native-base';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          title: 'Send',
          image: 'https://img.icons8.com/color/48/000000/filled-sent.png',
        },
        {
          id: 2,
          title: 'Received',
          image: 'https://img.icons8.com/nolan/64/qr-code.png',
        },
        {
          id: 3,
          title: 'Tracking',
          image: 'https://img.icons8.com/dusk/64/000000/worldwide-location.png',
        },
        {
          id: 4,
          title: 'Transaction',
          image: 'https://img.icons8.com/dusk/64/000000/refund-2.png',
        },
      ],
    };
  }

  clickEventListener(item) {
    // Alert.alert(item.title)

    if (item.title === 'Send') {
      this.props.navigation.navigate('UsersScreen');
    } else if (item.title === 'Received') {
      this.props.navigation.navigate('ScanScreen');
    }
  }

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <ContainerTop>
          <View style={styles.container}>
            <FlatList
              style={styles.list}
              contentContainerStyle={styles.listContainer}
              data={this.state.data}
              horizontal={false}
              numColumns={2}
              keyExtractor={item => {
                return item.id;
              }}
              renderItem={({item}) => {
                return (
                  <View>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => {
                        this.clickEventListener(item);
                      }}>
                      <Image
                        style={styles.cardImage}
                        source={{uri: item.image}}
                      />
                    </TouchableOpacity>

                    <View style={styles.cardHeader}>
                      <View
                        // eslint-disable-next-line react-native/no-inline-styles
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text style={styles.title}>{item.title}</Text>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
            <View style={styles.containerImage}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('UserChatScreen')
                }>
                <Image
                  source={{
                    uri:
                      'https://img.icons8.com/flat_round/64/000000/filled-chat.png',
                  }}
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{width: 50, height: 50}}
                />

                <Text>chat with me</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ContainerTop>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: '#f6f6f6',
  },
  containerImage: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: '#f6f6f6',
  },
  listContainer: {
    alignItems: 'center',
  },
  /******** card **************/
  card: {
    shadowColor: '#474747',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 20,
    marginHorizontal: 40,
    backgroundColor: '#e2e2e2',
    //flexBasis: '42%',
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 50,
    width: 50,
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: '#696969',
  },
});
