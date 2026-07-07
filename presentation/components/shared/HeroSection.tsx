import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
} from "react-native";

import { COLORS } from "../../utils/color";

export default function HeroSection() {
  return (
    <ImageBackground
      source={require("../../../assets/images/fondo.png")}
      style={styles.hero}
      resizeMode="cover"
    >
      <View style={styles.overlay}>

        <Text style={styles.title}>
          RESTAURANTE EL
        </Text>

        <Text style={styles.title2}>
          BUEN SABOR
        </Text>

        <Text style={styles.subtitle}>
          Sabores auténticos que despiertan tus sentidos
        </Text>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  hero: {

    width: "100%",

    height: 620,

    justifyContent: "center",

  },

  overlay: {

    flex: 1,

    backgroundColor: "rgba(0,0,0,0.68)",

    justifyContent: "center",

    alignItems: "center",

    paddingHorizontal: 25,

  },

  title: {

    color: COLORS.secondary,

    fontSize: 38,

    fontWeight: "bold",

    textAlign: "center",

    lineHeight: 45,

  },

  title2: {

    color: COLORS.secondary,

    fontSize: 38,

    fontWeight: "bold",

    textAlign: "center",

    marginBottom: 20,

  },

  subtitle: {

    color: "#FFFFFF",

    fontSize: 21,

    textAlign: "center",

    lineHeight: 32,

    maxWidth: 340,

  },

});