import {
  Modal,
  View,
  Text,
  StyleSheet,
  Alert,
} from "react-native";

import PrimaryButton from "../shared/PrimaryButton";

import { COLORS } from "../../utils/color";
import { useReserva } from "../../context/ReservaContext";

interface Props {

  visible: boolean;

  onCerrar: () => void;

  onConfirmar: () => void;

  usuario: string;

}

export default function ResumenReservaModal({

  visible,

  onCerrar,

  onConfirmar,

  usuario,

}: Props) {

  const {

    reservaTemporal,

  } = useReserva();

  const confirmar = () => {

    Alert.alert(

      "Reservación confirmada",

      "La reservación fue registrada correctamente.",

      [

        {

          text: "Aceptar",

          onPress: onConfirmar,

        },

      ]

    );

  };

  return (

    <Modal

      visible={visible}

      transparent

      animationType="fade"

    >

      <View style={styles.overlay}>

        <View style={styles.modal}>

          <Text style={styles.title}>

            Resumen de Reservación

          </Text>

          <Text style={styles.texto}>

            <Text style={styles.bold}>
              Nombre:
            </Text>{" "}

            {usuario}

          </Text>

          <Text style={styles.texto}>

            <Text style={styles.bold}>
              Plato seleccionado:
            </Text>{" "}

            {reservaTemporal.plato || "Ninguno"}

          </Text>

          <Text style={styles.texto}>

            <Text style={styles.bold}>
              Mesa:
            </Text>{" "}

            {reservaTemporal.mesa}

          </Text>

          <Text style={styles.texto}>

            <Text style={styles.bold}>
              Fecha:
            </Text>{" "}

            {reservaTemporal.fecha}

          </Text>

          <Text style={styles.texto}>

            <Text style={styles.bold}>
              Hora:
            </Text>{" "}

            {reservaTemporal.hora}

          </Text>

          <Text style={styles.texto}>

            <Text style={styles.bold}>
              Número:
            </Text>{" "}

            {reservaTemporal.numero}

          </Text>

          <Text style={styles.texto}>

            <Text style={styles.bold}>
              Comensales:
            </Text>{" "}

            {reservaTemporal.comensales}

          </Text>

          <PrimaryButton

            title="Confirmar"

            onPress={confirmar}

            color={COLORS.secondary}

          />

          <PrimaryButton

            title="Volver"

            onPress={onCerrar}

            color={COLORS.danger}

          />

        </View>

      </View>

    </Modal>

  );

}

const styles = StyleSheet.create({

  overlay: {

    flex: 1,

    justifyContent: "center",

    alignItems: "center",

    backgroundColor: "rgba(0,0,0,0.65)",

    padding: 20,

  },

  modal: {

    width: "100%",

    backgroundColor: "#1F2937",

    borderRadius: 15,

    padding: 25,

  },

  title: {

    color: "#FFFFFF",

    fontSize: 24,

    fontWeight: "bold",

    textAlign: "center",

    marginBottom: 20,

  },

  texto: {

    color: "#FFFFFF",

    fontSize: 17,

    marginBottom: 10,

  },

  bold: {

    fontWeight: "bold",

  },

});