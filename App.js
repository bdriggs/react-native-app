import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Platform, Text } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppText from "./app/components/AppText/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  return <ListingDetailsScreen></ListingDetailsScreen>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  tinyLogo: {
    width: 75,
    height: 75,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    top: "15%",
  },
});
