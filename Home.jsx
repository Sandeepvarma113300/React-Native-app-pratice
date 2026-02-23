import React from 'react'
import { Text,Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import MyImage from "./assets/icon.png"
const Home = () => {
    const navigation=useNavigation();
    const users=[
        {
        name:"sandeep",
        image:MyImage
    }];
  return (
    <>
    <Button onPress={()=>navigation.navigate("Contact",{data:users}

    )}>Enter into Contact Page</Button>
    </>
  )
}

export default Home;