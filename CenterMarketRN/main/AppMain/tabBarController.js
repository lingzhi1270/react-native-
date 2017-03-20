/**
 *  主框架界面---底部选项卡
 * 
 * 
 */

import React,{Component} from 'react'
import{
StyleSheet,
Image,
View,


} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import TabNavigator from 'react-native-tab-navigator';

import Home from '../AppMain/childPages/HomePage/Home'
import VipShopping from '../AppMain/childPages/VipShopping/VipShopping'
import Find from '../AppMain/childPages/Find/Find'
import ShoppingCart from '../AppMain/childPages/ShoppingCart/ShoppingCart'
import Mine from '../AppMain/childPages/Mine/Mine'



const styles = StyleSheet.create({
  iconStyle: {
    width: 26,
    height: 26,
  },
  textStyle: {
    color: '#999',
  },
  selectedTextStyle: {
    color: 'black',
  }
});

export default  class tabBarController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Home',
     
    };
  }

  _renderIcon = (title, iconName, isSelected) => {
    const color = isSelected ? 'green' : 'gray';
    return (
      <View>
        <Icon name={iconName} size={23} color={color} />
      </View>
    );
  }
  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          title="首页"
          selected={this.state.selectedTab === 'Home'}
          selectedTitleStyle={styles.selectedTextStyle}
          titleStyle={styles.textStyle}
          renderIcon={() => <Image style={{width:30,height:30}} source={require('../images/mailList2.png')}/>}
          renderSelectedIcon={() => <Image style={{width:30,height:30}} source={require('../images/mailList1.png')}/>}
          onPress={() => this.setState({ selectedTab: 'Home' })}
        >
          <Home {...this.props} />
        </TabNavigator.Item>
        <TabNavigator.Item
          title="会员购"
          selected={this.state.selectedTab === 'VipShopping'}
          selectedTitleStyle={styles.selectedTextStyle}
          titleStyle={styles.textStyle}
          renderIcon={() => <Image style={{width:30,height:30}} source={require('../images/mailList2.png')}/>}
          renderSelectedIcon={() => <Image style={{width:30,height:30}} source={require('../images/mailList1.png')}/>}
          onPress={() => this.setState({ selectedTab: 'VipShopping' })}
        >
          <VipShopping {...this.props} />
        </TabNavigator.Item>


         <TabNavigator.Item
          title="发现"
          selected={this.state.selectedTab === 'Find'}
          selectedTitleStyle={styles.selectedTextStyle}
          titleStyle={styles.textStyle}
          renderIcon={() => <Image style={{width:30,height:30}} source={require('../images/mailList2.png')}/>}
          renderSelectedIcon={() => <Image style={{width:30,height:30}} source={require('../images/mailList1.png')}/>}
          onPress={() => this.setState({ selectedTab: 'Find' })}
        >
        <Find {...this.props} />
        </TabNavigator.Item>


        <TabNavigator.Item
          title="购物车"
          selected={this.state.selectedTab === 'ShoppingCart'}
          selectedTitleStyle={styles.selectedTextStyle}
          titleStyle={styles.textStyle}
          renderIcon={() => <Image style={{width:30,height:30}} source={require('../images/mailList2.png')}/>}
          renderSelectedIcon={() => <Image style={{width:30,height:30}} source={require('../images/mailList1.png')}/>}
          onPress={() => this.setState({ selectedTab: 'ShoppingCart' })}
        >
        <ShoppingCart {...this.props} />
        </TabNavigator.Item>


        <TabNavigator.Item
          title="我的"
          selected={this.state.selectedTab === 'Mine'}
          selectedTitleStyle={styles.selectedTextStyle}
          titleStyle={styles.textStyle}
          renderIcon={() => <Image style={{width:30,height:30}} source={require('../images/mailList2.png')}/>}
          renderSelectedIcon={() => <Image style={{width:30,height:30}} source={require('../images/mailList1.png')}/>}
          onPress={() => this.setState({ selectedTab: 'Mine' })}
        >
          <Mine {...this.props} />
        </TabNavigator.Item>
      </TabNavigator>
      );
  }
}
