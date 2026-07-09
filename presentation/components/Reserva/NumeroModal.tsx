import {
  Modal,
  View,
 Text,
  StyleSheet,
  TextInput,
} from "react-native";

import { useEffect, useState } from "react";

import PrimaryButton from "../shared/PrimaryButton";

import { COLORS } from "../../utils/color";

import { useReserva } from "../../context/ReservaContext";

interface Props {

  visible: boolean;

  onCerrar: () => void;

  onContinuar: () => void;

}

export default function NumeroModal({

  visible,

  onCerrar,

  onContinuar,

}: Props) {

  const {

    reservaTemporal,

    setReservaTemporal,

  } = useReserva();

  const [numero, setNumero] = useState("");

  useEffect(() => {

    if (visible) {

      setNumero("");

    }

  }, [visible]);

  const continuar = () => {

    if (

      numero.length !== 9 ||

      !numero.startsWith("9")

    ) {

      return;

    }

    setReservaTemporal({

      ...reservaTemporal,

      numero,

    });

    onContinuar();

  };

  return (

    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onShow={() => setNumero("")}
    >

      <View style={styles.overlay}>

        <View style={styles.modal}>

          <Text style={styles.title}>

            Ingresa tu número de celular

          </Text>

          <TextInput

            style={styles.input}

            placeholder="Número de celular"

            keyboardType="number-pad"

            maxLength={9}

            value={numero}

            onChangeText={(texto) => {

              if (/^\d*$/.test(texto)) {

                setNumero(texto);

              }

            }}

          />

          {

            numero.length > 0 &&

            (

              numero.length < 9 ||

              !numero.startsWith("9")

            ) && (

              <Text style={styles.error}>

                Completa un número válido de 9 dígitos.

              </Text>

            )

          }

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

  input: {

    backgroundColor: "#FFF",

    borderRadius: 10,

    padding: 15,

    marginBottom: 10,

    fontSize: 16,

  },

  error: {

    color: "red",

    textAlign: "center",

    marginBottom: 15,

  },

});