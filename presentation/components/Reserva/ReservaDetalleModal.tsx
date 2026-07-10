import {
  Modal,
  View,
  Text,
  StyleSheet,
} from "react-native";

import PrimaryButton from "../shared/PrimaryButton";
import { COLORS } from "../../utils/color";
import { Reserva } from "../../models/Reserva";

interface Props {

  visible: boolean;

  reserva: Reserva | null;

  onCerrar: () => void;

  onEditar: () => void;

  onEliminar: () => void;

}

export default function ReservaDetalleModal({

  visible,

  reserva,

  onCerrar,

  onEditar,

  onEliminar,

}: Props) {

  if (!reserva) return null;

  return (

    <Modal

      visible={visible}

      transparent

      animationType="fade"

    >

      <View style={styles.overlay}>

        <View style={styles.modal}>

          <Text style={styles.title}>

            Detalle de la Reservación

          </Text>

          <Text style={styles.texto}>

            👤 <Text style={styles.bold}>Cliente:</Text> {reserva.cliente}

          </Text>

          <Text style={styles.texto}>

            📞 <Text style={styles.bold}>Teléfono:</Text> {reserva.telefono}

          </Text>

          <Text style={styles.texto}>

            🍽 <Text style={styles.bold}>Plato:</Text> {reserva.plato}

          </Text>

          <Text style={styles.texto}>

            🪑 <Text style={styles.bold}>Mesa:</Text> {reserva.mesa}

          </Text>

          <Text style={styles.texto}>

            👥 <Text style={styles.bold}>Comensales:</Text> {reserva.comensales}

          </Text>

          <Text style={styles.texto}>

            📅 <Text style={styles.bold}>Fecha:</Text> {reserva.fecha}

          </Text>

          <Text style={styles.texto}>

            🕒 <Text style={styles.bold}>Hora:</Text> {reserva.hora}

          </Text>

          <PrimaryButton

            title="Editar"

            onPress={onEditar}

            color="#2563EB"

          />

          <PrimaryButton

            title="Eliminar"

            onPress={onEliminar}

            color={COLORS.danger}

          />

          <PrimaryButton

            title="Cerrar"

            onPress={onCerrar}

            color="#6B7280"

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

    borderRadius: 18,

    padding: 25,

  },

  title: {

    color: COLORS.secondary,

    fontSize: 26,

    fontWeight: "bold",

    textAlign: "center",

    marginBottom: 25,

  },

  texto: {

    color: "#FFF",

    fontSize: 17,

    marginBottom: 12,

  },

  bold: {

    fontWeight: "bold",

  },

});