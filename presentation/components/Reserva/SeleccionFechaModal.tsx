import {Modal,View,Text,StyleSheet,} from "react-native";
import DateTimePicker, {DateTimePickerEvent,} from "@react-native-community/datetimepicker";
import { useState } from "react";
import PrimaryButton from "../shared/PrimaryButton";
import { COLORS } from "../../utils/color";
import { useReserva } from "../../context/ReservaContext";

interface Props {

  visible: boolean;

  onCerrar: () => void;

  onContinuar: () => void;

}

export default function SeleccionFechaModal({

  visible,

  onCerrar,

  onContinuar,

}: Props) {

  const {

    reservaTemporal,

    setReservaTemporal,

  } = useReserva();

  const [fecha, setFecha] = useState(new Date());

  const continuar = () => {

    setReservaTemporal({

      ...reservaTemporal,

      fecha: fecha.toISOString().split("T")[0],

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

            Selecciona una fecha

          </Text>

          <DateTimePicker

            value={fecha}

            mode="date"

            minimumDate={new Date()}

            display="calendar"

            onChange={(
            event: DateTimePickerEvent,
            selectedDate?: Date
            ) => {

            if (selectedDate) {

                setFecha(selectedDate);

            }

            }}

          />

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

    color: "#FFF",

    fontSize: 24,

    fontWeight: "bold",

    textAlign: "center",

    marginBottom: 20,

  },

});