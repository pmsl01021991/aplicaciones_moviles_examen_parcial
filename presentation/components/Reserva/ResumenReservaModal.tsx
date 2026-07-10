import {Modal,View,Text,StyleSheet,Alert,} from "react-native";
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
  setReservaTemporal,
  platosSeleccionados,
  setPlatosSeleccionados,
  mesas,
  setMesas,
  dispatch

} = useReserva();
  

  const confirmar = () => {

    dispatch({

      type: "ADD",

      payload: {

        id: Date.now().toString(),

        cliente: usuario.split("@")[0],

        telefono: reservaTemporal.numero,

        mesa: reservaTemporal.mesa,

        plato: platosSeleccionados.join(", "),

        comensales: reservaTemporal.comensales,

        prioridad: "MEDIA",

        estado: "PENDIENTE",

        fecha: reservaTemporal.fecha,

        hora: reservaTemporal.hora,

      }

    });

    setPlatosSeleccionados([]);

    setReservaTemporal({
      plato: "",
      mesa: "",
      fecha: "",
      hora: "",
      numero: "",
      comensales: 1,
    });

    Alert.alert(

      "Reservación confirmada",

      "La reservación fue registrada correctamente.",

      [

        {

          text: "Aceptar",

          onPress: onConfirmar,

        }

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

            {usuario.split("@")[0]}

        </Text>

          <Text style={styles.texto}>

            <Text style={styles.bold}>
                Platos:
            </Text>

        </Text>

        {

            platosSeleccionados.length === 0 ?

            (

                <Text style={styles.texto}>

                    Ninguno

                </Text>

            )

            :

            platosSeleccionados.map((plato,index)=>(

                <Text
                    key={index}
                    style={styles.texto}
                >

                    • {plato}

                </Text>

            ))

        }

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