import {
  Modal,
  View,
  Text,
  StyleSheet,
} from "react-native";

import { useState } from "react";

import PrimaryButton from "../shared/PrimaryButton";

import { COLORS } from "../../utils/color";
import { Picker } from "@react-native-picker/picker";
import { useReserva } from "../../context/ReservaContext";

interface Props {

  visible: boolean;

  onCerrar: () => void;

  onContinuar: () => void;

}

const horas = [

  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",

];

export default function SeleccionHoraModal({

  visible,

  onCerrar,

  onContinuar,

}: Props) {

  const {

    reservaTemporal,

    setReservaTemporal,

  } = useReserva();

  const [hora, setHora] = useState("");

  const continuar = () => {

    if (!hora) return;

    setReservaTemporal({

      ...reservaTemporal,

      hora,

    });

    onContinuar();

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

            Selecciona una hora

          </Text>

          <Picker
            selectedValue={hora}
            onValueChange={(itemValue) => setHora(itemValue)}
            style={styles.picker}
          >

            <Picker.Item
              label="Seleccionar hora"
              value=""
            />

            {horas.map((item) => (
              <Picker.Item
                key={item}
                label={item}
                value={item}
              />
            ))}

          </Picker>

          <PrimaryButton

            title="Siguiente"

            onPress={continuar}

            color={COLORS.secondary}

          />

          <PrimaryButton

            title="Atrás"

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

    backgroundColor: "rgba(0,0,0,0.60)",

    padding: 20,

  },

  modal: {

    width: "100%",

    backgroundColor: "#1F2937",

    borderRadius: 15,

    padding: 20,

    maxHeight: "85%",

  },

  title: {

    color: "#FFF",

    fontSize: 24,

    fontWeight: "bold",

    textAlign: "center",

    marginBottom: 20,

  },

  picker: {
  backgroundColor: "#FFFFFF",
  borderRadius: 8,
  marginBottom: 20,
},

});

