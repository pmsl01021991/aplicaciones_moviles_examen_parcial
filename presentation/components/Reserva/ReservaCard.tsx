import React from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Reserva } from "../../models/Reserva";
import { COLORS } from "../../utils/color";
import EstadoChip from "./EstadoChip";

interface Props {
  reserva: Reserva;
  onPress: () => void;
}

export default function ReservaCard({
  reserva,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
    >
      <View style={styles.header}>
        <Text style={styles.cliente}>
          {reserva.cliente}
        </Text>

        <EstadoChip estado={reserva.estado} />
      </View>

      <Text style={styles.info}>
        🍽 {reserva.plato}
      </Text>

      <Text style={styles.info}>
        🪑 {reserva.mesa}
      </Text>

      <Text style={styles.info}>
        👥 {reserva.comensales} personas
      </Text>

      <Text style={styles.info}>
        📞 {reserva.telefono}
      </Text>

      <Text style={styles.fecha}>
        {reserva.fecha}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 14,
    padding: 18,
    marginBottom: 15,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
  },

  cliente: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
  },

  info: {
    color: COLORS.gray,
    marginTop: 5,
    fontSize: 15,
  },

  fecha: {
    marginTop: 12,
    color: COLORS.secondary,
    fontWeight: "600",
  },
});