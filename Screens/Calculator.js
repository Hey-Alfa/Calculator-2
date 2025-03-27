import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  SafeAreaView,
} from "react-native";
import Body from "../Component/Body";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [storedResult, setStoredResult] = useState("");

  const handleInputChange = (text) => {
    setInput(text);
  };
  const handleEquals = async () => {
    let result = "";
    try {
      if (input == 0) {
        result = "0";
      } else {
        let value = eval(input);
        if (value >= 1000000000) {
          let newValue =
            (value / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
          result = newValue.toString();
        } else if (value > 9999999) {
          let newValue = (value / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
          result = newValue.toString();
        } else {
          result = value.toString();
        }
      }
      // evaluate the input expression using eval() and convert to string
    } catch (error) {
      result = "Error"; // handle any errors in the input expression
    }
    setResult(result); // set the result state to the evaluated value
    setInput(""); // reset the input state to an empty string
  };

  const handleNumberPress = (num) => {
    // setInput(input + num.toString());
    let newInput = "";
    if (num === "+/-") {
      // toggle the sign of the current number
      if (input.startsWith("-")) {
        newInput = input.substring(1);
      } else {
        newInput = `-${input}`;
      }
    } else if (num === ".") {
      if (input.length === 0) {
        newInput = input + ".";
      } else if (input.endsWith(".")) {
        newInput = input;
      } else {
        newInput = input + num.toString();
      }
    } else if (
      (num === "-" &&
        (input.endsWith("-") ||
          input.endsWith("+") ||
          input.endsWith("*") ||
          input.endsWith("/"))) ||
      (num === "+" &&
        (input.endsWith("-") ||
          input.endsWith("+") ||
          input.endsWith("*") ||
          input.endsWith("/"))) ||
      (num === "*" &&
        (input.endsWith("-") ||
          input.endsWith("+") ||
          input.endsWith("*") ||
          input.endsWith("/"))) ||
      (num === "/" &&
        (input.endsWith("-") ||
          input.endsWith("+") ||
          input.endsWith("*") ||
          input.endsWith("/")))
    ) {
      newInput = input;
    } else {
      // append the number to the current input
      newInput = input + num.toString();
    }
    setInput(newInput);
  };

  const handleReset = () => {
    setInput("");
    setResult("");
  };

  const getStoredResult = async () => {
    try {
      const result = await AsyncStorage.getItem("calculatorResult");
      if (result !== null) {
        setStoredResult(result);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Body
      Body={
        <View style={styles.container}>
          <View style={styles.calInput}>
            <TextInput
              style={[styles.input, styles.inputTop]}
              onChangeText={handleInputChange}
              value={input}
              placeholder="0"
              editable={false}
              placeholderTextColor="#5B5E67"
            />
            <TextInput
              style={[styles.input, styles.inputBottom]}
              value={result}
              editable={false}
            />
          </View>
          <View style={styles.calButton}>
            <View style={styles.row}>
              <Pressable
                style={[styles.button, styles.darkGray]}
                onPress={handleReset}
              >
                <Text style={styles.buttonText}>AC</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => handleNumberPress("7")}
              >
                <Text style={styles.buttonText}>7</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => handleNumberPress("4")}
              >
                <Text style={styles.buttonText}>4</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => handleNumberPress("1")}
              >
                <Text style={styles.buttonText}>1</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => handleNumberPress(".")}
              >
                <Text style={[styles.buttonText]}>.</Text>
              </Pressable>
            </View>
            <View style={styles.row}>
              <Pressable
                style={[styles.button, styles.darkGray]}
                onPress={() => handleNumberPress("+/-")}
              >
                <Text style={styles.buttonText}>+/-</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => handleNumberPress("8")}
              >
                <Text style={styles.buttonText}>8</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => handleNumberPress("5")}
              >
                <Text style={styles.buttonText}>5</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => handleNumberPress("2")}
              >
                <Text style={styles.buttonText}>2</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => handleNumberPress("0")}
              >
                <Text style={styles.buttonText}>0</Text>
              </Pressable>
            </View>
            <View style={styles.row}>
              <Pressable
                style={[styles.button, styles.darkGray]}
                onPress={() => handleNumberPress("%")}
              >
                <Text style={styles.buttonText}>%</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => handleNumberPress("9")}
              >
                <Text style={styles.buttonText}>9</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => handleNumberPress("6")}
              >
                <Text style={styles.buttonText}>6</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => handleNumberPress("3")}
              >
                <Text style={styles.buttonText}>3</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={getStoredResult}>
                <Text style={styles.buttonText}>
                  <Icon name="history" size={44} />
                </Text>
              </Pressable>
            </View>
            <View style={styles.row}>
              <Pressable
                style={[styles.button, styles.blue]}
                onPress={() => handleNumberPress("/")}
              >
                <Text style={styles.buttonText}>÷</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.blue]}
                onPress={() => handleNumberPress("*")}
              >
                <Text style={styles.buttonText}>x</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.blue]}
                onPress={() => handleNumberPress("-")}
              >
                <Text style={[styles.buttonText]}>-</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.blue]}
                onPress={() => handleNumberPress("+")}
              >
                <Text style={styles.buttonText}>+</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.blue]}
                onPress={handleEquals}
              >
                <Text style={styles.buttonText}>=</Text>
              </Pressable>
            </View>
          </View>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calInput: {
    paddingHorizontal: 20,
  },
  input: {
    textAlign: "right",
    marginTop: 20,
  },
  inputTop: {
    fontSize: 35,
    color: "#5B5E67",
  },
  inputBottom: {
    fontSize: 89,
    marginBottom: 20,
    color: "#fff",
  },
  calButton: {
    flex: 6,
    flexDirection: "row",
    gap: 3,
  },
  row: {
    flex: 1,
    flexDirection: "column",
    gap: 3,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5B5E67",
    padding: 10,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 45,
    color: "#fff",
  },
  darkGray: {
    backgroundColor: "#3B3D43",
  },
  gray: {
    backgroundColor: "5B5E67",
  },
  blue: {
    backgroundColor: "#3764B4",
  },
});
