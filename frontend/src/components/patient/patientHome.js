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

import Loader from '../shared/Loader';
import patientLogin from './patientLogin';
import doctorTab from './dashboard/doctorTab';
import profileTab from './dashboard/profileTab';
import remediesTab from './dashboard/remediesTab';
import consultTab from './dashboard/consultTab';
import consultNavigator from './dashboard/consultNavigator';
import { Navigate } from 'grommet-icons';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

class patientHome extends Component {

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
                        backgroundColor: '#03a9f4'
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
                <Tab.Screen name="Consult" component={consultTab}/>
                <Tab.Screen name="Doctor" component={doctorTab} />
                <Tab.Screen name="Profile" component={profileTab} />
                <Tab.Screen name="Remedies" component={remediesTab} />
                {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
            </Tab.Navigator>

        );
    }
}

export default patientHome;

const styles = StyleSheet.create({
    
})