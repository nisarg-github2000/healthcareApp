import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import doctorHome from './doctorHome';
import editProfileDoc from './dashboard/editProfileDoc';

const Stack = createStackNavigator();

class doctorNavigator extends Component {
    render() {
        return (
            // <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={doctorHome} options={{ headerShown: false }}/>
                    <Stack.Screen name="Edit Profile" component={editProfileDoc} options={{ title: "Edit Profile" }}/>     
                </Stack.Navigator>
           // {/* </NavigationContainer> */}
        )    
    }
}


export default doctorNavigator;