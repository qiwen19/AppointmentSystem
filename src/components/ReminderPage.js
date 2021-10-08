import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, 
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import Overlay from 'react-native-modal-overlay';

// import 'firebase/firestore';

import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

import Firebase from "../../config/Firebase";

export default class ReminderPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bookingData: [],
      modalVisible: false,
    }
    // this.onPress = this.onPress.bind(this);
  }
  // state = {
  //   modalVisible: false,
  // }
  // componentDidMount(){
  //   Firebase.database().ref("/Appointments/"+ Firebase.auth().currentUser.uid)
  //   .once('value', (data) =>{
  //     console.log(data);
  //   })
  // };

  showOverlay() {
    this.setState({modalVisible: true})
  }

  hideOverlay() {
    this.setState({modalVisible: false})
  }

  componentWillMount(){
    var that = this;

    let q = Firebase.database().ref("/Appointments/"+ Firebase.auth().currentUser.uid)
    var finished = [];

    q.once('value', snapshot => {
      snapshot.forEach(function(data){
        let result = data.val();
        result["key"] = data.key;
        finished.push(result);
      })
    }).then(function(){
      that.setState({
        bookingData: finished
      })
    })
  }

  render() {
    let that = this;
    // console.disableYellowBox = true;
    return (  
      <View style = {styles.container}>
        <ImageBackground
        style={styles.rect}
        source={require("../../assets/background1.jpg")}
        >
        <ScrollView style = {styles.container1}>
        <Text style={styles.Reminders}>Reminders</Text>
        {this.state.bookingData.map(function(x){
          return(
              <TouchableOpacity
                style = {styles.container2}>
                {/* onPress={this.showOverlay.bind(this)}> */}
                <Text><Text style={styles.time}>Referred By: </Text><Text style={styles.notes}> { x.referredBy } </Text></Text>
                <Text><Text style={styles.time}>Description:  </Text><Text style={styles.notes}> { x.description } </Text></Text>
                <Text><Text style={styles.time}>Service: </Text><Text style={styles.notes}> { x.service } </Text></Text>
                <Text><Text style={styles.time}>Doctor: </Text><Text style={styles.notes}> { x.doctor } </Text></Text>
                <Text><Text style={styles.time}>Date: </Text><Text style={styles.notes}> { x.Date } </Text></Text> 
              </TouchableOpacity> 
          )
        })}
        {/* <Overlay visible={this.state.modalVisible} closeOnTouchOutside animationType="zoomIn"
          containerStyle={{backgroundColor: 'rgba(37, 8, 10, 0.78)'}} childrenWrapperStyle={{backgroundColor: '#eee'}} >
          <Text style={{fontWeight:'300', fontSize: 20}}>Reminders</Text>
          <View style={{borderBottomWidth: 1, width: 100, paddingTop: 10}}></View>
          <Text style={{fontWeight:'300', fontSize: 16, paddingTop: 20, textAlign:'center'}}>Don't eat sugary foods.{"\n"}
            Do not take panadol.{"\n"}
            Fasting is required. (No eating from 12am onwards till time of apppointment){"\n"}
            Drink lots of water.{"\n"}
          </Text>
        
          <Button
            onPress={this.state.hideOverlay.bind(this)}
            title="Close"
            // color="#4c97df"
          />
        </Overlay> */}
        
        </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)",
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
},
container1: {
  width: "100%",
  marginBottom: "5%"
},
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  Reminders: {
    color: "rgba(0,42,90,1)",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom:10
},
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  container2: {
    padding: 10,
    marginTop: 3,
    backgroundColor: "rgba(255,245,238,0.7)",
    borderWidth:1,
    borderColor: "#fce2d1",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    },
    time:{
      fontSize: 18,
      fontWeight: "800",
      color:'#35435d',
      textTransform:'capitalize'
    },
    notes: {
      fontSize: 18,
      color:'#35435d',
      textTransform:'capitalize'
    },
  //  text: {
  //   // color: 'black',  
  //   // fontWeight:'bold' 
  //   fontSize: 18,
	// 	color:'#35435d',
	// 	textTransform:'capitalize'
  //  },
   rect: {
    width: '100%',
    height: '100%',
},
});