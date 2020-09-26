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

import Loader from '../shared/Loader';
import patientLogin from './patientLogin';
import doctorTab from './dashboard/doctorTab';
import consultTab from './dashboard/consultTab';
import profileTab from './dashboard/profileTab';
import remediesTab from './dashboard/remediesTab';

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
            <Tab.Navigator>
                <Tab.Screen name="Doctor" component={doctorTab} />
                <Tab.Screen name="Consult" component={consultTab} />
                <Tab.Screen name="Profile" component={profileTab} />
                <Tab.Screen name="Remedies" component={remediesTab} />
                {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
            </Tab.Navigator>
        );
    }

  

}





export default patientHome;