import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function Untitled9(props) {
  return (
    <View style={styles.container}>
      <View style={styles.back1StackStack}>
        <View style={styles.back1Stack}>
          <Text style={styles.back1}>Back</Text>
          <Image
            source={require("../assets/images/hst-sm4.jpg")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <Text style={styles.telescopes}>Telescopes</Text>
          <Text style={styles.loremIpsum1}>
            Hubble Space TeleScope:{"\n"}The 11 tonne telescope was placed into
            a 570 km high orbit around Earth by the Space Shuttle in April 1990.
            Circling our planet every 96 minutes, the HST has so far travelled
            some 5 billion km.{"\n"}
            {"\n"}Puerto Rico Chicken Wire Telescope:{"\n"}Known as Arecibo
            Observatory, located on the island ofPuerto Rico, is the largest
            radio telescope in the{"\n"}world, and one of the most sensitive.
          </Text>
        </View>
        <Image
          source={require("../assets/images/Vector1.png")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
      </View>
      <View style={styles.image3Stack}>
        <Image
          source={require("../assets/images/Capture_1.png")}
          resizeMode="contain"
          style={styles.image3}
        ></Image>
        <Text style={styles.loremIpsum2}>
          FAST telescope in China:{"\n"}FAST’s now holds the record for the
          world’s largest single-aperture telescope. Its dish stretches 500
          meters across. Imagine about 30 soccer fields stitched together. FAST
          obliterates the previous record holder, the Arecibo Observatory.
        </Text>
      </View>
      <Image
        source={require("../assets/images/Capture1_1.png")}
        resizeMode="contain"
        style={styles.image4}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(36,36,36,1)"
  },
  back1: {
    top: 19,
    left: 89,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(0,110,255,1)",
    height: 15,
    width: 46
  },
  image2: {
    top: 0,
    left: 0,
    width: 409,
    height: 411,
    position: "absolute"
  },
  telescopes: {
    top: 388,
    left: 62,
    position: "absolute",
    fontFamily: "roboto-900",
    color: "rgba(255,255,255,1)",
    height: 89,
    width: 256,
    fontSize: 36
  },
  loremIpsum1: {
    top: 440,
    position: "absolute",
    fontFamily: "roboto-300",
    color: "rgba(255,255,255,1)",
    height: 74,
    width: 338,
    fontSize: 18,
    left: 62
  },
  back1Stack: {
    top: 0,
    left: 0,
    width: 409,
    height: 514,
    position: "absolute"
  },
  image1: {
    top: 17,
    left: 62,
    width: 22,
    height: 22,
    position: "absolute",
    transform: [
      {
        rotate: "-180.00deg"
      }
    ]
  },
  back1StackStack: {
    width: 409,
    height: 514,
    marginLeft: -34
  },
  image3: {
    top: 0,
    left: 0,
    width: 415,
    height: 415,
    position: "absolute"
  },
  loremIpsum2: {
    top: 355,
    position: "absolute",
    fontFamily: "roboto-300",
    color: "rgba(255,255,255,1)",
    height: 74,
    width: 338,
    fontSize: 18,
    left: 39
  },
  image3Stack: {
    width: 415,
    height: 429,
    marginTop: 157,
    marginLeft: -11
  },
  image4: {
    width: 397,
    height: 301,
    marginTop: 94,
    marginLeft: -11
  }
});

export default Untitled9;
