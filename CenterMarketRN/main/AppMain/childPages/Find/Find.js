/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
    TextInput,
  Text,
  View,
    ScrollView,
    Image
} from 'react-native';


import NavBar from '../../../common/component/NavBar'


export default class Find extends Component {
    render() {
        return (
          <View style={{flex:1}}>
          <NavBar 
          title='发现'
          leftButton={false}
          />
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>发现</Text></View>
          
          </View>
          

           
        );
    }
}

   

