import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class selectRole extends Component {

    checkToken = async () => {
             try {
             let token = await AsyncStorage.getItem('token');
                
                 if(token != null) {
                     this.props.navigation.navigate("PatientHome");
                 }else{
                     this.props.navigation.navigate("PatientLogin");
                 }
    
             } catch (error) {
                 // Error saving data
             }
         };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.containerText}>Select your Role</Text>
                <TouchableOpacity
                    style={styles.button}
                    //onPress={() => this.props.navigation.navigate("ProfessionalLogin")}
                >
                    <Text style={styles.buttonText} >Doctor</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.checkToken() }
                >
                    <Text style={styles.buttonText} >Patient</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default selectRole;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#03a9f4",
        justifyContent: 'center',
    },
    containerText: {
        alignSelf: 'center',
        fontFamily: 'Poppins-SemiBoldItalic',
        fontSize: 27,
        marginHorizontal: '20%',
        textAlign: 'center',
    },
    button: {
        backgroundColor: "#1f1f1f",
        fontSize: 20,
        borderRadius: 30,
        marginVertical: '5%',
        marginHorizontal: '15%',
        paddingLeft: 25,
        paddingRight: 25,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        color: "#ffffff"
    },
})