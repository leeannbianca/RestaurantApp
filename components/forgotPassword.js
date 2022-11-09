import React from 'react';
import { View, Text, TouchableOpacity , StyleSheet, Image, TextInput} from 'react-native';
import logo from './images/logo.png'

function ForgotPassword({navigation}) {



  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white' }}>

       <Image source={logo} style={{ width:305, height:300 }} />

       
       <TextInput placeholder="email" style={styles.input} />


       <TouchableOpacity style={styles.btn}>
       <Text style={{ fontSize:20, color: '#fff', fontStyle:'italic'}}>Submit</Text>
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
export default ForgotPassword