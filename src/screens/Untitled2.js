import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import CupertinoButtonLight from "../components/CupertinoButtonLight";
import Slider from "../components/Slider";

function Untitled2(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <ImageBackground
          source={require("../assets/images/Rectangle_111.png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <View style={styles.image2Row}>
            <Image
              source={require("../assets/images/Group.png")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
            <Text style={styles.skip1}>Skip</Text>
          </View>
        </ImageBackground>
        <Image
          source={require("../assets/images/Vector.png")}
          resizeMode="contain"
          style={styles.image3}
        ></Image>
        <Image
          source={require("../assets/images/Vector_(1).png")}
          resizeMode="contain"
          style={styles.image4}
        ></Image>
      </View>
      <Text style={styles.exploreTheUniverse}>Explore the Universe</Text>
      <Text style={styles.loremIpsum2}>
        Tour about the applications being used with immersive AR technology
      </Text>
      <CupertinoButtonLight
        style={styles.cupertinoButtonLight1}
      ></CupertinoButtonLight>
      <Slider
        rect="#E6E6E6"
        rect1="#E6E6E6"
        rect3="rgba(230,230, 230,1)"
        rect="rgba(140,140,140,1)"
        rect1="rgba(140,140,140,1)"
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
  image: {
    top: 0,
    width: 462,
    height: 423,
    position: "absolute",
    left: 22,
    flexDirection: "row"
  },
  image_imageStyle: {},
  image2: {
    width: 197,
    height: 178
  },
  skip1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 14,
    width: 56,
    marginLeft: 41
  },
  image2Row: {
    height: 178,
    flexDirection: "row",
    flex: 1,
    marginRight: 36,
    marginLeft: 132,
    marginTop: 64
  },
  image3: {
    top: 198,
    left: 0,
    width: 504,
    height: 207,
    position: "absolute"
  },
  image4: {
    top: 271,
    width: 404,
    height: 183,
    position: "absolute",
    left: 51
  },
  imageStack: {
    width: 504,
    height: 454,
    marginTop: -48,
    marginLeft: -65
  },
  exploreTheUniverse: {
    fontFamily: "roboto-500",
    color: "rgba(255,255,255,1)",
    height: 23,
    width: 226,
    fontSize: 20,
    textAlign: "center",
    marginTop: 49,
    marginLeft: 74
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 31,
    width: 302,
    textAlign: "center",
    marginTop: 11,
    marginLeft: 37
  },
  cupertinoButtonLight1: {
    height: 46,
    width: 149,
    marginTop: 91,
    marginLeft: 113
  },
  slider1: {
    height: 6,
    width: 143,
    marginTop: -116,
    marginLeft: 116
  }
});

export default Untitled2;
