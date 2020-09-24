import React, { Component } from 'react';
import {View,Image,Text,StyleSheet} from 'react-native';
import io from "socket.io-client";

import Logo from "../../resources/splash_logo.png";


class splashScreen extends Component {

    constructor(props){
        super(props);
        setTimeout(()=>
        {
            this.props.navigation.navigate("SelectRole");
        },900);
    }

    componentDidMount(){
        const socket = io("http://192.168.0.104:3000");
    }

    render() {
        return (
            <View style={styles.container}>
                <View></View>
                <Image source={Logo} style={styles.splashLogo}/>
                <Text style={styles.splashText}>
                Professional service provider at your tap
                </Text>
            </View>
        )
    }
}

export default splashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#171717",
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    splashText: {
        color:"#FFFFFF",
        fontFamily: 'poppins',
        fontSize: 17,
        marginTop: 29,
        marginBottom: 29,
        fontWeight: '300',
    },
    splashLogo: {
        flex:1,
        maxWidth: '60%',
        maxHeight: '6%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})