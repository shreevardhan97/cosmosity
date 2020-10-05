import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import MaterialCardWithTextOverImage1 from "../components/MaterialCardWithTextOverImage1";
import MaterialCardWithTextOverImage2 from "../components/MaterialCardWithTextOverImage2";

function Untitled6(props) {
  return (
    <View style={styles.container}>
      <View style={styles.materialCardWithTextOverImage1Stack}>
        <MaterialCardWithTextOverImage1
          style={styles.materialCardWithTextOverImage1}
        ></MaterialCardWithTextOverImage1>
        <Image
          source={require("../assets/images/Group_33.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
        <Text style={styles.insideARocket}>Inside a Rocket</Text>
        <Text style={styles.learnMore1}>Learn more</Text>
        <Image
          source={require("../assets/images/icons8_3d_1.png")}
          resizeMode="contain"
          style={styles.image3}
        ></Image>
      </View>
      <View style={styles.image1Row}>
        <Image
          source={require("../assets/images/Vector1.png")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
        <Text style={styles.back1}>Back</Text>
      </View>
      <View style={styles.materialCardWithTextOverImage2StackRow}>
        <View style={styles.materialCardWithTextOverImage2Stack}>
          <MaterialCardWithTextOverImage2
            style={styles.materialCardWithTextOverImage2}
          ></MaterialCardWithTextOverImage2>
          <Text style={styles.whatIsAstronomy1}>What is Rocket Science?</Text>
          <Text style={styles.loremIpsum1}>
            Rocket science is the science involving how rockets are designed and
            made. It also desrcibes how rockets propel and navigate through
            space.
          </Text>
          <Text style={styles.loremIpsum2}>
            Is Rocket Science{"\n"}complicated?
          </Text>
        </View>
        <Text style={styles.whatIsAstronomy2}>What is Rocket Science?</Text>
      </View>
      <View style={styles.materialCardWithTextOverImage3Stack}>
        <MaterialCardWithTextOverImage1
          style={styles.materialCardWithTextOverImage3}
        ></MaterialCardWithTextOverImage1>
        <Text style={styles.rocketPropulsion}>Rocket{"\n"}Propulsion</Text>
        <Text style={styles.loremIpsum3}>
          The propulsion of a rocket is achieved by ejecting fuel at very high
          velocities opposite to the direction of motion. This propulsion is
          governed by Newton&#39;s third law.
        </Text>
        <Image
          source={require("../assets/images/63rQXjSuUv-f9b2f7f3bdfdca72e80713e987d7c888ec6a74be_1.png")}
          resizeMode="contain"
          style={styles.image4}
        ></Image>
        <Text style={styles.learnMore2}>Learn more</Text>
        <Image
          source={require("../assets/images/icons8_3d_1.png")}
          resizeMode="contain"
          style={styles.image5}
        ></Image>
      </View>
      <View style={styles.materialCardWithTextOverImage4Stack}>
        <MaterialCardWithTextOverImage1
          style={styles.materialCardWithTextOverImage4}
        ></MaterialCardWithTextOverImage1>
        <Text style={styles.rocketPropulsion1}>
          How does a rocket navigate?
        </Text>
        <Text style={styles.loremIpsum4}>
          To save fuel, rockets use the force of gravity exerted by nearby
          planetary bodies to boost their speeds and also change the direction
          of motion.
        </Text>
        <Image
          source={require("../assets/images/WhatsApp_Image_2020-10-04_at_04.32_1.png")}
          resizeMode="contain"
          style={styles.image6}
        ></Image>
        <Text style={styles.learnMore3}>Learn more</Text>
        <Image
          source={require("../assets/images/icons8_3d_1.png")}
          resizeMode="contain"
          style={styles.image7}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  materialCardWithTextOverImage1: {
    height: 437,
    width: 303,
    position: "absolute",
    top: 0,
    left: 9
  },
  image2: {
    top: 77,
    left: 0,
    width: 303,
    height: 303,
    position: "absolute"
  },
  insideARocket: {
    top: 32,
    left: 34,
    position: "absolute",
    fontFamily: "roboto-900",
    color: "rgba(255,255,255,1)",
    height: 89,
    width: 256,
    fontSize: 36
  },
  learnMore1: {
    left: 41,
    position: "absolute",
    fontFamily: "roboto-500",
    color: "rgba(0,110,255,1)",
    height: 13,
    width: 76,
    top: 395
  },
  image3: {
    top: 379,
    left: 254,
    width: 45,
    height: 45,
    position: "absolute"
  },
  materialCardWithTextOverImage1Stack: {
    width: 312,
    height: 437,
    marginTop: 534,
    marginLeft: 27
  },
  image1: {
    width: 22,
    height: 22,
    transform: [
      {
        rotate: "-180.00deg"
      }
    ]
  },
  back1: {
    fontFamily: "roboto-700",
    color: "rgba(0,110,255,1)",
    height: 15,
    width: 46,
    marginLeft: 5,
    marginTop: 2
  },
  image1Row: {
    height: 22,
    flexDirection: "row",
    marginTop: -931,
    marginLeft: 46,
    marginRight: 256
  },
  materialCardWithTextOverImage2: {
    height: 432,
    width: 303,
    position: "absolute",
    left: 0,
    top: 0
  },
  whatIsAstronomy1: {
    top: 25,
    left: 22,
    position: "absolute",
    fontFamily: "roboto-900",
    color: "rgba(255,255,255,1)",
    height: 89,
    width: 256,
    fontSize: 36
  },
  loremIpsum1: {
    top: 142,
    left: 25,
    position: "absolute",
    fontFamily: "roboto-300",
    color: "rgba(255,255,255,1)",
    height: 74,
    width: 270,
    fontSize: 18
  },
  loremIpsum2: {
    top: 373,
    left: 25,
    position: "absolute",
    fontFamily: "roboto-900",
    color: "rgba(94,94,94,1)",
    fontSize: 17
  },
  materialCardWithTextOverImage2Stack: {
    width: 303,
    height: 432
  },
  whatIsAstronomy2: {
    fontFamily: "roboto-900",
    color: "rgba(255,255,255,1)",
    height: 89,
    width: 256,
    fontSize: 36,
    marginLeft: 301,
    marginTop: 240
  },
  materialCardWithTextOverImage2StackRow: {
    height: 432,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 36,
    marginRight: -521
  },
  materialCardWithTextOverImage3: {
    height: 437,
    width: 303,
    position: "absolute",
    top: 0,
    left: 0
  },
  rocketPropulsion: {
    top: 25,
    left: 21,
    position: "absolute",
    fontFamily: "roboto-900",
    color: "rgba(255,255,255,1)",
    height: 89,
    width: 265,
    fontSize: 34,
    textAlign: "left"
  },
  loremIpsum3: {
    top: 126,
    left: 22,
    position: "absolute",
    fontFamily: "roboto-300",
    color: "rgba(255,255,255,1)",
    height: 74,
    width: 279,
    fontSize: 18
  },
  image4: {
    top: 252,
    left: 21,
    width: 246,
    height: 107,
    position: "absolute"
  },
  learnMore2: {
    left: 32,
    position: "absolute",
    fontFamily: "roboto-500",
    color: "rgba(0,110,255,1)",
    height: 13,
    width: 76,
    top: 392
  },
  image5: {
    top: 376,
    left: 241,
    width: 45,
    height: 45,
    position: "absolute"
  },
  materialCardWithTextOverImage3Stack: {
    width: 303,
    height: 437,
    marginTop: 491,
    marginLeft: 36
  },
  materialCardWithTextOverImage4: {
    height: 437,
    width: 303,
    position: "absolute",
    top: 0,
    left: 0
  },
  rocketPropulsion1: {
    top: 34,
    left: 22,
    position: "absolute",
    fontFamily: "roboto-900",
    color: "rgba(255,255,255,1)",
    height: 89,
    width: 265,
    fontSize: 34,
    textAlign: "left"
  },
  loremIpsum4: {
    top: 132,
    left: 22,
    position: "absolute",
    fontFamily: "roboto-300",
    color: "rgba(255,255,255,1)",
    height: 74,
    width: 279,
    fontSize: 18
  },
  image6: {
    top: 228,
    left: 21,
    width: 172,
    height: 172,
    position: "absolute"
  },
  learnMore3: {
    left: 32,
    position: "absolute",
    fontFamily: "roboto-500",
    color: "rgba(0,110,255,1)",
    height: 13,
    width: 76,
    top: 393
  },
  image7: {
    top: 377,
    left: 235,
    width: 45,
    height: 45,
    position: "absolute"
  },
  materialCardWithTextOverImage4Stack: {
    width: 303,
    height: 437,
    marginTop: 28,
    marginLeft: 36
  }
});

export default Untitled6;
