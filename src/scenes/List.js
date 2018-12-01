/* @flow */

import React, { Component } from 'react';
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
import { getBooks } from '../api';

const { width } = Dimensions.get('window');

export default class List extends Component {
  state = {
    refreshing: false,
    loading: false,
    books: [],
    search: '',
    page: 0,
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    this.setState({ refreshing: true });

    getBooks(this.state.search, this.state.page).then(res => {
      this.setState(prevState => ({
        refreshing: false,
        books: [...res.items],
      }));
    });
  }

  _onRefresh = () => {
    if (this.state.refreshing) {
      return;
    }

    this.setState({ page: 0, search: '' }, () => this.getBooks());
  };

  _onEndReached = () => {
    if (this.state.loading) {
      return;
    }

    this.setState(
      prevState => ({ loading: true, page: prevState.page + 1 }),
      () => {
        getBooks(this.state.search, this.state.page).then(res => {
          this.setState(prevState => ({
            loading: false,
            books: [...prevState.books, ...res.items],
          }));
        });
      }
    );
  };

  renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {}}
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
    if (!this.state.loading) return null;
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
          left={<ButtonIcon name="ios-menu" onPress={() => {}} />}
          center={<Text style={styles.headerTitle}>List component</Text>}
          right={<ButtonIcon name="ios-search" onPress={() => {}} />}
        />

        <FlatList
          data={this.state.books}
          keyExtractor={this._keyExtractor}
          numColumns={3}
          onEndReached={this._onEndReached}
          onEndReachedThreshold={0.5}
          renderItem={this.renderItem}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
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
