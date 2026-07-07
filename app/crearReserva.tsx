import { useRouter } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";

import { useReserva } from "../presentation/context/ReservaContext";
import useReservaForm from "../presentation/hooks/useReservaForm";

import RegisterHeader from "../presentation/components/Register/RegisterHeader";
import CustomTextInput from "../presentation/components/shared/CustomTextInput";
import PrimaryButton from "../presentation/components/shared/PrimaryButton";

import { COLORS } from "../presentation/utils/color";

export default function CrearReserva() {

  const router = useRouter();

  const { dispatch } = useReserva();

  const {

    cliente,
    telefono,
    mesa,
    plato,
    comensales,

    prioridad,
    estado,

    errors,

    setCliente,
    setTelefono,
    setMesa,
    setPlato,
    setComensales,

    validar

  } = useReservaForm();

  const guardarReserva = () => {

    if (!validar()) return;

    dispatch({

      type: "ADD",

      payload: {

        id: Date.now().toString(),

        cliente,

        telefono,

        mesa,

        plato,

        comensales: Number(comensales),

        prioridad,

        estado,

        fechaRegistro: new Date().toLocaleDateString()

      }

    });

    Alert.alert(

      "Éxito",

      "Reserva registrada correctamente.",

      [

        {

          text: "Aceptar",

          onPress: () => router.back()

        }

      ]

    );

  };

  return (

    <SafeAreaView style={styles.container}>

      <ScrollView
        contentContainerStyle={styles.content}
      >

        <RegisterHeader />

        <CustomTextInput

          label="Cliente"

          value={cliente}

          onChangeText={setCliente}

          placeholder="Ingrese el nombre"

          error={errors.cliente}

        />

        <CustomTextInput

          label="Teléfono"

          value={telefono}

          onChangeText={setTelefono}

          keyboardType="numeric"

          placeholder="987654321"

          error={errors.telefono}

        />

        <CustomTextInput

          label="Mesa"

          value={mesa}

          onChangeText={setMesa}

          placeholder="Mesa 1"

          error={errors.mesa}

        />

        <CustomTextInput

          label="Plato"

          value={plato}

          onChangeText={setPlato}

          placeholder="Lomo Saltado"

          error={errors.plato}

        />

        <CustomTextInput

          label="Comensales"

          value={comensales}

          onChangeText={setComensales}

          keyboardType="numeric"

          placeholder="2"

        />

        <PrimaryButton

          title="Registrar Reserva"

          onPress={guardarReserva}

        />

      </ScrollView>

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: COLORS.background

  },

  content: {

    padding: 20,

    paddingBottom: 50

  }

});