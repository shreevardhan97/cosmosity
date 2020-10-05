import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import CupertinoButtonLight from "../components/CupertinoButtonLight";
import Slider from "../components/Slider";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <CupertinoButtonLight
        style={styles.cupertinoButtonLight}
      ></CupertinoButtonLight>
      <Image
        source={require("../assets/images/icons8_astronaut_helmet_1.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <View style={styles.cosmosityStack}>
        <Text style={styles.cosmosity}>Cosmosity</Text>
        <Text style={styles.loremIpsum}>its just rocket science.</Text>
      </View>
      <Slider
        rect1="#E6E6E6"
        rect2="#E6E6E6"
        rect3="rgba(230,230, 230,1)"
        rect1="rgba(140,140,140,1)"
        rect2="rgba(140,140,140,1)"
        rect3="rgba(140,140,140,1)"
        style={styles.slider}
      ></Slider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "rgba(46,62,80,1)"
  },
  cupertinoButtonLight: {
    height: 46,
    width: 149,
    marginTop: 539,
    marginLeft: 109
  },
  image: {
    width: 176,
    height: 99,
    marginTop: -332,
    marginLeft: 95
  },
  cosmosity: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 66,
    width: 233,
    fontSize: 48
  },
  loremIpsum: {
    top: 58,
    left: 16,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 32,
    width: 199,
    fontSize: 20
  },
  cosmosityStack: {
    width: 233,
    height: 90,
    marginLeft: 70
  },
  slider: {
    height: 6,
    width: 143,
    marginTop: 51,
    marginLeft: 115
  }
});

export default Untitled;
