import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { categoriesData } from "../utils/categoriesData";

export default function Categories({ setSelectedCategory }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Categories</Text>

        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        {categoriesData.map((item, i) => (
          <TouchableOpacity key={i} style={styles.categoryItem}>
            <Image source={item.icon} style={styles.categoryIcon} />
            <Text style={styles.categoryName}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 16,
    marginTop: 4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: widthPercentageToDP(4),
    fontWeight: "bold",
  },
  seeAll: {
    fontSize: widthPercentageToDP(4),
    color: "#007BFF",
  },
  scrollView: {
    flexDirection: "row",
    gap: 16, // Add gap between the items
  },
  categoryItem: {
    alignItems: "center",
  },
  categoryIcon: {
    width: 64,
    height: 64,
    borderRadius: 18,
  },
  categoryName: {
    marginTop: 8,
    fontSize: widthPercentageToDP(3.5),
    textAlign: "center",
  },
});
