import { View, Text, Image, StyleSheet, Alert } from "react-native";
import { useReserva } from "../../context/ReservaContext";

import PrimaryButton from "./PrimaryButton";
import { COLORS } from "../../utils/color";

const platos = [
  {
    id: "1",
    nombre: "Pasta Carbonera",
    descripcion: "Deliciosa pasta con salsa cremosa.",
    precio: "S/ 32.00",
    imagen: require("../../../assets/images/pasta.jpeg"),
  },
  {
    id: "2",
    nombre: "Pizza Margherita",
    descripcion: "Pizza clásica con tomate, mozzarella y albahaca.",
    precio: "S/ 28.00",
    imagen: require("../../../assets/images/pizza.jpeg"),
  },
  {
    id: "3",
    nombre: "Carne Asada",
    descripcion: "Jugosa carne a la parrilla con especias especiales.",
    precio: "S/ 25.00",
    imagen: require("../../../assets/images/carne.jpeg"),
  },
  {
    id: "4",
    nombre: "Pollo Asado",
    descripcion: "Pollo marinado y asado a la perfección.",
    precio: "S/ 36.00",
    imagen: require("../../../assets/images/pollo.jpeg"),
  },
];

export default function MenuHome() {

  const { platosSeleccionados, setPlatosSeleccionados } = useReserva();

  const agregarPlato = (nombre: string) => {

    if (platosSeleccionados.includes(nombre)) {

      Alert.alert(
        "Información",
        "Ese plato ya fue agregado."
      );

      return;

    }

    setPlatosSeleccionados([

      ...platosSeleccionados,

      nombre

    ]);

    Alert.alert(

      "Plato seleccionado",

      `${nombre} fue agregado correctamente.`

    );

  };
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Nuestro Menú
      </Text>

      <Text style={styles.subtitle}>
        Descubre nuestros platos más populares, preparados con ingredientes
        frescos y técnicas tradicionales.
      </Text>

      {platos.map((item) => (
        <View key={item.id} style={styles.card}>

          <Image
            source={item.imagen}
            style={styles.image}
          />

          <Text style={styles.nombre}>
            {item.nombre}
          </Text>

          <Text style={styles.descripcion}>
            {item.descripcion}
          </Text>

          <Text style={styles.precio}>
            {item.precio}
          </Text>

          <PrimaryButton
              title="Agregar a reservación"
              onPress={() => agregarPlato(item.nombre)}
              color={COLORS.secondary}
          />

        </View>
      ))}

    </View>
  );
}

const styles = StyleSheet.create({

  container: {

    backgroundColor: COLORS.card,

    paddingVertical: 40,

    paddingHorizontal: 20,

  },

  title: {

    fontSize: 34,

    fontWeight: "bold",

    color: COLORS.secondary,

    textAlign: "center",

    marginBottom: 15,

  },

  subtitle: {

    color: "#C4B5FD",

    textAlign: "center",

    fontSize: 17,

    lineHeight: 26,

    marginBottom: 35,

  },

  card: {

    backgroundColor: "#FFFFFF",

    borderRadius: 14,

    overflow: "hidden",

    marginBottom: 28,

    elevation: 4,

  },

  image: {

    width: "100%",

    height: 210,

  },

  nombre: {

    fontSize: 22,

    fontWeight: "bold",

    color: "#111827",

    marginTop: 15,

    marginHorizontal: 18,

  },

  descripcion: {

    color: "#4B5563",

    marginTop: 10,

    marginHorizontal: 18,

    lineHeight: 22,

    fontSize: 15,

  },

  precio: {

    color: COLORS.secondary,

    fontSize: 22,

    fontWeight: "bold",

    marginTop: 15,

    marginHorizontal: 18,

  },

});