import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { categoriesData } from "@/utils/categoriesData";

export default function SortCategories() {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.categoryItem}>
      <Image source={item.icon} style={styles.categoryIcon} />

      <View style={styles.overlay}>
        <Text style={styles.overlayText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={categoriesData.reverse()}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 16,
  },
  categoryItem: {
    flex: 1,
    margin: 12,
    // gap: 16,
    alignItems: "center",
  },
  categoryIcon: {
    width: widthPercentageToDP(40),
    height: widthPercentageToDP(40),
    borderRadius: 12,
    objectFit: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 12,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 12,
  },
  overlayText: {
    color: "#fff",
    fontSize: widthPercentageToDP(4),
    fontWeight: "bold",
    padding: 16,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
  },
});
