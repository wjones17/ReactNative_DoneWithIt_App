import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import AppButton from "./app/components/AppButton";
import AppPicker from "./app/components/AppPicker";
import AppText from "./app/components/AppText";
import AppTextInput from "./app/components/AppTextInput";
import Card from "./app/components/Card";
import AppFormPicker from "./app/components/forms/AppFormPicker";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingScreen from "./app/screens/ListingScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
// import {
//   useDimensions,
//   useDeviceOrientation,
// } from "@react-native-community/hooks";

export default function App() {
  return <ListingEditScreen />;
}

// (
//   <WelcomeScreen />
// <View
//   style={{
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   }}
// >
//   <AppButton title="login" onPress={() => console.log("Tapped")} />
// </View>
// );

//   const TextPress = () => console.log("Text pressed");
//   const ButtonPress = () => console.log("button pressed");
//   const picturePress = () => console.log("picture pressed");

//   // gets the dimensoons of the current device screen
//   // console.log(useDimensions());

//   //Gets the device's current orientation
//   // const orientation = useDeviceOrientation();

//   //Or could use object destructuring and pic the landscape property from it
//   const { landscape } = useDeviceOrientation();

//   ///PRACTICE AND NOTES ARE COMMENTED OUT
//   // return (
//   //   <SafeAreaView style={styles.container}>
//   //     {/* sets an image from the assets folder of the project */}
//   //     {/* <Image source={require("./assets/favicon.png")} /> */}

//   //     {/* handles the text being pressed option */}
//   //     {/* <Text onPress={TextPress}>Hello React native!</Text> */}

//   //     {/* click on the picture and no feedback happens on touch */}
//   //     {/* <TouchableWithoutFeedback>
//   //       <Image
//   //         fadeDuration={4000}
//   //         blurRadius={0}
//   //         source={{r
//   //           width: 200,
//   //           height: 300,
//   //           uri: "https://picsum.photos/200/300",
//   //         }}
//   //       />
//   //     </TouchableWithoutFeedback> */}

//   //     {/* Makes the picture fade and come back when pressed and the onPressed
//   //     is just printing to the console */}
//   //     {/* <TouchableOpacity onPress={picturePress}> */}

//   //     {/* onPress is making aan alert pop up with a message */}
//   //     {/* <TouchableOpacity onPress={() => alert("Image Tapped")}>
//   //       <Image
//   //         fadeDuration={4000}
//   //         blurRadius={0}
//   //         source={{
//   //           width: 200,
//   //           height: 300,
//   //           uri: "https://picsum.photos/200/300",
//   //         }}
//   //       />
//   //     </TouchableOpacity> */}

//   //     {/* <TouchableHighlight>
//   //       <Image
//   //         fadeDuration={4000}
//   //         blurRadius={0}
//   //         source={{
//   //           width: 200,
//   //           height: 300,
//   //           uri: "https://picsum.photos/200/300",
//   //         }}
//   //       />
//   //     </TouchableHighlight> */}
//   //     {/* <Button color={"orange"} title="click me" onPress={ButtonPress} /> */}

//   //     <View
//   //       style={{
//   //         backgroundColor: "dodgerblue",
//   //         width: "100%",
//   //         height: landscape ? "100%" : "30%",
//   //         //This reads, if (? is checking true or false) in landscape orientation set heoght to 100% else (:) set it to 30%
//   //       }}
//   //     ></View>
//   //   </SafeAreaView>
//   // );

//PRACTICE
// <View
//   style={{
//     backgroundColor: "#fff",
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "center", //centers content along the main axis, since it is row it goes to the horizontal center
//     alignItems: "center", // centers content along the secondary axis, which would be vertical in this case
//   }}
// >
//   <View
//     style={{
//       backgroundColor: "dodgerblue",
//       width: 100,
//       height: 100,
//     }}
//   />
//   <View
//     style={{
//       backgroundColor: "gold",
//       width: 100,
//       height: 100,
//     }}
//   />
//   <View
//     style={{
//       backgroundColor: "tomato",
//       width: 100,
//       height: 100,
//     }}
//   />
// </View>

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//   },
// });
