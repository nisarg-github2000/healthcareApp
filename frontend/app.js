import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import patientLogin from './src/components/patient/patientLogin';
import patientRegister from './src/components/patient/patientRegister';
import patientOtpScreen from './src/components/patient/patientOtp';
import splashScreen from './src/components/splashScreen';
import selectRole from './src/components/selectRole';
import patientHome from './src/components/patient/patientHome';



const Stack = createStackNavigator();

class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    {/* <Stack.Screen name="Test" component={test} options={{headerShown:false}}/> */}
                    <Stack.Screen name="SplashScreen" component={splashScreen} options={{ headerShown: false }}/>
                    <Stack.Screen name="SelectRole" component={selectRole} options={{ headerShown: false }}/> 
                    {/* Customer Routes */}
                    <Stack.Screen name="PatientLogin" component={patientLogin} options={{ headerShown: false }}/>
                    <Stack.Screen name="PatientRegister" component={patientRegister} options={{ headerShown: false }}/>
                    <Stack.Screen name="PatientOtp" component={patientOtpScreen} />
                    <Stack.Screen name="PatientHome" component={patientHome} options={{headerShown:false}}/>
                    
                </Stack.Navigator>
            </NavigationContainer>
        )    
    }
}


export default App;