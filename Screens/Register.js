import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default class Register extends Component {
    render() {
      return (
        <View style={{ padding: 20 }}>
          <Text> Register Page </Text>
          <Button title={"Back To Login"} onPress={() => this.props.navigation.pop()}></Button>
          <View style={{ marginTop: 16 }}/>
          <Button title={"Go To Home"} onPress={() => this.props.navigation.navigate('home')}></Button>
        </View>
      );
    }
}

const styles = StyleSheet.create({})
