import React from 'react';
import HomePage from './src/components/HomePage'
import ReminderPage from './src/components/ReminderPage'
import BookingPage from './src/components/BookingPage'
import HistoryPage from './src/components/HistoryPage'
import MorePage from './src/components/MorePage'
import {createBottomTabNavigator} from 'react-navigation-tabs'; // BottomTabBar
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { createStackNavigator } from 'react-navigation-stack';

import ChangePassword from './src/components/ChangePassword'
import ProfilePage from './src/components/ProfilePage'
import FaqPage from './src/components/FaqPage'
import AboutPage from './src/components/AboutPage'
import FeedbackPage from './src/components/FeedbackPage'

const MoreStack = createStackNavigator({
  MorePage: {screen: MorePage},
  // ChangePassword: {screen: ChangePassword},
  // ProfilePage: {screen: ProfilePage},
  FaqPage: {screen: FaqPage},
  FeedbackPage: {screen: FeedbackPage},
  AboutPage: {screen: AboutPage},
});

const HomeStack = createStackNavigator({
  HomePage: {screen: HomePage},
  ChangePassword: {screen: ChangePassword},
  ProfilePage: {screen: ProfilePage},
});

export const TabScreen = createBottomTabNavigator({
      HomePage: {
        screen: HomeStack,
        navigationOptions: {
          tabBarLabel: "Home",
          tabBarIcon: ({ tintColor }) => (
            <FontAwesome name="home" size={22} color={tintColor} />
          ),
        }
      },
      BookingPage: {
          screen: BookingPage,
          navigationOptions: {
            tabBarLabel: "Book", 
            tabBarIcon: ({ tintColor }) => (
              <FontAwesome name="calendar" size={22} color={tintColor} />
            )
          }
      },
      ReminderPage: {
          screen: ReminderPage,
          navigationOptions: {
            tabBarLabel: "Reminders", 
            tabBarIcon: ({ tintColor }) => (
              <FontAwesome name="bell-o" size={22} color={tintColor} />
            )
          }
      },
      HistoryPage: {
        screen: HistoryPage,
        navigationOptions: {
          tabBarLabel: "History", 
          tabBarIcon: ({ tintColor }) => (
            <FontAwesome name="history" size={22} color={tintColor} />
          )
        }
      },
      MorePage: {
        screen: MoreStack,
        navigationOptions: {
          tabBarLabel: "More", 
          tabBarIcon: ({ tintColor }) => (
            <FontAwesome name="ellipsis-h" size={22} color={tintColor} />
          )
        }
      }
    },
    {
        tabBarOptions: {
            activeTintColor: '#ac1f2d', 
            inactiveTintColor: '#35435d', 
            inactiveBackgroundColor: '#64b1ee',
            activeBackgroundColor: '#64b1ee',
            showIcon: true
        }
    }
);