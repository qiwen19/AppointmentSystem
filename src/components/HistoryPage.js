import React from 'react';
import {
    StyleSheet, 
    // Text, 
    View, 
    ImageBackground,
    ScrollView,
    Image,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
    KeyboardAvoidingView,
} from 'react-native';
import { ListItem, Button, Icon, Text, Card, Divider } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export const apptIcon = (<FontAwesome name="calendar" size={22} color="black" />);

// import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
// import { ScrollView } from 'react-native-gesture-handler';

export default class HistoryPage extends React.Component{
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
 
      constructor(props) {
        super(props);
        this.state = {
          tableHead: [''],
          tableTitle: ['Venue:', 'Date:', 'Time:', 'Booking ID:', 'Remarks:'],
          tableData: [
            ['Clinic 1A'],         // Database
            ['02-June-2019'],       // Database
            ['03:00 PM'],          // Database
            ['1234-9876'],         // Database
            ['Discharged.']    // Database
          ]
        }
      }

    
    render() {
      const state = this.state;
     return (

      <View style = {styles.container}>
      <ImageBackground
      style={styles.rect}
      source={require("../../assets/background1.jpg")}
      >
      <Text style={styles.HomePage}>My History</Text>
      <ScrollView>
      <Card containerStyle={styles.card}>
          <Text><Text style={styles.time}>Venue: </Text><Text style={styles.notes}>Clinic 1A</Text></Text>
          <Text><Text style={styles.time}>Date: </Text><Text style={styles.notes}>02-June-2019</Text></Text>
          <Text><Text style={styles.time}>Time: </Text><Text style={styles.notes}>03:00 PM</Text></Text>
          <Text><Text style={styles.time}>Booking ID: </Text><Text style={styles.notes}>1234-9876</Text></Text>
          <Text><Text style={styles.time}>Remarks: </Text><Text style={styles.notes}>Discharged.</Text></Text>
          <Divider style={{ backgroundColor: 'grey', marginVertical:5}} />
      </Card>
      </ScrollView> 
      </ImageBackground>          
  </View>
      // <View style={styles.Container}>  
      // <Text style={styles.History}>My History</Text>
      
        
      // <View style={styles.apptDetails}>
      // <View style={styles.tableStyle}>
      //     <Table borderStyle={{borderWidth: 0}}>
      //         <TableWrapper style={styles.wrapper}>
      //         <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
      //         <Col data={state.tableTitle} style={styles.title} heightArr={[40]} textStyle={styles.text1}/>
      //         <Rows data={state.tableData} heightArr={[40]} widthArr={[230]} style={styles.row} textStyle={styles.text2}/>
      //         </TableWrapper>
      //       </Table>
      //   </View>
      //   </View>
      //   </View>
            
    //     {/* <View style={styles.numberBox}>
    //         <Text style={styles.number}>{itemNumber}</Text>
    //     </View> */}
        
    //     {/* <TouchableOpacity style={styles.icon}>
    //         <View>
    //         <Icon
    //             raised
    //             name="shopping-cart"
    //             type="font-awesome"
    //             color="#e3e3e3" 
    //             size={30} 
    //             onPress={() => this.goToStore()}
    //             containerStyle={{ backgroundColor: "#FA7B5F" }}
    //         />
    //         </View>
    //     </TouchableOpacity> */}
      );}}
    
      const styles = StyleSheet.create({
        container: {
            // flex: 1,
            backgroundColor: 'white',
            // alignItems: 'center',
            // justifyContent: 'center',
            width: '100%',
        },
        rect: {
            width: "100%",
            height: "100%",
        },
        HomePage: {
            color: "rgba(0,42,90,1)",
            fontSize: 24,
            fontWeight: "bold",
            marginTop: 10,
            marginLeft: "auto",
            marginRight: "auto",
        },
        card: {
            backgroundColor: "rgba(255,245,238,0.7)",
            borderWidth:1,
            borderColor: "#fce2d1",
            width: "90%",
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
      // container: {
      //   flex: 1,
      //   backgroundColor: "white",
      //   paddingVertical: 50,
      //   position: "relative",
      //   // justifyContent: 'center',
      //   width: '100%',
      //  },
      //  rect: {
      //   width: "100%",
      //   height: "100%",
      // },
      //  apptDetails: {
      //   textAlign: 'center',
      //   backgroundColor: '#f1f1f1',
      //   height: 250,
      //   alignItems: 'stretch',
      //   borderWidth: 1,
      //   borderRadius: 2,
      //   borderColor: '#ddd',
      //   borderBottomWidth: 0,
      //   shadowColor: '#000',
      //   shadowOffset: { width: 0, height: 2 },
      //   shadowOpacity: 0.8,
      //   shadowRadius: 2,
      //   elevation: 4,
      //   marginLeft: 5,
      //   marginRight: 5,
      //   marginTop: 10,
      // },
    
      // tableStyle: { flex: 1, padding: 16, paddingTop: 30, },
      // head: {  height: 40, },
      // wrapper: { flexDirection: 'row' },
      // title: { flex:1 },
      // row: { height: 40, },
      // text1: { textAlign: 'right', fontSize: 25, },
      // text2: { textAlign: 'left', fontWeight: 'bold', fontSize: 25, paddingLeft:10, flexDirection:'row', },
    //   title: {
    //     fontSize: 20,
    //     color: "#fff",
    //     textAlign: "center",
    //     marginBottom: 10
    //   },
      loader: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
      },
      list: {
        paddingVertical: 5,
        margin: 3,
        flexDirection: "row",
        backgroundColor: "#f9f9f9",
        justifyContent: "flex-start",
        alignItems: "center",
        zIndex: -1
      },
      lightText: {
        color: "black",
        width: 200,
        paddingLeft: 15,
        fontSize: 12
       },
      line: {
        height: 0.5,
        width: "100%",
        backgroundColor:"rgba(255,255,255,0.5)"
      },
      icon: {
        position: "absolute",  
        bottom: 20,
        width: "100%", 
        left: 290, 
        zIndex: 1
      },
    //   numberBox: {
    //     position: "absolute",
    //     bottom: 75,
    //     width: 30,
    //     height: 30,
    //     borderRadius: 15,  
    //     left: 330,
    //     zIndex: 3,
    //     backgroundColor: "#e3e3e3",
    //     justifyContent: "center",
    //     alignItems: "center"
    //   },
      History: {
        color: "rgba(0,42,90,1)",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 10,
        marginLeft: "auto",
        marginRight: "auto",
    },
    });