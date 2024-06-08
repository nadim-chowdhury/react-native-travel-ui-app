import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  Modal,
} from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { categoriesData } from "@/utils/categoriesData";
import { LinearGradient } from "expo-linear-gradient";

export default function SortCategories({ selectedCategory }: any) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemsToShow, setItemsToShow] = useState([]);

  useEffect(() => {
    if (selectedCategory) {
      const filteredItems = categoriesData.filter(
        (item: any) => item.category === selectedCategory
      );

      const shuffledItems = shuffleArray(filteredItems);

      setItemsToShow(shuffledItems.slice(0, 4));
    }
  }, [selectedCategory]);

  const shuffleArray = (array: any) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => {
        setSelectedItem(item);
        setModalVisible(true);
      }}
    >
      <Image source={item.icon} style={styles.categoryIcon} />

      <View style={styles.overlay}>
        <LinearGradient
          colors={["transparent", "rgb(0, 25, 50)"]}
          style={styles.gradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />

        <Text style={styles.overlayTitle}>{item.name}</Text>
        <Text style={styles.overlayDesc}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  return (
    <View>
      <FlatList
        data={categoriesData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.container}
      />

      <Modal
        animationType="fade"
        transparent={true}
        statusBarTranslucent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image
              source={(selectedItem as any)?.icon}
              style={styles.modalImage}
            />
            <Text style={styles.modalTitle}>{(selectedItem as any)?.name}</Text>
            <Text style={styles.description}>
              {(selectedItem as any)?.description}
            </Text>
            <Text onPress={closeModal} style={styles.closeButton}>
              Close
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 16,
    marginTop: 8,
  },
  categoryItem: {
    flex: 1,
    margin: 12,
    // gap: 16,
    alignItems: "center",
  },
  categoryIcon: {
    width: widthPercentageToDP(40),
    height: widthPercentageToDP(60),
    borderRadius: 12,
    objectFit: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    // alignItems: "center",
    borderRadius: 12,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 12,
  },
  overlayTitle: {
    color: "#fff",
    fontSize: widthPercentageToDP(4),
    fontWeight: "bold",
    paddingLeft: 16,
    paddingBottom: 8,
  },
  overlayDesc: {
    color: "#fff",
    fontSize: widthPercentageToDP(3),
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
  },
  modalImage: {
    width: widthPercentageToDP(80),
    height: widthPercentageToDP(80),
    borderRadius: 12,
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: widthPercentageToDP(6),
    fontWeight: "bold",
    color: "#000",
  },
  description: { marginBottom: 20 },
  closeButton: {
    backgroundColor: "#007BFF",
    color: "#fff",
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 10,
    padding: 10,
  },
});
