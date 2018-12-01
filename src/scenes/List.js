/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { colors } from '../styles';
import ButtonIcon from '../components/ButtonIcon';
import Header from '../components/Header';
import ImagePlaceholder from '../components/ImagePlaceholder';

const { width } = Dimensions.get('window');

class List extends Component {
  static navigationOptions = { header: null };

  componentDidMount() {
    this.props.getBooks();
  }

  _onRefresh = () => {
    if (!this.props.refreshing) {
      this.props.getBooks();
    }
  };

  _onEndReached = () => {
    if (!this.props.loading) {
      this.props.getNextBooks();
    }
  };

  renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => this.props.navigation.navigate('Detail')}
      activeOpacity={0.8}
      style={styles.converConteier}
    >
      <ImagePlaceholder
        uri={
          item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : ''
        }
      />
    </TouchableOpacity>
  );

  renderFooter = () => {
    if (!this.props.loading) return null;
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  };

  _keyExtractor = item => item.id;

  render() {
    return (
      <View style={styles.container}>
        <Header
          left={
            <ButtonIcon
              name="ios-arrow-round-back"
              onPress={() => this.props.navigation.goBack()}
              size={30}
            />
          }
          center={<Text style={styles.headerTitle}>List component</Text>}
          right={<ButtonIcon name="ios-search" onPress={() => {}} />}
        />

        <FlatList
          data={this.props.books}
          keyExtractor={this._keyExtractor}
          numColumns={3}
          onEndReached={this._onEndReached}
          onEndReachedThreshold={0.5}
          renderItem={this.renderItem}
          refreshControl={
            <RefreshControl
              refreshing={this.props.refreshing}
              onRefresh={this._onRefresh}
            />
          }
          ListFooterComponent={this.renderFooter}
          contentContainerStyle={{ paddingVertical: 15, paddingHorizontal: 10 }}
          style={{ flexWrap: 'wrap' }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.booksReducer.books,
    page: state.booksReducer.page,
    refreshing: state.booksReducer.refreshing,
    loading: state.booksReducer.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBooks: () => dispatch({ type: 'GET_BOOKS' }),
    getNextBooks: () => dispatch({ type: 'GET_NEXT_BOOKS' }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  headerTitle: {
    fontSize: 20,
  },
  converConteier: {
    width: (width - 20) / 3,
    height: (width - 20) / 2.3,
    padding: 8,
    marginBottom: 10,
  },
});
