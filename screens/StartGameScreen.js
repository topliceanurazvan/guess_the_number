import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import Colors from "../constants/colors";

import Card from "../components/Card";
import Input from "../components/Input";

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.card}>
        <Text>Select a Number</Text>
        <Input
          style={styles.input}
          blurOnSubmit
          keyboardType="number-pad"
          maxLength={2}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" onPress={() => {}} color={Colors.secondary} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" onPress={() => {}} color={Colors.primary} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
  },

  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },

  card: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },

  input: {
    width: 50,
    textAlign: "center",
  },

  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    marginVertical: 10,
    color: Colors.dark,
  },
});

export default StartGameScreen;
