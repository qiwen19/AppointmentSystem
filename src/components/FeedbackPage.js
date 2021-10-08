import React from 'react';
import {
    StyleSheet, 
    Text, 
    View, 
    // ImageBackground,
    // Image,
    // TextInput,
    // TouchableOpacity,
} from 'react-native';
// import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

export default class FeedbackPage extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text>FeedbackPage page</Text>
            </View>
        );
            }
        }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(255,255,255)',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
