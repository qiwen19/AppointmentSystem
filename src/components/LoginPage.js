import React from 'react';
import {
    StyleSheet, 
    Text, 
    View, 
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
    KeyboardAvoidingView,
    Dimensions,
    StatusBar
} from 'react-native';

import Firebase from "../../config/Firebase";
import { Container, Content, Icon, Item } from "native-base";
// import { Input } from 'react-native-elements';

const deviceWidth = Dimensions.get('window').width;
const KEYBOARD_VERTICAL_OFFSET = 250 + StatusBar.currentHeight;

export default class LoginPage extends React.Component {
    state = {
        hidden: true,
        email: "",
        password: "",
    };

    onIconPress = () => {
        this.setState({ hidden:!this.state.hidden });
    };

    handleLogin = () => {
        // Method called when LOGIN button is pressed
        const { email, password } = this.state;
        var error_count = 0;
        if (email.length == 0 && password.length == 0) {
          // If username and password left blank
            alert(
                "Username and Password are required fields. Enter your username and password.",
                [{ text: "OK" }],
                { cancelable: false }
            );
        error_count += 1;
        } else if (email.length == 0) {
          // If username left blank
            alert(
                "Username is a required field. Enter your username.",
                [{ text: "OK" }],
                { cancelable: false }
            );
            error_count += 1;
        } else if (password.length == 0) {
            // If password left blank
            alert(
                "Password is a required field. Enter your password.",
                [{ text: "OK" }],
                { cancelable: false }
            );
            error_count += 1;
        }
    
        if (error_count == 0) {
            // If no errors
            Firebase.auth()
            .signInWithEmailAndPassword(email, password) // Sign in to firebase using provided values
            .then(() => {
            this.props.navigation.navigate("HomePage");
            }) // Post success navigate to HomePage
            .catch(error => alert(error, [{ text: "OK" }], { cancelable: false })); // Catch login errors (Wrong user/password)
        }
      };
    static navigationOptions = {
        header: null
    };
    
    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('HomePage');
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
                <Content style={styles.content}>
                    <Image
                        source={require("../../assets/login2.png")}
                        resizeMode="contain"
                        style={styles.imageLogo}
                    /> 
                   
                   <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor="rgba(114,116,112,1)"
                            value={this.state.email}
                            returnKeyType="next"
                            onSubmitEditing={() => this.passwordInput.focus()}
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="email-address"
                            style={styles.input}
                            onChangeText={email => this.setState({ email })}
                        />  
                    </View>
                    
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor="rgba(114,116,112,1)"
                            value={this.state.password}
                            secureTextEntry={this.state.hidden}
                            returnKeyType="go"
                            style={styles.input}
                            onChangeText={password => this.setState({ password })}
                        />  
                        <Icon 
                        name={this.state.hidden? 'eye-off' : 'eye'}
                        onPress={this.onIconPress}
                        />
                    </View> 

                    <TouchableOpacity 
                    onPress = {
                        () => this.props.navigation.navigate('ForgetPassword')
                    }>
                    <Text style={styles.forgetPasswordText}>
                        Forgot Password?
                    </Text>
                    </TouchableOpacity>

                    
                    <TouchableOpacity
                    // onPress={
                        // () => this.props.navigation.navigate('HomePage')
                        // this._signInAsync
                    // }
                    onPress={this.handleLogin}
                    style={styles.loginBtn}>
                        <Text style={styles.loginText}>LOG IN</Text>
                    </TouchableOpacity>
                    
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
    },
    mainContainer: {
      flex: 1, 
    },
    imageLogo: {
        marginTop: "8%",
        width: "60%", 
        opacity: .6,
        marginLeft: "auto",
        marginRight: "auto",
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
        // borderBottomWidth: 0,
        paddingLeft: '5%',
        paddingRight: '5%',
        borderRadius: 20, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        flex: 1
    },
    forgetPasswordText: {       // Text - Forgot Password 
        color: "black",
        width: "90%",
        textAlign: "right",
        marginTop: "2%",
        textDecorationLine: "underline",
    },
    loginBtn: {
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
    loginText: {
        flex: 1,
        alignSelf: "center",
        justifyContent: "center",
        textAlign: 'center',
        color: 'white',
        fontWeight: "bold",
    },
});
