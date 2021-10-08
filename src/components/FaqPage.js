import React, { Component } from 'react';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Icon
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import FontAwesome from "react-native-vector-icons/FontAwesome";
 
const CONTENT = [
  {
    title: 'Terms and Conditions',
    content:
      'The following terms and conditions, together with any referenced documents (collectively, "Terms of Use") form a legal agreement between you and your employer, employees, agents, contractors and any other entity on whose behalf you accept these terms (collectively, “you” and “your”), and ServiceNow, Inc. (“ServiceNow,” “we,” “us” and “our”).',
  },
  {
    title: 'Privacy Policy',
    content:
      'A Privacy Policy agreement is the agreement where you specify if you collect personal data from your users, what kind of personal data you collect and what you do with that data.',
  },
  {
    title: 'As a new user, would any appointments booked prior to this be affected?',
    content:
      'No. All your appointments book prior to using this application would not be affected. Only appointments booked with the app are considered and saved.',
  },
  {
    title: 'Any subscription that I need to pay to use this app?',
    content:
      'No. The app is free to use at your convenience.',
  },
  {
    title: 'Can I just book any appointment using this application?',
    content:
      'No. Only appointments made for Tan Tock Seng Hospital can be made. Referals are welcomed as well.',
  },
  {
    title: 'How about the schedules of the appointments?',
    content:
      'The schedule of the appointments are subjected to the availability of the doctors.',
  },
];
 
export default class FaqPage extends Component {
  static navigationOptions = {
    title: "FAQ",
    headerStyle: {
        backgroundColor: 'rgba(97,173,233,1)',
    },
    headerForceInset: {
        top: 'never',
        bottom: 'never',
    },
    headerTintColor: '#fff',
    headerTitleStyle: { 
        textAlign:"center", 
        flex:1, 
    },
    headerTitleContainerStyle: {
        left: 0, // THIS RIGHT HERE
        top: 0,
    },
};
  state = {
    activeSections: [],
    collapsed: true,
  };
 
  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };
 
  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Text style={styles.headerText}> {!isActive && <FontAwesome name="plus-square" size={13} />}
        {isActive && <FontAwesome name="minus-square" size={13} />} {section.title}</Text>
      </Animatable.View>
    );
  };
 
  renderContent(section, _, isActive) {
    //Accordion Content view
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Animatable.Text
          animation={isActive ? 'bounceIn' : undefined}
          style={{ textAlign: 'left' }}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  }
 
  render() {
    const { activeSections } = this.state;
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.rect}
          source={require("../../assets/background1.jpg")}
        >
        <ScrollView contentContainerStyle={styles.container1}>
          {/* <Text style={styles.title2}>FAQ</Text> */}
          {/* <Text style={styles.selectTitle}>
            Please select below option to expand
          </Text> */}
 
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
          />
        </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 20,
  },
  // title2: {
  //   color: "rgba(0,42,90,1)",
  //   fontSize: 24,
  //   fontWeight: "bold",
  //   marginLeft: "auto",
  //   marginRight: "auto",
  // },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
    textAlign:'left',
    flexDirection: 'row',
    // justifyContent: 'space-between'
  },
  active: {
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,0.8)',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
    textAlign: 'center',
  },
  rect: {
    width: '100%',
    height: '100%',
},
});