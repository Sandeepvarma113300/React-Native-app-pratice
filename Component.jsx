import React, { useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, TextInput, Chip } from 'react-native-paper';

const Component = () => {

  const insets = useSafeAreaInsets();

  const [input, setinput] = useState("");
  const [store, setstore] = useState([]);
  const addToArray = () => {
    if (input.trim() !== "") {
      setstore([...store, input]);
      setinput("");
    }
  };
const ClosedHandle = (deleteItem) => {
  const data = store.filter((item) => item !== deleteItem);
  setstore(data);
 };


  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={[styles.statusBar, { height: insets.top }]} />

      
      <TextInput
       placeholder='enter the text' value={input} onChangeText={setinput}
      />

      <Button mode="contained" onPress={addToArray}>
        Add
      </Button>

       <View style={{ margin: 20, flexDirection: "row", flexWrap: "wrap" }}>
        {
        store.map((item, index) => (
          <Chip
            key={index}
            style={{ margin: 5 }}
            onClose={() => ClosedHandle(item)}
          >
            {item}
          </Chip>
        ))
        }
      </View>  
    </>
  );
};

export default Component;

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "black",
  },
});
