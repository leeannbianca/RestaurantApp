import React from 'react';
import { View, Text, TouchableOpacity , StyleSheet, Image, TextInput, ScrollView} from 'react-native';
import logo from './images/logo.png'

import {db} from './Config/firebase'
import { collection, addDoc } from "firebase/firestore"; 

function Forms({navigation, route}) {





  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [cell, setCell] = React.useState('');
  const [street, setStreet] = React.useState('');
  const [suburb, setSuburb] = React.useState('');

    



  const AddOrders = ( async ()=>{


    try {
      const docRef = await addDoc(collection(db, "Orders"), {
        name:name,
        email:email,
        cell:cell,
        street:street,
        suburb:suburb,
        item:route.params.menu +  route.params.title,
        price:route.params.price
       
        
      });
      console.log("Document written with ID: ", docRef.id);
      navigation.navigate('complete')
    } catch (e) {
      console.error("Error adding document: ", e);
    }
   
       
 })

  return (
   
    <ScrollView>

<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white', paddingTop:20 }}>

<Image source={logo} style={{ width:100, height:100 }} />

<Text style={{ fontStyle:'italic' , color:'#E16293',  fontSize:30}}>Enter Details</Text>

<TextInput placeholder="name" style={styles.input}  onChangeText={(name)=> setName(name)} />

<TextInput placeholder="email" style={styles.input}  onChangeText={(email)=> setEmail(email)} />

<TextInput placeholder="cell" style={styles.input}  onChangeText={(cell)=> setCell(cell)} />

<TextInput placeholder="street" style={styles.input}  onChangeText={(street)=> setStreet(street)}/>

<TextInput placeholder="suburb" style={styles.input}  onChangeText={(suburb)=> setSuburb(suburb)}/>




<TouchableOpacity style={styles.btn} onPress={AddOrders}> 
<Text style={{ fontSize:20, color: '#fff', fontStyle:'italic', paddingLeft:30, paddingTop:12}}>Submit</Text>
</TouchableOpacity>



</View>

    </ScrollView>

    
  );
}


const styles = StyleSheet.create({
  btn :{
    backgroundColor:"#E16293",
    width:117,
    height:52,
    borderRadius:30,
    marginTop:30
  

  }, 

  input:{
    backgroundColor:'#FDCCD5',
    borderRadius:30,
    width:265,
    height:62,
    paddingLeft:15,
    marginTop:30,
    color:'white',           
    fontStyle:'italic',
    fontSize:20,

  }
  
});
export default Forms