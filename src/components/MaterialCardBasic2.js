import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function MaterialCardBasic2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.imageRow}>
        <Image
          source={require("../assets/images/Group_141.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Text style={styles.astronomy}>Astronomy</Text>
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
  image: {
    width: 72,
    height: 72
  },
  astronomy: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 51,
    width: 188,
    fontSize: 28,
    marginLeft: 43,
    marginTop: 18
  },
  imageRow: {
    height: 72,
    flexDirection: "row",
    flex: 1,
    marginRight: 2,
    marginLeft: 36,
    marginTop: 18
  }
});

export default MaterialCardBasic2;
