import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

import Colors from "../constants/colors";

import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";

const GameOverScreen = (props) => {
  const { onRestart, roundsNumber, userNumber } = props;

  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/success.png")} />
      </View>

      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>
        </BodyText>
      </View>

      <MainButton onPress={onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },

  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },

  resultText: {
    textAlign: "center",
    fontSize: 20,
  },

  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
