import React, { useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, TextInput, Chip,Dialog,Text,Card,Snackbar,List} from 'react-native-paper';

const Component = () => {

  const insets = useSafeAreaInsets();

//   const [input, setinput] = useState("");
//   const [store, setstore] = useState([]);
//   const addToArray = () => {
//     if (input.trim() !== "") {
//       setstore([...store, input]);
//       setinput("");
//     }
//   };
// const ClosedHandle = (deleteItem) => {
//   const data = store.filter((item) => item !== deleteItem);
//   setstore(data);
//  };
  // const [open, setOpen] = useState(false);

  //  const show = () => setOpen(true);
  //  const hide = () => setOpen(false);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={[styles.statusBar, { height: insets.top }]} />

      
                      {/* <TextInput
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

                      </View>   */}
                   {/* <Button onPress={show}>show the pop box</Button>
              <View style={{display:"flex",justifyContent:"center"}}>       
                <Dialog visible={open}>
                  <Dialog.Title>
                    delete this item
                  </Dialog.Title>
                  <Dialog.Content>
                    <Text>delete thr item?</Text>
                  </Dialog.Content>
                  <Dialog.Actions>
                    <Button onPress={show}>Ok</Button>
                    <Button onPress={notshow}>exit</Button>
                  </Dialog.Actions>
                </Dialog>
            </View> */}

          {/* <View>
           <Card>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />

          <Card.Title title="Something to be shown" />

          <Card.Content>
            <Text>Hi Hello</Text>
          </Card.Content>

          <Card.Actions>
            <Button onPress={show}>Delete</Button>
          </Card.Actions>
        </Card>
          </View> */}
          {/* <Button onPress={show}>show snackbar</Button>
          <View>
            <Snackbar visible={open} duration={2000}  onDismiss={() =>hide(false)}>
            item added
            </Snackbar>
          </View> */}
           <List.Section>
      <List.Item
        title="Profile"
        left={() => <List.Icon icon="account" />}
      />

      <List.Item
        title="Orders"
        left={() => <List.Icon icon="cart" />}
      />

      <List.Item
        title="Logout"
        left={() => <List.Icon icon="logout" />}
      />

    </List.Section>

    </>
  );
};

export default Component;

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "black",
  },
});
