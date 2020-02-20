import React, {Component} from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  FlatList,
  RefreshControl,

} from 'react-native';
import {findAllUsers} from '../../actions/user.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

function Item({title}) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

class UsersScreen extends Component {
  componentDidMount() {
    this.onRefresh();
  }

  onRefresh = () => {
    this.props.findAllUsers();
  };
  render() {
    const {loading, users} = this.props;
    // console.log('loading, user', users);

    return (

        <FlatList
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={this.onRefresh} />
          }
          data={users}
          renderItem={({item}) => (
            <Item
              title={`ID\t\t\t\t\t\t:\t\t${item.id}\nName\t\t\t:\t\t${
                item.first_name
              }\nEmail\t\t\t:\t\t${item.email}\nAvatar\t\t:\t\t${item.avatar}`}
            />
          )}
          keyExtractor={item => '' + item.id}
        />

    );
  }
}
function mapStateToProps(state) {
  return {
    loading: state.findAllUsers.loading,
    users: state.findAllUsers.data,
    error: state.findAllUsers.error,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({findAllUsers}, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(UsersScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: '#ffff',
    backgroundColor: '#219',
    padding: 18,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
