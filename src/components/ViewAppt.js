import * as React from 'react';

import { Button, StyleSheet, Text, View, Image,  SafeAreaView, ScrollView, TouchableOpacity  } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class ViewAppt extends React.Component {
  static navigationOptions = {
    title: 'View Appointment',
    headerStyle: {
      backgroundColor: '#a6dced',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      tableHead: [''],
      tableTitle: ['Venue:', 'Date:', 'Time:', 'Booking ID:', 'Remarks:'],
      tableData: [
        ['Clinic 1A'],        //Database
        ['11-Nov-2019'],      //Database
        ['11:00 AM'],         //Database
        ['1234-9876'],        //Database
        ['Follow-up appt.']    //Database
      ]
    }
  }

   render() {
     const state = this.state;
    return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.apptDetails}>
        <View style={styles.tableStyle}>
            <Table borderStyle={{borderWidth: 0}}>
                <TableWrapper style={styles.wrapper}>
                <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
                <Col data={state.tableTitle} style={styles.title} heightArr={[40]} textStyle={styles.text1}/>
                <Rows data={state.tableData} heightArr={[40]} widthArr={[190]} style={styles.row} textStyle={styles.text2}/>
                </TableWrapper>
              </Table>
          </View>
          </View>
          <View style={styles.qrDetails}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('VisitInProgress', {
              /* image params go here */
            });
          }}>
          <Image source={require('../../assets/2102QRCode.png')} />
          </TouchableOpacity>
           
          <Text style={styles.belowText}>  
            Please scan the QR Code at the kiosk.
          </Text>
          </View>
        </ScrollView>
    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    
  },
  apptDetails: {
    textAlign: 'center',
    backgroundColor: '#f1f1f1',
    height: 300,
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

  tableStyle: { flex: 1, padding: 16, paddingTop: 30, },
  head: {  height: 40, },
  wrapper: { flexDirection: 'row' },
  title: { flex:1 },
  row: { height: 40, },
  text1: { textAlign: 'right', fontSize: 25, },
  text2: { textAlign: 'left', fontWeight: 'bold', fontSize: 25, paddingLeft:10, flexDirection:'row', },

  titleText1: {
    fontSize: 25,
    textAlign: 'left',
    padding: 15,
  },

  qrDetails: {
    height: 300,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: null,
    height: null,
    resizeMode: 'contain',
  },

  belowText: {
    textAlign: 'center',
    fontSize: 15,
    margin: 10,
  },

});
  