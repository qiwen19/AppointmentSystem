
import React from 'react';
import { 
  Text, 
  Image,
  StyleSheet,
  View,
  // Icon,
} from 'react-native'
import { Container, Content, Header, Left, Body, Icon } from 'native-base'

// import ChangePassword from './src/components/ChangePassword'
// import ProfilePage from './src/components/ProfilePage'


export default class SideNav extends React.Component{
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
};
  constructor(){
    super();
  //Array of the sidebar navigation option with icon and screen to navigate
  //This screens can be any screen defined in Drawer Navigator in App.js
  //You can find the Icons from here https://material.io/tools/icons/
  this.items = [
    {
      navOptionThumb: 'camera',
      navOptionName: 'Profile',
      screenToNavigate: 'ProfilePage',
    },
    {
      navOptionThumb: 'build',
      navOptionName: 'Change Password',
      screenToNavigate: 'ChangePassword',
    },
    // {
    //   navOptionThumb: 'build',
    //   navOptionName: 'LogOut',
    //   screenToNavigate: '_signOutAsync',
    // },
  ];
}
render() {
  return (
    <View style={styles.sideMenuContainer}>
      {/* Top Large Image  */}
      <Image
        source={require("./assets/profilepic.jpg")}
        style={styles.sideMenuProfileIcon}
      />
      {/*Divider between Top Image and Sidebar Option*/}
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: '#e2e2e2',
          marginTop: 15,
        }}
      />
      {/*Setting up Navigation Options from option array using loop*/}
      <View style={{ width: '100%' }}>
        {this.items.map((item, key) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: 10,
              paddingBottom: 10,
              backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
            }}
            key={key}>
            <View style={{ marginRight: 10, marginLeft: 20 }}>
              <Icon name={item.navOptionThumb} size={25} color="#808080" />
            </View>
            <Text
              style={{
                fontSize: 15,
                color: global.currentScreenIndex === key ? 'red' : 'black',
              }}
              onPress={() => {
                global.currentScreenIndex = key;
                this.props.navigation.navigate(item.screenToNavigate);
              }}>
              {item.navOptionName}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
}
const styles = StyleSheet.create({
sideMenuContainer: {
  width: '100%',
  height: '100%',
  backgroundColor: '#fff',
  alignItems: 'center',
},
sideMenuProfileIcon: {
  resizeMode: 'center',
  width: 150,
  height: 150,
  // marginTop: 5,
  borderRadius: 150 / 2,
},
});