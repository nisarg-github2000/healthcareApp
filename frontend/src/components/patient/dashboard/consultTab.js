import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Modal,
    FlatList,
    Pressable,
    Alert,
    ScrollView
} from 'react-native';

import {
    Avatar,
    Card,
    Paragraph,
    Title
  } from 'react-native-paper'

import { Item, Icon, Input } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Loader from '../../shared/Loader';




class consultTab extends Component {

    


    render() {
        return (
            <ScrollView>
              {/* Scrollable View */} 
              <View style={styles.View} >

                  {/* Card View with proper postion */}
                  <Card style={styles.Card} 
                      onPress={() => { console.log("Card Pressed");
                      this.props.navigation.navigate('Cough and Cold') }   }
                  >
                  <Card.Content style={styles.Content}>
                      <Avatar.Image size={80} source={require('../../../../resources/coughcold.jpg')} />
                      
                  </Card.Content>
                  <Text style={{fontWeight:"bold",fontSize:16,textAlign:"center",marginTop:7}}>Cough & Fever</Text>
                      <Text style={{textAlign:"center"}}>100/-</Text>
                  </Card>

                  <Card style={styles.Card}
                      onPress={() => { console.log("Card Pressed");
                      this.props.navigation.navigate('Dietician') }       }
                  >
                  <Card.Content style={styles.Content}>
                      <Avatar.Image size={80} source={require('../../../../resources/dietician.jpg')} />
                      
                  </Card.Content>
                  <Text style={{fontWeight:"bold",fontSize:16,textAlign:"center",marginTop:7}}>Dietician</Text>
                      <Text style={{textAlign:"center"}}>400/-</Text>
                  </Card>
              </View>
        
              <View style={styles.View} >
         
                  <Card style={styles.Card}
                  onPress={() => { console.log("Card Pressed");
                  this.props.navigation.navigate('Gastroenterologist') }       }>
                      <Card.Content style={styles.Content}>
                          <Avatar.Image size={80} source={require('../../../../resources/gastroenterologist.jpg')} />
                          
                      </Card.Content>
                      <Text style={{fontWeight:"bold",fontSize:16,textAlign:"center",marginTop:7}}>Gastroenterologist</Text>
                      <Text style={{textAlign:"center"}}>600/-</Text>
                  </Card>

                  <Card style={styles.Card}
                      onPress={() => { console.log("Card Pressed");
                      this.props.navigation.navigate('Cardiologist') }       }>
                      <Card.Content style={styles.Content}>
                          <Avatar.Image size={80} source={require('../../../../resources/cardiologist.jpg')} />
                          
                      </Card.Content>
                      <Text style={{fontWeight:"bold",fontSize:16,textAlign:"center",marginTop:7}}>Cardiologist</Text>
                      <Text style={{textAlign:"center"}}>600/-</Text>
                  </Card>
              </View>

              <View style={styles.View}>
                  <Card style={styles.Card}
                      onPress={() => { console.log("Card Pressed");
                      this.props.navigation.navigate('Orthopedic') }   }>
                      <Card.Content style={styles.Content}>
                          <Avatar.Image size={80} source={require('../../../../resources/orthopedic.jpg')} />
                          
                      </Card.Content>
                      <Text style={{fontWeight:"bold",fontSize:16,textAlign:"center",marginTop:7}}>Orthopedic</Text>
                      <Text style={{textAlign:"center"}}>1000/-</Text>
                  </Card>
                  <Card style={styles.Card} 
                      onPress={() => { console.log("Card Pressed");
                      this.props.navigation.navigate('Gianaecologist') }       }>
                      <Card.Content style={styles.Content}>
                          <Avatar.Image size={80} source={require('../../../../resources/gianaecologist.jpg')} />
                        
                      </Card.Content>
                      <Text style={{fontWeight:"bold",fontSize:16,textAlign:"center",marginTop:7}}>Gynecologist</Text>
                      <Text style={{textAlign:"center"}}>400/-</Text>
                  </Card>
              </View>
              <View style={styles.View} > 
                 {/* Card View with proper postion */}  
                 <Card style={styles.Card}    
                      onPress={() => { console.log("Card Pressed");
                      this.props.navigation.navigate('Child Specialist') }       }>
                      <Card.Content style={styles.Content}>
                          <Avatar.Image size={80} source={require('../../../../resources/childspecialist.jpg')} />
                          {/*<Title>Child Specialist</Title>
                          <Paragraph>400/-</Paragraph>*/}
                      </Card.Content>
                      <Text style={{fontWeight:"bold",fontSize:16,textAlign:"center",marginTop:7}}>Child Specialist</Text>
                      <Text style={{textAlign:"center"}}>100/-</Text>
                  </Card>
                  <Card style={styles.Card}
                      onPress={() => { console.log("Card Pressed");
                      this.props.navigation.navigate('Mental Health') }       }>
                      <Card.Content style={styles.Content}>
                          <Avatar.Image size={80} source={require('../../../../resources/mentalhealth.jpg')} />
                         
                      </Card.Content>
                      <Text style={{fontWeight:"bold",fontSize:16,textAlign:"center",marginTop:7}}>Mental Health</Text>
                      <Text style={{textAlign:"center"}}>400/-</Text>
                  </Card>
              </View>

              <View style={styles.View} >
                 {/* Card View with proper postion */}
                 <Card style={styles.Card}
                    onPress={() => { console.log("Card Pressed");
                    this.props.navigation.navigate('Urnologist') }       }>
                    <Card.Content style={styles.Content}>
                        <Avatar.Image size={80} source={require('../../../../resources/urnologist.jpg')} />
                        
                    </Card.Content>
                    <Text style={{fontWeight:"bold",fontSize:16,textAlign:"center",marginTop:7}}>Urnologist</Text>
                      <Text style={{textAlign:"center"}}>500/-</Text>
                  </Card>   
                  <Card style={styles.Card}
                      onPress={() => { console.log("Card Pressed");
                      this.props.navigation.navigate('Homeotherapy') }       }>
                      <Card.Content style={styles.Content}>
                          <Avatar.Image size={80} source={require('../../../../resources/homeotherapy.jpg')} />
                         
                      </Card.Content>
                      <Text style={{fontWeight:"bold",fontSize:16,textAlign:"center",marginTop:7}}>Homeotherapy</Text>
                      <Text style={{textAlign:"center"}}>300/-</Text>   
                  </Card>
              </View>
          </ScrollView>
        );
    }

  

}





export default consultTab;


const styles = StyleSheet.create({
    View : {
      marginTop:15,
      justifyContent:"space-around",
      alignItems:"center",
      flexDirection:"row",
      marginBottom:15
    },
    Card : {
      height : 175,
      width : 175,
      borderRadius:20,
      elevation:10,
      backgroundColor:'#ebebeb',
      alignItems:'center',
      justifyContent:'center',
    },
    Content : {
      marginTop:10,
      justifyContent:"center",
      alignItems:"center" 
    },
    Title : {
      alignItems: 'center',
      textAlign: 'center'
    },
    ScrollView : {
      backgroundColor: '#03a9f4'
    },
    Avatar : {

    }
  });