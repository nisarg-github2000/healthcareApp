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
    Button
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Item, Icon, Input } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Loader from '../../shared/Loader';

class profileTab extends Component {

    


    render() {
        return (
        <View>
            <ScrollView>
                <View style={{ 
                    width: 414,
                    height: 131,
                    overflow:"visible",
                    backgroundColor: "rgba(0, 0, 0, 0.13)",
                    borderRadius: 4,
                }}>
                    <View style={{flexDirection:"row"}}>       
                        <View style={{flex:1}}><Text style={{
                        width: 126,
                        height: 35,
                        fontWeight:"bold",
                        color: "#6a6868",
                        fontSize: 20,
                        letterSpacing: 0,
                        lineHeight: 50,
                        marginLeft:186,
                        marginTop:16,
                        textAlign: "right"
                        }}>DR.CHETAN</Text>
                
                        <Text style={{
                            width: 83,
                            height: 25,
                            color: "#0274ED",
                            fontSize: 15,
                            letterSpacing: 0,
                            lineHeight: 35,
                            marginLeft:238,
                            marginTop:0,
                            textAlign: "center"
                        }}>45 YEARS</Text>
                        
                        <Text style={{
                        width: 126,
                        height: 35,
                        color: "#6a6868",
                        fontSize: 14,
                        letterSpacing: 0,
                        lineHeight: 30,
                        marginLeft:186,
                        marginTop:1,
                        textAlign: "right"
                        }}>MALE</Text></View>

                        <View style={{flex:1}}><TouchableOpacity style={{
                            boxSizing: "border-box",
                            width: 67,
                            height: 67,
                            marginLeft:125,
                            marginTop:30,
                            backgroundColor: "#ffffff",
                            boxShadow: "2px 3px 8px 0px rgba(0, 0, 0, 0.25)",
                            borderWidth: 3,
                            borderColor:"#0274ED",
                            borderStyle:"solid",
                            borderRadius: 50,
                        }}><Text style={{
                            width: 36,
                            height: 46,
                            marginTop:11,
                            marginLeft:13,
                            color: "#0274ED",
                            fontSize: 46,
                            letterSpacing: 0,
                            lineHeight: 46,
                            textAlign: "center"
                        }}>D</Text></TouchableOpacity></View>
                    </View>
                </View>
                <View style={{
                boxSizing: "border-box",
                width: 382,
                height: 37,
                marginLeft:10,
                backgroundColor: "rgba(42, 162, 148, 0)",
                boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.25)",
                borderStyle: "solid",
                marginBottom:50,
                borderColor: "#0D47BA",
                borderTopWidth: 0,
                borderBottomWidth: 3,
                borderLeftWidth: 0,
                borderRightWidth: 0
            }}><Text style={{
                width: 271,
                height: 21,
                marginTop:6,
                marginLeft:-20,
                color: "#0274ED",
                fontSize: 15,
                letterSpacing: 0,
                lineHeight: 28,
                fontWeight:"bold",
                textAlign: "center"
            }}>COMPLETED APPOINTMENTS</Text></View>
            <View style={{
                boxSizing: "border-box",
                width: 382,
                height: 37,
                marginLeft:10,
                backgroundColor: "rgba(42, 162, 148, 0)",
                boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.25)",
                borderStyle: "solid",
                
                borderColor: "#0D47BA",
                borderTopWidth: 0,
                borderBottomWidth: 3,
                borderLeftWidth: 0,
                borderRightWidth: 0
            }}><Text style={{
                width: 271,
                height: 21,
                marginTop:6,
                marginLeft:-20,
                color: "#0274ED",
                fontSize: 15,
                letterSpacing: 0,
                lineHeight: 28,
                fontWeight:"bold",
                textAlign: "center"
            }}>AWAITING APPOINTMENTS</Text></View>
            <View style={{flexDirection:"row",marginBottom:50}}>
                    <Text style={{
                        width: 145,
                        height: 30,
                        overflow: "hidden",
                        marginLeft:22,
                        marginTop:20,
                        color: "#6a6868",
                        fontSize: 22,
                        letterSpacing: 0,
                        lineHeight: 23,
                        
                        fontStyle: "normal",
                        textAlign: "center", 
                     }}>
                        Mr. Nisarg Oza</Text>
                    <View style={{marginTop:11,marginLeft:200}}><Ionicons name="alert-circle" size={35} color="orange"/></View>
                </View>
            <View style={{
                boxSizing: "border-box",
                width: 382,
                height: 37,
                marginLeft:10,
                backgroundColor: "rgba(42, 162, 148, 0)",
                boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.25)",
                borderStyle: "solid",
                
                borderColor: "#0D47BA",
                borderTopWidth: 0,
                borderBottomWidth: 3,
                borderLeftWidth: 0,
                borderRightWidth: 0
            }}><Text style={{
                width: 271,
                height: 21,
                marginTop:6,
                marginLeft:-20,
                color: "#0274ED",
                fontSize: 15,
                letterSpacing: 0,
                lineHeight: 28,
                fontWeight:"bold",
                textAlign: "center"
            }}>CANCELED APPOINTMENTS</Text></View>
            </ScrollView>
            <View>
            <TouchableOpacity 
            onPress={() => { console.log("Card Pressed");
            this.props.navigation.navigate('Edit Profile') }   }
            style={{
                 width: 62,
                 height: 62,
                 marginLeft:330,
                 marginTop:390,
                 boxShadow: "2px 3px 8px 0px rgba(0, 0, 0, 0.25)",
                 backgroundColor: "#0274ED",
                 borderRadius: 50,
                 alignItems:"center",
                 justifyContent:"center",
            }}><Ionicons name="pencil" size={30} color="white"/></TouchableOpacity>
            </View>
         </View>   
        );
    }

  

}



export default profileTab;