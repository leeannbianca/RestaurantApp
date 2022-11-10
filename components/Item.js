import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import search from './images/icons/search.png'
import strawberry from './images/strawberry.png'



export default function Item ({navigation, route})  {


  
 


  return (
    <View style={styles.container}>
    

       <View style={{backgroundColor:'#FDCCD5', borderRadius:30, width:350, height:350, marginTop:80}}  >

       <Text style={{ color:'white', fontStyle:'italic', fontSize:20, marginLeft:120, }}>{route.params.item}</Text>
       <Text style={{ color:'white', fontStyle:'italic', fontSize:20, marginLeft:120}}>{route.params.title}</Text>
       <Text style={{paddingLeft:20, color:'#E16293', fontStyle:'italic', fontSize:30, marginLeft:230, marginTop:-50}}>{route.params.price} </Text>


       <Text style={{ color:'white', fontStyle:'italic', fontSize:20, marginLeft:20, marginTop:50, textAlign:'center' }}>Enjoy a smooth {route.params.item}
            love on regular cupcakes. 
            Super Moist cake mix - perfect 
            for dessert. </Text>



       </View>

       <TouchableOpacity style={{backgroundColor:'#E16293', borderRadius:50, width:100, height:100, marginLeft:-240, marginTop:-390}}><Image source={route.params.image} style={{ width:70, height:80, marginLeft:10, }} /></TouchableOpacity>



       
       <TouchableOpacity  onPress={()=> navigation.navigate('form', { menu:route.params.item, title:route.params.title, price:route.params.price})}  style={styles.btn}>
       <Text style={{ fontSize:20, color: '#fff', fontStyle:'italic', paddingLeft:3, paddingTop:2}}>Add to Cart</Text>
       </TouchableOpacity>

       



    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center', 
    textAlign:'center'
  },

  input:{
    backgroundColor:'#FDCCD5',
    borderRadius:30,
    width:265,
    height:62,
    paddingLeft:50,
    marginTop:30,
    fontSize:20, 
    color: '#fff', 
    fontStyle:'italic',

  },

  btn :{
    backgroundColor:"#E16293",
    width:170,
    height:52,
    borderRadius:30,
    marginLeft:10,
    paddingLeft:30, 
    paddingTop:12,
    marginTop:170
  

  },



});

