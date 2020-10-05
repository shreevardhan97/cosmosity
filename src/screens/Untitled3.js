import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Slider from "../components/Slider";
import CupertinoButtonLight from "../components/CupertinoButtonLight";

function Untitled3(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <Image
            source={require("../assets/images/Group_25.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
        </View>
        <Text style={styles.skip1}>Skip</Text>
      </View>
      <Text style={styles.exploreTheUniverse1}>
        The Possibilities are Endless
      </Text>
      <Text style={styles.loremIpsum1}>
        Get started instantly with all resources available on your smartphone
      </Text>
      <Slider
        rect="#E6E6E6"
        rect1="#E6E6E6"
        rect2="#E6E6E6"
        rect="rgba(140,140,140,1)"
        rect1="rgba(140,140,140,1)"
        rect2="rgba(140,140,140,1)"
        style={styles.slider1}
      ></Slider>
      <CupertinoButtonLight
        style={styles.cupertinoButtonLight1}
      ></CupertinoButtonLight>
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
    left: 0,
    width: 390,
    height: 406,
    position: "absolute",
    backgroundColor: "rgba(30,30,30,1)"
  },
  image: {
    width: 385,
    height: 385,
    marginTop: 21
  },
  skip1: {
    top: 18,
    left: 343,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 14,
    width: 56
  },
  rectStack: {
    width: 399,
    height: 406,
    marginLeft: -7
  },
  exploreTheUniverse1: {
    fontFamily: "roboto-500",
    color: "rgba(255,255,255,1)",
    height: 23,
    width: 264,
    fontSize: 20,
    textAlign: "center",
    marginTop: 50,
    marginLeft: 55
  },
  loremIpsum1: {
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
    marginTop: 21,
    marginLeft: 116
  },
  cupertinoButtonLight1: {
    height: 46,
    width: 149,
    marginTop: 64,
    marginLeft: 113
  }
});

export default Untitled3;
