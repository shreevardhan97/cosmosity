import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function Slider(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View
        style={[
          styles.rect,
          {
            backgroundColor: props.rect || "#E6E6E6"
          }
        ]}
      ></View>
      <View
        style={[
          styles.rect1,
          {
            backgroundColor: props.rect1 || "#E6E6E6"
          }
        ]}
      ></View>
      <View
        style={[
          styles.rect2,
          {
            backgroundColor: props.rect2 || "#E6E6E6"
          }
        ]}
      ></View>
      <View
        style={[
          styles.rect3,
          {
            backgroundColor: props.rect3 || "rgba(230,230, 230,1)"
          }
        ]}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  rect: {
    width: 31,
    height: 6,
    borderRadius: 35
  },
  rect1: {
    width: 31,
    height: 6,
    borderRadius: 35
  },
  rect2: {
    width: 31,
    height: 6,
    borderRadius: 35
  },
  rect3: {
    width: 31,
    height: 6,
    borderRadius: 35
  }
});

export default Slider;
