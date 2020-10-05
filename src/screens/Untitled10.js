import React, { Component } from "react";
import { StyleSheet, View, Image, Text, ImageBackground } from "react-native";

function Untitled10(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image1StackStack}>
        <View style={styles.image1Stack}>
          <Image
            source={require("../assets/images/Vector1.png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
          <Image
            source={require("../assets/images/rocketry-main_1.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <Text style={styles.insideARocket}>Inside a Rocket</Text>
          <Text style={styles.loremIpsum1}>
            A rocket has 4 main parts: {"\n"}
            {"\n"}Nose Cone: The nose cone carries the payload or cargo. Common
            payloads include astronauts, satellites, scientific instruments,
            etc. It also contains the guidance system to control the rocket’s
            direction of motion.
          </Text>
        </View>
        <Text style={styles.back1}>Back</Text>
      </View>
      <View style={styles.image3StackStack}>
        <View style={styles.image3Stack}>
          <ImageBackground
            source={require("../assets/images/nose_cones_1.png")}
            resizeMode="contain"
            style={styles.image3}
            imageStyle={styles.image3_imageStyle}
          >
            <Text style={styles.theSolarSystem1}>
              Various Nose cone designs
            </Text>
          </ImageBackground>
          <Text style={styles.loremIpsum2}>
            Fins: Fins keep the roket flying straight. Without fins, the rocket
            woyld tumble out of control. The fins are usually located at the
            rear of the rocket.
          </Text>
          <ImageBackground
            source={require("../assets/images/Rocket_fins_dark_1.png")}
            resizeMode="contain"
            style={styles.image4}
            imageStyle={styles.image4_imageStyle}
          >
            <Text style={styles.theSolarSystem2}>
              Air pressure acting on the fins keeps{"\n"}the rocket flying
              straight
            </Text>
          </ImageBackground>
        </View>
        <View style={styles.rect}></View>
      </View>
      <Text style={styles.loremIpsum3}>
        Rocket Body: This holds the rocket engine and propellant. The fins are
        attached to the rocket body.{"\n"}
        {"\n"}Engine: The rocket engine burns a combination of chemicals called
        propellant. The propellant consists of two parts, fuel and oxidizer.
        Without the oxidizer the fuel would not burn as there is no oxygen in
        space.
      </Text>
      <ImageBackground
        source={require("../assets/images/engine_1.png")}
        resizeMode="contain"
        style={styles.image5}
        imageStyle={styles.image5_imageStyle}
      >
        <Text style={styles.theSolarSystem3}>
          Simplified diagram of a rocket engine
        </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(36,36,36,1)"
  },
  image1: {
    top: 27,
    left: 35,
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
    width: 394,
    height: 394,
    position: "absolute",
    left: 0
  },
  insideARocket: {
    top: 368,
    left: 35,
    position: "absolute",
    fontFamily: "roboto-900",
    color: "rgba(255,255,255,1)",
    height: 89,
    width: 256,
    fontSize: 36
  },
  loremIpsum1: {
    top: 436,
    position: "absolute",
    fontFamily: "roboto-300",
    color: "rgba(255,255,255,1)",
    height: 74,
    width: 338,
    fontSize: 18,
    left: 35
  },
  image1Stack: {
    top: 0,
    left: 0,
    width: 394,
    height: 510,
    position: "absolute"
  },
  back1: {
    top: 29,
    left: 62,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(0,110,255,1)",
    height: 15,
    width: 46
  },
  image1StackStack: {
    width: 394,
    height: 510,
    marginTop: -9,
    marginLeft: -9
  },
  image3: {
    top: 0,
    left: 37,
    width: 408,
    height: 408,
    position: "absolute"
  },
  image3_imageStyle: {},
  theSolarSystem1: {
    fontFamily: "roboto-900",
    color: "rgba(94,94,94,1)",
    fontSize: 16,
    marginTop: 329,
    marginLeft: 106
  },
  loremIpsum2: {
    top: 371,
    position: "absolute",
    fontFamily: "roboto-300",
    color: "rgba(255,255,255,1)",
    height: 74,
    width: 338,
    fontSize: 18,
    left: 72
  },
  image4: {
    top: 408,
    left: 0,
    width: 400,
    height: 400,
    position: "absolute"
  },
  image4_imageStyle: {},
  theSolarSystem2: {
    fontFamily: "roboto-900",
    color: "rgba(94,94,94,1)",
    fontSize: 16,
    textAlign: "center",
    marginTop: 326,
    marginLeft: 101
  },
  image3Stack: {
    top: 0,
    left: 0,
    width: 445,
    height: 808,
    position: "absolute"
  },
  rect: {
    top: 489,
    left: 400,
    width: 21,
    height: 238,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)"
  },
  image3StackStack: {
    width: 445,
    height: 808,
    marginTop: 52,
    marginLeft: -46
  },
  loremIpsum3: {
    fontFamily: "roboto-300",
    color: "rgba(255,255,255,1)",
    height: 74,
    width: 338,
    fontSize: 18,
    marginLeft: 19
  },
  image5: {
    width: 375,
    height: 375,
    marginTop: 117
  },
  image5_imageStyle: {},
  theSolarSystem3: {
    fontFamily: "roboto-900",
    color: "rgba(94,94,94,1)",
    fontSize: 16,
    textAlign: "center",
    marginTop: 309,
    marginLeft: 59
  }
});

export default Untitled10;
