import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import search from './images/icons/search.png'
import brigadeiro from './images/icons/brigadeiro.png'
import doughnutOne from './images/icons/doughnutOne.png'
import shortcake from './images/icons/shortcake.png'
import vanillagold from './images/vanillagold.png'
import ChockDoughnut from './images/chocolatedoughnut.png'
import caramelDoughnut from './images/carameldoughnut.png'
import vanillaDoughnut from './images/vanilladoughnut.png'
import strawberryDoughnut from './images/StrawberryDoughnut.png'


export default function DoughNuts ({navigation})  {

  const DoughNuts = (()=>{
    navigation.navigate('doughnuts')
       
       
 })
 const Cakes = (()=>{
  navigation.navigate('cakes')
     
     
})
const HomePage = (()=>{
  navigation.navigate('home')
     
     
})

  return (
    <View style={styles.container}>
       

       <View style={{flexDirection:'row', marginTop:40,}}>
 
        <TouchableOpacity  onPress={HomePage} style={{padding:30,}}> 
        <Image source={brigadeiro} style={{ width:50, height:50 }}/>
        </TouchableOpacity>

 
        <TouchableOpacity  onPress={DoughNuts} style={{padding:30,}}>
        <Image source={doughnutOne} style={{ width:50, height:50 }}/>
        </TouchableOpacity>

 
        <TouchableOpacity onPress={Cakes} style={{padding:30,}}> 
        <Image source={shortcake} style={{ width:50, height:50 }}/>
        </TouchableOpacity>
 
       </View>




       <View style={{backgroundColor:'#FDCCD5', borderRadius:30, width:120, height:200, marginLeft:-180, marginTop:30}}>

       <Text style={{ color:'white', fontStyle:'italic', fontSize:20, marginLeft:20, marginTop:60}}>Caramel</Text>
       <Text style={{ color:'white', fontStyle:'italic', fontSize:20, marginLeft:20}}>Doughnut</Text>
       <Text style={{paddingLeft:20, color:'#E16293', fontStyle:'italic', fontSize:30, marginLeft:10}}> R20 </Text>

       </View>

       <TouchableOpacity style={{backgroundColor:'#E16293', borderRadius:50, width:90, height:90, marginLeft:-100, marginTop:-230}} onPress={()=> navigation.navigate('item', {item:"Caramel ", title:"Doughnut", image:require('./images/carameldoughnut.png'), price:"R20"})}>
        <Image source={caramelDoughnut} style={{ width:50, height:60, marginLeft:20, marginTop:20, borderRadius:50 }} />
        </TouchableOpacity>







       <View style={{backgroundColor:'#FDCCD5', borderRadius:30, width:120, height:200, marginTop:-60, marginLeft:180}}>

<Text style={{ color:'white', fontStyle:'italic', fontSize:20, marginLeft:20, marginTop:60}}>Vanilla</Text>
<Text style={{ color:'white', fontStyle:'italic', fontSize:20, marginLeft:20}}>Doughnut</Text>
<Text style={{paddingLeft:20, color:'#E16293', fontStyle:'italic', fontSize:30, marginLeft:10}}> R20 </Text>

</View>



<TouchableOpacity style={{backgroundColor:'#E16293', borderRadius:50, width:90, height:90, marginTop:-230, marginLeft:260}} onPress={()=> navigation.navigate('item', {item:"Vanilla ", title:"Doughnut", image:require('./images/vanilladoughnut.png'), price:"R20"})}>
  <Image source={vanillaDoughnut} style={{ width:70, height:60, marginLeft:10, marginTop:20, borderRadius:50 }} />
  </TouchableOpacity>








<View style={{backgroundColor:'#FDCCD5', borderRadius:30, width:120, height:200, marginLeft:-180, marginTop:200}}>

<Text style={{ color:'white', fontStyle:'italic', fontSize:20, marginLeft:10, marginTop:60}}>Strawberry</Text>
<Text style={{ color:'white', fontStyle:'italic', fontSize:20, marginLeft:20}}>Doughnut</Text>
<Text style={{paddingLeft:20, color:'#E16293', fontStyle:'italic', fontSize:30, marginLeft:10}}> R20 </Text>

</View>



<TouchableOpacity style={{backgroundColor:'#E16293', borderRadius:50, width:90, height:90, marginLeft:-100, marginTop:-230}} onPress={()=> navigation.navigate('item', {item:"Strawberry ", title:"Doughnut", image:require('./images/StrawberryDoughnut.png'), price:"R20"})}>
  <Image source={strawberryDoughnut} style={{ width:50, height:50, marginLeft:20, marginTop:20, borderRadius:50 }} />
  </TouchableOpacity>








<View style={{backgroundColor:'#FDCCD5', borderRadius:30, width:120, height:200, marginTop:-60, marginLeft:180}}>

<Text style={{ color:'white', fontStyle:'italic', fontSize:20, marginLeft:15, marginTop:60}}>Chocolate</Text>
<Text style={{ color:'white', fontStyle:'italic', fontSize:20, marginLeft:15}}>Doughnut</Text>
<Text style={{paddingLeft:20, color:'#E16293', fontStyle:'italic', fontSize:30, marginLeft:10}}> R20 </Text>

</View>



<TouchableOpacity style={{backgroundColor:'#E16293', borderRadius:50, width:90, height:90, marginTop:-230, marginLeft:260}} onPress={()=> navigation.navigate('item', {item:"Chocolate ", title:"Doughnut", image:require('./images/chocolatedoughnut.png'), price:"R20"})}>
  <Image source={ChockDoughnut} style={{ width:60, height:60, marginLeft:15, marginTop:15, borderRadius:50 }} />
  </TouchableOpacity>

       



    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center', 
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

  }



});

