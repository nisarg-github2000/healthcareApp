import React, { Component } from 'react';
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
import { Item, Icon } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Card,Input } from 'react-native-elements';
import Textarea from 'react-native-textarea';

class addRemedy extends Component {
    render() {
        return (
            <View>
                <Text style={{
                    width: 339,
                    height: 56,
                    overflow: "visible",
                    marginLeft:29,
                    marginTop:10,
                    color: "#808080",
                    fontSize: 17,
                    letterSpacing: 0,
                    lineHeight: 20,
                    fontStyle: "normal",
                    textAlign: "center",
                }}
                >Add your own home remedy that could help others</Text>
                <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                    <TextInput 
                        placeholder="Title"
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
                    <Textarea 
                        placeholder="Write a detailed description"
                        placeholderTextColor="#aaa"
                        containerStyle={{
                            borderColor:"rgba(0,0,0,0)",
                            marginTop:40,
                            width:"88%",
                            borderWidth:0,
                            fontSize:5,
                            backgroundColor:"#EBEBEB",
                            borderRadius:10,
                            color:"#333",
                            paddingLeft:10,
                        }}
                    ></Textarea>
                    <TouchableOpacity 
                    onPress={() => { console.log("Card Pressed");
                    this.props.navigation.navigate('Home') }   }
                    style={{
                        width: 163,
                        height: 48,
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
                        marginTop:50
                    }}><Text style={{
                        width: 39,
                        height: 20,
                        overflow: "hidden",
                        
                        color: "#ffffff",
                        fontSize: 20,
                        letterSpacing: 0,
                        lineHeight: 21,
                        
                        textAlign: "center",
                        }}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default addRemedy;