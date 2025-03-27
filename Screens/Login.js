import React from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Body from "../Component/Body";

export default function Login() {
  const navigation = useNavigation();
  const handleRegister = () => {
    navigation.navigate("Register");
  };

  const logIn = () => {
    navigation.navigate("Calculator");
  }

  return (
    <Body
      Body={
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.containerTop}>
              <Text style={styles.title}>Login</Text>
            </View>
            <View style={styles.containerCenter}>
              <Text style={styles.lable}>Email</Text>
              <TextInput style={styles.input} placeholder="Email" />
              <Text style={styles.lable}>Password</Text>
              <TextInput style={styles.input} placeholder="Password" />
              <Pressable style={styles.button} onPress={logIn}>
                <Text style={styles.buttonText}>Login</Text>
              </Pressable>
            </View>
            <View style={styles.containerBottom}>
              <Text style={styles.text}>Don't Have an Acount?</Text>
              <Text
                style={[styles.text, { color: "#3764B4" }]}
                onPress={handleRegister}
              >
                Register
              </Text>
            </View>
          </View>
        </ScrollView>
      }
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  containerTop: {
    flex: 1.5,
    justifyContent: "center",
  },
  containerCenter: {
    flex: 3,
    width: "100%",
  },
  containerBottom: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 89,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  lable: {
    fontSize: 45,
    color: "#fff",
  },
  text: {
    fontSize: 35,
    color: "#fff",
  },
  input: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: 60,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    fontSize: 26,
  },
  button: {
    backgroundColor: "#3764B4",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
});
