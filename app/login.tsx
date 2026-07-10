import { useState } from "react";
import { useRouter } from "expo-router";
import {SafeAreaView,StyleSheet,View,Alert,} from "react-native";
import LoginForm from "../presentation/components/Login/LoginForm";
import RegisterForm from "../presentation/components/Register/RegisterForm";
import useLoginForm from "../presentation/hooks/useLoginForm";
import { useUsuario } from "../presentation/context/UsuarioContext";
import { COLORS } from "../presentation/utils/color";

export default function Login() {

  const router = useRouter();

  const {usuarios,usuarioActual,setUsuarioActual,dispatch,} = useUsuario();

  const [mostrarRegistro, setMostrarRegistro] = useState(false);

  const {

    correo,
    password,
    confirmPassword,

    setCorreo,
    setPassword,
    setConfirmPassword,

    errors,

    validarLogin,
    validarRegistro

  } = useLoginForm();

  const ingresar = () => {

    if (!validarLogin()) return;

    const usuario = usuarios.find(

      u =>
        u.correo === correo &&
        u.password === password

    );

    if (!usuario) {

      Alert.alert(

        "Error",

        "Correo o contraseña incorrectos."

      );

      return;

    }

    setUsuarioActual(usuario);

    Alert.alert(

      "Bienvenido",

      usuario.correo,

      [

        {

          text: "Aceptar",

          onPress: () => router.replace("/home")

        }

      ]

    );

  };

  const registrar = () => {

    if (!validarRegistro()) return;

    const existe = usuarios.some(

      u => u.correo === correo

    );

    if (existe) {

      Alert.alert(

        "Error",

        "Ese correo ya está registrado."

      );

      return;

    }

    dispatch({

      type: "REGISTER",

      payload: {

        id: Date.now().toString(),

        correo,

        password,

        rol: "cliente"

      }

    });

    Alert.alert(

      "Correcto",

      "Cuenta creada correctamente."

    );

    setMostrarRegistro(false);

    setCorreo("");

    setPassword("");

    setConfirmPassword("");

  };

  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.overlay}>

        {

          mostrarRegistro ? (

            <RegisterForm

              correo={correo}

              password={password}

              confirmPassword={confirmPassword}

              setCorreo={setCorreo}

              setPassword={setPassword}

              setConfirmPassword={setConfirmPassword}

              errors={errors}

              onRegister={registrar}

              onLogin={() => setMostrarRegistro(false)}

            />

          ) : (

            <LoginForm

              correo={correo}

              password={password}

              setCorreo={setCorreo}

              setPassword={setPassword}

              errors={errors}

              onLogin={ingresar}

              onRegister={() => setMostrarRegistro(true)}

          />

          )

        }

      </View>

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  overlay: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 28,
    paddingVertical: 20,
  },

});