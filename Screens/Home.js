import React, { Component } from 'react'

import CommonGroupButtons from "./CommonGroupButtons";

export default class Home extends Component {
  render() {
    return (
      <CommonGroupButtons navigation={this.props.navigation}/>
    );
  }
};

