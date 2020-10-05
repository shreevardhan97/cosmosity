import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonLight(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.getStrarted}>Get Strarted</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFEFF4",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 6,
    paddingLeft: 16,
    paddingRight: 16,
    borderWidth: 0,
    borderColor: "rgba(4,4,4,1)",
    borderStyle: "solid"
  },
  getStrarted: {
    color: "#000",
    fontSize: 17
  }
});

export default CupertinoButtonLight;
