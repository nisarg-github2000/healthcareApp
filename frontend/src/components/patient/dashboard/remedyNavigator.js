import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import patientHome from '../patientHome';
import remedyDetail from './remedyDetail';
import remediesTab from './remediesTab';

const Stack = createStackNavigator();

class remedyNavigator extends Component {
    render() {
        return (
            // <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Remedies Tab" component={remediesTab} options={{ headerShown: false }}/>
                    <Stack.Screen name="Corona Home Remedies"  component={remedyDetail} options={{ title: "Corona Home Remedies" }}/>
                </Stack.Navigator>
           // {/* </NavigationContainer> */}
        );    
    }
}

export default remedyNavigator;