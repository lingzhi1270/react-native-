/*引导页 */

import React from 'react';
import{
Dimensions,
Image,
InteractionManager,
View,
Text,
Button,
TouchableOpacity

} from 'react-native'

import RoleRutor from './RoleRouter'
import Loading from '../component/Loading'

const {height,width} = Dimensions.get('window');
const splashTime = 5;

export default class Splash extends React.Component{
constructor(props){
    super(props);
    this.state = {
        time:splashTime,
        loading:true
    }
    this.goTo = this._goTo.bind(this);
}

componentDidMount(){
const {navigator} = this.props;
this.setState({loading:false});
this.interval = setInterval(()=> {
   const ctime = this.state.time;
   if(ctime >= 1){
       this.setState({time:ctime-1});
   }else{
       this.goTo();
   }

},1000);


}

componentWillUnmount(){
    this.interval && clearInterval(this.interval);
}


_goTo(){

    const {navigator} = this.props;
    InteractionManager.runAfterInteractions(()=>{
   navigator.resetTo({
   component:RoleRutor,
   name:'RoleRouter'
});

    });

}

 render() {
      if (this.state.loading) {
        return (
          <Loading />
        );
      }else{
        return (
          <View style={{ flex: 1 }}>
            <Image
              style={{ flex: 1, width, height }}
              source={require('../../images/ic_welcome.jpg')}
            >
              <TouchableOpacity
                activeOpacity={0.75}
                onPress={this.goTo.bind(this)}
                style={{ flex: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', top: 20, left: width - 80, width: 60, backgroundColor: 'white' }}
              >
                <Text>跳过</Text><Text>{this.state.time}</Text><Text>秒</Text>
              </TouchableOpacity>
            </Image>
          </View>
        );
      }
  }

}
