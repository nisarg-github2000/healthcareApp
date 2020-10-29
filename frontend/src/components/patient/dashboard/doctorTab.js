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

import Loader from '../../shared/Loader';




class doctorTab extends Component {

    


    render() {
        return (
            <ScrollView>
            {/* Scrollable View */}
                <Card containerStyle={{marginHorizontal:10}}>
                    <View style={{flexDirection:"row"}} >
                        <View style={{width:88}}>
                            <Image source={require('../../../../resources/doctor.png')} style={{height:'85%',width:'100%',backgroundColor:"rgba(28, 82, 217, 0.22)"}} />
                            <View style={{backgroundColor:"#0d47ba",alignItems:"center",justifyContent:"center"}} >
                                <Text style={{color:"white"}}>₹400</Text>
                            </View>
                        </View>
                        <View>
                            <View>
                                <View><Text style={{paddingLeft:20,fontWeight:"bold",fontSize:19,color:"#6a6868"}}>Dr.John Doe</Text></View>
                                <View><Text style={{paddingLeft:20,marginTop:3,color:"#0274ED",fontWeight:"bold"}}>5 Years of Experience</Text></View>
                            </View>
                            <View style={{flexDirection:"row",margin:20,marginLeft:20,marginTop:15}} >
                                <TouchableOpacity style={{backgroundColor:"#0d47ba",alignItems:"center",justifyContent:"center",marginRight:7,borderRadius:10}} >
                                    <Text style={{padding:6,fontSize:12,color:"white"}}>MBBS</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{backgroundColor:"#0d47ba",alignItems:"center",justifyContent:"center",marginRight:7,borderRadius:10}} >
                                    <Text style={{padding:6,fontSize:12,color:"white"}}>MD</Text>
                                </TouchableOpacity>
                            </View>
                            <View><Text style={{paddingLeft:20}}>23 Recommends</Text></View>
                        </View>
                    </View>
                    
                </Card> 
                
            </ScrollView>
          );
    }

  

}





export default doctorTab;