//About Page
import React, {Component} from 'react';
import {
    StyleSheet, 
    ImageBackground,
    View,
    Text, 
    ScrollView, 
    Image, 
    TouchableOpacity
    // Form
} from 'react-native';
import { 
    // Header, DatePicker, Title, Content, Button, Icon, Right, Body, Left, Picker, 
    Form, Picker
}from "native-base";
// import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

export default class AboutPage extends React.Component{
    static navigationOptions = {
        title: "About Us",
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
    
    
      render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                style={styles.rect}
                source={require("../../assets/background1.jpg")}
                >
                    <ScrollView contentContainerStyle={styles.container1}>
                    <Image
                        source={require("../../assets/aboutus.jpg")}
                        
                        style={styles.imageLogo}
                    /> 
                    <Text style={styles.AboutPara}>
                        <Text>
                        We are a group of students from SIT ICT who is doing a booking appointment application. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                    </Text>  
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
        justifyContent: "center",
        // justifyContent: 'flex-start',
    },
    rect: {
        //width: '100%',
        // height: 200, 
        //position: "absolute", 
        //left: 0, 
        //right: 0, 
        //top: 0, 
        //bottom: 0
    },
    About: {
        color: "rgba(0,42,90,1)",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: "5%",
        marginLeft: 10,
        marginRight: 10,
    },
    AboutPara: {
        color: "rgba(0,42,90,1)",
        alignItems: 'center',
        fontSize: 12,
        marginTop: 10,
        marginLeft: "5%",
        marginRight: "5%",
    },
    imageLogo: {
        height: 200, 
        width: 330,
        marginTop: "5%",
        paddingTop: 0,
        marginLeft: "auto",
        marginRight: "auto",
        resizeMode: 'contain',
    },
    // icon2: {
    //     color: "rgba(0,42,90,1)",
    //     fontSize: 20,
    //     marginLeft: 120,
    //     marginTop: 2,
    // },
    
    // Placeholder: {
    //     width: "80%",
    //     height: 45,
    //     backgroundColor: "rgba(251,247,247,0.25)",
    //     opacity: 1,
    //     borderRadius: 5,
    //     flexDirection: "row",
    //     marginTop: 15,
    //     marginLeft: "auto",
    //     marginRight: "auto",
    // },
    // Input: {
    //     height: 30,
    //     color: "rgba(0,42,90,1)",
    //     flex: 1,
    //     marginRight: 11,
    //     marginLeft: 18,
    //     marginTop: 8,
    // },
   
});
