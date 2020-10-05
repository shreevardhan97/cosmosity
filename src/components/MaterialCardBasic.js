import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function MaterialCardBasic(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rocketScienceRow}>
        <Text style={styles.rocketScience}>
          {props.rocketScience || "Rocket Science"}
        </Text>
        <Image
          source={require("../assets/images/Group_13.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 17,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "rgba(46,62,80,1)",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden",
    flexDirection: "row"
  },
  rocketScience: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 30,
    width: 225,
    fontSize: 28,
    marginTop: 23
  },
  image: {
    width: 77,
    height: 77
  },
  rocketScienceRow: {
    height: 77,
    flexDirection: "row",
    flex: 1,
    marginRight: 34,
    marginLeft: 23,
    marginTop: 15
  }
});

export default MaterialCardBasic;
