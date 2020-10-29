import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Modal,
    FlatList,
    Pressable,
    Alert
} from 'react-native';
import { Item, Icon, Input } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Loader from '../../shared/Loader';
import { Card } from 'react-native-elements';




class remediesTab extends Component {

    


    render() {
        return (
            <View>
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
                <Card containerStyle={{
                    boxSizing: "border-box",
                    width: 379,
                    height: 154,
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
                        width: 111,
                        height: 26,
                        overflow: "visible",
                        
                        color: "#0274ED",
                        fontSize: 19,
                        letterSpacing: 0,
                        lineHeight: 20,
                        
                        fontStyle: "normal",
                        textAlign: "center",
                    }}>
                        Dr.John Doe
                    </Text>
                    <Text style={{
                        width: 231,
                        height: 29,
                        overflow: "visible",
                        
                        color: "#6a6868",
                        fontSize: 21,
                        letterSpacing: 0,
                        lineHeight: 22,
                        
                        fontStyle: "normal",
                        textAlign: "center",
                    }}>Corona Home Remedies</Text>
                </Card>
            </View>
        );
    }

  

}





export default remediesTab;