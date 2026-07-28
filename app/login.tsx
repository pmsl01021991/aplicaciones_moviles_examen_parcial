import { useState } from "react";
import { useRouter } from "expo-router";
import {SafeAreaView,StyleSheet,View,Alert } from "react-native";
import LoginForm from "../presentation/components/Login/LoginForm";
import RegisterForm from "../presentation/components/Register/RegisterForm";
import useLoginForm from "../presentation/hooks/useLoginForm";
import { useUsuario } from "../presentation/context/UsuarioContext";
import { COLORS } from "../presentation/utils/color";
import { LinearGradient } from "expo-linear-gradient";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export default function Login() {

  const router = useRouter();

  const {usuarioActual, setUsuarioActual,} = useUsuario();

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

  const ingresar = async () => {

      if (!validarLogin()) return;

      try {

        const q = query(
          collection(db, "usuarios"),
          where("username", "==", correo),
          where("password", "==", password)
        );

        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {

          Alert.alert(
            "Error",
            "Correo o contraseña incorrectos."
          );

          return;
        }

        const datos = querySnapshot.docs[0].data();

        const usuario = {
          id: querySnapshot.docs[0].id,
          correo: datos.username,
          password: datos.password,
          rol: datos.rol,
        };

        setUsuarioActual(usuario);

        Alert.alert(
          "Bienvenido",
          usuario.correo,
          [
            {
              text: "Aceptar",
              onPress: () => router.replace("/home"),
            },
          ]
        );

      } catch (error) {

        console.log(error);

        Alert.alert(
          "Error",
          "No se pudo conectar con Firestore."
        );

      }

    };

  const registrar = async () => {

    if (!validarRegistro()) return;

    try {

      const q = query(
        collection(db, "usuarios"),
        where("username", "==", correo)
      );

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {

        Alert.alert(
          "Error",
          "Ese correo ya está registrado."
        );

        return;

      }

      await addDoc(collection(db, "usuarios"), {
        username: correo,
        password: password,
        rol: "cliente",
      });

      Alert.alert(
        "Correcto",
        "Cuenta creada correctamente."
      );

      setMostrarRegistro(false);

      setCorreo("");
      setPassword("");
      setConfirmPassword("");

    } catch (error) {

      console.log(error);

      Alert.alert(
        "Error",
        "No se pudo registrar el usuario."
      );

    }

  };

    return (
      <LinearGradient
        colors={["#0F172A", "#111827", "#1F2937"]}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.overlay}>
            {mostrarRegistro ? (
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
            )}
          </View>
        </SafeAreaView>
      </LinearGradient>
    );


}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "transparent",
  },

 overlay: {
  flex: 1,
  paddingHorizontal: 28,
  paddingTop: 50,
  paddingBottom: 20,
},

});