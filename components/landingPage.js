import React from 'react';
import { View, Text, TouchableOpacity , StyleSheet, Image, TextInput} from 'react-native';
import logo from './images/logo.png'

function LandingPage({navigation}) {

  const SignUpPage = (()=>{
    navigation.navigate('signup')
       
 })


 const SignInPage = (()=>{
    navigation.navigate('signin')

})
   

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white' }}>

       <Image source={logo} style={{ width:305, height:300 }} />


       <TouchableOpacity style={styles.btn} onPress={SignInPage}  >
       <Text style={{ fontSize:20, color: '#fff', fontStyle:'italic', paddingLeft:3,}}>SignIn</Text>
       </TouchableOpacity>
       

       <TouchableOpacity style={styles.btn} onPress={SignUpPage}  >
       <Text style={{ fontSize:20, color: '#fff', fontStyle:'italic', paddingLeft:3,}}>SignUp</Text>
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
export default LandingPage;