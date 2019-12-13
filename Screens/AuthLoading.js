import React,{Component} from "react"
import { View } from "react-native";

export default class AuthLoading extends Component {

  componentWillMount() {
    const { navigate } = this.props.navigation;
    const token = null;
    if (token) {
      navigate('home');
    } else {
      navigate('login');
    }
  }

  render() {
    return <View/>;
  }
};
