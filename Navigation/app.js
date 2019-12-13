import React from "react";
import { View } from "react-native";
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import AuthLoading from "../Screens/AuthLoading";
import Login from "../Screens/Login";
import Register from "../Screens/Register";

import Home from "../Screens/Home"
import About from "../Screens/About"
import Gallery from "../Screens/Gallery"
import Contact from "../Screens/Contact"


import Homesub from "../Screens/Homesub"
import AboutSub from "../Screens/AboutSub"
import GallerySub from "../Screens/GallerySub"
import ContactSub from "../Screens/ContactSub"

const authStack = createStackNavigator({
    login: Login,
    register: Register,
}, {
    defaultNavigationOptions: {
        header: null
    }
});

const tabStack = createMaterialBottomTabNavigator({
    home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
              <View>
                  <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'}/>
              </View>),
        }
    },
    about: {
        screen: About, navigationOptions: {
            tabBarLabel: 'About',
            tabBarIcon: ({ tintColor }) => (
              <View>
                  <Icon style={[{ color: tintColor }]} size={25} name={'ios-person'}/>
              </View>),
            activeColor: '#f60c0d',
            inactiveColor: '#f65a22',
            barStyle: { backgroundColor: '#f69b31' },
        }
    },
    gallery: {
        screen: Gallery, navigationOptions: {
            tabBarLabel: 'Gallery',
            tabBarIcon: ({ tintColor }) => (
              <View>
                  <Icon style={[{ color: tintColor }]} size={25} name={'ios-images'}/>
              </View>),
            activeColor: '#615af6',
            inactiveColor: '#46f6d7',
            barStyle: { backgroundColor: '#67baf6' },
        }
    },
    contact: {
        screen: Contact, navigationOptions: {
            tabBarLabel: 'Contact',
            tabBarIcon: ({ tintColor }) => (
              <View>
                  <Icon style={[{ color: tintColor }]} size={25} name={'ios-cart'}/>
              </View>),
        }
    },
}, {
    activeColor: '#f0edf6',
    inactiveColor: '#226557',
    barStyle: { backgroundColor: '#3BAD87' },
})

const appStack = createStackNavigator({
    tabStack,
    homeSub: Homesub,
    aboutSub: AboutSub,
    gallerySub: GallerySub,
    contactSub: ContactSub,
});

const mainStack = createSwitchNavigator({
    AuthLoading,
    authStack,
    appStack,
});

export default createAppContainer(mainStack);
