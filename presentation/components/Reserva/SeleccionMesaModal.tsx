import {Modal,View,Text,StyleSheet,} from "react-native";
import PrimaryButton from "../shared/PrimaryButton";
import { COLORS } from "../../utils/color";
import { useReserva } from "../../context/ReservaContext";

interface Props {

  visible: boolean;

  mesa: string;

  onContinuar: () => void;

  onCerrar: () => void;

}

export default function SeleccionMesaModal({

  visible,

  mesa,

  onContinuar,

  onCerrar,

}: Props) {

  const {

    reservaTemporal,

    setReservaTemporal,

  } = useReserva();

  const continuar = () => {

    setReservaTemporal({

      ...reservaTemporal,

      mesa,

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

            {mesa}

          </Text>

          <Text style={styles.text}>

            Has seleccionado esta mesa.

          </Text>

          <PrimaryButton

            title="Continuar"

            onPress={continuar}

            color={COLORS.secondary}

          />

          <PrimaryButton

            title="Cancelar"

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

    backgroundColor: "rgba(0,0,0,0.65)",

    justifyContent: "center",

    alignItems: "center",

    padding: 20,

  },

  modal: {

    width: "100%",

    backgroundColor: "#1F2937",

    borderRadius: 15,

    padding: 25,

  },

  title: {

    color: COLORS.secondary,

    fontSize: 28,

    fontWeight: "bold",

    textAlign: "center",

    marginBottom: 20,

  },

  text: {

    color: "#FFF",

    fontSize: 17,

    textAlign: "center",

    marginBottom: 25,

    lineHeight: 25,

  },

});