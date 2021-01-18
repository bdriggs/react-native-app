import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Platform, Text } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppText from "./app/components/AppText/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItemSeparator from "./app/components/ListItemSeparator";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";

export default function App() {
  return <ListingScreen></ListingScreen>;
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
