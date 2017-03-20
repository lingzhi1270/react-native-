import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  ScrollView,
  Text
} from 'react-native';

import NavBar from '../../../common/component/NavBar';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class detail extends Component{


   render(){
  const{leftIcon,onLeftButtonClick} = this.props;
       return(
     <View style={{flex:1}}>
           <NavBar 
          title='详情'
          leftButton={true}
          leftIcon='angle-left'
          />
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>详情</Text></View>
          
          </View>
       )
   }
    
}

