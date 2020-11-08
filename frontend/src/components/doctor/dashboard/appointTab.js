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
    ScrollView
} from 'react-native';

import {
    Avatar,
    Card,
    Paragraph,
    Title
  } from 'react-native-paper'

import { Item, Icon, Input } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';

class appointTab extends Component {
    render() {
        return (
            <View>
                <View style={{
                        width: 380,
                        height: 145,
                        overflow: "visible",
                        shadowColor: "#000",
                        shadowOffset: {
	                        width: 0,
	                        height: 4,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4.65,
                        elevation: 8,
                        marginLeft:15,
                        marginTop:10,
                        marginBottom:10,
                        borderRadius: 4,
                        backgroundColor: "#E8EBED",
                    }}>
                        <View style={{flexDirection:"row"}}>
                            <View style={{flexDirection:"column"}}>
                                <Text style={{
                                    width: 150,
                                    height: 30,
                                    overflow: "hidden",
                                    color: "#6a6868",
                                    fontSize: 21,
                                    letterSpacing: 0,
                                    lineHeight: 23,
                                    fontStyle: "normal",
                                    textAlign: "center",
                                    marginLeft:14,
                                    marginTop:15,
                                    fontWeight:"bold"
                                }}>
                                    Mr. Nisarg Oza
                                </Text>
                                <Text style={{
                                    width: 212,
                                    height: 25,
                                    overflow: "hidden",
                                    color: "#0274ED",
                                    fontSize: 16,
                                    letterSpacing: 0,
                                    lineHeight: 19,
                                    fontStyle: "normal",
                                    textAlign: "left",
                                    marginLeft: 20,
                                    fontWeight:"bold",
                                    marginTop:4
                                }}>
                                    Date:17/01/2021
                                </Text>
                                <Text style={{
                                    width: 212,
                                    height: 25,
                                    overflow: "hidden",
                                    color: "#0274ED",
                                    fontSize: 16,
                                    letterSpacing: 0,
                                    lineHeight: 20,
                                    fontStyle: "normal",
                                    textAlign: "left",
                                    marginLeft: 20,
                                    fontWeight:"bold",
                                    marginTop:2
                                }}>
                                    Time:12:00PM
                                </Text>
                                <Text style={{
                                    fontSize:16,
                                    marginLeft:20,
                                    marginTop:4
                                }}>Frequent Patient</Text>
                            </View>
                            <View style={{flexDirection:"column"}}>
                                <TouchableOpacity 
                                
                                style={{
                                    width: 140,
                                    height: 40,
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
                                    marginTop:20,
                                    marginRight:30,
                                    marginLeft:-14
                                }}>
                                    <Text style={{
                                        width: 70,
                                        height: 20,
                                        overflow: "hidden",
                                        color: "#ffffff",
                                        fontSize: 16,
                                        textAlign: "center",
                                    }}>Accept</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                style={{
                                    width: 140,
                                    height: 40,
                                    overflow: "hidden",
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 4,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 4.65,
                                    elevation: 8,
                                    backgroundColor: "#cc3939",
                                    borderRadius: 5,
                                    justifyContent:"center",alignItems:"center",
                                    marginTop:20,
                                    marginRight:30,
                                    marginLeft:-14
                                }}>
                                    <Text style={{
                                        width: 70,
                                        height: 20,
                                        overflow: "hidden",
                                        color: "#ffffff",
                                        fontSize: 16,
                                        textAlign: "center"
                                    }}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                      </View>
            </View>

            );
    }

}

export default appointTab;