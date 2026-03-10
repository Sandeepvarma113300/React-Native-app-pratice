import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import * as LocalAuthentication from "expo-local-authentication";

const FingerPrint = () => {

  const [message, setMessage] = useState("");

  const authenticateUser = async () => {
    try {

      // Check if biometric hardware exists
      const hasHardware = await LocalAuthentication.hasHardwareAsync();
      if (!hasHardware) {
        setMessage("Device does not support biometric authentication");
        return;
      }

      // Check if user enrolled biometrics
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();
      if (!isEnrolled) {
        setMessage("No biometric records found. Please register fingerprint.");
        return;
      }

      // Authenticate
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: "Authenticate with Fingerprint",
        fallbackLabel: "Use Passcode",
        disableDeviceFallback: false
      });

      if (result.success) {
        setMessage("Authentication Successful ");
      } else {
        setMessage("Authentication Failed ");
      }

    } catch (error) {
      console.log(error);
      setMessage("Authentication error");
    }
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Fingerprint Authentication</Text>

      <Button
        mode="contained"
        onPress={authenticateUser}
        style={styles.button}
      >
        Scan Fingerprint
      </Button>

      <Text style={styles.result}>{message}</Text>
    </View>
  );
};

export default FingerPrint;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    marginTop: 20,
    paddingHorizontal: 20
  },
  result: {
    marginTop: 20,
    fontSize: 16
  }
});