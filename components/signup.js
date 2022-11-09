import React from 'react';
import { View, Text, TouchableOpacity , StyleSheet, Image, TextInput, ScrollView} from 'react-native';
import logo from './images/logo.png'

function SignUp({navigation}) {

  const HomePage = (()=>{
    navigation.navigate('home')
       
       
 })

  return (
   
    <ScrollView>

<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white' }}>

<Image source={logo} style={{ width:305, height:300 }} />

<TextInput placeholder="name" style={styles.input} />

<TextInput placeholder="email" style={styles.input} />

<TextInput placeholder="cell" style={styles.input} />

<TextInput placeholder="password" style={styles.input} />

<TextInput placeholder="confirm password" style={styles.input} />

<TouchableOpacity style={styles.btn} onPress={HomePage}> 
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