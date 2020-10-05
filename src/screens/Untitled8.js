import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";

function Untitled8(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image1StackStack}>
        <View style={styles.image1Stack}>
          <Image
            source={require("../assets/images/Vector1.png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
          <ImageBackground
            source={require("../assets/images/9c013d77777685_11.png")}
            resizeMode="contain"
            style={styles.image2}
            imageStyle={styles.image2_imageStyle}
          >
            <Text style={styles.solarSystem}>Solar System</Text>
          </ImageBackground>
          <Text style={styles.loremIpsum1}>
            If you were standing on the equator, you and the spot under your
            feet would be rotating at a speed of about a thousand miles per
            hour. But Earth is also orbiting around the Sun, moving even faster:
            67,000 miles per hour.
          </Text>
        </View>
        <Text style={styles.back1}>Back</Text>
      </View>
      <ImageBackground
        source={require("../assets/images/fig13_1.png")}
        resizeMode="contain"
        style={styles.image3}
        imageStyle={styles.image3_imageStyle}
      >
        <Text style={styles.theSolarSystem}>The Solar System</Text>
      </ImageBackground>
      <Text style={styles.loremIpsum2}>
        And the Sun itself is moving around the center of our galaxy, carrying
        everything in the solar system with it, at a rate of 490,000 miles per
        hour. And that’s not all. Our galaxy, the Milky Way , is moving too—at a
        rate of 872,405 miles per hour.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(36,36,36,1)"
  },
  image1: {
    top: 82,
    left: 117,
    width: 22,
    height: 22,
    position: "absolute",
    transform: [
      {
        rotate: "-180.00deg"
      }
    ]
  },
  image2: {
    top: 0,
    left: 0,
    width: 476,
    height: 476,
    position: "absolute"
  },
  image2_imageStyle: {},
  solarSystem: {
    fontFamily: "roboto-900",
    color: "rgba(255,255,255,1)",
    height: 89,
    width: 256,
    fontSize: 36,
    marginTop: 386,
    marginLeft: 108
  },
  loremIpsum1: {
    top: 431,
    position: "absolute",
    fontFamily: "roboto-300",
    color: "rgba(255,255,255,1)",
    height: 74,
    width: 338,
    fontSize: 18,
    left: 105
  },
  image1Stack: {
    top: 0,
    left: 0,
    width: 476,
    height: 505,
    position: "absolute"
  },
  back1: {
    top: 84,
    left: 144,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(0,110,255,1)",
    height: 15,
    width: 46
  },
  image1StackStack: {
    width: 476,
    height: 505,
    marginTop: -66,
    marginLeft: -86
  },
  image3: {
    width: 377,
    height: 377,
    marginTop: 15,
    alignSelf: "center"
  },
  image3_imageStyle: {},
  theSolarSystem: {
    fontFamily: "roboto-900",
    color: "rgba(94,94,94,1)",
    fontSize: 16,
    marginTop: 316,
    marginLeft: 125
  },
  loremIpsum2: {
    fontFamily: "roboto-300",
    color: "rgba(255,255,255,1)",
    height: 74,
    width: 338,
    fontSize: 18,
    marginTop: 1,
    marginLeft: 19
  }
});

export default Untitled8;
