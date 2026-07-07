import {
  Modal,
  View,
  Text,
  StyleSheet,
} from "react-native";

import { useState } from "react";

import PrimaryButton from "../shared/PrimaryButton";

import { COLORS } from "../../utils/color";

import { useReserva } from "../../context/ReservaContext";

interface Props {

  visible: boolean;

  onCerrar: () => void;

  onContinuar: () => void;

}

const personas = [

  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",

];

export default function ComensalesModal({

  visible,

  onCerrar,

  onContinuar,

}: Props) {

  const {

    reservaTemporal,

    setReservaTemporal,

  } = useReserva();

  const [comensales, setComensales] = useState(0);

  const continuar = () => {

    if (!comensales) return;

    setReservaTemporal({

      ...reservaTemporal,

      comensales,

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

            ¿Cuántos comensales asistirán?

          </Text>

          {personas.map((item) => (

            <PrimaryButton

              key={item}

              title={`${item} ${Number(item) === 1 ? "persona" : "personas"}`}

              onPress={() => setComensales(Number(item))}

              color={
                comensales === Number(item)
                  ? COLORS.secondary
                  : "#4B5563"
              }

            />

          ))}

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

    maxHeight: "85%",

  },

  title: {

    color: "#FFF",

    fontSize: 24,

    fontWeight: "bold",

    textAlign: "center",

    marginBottom: 20,

  },

});