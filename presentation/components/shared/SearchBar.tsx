import React from "react";
import {TextInput,StyleSheet} from "react-native";
import { COLORS } from "../../utils/color";

interface Props {

  value: string;

  onChangeText: (text: string) => void;

}

export default function SearchBar({

  value,

  onChangeText

}: Props) {

  return (

    <TextInput

      placeholder="Buscar..."

      placeholderTextColor="#9CA3AF"

      value={value}

      onChangeText={onChangeText}

      style={styles.input}

    />

  );

}

const styles = StyleSheet.create({

  input: {

    backgroundColor: COLORS.input,

    borderRadius: 10,

    paddingHorizontal: 15,

    paddingVertical: 12,

    color: COLORS.white,

    marginBottom: 15

  }

});