import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import SignIn from './components/signin';
import SignUp from './components/signup';
import Home from './components/home';
import Cakes from './components/cakes';
import Item from './components/Item';
import Forms from './components/forms';
import OrderComplete from './components/OrderComplete';
import ForgotPassword from './components/forgotPassword';
import DoughNuts from './components/doughnuts';
import LandingPage from './components/landingPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();





export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>

    
    <Stack.Screen name="landingpage" component={LandingPage} />
    <Stack.Screen name="signin" component={SignIn} />
    <Stack.Screen name="forgotPassword" component={ForgotPassword} />
    <Stack.Screen name="signup" component={SignUp} />
    <Stack.Screen name="home" component={Home} />
    <Stack.Screen name="doughnuts" component={DoughNuts} />
    <Stack.Screen name="cakes" component={Cakes} />
    
    <Stack.Screen name="item" component={Item} />
    <Stack.Screen name="form" component={Forms} /> 
    <Stack.Screen name="complete" component={OrderComplete} /> 
    
    </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
 
});
