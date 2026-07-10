import {Modal,View,Text,StyleSheet,} from "react-native";
import { useEffect, useState } from "react";
import PrimaryButton from "../shared/PrimaryButton";
import { Picker } from "@react-native-picker/picker";
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

  useEffect(() => {

    if (visible) {

      setComensales(0);

    }

  }, [visible]);

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
      onShow={() => setComensales(0)}
    >

      <View style={styles.overlay}>

        <View style={styles.modal}>

          <Text style={styles.title}>

            ¿Cuántos comensales asistirán?

          </Text>

          <Picker
            selectedValue={comensales}
            onValueChange={(itemValue) => setComensales(Number(itemValue))}
            style={styles.picker}
          >

            <Picker.Item
              label="Seleccionar número de personas"
              value={0}
            />

            {personas.map((item) => (

              <Picker.Item
                key={item}
                label={`${item} ${Number(item) === 1 ? "persona" : "personas"}`}
                value={Number(item)}
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

  picker: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginBottom: 20,
  },

});