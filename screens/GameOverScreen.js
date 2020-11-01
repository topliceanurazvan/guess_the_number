import React from "react";
import { Button, Image, StyleSheet, View } from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

const GameOverScreen = (props) => {
  const { onRestart, roundsNumber, userNumber } = props;

  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <Image source={require("../assets/success.png")} />
      <BodyText>Number of rounds: {roundsNumber}</BodyText>
      <BodyText>Number was: {userNumber}</BodyText>
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
