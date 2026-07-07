import {

  View,

  Text,

  StyleSheet

} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "../../utils/color";

export default function LoginHeader() {

  return (

    <View style={styles.container}>

      <View style={styles.iconContainer}>

        <Ionicons

          name="restaurant"

          size={34}

          color="#FFF"

        />

      </View>

      <Text style={styles.title}>

        Restaurante El Buen Sabor

      </Text>

      <Text style={styles.subtitle}>

        Iniciar Sesión

      </Text>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    alignItems: "center",

    marginBottom: 30

  },

  iconContainer: {

    width: 80,

    height: 80,

    borderRadius: 40,

    backgroundColor: COLORS.secondary,

    justifyContent: "center",

    alignItems: "center",

    marginBottom: 18

  },

  title: {

    color: COLORS.secondary,

    fontSize: 28,

    fontWeight: "bold",

    textAlign: "center"

  },

  subtitle: {

    color: COLORS.gray,

    marginTop: 8,

    fontSize: 17

  }

});