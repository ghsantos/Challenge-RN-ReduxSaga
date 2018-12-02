/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimensions, View, ScrollView, Text, StyleSheet } from 'react-native';

import { colors } from '../styles';
import Button from '../components/Button';
import LikeButton from '../components/LikeButton';
import ButtonIcon from '../components/ButtonIcon';
import Header from '../components/Header';
import ImagePlaceholder from '../components/ImagePlaceholder';
import Rate from '../components/Rate';

const { width } = Dimensions.get('window');

class Detail extends Component {
  static navigationOptions = { header: null };

  state = {
    rateValue: 0,
  };

  render() {
    console.log(this.props);
    const {
      title,
      authors,
      description,
      imageLinks,
    } = this.props.book.volumeInfo;
    const { listPrice } = this.props.book.saleInfo;

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
              <View style={styles.cover}>
                <ImagePlaceholder
                  uri={imageLinks ? imageLinks.thumbnail : ''}
                />
              </View>

              <View style={styles.details}>
                <View>
                  <Text style={styles.title}>{title}</Text>
                  {authors && (
                    <Text style={styles.author}>
                      by {`${authors.join(', ')}`}
                    </Text>
                  )}
                </View>

                <View style={styles.priceRateContainer}>
                  {listPrice && (
                    <Text style={styles.price}>
                      ${listPrice.amount.toFixed(2)}
                    </Text>
                  )}

                  <Rate
                    onChange={value => this.setState({ rateValue: value })}
                    value={this.state.rateValue}
                  />
                </View>
              </View>
            </View>

            <View style={styles.pagesButtonsContainer}>
              <View style={styles.pagesContainer}>
                <Text>216 pages</Text>
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
            <Text style={styles.descriptionText}>{description}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    book: state.booksReducer.book,
  };
};

export default connect(
  mapStateToProps,
  {}
)(Detail);

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
    width: (width - 20) / 3,
    height: (width - 20) / 2.3,
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
