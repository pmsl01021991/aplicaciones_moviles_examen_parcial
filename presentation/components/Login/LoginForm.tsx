import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import CustomTextInput from "../shared/CustomTextInput";
import PrimaryButton from "../shared/PrimaryButton";

import { COLORS } from "../../utils/color";

interface Props {
  correo: string;
  password: string;

  setCorreo: (text: string) => void;
  setPassword: (text: string) => void;

  errors: {
    correo: string;
    password: string;
  };

  onLogin: () => void;
  onRegister: () => void;
}

export default function LoginForm({
  correo,
  password,
  setCorreo,
  setPassword,
  errors,
  onLogin,
  onRegister,
}: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Ionicons
          name="restaurant"
          size={30}
          color="#FFF"
        />
      </View>

      <Text style={styles.title}>
        Iniciar Sesión
      </Text>

      <CustomTextInput
        label="Correo Electrónico"
        placeholder="email@example.com"
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
        error={errors.correo}
      />

      <CustomTextInput
        label="Contraseña"
        placeholder="******"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        error={errors.password}
      />

      <PrimaryButton
        title="Iniciar Sesión"
        onPress={onLogin}
      />

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          ¿No tienes cuenta?
        </Text>

        <TouchableOpacity onPress={onRegister}>
          <Text style={styles.link}>
            Regístrate aquí
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1F2937",
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: "#374151",
  },

  iconContainer: {
    width: 65,
    height: 65,
    borderRadius: 40,
    backgroundColor: COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 15,
  },

  title: {
    color: "#FFF",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    flexWrap: "wrap",
  },

  footerText: {
    color: "#9CA3AF",
  },

  link: {
    color: COLORS.secondary,
    fontWeight: "600",
    marginLeft: 5,
  },
});