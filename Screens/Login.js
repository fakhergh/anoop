import React, { Component } from 'react'
import { Text, View, Button } from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 24 }}>
        <Text> Login Page </Text>
        <View style={{ marginTop: 16 }}/>
        <Button title={"Go To Home"} onPress={() => this.props.navigation.navigate('home')}></Button>
        <View style={{ marginTop: 16 }}/>
        <Button title={"Go To Register"} onPress={() => this.props.navigation.navigate('register')}></Button>
      </View>
    );
  }
};
