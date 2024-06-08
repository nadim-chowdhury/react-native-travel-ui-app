import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  Linking,
} from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from "@/components/Categories";
import SortCategories from "@/components/SortCategories";
import SubCategories from "@/components/SubCategories";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Let's Discover</Text>

          <TouchableOpacity>
            <Image
              source={require("../../assets/images/avatar.png")}
              style={styles.avatar}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchBox}>
            <MagnifyingGlassIcon size={20} color="#000" />
            <TextInput
              placeholder="Search destination"
              placeholderTextColor="#999"
              style={styles.searchInput}
            />
          </View>
        </View>

        <View style={styles.categoriesContainer}>
          <Categories setSelectedCategory={setSelectedCategory} />
        </View>

        <SubCategories />

        <View style={styles.sortCategoriesContainer}>
          <SortCategories selectedCategory={selectedCategory} />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Nadim Chowdhury</Text>

          <View style={styles.socialIconsContainer}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL("https://www.linkedin.com/in/nadim-chowdhury");
              }}
              style={styles.socialIcon}
            >
              <Image
                source={require("../../assets/images/linkedin.png")}
                style={styles.socialIconImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL("https://github.com/nadim-chowdhury");
              }}
              style={styles.socialIcon}
            >
              <Image
                source={require("../../assets/images/github.png")}
                style={styles.socialIconImage}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 32,
  },
  scrollView: {
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: widthPercentageToDP(6),
    fontWeight: "bold",
  },
  avatar: {
    width: widthPercentageToDP(14),
    height: widthPercentageToDP(14),
    borderRadius: widthPercentageToDP(7),
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: widthPercentageToDP(4),
  },
  categoriesContainer: {
    marginBottom: 20,
  },
  sortCategoriesContainer: {
    marginBottom: 20,
    // paddingHorizontal: 16,
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  socialIcon: {
    marginHorizontal: 4,
  },
  socialIconImage: {
    width: widthPercentageToDP(6),
    height: widthPercentageToDP(6),
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    padding: 6,
  },
  footerText: {
    marginRight: 4,
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
    textTransform: "uppercase",
  },
});
