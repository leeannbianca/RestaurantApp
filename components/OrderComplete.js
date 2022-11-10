import React from 'react';
import { View, Text, TouchableOpacity , StyleSheet, Image, TextInput} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import popper from './images/icons/popper.png'

function Complete() {

 

  return (
  <ScrollView>

<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white' }}>

<Image source={popper} style={{ width:200, height:200 }} />

<Text style={{ fontSize:20, fontStyle:'italic', paddingLeft:3, paddingTop:2}}>Your order is Complete </Text>

<TouchableOpacity>
<Text style={{ fontSize:20, color: '#fff', fontStyle:'italic', paddingLeft:3, paddingTop:2}}>Check Order</Text>
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
    marginLeft:10,
    paddingLeft:30, 
    paddingTop:12,
    marginTop:30
  

  }, 


  
});
export default Complete