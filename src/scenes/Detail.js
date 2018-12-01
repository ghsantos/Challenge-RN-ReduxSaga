/* @flow */

import React, { Component } from 'react';
import { Image, View, ScrollView, Text, StyleSheet } from 'react-native';

import { colors } from '../styles';
import Button from '../components/Button';
import LikeButton from '../components/LikeButton';
import ButtonIcon from '../components/ButtonIcon';
import Header from '../components/Header';
import Rate from '../components/Rate';

const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const title = 'Logo Design Love: A Guide to Crating Iconic Brand Identities';
const author = 'David Airey';
const coverUri = 'https://books.google.com/books/content?id=jCbhV37Cpw8C&printsec=frontcover&img=1';
const pageCount = 216;
const price = 9.99;

export default class Detail extends Component {
  static navigationOptions = { header: null };

  state = {
    rateValue: 0,
  };

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
          center={<Text style={styles.headerTitle}>Detail component</Text>}
          right={<ButtonIcon name="ios-search" onPress={() => {}} />}
        />

        <ScrollView>
          <View style={styles.main}>
            <View style={{ flexDirection: 'row' }}>
              <Image source={{ uri: coverUri }} style={styles.cover} />

              <View style={styles.details}>
                <View>
                  <Text style={styles.title}>{title}</Text>
                  <Text style={styles.author}>by {author}</Text>
                </View>

                <View style={styles.priceRateContainer}>
                  <Text style={styles.price}>${price}</Text>

                  <Rate
                    onChange={value => this.setState({ rateValue: value })}
                    value={this.state.rateValue}
                  />
                </View>
              </View>
            </View>

            <View style={styles.pagesButtonsContainer}>
              <View style={styles.pagesContainer}>
                <Text>{pageCount} pages</Text>
              </View>

              <View style={styles.buttonsContainer}>
                <View style={{ paddingRight: 10 }}>
                  <Button onPress={() => {}} text="BUY" />
                </View>

                <LikeButton />
              </View>
            </View>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>{text}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 20,
  },
  main: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  cover: {
    width: 115,
    height: 148,
  },
  details: {
    flex: 1,
    marginLeft: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: -6,
  },
  author: {
    color: '#666',
  },
  priceRateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 6,
  },
  pagesButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
  },
  pagesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  descriptionContainer: {
    marginHorizontal: 20,
    paddingVertical: 30,
  },
  descriptionText: {
    fontSize: 17,
    lineHeight: 30,
  },
});
