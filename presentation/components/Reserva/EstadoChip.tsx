import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  estado: "PENDIENTE" | "EN_PROCESO" | "FINALIZADO";
}

export default function EstadoChip({ estado }: Props) {
  const backgroundColor =
    estado === "PENDIENTE"
      ? "#F59E0B"
      : estado === "EN_PROCESO"
      ? "#2563EB"
      : "#22C55E";

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.text}>{estado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    alignSelf: "flex-start",
  },

  text: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 12,
  },
});