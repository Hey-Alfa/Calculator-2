import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
  Alert,
  AsyncStorage,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

import Body from "../Component/Body";

export default function Register() {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate("Login");
  };
  const handleNameChange = (value) => {
    setName(value);
  };
  const handleEmailChange = (value) => {
    setEmail(value);
  };
  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    return fetch("https://reqres.in/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "appliction/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.jason())
      .then((data) => {
        if (data.status) {
          handleLogin();
        } else {
          Alert.alert("Error", "Try Again", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancle"),
            },
            {
              text: "Ok",
              onPress: () => console.log("Ok"),
            },
          ]);
        }
      });
  };

  return (
    <Body
      Body={
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.containerTop}>
              <Text style={styles.title}>Register</Text>
            </View>
            <View style={styles.containerCenter}>
              <Text style={styles.lable}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Name"
                onChangeText={handleNameChange}
                value={name}
              />
              <Text style={styles.lable}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={handleEmailChange}
                value={email}
              />
              <Text style={styles.lable}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={handlePasswordChange}
                value={password}
                secureTextEntry={true}
              />
              <Pressable style={styles.button} onPress={register}>
                <Text style={styles.buttonText}>Register</Text>
              </Pressable>
            </View>
            <View style={styles.containerBottom}>
              <Text style={styles.text}>Already have an account?</Text>
              <Text
                style={[styles.text, { color: "#3764B4" }]}
                onPress={handleLogin}
              >
                Login
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
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  containerTop: {
    flex: 0.9,
    justifyContent: "center",
  },
  containerCenter: {
    flex: 3,
    width: "100%",
  },
  containerBottom: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 89,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  lable: {
    fontSize: 40,
    color: "#fff",
  },
  text: {
    fontSize: 30,
    color: "#fff",
  },
  input: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    fontSize: 20,
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
