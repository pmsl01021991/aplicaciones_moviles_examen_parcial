import { Modal, View, StyleSheet } from "react-native";
import { useState } from "react";

import LoginForm from "../Login/LoginForm";
import RegisterForm from "../Register/RegisterForm";

import useLoginForm from "../../hooks/useLoginForm";
import { useUsuario } from "../../context/UsuarioContext";

interface Props {
  visible: boolean;
  onClose: () => void;
}

export default function AuthenticationModal({
  visible,
  onClose,
}: Props) {

  const [mostrarRegistro, setMostrarRegistro] = useState(false);

  const {usuarios,usuarioActual,setUsuarioActual,dispatch} = useUsuario();

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

  const login = () => {

    if (!validarLogin()) return;

    const usuario = usuarios.find(

      u =>
        u.correo === correo &&
        u.password === password

    );

    if (!usuario) {

    alert("Correo o contraseña incorrectos.");

    return;

    }

    setUsuarioActual(usuario);

    onClose();

  };

  const registrar = () => {

    if (!validarRegistro()) return;

    const existe = usuarios.some(

      u => u.correo === correo

    );

    if (existe) {

      alert("Ese correo ya existe.");

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

    alert("Cuenta creada correctamente.");

    setMostrarRegistro(false);

    setCorreo("");

    setPassword("");

    setConfirmPassword("");

  };

  return (

    <Modal

      visible={visible}

      animationType="fade"

      transparent

    >

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

              onLogin={login}

              onRegister={() => setMostrarRegistro(true)}

            />

          )

        }

      </View>

    </Modal>

  );

}

const styles = StyleSheet.create({

  overlay: {

    flex: 1,

    justifyContent: "center",

    padding: 20,

    backgroundColor: "rgba(0,0,0,0.65)"

  }

});