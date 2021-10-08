import React from 'react';
import {
    StyleSheet, 
    ImageBackground,
    View,
    Text, 
    TextInput, 
    KeyboardAvoidingView,
    Dimensions,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import { Container, Content, Icon } from "native-base";
// import { Input } from 'react-native-elements';
import Firebase from "../../config/Firebase";

const deviceWidth = Dimensions.get('window').width;
const KEYBOARD_VERTICAL_OFFSET = 250 + StatusBar.currentHeight;

export default class registerPage extends React.Component{
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        cpassword: "",
        NRIC: "",
        mobile: "",
        profilePic: "profilepic.jpg",
        hidden: true,
        hidden1: true
    };

    onIconPress1 = () => {
        this.setState({ hidden1:!this.state.hidden1 });
    };

    onIconPress = () => {
        this.setState({ hidden:!this.state.hidden });
    };

    handleSignUp = () => {
        // Method called when SIGN UP button is pressed
        const { email, firstName, lastName, NRIC, mobile, password, cpassword, profilePic } = this.state;
        var error_count = 0;

        if (password.length < 6) {
            // If password less than 6 characters
            alert("Password has to be at least 6 characters.", [{ text: "OK" }], {
                cancelable: false
            });
            error_count += 1;
        }
        if (password != cpassword) {
            // If password and confirm password field do not match
            alert("Password do not match.", [{ text: "OK" }], { cancelable: false });
            error_count += 1;
        }
        if (mobile.length < 8 || isNaN(mobile)) {
            // If mobile less than 8 number
            alert("Please enter valid mobile number.", [{ text: "OK" }], {
                cancelable: false
            });
            error_count += 1;
        }
        if (NRIC.length < 9) {
            // If NRIC less than 9 letters
            alert("This is not a valid NRIC.", [{ text: "OK" }], {
                cancelable: false
            });
            error_count += 1;
        }
        if (lastName.length < 3) {
            // If lastname less than 3 letters
            alert("Please enter valid last name.", [{ text: "OK" }], {
                cancelable: false
            });
            error_count += 1;
        }
        if (firstName.length < 3) {
            // If firstname less than 3 letters
            alert("Please enter valid first name.", [{ text: "OK" }], {
                cancelable: false
            });
            error_count += 1;
        }
    
        if (error_count == 0) {
          // If no error
            Firebase.auth()
            .createUserWithEmailAndPassword(email, password) // Create user using email and password
            .then(data =>
                this.createUserData(data.user.uid, email, firstName, lastName, mobile, NRIC, password, profilePic)
            ) // Post success call method
            .catch(error => alert(error, [{ text: "OK" }], { cancelable: false })); // Catch user creation error
        }
    };
    
    createUserData(uid, email, firstName, lastName, mobile, NRIC, password, profilePic) {
        // Post user creation success method
        Firebase.database()
        .ref("User/")
        .child(uid) // Select User table with generated User id as PRI KEY
        .set({ email: email, firstName: firstName, lastName: lastName, mobile: mobile, NRIC: NRIC, password: password, profilePic: profilePic}) // Insert values into table
        .then(() => alert("Account created successfully!", [{ text: "OK" }], {
            cancelable: false
        })) 
        .catch(error => alert(error, [{ text: "OK" }], { cancelable: false })); // Catch insert data errors
    }
    static navigationOptions = {
        header: null
    };
    render(){
        console.disableYellowBox = true;
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
                    
                    <View style={styles.section}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder="First Name"
                                placeholderTextColor="rgba(114,116,112,1)"
                                style={styles.input}
                                value={this.state.firstName}
                                onChangeText={firstName => this.setState({ firstName })}
                                autoCompleteType="off"
                                returnKeyType="next"
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder="Last Name"
                                placeholderTextColor="rgba(114,116,112,1)"
                                style={styles.input}
                                value={this.state.lastName}
                                onChangeText={lastName => this.setState({ lastName })}
                                autoCompleteType="off"
                                returnKeyType="next"
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder="NRIC"
                                placeholderTextColor="rgba(114,116,112,1)"
                                style={styles.input}
                                value={this.state.NRIC}
                                onChangeText={NRIC => this.setState({ NRIC })}
                                autoCompleteType="off"
                                returnKeyType="next"
                            />
                        </View>
                    </View>

                    <View style={styles.section}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder="Email"
                                placeholderTextColor="rgba(114,116,112,1)"
                                style={styles.input}
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="email-address"
                                value={this.state.email}
                                onChangeText={email => this.setState({ email })}
                                autoCompleteType="off"
                                returnKeyType="next"
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder="Mobile Number"
                                placeholderTextColor="rgba(114,116,112,1)"
                                style={styles.input}
                                value={this.state.mobile}
                                onChangeText={mobile => this.setState({ mobile })}
                                autoCompleteType="off"
                                returnKeyType="next"
                            />
                        </View>
                    </View>

                    <View style={styles.section}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder="Password"
                                placeholderTextColor="rgba(114,116,112,1)"
                                secureTextEntry={this.state.hidden1}
                                style={styles.input}
                                value={this.state.password}
                                onChangeText={password => this.setState({ password })}
                                autoCompleteType="off"
                                returnKeyType="next"
                            />
                            <Icon 
                            name={this.state.hidden1? 'eye-off' : 'eye'}
                            onPress={this.onIconPress1}
                            />
                        </View>
                        
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder="Confirm Password"
                                placeholderTextColor="rgba(114,116,112,1)"
                                secureTextEntry={this.state.hidden}
                                style={styles.input}
                                value={this.state.cpassword}
                                onChangeText={cpassword => this.setState({ cpassword })}
                                autoCompleteType="off"
                                returnKeyType="go"
                            />
                            <Icon 
                            name={this.state.hidden? 'eye-off' : 'eye'}
                            onPress={this.onIconPress}
                            />
                        </View>
                        <TouchableOpacity
                        onPress={this.handleSignUp}
                        style={styles.signupBtn}
                        >
                            <Text style={styles.signupText}>SIGN UP</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity>
                            <Text style={styles.text3}>
                                Already have an account? Login!
                            </Text>
                        </TouchableOpacity>
                    </View>
                
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
    section: {
        width: "100%",
        marginTop: "5%",
    },
    inputContainer: {
        flexDirection: 'row',
        height: 40, 
        width: '85%',
        backgroundColor: 'rgba(156,158,155,0.5)',
        marginTop: 10,
        color: '#FFF',
        paddingHorizontal: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '5%',
        paddingRight: '5%',
        borderRadius: 20, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        flex: 1
    },
    signupBtn: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 50,
        width: "85%",
        borderRadius: 2,
        backgroundColor: "#2196f3",
        marginTop: "10%",
        marginLeft: "auto",
        marginRight: "auto",
        paddingVertical: 12,
        borderRadius: 20,
    },
    signupText: {    // Text - Sign Up
        flex: 1,
        alignSelf: "center",
        justifyContent: "center",
        textAlign: 'center',
        color: 'white',
        fontWeight: "bold",
    },
    text3: { // Text - Already have an account? Login!
        marginTop: "3%",
        marginBottom: "10%",
        marginLeft: "auto",
        marginRight: "auto",
        color: "black",
        textDecorationLine: "underline",
    }
});
