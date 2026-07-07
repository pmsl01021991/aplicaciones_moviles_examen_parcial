import { useState } from "react";

import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";

import { useRouter } from "expo-router";

import SearchBar from "../presentation/components/shared/SearchBar";
import PrimaryButton from "../presentation/components/shared/PrimaryButton";
import ReservaCard from "../presentation/components/Reserva/ReservaCard";

import { useReserva } from "../presentation/context/ReservaContext";
import { COLORS } from "../presentation/utils/color";

export default function Reservas() {
  const router = useRouter();

  const { reservas } = useReserva();

  const [buscar, setBuscar] = useState("");

  const reservasFiltradas = reservas.filter((item) =>
    item.cliente
      .toLowerCase()
      .includes(buscar.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Reservaciones
      </Text>

      <SearchBar
        value={buscar}
        onChangeText={setBuscar}
      />

      <PrimaryButton
        title="Nueva Reservación"
        onPress={() =>
          router.push("/crearReserva" as any)
        }
      />

      <FlatList
        data={reservasFiltradas}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 30,
        }}
        renderItem={({ item }) => (
          <ReservaCard
            reserva={item}
            onPress={() =>
              router.push({
                pathname: "/detalleReserva" as any,
                params: {
                  id: item.id,
                },
              })
            }
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 18,
  },

  title: {
    fontSize: 30,
    color: COLORS.secondary,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
});