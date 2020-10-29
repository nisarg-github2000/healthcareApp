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
    ScrollView,
    Image
} from 'react-native';
import { Button,Card } from 'react-native-elements';

class orthopedic extends Component {
    render() {
        return (
          <ScrollView>
          {/* Scrollable View */} 
           <View style={{paddingLeft:15,paddingRight:15}} >
             <View>
               <Card>
                 <Card.Title>CONNECT WITH A DOCTOR WITHIN 4 MINUTES</Card.Title>
                 <Button title="JUST PAY ₹2000" />
               </Card>
             </View>
             <View>
               <Text style={{textAlign:'center',paddingTop:7}}>CONNECT WITH A DOCTOR WITHIN 2.5 HOURS</Text>
             </View>
             <View>
               <Card >
                 <View style={{flexDirection:"row"}} >
                   <View style={{width:88}}>
                     <Image source={require('../../../../../resources/doctor.png')} style={{height:'72%',width:'100%',backgroundColor:"rgba(28, 82, 217, 0.22)"}} />
                     <View style={{backgroundColor:"#03a9f4",alignItems:"center",justifyContent:"center"}} >
                       <Text>₹5000</Text>
                     </View>
                   </View>
                   <View>
                     <View>
                       <View><Text style={{paddingLeft:20,fontWeight:"bold",fontSize:16}}>Dr. Mehaesh Bhatt</Text></View>
                       <View><Text style={{paddingLeft:20}}>20 Years of Experience</Text></View>
                     </View>
                       <View style={{flexDirection:"row",margin:20,marginLeft:20}} >
                         <View style={{backgroundColor:"#03a9f4",alignItems:"center",justifyContent:"center",marginRight:10}} >
                         <Text style={{padding:5}}>MBBS</Text>
                         </View>
                         <View style={{backgroundColor:"#03a9f4",alignItems:"center",justifyContent:"center",marginRight:10}} >
                         <Text style={{padding:5}}>MD</Text>
                         </View>
                         <View style={{backgroundColor:"#03a9f4",alignItems:"center",justifyContent:"center"}} >
                         <Text style={{padding:5}}>DM</Text>
                         </View>
                       </View>
                       <View><Text style={{paddingLeft:20}}>985 Recommends</Text></View>
                   </View>
                 </View>
               </Card>


             </View>
           </View>
         </ScrollView>
        );
    }

}

export default orthopedic;