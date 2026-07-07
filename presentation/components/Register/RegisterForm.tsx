import { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import CustomTextInput from "../shared/CustomTextInput";
import PrimaryButton from "../shared/PrimaryButton";

import { COLORS } from "../../utils/color";

interface Props {

  correo: string;

  password: string;

  confirmPassword: string;

  setCorreo: (text: string) => void;

  setPassword: (text: string) => void;

  setConfirmPassword: (text: string) => void;

  errors: {

    correo: string;

    password: string;

    confirmPassword: string;

  };

  onRegister: () => void;

  onLogin: () => void;

}

export default function RegisterForm({

  correo,

  password,

  confirmPassword,

  setCorreo,

  setPassword,

  setConfirmPassword,

  errors,

  onRegister,

  onLogin

}: Props) {

  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  return (

    <View style={styles.card}>

      <View style={styles.iconContainer}>

        <Ionicons
          name="person"
          size={30}
          color="#FFF"
        />

      </View>

      <Text style={styles.title}>
        Crear Cuenta
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

      <CustomTextInput
        label="Confirmar Contraseña"
        placeholder="******"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        error={errors.confirmPassword}
      />

      <View style={styles.terms}>

        <Switch

          value={aceptaTerminos}

          onValueChange={setAceptaTerminos}

          trackColor={{
            false:"#6B7280",
            true:COLORS.success
          }}

        />

        <Text style={styles.termsText}>
          Acepto los términos y condiciones
        </Text>

      </View>

      <PrimaryButton

        title="Crear Cuenta"

        onPress={onRegister}

        disabled={!aceptaTerminos}

      />

      <TouchableOpacity
        style={styles.cancelButton}
        onPress={onLogin}
      >

        <Text style={styles.cancelText}>
          Ya tengo cuenta
        </Text>

      </TouchableOpacity>

    </View>

  );

}

const styles = StyleSheet.create({

  card: {

    backgroundColor:"#1F2937",

    borderRadius:12,

    padding:20,

    borderWidth:1,

    borderColor:"#374151"

  },

  iconContainer:{

    width:65,

    height:65,

    borderRadius:40,

    backgroundColor:"#22C55E",

    justifyContent:"center",

    alignItems:"center",

    alignSelf:"center",

    marginBottom:15

  },

  title:{

    color:"#FFF",

    fontSize:26,

    fontWeight:"bold",

    textAlign:"center",

    marginBottom:25

  },

  terms:{

    flexDirection:"row",

    alignItems:"center",

    marginVertical:15

  },

  termsText:{

    color:"#FFF",

    marginLeft:10,

    flex:1

  },

  cancelButton:{

    marginTop:15,

    alignItems:"center"

  },

  cancelText:{

    color:COLORS.secondary,

    fontWeight:"600",

    fontSize:15

  }

});