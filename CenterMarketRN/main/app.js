import React,{Component} from 'react'

import{
Navigator,
StyleSheet,
StatusBar,
BackAndroid,
Platform,
AppState,
View,
Text
} from 'react-native'
import SplashScreen from 'react-native-splash-screen';

import Splash from './common/pages/Splash';
import { naviGoBack } from './common/utils/CommonUtils';
// import { codepush } from './common/utils/CodePush.js';



export const STATUS_BAR_HEIGHT = (Platform.OS === 'ios'? 20: 25)


export default class App extends Component{

    constructor (props){
        super(props);


        this.goBack = this._goBack.bind(this);
       this.handleAppStateChange = this._handleAppStateChange.bind(this);

        BackAndroid.addEventListener('hardwareBackPress',this.goback);
    }

componentDidMount(){
AppState.addEventListener('change',this.handleAppStateChange)
// SplashScreen.hide();
}

_goBack(){
    return naviGoBack(_navigator);
}

_handleAppStateChange(appState){
 if(appState === 'active'){

 }else if(appState === 'background'){

 }

}


_configureScene(route,routeStack){
    return Navigator.SceneConfigs.PushFromRight;
}

_renderScene(route,navigator){
  const Component = route.component;
  _navigator = navigator;
  return (

      <Component navigator = {navigator} route={route} {...route.passProps}/>
  )

}


   render()
    {
    return (
      
     <View style={{flex:1}}>
     <StatusBar 
     barStyle="light-content"
     style={{height:STATUS_BAR_HEIGHT}}
     />
     
     <Navigator
     style={styles.naviogator}
     configureScene={this._configureScene.bind(this)}
     renderScene={this._renderScene.bind(this)}
     initialRoute={{
     component:Splash,
     name:'Splash'

     }}
     
     />
     
     </View>


        )
}

}

const styles = StyleSheet.create({

  naviogator:{
      flex:1,
  }



})