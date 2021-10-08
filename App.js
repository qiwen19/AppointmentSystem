import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Image,
  Dimensions, 
} from 'react-native';

import { LoginRegisterTab } from './src/components/LoginRegisterTab'
import LoginPage from './src/components/LoginPage'
import ForgetPassword from './src/components/ForgetPassword'
import { TabScreen } from './TabScreen'

import ChangePassword from './src/components/ChangePassword'
import ProfilePage from './src/components/ProfilePage'
import ViewAppt from './src/components/ViewAppt'
import VisitInProgress from './src/components/VisitInProgress'

// import HomePage from './src/components/HomePage'
import SideNav from './SideNav'
import {createDrawerNavigator, DrawerItems, SafeAreaView  } from 'react-navigation-drawer';

import {createSwitchNavigator} from '@react-navigation/core';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
 
class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const DrawerNavigator = createDrawerNavigator({
  Home: { screen: TabScreen },
  ChangePassword: { screen: ChangePassword },
  ProfilePage: { screen: ProfilePage },
  ViewAppt: { screen: ViewAppt },
  VisitInProgress: { screen: VisitInProgress },
},{
  contentComponent: SideNav,
    //Sidebar width
  drawerWidth: Dimensions.get('window').width - 80,
  drawerPosition: "right",
});


// export default createAppContainer
const AppStack = createStackNavigator({ 
  DrawerNavigator,
},
{
  defaultNavigationOptions: ({navigation}) => ({
    headerTitle: (
      <Image 
      source={require("./assets/ttsh_logo1.png")} 
      resizeMode="contain"
      style = {{
          // width: 150,
          width: 45,
          marginLeft: "auto",
          marginRight: "auto",
          alignSelf: 'center',
      }}
      />
    ),
    headerTitleContainerStyle: {
      right: 0, // To properly align the header
    },
    headerRight: (
      <TouchableOpacity onPress={ () => {navigation.openDrawer()}}>
      <Image 
      source={require("./assets/profilepic.jpg")} 
      resizeMode="contain"
      style = {{
          // width: 150,
          width: 40,
          height: 40,
          borderRadius: 80,
          marginRight: 5,
      }}
  
      />
      </TouchableOpacity>
    ),
    headerStyle: {
      backgroundColor: '#64b1ee',
    },
    headerLeft: null
  })
}
);

const AuthStack = createStackNavigator({ 
  LoginRegisterTab:{ 
    screen: LoginRegisterTab,
    LoginPage: LoginPage,
    ForgetPassword: ForgetPassword, 
  },
  ForgetPassword: ForgetPassword,
  LoginPage: LoginPage,
},
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);