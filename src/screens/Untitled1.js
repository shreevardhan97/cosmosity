import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import CupertinoButtonLight from "../components/CupertinoButtonLight";
import Slider from "../components/Slider";

function Untitled1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect}></View>
        <ImageBackground
          source={require("../assets/images/Group_24.png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <Text style={styles.skip}>Skip</Text>
        </ImageBackground>
      </View>
      <CupertinoButtonLight
        style={styles.cupertinoButtonLight1}
      ></CupertinoButtonLight>
      <Text style={styles.loremIpsum}>Rocket Science isn’t scary</Text>
      <Text style={styles.loremIpsum6}>
        Learn about rocket science and astronomy {"\n"}in an interactive
        evironment
      </Text>
      <Slider
        rect1="#E6E6E6"
        rect="#E6E6E6"
        rect2="#E6E6E6"
        rect3="rgba(230,230, 230,1)"
        rect1="rgba(220,220,220,1)"
        rect="rgba(140,140,140,1)"
        rect2="rgba(140,140,140,1)"
        rect3="rgba(140,140,140,1)"
        style={styles.slider1}
      ></Slider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(46,62,80,1)"
  },
  rect: {
    top: 0,
    width: 375,
    height: 406,
    position: "absolute",
    backgroundColor: "rgba(33,149,242,1)",
    left: 7
  },
  image: {
    top: 16,
    left: 0,
    width: 390,
    height: 390,
    position: "absolute"
  },
  image_imageStyle: {},
  skip: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 14,
    width: 56,
    marginLeft: 334
  },
  rectStack: {
    width: 390,
    height: 406,
    marginLeft: -7
  },
  cupertinoButtonLight1: {
    height: 46,
    width: 149,
    marginTop: 212,
    marginLeft: 113
  },
  loremIpsum: {
    fontFamily: "roboto-500",
    color: "rgba(255,255,255,1)",
    height: 23,
    width: 233,
    fontSize: 20,
    marginTop: -209,
    marginLeft: 71
  },
  loremIpsum6: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 31,
    width: 302,
    textAlign: "center",
    marginTop: 10,
    marginLeft: 37
  },
  slider1: {
    height: 6,
    width: 143,
    marginTop: 22,
    marginLeft: 116
  }
});

export default Untitled1;
