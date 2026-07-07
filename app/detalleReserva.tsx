import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

import PrimaryButton from "../presentation/components/shared/PrimaryButton";
import { useReserva } from "../presentation/context/ReservaContext";
import { COLORS } from "../presentation/utils/color";

export default function DetalleReserva() {

  const { id } = useLocalSearchParams();

  const router = useRouter();

  const { reservas, dispatch } = useReserva();

  const reserva = reservas.find(r => r.id === id);

  if (!reserva) {

    return (

      <SafeAreaView style={styles.container}>

        <Text style={styles.error}>

          Reserva no encontrada

        </Text>

      </SafeAreaView>

    );

  }

  const eliminarReserva = () => {

    Alert.alert(

      "Eliminar",

      "¿Desea eliminar esta reserva?",

      [

        {

          text: "Cancelar",

          style: "cancel"

        },

        {

          text: "Eliminar",

          style: "destructive",

          onPress: () => {

            dispatch({

              type: "DELETE",

              payload: reserva.id

            });

            router.replace("/reservas" as any);

          }

        }

      ]

    );

  };

  return (

    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>

        Detalle de Reserva

      </Text>

      <View style={styles.card}>

        <Text style={styles.label}>

          Cliente

        </Text>

        <Text style={styles.value}>

          {reserva.cliente}

        </Text>

        <Text style={styles.label}>

          Teléfono

        </Text>

        <Text style={styles.value}>

          {reserva.telefono}

        </Text>

        <Text style={styles.label}>

          Mesa

        </Text>

        <Text style={styles.value}>

          {reserva.mesa}

        </Text>

        <Text style={styles.label}>

          Plato

        </Text>

        <Text style={styles.value}>

          {reserva.plato}

        </Text>

        <Text style={styles.label}>

          Comensales

        </Text>

        <Text style={styles.value}>

          {reserva.comensales}

        </Text>

        <Text style={styles.label}>

          Prioridad

        </Text>

        <Text style={styles.value}>

          {reserva.prioridad}

        </Text>

        <Text style={styles.label}>

          Estado

        </Text>

        <Text style={styles.value}>

          {reserva.estado}

        </Text>

        <Text style={styles.label}>

          Fecha

        </Text>

        <Text style={styles.value}>

          {reserva.fechaRegistro}

        </Text>

      </View>

      <PrimaryButton

        title="Editar"

        onPress={() =>

          router.push({

            pathname: "/editarReserva" as any,

            params: {

              id: reserva.id

            }

          })

        }

      />

      <PrimaryButton

        title="Eliminar"

        color={COLORS.danger}

        onPress={eliminarReserva}

      />

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: COLORS.background,

    padding: 20

  },

  title: {

    color: COLORS.secondary,

    fontSize: 28,

    fontWeight: "bold",

    marginBottom: 20,

    textAlign: "center"

  },

  card: {

    backgroundColor: COLORS.card,

    borderRadius: 14,

    padding: 20,

    marginBottom: 20

  },

  label: {

    color: COLORS.secondary,

    fontWeight: "bold",

    marginTop: 10

  },

  value: {

    color: COLORS.white,

    fontSize: 16,

    marginTop: 3

  },

  error: {

    color: COLORS.danger,

    textAlign: "center",

    fontSize: 20,

    marginTop: 50

  }

});