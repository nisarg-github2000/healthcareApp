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
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import appointTab from "./dashboard/appointTab";
import profileTab from './dashboard/profileTab';

const Tab = createMaterialTopTabNavigator();

class doctorHome extends Component {

    showLoader() {
        this.setState({ loaderVisible: true })
    }
    hideLoader() {
        this.setState({ loaderVisible: false });
    }


    render() {
        return (
            <Tab.Navigator 
                tabBarOptions={{
                    activeTintColor: '#FFFFFF',
                    inactiveTintColor: '#F8F8F8',
                    style:{
                        backgroundColor: '#0274ED'
                    },
                    labelStyle: {
                        textAlign: 'center',
                    },
                    indicatorStyle: {
                        borderBottomColor: '#87B56A',
                        borderBottomWidth: 2,
                    },
                }}
            >
                <Tab.Screen name="Appoints" component={appointTab}/>
                <Tab.Screen name="Profile" component={profileTab} />
            </Tab.Navigator>

        );
    }
}


export default doctorHome;