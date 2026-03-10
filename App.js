import React from "react";
import Component from "./Component";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Contact from "./Contact";
import { Icon } from "react-native-paper";
import MediaPicker from "./MediaPicker";
import FingerPrint from "./FingerPrint"
const App = () => {
  // const Stack=createNativeStackNavigator();
  return (
  // <NavigationContainer>
  //   <Stack.Navigator screenOptions={{
  //     // title:"sandeep",
  //     // headerShown:false,
  //     headerStyle:{
  //       backgroundColor:"skyblue"
  //     },
  //     headerTintColor:"black",
  //     headerTitleStyle:{
  //       fontSize:20
  //     },
  //     headerTitleAlign:"center",
  //     headerRight:()=> <Icon source={"bell"} size={24}/>,
  //       // headerLeft:() => <Icon source={"home"} size={24}/>,
  //       //headerBackButtonDisplayMode:"minimal",
  //       animation:"fade"
  
  //   }}>
  //     <Stack.Screen name="Home" component={Home}/>
  //     <Stack.Screen name="Contact" component={Contact}/>
  //   </Stack.Navigator>
  // </NavigationContainer>
   <SafeAreaProvider>
   <FingerPrint/>
</SafeAreaProvider>


  );
};

export default App;
