import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
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
    <View style={styles.container}>
      <View style={styles.header}>

        <Image
          source={require("../../../assets/images/buensabor.png")}
          style={styles.logo}
          resizeMode="cover"
        />

        <Text style={styles.restaurant}>
          Restaurante
        </Text>

        <Text style={styles.title}>
          El Buen Sabor
        </Text>

        <Text style={styles.subtitle}>
          Bienvenido nuevamente
        </Text>

      </View>

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
                  Crear una cuenta
              </Text>
          </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    paddingHorizontal:10,
},

  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    elevation: 12,
  },

  title: {
    color: COLORS.secondary,
    fontSize: 36,
    fontWeight: "bold",
  },

  header: {
  alignItems: "center",
  marginBottom: 35,
},

restaurant: {
  color: "#FFFFFF",
  fontSize: 20,
  letterSpacing: 2,
},

subtitle: {
  color: "#D1D5DB",
  fontSize: 16,
  marginTop: 8,
},

  link: {
    color: COLORS.secondary,
    fontSize: 16,
    fontWeight: "bold",
  },

  logo: {
    width: 230,
    height: 230,
    borderRadius: 110,      
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "#D4AF37", 
    backgroundColor: "#000",
    alignSelf: "center",
    marginBottom: 20,
  },

  footer: {
    alignItems: "center",
    marginTop: 30,
  },

  footerText: {
    color: "#9CA3AF",
    marginBottom: 8,
  },
});