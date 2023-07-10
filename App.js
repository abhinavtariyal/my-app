import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";
export default function App() {
  const [text, setText] = useState("");
  const [goalsArray, setGoalsArray] = useState([]);
  function onChangeText(enteredText) {
    setText({ text: enteredText, key: Math.random().toString() });
  }

  function onPressHandler() {
    setGoalsArray((prevState) => [...prevState, text]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your course Goals"
          style={styles.textStyle}
          onChangeText={onChangeText}
        />
        <Button title="Tap Me" onPress={onPressHandler} />
      </View>
      <View style={styles.goals}>
        <FlatList
          data={goalsArray}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.inTextStyle}>{itemData.item.text} </Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textStyle: {
    width: "80%",
    borderWidth: 1,
    padding: 10,
  },
  goals: {
    flex: 3,
  },
  goalItem: {
    backgroundColor: "#5e0acc",
    borderRadius: 8,
    margin: 5,
    padding: 5,
  },
  inTextStyle: {
    color: "white",
  },
});
