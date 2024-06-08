import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from "@/components/Categories";

export default function Home() {
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
          <Categories />
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
});
