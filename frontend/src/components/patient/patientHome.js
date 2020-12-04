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


import patientLogin from './patientLogin';
import doctorTab from './dashboard/doctorTab';
import profileTab from './dashboard/profileTab';
import remediesTab from './dashboard/remediesTab';
import consultTab from './dashboard/consultTab';
import consultNavigator from './dashboard/consultNavigator';
import { Navigate } from 'grommet-icons';
import { NavigationContainer } from '@react-navigation/native';
import remedyNavigator from './dashboard/remedyNavigator';
import Loader from './../../../src/components/shared/Loader';

const Tab = createMaterialTopTabNavigator();

class patientHome extends Component {

    showLoader() {
        this.setState({ loaderVisible: true })
    }
    hideLoader() {
        this.setState({ loaderVisible: false });
    }

    login = async () => {
        this.showLoader();
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