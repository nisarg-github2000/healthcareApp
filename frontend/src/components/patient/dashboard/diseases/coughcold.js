import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
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

class coughcold extends Component {
    render() {
        return (
          <ScrollView>
          {/* Scrollable View */} 
           <View style={{paddingLeft:15,paddingRight:15}} >
             <View>
               <Card containerStyle={{ marginTop:15,marginHorizontal:0}}>
                 <Card.Title>CONNECT WITH A DOCTOR WITHIN 4 MINUTES</Card.Title>
                 <Button buttonStyle={{backgroundColor:"#0d47ba"}} title="JUST PAY ₹100" />
               </Card>
             </View>
             <View>
               <Text style={{textAlign:'center',paddingTop:7}}>CONNECT WITH A DOCTOR WITHIN 2.5 HOURS</Text>
             </View>
             <View>
               <Card containerStyle={{marginHorizontal:0}}>
                 <View style={{flexDirection:"row"}} >
                   <View style={{width:88}}>
                     <Image source={require('../../../../../resources/doctor.png')} style={{height:'72%',width:'100%',backgroundColor:"rgba(28, 82, 217, 0.22)"}} />
                     <View style={{backgroundColor:"#0d47ba",alignItems:"center",justifyContent:"center"}} >
                       <Text style={{color:"white"}}>₹400</Text>
                     </View>
                   </View>
                   <View>
                     <View>
                       <View><Text style={{paddingLeft:20,fontWeight:"bold",fontSize:19,color:"#6a6868"}}>Dr.John Doe</Text></View>
                       <View><Text style={{paddingLeft:20,marginTop:3,color:"#0274ED",fontWeight:"bold"}}>5 Years of Experience</Text></View>
                     </View>
                       <View style={{flexDirection:"row",margin:20,marginLeft:20,marginTop:15}} >
                         <TouchableOpacity style={{backgroundColor:"#0d47ba",alignItems:"center",justifyContent:"center",marginRight:7,borderRadius:10}} >
                         <Text style={{padding:6,fontSize:12,color:"white"}}>MBBS</Text>
                         </TouchableOpacity>
                         <TouchableOpacity style={{backgroundColor:"#0d47ba",alignItems:"center",justifyContent:"center",marginRight:7,borderRadius:10}} >
                         <Text style={{padding:6,fontSize:12,color:"white"}}>MD</Text>
                         </TouchableOpacity>
                         
                       </View>
                       <View><Text style={{paddingLeft:20}}>23 Recommends</Text></View>
                   </View>
                 </View>
               </Card>


             </View>
           </View>
         </ScrollView>
        );
    }

}

export default coughcold;