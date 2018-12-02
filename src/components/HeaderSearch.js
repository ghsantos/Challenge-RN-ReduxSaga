/* @flow */

import React, { Component } from 'react';
import { Dimensions, Text, TextInput, View, StyleSheet } from 'react-native';

import { colors } from '../styles';
import ButtonIcon from '../components/ButtonIcon';
import Header from '../components/Header';

const { width } = Dimensions.get('window');

export default class HeaderSearch extends Component {
  state = {
    text: '',
    inputVisible: false,
  };

  search = () => {
    if (this.state.inputVisible) {
      this.props.onPressSearch(this.state.text);
      this.setState({ inputVisible: false });
    } else {
      this.setState({ inputVisible: true });
    }
  };

  render() {
    const { title, onPressBack } = this.props;

    return (
      <Header
        left={
          <ButtonIcon
            name="ios-arrow-round-back"
            onPress={onPressBack}
            size={30}
          />
        }
        center={
          this.state.inputVisible ? (
            <View style={styles.inputContainer}>
              <TextInput
                autoFocus
                value={this.state.text}
                onChangeText={text => this.setState({ text })}
                onSubmitEditing={this.search}
                onBlur={() => this.setState({ inputVisible: false })}
                style={styles.input}
                maxLength={40}
                autoCorrect={false}
              />
            </View>
          ) : (
            <Text style={styles.title}>{title}</Text>
          )
        }
        right={<ButtonIcon name="ios-search" onPress={this.search} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  inputContainer: {
    width: width * 0.7,
    height: 37,
    borderRadius: 30,
    paddingHorizontal: 10,
    backgroundColor: colors.primaryLight,
  },
  input: {
    fontSize: 16,
    marginBottom: -2,
  },
});
