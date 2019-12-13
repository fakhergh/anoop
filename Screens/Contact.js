import React, { Component } from 'react'

import CommonGroupButtons from "./CommonGroupButtons";

export default class Contact extends Component {
  render() {
    return (
      <CommonGroupButtons navigation={this.props.navigation}/>
    );
  }
};
