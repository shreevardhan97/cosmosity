import React, { Component } from "react";
import { StyleSheet, View, Image, Text, ImageBackground } from "react-native";

function Untitled11(props) {
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
            source={require("../assets/images/Atlantis_taking_off_on_STS-27_1.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <Text style={styles.rocketPropulsion}>Rocket Propulsion</Text>
          <Text style={styles.loremIpsum1}>
            The propulsion of all rockets is explained by the same physical
            principle: Newton’s third law of motion, which states:{"\n"} ”Every
            action has an equal and opposite reaction.”{"\n"}
            {"\n"}A rocket’s acceleration depends on three major factors: the
            exhaust velocity, the rate the exhaust is ejected, and the mass of
            the rocket.{"\n"}
            {"\n"}To achieve the high speeds needed to hop continents, obtain
            orbit, or escape Earth’s gravity altogether, the mass of the rocket
            other than fuel must be as small as possible.
          </Text>
        </View>
        <Text style={styles.back1}>Back</Text>
      </View>
      <View style={styles.image3Stack}>
        <ImageBackground
          source={require("../assets/images/propulsion_1.png")}
          resizeMode="contain"
          style={styles.image3}
          imageStyle={styles.image3_imageStyle}
        >
          <Text style={styles.theSolarSystem1}>
            Free body diagram of rocket
          </Text>
        </ImageBackground>
        <Text style={styles.theRocketEquation}>The Rocket Equation</Text>
        <Image
          source={require("../assets/images/equation_1.png")}
          resizeMode="contain"
          style={styles.image4}
        ></Image>
        <Text style={styles.loremIpsum2}>
          The Tsiolkovsky rocket equation, classical rocket equation, or ideal
          rocket equation is a mathematical equation that describes the motion
          of vehicles that follow the basic principle of a rocket. {"\n"}
          {"\n"}The rocket continuously expels a huge amount of gases as exhaust
          which imparts momentum to the rocket in the forward direction, thereby
          giving it the upthrust required to escape the planet’s gravity.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(36,36,36,1)"
  },
  image1: {
    top: 20,
    left: 39,
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
    width: 378,
    height: 378,
    position: "absolute"
  },
  rocketPropulsion: {
    top: 345,
    left: 27,
    position: "absolute",
    fontFamily: "roboto-900",
    color: "rgba(255,255,255,1)",
    height: 89,
    width: 302,
    fontSize: 36
  },
  loremIpsum1: {
    top: 411,
    position: "absolute",
    fontFamily: "roboto-300",
    color: "rgba(255,255,255,1)",
    height: 74,
    width: 342,
    fontSize: 18,
    left: 27
  },
  image1Stack: {
    top: 0,
    left: 0,
    width: 378,
    height: 485,
    position: "absolute"
  },
  back1: {
    top: 22,
    left: 66,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(0,110,255,1)",
    height: 15,
    width: 46
  },
  image1StackStack: {
    width: 378,
    height: 485,
    marginLeft: -3
  },
  image3: {
    width: 514,
    height: 514,
    position: "absolute",
    top: 0,
    left: 0
  },
  image3_imageStyle: {},
  theSolarSystem1: {
    fontFamily: "roboto-900",
    color: "rgba(94,94,94,1)",
    fontSize: 16,
    textAlign: "center",
    marginTop: 436,
    marginLeft: 154
  },
  theRocketEquation: {
    top: 486,
    left: 86,
    position: "absolute",
    fontFamily: "roboto-900",
    color: "rgba(255,255,255,1)",
    height: 89,
    width: 342,
    fontSize: 36
  },
  image4: {
    top: 472,
    left: 67,
    width: 375,
    height: 375,
    position: "absolute"
  },
  loremIpsum2: {
    top: 810,
    position: "absolute",
    fontFamily: "roboto-300",
    color: "rgba(255,255,255,1)",
    height: 74,
    width: 342,
    fontSize: 18,
    left: 93
  },
  image3Stack: {
    width: 514,
    height: 884,
    marginTop: 200,
    marginLeft: -69
  }
});

export default Untitled11;
