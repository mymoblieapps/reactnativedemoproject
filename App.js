import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    console.log("Hi There");
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world!</Text>
      </View>
    );
  }
}
//https://bit.ly/2ZlefTs
