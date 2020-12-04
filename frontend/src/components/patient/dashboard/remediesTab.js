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




class remediesTab extends Component {

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
            <ScrollView style={{flexDirection:"column"}}>
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
                }}>
                    Best home remedies from our community of patients and doctors.
                </Text>
                <TouchableOpacity 
                onPress={async () => {
                    console.log("Card Pressed");
                    await this.showLoader();
                    await setTimeout(() => {
                        this.hideLoader();
                        this.props.navigation.navigate('Corona Home Remedies')
                    }, 3000)
                }   }>
                <Card containerStyle={{
                    boxSizing: "border-box",
                    width: 379,
                    height: 154,
                    maxHeight:154,
                    overflow: "visible",
                    backgroundColor: "rgba(232, 235, 237, 0.5)",
                    boxShadow: "2px 3px 8px 0px rgba(0, 0, 0, 0.25)",
                    borderStyle: "solid",
                    borderColor: "#133eec",
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                    borderLeftWidth: 4,
                    borderRightWidth: 0,
                    borderRadius: 2,
                }}>
                    <Text style={{
                        width: 120,
                        height: 26,
                        overflow: "visible",
                        
                        color: "#0274ED",
                        fontSize: 19,
                        letterSpacing: 0,
                        lineHeight: 20,
                        
                        fontStyle: "normal",
                        textAlign: "center",
                    }}>
                        Dr. Ajay Shah
                    </Text>
                    <Text style={{
                        width: 379,
                        height: 29,
                        overflow: "visible",
                        marginTop:8,
                        marginLeft:55,
                        color: "#6a6868",
                        fontSize: 21,
                        letterSpacing: 0,
                        lineHeight: 22,
                        fontStyle: "normal",
                    
                    }}>Corona Home Remedies</Text>
                    <View style={{
                          width: 376,
                          height: 65,
                          marginTop:11,
                          marginLeft:-15,
                          overflow: "hidden",
                          paddingTop:11,
                          flexDirection:"row",
                          backgroundColor: "rgba(28, 82, 217, 0.13)",
                          
                    }}>
                        <TouchableOpacity style={{
                            width: 40,
                            height: 40,
                            overflow: "hidden",
                            marginLeft:20,
                            backgroundColor: "#ffffff",
                            borderRadius: 40,
                            alignItems:"center",
                            justifyContent:"center"
                        }}>
                           <Ionicons name="thumbs-up" size={25} color="#0274ED"/> 
                        </TouchableOpacity>
                        <Text style={{
                            color:"green",
                            width: 26,
                            height: 30,
                            marginLeft:10,
                            marginTop:5,
                            fontSize: 20,
                        }}>23</Text>
                        <TouchableOpacity style={{
                            width: 40,
                            height: 40,
                            overflow: "hidden",
                            marginLeft:20,
                            backgroundColor: "#ffffff",
                            borderRadius: 40,
                            alignItems:"center",
                            justifyContent:"center"
                        }}>
                            <Ionicons name="thumbs-down" size={25} color="#0274ED"/>
                        </TouchableOpacity>
                        <Text style={{
                            color:"red",
                            width: 26,
                            height: 30,
                            fontSize: 20,
                            marginLeft:10,
                            marginTop:5,
                        }}>4</Text>
                    </View>
                </Card>
                </TouchableOpacity>
                <TouchableOpacity>
                <Card containerStyle={{
                    boxSizing: "border-box",
                    width: 379,
                    height: 154,
                    maxHeight:154,
                    overflow: "visible",
                    backgroundColor: "rgba(232, 235, 237, 0.5)",
                    boxShadow: "2px 3px 8px 0px rgba(0, 0, 0, 0.25)",
                    borderStyle: "solid",
                    borderColor: "#133eec",
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                    borderLeftWidth: 4,
                    borderRightWidth: 0,
                    borderRadius: 2,
                }}>
                    <Text style={{
                        width: 150,
                        height: 26,
                        overflow: "visible",
                        
                        color: "#0274ED",
                        fontSize: 19,
                        letterSpacing: 0,
                        lineHeight: 20,
                        
                        fontStyle: "normal",
                        textAlign: "center",
                    }}>
                        Dr.Namrata Joshi
                    </Text>
                    <Text style={{
                        width: 379,
                        height: 29,
                        overflow: "visible",
                        marginTop:8,
                        marginLeft:75,
                        color: "#6a6868",
                        fontSize: 21,
                        letterSpacing: 0,
                        lineHeight: 22,
                        fontStyle: "normal",
                    
                    }}>Controlling Diabetes</Text>
                    <View style={{
                          width: 376,
                          height: 65,
                          marginTop:11,
                          marginLeft:-15,
                          overflow: "hidden",
                          paddingTop:11,
                          flexDirection:"row",
                          backgroundColor: "rgba(28, 82, 217, 0.13)",
                          
                    }}>
                        <TouchableOpacity style={{
                            width: 40,
                            height: 40,
                            overflow: "hidden",
                            marginLeft:20,
                            backgroundColor: "#ffffff",
                            borderRadius: 40,
                            alignItems:"center",
                            justifyContent:"center"
                        }}>
                           <Ionicons name="thumbs-up" size={25} color="#0274ED"/> 
                        </TouchableOpacity>
                        <Text style={{
                            color:"green",
                            width: 26,
                            height: 30,
                            marginLeft:10,
                            marginTop:5,
                            fontSize: 20,
                        }}>17</Text>
                        <TouchableOpacity style={{
                            width: 40,
                            height: 40,
                            overflow: "hidden",
                            marginLeft:20,
                            backgroundColor: "#ffffff",
                            borderRadius: 40,
                            alignItems:"center",
                            justifyContent:"center"
                        }}>
                            <Ionicons name="thumbs-down" size={25} color="#0274ED"/>
                        </TouchableOpacity>
                        <Text style={{
                            color:"red",
                            width: 26,
                            height: 30,
                            fontSize: 20,
                            marginLeft:10,
                            marginTop:5,
                        }}>2</Text>
                    </View>
                </Card>
                </TouchableOpacity>
                <TouchableOpacity>
                <Card containerStyle={{
                    boxSizing: "border-box",
                    width: 379,
                    height: 154,
                    maxHeight:154,
                    overflow: "visible",
                    backgroundColor: "rgba(232, 235, 237, 0.5)",
                    boxShadow: "2px 3px 8px 0px rgba(0, 0, 0, 0.25)",
                    borderStyle: "solid",
                    borderColor: "#133eec",
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                    borderLeftWidth: 4,
                    borderRightWidth: 0,
                    borderRadius: 2,
                }}>
                    <Text style={{
                        width: 150,
                        height: 26,
                        overflow: "visible",
                        
                        color: "#0274ED",
                        fontSize: 19,
                        letterSpacing: 0,
                        lineHeight: 20,
                        marginLeft:-10,
                        fontStyle: "normal",
                        textAlign: "center",
                    }}>
                        Dr.Betty Barter
                    </Text>
                    <Text style={{
                        width: 379,
                        height: 29,
                        overflow: "visible",
                        marginTop:8,
                        marginLeft:125,
                        color: "#6a6868",
                        fontSize: 21,
                        letterSpacing: 0,
                        lineHeight: 22,
                        fontStyle: "normal",
                    
                    }}>Dieting</Text>
                    <View style={{
                          width: 376,
                          height: 65,
                          marginTop:11,
                          marginLeft:-15,
                          overflow: "hidden",
                          paddingTop:11,
                          flexDirection:"row",
                          backgroundColor: "rgba(28, 82, 217, 0.13)",
                          
                    }}>
                        <TouchableOpacity style={{
                            width: 40,
                            height: 40,
                            overflow: "hidden",
                            marginLeft:20,
                            backgroundColor: "#ffffff",
                            borderRadius: 40,
                            alignItems:"center",
                            justifyContent:"center"
                        }}>
                           <Ionicons name="thumbs-up" size={25} color="#0274ED"/> 
                        </TouchableOpacity>
                        <Text style={{
                            color:"green",
                            width: 26,
                            height: 30,
                            marginLeft:10,
                            marginTop:5,
                            fontSize: 20,
                        }}>42</Text>
                        <TouchableOpacity style={{
                            width: 40,
                            height: 40,
                            overflow: "hidden",
                            marginLeft:20,
                            backgroundColor: "#ffffff",
                            borderRadius: 40,
                            alignItems:"center",
                            justifyContent:"center"
                        }}>
                            <Ionicons name="thumbs-down" size={25} color="#0274ED"/>
                        </TouchableOpacity>
                        <Text style={{
                            color:"red",
                            width: 26,
                            height: 30,
                            fontSize: 20,
                            marginLeft:10,
                            marginTop:5,
                        }}>27</Text>
                    </View>
                </Card>
                </TouchableOpacity>
                <TouchableOpacity>
                <Card containerStyle={{
                    boxSizing: "border-box",
                    width: 379,
                    height: 154,
                    maxHeight:154,
                    overflow: "visible",
                    backgroundColor: "rgba(232, 235, 237, 0.5)",
                    boxShadow: "2px 3px 8px 0px rgba(0, 0, 0, 0.25)",
                    borderStyle: "solid",
                    borderColor: "#133eec",
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                    borderLeftWidth: 4,
                    borderRightWidth: 0,
                    borderRadius: 2,
                }}>
                    <Text style={{
                        width: 200,
                        height: 26,
                        overflow: "visible",
                        
                        color: "#0274ED",
                        fontSize: 19,
                        letterSpacing: 0,
                        lineHeight: 20,
                        marginLeft:-15,
                        fontStyle: "normal",
                        textAlign: "center",
                    }}>
                        Dr.Suleman Sheikh
                    </Text>
                    <Text style={{
                        width: 379,
                        height: 29,
                        overflow: "visible",
                        marginTop:8,
                        marginLeft:85,
                        color: "#6a6868",
                        fontSize: 21,
                        letterSpacing: 0,
                        lineHeight: 22,
                        fontStyle: "normal",
                    
                    }}>Gastric Problems</Text>
                    <View style={{
                          width: 376,
                          height: 65,
                          marginTop:11,
                          marginLeft:-15,
                          overflow: "hidden",
                          paddingTop:11,
                          flexDirection:"row",
                          backgroundColor: "rgba(28, 82, 217, 0.13)",
                          
                    }}>
                        <TouchableOpacity style={{
                            width: 40,
                            height: 40,
                            overflow: "hidden",
                            marginLeft:20,
                            backgroundColor: "#ffffff",
                            borderRadius: 40,
                            alignItems:"center",
                            justifyContent:"center"
                        }}>
                           <Ionicons name="thumbs-up" size={25} color="#0274ED"/> 
                        </TouchableOpacity>
                        <Text style={{
                            color:"green",
                            width: 26,
                            height: 30,
                            marginLeft:10,
                            marginTop:5,
                            fontSize: 20,
                        }}>6</Text>
                        <TouchableOpacity style={{
                            width: 40,
                            height: 40,
                            overflow: "hidden",
                            marginLeft:20,
                            backgroundColor: "#ffffff",
                            borderRadius: 40,
                            alignItems:"center",
                            justifyContent:"center"
                        }}>
                            <Ionicons name="thumbs-down" size={25} color="#0274ED"/>
                        </TouchableOpacity>
                        <Text style={{
                            color:"red",
                            width: 26,
                            height: 30,
                            fontSize: 20,
                            marginLeft:10,
                            marginTop:5,
                        }}>22</Text>
                    </View>
                </Card>
                </TouchableOpacity>
                
            </ScrollView>
            <View>
                <TouchableOpacity 
                onPress={async () => {
                    console.log("Card Pressed");
                    await this.showLoader();
                    await setTimeout(() => {
                        this.hideLoader();
                        this.props.navigation.navigate('Add Your Home Remedy')
                    }, 3000)
                }   }
                style={{
                     width: 62,
                     height: 62,
                     position:"absolute",
                     bottom:25,
                     right:25,
                     boxShadow: "2px 3px 8px 0px rgba(0, 0, 0, 0.25)",
                     backgroundColor: "#0274ED",
                     borderRadius: 50,
                     alignItems:"center",
                     justifyContent:"center",
                }}><Ionicons name="add" size={45} color="white"/></TouchableOpacity>
            </View>
            <Loader
                    loaderVisible={this.state.loaderVisible}
                    animationType="fade"
                />
        </View>
        );
    }

  

}





export default remediesTab;