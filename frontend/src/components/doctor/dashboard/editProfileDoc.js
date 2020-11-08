import React, { Component,useState } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Modal,
    FlatList,
    Pressable,
    Alert,
    ScrollView,
    TextInput
} from 'react-native';
import { Item, Icon, Input } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RadioButton } from 'react-native-paper';
import { Card } from 'react-native-elements';



class editProfileDoc extends Component {
    render() {
        {/*const [checked, setChecked] = React.useState('first');*/}
        return(  
            <View> 
                <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                    <TextInput 
                        placeholder="Name"
                        placeholderTextColor="#aaa"
                        style={{
                            borderColor:"rgba(0,0,0,0)",
                            marginTop:40,
                            width:"88%",
                            borderWidth:0,
                            fontSize:14,
                            backgroundColor:"#EBEBEB",
                            borderRadius:10,
                            color:"#333",
                            paddingLeft:13,
                            marginBottom:-15
                        }}
                    />
                    <TextInput 
                        placeholder="Date of Birth"
                        placeholderTextColor="#aaa"
                        style={{
                            borderColor:"rgba(0,0,0,0)",
                            marginTop:40,
                            width:"88%",
                            borderWidth:0,
                            fontSize:14,
                            backgroundColor:"#EBEBEB",
                            borderRadius:10,
                            color:"#333",
                            paddingLeft:13,
                            marginBottom:-15
                        }}
                    />
                    <TextInput 
                        placeholder="Registered Number"
                        placeholderTextColor="#aaa"
                        keyboardType="numeric"
                        style={{
                            borderColor:"rgba(0,0,0,0)",
                            marginTop:40,
                            width:"88%",
                            borderWidth:0,
                            fontSize:14,
                            backgroundColor:"#EBEBEB",
                            borderRadius:10,
                            color:"#333",
                            paddingLeft:13,
                            marginBottom:-15
                        }}
                    />
                    <TouchableOpacity 
                    onPress={() => { console.log("Card Pressed");
                    this.props.navigation.navigate('Home') }   }
                    style={{
                        width: 210,
                        height: 45,
                        overflow: "hidden",
                        
                        shadowColor: "#000",
                        shadowOffset: {
	                        width: 0,
	                        height: 4,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4.65,
                        elevation: 8,
                        backgroundColor: "#22AA99",
                        borderRadius: 5,
                        justifyContent:"center",alignItems:"center",
                        marginTop:80
                    }}><Text style={{
                        width: 70,
                        height: 20,
                        overflow: "hidden",
                        
                        color: "#ffffff",
                        fontSize: 20,
                        letterSpacing: 0,
                        lineHeight: 21,
                        
                        textAlign: "center",
                        }}>Update</Text>
                    </TouchableOpacity>
                </View>
                {/*<View>
                    <RadioButton
                        value="first"
                        status={ checked === 'first' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('first')}
                    />
                    <RadioButton
                        value="second"
                        status={ checked === 'second' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('second')}
                    />
                </View>*/}
                
            </View>
        );
    }
}

export default editProfileDoc;