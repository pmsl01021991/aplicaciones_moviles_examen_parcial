import { useRouter } from "expo-router";
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
} from "react-native";

import PrimaryButton from "../presentation/components/shared/PrimaryButton";
import { COLORS } from "../presentation/utils/color";

export default function Home() {

  const router = useRouter();

  return (

    <SafeAreaView style={styles.container}>

      <StatusBar barStyle="light-content" />

      <ImageBackground
        source={require("../assets/images/fondo.png")}
        style={styles.background}
      >

        <View style={styles.overlay}>

          <Text style={styles.title}>
            RESTAURANTE
          </Text>

          <Text style={styles.title2}>
            EL BUEN SABOR
          </Text>

          <Text style={styles.subtitle}>
            Sabores auténticos que despiertan tus sentidos
          </Text>

          <View style={styles.buttons}>

            <PrimaryButton
              title="Ver Menú"
              onPress={() => router.push("/menu" as any)}
            />

            <PrimaryButton
              title="Reservaciones"
              onPress={() => router.push("/reservas" as any)}
            />

          </View>

        </View>

      </ImageBackground>

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: COLORS.background

  },

  background: {

    flex: 1,

    justifyContent: "center"

  },

  overlay: {

    flex: 1,

    justifyContent: "center",

    alignItems: "center",

    padding: 25,

    backgroundColor: "rgba(0,0,0,0.60)"

  },

  title: {

    color: COLORS.secondary,

    fontSize: 38,

    fontWeight: "bold",

    textAlign: "center"

  },

  title2: {

    color: COLORS.white,

    fontSize: 32,

    fontWeight: "bold",

    textAlign: "center",

    marginBottom: 15

  },

  subtitle: {

    color: COLORS.gray,

    fontSize: 18,

    textAlign: "center",

    marginBottom: 50,

    lineHeight: 28

  },

  buttons: {

    width: "100%",

    gap: 15

  }

});