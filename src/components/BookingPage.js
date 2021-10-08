import React, {Component} from 'react';
import {
    StyleSheet, 
    ImageBackground,
    View,
    Text, 
    TextInput, 
    TouchableOpacity,
    KeyboardAvoidingView,
    Dimensions,
    StatusBar,
} from 'react-native';
import { 
    Form, 
    DatePicker, 
    Picker,
    Container,
    Content
}from "native-base";
 
import Firebase from "../../config/Firebase";
const deviceWidth = Dimensions.get('window').width;
const KEYBOARD_VERTICAL_OFFSET = StatusBar.currentHeight;

export default class BookingPage extends Component{
    constructor(){
		super();
		this.state={
            referredBy:'',
            description:'',
            service:'',
            doctor:'',
            setDate:""
        }
        // this.setDate = this.setDate.bind(this);	
    };
    static navigationOptions = {
        header: null
    };
    addAppt = () => {
        const { referredBy, description, service, doctor, setDate } = this.state;
        var error_count = 0;
        if(setDate == new Date()) {
            alert("Please select a valid date", [{ text: "OK" }], {
                cancelable: false
            });
            error_count += 1;
        }  
        if(doctor.length == 0) {
            alert("Please select your preferred doctor or enter null if you do not have one", [{ text: "OK" }], {
                cancelable: false
            });
            error_count += 1;
        }
        if(service == "") {
            alert("Please select service", [{ text: "OK" }], {
                cancelable: false
            });
            error_count += 1;
        }
        if(description.length == 0) {
            alert("Please enter a description of your condition", [{ text: "OK" }], {
                cancelable: false
            });
            error_count += 1;
        } 
        if(referredBy == "") {
            alert("Please select your referral", [{ text: "OK" }], {
                cancelable: false
            });
            error_count += 1;
        }

        if (error_count == 0) {
            // If no error
            this.createBookingData(Firebase.auth().currentUser.uid, doctor, referredBy, service, description, setDate);
            return true;
        }
    }
        
    createBookingData(uid, doctor, referredBy, service, description, setDate) {
    // Post user creation success method
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    Firebase.database()
      .ref("Appointments/" + uid)
      .child(uid + "_" + date + month + year + hours + min + sec) // Select Feedbacktable with UID and timestamp as PRI KEY
      .set({
        UID: uid,
        doctor: doctor,
        referredBy: referredBy,
        service: service,
        description: description,
        setDate: setDate,
        Date: date + "/" + month + "/" + year,
        Time: hours + ":" + min + ":" + sec
      }) // Insert values into table
      .then(
        alert(
          "Appointment Booked Successfully!",
          [
            {
              text: "OK",
              onPress: () => this.props.navigation.navigate("HomePage")
            }
          ],
          { cancelable: false }
        )
      ) // Post success navigate to HomePage
      .catch(error => alert(error, [{ text: "OK" }], { cancelable: false })); // Catch insert data errors
  }


