import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import search from './images/icons/search.png'
import brigadeiro from './images/icons/brigadeiro.png'
import doughnutOne from './images/icons/doughnutOne.png'
import shortcake from './images/icons/shortcake.png'
import vanillagold from './images/vanillagold.png'
import redvelvet from './images/redvelvet.png'
import banannacake from './images/banannacake.png'
import passionfruitcake from './images/passionfruitcake.png'
import carrot from './images/carrot.png'


export default function Cakes ({navigation})  {

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

       <Text style={{ color:'white', fontStyle:'italic', fontSize:20, marginLeft:15, marginTop:60}}>RedVelvet</Text>
       <Text style={{ color:'white', fontStyle:'italic', fontSize:20, marginLeft:15}}> Slice Cake</Text>
       <Text style={{paddingLeft:20, color:'#E16293', fontStyle:'italic', fontSize:30, marginLeft:10}}> R20 </Text>

       </View>

       <TouchableOpacity style={{backgroundColor:'#E16293', borderRadius:50, width:90, height:90, marginLeft:-100, marginTop:-230}}>
        <Image source={redvelvet} style={{ width:50, height:60, marginLeft:20, marginTop:20, borderRadius:30 }} />
        </TouchableOpacity>







       <View style={{backgroundColor:'#FDCCD5', borderRadius:30, width:120, height:200, marginTop:-60, marginLeft:180}}>

<Text style={{ color:'white', fontStyle:'italic', fontSize:20, marginLeft:20, marginTop:60}}>Bananna</Text>
<Text style={{ color:'white', fontStyle:'italic', fontSize:20, marginLeft:20}}>Slice Cake</Text>
<Text style={{paddingLeft:20, color:'#E16293', fontStyle:'italic', fontSize:30, marginLeft:10}}> R20 </Text>

</View>



<TouchableOpacity style={{backgroundColor:'#E16293', borderRadius:50, width:90, height:90, marginTop:-230, marginLeft:260}}>
  <Image source={banannacake} style={{ width:60, height:60, marginLeft:15, marginTop:20, borderRadius:30 }} />
  </TouchableOpacity>








<View style={{backgroundColor:'#FDCCD5', borderRadius:30, width:120, height:200, marginLeft:-180, marginTop:200}}>

<Text style={{ color:'white', fontStyle:'italic', fontSize:20, marginLeft:10, marginTop:60}}>PassionFruit</Text>
<Text style={{ color:'white', fontStyle:'italic', fontSize:20, marginLeft:20}}>Slice Cake</Text>
<Text style={{paddingLeft:20, color:'#E16293', fontStyle:'italic', fontSize:30, marginLeft:10}}> R20 </Text>

</View>


<TouchableOpacity style={{backgroundColor:'#E16293', borderRadius:50, width:90, height:90, marginLeft:-100, marginTop:-230}}>
  <Image source={passionfruitcake} style={{ width:80, height:70, marginLeft:5, marginTop:10, }} />
  </TouchableOpacity>








<View style={{backgroundColor:'#FDCCD5', borderRadius:30, width:120, height:200, marginTop:-60, marginLeft:180}}>

<Text style={{ color:'white', fontStyle:'italic', fontSize:20, marginLeft:20, marginTop:60}}>Carrot</Text>
<Text style={{ color:'white', fontStyle:'italic', fontSize:20, marginLeft:20}}>Slice Cake</Text>
<Text style={{paddingLeft:20, color:'#E16293', fontStyle:'italic', fontSize:30, marginLeft:10}}> R20 </Text>

</View>


<TouchableOpacity style={{backgroundColor:'#E16293', borderRadius:50, width:90, height:90, marginTop:-230, marginLeft:260}}>
  <Image source={carrot} style={{ width:50, height:50, marginLeft:20, marginTop:20, borderRadius:30 }} />
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

