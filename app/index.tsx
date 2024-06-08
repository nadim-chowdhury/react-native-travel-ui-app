import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { TouchableOpacity } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

export default function Welcome() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/images/bg.jpg")}
        style={styles.background}
      >
        <StatusBar style="light" />

        <View style={styles.overlay}>
          <LinearGradient
            colors={["transparent", "rgb(0, 25, 50)"]}
            style={styles.gradient}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
          />

          <View style={styles.textContainer}>
            <Text style={styles.title}>Travelling made easy!</Text>
            <Text style={styles.subtitle}>
              Experience the world's best adventure experience around the world
              with us
            </Text>
          </View>

          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => router.push("/home")}
          >
            <Text style={styles.btnText}>Let's Go</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20,
    paddingBottom: 48,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: widthPercentageToDP(50),
  },
  textContainer: {
    marginBottom: 40,
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: widthPercentageToDP(10),
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  subtitle: {
    color: "#fff",
    fontSize: widthPercentageToDP(4),
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  btnContainer: {
    padding: 12,
    paddingLeft: 48,
    paddingRight: 48,
    backgroundColor: "#fff",
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  btnText: {
    fontSize: widthPercentageToDP(4),
    fontWeight: "bold",
    color: "#000",
  },
});
