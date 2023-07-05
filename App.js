import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Your course Goals" style={styles.textStyle} />
        <Button title="Tap Me" />
      </View>
      <View style={styles.goals}>
        <Text>List of Goals..</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal:16,
    flex:1
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    flex:1,
    marginBottom:24,
    borderBottomWidth:1,
    borderBottomColor:'#cccccc'
  },
  textStyle: {
    width: "80%",
    borderColor: "#ccccc",
    borderWidth:1,
    padding: 10
  },
  goals:{
    flex:3
  }
});

