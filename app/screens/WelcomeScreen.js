import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text } from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text styles={styles.tagline}> Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title={"login"}
          onPress={() => console.log("Login Tapped")}
        />
        <AppButton
          title={"register"}
          onPress={() => console.log("Register Tapped")}
          color="secondary"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center", // aligns the items on the secondary axis, since flex is defaulted to columm,
    //primary is vertical alignment secondary is horizontal.
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
