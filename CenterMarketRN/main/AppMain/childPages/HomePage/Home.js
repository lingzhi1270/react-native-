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
    Image,
    Platform,
    Dimensions,TouchableOpacity,
    InteractionManager
} from 'react-native';


import NavBar from '../../../common/component/NavBar'
import detail from './detail'

const{width,height} = Dimensions.get('window');

var items =3;
var itemW = 40;
var VMargin = (width-itemW*items)/(items+1);



export default class Home extends Component {

  constructor(props){
    super(props);
    this.state={

    };
    this.goToDetail = this._gotoDetail.bind(this);
  }

 _gotoDetail(){
   const{navigator} = this.props;
   InteractionManager.runAfterInteractions(()=>{
     this.props.navigator.push({
       component:detail,
       name:'detail',
       props:{}
     })

   })

 }
    render() {
        return (
          <View style={{flex:1}}>
        <View style={{height:64,width:width,backgroundColor:'orange',flexDirection:'row',alignItems:'center'}}>
        <View style={{marginLeft:10}}><Text>南京</Text></View>
        <View style={{marginLeft:30,marginRight:30, flexDirection:'row',alignItems:'center'}}><TextInput placeholder='搜索品牌或店铺' style={{backgroundColor:'white',width:200}}></TextInput></View>
        <View style={{position:'absolute',right:10,top:25,backgroundColor:'red',width:20,height:20}}></View>
        </View>

        <View style={{height:50,width:width,backgroundColor:'lightgray',flexDirection:'row'}}>
         <TouchableOpacity onPress={()=>{}}><View style={styles.iconStyle}></View></TouchableOpacity>
   
     <TouchableOpacity onPress={this.goToDetail}><View style={styles.iconStyle}></View></TouchableOpacity>
     <TouchableOpacity onPress={()=>{}}><View style={styles.iconStyle}></View></TouchableOpacity>
    
        </View>

     
        <View style={{flex:1,backgroundColor:'white'}}>
             <View style={{flex:5,flexDirection:'row',padding:5}}>
             <View style={{flex:1,backgroundColor:'white'}}>
             <View style={{flex:1,padding:5}}><View style={{justifyContent:'center',alignItems:'center',backgroundColor:'red',flex:1}}><Text>中央商城</Text></View></View>
             <View style={{flex:1,padding:5}}><View style={{justifyContent:'center',alignItems:'center',backgroundColor:'green',flex:1}}><Text>雨润肉店</Text></View></View>
             </View>
             <View style={{flex:1,backgroundColor:'white'}}>
               <View style={{flex:2,padding:5}}><View style={{justifyContent:'center',alignItems:'center',backgroundColor:'yellow',flex:1}}><Text>楼宇鲜生</Text></View></View>
               <View style={{flex:1,padding:5}}><View style={{justifyContent:'center',alignItems:'center',backgroundColor:'blue',flex:1}}><Text>罗森便利</Text></View></View>
             </View>
             </View>


          <View style={{flex:1,backgroundColor:'orange',marginLeft:10,marginRight:10,marginBottom:10,justifyContent:'center',alignItems:'center'}}><Text>中央会员购</Text></View>
           
        </View>






          </View>
          

           
        );
    }
}


const styles = StyleSheet.create({

  iconStyle:{
    marginTop:5,
     height:40,
      marginLeft:VMargin,
      width:itemW,
      backgroundColor:'red'

},

})
   

