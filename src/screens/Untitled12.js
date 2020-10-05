import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function Untitled12(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect}></View>
        <Image
          source={require("../assets/images/13070_1776_Cassini_interplanet_trajectory_1.png")}
          resizeMode="contain"
          style={styles.image3}
        ></Image>
      </View>
      <View style={styles.image1StackStack}>
        <View style={styles.image1Stack}>
          <Image
            source={require("../assets/images/Vector1.png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
          <Image
            source={require("../assets/images/WhatsApp_Image_2020-10-04_at_04.32_2.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <Text style={styles.rocketNavigation}>Rocket Navigation</Text>
          <Text style={styles.loremIpsum1}>
            Technically we could use just the fuel to propel the rocket
            throughout its journey. However, this is an impractical solution and
            huge amounts of fuel would be required.{"\n"}
            {"\n"}Instead, rockets use the gravitational fields of the
            surrounding planetary bodies, to get the velocity boost required
            with zero fuel consumption.
          </Text>
        </View>
        <Text style={styles.back1}>Back</Text>
      </View>
      <Text style={styles.theSolarSystem1}>
        Cassini&#39;s interplanetary route, with gravity{"\n"}boosts from Venus
        and Jupiter
      </Text>
      <Text style={styles.loremIpsum2}>
        Similar to the Cassini-Huygens probe showed above, the Voyager I and
        Voyager II also used this technique to {"\n"}propel themselves out of
        the solar system into outer space.
      </Text>
      <View style={styles.image4Stack}>
        <Image
          source={require("../assets/images/voyager_trajectories_1.png")}
          resizeMode="contain"
          style={styles.image4}
        ></Image>
        <Text style={styles.theSolarSystem2}>
          Trajectories for Voyager I and II
        </Text>
      </View>
      <Text style={styles.loremIpsum3}>
        The rockets make use of the gravitational fields of the planets that
        they come accross in their path in a calculated way to boost their
        speed. {"\n"}
        {"\n"}According to Newton’s third law, the rockets also apply an equal
        force on the planets. But due to the huge mass of the planets, the
        acceleration is negligible and doesn’t affect the planet movement.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(36,36,36,1)"
  },
  rect: {
    top: 28,
    left: 0,
    width: 432,
    height: 271,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    borderRadius: 25
  },
  image3: {
    top: 0,
    left: 52,
    width: 328,
    height: 328,
    position: "absolute"
  },
  rectStack: {
    width: 432,
    height: 328,
    marginTop: 678,
    marginLeft: -28
  },
  image1: {
    top: 30,
    left: 60,
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
    width: 424,
    height: 424,
    position: "absolute",
    left: 0
  },
  rocketNavigation: {
    top: 379,
    left: 60,
    position: "absolute",
    fontFamily: "roboto-900",
    color: "rgba(255,255,255,1)",
    height: 89,
    width: 328,
    fontSize: 36
  },
  loremIpsum1: {
    top: 449,
    position: "absolute",
    fontFamily: "roboto-300",
    color: "rgba(255,255,255,1)",
    height: 74,
    width: 328,
    fontSize: 18,
    left: 60
  },
  image1Stack: {
    top: 0,
    left: 0,
    width: 424,
    height: 523,
    position: "absolute"
  },
  back1: {
    top: 32,
    left: 87,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(0,110,255,1)",
    height: 15,
    width: 46
  },
  image1StackStack: {
    width: 424,
    height: 523,
    marginTop: -1016,
    marginLeft: -24
  },
  theSolarSystem1: {
    fontFamily: "roboto-900",
    color: "rgba(94,94,94,1)",
    fontSize: 16,
    textAlign: "center",
    marginTop: 493,
    marginLeft: 36
  },
  loremIpsum2: {
    fontFamily: "roboto-300",
    color: "rgba(255,255,255,1)",
    height: 74,
    width: 328,
    fontSize: 18,
    marginTop: 35,
    marginLeft: 24
  },
  image4: {
    top: 0,
    left: 0,
    width: 404,
    height: 385,
    position: "absolute"
  },
  theSolarSystem2: {
    top: 376,
    left: 88,
    position: "absolute",
    fontFamily: "roboto-900",
    color: "rgba(94,94,94,1)",
    fontSize: 16,
    textAlign: "center"
  },
  image4Stack: {
    width: 404,
    height: 395,
    marginTop: 61,
    marginLeft: -14
  },
  loremIpsum3: {
    fontFamily: "roboto-300",
    color: "rgba(255,255,255,1)",
    height: 74,
    width: 328,
    fontSize: 18,
    marginTop: 38,
    marginLeft: 24
  }
});

export default Untitled12;
