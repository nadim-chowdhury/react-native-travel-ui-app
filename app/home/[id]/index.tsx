import { categoriesData } from "@/utils/categoriesData";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function UniqueItem() {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const { id } = useLocalSearchParams();

  useEffect(() => {
    const parsedId = parseInt(id, 10);
    const item = categoriesData.find((item: any) => {
      return item.id === parsedId;
    });
    setSelectedItem(item);
  }, [id]);

  const onBack = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      {/* Back button */}
      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      {/* Image */}
      <ImageBackground
        source={selectedItem ? selectedItem.icon : null}
        style={styles.image}
        resizeMode="cover"
      />

      {/* Description */}
      <View style={styles.descriptionContainer}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            marginBottom: 12,
          }}
        >
          {selectedItem ? selectedItem.name : ""}
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          dolor unde nesciunt laboriosam, iusto temporibus minus autem
          voluptatibus explicabo amet! Itaque harum velit esse facilis minima,
          accusantium necessitatibus sapiente ullam non animi corporis illo
          temporibus voluptate ad nihil error repudiandae cumque maxime debitis
          ut sit illum amet.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
    marginTop: 32,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007BFF",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxHeight: "50%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  descriptionContainer: {
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    maxHeight: "50%",
    padding: 20,
    backgroundColor: "#fff",
    width: "100%",
    paddingTop: 48,
    paddingBottom: 156,
  },
});
