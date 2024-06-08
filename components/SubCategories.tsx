import React, { useState } from "react";
import { subCategories } from "@/utils/categoriesData";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function SubCategories() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (index: any) => {
    setSelectedTab(index);
  };

  return (
    <View style={styles.container}>
      {subCategories.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.tab,
            index === 0 ? styles.firstTab : null,
            index === subCategories.length - 1 ? styles.lastTab : null,
            selectedTab === index ? styles.activeTab : null,
          ]}
          onPress={() => handleTabClick(index)}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === index ? styles.activeTabText : null,
            ]}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    borderRadius: 100,
    overflow: "hidden",
    marginBottom: 20,
    marginTop: 12,
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  firstTab: {
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
  },
  lastTab: {
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
  },
  activeTab: {
    backgroundColor: "#007BFF",
  },
  tabText: {
    color: "#000",
    fontSize: 12,
  },
  activeTabText: {
    color: "#fff",
  },
});
