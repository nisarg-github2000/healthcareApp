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
    Image,
    Linking
} from 'react-native';
import { Button,Card } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Loader from './../../../shared/Loader';

class booking extends Component {

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
                    marginLeft:75,
                    color: "#808080",
                    fontSize: 19,
                    letterSpacing: 0,
                    lineHeight: 20,
                    marginTop:30,
                    fontStyle: "normal",
                    textAlign: "left",
                }}>How would you like to interact with the doctor?</Text>
                <View style={{
                    flexDirection:"column",
                    alignItems:"center",
                    justifyContent:"center"
                }}>
                    <TouchableOpacity 
                    onPress={async () => {
                        console.log("Card Pressed");
                        await this.showLoader();
                        await setTimeout(() => {
                            this.hideLoader();
                            Linking.openURL('whatsapp://send?text=Welcome to Medo Healthcare!! Hope you found your doctor&phone=917779008052')
                        }, 1000)
                      }}
                    style={{
                        width: 120,
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
                        borderRadius: 8,
                        marginTop:25
                    }}><View style={{flexDirection:"row"}}>
                        <Ionicons style={{marginTop:5,marginLeft:10}} name="logo-whatsapp" size={26} color="white"/>
                        <Text style={{
                            width: 65,
                            height: 24,
                            overflow: "hidden",
                            color: "#ffffff",
                            fontSize: 19,
                            letterSpacing: 0,
                            marginTop:10,
                            marginLeft:8,
                            lineHeight: 23,
                            textAlign: "center"
                        }}>CHAT</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={async () => {
                        console.log("Card Pressed");
                        await this.showLoader();
                        await setTimeout(() => {
                            this.hideLoader();
                            Linking.openURL('tel:${917779008052}')
                        }, 1000)
                      }}
                    style={{
                        width: 120,
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
                        backgroundColor: "#0274ED",
                        borderRadius: 8,
                        marginTop:15
                    }}>
                        <View style={{flexDirection:"row"}}>
                        <Ionicons style={{marginTop:5,marginLeft:10}} name="call-outline" size={26} color="white"/>
                        <Text style={{
                            width: 65,
                            height: 24,
                            overflow: "hidden",
                            color: "#ffffff",
                            fontSize: 19,
                            letterSpacing: 0,
                            marginTop:10,
                            marginLeft:8,
                            lineHeight: 23,
                            textAlign: "center"
                        }}>CALL</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity 
                onPress={async () => {
                    console.log("Card Pressed");
                    await this.showLoader();
                    await setTimeout(() => {
                        this.hideLoader();
                        this.props.navigation.navigate('Appointment')
                    }, 3000)
                  }}
                style={{
                    width: "70%",
                    height: 48,
                    borderRadius:6,
                    marginLeft:"15%",
                    marginTop:330,
                    overflow: "hidden",
                    boxShadow: "2px 3px 8px 0px rgba(0, 0, 0, 0.25)",
                    backgroundColor: "#0e4f95",
                    alignItems:"center",
                    justifyContent:"center"
                }}><Text style={{fontSize:19,color:"white"}}>Book Appointment</Text></TouchableOpacity>
                <Loader
                    loaderVisible={this.state.loaderVisible}
                    animationType="fade"
                />
            </View>
        );
    }
}

export default booking;