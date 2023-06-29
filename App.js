import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Your course Goals" style={styles.textStyle} />
        <Button title="Tap Me" />
      </View>
      <View>
        <Text>List of Goals..</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textStyle: {
    width: "80%",
    borderColor: "#cccccc",
    borderWidth:1,
    padding: 10
  },
});
