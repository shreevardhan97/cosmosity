import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";
import MaterialCardBasic from "../components/MaterialCardBasic";
import MaterialCardBasic2 from "../components/MaterialCardBasic2";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Untitled4(props) {
  return (
    <View style={styles.container}>
      <View style={styles.materialCardBasicStack}>
        <MaterialCardBasic
          astronomy="Astronomy"
          style={styles.materialCardBasic}
        ></MaterialCardBasic>
        <ImageBackground
          source={require("../assets/images/Group_32.png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <MaterialCardBasic2
            style={styles.materialCardBasic2}
          ></MaterialCardBasic2>
        </ImageBackground>
      </View>
      <Icon name="home" style={styles.icon}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  materialCardBasic: {
    height: 109,
    width: 341,
    position: "absolute",
    left: 229,
    top: 180,
    borderWidth: 1,
    borderColor: "#000000"
  },
  image: {
    top: 0,
    width: 799,
    height: 799,
    position: "absolute",
    left: 0
  },
  image_imageStyle: {},
  materialCardBasic2: {
    height: 109,
    width: 341,
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 305,
    marginLeft: 229
  },
  materialCardBasicStack: {
    width: 799,
    height: 799,
    marginTop: 13,
    marginLeft: -212
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginTop: -1587,
    marginLeft: 1342
  }
});

export default Untitled4;
