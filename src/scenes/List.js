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

const { width } = Dimensions.get('window');

const covers = [
  { key: '0', uri: 'http://books.google.com/books/content?id=gJrmszNHQV4C&printsec=frontcover&img=1' },
  { key: '1', uri: 'https://books.google.com/books/content?id=jCbhV37Cpw8C&printsec=frontcover&img=1' },
  { key: '2', uri: 'https://books.google.com/books/content?id=jCbhV37Cpw8C&printsec=frontcover&img=1' },
  { key: '3', uri: 'https://books.google.com/books/content?id=jCbhV37Cpw8C&printsec=frontcover&img=1' },
  { key: '4', uri: 'https://books.google.com/books/content?id=jCbhV37Cpw8C&printsec=frontcover&img=1' },
  { key: '5', uri: 'https://books.google.com/books/content?id=jCbhV37Cpw8C&printsec=frontcover&img=1' },
  { key: '6', uri: 'https://books.google.com/books/content?id=jCbhV37Cpw8C&printsec=frontcover&img=1' },
  { key: '7', uri: 'https://books.google.com/books/content?id=jCbhV37Cpw8C&printsec=frontcover&img=1' },
  { key: '8', uri: 'https://books.google.com/books/content?id=jCbhV37Cpw8C&printsec=frontcover&img=1' },
  { key: '9', uri: 'https://books.google.com/books/content?id=jCbhV37Cpw8C&printsec=frontcover&img=1' },
  { key: '10', uri: 'https://books.google.com/books/content?id=jCbhV37Cpw8C&printsec=frontcover&img=1' },
  { key: '11', uri: 'https://books.google.com/books/content?id=jCbhV37Cpw8C&printsec=frontcover&img=1' },
  { key: '12', uri: 'https://books.google.com/books/content?id=jCbhV37Cpw8C&printsec=frontcover&img=1' },
];

const covers2 = [
  { key: '0', uri: 'https://books.google.com/books/content?id=jCbhV37Cpw8C&printsec=frontcover&img=1' },
  { key: '1', uri: 'http://books.google.com/books/content?id=gJrmszNHQV4C&printsec=frontcover&img=1' },
  { key: '2', uri: 'http://books.google.com/books/content?id=gJrmszNHQV4C&printsec=frontcover&img=1' },
  { key: '3', uri: 'http://books.google.com/books/content?id=gJrmszNHQV4C&printsec=frontcover&img=1' },
  { key: '4', uri: 'http://books.google.com/books/content?id=gJrmszNHQV4C&printsec=frontcover&img=1' },
  { key: '5', uri: 'http://books.google.com/books/content?id=gJrmszNHQV4C&printsec=frontcover&img=1' },
  { key: '6', uri: 'http://books.google.com/books/content?id=gJrmszNHQV4C&printsec=frontcover&img=1' },
  { key: '7', uri: 'http://books.google.com/books/content?id=gJrmszNHQV4C&printsec=frontcover&img=1' },
  { key: '8', uri: 'http://books.google.com/books/content?id=gJrmszNHQV4C&printsec=frontcover&img=1' },
  { key: '9', uri: 'http://books.google.com/books/content?id=gJrmszNHQV4C&printsec=frontcover&img=1' },
  { key: '10', uri: 'http://books.google.com/books/content?id=gJrmszNHQV4C&printsec=frontcover&img=1' },
  { key: '11', uri: 'http://books.google.com/books/content?id=gJrmszNHQV4C&printsec=frontcover&img=1' },
  { key: '12', uri: 'http://books.google.com/books/content?id=gJrmszNHQV4C&printsec=frontcover&img=1' },
];

export default class List extends Component {
  state = {
    refreshing: false,
    loading: false,
    covers: covers,
  };

  _onRefresh = () => {
    if (this.state.refreshing) {
      return;
    }

    this.setState({ refreshing: true });

    setTimeout(() => {
      this.setState({ refreshing: false, covers: covers2 });
    }, 2000);
  };

  _onEndReached = () => {
    if (this.state.loading) {
      return;
    }

    this.setState({ loading: true });

    const newCovers = [];

    for (let i = 0; i < 10; i++) {
      const key = Math.random().toString();
      newCovers.push({
        key,
        uri:
          'http://books.google.com/books/content?id=l0QPECGQySYC&printsec=frontcover&img=1',
      });
    }

    setTimeout(() => {
      this.setState(prevState => ({
        loading: false,
        covers: [...prevState.covers, ...newCovers],
      }));
    }, 500);
  };

  renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {}}
      activeOpacity={0.8}
      style={styles.converConteier}
    >
      <ImagePlaceholder source={{ uri: item.uri }} />
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

  render() {
    return (
      <View style={styles.container}>
        <Header
          left={<ButtonIcon name="ios-menu" onPress={() => {}} />}
          center={<Text style={styles.headerTitle}>List component</Text>}
          right={<ButtonIcon name="ios-search" onPress={() => {}} />}
        />

        <FlatList
          data={this.state.covers}
          numColumns={3}
          onEndReached={this._onEndReached}
          onEndReachedThreshold={0.1}
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
