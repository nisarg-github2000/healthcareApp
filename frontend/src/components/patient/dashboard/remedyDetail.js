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
import { Item, Icon, Input } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Loader from '../../shared/Loader';
import { Card } from 'react-native-elements';

class remedyDetail extends Component {

    state = {
        loaderVisible: false
    };

    showLoader() {
        this.setState({ loaderVisible: true })
    }
    hideLoader() {
        this.setState({ loaderVisible: false });
    }

    render() {
        return (
        <View>
            <ScrollView>
                <TouchableOpacity style={{
                     width: 414,
                     height: 74,
                     overflow: "hidden",
                     backgroundColor: "rgba(28, 82, 217, 0.13)",
                     borderRadius: 4,
                     alignItems:"center",
                     justifyContent:"center",
                }}>
                    <Text style={{
                        width: 174,
                        height: 42,
                        overflow: "hidden",
                        
                        color: "#6a6868",
                        fontSize: 30,
                        letterSpacing: 0,
                        lineHeight: 38,
                        
                        fontStyle: "normal",
                        textAlign: "center",
                    }}>Dr.Ajay Shah</Text>
                </TouchableOpacity>
                <View style={{ alignItems:"center",
                     justifyContent:"center",marginTop:40}}>
                <Text style={{
                    width: 275,
                    height: 35,
                    overflow: "hidden",
                   
                    color: "#6a6868",
                    fontSize: 25,
                    letterSpacing: 0,
                    lineHeight: 26,
                    textDecoration: "underline",
                    
                    fontStyle: "normal",
                    textAlign: "center",
                }}>Corona Home Remedies</Text>
                <Text style={{
                      width: 344,
                      height: 95,
                      overflow: "hidden",
                      marginTop:15,
                      color: "#343232",
                      fontSize: 19,
                      letterSpacing: 0,
                      lineHeight: 20,
                      
                      fontStyle: "normal",
                      textAlign: "center",
                    
                }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</Text>
            </View>
            </ScrollView>    
            <View style={{alignItems:"center",
                     justifyContent:"center",}}>
                <Text style={{
                    width: 196,
                    height: 40,
                    overflow: "hidden",
                    
                    color: "#0274ED",
                    fontSize: 29,
                    letterSpacing: 0,
                    lineHeight: 30,
                    marginTop:220,
                    fontStyle: "normal",
                    textAlign: "center",
                }}>Was it Helpful?</Text>
                <View style={{width:160,flexDirection:"row",justifyContent:"space-around"}}>
                    <TouchableOpacity 
                    onPress={async () => {
                        console.log("Card Pressed");
                        await this.showLoader();
                        await setTimeout(() => {
                            this.hideLoader();
                            this.props.navigation.navigate('Home')
                        }, 2000)
                    }   }
                    style={{
                        width: 60,
                        height: 60,
                        overflow: "hidden",
                        shadowColor:"#000",
                        shadowOffset: {
                            height:0,
                            width:2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 1,
                        elevation: 6,
                        backgroundColor: "#edf2ee",
                        borderRadius: 40,
                        alignItems:"center",
                        justifyContent:"center"
                    }}><Ionicons name="thumbs-up" size={28} color="rgb(4,88,28)"/></TouchableOpacity>
                    <TouchableOpacity 
                    onPress={async () => {
                        console.log("Card Pressed");
                        await this.showLoader();
                        await setTimeout(() => {
                            this.hideLoader();
                            this.props.navigation.navigate('Home')
                        }, 2000)
                    }   }
                    style={{
                        width: 60,
                        height: 60,
                        overflow: "hidden",
                        shadowColor:"#000",
                        shadowOffset: {
                            height:0,
                            width:2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 1,
                        elevation: 6,
                        backgroundColor: "#f8e8e8",
                        borderRadius: 40,
                        alignItems:"center",
                        justifyContent:"center"
                    }}><Ionicons name="thumbs-down" size={28} color="rgb(162,16,16)"/></TouchableOpacity>
                </View>
            </View>
            <Loader
                    loaderVisible={this.state.loaderVisible}
                    animationType="fade"
                />
        </View>
        ); 
    }
}

export default remedyDetail;