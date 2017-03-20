import React from 'react';
import {
  InteractionManager
} from 'react-native';

import Loading from '../../common/component/Loading';
import tabBarController from '../../AppMain/tabBarController'

export default class RoleRouter extends React.Component {
 
   constructor(props){
       super(props);

       this.goTo = this._goTo.bind(this);
   }

componentDidMount(){
  this.goTo();

}
render() {
    return (
      <Loading />
    );
  }

  _goTo(){


const{navigator} = this.props;

InteractionManager.runAfterInteractions(()=>{

navigator.replace({
    component:tabBarController,
    name:'tabBarController',
    passProps:{

    }
})

})

  }

}