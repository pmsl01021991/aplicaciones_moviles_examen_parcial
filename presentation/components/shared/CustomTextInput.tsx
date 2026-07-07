import React from "react";

import {

  View,

  Text,

  TextInput,

  StyleSheet

} from "react-native";

import { COLORS } from "../../utils/color";

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

  return (

    <View style={styles.container}>

      <Text style={styles.label}>

        {label}

      </Text>

      <TextInput

        value={value}

        placeholder={placeholder}

        placeholderTextColor="#9CA3AF"

        onChangeText={onChangeText}

        secureTextEntry={secureTextEntry}

        keyboardType={keyboardType}

        style={[

          styles.input,

          error && styles.errorInput

        ]}

      />

      {

        error && (

          <Text style={styles.error}>

            {error}

          </Text>

        )

      }

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

    backgroundColor: COLORS.input,

    borderRadius: 10,

    paddingHorizontal: 14,

    paddingVertical: 12,

    borderWidth: 1,

    borderColor: COLORS.border,

    color: COLORS.white

  },

  errorInput: {

    borderColor: COLORS.danger

  },

  error: {

    color: COLORS.danger,

    marginTop: 5,

    fontSize: 13

  }

});