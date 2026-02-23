import React from 'react'
import { View,Image } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';

const Contact = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { data } = route.params;

  return (
    <>

      <Button onPress={() => navigation.navigate("Home")}>
        Back to Home
      </Button>
      {
        data.map((ele) => (
          <View >
            <Image source={ele.image } style={{width:50,height:50}} />
            <Text>{ele.name}</Text>
          </View>
        ))
      }
    </>
  )
}

export default Contact;