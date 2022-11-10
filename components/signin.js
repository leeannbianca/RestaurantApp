import React, {useState} from 'react';
import { View, Text, TouchableOpacity , StyleSheet, Image, TextInput} from 'react-native';
import logo from './images/logo.png'
import { signInWithEmailAndPassword } from "firebase/auth";

import {auth} from '../components/Config/firebase'

function SignIn({navigation}) {

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const SignUpPage = (()=>{
    navigation.navigate('signup')
          
 })
 

 const ForgotPasswordPage = (()=>{
  navigation.navigate('forgotPassword')
        
})


const SignIn = (()=>{

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigation.navigate('home');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

})

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white' }}>

       <Image source={logo} style={{ width:305, height:300 }} />
       
       <TextInput placeholder="email" style={styles.input}  onChangeText={(email)=> setEmail(email)} />
       

       <TextInput placeholder="password" style={styles.input}   onChangeText={(password)=> setPassword(password)} />
       <Text style={{fontSize:12, color:'#0000FF', paddingLeft:100}}>Forgot password?</Text>
       



        <TouchableOpacity style={styles.btn} onPress={SignIn}  >
       <Text style={{ fontSize:20, color: '#fff', fontStyle:'italic', paddingLeft:3,}}>SignIn</Text>
       </TouchableOpacity>

       <TouchableOpacity onPress={ForgotPasswordPage}>
       <Text style={{ fontSize:20, color: '#fff', fontStyle:'italic', paddingLeft:3, paddingTop:2}}>SignIn</Text>
       </TouchableOpacity>

       
    </View>

    
  );
}


const styles = StyleSheet.create({
  btn :{
    backgroundColor:"#E16293",
    width:117,
    height:52,
    borderRadius:30,
    marginLeft:10,
    paddingLeft:30, 
    paddingTop:12,
    marginTop:30
  

  }, 

  input:{
    backgroundColor:'#FDCCD5',
    borderRadius:30,
    width:265,
    height:62,
    paddingLeft:15,
    marginTop:30,
    fontSize:20, 
    color: '#fff', 
    fontStyle:'italic',

  }
  
});
export default SignIn