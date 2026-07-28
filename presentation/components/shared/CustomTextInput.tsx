import React from "react";
import {View,Text,TextInput,StyleSheet} from "react-native";
import { COLORS } from "../../utils/color";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

interface Props {

  label: string;

  value: string;

  onChangeText: (text: string) => void;

  placeholder?: string;

  secureTextEntry?: boolean;

  keyboardType?: any;

  error?: string;

}

export default function CustomTextInput({

  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  error

}: Props) {

  const [mostrarPassword, setMostrarPassword] = useState(false);

  return (

    <View style={styles.container}>

      <Text style={styles.label}>{label}</Text>

      <View
        style={[
          styles.inputContainer,
          error && styles.errorInput
        ]}
      >

        <TextInput
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !mostrarPassword}
          keyboardType={keyboardType}
          style={styles.input}
        />

        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setMostrarPassword(!mostrarPassword)}
          >
            <Ionicons
              name={mostrarPassword ? "eye-off" : "eye"}
              size={22}
              color="#9CA3AF"
            />
          </TouchableOpacity>
        )}

      </View>

      {error && (
        <Text style={styles.error}>{error}</Text>
      )}

    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    marginBottom: 18

  },

  label: {

    color: COLORS.white,

    marginBottom: 6,

    fontWeight: "600"

  },

  input: {
    flex: 1,
    color: COLORS.white,
    fontSize: 16,
    height: 55,
  },

  errorInput: {
  borderColor: COLORS.danger,
},

  error: {

    color: COLORS.danger,

    marginTop: 5,

    fontSize: 17

  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.input,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 14,
  },


});