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
    Image
} from 'react-native';

import { Button,Card } from 'react-native-elements';
import { Item, Icon, Input } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Loader from '../../shared/Loader';




class doctorTab extends Component {

    


    render() {
        return (
            <ScrollView>
                <View style={{flexDirection:"column"}}>
                    <TouchableOpacity style={{
                        width: 380,
                        height: 165,
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
                                <Image source={require('../../../../resources/doctor.png')} style={{borderRadius: 4,marginLeft:10,marginTop:8,width:110,height:125,backgroundColor:"rgba(28, 82, 217, 0.22)"}} />
                                <View style={{borderRadius: 4,marginLeft:10,height:24,backgroundColor:"#0d47ba",alignItems:"center",justifyContent:"center"}} >
                                    <Text style={{color:"white"}}>₹400</Text>
                                 </View>
                            </View>
                            <View style={{flexDirection:"column"}}>
                                <Text style={{
                                    width: 128,
                                    height: 30,
                                    overflow: "hidden",
                                    color: "#6a6868",
                                    fontSize: 20,
                                    letterSpacing: 0,
                                    lineHeight: 23,
                                    fontStyle: "normal",
                                    textAlign: "center",
                                    marginLeft:10,
                                    marginTop:15,
                                    fontWeight:"bold"
                                }}>
                                    Dr.John Doe
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
                                    textAlign: "center",
                                    marginLeft: -9,
                                    fontWeight:"bold",
                                    marginTop:-2
                                }}>
                                    5 Years of Experience
                                </Text>
                                <View style={{flexDirection:"row",marginTop:5}}>
                                    <View style={{
                                        width: 50,
                                        height: 20,
                                        overflow: "hidden",
                                        backgroundColor: "#0d47ba",
                                        borderRadius: 6,
                                        alignItems:"center",
                                        justifyContent:"center",
                                        marginLeft: 20,
                                    }}><Text style={{color:"white",fontSize:11}}>MBBS</Text></View>
                                    <View style={{
                                        width: 50,
                                        height: 20,
                                        overflow: "hidden",
                                        backgroundColor: "#0d47ba",
                                        borderRadius: 6,
                                        alignItems:"center",
                                        justifyContent:"center",
                                        marginLeft: 5,
                                    }}><Text style={{color:"white",fontSize:11}}>MD</Text></View>
                                </View>
                                <View style={{flexDirection:"row"}}>
                                    <View style={{marginLeft:20,marginTop:34}}><Ionicons name="heart" size={26} color="red"/></View>
                                    <Text style={{marginLeft:3.5,marginTop:38}}>23 Recommends</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>            
                </View>    
            </ScrollView>
          );
    }

  

}





export default doctorTab;