import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Body({ Body }) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style={styles.containerBody}>{Body}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  containerBody: {
    height: "95%",
    backgroundColor: "#292A2D",
    marginTop: "auto",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
