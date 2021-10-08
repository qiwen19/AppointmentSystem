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

export default class ProfilePage extends React.Component{
    static navigationOptions = {
        title: "My Profile",
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
    
    render(){
        return(
            <View style={styles.container}>
                <ImageBackground
                style={styles.rect}
                source={require("../../assets/background1.jpg")}
                >
                <View style={styles.header}>
                   <Image style={styles.avatar}
                    source={require("../../assets/profilepic.jpg")} 
                    />
                    <Text style={styles.name}>
                        Mary Doe
                    </Text>
                </View>
                <TextInput
                    placeholder="Mobile Number"
                    placeholderTextColor="rgba(156,158,155,1)"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    autoCapitalize="none"
                    autoCorrect={false}
                    // keyboardType="email-address"
                    style={styles.input}
                />    
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="rgba(156,158,155,1)"
                    returnKeyType="go"
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                />  
                <TouchableOpacity
                onPress={
                    () => this.props.navigation.navigate('HomePage')
                }
                style={styles.profileSubmitBtn}>
                    <Text style={styles.profileSubmitText}>SAVE</Text>
                </TouchableOpacity>
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
    avatar: {
        borderRadius: 100,
        width: 200,
        height: 200,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        marginTop:10,
    },
    name: {
        fontWeight: "700",
        textAlign: "center",
        marginBottom:"5%",
    },
    input: {
        height: 40, 
        width: '80%',
        backgroundColor: 'rgba(156,158,155,0.5)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    profileSubmitBtn: {
        width: '80%',
        backgroundColor: '#6cace4',
        paddingVertical: 10,
        fontWeight: '700',
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
    },
    profileSubmitText: {    // Text - Sign In
        color: "rgba(255,255,255,1)",
        alignSelf: "center",
        fontWeight: "bold",
    },
});
