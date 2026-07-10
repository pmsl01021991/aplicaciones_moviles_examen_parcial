import {View,Text,StyleSheet} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../utils/color";

export default function RegisterHeader() {

  return (

    <View style={styles.container}>

      <View style={styles.iconContainer}>

        <Ionicons

          name="person-add"

          size={34}

          color="#FFF"

        />

      </View>

      <Text style={styles.title}>

        Nueva Reserva

      </Text>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    alignItems: "center",

    marginBottom: 25

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

    fontSize: 26,

    fontWeight: "bold"

  }

});