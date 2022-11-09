import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import search from './images/icons/search.png'
import brigadeiro from './images/icons/brigadeiro.png'
import doughnutOne from './images/icons/doughnutOne.png'
import shortcake from './images/icons/shortcake.png'
import vanillagold from './images/vanillagold.png'
import strawberry from './images/strawberry.png'
import chocolateDoughnut from './images/chocolatecupcake.png'
import blue from './images/blue.png'


export default function Home({ navigation }) {


  const DoughNuts = (() => {
    navigation.navigate('doughnuts')


  })


  const Cakes = (() => {
    navigation.navigate('cakes')


  })


  const HomePage = (() => {
    navigation.navigate('home')


  })

  const StrawberryOnClick = (() => {
    navigation.navigate('item')

  })

  return (
    <View style={styles.container}>

      <TextInput placeholder="search" style={styles.input} />


      <TouchableOpacity style={{ marginLeft: -210, marginTop: -45 }}>
        <Image source={search} style={{ width: 30, height: 30, }} />
      </TouchableOpacity>



      <View style={{ flexDirection: 'row', marginTop: 40, }}>

        <TouchableOpacity onPress={HomePage} style={{ padding: 30, }}>
          <Image source={brigadeiro} style={{ width: 50, height: 50 }} />
        </TouchableOpacity>


        <TouchableOpacity onPress={DoughNuts} style={{ padding: 30, }}>
          <Image source={doughnutOne} style={{ width: 50, height: 50 }} />
        </TouchableOpacity>


        <TouchableOpacity onPress={Cakes} style={{ padding: 30, }}>
          <Image source={shortcake} style={{ width: 50, height: 50 }} />
        </TouchableOpacity>

      </View>





      <View style={{ backgroundColor: '#FDCCD5', borderRadius: 30, width: 120, height: 200, marginLeft: -180, marginTop: 30 }} >

        <Text style={{ color: 'white', fontStyle: 'italic', fontSize: 20, marginLeft: 10, marginTop: 60 }}>
          Strawberry
        </Text>

        <Text style={{ color: 'white', fontStyle: 'italic', fontSize: 20, marginLeft: 20 }}>
          Cup Cake
        </Text>

        <Text style={{ paddingLeft: 20, color: '#E16293', fontStyle: 'italic', fontSize: 30, marginLeft: 10 }}>
          R20
        </Text>

      </View>


      <TouchableOpacity  style={{ backgroundColor: '#E16293', borderRadius: 50, width: 90, height: 90, marginLeft: -100, marginTop: -230 }} onPress={()=> navigation.navigate('item', {item:"Strawberry ", title:"Cup cake", image:require('./images/strawberry.png')})}>
        <Image source={strawberry} style={{ width: 60, height: 70, marginLeft: 10, }} />
      </TouchableOpacity>







      <View style={{ backgroundColor: '#FDCCD5', borderRadius: 30, width: 120, height: 200, marginTop: -60, marginLeft: 180 }}>

        <Text style={{ color: 'white', fontStyle: 'italic', fontSize: 20, marginLeft: 15, marginTop: 60 }}>
          Chocolate
        </Text>


        <Text style={{ color: 'white', fontStyle: 'italic', fontSize: 20, marginLeft: 20 }}>
          Cup Cake
        </Text>


        <Text style={{ paddingLeft: 20, color: '#E16293', fontStyle: 'italic', fontSize: 30, marginLeft: 10 }}>
          R20
        </Text>


      </View>



      <TouchableOpacity style={{ backgroundColor: '#E16293', borderRadius: 50, width: 90, height: 90, marginTop: -230, marginLeft: 260 }}   onPress={()=> navigation.navigate('item', {item:"Chocolate ", title:"Cup cake", image:require('./images/chocolatecupcake.png')})}>
        <Image source={chocolateDoughnut} style={{ width: 60, height: 70, marginLeft: 15, marginTop: 5 }} />
      </TouchableOpacity>








      <View style={{ backgroundColor: '#FDCCD5', borderRadius: 30, width: 120, height: 200, marginLeft: -180, marginTop: 200 }}>

        <Text style={{ color: 'white', fontStyle: 'italic', fontSize: 20, marginLeft: 10, marginTop: 60 }}>
          VanillaGold
        </Text>


        <Text style={{ color: 'white', fontStyle: 'italic', fontSize: 20, marginLeft: 20 }}>
          Cup Cake
        </Text>


        <Text style={{ paddingLeft: 20, color: '#E16293', fontStyle: 'italic', fontSize: 30, marginLeft: 10 }}>
          R20
        </Text>



      </View>

      <TouchableOpacity style={{ backgroundColor: '#E16293', borderRadius: 50, width: 90, height: 90, marginLeft: -100, marginTop: -230 }}  onPress={()=> navigation.navigate('item', {item:"VanillaGold ", title:"Cup cake", image:require('./images/vanillagold.png')})}>
        <Image source={vanillagold} style={{ width: 50, height: 50, marginLeft: 20, marginTop: 20 }} />
      </TouchableOpacity>








      <View style={{ backgroundColor: '#FDCCD5', borderRadius: 30, width: 120, height: 200, marginTop: -60, marginLeft: 180 }}>

        <Text style={{ color: 'white', fontStyle: 'italic', fontSize: 20, marginLeft: 19, marginTop: 60 }}>
          BlueBerry
        </Text>


        <Text style={{ color: 'white', fontStyle: 'italic', fontSize: 20, marginLeft: 20 }}>
          Cup Cake
        </Text>


        <Text style={{ paddingLeft: 20, color: '#E16293', fontStyle: 'italic', fontSize: 30, marginLeft: 10 }}>
          R20
        </Text>



      </View>

      <TouchableOpacity style={{ backgroundColor: '#E16293', borderRadius: 50, width: 90, height: 90, marginTop: -230, marginLeft: 260 }}  onPress={()=> navigation.navigate('item', {item:"BlueBerry ", title:"Cup cake", image:require('./images/blue.png')})}>
        <Image source={blue} style={{ width: 60, height: 60, marginLeft: 15, marginTop: 10 }} onPress={HomePage} />
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

  input: {
    backgroundColor: '#FDCCD5',
    borderRadius: 30,
    width: 265,
    height: 62,
    paddingLeft: 50,
    marginTop: 30,
    fontSize: 20,
    color: '#fff',
    fontStyle: 'italic',

  }



});
