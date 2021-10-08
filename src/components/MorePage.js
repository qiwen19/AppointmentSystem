import React from 'react';
import {
    StyleSheet, 
    AsyncStorage,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import { Container, Content, Card, CardItem, Text, Icon, Right, Left, Header } from "native-base";
// import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

{/* <FontAwesome name="home" size={22} color={tintColor} /> */}
// import {Text, TextInput, Button, View, TouchableOpacity} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import { TouchableOpacity } from 'react-native-gesture-handler';

export const bookIcon = (<FontAwesome name="user-circle-o" size={22} color="black" />);
export const passwordIcon = (<FontAwesome name="unlock-alt" size={22} color="black" />);
export const feedbackIcon = (<FontAwesome name="commenting-o" size={22} color="black" />);
export const faqIcon = (<FontAwesome name="question-circle-o" size={22} color="black" />);
export const aboutIcon = (<FontAwesome name="info-circle" size={22} color="black" />);
export const exit = (<FontAwesome name="sign-out" size={22} color="black" />);

export default class RewardPage extends React.Component{
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
    static navigationOptions = {
        header: null
    };
    
    render(){
        
        return(
            <Container>
            <ImageBackground
            source={require("../../assets/background1.jpg")}
            style={{width: "100%", height: "100%"}}
            >
            <Content>
                <Card>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FaqPage')}>
                        <CardItem bordered>
                        <Left>
                            <Icon>{faqIcon}</Icon> 
                            <Text>FAQ</Text>
                        </Left> 
                        <Right style={styles.ArrowHeadStyle} >
                            <Icon name="arrow-forward" button onPress={() => this.props.navigation.navigate('FaqPage')}/>
                        </Right>
                        </CardItem>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AboutPage')}>
                        <CardItem bordered>
                        <Left>
                            <Icon>{aboutIcon}</Icon> 
                            <Text>About Us</Text>
                        </Left>   
                        <Right style={styles.ArrowHeadStyle} >
                            <Icon name="arrow-forward" button/>  
                        </Right>
                        </CardItem>
                    </TouchableOpacity>

                    <TouchableOpacity onPress = {this._signOutAsync}>
                        <CardItem bordered>
                        <Left>
                            <Icon>{exit}</Icon> 
                            <Text>Sign Out</Text>
                        </Left> 
                        <Right style={styles.ArrowHeadStyle} >
                            <Icon name="arrow-forward" button/>  
                        </Right>
                        </CardItem>
                    </TouchableOpacity>
                </Card>
            </Content>
            </ImageBackground>
        </Container>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(255,255,255)',
    },
    listContent: {
        padding: 10, 
        color: "grey",
        flexGrow: 1, 
    },
    ArrowHeadStyle: {
        marginLeft: "auto",
        marginRight: "5%",
        fontSize: 20,  
        justifyContent: 'flex-end',
      },
});
