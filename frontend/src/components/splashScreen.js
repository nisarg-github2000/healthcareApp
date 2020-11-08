import React, { Component } from 'react';
import {View,Image,Text,StyleSheet} from 'react-native';
import io from "socket.io-client";

import Logo from "../../resources/phone.png";
import appLogo from "../../resources/hospital-sign.png";


class splashScreen extends Component {

    constructor(props){
        super(props);
        setTimeout(()=>
        {
            this.props.navigation.navigate("SelectRole");
        },5000);
    }

    componentDidMount(){
        const socket = io("http://192.168.0.104:3000");
    }

    render() {
        return (
            <View style={styles.container}>
                <View></View>
                <Image source={Logo} style={styles.splashLogo}/>
                <View style={{flexDirection:"row"}}>
                    <Image source={appLogo} style={{
                        width:29,
                        height:29,
                        marginTop:-23,
                        marginRight:5
                    }}/>
                    <Text style={{marginTop:-30,fontSize:30,fontWeight:"bold",color:"#6a6868"}}>Medo</Text>
                </View>
                <Text style={styles.splashText}>
                 Your medical appointments just a phone tap away
                </Text>
            </View>
        )
    }
}

export default splashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white",
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    splashText: {
        color:"#212121",
        textAlign:"center",
        fontFamily: 'poppins',
        fontSize: 17,
        width:"80%",
        marginTop: 29,
        marginBottom: 10,
        fontWeight: '300',
    },
    splashLogo: {
        flex:1,
        maxWidth: '60%',
        maxHeight: '40%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})