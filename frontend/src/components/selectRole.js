import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

class selectRole extends Component {
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
                    onPress={() => this.props.navigation.navigate("PatientLogin")}
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
        backgroundColor: "#FFBE85",
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