    render(){
        // console.ignoredYellowBox = ['Setting a timer'];
        return(
            <Container style={styles.container}> 
            <ImageBackground
            source={require("../../assets/background1.jpg")}
            style={{width: "100%", height: "100%"}}
            >
                <KeyboardAvoidingView style={styles.mainContainer}
                behavior="padding" 
                keyboardVerticalOffset={KEYBOARD_VERTICAL_OFFSET}
                enabled
                >
                <Content>

                    <Text style={styles.BookAppt}>Book Appointment</Text>

                    <Form style={styles.Form}>
                        <View style={styles.Placeholder}>
                            <Picker
                                style={{width:'100%'}}
                                selectedValue={this.state.referredBy}
                                onValueChange={(itemValue,itemIndex) => this.setState({referredBy:itemValue})}
                                >
                                <Picker.Item label="Select Referred By" value=""/>
                                <Picker.Item label="GP/ Family Doctor" value="GP/ Family Doctor" />
                                <Picker.Item label="Specialist" value="Specialist"/>
                                <Picker.Item label="Myself" value="Myself"/>
                                <Picker.Item label="None" value="None"/>
                                </Picker>
                        </View>
                        <View style={styles.Placeholder1}>
                            <TextInput
                                multiline={true}
                                numberOfLines={6}
                                scrollEnabled
                                placeholder="Brief description of your condition"
                                placeholderTextColor="rgba(0,42,90,1)"
                                style={styles.Input1}
                                value={this.state.description}
                                onChangeText={(description) => this.setState({description})}                                
                            />
                        </View>
                        <View style={styles.Placeholder}>
                            <Picker
                                style={{width:'100%'}}
                                selectedValue={this.state.service}
                                onValueChange={(itemValue,itemIndex) => this.setState({service:itemValue})}
                                >
                                <Picker.Item label="Select a service" value=""/>
                                <Picker.Item label="Anesthesiology" value="Anesthesiology" />
                                <Picker.Item label="Dentistry" value="Dentistry"/>
                                <Picker.Item label="Emergency" value="Emergency"/>
                                <Picker.Item label="Family Medicine" value="Family Medicine"/>
                                <Picker.Item label="General Surgery" value="General Surgery"/>
                                <Picker.Item label="General Consultation" value="General Consultation"/>
                                <Picker.Item label="Hand Surgery" value="Hand Surgery"/>
                                <Picker.Item label="Infectious Disease" value="Infectious Disease"/>
                                <Picker.Item label="Medical Oncology " value="Medical Oncology "/>
                            </Picker>
                        </View>
                        <View style={styles.Placeholder}>
                            <TextInput
                                placeholder="Preferred Doctor"
                                placeholderTextColor="rgba(0,42,90,1)"
                                secureTextEntry={false}
                                style={styles.Input}
                                value={this.state.doctor}
                                onChangeText={(doctor) => this.setState({doctor})} 
                            />
                        </View>

                        <View style={styles.Placeholder}>
                            <DatePicker 
                                style={styles.Placeholder1}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                minDate="28-11-2019"
                                placeHolderText="Select date"
                                textStyle={{ color: "black"}}
                                placeHolderTextStyle={{ color: "rgba(0,42,90,1)" }}
                                // value={this.state.setDate}
                                // onDateChange={this.setDate}
                                onDateChange={setDate => this.setState({ setDate: setDate })}
                                disabled={false}
                            />
                        </View>
                        
                        <TouchableOpacity
                        //onPress={() => this.props.navigation.navigate("HomePage")}
                        onPress={()=> {this.addAppt()}}
                        style={styles.bookBtn}
                        >
                            <Text style={styles.text2}>Submit</Text>
                        </TouchableOpacity>
                    </Form>

                </Content>
                </KeyboardAvoidingView>
            </ImageBackground>
            </Container> 
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: "rgb(255,255,255)",
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainContainer: {
      flex: 1, 
    },
    imageLogo: {
        width: 75,
        height: 75,
        marginTop: "7%",
        marginLeft: "auto",
        marginRight: "auto",
    },
    BookAppt: {
        color: "rgba(0,42,90,1)",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 10,
        marginLeft: "auto",
        marginRight: "auto",
    },
    Reminders: {
        color: "rgba(0,42,90,1)",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 10,
        marginLeft: "auto",
        marginRight: "auto",
    },
    Form: {
        marginTop: 5,
        // backgroundColor: "rgba(251,247,247,1)",
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
    },
    Placeholder: {
        width: "100%",
        height: 45,
        backgroundColor: 'rgba(156,158,155,0.5)',
        opacity: 1,
        borderRadius: 5,
        flexDirection: "row",
        marginTop: 15,
        // marginLeft: "auto",
        // marginRight: "auto",
    },
    Placeholder1: {
        width: "100%",
        height: 100,
        backgroundColor: 'rgba(156,158,155,0.5)',
        opacity: 1,
        borderRadius: 5,
        flexDirection: "row",
        marginTop: 15,
        // marginLeft: "auto",
        // marginRight: "auto",
    },
    Input: {
        height: 30,
        color: "rgba(0,42,90,1)",
        flex: 1,
        marginRight: 11,
        marginLeft: 18,
        marginTop: 8,
    },
    Input1: {
        height: 80,
        color: "rgba(0,42,90,1)",
        flex: 1,
        marginRight: 11,
        marginLeft: 18,
        marginTop: 8,
    },
    bookBtn: {
        width: "100%",
        height: 45,
        backgroundColor: "rgba(0,79,173,1)",
        borderRadius: 5,
        justifyContent: "center",
        marginTop: 30,
        marginLeft: "auto",
        marginRight: "auto",
    },
    text2: {    // Text - Sign Up
        color: "rgba(255,255,255,1)",
        alignSelf: "center",
        fontWeight: "bold",
    },
    text3: { // Text - Already have an account? Login!
        marginTop: "3%",
        marginLeft: "auto",
        marginRight: "auto",
        // width: "80%",
        // height: 25,
        color: "rgba(255,255,255,1)",
        textDecorationLine: "underline",
    }
});
