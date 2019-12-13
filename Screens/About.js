import React, { Component } from 'react'

import CommonGroupButtons from "./CommonGroupButtons";

export default class About extends Component {
  render() {
    return (
      <CommonGroupButtons navigation={this.props.navigation}/>
    );
  }
};
