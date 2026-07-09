import {Modal,View,Text,StyleSheet,Alert} from "react-native";
import { useEffect, useState } from "react";
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

    mesas,

  } = useReserva();

  const [hora, setHora] = useState("");

  useEffect(() => {

    if (visible) {

      setHora("");

    }

  }, [visible]);

  const continuar = () => {

    if (!hora) {

      Alert.alert(
        "Seleccione una hora",
        "Debe seleccionar un horario."
      );

      return;

    }

    const mesa = mesas.find(
      m => m.nombre === reservaTemporal.mesa
    );

    const ocupado = mesa?.reservas.some(
      reserva =>
        reserva.fecha === reservaTemporal.fecha &&
        reserva.hora === hora
    );

    if (ocupado) {

      Alert.alert(
        "Horario no disponible",
        "Ese horario ya está reservado."
      );

      return;

    }

    setReservaTemporal({

      ...reservaTemporal,

      hora,

    });

    onContinuar();

  };

  return (

    <Modal
      visible={visible}
      onShow={() => setHora("")}

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

            {horas.map((item) => {

              const mesa = mesas.find(
                m => m.nombre === reservaTemporal.mesa
              );

              const ocupado = mesa?.reservas.some(
                reserva =>
                  reserva.fecha === reservaTemporal.fecha &&
                  reserva.hora === item
              );

              return (

                <Picker.Item
                  key={item}
                  label={
                    ocupado
                      ? `${item} (Reservado)`
                      : item
                  }
                  value={item}
                  enabled={!ocupado}
                />

              );

            })}

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

