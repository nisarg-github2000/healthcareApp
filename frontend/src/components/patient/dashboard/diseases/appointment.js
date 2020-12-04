import React, { Component, useState } from 'react';
import {
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Text,
    StyleSheet,
    Modal,
    FlatList,
    Pressable,
    Alert,
    ScrollView,
    Image,
    Linking,
    TextInput
} from 'react-native';
import { Button,Card } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BackdropContext, DatePicker} from 'react-native-propel-kit';
import Loader from './../../../shared/Loader';

class appointment extends Component {

    state = {
        loaderVisible: false
      }
      showLoader() {
        this.setState({ loaderVisible: true })
      }
      hideLoader() {
        this.setState({ loaderVisible: false });
      }

    render() {
        
        return(
            <View>
                <Text style={{
                    width: 283,
                    height: 52,
                    overflow: "hidden",
                    marginLeft:"23%",
                    color: "#808080",
                    fontSize: 19,
                    letterSpacing: 0,
                    lineHeight: 20,
                    marginTop:30,
                    fontStyle: "normal",
                    textAlign: "left",
                }}>Enter your booking details</Text>
                <Text style={{
                    width: 283,
                    height: 52,
                    overflow: "hidden",
                    marginLeft:"15%",
                    color: "#808080",
                    fontSize: 19,
                    letterSpacing: 0,
                    lineHeight: 20,
                    marginTop:"1%",
                    fontStyle: "normal",
                    textAlign: "center",
                    marginBottom:"-10%"
                }}>Pick a Date:</Text>
                <View style={{flexDirection:"row"}}>
                    <TextInput 
                        placeholder="DD"
                        placeholderTextColor="#aaa"
                        keyboardType="number-pad"
                        style={{
                            borderColor:"rgba(0,0,0,0)",
                            marginTop:40,
                            width:"25%",
                            borderWidth:0,
                            fontSize:14,
                            backgroundColor:"#EBEBEB",
                            borderRadius:10,
                            color:"#333",
                            paddingLeft:13,
                            marginLeft:"9%"
                        }}
                    />
                    <TextInput 
                        placeholder="MM"
                        placeholderTextColor="#aaa"
                        keyboardType="number-pad"
                        style={{
                            borderColor:"rgba(0,0,0,0)",
                            marginTop:40,
                            width:"25%",
                            borderWidth:0,
                            fontSize:14,
                            backgroundColor:"#EBEBEB",
                            borderRadius:10,
                            color:"#333",
                            paddingLeft:13,
                            marginLeft:"4%"
                        }}
                    />
                    <TextInput 
                        placeholder="YYYY"
                        placeholderTextColor="#aaa"
                        keyboardType="number-pad"
                        style={{
                            borderColor:"rgba(0,0,0,0)",
                            marginTop:40,
                            width:"25%",
                            borderWidth:0,
                            fontSize:14,
                            backgroundColor:"#EBEBEB",
                            borderRadius:10,
                            color:"#333",
                            paddingLeft:13,
                            marginLeft:"4%"
                        }}
                    />
                </View>
                <Text style={{
                    width: 283,
                    height: 52,
                    overflow: "hidden",
                    marginLeft:"15%",
                    color: "#808080",
                    fontSize: 19,
                    letterSpacing: 0,
                    lineHeight: 20,
                    marginTop:"10%",
                    fontStyle: "normal",
                    textAlign: "center",
                    marginBottom:"-10%"
                }}>Pick a Time:</Text>
                <View style={{flexDirection:"row"}}>
                    <TextInput 
                        placeholder="HH"
                        placeholderTextColor="#aaa"
                        keyboardType="number-pad"
                        style={{
                            borderColor:"rgba(0,0,0,0)",
                            marginTop:40,
                            width:"25%",
                            borderWidth:0,
                            fontSize:14,
                            backgroundColor:"#EBEBEB",
                            borderRadius:10,
                            color:"#333",
                            paddingLeft:13,
                            marginLeft:"9%"
                        }}
                    />
                    <TextInput 
                        placeholder="MM"
                        placeholderTextColor="#aaa"
                        keyboardType="number-pad"
                        style={{
                            borderColor:"rgba(0,0,0,0)",
                            marginTop:40,
                            width:"25%",
                            borderWidth:0,
                            fontSize:14,
                            backgroundColor:"#EBEBEB",
                            borderRadius:10,
                            color:"#333",
                            paddingLeft:13,
                            marginLeft:"4%"
                        }}
                    />
                    <TextInput 
                        placeholder="AM/PM"
                        placeholderTextColor="#aaa"
                        keyboardType="default"
                        style={{
                            borderColor:"rgba(0,0,0,0)",
                            marginTop:40,
                            width:"25%",
                            borderWidth:0,
                            fontSize:14,
                            backgroundColor:"#EBEBEB",
                            borderRadius:10,
                            color:"#333",
                            paddingLeft:13,
                            marginLeft:"4%"
                        }}
                    />
                </View>
                <TouchableOpacity 
                onPress={async () => {
                    console.log("Card Pressed");
                    await this.showLoader();
                    await setTimeout(() => {
                        this.hideLoader();
                        this.props.navigation.navigate('Home')
                    }, 3000)
                  }}
                style={{
                    width: "40%",
                    height: 40,
                    marginLeft:"30%",
                    marginTop:"10%",
                    borderRadius:4,
                    overflow: "hidden",
                    boxShadow: "2px 3px 8px 0px rgba(0, 0, 0, 0.25)",
                    backgroundColor: "#0e4f95",
                    alignItems:"center",
                    justifyContent:"center"
                }}><Text style={{fontSize:18,color:"white"}}>Book Now</Text></TouchableOpacity>
            
                <Text style={{
                    width: 300,
                    height: 80,
                    overflow: "hidden",
                    marginLeft:"14%",
                    color: "#808080",
                    fontSize: 15,
                    letterSpacing: 0,
                    lineHeight: 20,
                    marginTop:"28%",
                    fontStyle: "normal",
                    textAlign: "center",
                }}>You will receive a success message from the doctor if your booking date and time is available.</Text>
                <Loader
                    loaderVisible={this.state.loaderVisible}
                    animationType="fade"
                />
            </View>
        );
    }
}

export default appointment;