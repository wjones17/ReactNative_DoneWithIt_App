//This is how you do the inputs for forms without Formik

// import React, { useState } from "react";
// import { Image, StyleSheet } from "react-native";
// import AppButton from "../components/AppButton";
// import AppTextInput from "../components/AppTextInput";
// import Screen from "../components/Screen";
// import { Formik } from "formik";

// function LoginScreen(props) {
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   return (
//     <Screen style={styles.container}>
//       <Image style={styles.logo} source={require("../assets/logo-red.png")} />
//       <AppTextInput
//         autoCapitalize="none"
//         autoCorrect={false}
//         keyBoardType="email-address"
//         textContentType="emailAddress"
//         icon="email"
//         placeholder="Email"
//         onChangeText={(text) => setEmail(text)}
//       />
//       <AppTextInput
//         autoCapitalize="none"
//         autoCorrect={false}
//         textContentType="password"
//         secureTextEntry={true}
//         icon="lock"
//         placeholder="password"
//         onChangeText={(text) => setPassword(text)}
//       />
//       <AppButton title={"Login"} onPress={() => console.log(email, password)} />
//     </Screen>
//   );
// }

// const styles = StyleSheet.create({
//   logo: {
//     width: 80,
//     height: 80,
//     alignSelf: "center",
//     marginTop: 50,
//     marginBottom: 20,
//   },
//   container: {
//     padding: 10,
//   },
// });
// export default LoginScreen;

//This is how you do the inputs for forms WITH Formik
import React from "react";
import { Image, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup";

// import AppFormField from "../components/forms/AppFormField";
// import SubmitButton from "../components/forms/SubmitButton";
// import AppForm from "../components/forms/AppForm";

// Can now call these components from the index.js in components/forms
//folder because it contains them.

import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyBoardType="email-address"
          name={"email"}
          textContentType="emailAddress"
          icon="email"
          placeholder="Email"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          name={"password"}
          secureTextEntry={true}
          icon="lock"
          placeholder="password"
        />
        <SubmitButton title={"Login"} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  container: {
    padding: 10,
  },
});
export default LoginScreen;
