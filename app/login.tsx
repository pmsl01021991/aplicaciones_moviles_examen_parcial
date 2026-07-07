import { useRouter } from "expo-router";
import {
  SafeAreaView,
  StyleSheet,
  View
} from "react-native";

import LoginHeader from "../presentation/components/Login/LoginHeader";
import CustomTextInput from "../presentation/components/shared/CustomTextInput";
import PrimaryButton from "../presentation/components/shared/PrimaryButton";
import useLoginForm from "../presentation/hooks/useLoginForm";
import { COLORS } from "../presentation/utils/color";

export default function Login() {

  const router = useRouter();

  const {

    correo,
    password,
    setCorreo,
    setPassword,
    errors,
    validar

  } = useLoginForm();

  const ingresar = () => {

    if (!validar()) return;

    router.replace("/home");

  };

  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.card}>

        <LoginHeader />

        <CustomTextInput
          label="Correo"
          placeholder="correo@correo.com"
          value={correo}
          onChangeText={setCorreo}
          keyboardType="email-address"
          error={errors.correo}
        />

        <CustomTextInput
          label="Contraseña"
          placeholder="********"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          error={errors.password}
        />

        <PrimaryButton

          title="Iniciar Sesión"

          onPress={ingresar}

        />

      </View>

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    justifyContent: "center",

    backgroundColor: COLORS.background,

    padding: 20

  },

  card: {

    backgroundColor: COLORS.card,

    borderRadius: 18,

    padding: 20

  }

});