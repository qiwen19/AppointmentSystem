import React from 'react';
import {
    StyleSheet, 
    Text, 
    View, 
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
// import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

export default class ChangePassword extends React.Component{
    static navigationOptions = {
        title: "Change Password",
        headerStyle: {
            backgroundColor: 'rgba(49,132,205,0.7)',
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
    render(){
        return(
            <View style={styles.container}>
            <ImageBackground
                style={styles.rect}
                source={require("../../assets/background1.jpg")}
                >
                <TextInput
                    placeholder="Current Password"
                    placeholderTextColor="rgba(156,158,155,1)"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input1}
                />    
                <TextInput
                    placeholder="New Password"
                    placeholderTextColor="rgba(156,158,155,1)"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    // keyboardType="email-address"
                    style={styles.input2}
                />  
                <TextInput
                    placeholder="Confirm Password"
                    placeholderTextColor="rgba(156,158,155,1)"
                    returnKeyType="go"
                    style={styles.input2}
                /> 
                <View style={styles.sect}> 
                    <TouchableOpacity
                    onPress={
                        () => this.props.navigation.navigate('HomePage')
                    }
                    style={styles.passwordSubmitBtn}>
                        <Text style={styles.passwordSubmitText}>SAVE</Text>
                    </TouchableOpacity>
                </View>
                </ImageBackground>
            </View>
        );
            }
        }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'rgb(255,255,255)',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    rect: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    input1: {
        height: 40, 
        width: '80%',
        backgroundColor: 'rgba(156,158,155,0.5)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: "10%"
    },
    input2: {
        height: 40, 
        width: '80%',
        backgroundColor: 'rgba(156,158,155,0.5)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    passwordSubmitBtn: {
        width: '80%',
        backgroundColor: '#6cace4',
        paddingVertical: 10,
        fontWeight: '700',
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
    },
    sect: {
        position: 'absolute',
        bottom: 0,
        marginBottom: "10%",
        width: "100%",
    },
    passwordSubmitText: {    // Text - Sign In
        color: "rgba(255,255,255,1)",
        alignSelf: "center",
        fontWeight: "bold",
        justifyContent: 'center',
    },
});
