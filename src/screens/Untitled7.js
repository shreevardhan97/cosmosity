import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";

function Untitled7(props) {
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
            source={require("../assets/images/Milky-Way-Warp-Illustration_13.png")}
            resizeMode="contain"
            style={styles.image2}
            imageStyle={styles.image2_imageStyle}
          >
            <Text style={styles.galaxy}>Galaxy</Text>
          </ImageBackground>
          <Text style={styles.loremIpsum1}>
            There are billions of other galaxies in the Universe. Only three
            galaxies outside our own Milky Way Galaxy can be seen without a
            telescope, and appear as fuzzy patches in the sky with the naked
            eye.
          </Text>
        </View>
        <Text style={styles.back1}>Back</Text>
      </View>
      <ImageBackground
        source={require("../assets/images/milkyway_1.png")}
        resizeMode="contain"
        style={styles.image3}
        imageStyle={styles.image3_imageStyle}
      >
        <Text style={styles.loremIpsum2}>
          Far infrared photo of the Milky Way galaxy
        </Text>
      </ImageBackground>
      <Text style={styles.loremIpsum3}>
        The closest galaxies that we can see without a telescope are the Large
        and Small Magellanic Clouds. These satellite galaxies of the Milky Way
        can be seen from the southern hemisphere. Even they are about 160,000
        light years from us
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
    top: 104,
    left: 93,
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
    width: 506,
    height: 506,
    position: "absolute",
    left: 0
  },
  image2_imageStyle: {},
  galaxy: {
    fontFamily: "roboto-900",
    color: "rgba(255,255,255,1)",
    height: 89,
    width: 256,
    fontSize: 36,
    marginTop: 381,
    marginLeft: 93
  },
  loremIpsum1: {
    top: 433,
    left: 93,
    position: "absolute",
    fontFamily: "roboto-300",
    color: "rgba(255,255,255,1)",
    height: 74,
    width: 333,
    fontSize: 18
  },
  image1Stack: {
    top: 0,
    left: 0,
    width: 506,
    height: 507,
    position: "absolute"
  },
  back1: {
    top: 106,
    left: 120,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(0,110,255,1)",
    height: 15,
    width: 46
  },
  image1StackStack: {
    width: 506,
    height: 507,
    marginTop: -82,
    marginLeft: -65
  },
  image3: {
    width: 436,
    height: 396,
    marginTop: 14,
    marginLeft: -30
  },
  image3_imageStyle: {},
  loremIpsum2: {
    fontFamily: "roboto-900",
    color: "rgba(94,94,94,1)",
    fontSize: 16,
    marginTop: 353,
    marginLeft: 66
  },
  loremIpsum3: {
    fontFamily: "roboto-300",
    color: "rgba(255,255,255,1)",
    height: 74,
    width: 333,
    fontSize: 18,
    marginTop: 11,
    marginLeft: 21
  }
});

export default Untitled7;
