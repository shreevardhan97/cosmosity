import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

function MaterialCardWithTextOverImage(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectStack}>
        <View style={styles.rect}></View>
        <Image
          source={require("../assets/images/lx70-r8-8-inch-reflector_wide1_2700121.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden"
  },
  rect: {
    top: 0,
    left: 0,
    width: 329,
    height: 504,
    position: "absolute",
    backgroundColor: "rgba(36,36,36,1)",
    borderRadius: 24
  },
  image: {
    top: 218,
    left: 192,
    width: 274,
    height: 274,
    position: "absolute",
    opacity: 0.67
  },
  rectStack: {
    width: 466,
    height: 504,
    marginTop: -12,
    marginLeft: -6
  }
});

export default MaterialCardWithTextOverImage;
