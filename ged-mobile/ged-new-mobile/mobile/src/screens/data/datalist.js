import React, { Component } from 'react';
import { TouchableOpacity, Text, FlatList, RefreshControl } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { findAllFile } from '../../actions/data';


function Item({ navigation, list }) {
  return (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('DataScreen', { id: list.id })}>
      <Text style={styles.title}>{list.name + ' ' + list.year}</Text>
    </TouchableOpacity>
  );
}

class DataListScreen extends Component {

  componentDidMount() {
    this.reload();
  }

  reload = () => {
    this.props.findAllFile();
  };

  render() {
    const { loading, navigation, file } = this.props;

    return (
      <FlatList refreshControl={
        <RefreshControl refreshing={loading} />
      }
        list={file}
        renderItem={({ item }) => <Item list={item} navigation={navigation} />}
        keyExtractor={item => '' + item.id}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.findAllFile.loading,
    file: state.findAllFile.data,
    error: state.findAllFile.error
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ findAllFile }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(DataListScreen);