import React, { Component } from 'react';
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
    Image
} from 'react-native';
import { Button,Card } from 'react-native-elements';
class ccDoctor extends Component {

    render() {
        return(
            <ScrollView>
                <View>
                    <Image source={require('../../../../../resources/doctor.png')} style={{height:170,width:'100%',backgroundColor:"rgba(28, 82, 217, 0.22)"}} />
                    <Text style={{
                        width: 128,
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
                        Dr.John Doe</Text>
                    <Text style={{
                        width: 212,
                        height: 25,
                        overflow: "hidden",
                        marginLeft:7,
                        color: "#0274ED",
                        fontSize: 18,
                        letterSpacing: 0,
                        lineHeight: 19,
              
                        fontStyle: "normal",
                        textAlign: "center",
                    }}>5 years of experience</Text>
                    <View style={{flexDirection:"row"}}>
                        <View style={{
                            width: 64,
                            height: 22,
                            overflow: "hidden",
                            backgroundColor: "#0d47ba",
                            borderRadius: 6,
                            marginLeft:27,
                            alignItems:"center",
                            justifyContent:"center"}} >
                            <Text style={{padding:6,fontSize:12,color:"white"}}>MBBS</Text>
                        </View>
                        <View style={{
                            width: 64,
                            height: 22,
                            overflow: "hidden",
                            backgroundColor: "#0d47ba",
                            borderRadius: 6,
                            marginLeft:10,
                            alignItems:"center",
                            justifyContent:"center"}} >
                            <Text style={{padding:6,fontSize:12,color:"white"}}>MD</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:"column"}}>
                    <View style={{
                        width: "50%",
                        height: 30,
                        marginTop:20,
                        marginLeft:100,
                        overflow: "hidden",
                        backgroundColor: "rgba(110, 112, 114, 0.31)",
                        alignItems:"center",
                        justifyContent:"center",
                        borderRadius:10,
                    }}>
                        <Text style={{
                            overflow: "hidden",
                            color: "#343232",
                            fontSize: 18,
                            letterSpacing: 0,
                            lineHeight: 21,
                            fontStyle: "normal",
                            textAlign: "center",
                        }}>
                          About
                        </Text>
                    </View>
                    <Text style={{
                        width: 344,
                        height: 78,
                        overflow: "hidden",
                        marginLeft:40,
                        color: "#343232",
                        fontSize: 19,
                        letterSpacing: 0,
                        lineHeight: 20,
                        marginTop:15,
                        fontStyle: "normal",
                        textAlign: "left",
                    }}
                    >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm</Text>
                    <View style={{
                        width: "50%",
                        height: 30,
                        marginTop:20,
                        marginLeft:100,
                        overflow: "hidden",
                        backgroundColor: "rgba(110, 112, 114, 0.31)",
                        alignItems:"center",
                        justifyContent:"center",
                        borderRadius:10,
                    }}>
                        <Text style={{
                            overflow: "hidden",
                            color: "#343232",
                            fontSize: 18,
                            letterSpacing: 0,
                            lineHeight: 21,
                            fontStyle: "normal",
                            textAlign: "center",
                        }}>
                          Advice
                        </Text>
                    </View>
                    <Text style={{
                        width: 344,
                        height: 80,
                        overflow: "hidden",
                        marginLeft:40,
                        color: "#343232",
                        fontSize: 19,
                        letterSpacing: 0,
                        lineHeight: 20,
                        marginTop:15,
                        fontStyle: "normal",
                        textAlign: "left",
                    }}
                    >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</Text>
                    <Text style={{

                    }}></Text>
                    <TouchableOpacity 
                    onPress={() => { console.log("Card Pressed");
                    this.props.navigation.navigate('Booking') }   }
                    style={{
                        width: 414,
                        height: 48,
                        overflow: "hidden",
                        backgroundColor: "#0274ED",
                        marginTop:16,
                        alignItems:"center",
                        justifyContent:"center"
                    }}>
                        <Text style={{
                            width: 111,
                            height: 20,
                            overflow: "hidden",
                            color: "#ffffff",
                            fontSize: 20,
                            letterSpacing: 0,
                            lineHeight: 21,
                            textAlign: "center",
                        }}>BOOK NOW</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    } 
}

export default ccDoctor;