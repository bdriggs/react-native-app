import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";

import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";

function LoginScreen(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/logo-red.png")}
      ></Image>
      <AppTextInput
        autoCapitalize="none"
        autoCorrect="false"
        icon="email"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        textContentType="emailAddress"
      ></AppTextInput>
      <AppTextInput
        autoCapitalize="none"
        autoCorrect="false"
        icon="lock"
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        sourceTextEntry
        textContentType="password"
      ></AppTextInput>
      <AppButton
        title="Login"
        onPress={() => {
          console.log(email, password);
        }}
      ></AppButton>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 50,
  },
});

export default LoginScreen;