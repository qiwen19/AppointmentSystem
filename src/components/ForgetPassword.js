import React from 'react';
import {
    StyleSheet, 
    ImageBackground,
    View,
    Text, 
    Image, 
    TextInput,
    KeyboardAvoidingView,
    Dimensions,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import { Container, Content, Icon } from "native-base";
// import { Input } from 'react-native-elements';

const deviceWidth = Dimensions.get('window').width;
const KEYBOARD_VERTICAL_OFFSET = StatusBar.currentHeight;

import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

export default class LoginPage extends React.Component {
    static navigationOptions = {
        header: null
    };

    render(){ 
        // console.disableYellowBox = true;
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
                    {/* <View style={styles.section}> */}
                        <Image
                            source={require("../../assets/login2.png")}
                            resizeMode="contain"
                            // style={{width: 200, height: 200, resizeMode: 'cover', marginTop: 300}}
                            style={styles.imageLogo}
                        /> 
                        <EvilIconsIcon name="lock" style={styles.lockIcon} />
                        <Text style={styles.title}>FORGOT YOUR PASSWORD?</Text>
                        <Text style={styles.desc}>
                            Enter your email address and we will send you a link to reset your
                            password.
                        </Text>

                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder="Email: eg. StanleyTan@gmail.com"
                                placeholderTextColor="rgba(114,116,112,1)"
                                returnKeyType="go"
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="email-address"
                                inputContainerStyle={styles.input}
                            />  
                        </View>

                        <TouchableOpacity
                        onPress={
                            () => this.props.navigation.navigate('LoginRegisterTab')
                        }
                        style={styles.resetPWBtn}>
                            <Text style={styles.resetPwdText}>RESET PASSWORD</Text>
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
    title: {
      color: "rgba(0,42,90,1)",
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 5,
      marginLeft: "auto",
      marginRight: "auto",
    },
    desc: {
      width: "80%",
      color: "rgba(0,42,90,1)",
      fontSize: 12,
      lineHeight: 20,
      marginTop: 10,
      marginBottom: 15,
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: 'center'
    },
    lockIcon: {
      color: "rgba(0,42,90,1)",
      fontSize: 80,
      height: 80,
      width: 80,
      marginTop: 40,
      marginLeft: "auto",
      marginRight: "auto",
    },
    forgotPassword: {
        width: "90%",
        textAlign: "right",
        marginTop: '3%',
    },
    forgetPasswordText: {       // Text - Forgot Password 
        color: "black",
        width: "90%",
        textAlign: "right",
        textDecorationLine: "underline",
    },
    resetPWBtn: {
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
    resetPwdText: {    // Text - Reset Password
        color: "rgba(255,255,255,1)",
        flex: 1,
        alignSelf: "center",
        justifyContent: "center",
        textAlign: 'center',
        // color: 'white',
        fontWeight: "bold",
    },
});
