import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const GameOverScreen = (props) => {
  const { onRestart, roundsNumber, userNumber } = props;

  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number of rounds: {roundsNumber}</Text>
      <Text>Number was: {userNumber}</Text>
      <Button title="NEW GAME" onPress={onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
