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

export default class VipShopping extends Component {
    render() {
        return (
           <View style={{flex:1}}>
          <NavBar 
          title='会员购'
          leftButton={false}
          />
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>会员购</Text></View>
          
          </View>
          
        );
    }
}

    // const styles = StyleSheet.create({
    //     container: {
    //         flex: 1,


    //         //主轴的对齐方式
    //         justifyContent:'center',
    //         //侧轴的对齐方式
    //         alignItems:'center'
    //     },

    // });




