import React, { useState } from 'react';
import { View, Text, TouchableOpacity , StyleSheet, Image, TextInput, ScrollView} from 'react-native';
import logo from './images/logo.png'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../components/Config/firebase'

function SignUp({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');




  const HomePage = (()=>{
    navigation.navigate('home')
       
       
 })


 const Register =()=>{

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigation.navigate('signin');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });


 }
  return (
   
    <ScrollView>

<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white' }}>

<Image source={logo} style={{ width:305, height:300 }} />

<TextInput placeholder="name" style={styles.input}      />

<TextInput placeholder="email" style={styles.input}   onChangeText={(email)=> setEmail(email)} />

<TextInput placeholder="cell" style={styles.input} />

<TextInput placeholder="password" style={styles.input}  onChangeText={(password)=> setPassword(password)} />

<TextInput placeholder="confirm password" style={styles.input} />

<TouchableOpacity style={styles.btn} onPress={Register}> 
<Text style={{ fontSize:20, color: '#fff', fontStyle:'italic', paddingLeft:30, paddingTop:12}}>SignUp</Text>
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
export default SignUp