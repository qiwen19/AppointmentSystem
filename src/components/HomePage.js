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

export default class HomePage extends React.Component {
    static navigationOptions = {
        header: null
    };
    constructor(){
		super();
		this.state={
            
        }
    };
    render(){ 
        return(  //<ScrollView contentContainerStyle = {styles.container}>
            <View style = {styles.container}>
                <ImageBackground
                style={styles.rect}
                source={require("../../assets/background1.jpg")}
                >
                <Text style={styles.HomePage}><FontAwesome>{apptIcon}</FontAwesome>  My Appointment</Text>
                <ScrollView>
                <Card containerStyle={styles.card}>
                    <Text><Text style={styles.time}>Status: </Text><Text style={styles.notes}>Approved</Text></Text>
                    <Text><Text style={styles.time}>Booking ID: </Text><Text style={styles.notes}>1234567890-A</Text></Text>
                    <Text><Text style={styles.time}>Venue: </Text><Text style={styles.notes}>Your House</Text></Text>
                    <Text><Text style={styles.time}>Date: </Text><Text style={styles.notes}>15 Nov 2020</Text></Text>
                    <Text><Text style={styles.time}>Time: </Text><Text style={styles.notes}>1400</Text></Text>
       

                    <Divider style={{ backgroundColor: 'grey', marginVertical:20}} />
                    
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Button
                    buttonStyle={{borderRadius: 3, marginLeft: 0, marginRight: 0, marginBottom: 0, width: 90, backgroundColor: "#ea5744"}}
                    title='Cancel' />
                    <Button style={styles.modifyBtn}
                    buttonStyle={{borderRadius: 3, marginLeft: 0, marginRight: 0, marginBottom: 0, width: 90, backgroundColor: "#a1caf1"}}
                    title='Modify' />
                    <Button style={styles.viewBtn}
                    buttonStyle={{borderRadius: 3, marginLeft: 0, marginRight: 0, marginBottom: 0, width: 90, backgroundColor: "#4c97df"}}
                    title='View'
                    onPress={() => this.props.navigation.navigate('ViewAppt')} />
                    </View>
			    </Card>
                </ScrollView> 
                </ImageBackground>          
            </View>
        );
    }
}


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
    // cancelBtn: {
    //     backgroundColor: "#ea5744",
    //     justifyContent: "center",
    // },
    // modifyBtn: {
    //     backgroundColor: "#a1caf1",
    // },
    // viewBtn: {
    //     backgroundColor: "#1bc4a6",
    // }
});