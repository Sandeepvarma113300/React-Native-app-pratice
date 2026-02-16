import React from 'react';
import { View, StyleSheet, StatusBar,Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Myimage from "./assets/adaptive-icon.png"
const Component = () => {
  const insets = useSafeAreaInsets();
  console.log(insets)
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={[
          styles.statusBar,{ height: insets.top }]} 
    />  
    <View style={styles.body}>
        <View style={styles.part1}></View>
        <View style={styles.part2}></View>
    </View>

    </>
  );
};

export default Component;

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#e16f12'
  },
  body:{
    width:"100%",
    height:900,
    borderWidth:10,
    borderColor:"red",
    position:"relative"
  },
  part1:{
    width:"20%",
    height:100,
    backgroundColor:"red",
    position:"relative",
    top:"30%",
    left:"40%"
  },
   part2:{
    width:"20%",
    height:100,
    backgroundColor:"yellow",
    position:"absolute",
    left:"50%"
  }
});
