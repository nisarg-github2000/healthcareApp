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
    Button,
    Image
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Item, Icon, Input } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Loader from '../../shared/Loader';
import ImagePicker from 'react-native-image-picker';

class profileTab extends Component {

    state = {
        profile: {
            file: null,
            fileUri: null
        },
        loaderVisible: false
    };

    showLoader() {
        this.setState({ loaderVisible: true })
    }
    hideLoader() {
        this.setState({ loaderVisible: false });
    }

    launchImageLibrary = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, (response) => {
            // console.log('Response = ', response);
            
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                const source = { uri: response.uri };
                // console.log('response', JSON.stringify(response));
                const obj = {
                    file: response,
                    fileUri: response.uri
                }
                this.setState({
                    profile: obj,
                });
                console.log(response.uri)
            }
        });

    }

    async logout() {
        await this.showLoader();
        await setTimeout(async () => {
        await AsyncStorage.removeItem('token');
        await this.hideLoader();
        await this.props.navigation.navigate('SelectRole');},3500)
    }

    render() {
        return (
            <ScrollView>
                <View style={{ 
                    width: "100%",
                    height: 131,
                    overflow:"visible",
                    backgroundColor: "rgba(0, 0, 0, 0.13)",
                    borderRadius: 4,
                }}>
                    
                <TouchableOpacity onPress={() => { 
                    this.logout()   }   }
                style={{
                     backgroundColor: '#0274ED',
                     height:30,
                     width:90,
                     borderRadius: 50,
                     alignItems:"center",
                     justifyContent:"center",
                     position:"absolute",
                     bottom:0,
                     marginLeft:"2%",
                     marginBottom:"2%",
                     zIndex:99
                }}><Text>Logout</Text></TouchableOpacity>
                
                    <View style={{flexDirection:"row"}}>       
                        <View style={{flex:1}}><Text style={{
                        width: 126,
                        height: 35,
                        fontWeight:"bold",
                        color: "#6a6868",
                        fontSize: 20,
                        letterSpacing: 0,
                        lineHeight: 50,
                        marginLeft:180,
                        marginTop:16,
                        textAlign: "right"
                        }}>NISARG OZA</Text>
                
                        <Text style={{
                            width: 83,
                            height: 25,
                            color: "#0274ED",
                            fontSize: 15,
                            letterSpacing: 0,
                            lineHeight: 35,
                            marginLeft:230,
                            marginTop:0,
                            textAlign: "center"
                        }}>20 YEARS</Text>
                        
                        <Text style={{
                        width: 126,
                        height: 35,
                        color: "#6a6868",
                        fontSize: 14,
                        letterSpacing: 0,
                        lineHeight: 30,
                        marginLeft:180,
                        marginTop:1,
                        textAlign: "right"
                        }}>MALE</Text></View>

                        <View>
                        {this.state.profile.fileUri == null
                        ?
                        <TouchableOpacity 
                        onPress= {() => {
                            this.launchImageLibrary();
                        }}
                        style={{
                            boxSizing: "border-box",
                            width: 67,
                            height: 67,
                            marginRight:20,
                            marginTop:30,
                            backgroundColor: "#ffffff",
                            borderWidth: 3,
                            borderColor:"#0274ED",
                            
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
                        }}>N</Text></TouchableOpacity>
                        :
                        <TouchableOpacity style={{
                            //boxSizing: "border-box",
                            width: 70,
                            height: 70,
                            marginTop:30,
                            marginRight:20,
                            borderWidth: 3,
                            borderColor:"#0274ED",
                            //borderStyle:"solid",
                            borderRadius: 50,
                        }} onPress={() => this.launchImageLibrary()}>
                            <Image
                               source={{
                                   uri: this.state.profile.fileUri,
                               }}
                               style={{
                                
                                width: 64,
                                height: 64,
                                
                                
                                //borderWidth: 3,
                                //borderColor:"#0274ED",
                                
                                borderRadius: 50,
                            }} />
                        </TouchableOpacity>
                        }

                        </View>
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
                    
                    borderColor: "#0D47BA",
                    borderTopWidth: 0,
                    borderBottomWidth: 3,
                    borderLeftWidth: 0,
                    borderRightWidth: 0
                }}><Text style={{
                    width: 171,
                    height: 21,
                    marginTop:6,
                    marginLeft:-42,
                    color: "#0274ED",
                    fontSize: 15,
                    letterSpacing: 0,
                    lineHeight: 28,
                    fontWeight:"bold",
                    textAlign: "center"
                }}>PENDING</Text></View>
                <View style={{flexDirection:"row"}}>
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
                        Dr.Ajay Shah</Text>
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
                    marginTop:20,
                    borderColor: "#0D47BA",
                    borderTopWidth: 0,
                    borderBottomWidth: 3,
                    borderLeftWidth: 0,
                    borderRightWidth: 0
                }}><Text style={{
                    width: 171,
                    height: 21,
                    marginTop:6,
                    marginLeft:9,
                    color: "#0274ED",
                    fontSize: 15,
                    letterSpacing: 0,
                    lineHeight: 28,
                    fontWeight:"bold",
                    textAlign: "center"
                }}>COMPLETED CONSULTS</Text>
                </View>

                <View>
                <TouchableOpacity 
                onPress={async () => {
                    console.log("Card Pressed");
                    await this.showLoader();
                    await setTimeout(() => {
                        this.hideLoader();
                        this.props.navigation.navigate('Edit Profile')
                    }, 3500)
                }}
                style={{
                     backgroundColor: '#0274ED',
                     minHeight: 60,
                     maxHeight: 60,
                     minWidth: 60,
                     maxWidth: 60,
                     borderRadius: 50,
                     marginTop:250,
                     marginLeft:330,
                     alignItems:"center",
                     justifyContent:"center"
                }}><Ionicons name="pencil" size={30} color="white"/></TouchableOpacity>
                </View>
                <Loader
                    loaderVisible={this.state.loaderVisible}
                    animationType="fade"
                />
            </ScrollView>
            
        );
    }

  

}



export default profileTab;