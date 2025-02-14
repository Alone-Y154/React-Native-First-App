import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

export default function Index() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={() => setCount(count + 1)} />
        <Button
          title="Decrement"
          onPress={() => setCount(count > 0 ? count - 1 : 0)}
        />
        <Button title="Reset" onPress={() => setCount(0)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },
});