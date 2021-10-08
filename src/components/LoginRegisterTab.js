import React from 'react';
import {
    StyleSheet, 
    Image,
    View,
    Header,
} from 'react-native';

import LoginPageTab from './LoginPage';
import RegisterPageTab from './RegisterPage';
// import ForgetPassword from './ForgetPassword'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

export const LoginRegisterTab = createMaterialTopTabNavigator({    
    LoginPageTab: { 
        screen: LoginPageTab, navigationOptions: { tabBarLabel: 'LOG IN' } 
    },
    RegisterPageTab: { 
        screen: RegisterPageTab, navigationOptions: { tabBarLabel: 'SIGN UP' }
    }
},
// {
//   tabBarPosition: 'top',
//   animationEnabled: true,
//   tabBarOptions: {
//       activeTintColor: '#6cace4',
//       inactiveTintColor: '#e1e2e1',
//       style: {
//         backgroundColor: '#e1e2e1',
//       },
//       labelStyle: {
//         textAlign: 'center',
//       },
//       indicatorStyle: {
//         backgroundColor: 'red',
//         borderBottomWidth: 2,
//       },
//   },
// },  
{
    navigationOptions: {
        headerStyle: {height: 176},
        headerBackground: (
            <Image source={require('../../assets/ttsh1.jpg')}
            style = {{
                width: '100%', 
                height: 200, 
                position: "absolute", 
                left: 0, 
                right: 0, 
                top: 0, 
                bottom: 0
            }}
            /> 
        ),
        
    }
  }, 
);
