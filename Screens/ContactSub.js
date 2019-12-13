import React, { Component } from 'react'
import { BackHandler } from 'react-native';

import CommonGroupButtons from "./CommonGroupButtons";

export default class ContactSub extends Component {
    constructor(props) {
        super(props);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

      }

      componentWillMount() {
        BackHandler.addEventListener(
          'hardwareBackPress',
          this.handleBackButtonClick,
        );
      }

      componentWillUnmount() {
        BackHandler.removeEventListener(
          'hardwareBackPress',
          this.handleBackButtonClick,
        );
      }

      handleBackButtonClick() {
        this.props.navigation.navigate('Contact');
        return true;
      }


  render() {
    return (
      <CommonGroupButtons navigation={this.props.navigation}/>
    );
  }
}
