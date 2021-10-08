import * as React from 'react';
import {Button, StyleSheet, Text, View, SafeAreaView, ScrollView, } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { Rating, AirbnbRating } from 'react-native-elements';

export default class VisitInProgress extends React.Component {

  static navigationOptions = {
    title: 'Visit-In-Progress',
    headerStyle: {
      backgroundColor: '#a6dced',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  defaultScrollViewProps = {
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
      flex: 1,
      justifyContent: 'center'
    }
  };

  onSubmitSteps = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <View style={{ flex: 1,}}>
        <ProgressSteps>
          <ProgressStep
            label="Preliminary"
            onNext={this.onNextStep}
            scrollViewProps={this.defaultScrollViewProps}
          >
            <View style={styles.visitTitle} >
            <Text style={styles.visitText1} >  
              Queue Number:
            </Text>
            <Text style={styles.visitText2} >  
              168
            </Text>
            <Text style={styles.visitText3} >  
              Proceeed to Room:
            </Text>
            <Text style={styles.visitText4} >  
              Screening
            </Text>
            </View>
          <View style={styles.flexContainer} >
            <View style={styles.apptTime} >   
              <Text style={styles.apptTimeText1}>  
                11:00 AM
              </Text>
              <Text style={styles.apptTimeText2}>  
                Appointment Time
              </Text>        
            </View>
            <View style={styles.waitingHeadcount} >      
              <Text style={styles.waitingHeadcountText1}>  
                01
              </Text>
              <Text style={styles.waitingHeadcountText2}>  
                more patient(s)
              </Text>
            </View>
          </View>
          <View style={styles.showMessage} >      
            <Text style={styles.showMessageText}>  
              Kindly have a seat and wait for your Queue number to be called.
            </Text>
          </View>
          <View style={styles.ProgressCircle} >   
          <ProgressCircle
            percent={50}
            radius={100}
            borderWidth={15}
            color="#00FF00"
            shadowColor="#999"
            bgColor="#fff"
            >
            <Text style={{ fontSize: 25 }}>{'50%'}</Text>
            <Text style={{ fontSize: 15 }}>{'Please wait...'}</Text>
          </ProgressCircle>
          </View>
          </ProgressStep>
          <ProgressStep
            label="Doctor's Consultation"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
          >
             <View style={styles.visitTitle} >
            <Text style={styles.visitText1} >  
              Queue Number:
            </Text>
            <Text style={styles.visitText2} >  
              144
            </Text>
            <Text style={styles.visitText3} >  
              Proceeed to Room:
            </Text>
            <Text style={styles.visitText4} >  
              3J
            </Text>
            </View>
          <View style={styles.flexContainer} >
            <View style={styles.apptTime} >   
              <Text style={styles.apptTimeText1}>  
                11:00 AM
              </Text>
              <Text style={styles.apptTimeText2}>  
                Appointment Time
              </Text>        
            </View>
            <View style={styles.waitingHeadcount} >      
              <Text style={styles.waitingHeadcountText1}>  
                03
              </Text>
              <Text style={styles.waitingHeadcountText2}>  
                more patient(s)
              </Text>
            </View>
          </View>
          <View style={styles.showMessage} >      
            <Text style={styles.showMessageText}>  
              Kindly have a seat and wait for your Queue number to be called.
            </Text>
          </View>
          <View style={styles.ProgressCircle} >   
          <ProgressCircle
            percent={75}
            radius={100}
            borderWidth={15}
            color="#00FF00"
            shadowColor="#999"
            bgColor="#fff"
            >
            <Text style={{ fontSize: 25 }}>{'75%'}</Text>
            <Text style={{ fontSize: 15 }}>{'Please wait...'}</Text>
          </ProgressCircle>
          </View>
          </ProgressStep>
          <ProgressStep
            label="Complete"
            onSubmit={this.onSubmitSteps}
            scrollViewProps={this.defaultScrollViewProps}
          >
            <View style={styles.ProgressCircle} >   
            <ProgressCircle
            percent={100}
            radius={100}
            borderWidth={15}
            color="#00FF00"
            shadowColor="#999"
            bgColor="#fff"
            >
            <Text style={{ fontSize: 25 }}>{'100%'}</Text>
          </ProgressCircle>
          </View>
          <View style={styles.completeTitle} >
          <Text style={styles.completeText} >  
          Proceed to the waiting area for further instructions.
          </Text>
          </View>
          <View style={styles.showMessage} >      
            <Text style={styles.showMessageText}>  
             Please rate your visit today.
            </Text>
          </View>
          <Rating
            showRating
            onFinishRating={this.ratingCompleted}
            style={{ paddingVertical: 10}}
            />
          </ProgressStep>
        </ProgressSteps>

      </View> 
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ProgressCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 20,
  },
  visitTitle: {
    textAlign: 'center',
    backgroundColor: '#f1f1f1',
    height: 170,
    alignItems: 'stretch',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  visitText1: {
    textAlign: 'center',
    paddingTop: 20,
    fontSize: 25,
  },
  visitText2: {
    textAlign: 'center',
    paddingBottom: 10, 
    fontSize: 25,
    fontWeight: 'bold',
  },
  visitText3: {
    textAlign: 'center',
    fontSize: 25,
  },
  visitText4: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  flexContainer: {  
    alignItems: 'stretch',
    height: 100,
    backgroundColor: '#f1f1f1',
    flexDirection: 'row',
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
    marginLeft: 5,
    marginRight: 5,
},
  apptTime: {
    height: 100,
    width: '50%',
    justifyContent: 'flex-end',
  },
  apptTimeText1: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  apptTimeText2: {
    textAlign: 'center',
    fontSize: 15,
    margin: 5,
  },
  waitingHeadcount: {
    height: 100,
    width: '50%',
    justifyContent: 'flex-end',
  },
  waitingHeadcountText1: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  waitingHeadcountText2: {
    textAlign: 'center',
    fontSize: 15,
    margin: 5,
  },
  showMessage: {
    height: 50,
    alignItems: 'stretch',
    marginTop: 10,
  },
  showMessageText: {
    textAlign: 'center',
    fontSize: 15,
    margin: 10,
  },
  completeTitle: {
    textAlign: 'center',
    height: 50,
    alignItems: 'stretch',
    margin:20,
  },
  completeText: {
    textAlign: 'center',
    fontSize: 20,
  },
});