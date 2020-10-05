import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function MaterialCardWithTextOverImage1(props) {
  return <View style={[styles.container, props.style]}></View>;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    flexWrap: "nowrap",
    backgroundColor: "rgba(36,36,36,1)",
    overflow: "hidden"
  }
});

export default MaterialCardWithTextOverImage1;
