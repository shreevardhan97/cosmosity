import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

function MaterialCardWithTextOverImage2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/96d5ee1fdcd58a44dc12504a3be9b5f7.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    flexWrap: "nowrap",
    backgroundColor: "rgba(36,36,36,1)",
    overflow: "hidden"
  },
  image: {
    width: 381,
    height: 381,
    opacity: 0.59,
    marginTop: 186,
    marginLeft: 120
  }
});

export default MaterialCardWithTextOverImage2;
