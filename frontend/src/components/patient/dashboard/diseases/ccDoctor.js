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
import Loader from './../../../shared/Loader';

class ccDoctor extends Component {

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
            <ScrollView>
                <View>
                    <Image source={require('../../../../../resources/doctor.png')} style={{height:170,width:'100%',backgroundColor:"rgba(28, 82, 217, 0.22)"}} />
                    <Text style={{
                        width: 135,
                        height: 30,
                        overflow: "hidden",
                        marginLeft:26,
                        marginTop:20,
                        color: "#6a6868",
                        fontSize: 22,
                        letterSpacing: 0,
                        lineHeight: 23,
                        fontWeight:"bold",
                        fontStyle: "normal",
                        textAlign: "center", 
                     }}>
                        Dr. Ajay Shah</Text>
                    <Text style={{
                        width: 212,
                        height: 25,
                        overflow: "hidden",
                        marginLeft:8,
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
                        marginTop:35,
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
                        height: 85,
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
                    >I completed my MD from a renowned university in Russia and was a gold medalist there.I serve my patients as my family. Happy to help!! </Text>
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
                        height: 180,
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
                    >Maintain at least a 1-metre distance between yourself and others to reduce your risk of infection when they cough, sneeze or speak.                                    Make wearing a mask a normal part of being around other people.
                    </Text>
                    <Text style={{

                    }}></Text>
                    <TouchableOpacity 
                    onPress={async () => {
                        console.log("Card Pressed");
                        await this.showLoader();
                        await setTimeout(() => {
                            this.hideLoader();
                            this.props.navigation.navigate('Booking')
                        }, 3000)
                      }}
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
                <Loader
                    loaderVisible={this.state.loaderVisible}
                    animationType="fade"
                />
            </ScrollView>
        );
    } 
}

export default ccDoctor;