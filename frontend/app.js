import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import patientLogin from './src/components/patient/patientLogin';
import patientRegister from './src/components/patient/patientRegister';
import patientOtpScreen from './src/components/patient/patientOtp';
import splashScreen from './src/components/splashScreen';
import selectRole from './src/components/selectRole';
import patientHome from './src/components/patient/patientHome';
import doctorLogin from './src/components/doctor/doctorLogin';
import doctorRegister from './src/components/doctor/doctorRegister';
import doctorOtpScreen from './src/components/doctor/doctorOtp';
import { StyleSheet } from 'react-native';
import consultNavigator from './src/components/patient/dashboard/consultNavigator';



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
                    <Stack.Screen name="PatientHome" component={consultNavigator} options={{ headerShown: false }} />
                    {/* Doctor Routes */}
                    <Stack.Screen name="DoctorLogin" component={doctorLogin} options={{ headerShown: false }}/>
                    <Stack.Screen name="DoctorRegister" component={doctorRegister} options={{ headerShown: false }}/>
                    {/* <Stack.Screen name="DoctorHome" component={} options={{ headerShown: false }}/> */}
                    <Stack.Screen name="DoctorOtp" component={doctorOtpScreen} options={{ headerShown: false }}/>
                    
                </Stack.Navigator>
            </NavigationContainer>
        )    
    }
}


export default App;

const styles = new StyleSheet.create({
    header: {
        backgroundColor: '#03a9f4',
    }
});


// options={{ title: 'PatientHome', headerStyle: styles.header, headerTintColor: 'white'  }}