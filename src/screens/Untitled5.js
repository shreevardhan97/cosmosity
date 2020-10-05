import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import MaterialCardWithTextOverImage from "../components/MaterialCardWithTextOverImage";
import MaterialCardWithTextOverImage1 from "../components/MaterialCardWithTextOverImage1";

function Untitled5(props) {
  return (
    <View style={styles.container}>
      <View style={styles.materialCardWithTextOverImageStackRow}>
        <View style={styles.materialCardWithTextOverImageStack}>
          <MaterialCardWithTextOverImage
            style={styles.materialCardWithTextOverImage}
          ></MaterialCardWithTextOverImage>
          <Text style={styles.whatIsAstronomy}>What is Astronomy?</Text>
          <Text style={styles.loremIpsum}>
            Astronomy is the study of everything in the universe beyond Earth’s
            atmosphere.
          </Text>
          <Text style={styles.loremIpsum2}>
            What are the {"\n"}big ideas about astronomy?
          </Text>
        </View>
        <MaterialCardWithTextOverImage1
          style={styles.materialCardWithTextOverImage4}
        ></MaterialCardWithTextOverImage1>
      </View>
      <View style={styles.imageRow}>
        <Image
          source={require("../assets/images/Vector1.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Text style={styles.back}>Back</Text>
      </View>
      <View style={styles.materialCardWithTextOverImage1Stack}>
        <MaterialCardWithTextOverImage1
          style={styles.materialCardWithTextOverImage1}
        ></MaterialCardWithTextOverImage1>
        <Text style={styles.galaxy}>Galaxy</Text>
        <Text style={styles.loremIpsum3}>
          A galaxy is a large group of stars, gas, and dust bound together by
          gravity. They come in a variety of shapes and sizes. The Milky Way is
          a large barred spiral galaxy.
        </Text>
        <ImageBackground
          source={require("../assets/images/Milky-Way-Warp-Illustration_11.png")}
          resizeMode="contain"
          style={styles.image2}
          imageStyle={styles.image2_imageStyle}
        >
          <Text style={styles.learnMore}>Learn more</Text>
        </ImageBackground>
        <Image
          source={require("../assets/images/icons8_3d_1.png")}
          resizeMode="contain"
          style={styles.image5}
        ></Image>
      </View>
      <View style={styles.materialCardWithTextOverImage2Stack}>
        <MaterialCardWithTextOverImage1
          style={styles.materialCardWithTextOverImage2}
        ></MaterialCardWithTextOverImage1>
        <Text style={styles.solarSystem}>Solar System</Text>
        <Text style={styles.loremIpsum4}>
          The solar system consists of the sun and everything that orbits around
          the sun. This includes the eight planets, their moons and countless
          other small objects.
        </Text>
        <ImageBackground
          source={require("../assets/images/9c013d77777685_1.png")}
          resizeMode="contain"
          style={styles.image3}
          imageStyle={styles.image3_imageStyle}
        >
          <Text style={styles.learnMore1}>Learn more</Text>
        </ImageBackground>
        <Image
          source={require("../assets/images/icons8_3d_1.png")}
          resizeMode="contain"
          style={styles.image6}
        ></Image>
      </View>
      <View style={styles.materialCardWithTextOverImage3Stack}>
        <MaterialCardWithTextOverImage1
          style={styles.materialCardWithTextOverImage3}
        ></MaterialCardWithTextOverImage1>
        <Text style={styles.telescopes}>Telescopes</Text>
        <Text style={styles.loremIpsum5}>
          Hubble Space Telescope{"\n"} {"\n"}Hubble space telescope has helped
          observe the most distant stars and galaxies as well as the planets in
          our solar system.
        </Text>
        <ImageBackground
          source={require("../assets/images/hst-sm4_1.png")}
          resizeMode="contain"
          style={styles.image4}
          imageStyle={styles.image4_imageStyle}
        >
          <Text style={styles.learnMore2}>Learn more</Text>
        </ImageBackground>
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
  materialCardWithTextOverImage: {
    height: 437,
    width: 303,
    position: "absolute",
    top: 0,
    borderRadius: 24,
    backgroundColor: "rgba(36,36,36,1)",
    left: 0
  },
  whatIsAstronomy: {
    top: 31,
    left: 28,
    position: "absolute",
    fontFamily: "roboto-900",
    color: "rgba(255,255,255,1)",
    height: 89,
    width: 215,
    fontSize: 36
  },
  loremIpsum: {
    top: 151,
    left: 23,
    position: "absolute",
    fontFamily: "roboto-300",
    color: "rgba(255,255,255,1)",
    height: 74,
    width: 270,
    fontSize: 18
  },
  loremIpsum2: {
    top: 379,
    left: 23,
    position: "absolute",
    fontFamily: "roboto-900",
    color: "rgba(94,94,94,1)",
    fontSize: 17
  },
  materialCardWithTextOverImageStack: {
    width: 303,
    height: 437
  },
  materialCardWithTextOverImage4: {
    height: 437,
    width: 303,
    marginLeft: 103
  },
  materialCardWithTextOverImageStackRow: {
    height: 437,
    flexDirection: "row",
    marginTop: 76,
    marginLeft: 36,
    marginRight: -370
  },
  image: {
    width: 22,
    height: 22,
    transform: [
      {
        rotate: "-180.00deg"
      }
    ]
  },
  back: {
    fontFamily: "roboto-700",
    color: "rgba(0,110,255,1)",
    height: 15,
    width: 46,
    marginLeft: 5,
    marginTop: 2
  },
  imageRow: {
    height: 22,
    flexDirection: "row",
    marginTop: -475,
    marginLeft: 37,
    marginRight: 265
  },
  materialCardWithTextOverImage1: {
    height: 437,
    width: 303,
    position: "absolute",
    left: 0,
    top: 0
  },
  galaxy: {
    top: 29,
    left: 23,
    position: "absolute",
    fontFamily: "roboto-900",
    color: "rgba(255,255,255,1)",
    height: 89,
    width: 215,
    fontSize: 36
  },
  loremIpsum3: {
    top: 97,
    left: 23,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 74,
    width: 270,
    fontSize: 18
  },
  image2: {
    top: 152,
    left: 23,
    width: 270,
    height: 265,
    position: "absolute"
  },
  image2_imageStyle: {},
  learnMore: {
    fontFamily: "roboto-500",
    color: "rgba(0,110,255,1)",
    height: 13,
    width: 76,
    marginTop: 240,
    marginLeft: 5
  },
  image5: {
    top: 376,
    left: 242,
    width: 45,
    height: 45,
    position: "absolute"
  },
  materialCardWithTextOverImage1Stack: {
    width: 303,
    height: 437,
    marginTop: 479,
    marginLeft: 36
  },
  materialCardWithTextOverImage2: {
    height: 437,
    width: 303,
    position: "absolute",
    left: 0,
    top: 0
  },
  solarSystem: {
    top: 35,
    left: 28,
    position: "absolute",
    fontFamily: "roboto-900",
    color: "rgba(255,255,255,1)",
    height: 89,
    width: 240,
    fontSize: 36
  },
  loremIpsum4: {
    top: 107,
    left: 28,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 74,
    width: 270,
    fontSize: 18
  },
  image3: {
    top: 169,
    left: 26,
    width: 263,
    height: 263,
    position: "absolute"
  },
  image3_imageStyle: {},
  learnMore1: {
    fontFamily: "roboto-500",
    color: "rgba(0,110,255,1)",
    height: 13,
    width: 76,
    marginTop: 227,
    marginLeft: 2
  },
  image6: {
    top: 380,
    left: 245,
    width: 45,
    height: 45,
    position: "absolute"
  },
  materialCardWithTextOverImage2Stack: {
    width: 303,
    height: 437,
    marginTop: 26,
    marginLeft: 36
  },
  materialCardWithTextOverImage3: {
    height: 437,
    width: 303,
    position: "absolute",
    left: 0,
    top: 0
  },
  telescopes: {
    top: 39,
    left: 26,
    position: "absolute",
    fontFamily: "roboto-900",
    color: "rgba(255,255,255,1)",
    height: 89,
    width: 240,
    fontSize: 36
  },
  loremIpsum5: {
    top: 108,
    left: 28,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 74,
    width: 270,
    fontSize: 18
  },
  image4: {
    top: 219,
    left: 23,
    width: 190,
    height: 200,
    position: "absolute"
  },
  image4_imageStyle: {},
  learnMore2: {
    fontFamily: "roboto-500",
    color: "rgba(0,110,255,1)",
    height: 13,
    width: 76,
    marginTop: 181,
    marginLeft: 5
  },
  image7: {
    top: 383,
    left: 244,
    width: 45,
    height: 45,
    position: "absolute"
  },
  materialCardWithTextOverImage3Stack: {
    width: 303,
    height: 437,
    marginTop: 24,
    marginLeft: 36
  }
});

export default Untitled5;
