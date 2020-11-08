import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import coughcold from './diseases/coughcold';
import consultTab from './consultTab';
import dietician from './diseases/dietician';
import cardiologist from './diseases/cardiologist';
import childspecialist from './diseases/childspecialist';
import gastroenterologist from './diseases/gastroenterologist';
import gianaecologist from './diseases/gianaecologist';
import homeotherapy from './diseases/homeotherapy';
import mentalhealth from './diseases/mentalhealth';
import urnologist from './diseases/urnologist';
import patientHome from '../patientHome';
import orthopedic from './diseases/orthopedic';
import remedyDetail from './remedyDetail';
import addRemedy from './addRemedy';
import ccDoctor from './diseases/ccDoctor';
import editProfile from './editProfile';
import booking from './diseases/booking';
import appointment from './diseases/appointment';

const Stack = createStackNavigator();


class consultNavigator extends Component {
    render() {
        return (
            // <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={patientHome} options={{ headerShown: false }}/>     
                    <Stack.Screen name="Cough and Cold" component={coughcold} options={{ title: "Cold and Fever" }}/>      
                    <Stack.Screen name="Dietician" component={dietician} options={{ title: "Dietician" }}/>     
                    <Stack.Screen name="Cardiologist" component={cardiologist} options={{ title: "Cardiologist" }}/>
                    <Stack.Screen name="Child Specialist" component={childspecialist} options={{ title: "Child Specialist" }}/>
                    <Stack.Screen name="Gastroenterologist" component={gastroenterologist} options={{ title: "Gastroenterologist" }}/>
                    <Stack.Screen name="Gianaecologist" component={gianaecologist} options={{ title: "Gianaecologist"}}/>
                    <Stack.Screen name="Homeotherapy" component={homeotherapy} options={{ title: "Homeotherapy" }}/>
                    <Stack.Screen name="Mental Health" component={mentalhealth} options={{ title: "Mental Health" }}/>
                    <Stack.Screen name="Urnologist" component={urnologist} options={{ title: "Urnologist" }}/>
                    <Stack.Screen name="Orthopedic" component={orthopedic} options={{ title: "Orthopedic" }}/>
                    <Stack.Screen name="Corona Home Remedies" component={remedyDetail} options={{ title: "Corona Home Remedies" }}/>
                    <Stack.Screen name="Add Your Home Remedy" component={addRemedy} options={{ title: "Add Your Home Remedy" }}/>
                    <Stack.Screen name="Doctor Info" component={ccDoctor} options={{ title: "Doctor Info" }}/>
                    <Stack.Screen name="Edit Profile" component={editProfile} options={{ title: "Edit Profile" }}/>
                    <Stack.Screen name="Booking" component={booking} options={{ title: "Booking" }}/>
                    <Stack.Screen name="Appointment" component={appointment} options={{ title: "Appointment" }}/>
                    
                </Stack.Navigator>
           // {/* </NavigationContainer> */}
        )    
    }
}


export default consultNavigator;