import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import { useEffect, useRef } from "react";

export default function Footer() {

  const translateX = useRef(new Animated.Value(400)).current;

  useEffect(() => {

    Animated.loop(

      Animated.timing(translateX, {

        toValue: -400,

        duration: 15000,

        easing: Easing.linear,

        useNativeDriver: true,

      })

    ).start();

  }, []);

  return (

    <View style={styles.footer}>

      <Animated.View
        style={{
          transform: [{ translateX }],
        }}
      >

        <Text style={styles.text}>

          © 2025 Mi Empresa. Todos los derechos son reservados.

        </Text>

      </Animated.View>

    </View>

  );

}

const styles = StyleSheet.create({

  footer: {

    height: 70,

    backgroundColor: "rgba(0,0,0,0.8)",

    justifyContent: "center",

    overflow: "hidden",

  },

  text: {

    color: "#CCC",

    fontSize: 15,

    fontWeight: "500",

  },

});