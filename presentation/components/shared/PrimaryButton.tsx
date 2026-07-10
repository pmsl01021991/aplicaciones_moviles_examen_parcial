import React from "react";
import {TouchableOpacity,Text,StyleSheet} from "react-native";
import { COLORS } from "../../utils/color";

interface Props {

  title: string;

  onPress: () => void;

  color?: string;

  disabled?: boolean;

}

export default function PrimaryButton({

  title,

  onPress,

  color = COLORS.primary,

  disabled = false

}: Props) {

  return (

    <TouchableOpacity

      style={[
        styles.button,
        {
          backgroundColor: disabled
            ? "#94A3B8"
            : color
        }
      ]}

      disabled={disabled}

      onPress={onPress}

    >

      <Text style={styles.text}>

        {title}

      </Text>

    </TouchableOpacity>

  );

}

const styles = StyleSheet.create({

  button: {

    width: "100%",

    paddingVertical: 17,

    borderRadius: 16,

    alignItems: "center",

    marginTop: 12

  },

  text: {

    color: "#FFF",

    fontSize: 17,

    fontWeight: "600"

  }

});