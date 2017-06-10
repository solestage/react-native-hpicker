/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Picker,
  View,
  Device
} from 'react-native';
import HorizontalPicker from './picker';

const initialState = {
  pickerValue: 0,
  items: [22,23,24,25,26,27,28,29,30,31,32]
}

export default class PickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  update = (pickerValue) => {
    this.setState({pickerValue});
  }

  renderItem = (item) => {
    const isSelected = item == this.state.pickerValue;
    const style = isSelected ? {backgroundColor: 'orange'} : {};
    return (
      <HorizontalPicker.Item key={item} label={`${item}`} value={item} style={style}/>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <View style={{flexDirection:'row'}}>
          <HorizontalPicker
            style={{backgroundColor: 'lime', flex: 1, height: 100, width: 200}}
            itemWidth={100}
            onChange={this.update}>
            {this.state.items.map(this.renderItem)}
          </HorizontalPicker>
        </View>
        <Text style={styles.instructions}>
          Picker Value: {this.state.pickerValue}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('PickerExample', () => PickerExample);