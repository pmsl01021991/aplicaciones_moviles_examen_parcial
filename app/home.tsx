import { useState } from "react";
import { useRouter } from "expo-router";
import {SafeAreaView, StyleSheet, View, Text} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useUsuario } from "../presentation/context/UsuarioContext";
import { Ionicons } from "@expo/vector-icons";
import PrimaryButton from "../presentation/components/shared/PrimaryButton";
import HomeCard from "../presentation/components/shared/HomeCard";
import { COLORS } from "../presentation/utils/color";

export default function Home() {

  const router = useRouter();

  const [mostrarLogin, setMostrarLogin] = useState(false);

  const {usuarioActual,setUsuarioActual,} = useUsuario();

  const [usuario, setUsuario] = useState(usuarioActual);

  return (

    <SafeAreaView style={styles.container}>

    <View style={styles.header}>

    <Ionicons
    name="restaurant"
    size={75}
    color={COLORS.secondary}
    />

    <Text style={styles.title}>
    Restaurante El Buen Sabor
    </Text>

    <Text style={styles.subtitle}>

    {
    usuarioActual
    ? `Hola ${usuarioActual.correo.split("@")[0]} 👋`
    : "Bienvenido 👋"
    }

    </Text>

    <Text style={styles.question}>
    ¿Qué deseas hacer hoy?
    </Text>

    </View>

    <View style={styles.buttons}>

    <HomeCard
    title="Menú"
    subtitle="Descubre nuestros mejores platos"
    icon="restaurant"
    onPress={()=>router.push("/menu")}
    />

    <HomeCard
    title="Reservar Mesa"
    subtitle="Reserva en pocos segundos"
    icon="calendar"
    onPress={()=>router.push("/reservas")}
    />

    {

    usuarioActual?.rol==="admin" && (

    <HomeCard
    title="Reservaciones"
    subtitle="Consultar reservaciones"
    icon="clipboard"
    onPress={()=>router.push("/reservacionesHechas")}
    />

    )

    }

    <HomeCard
    title="Cerrar Sesión"
    subtitle="Salir de la aplicación"
    icon="log-out"
    onPress={()=>{

    setUsuarioActual(null);

    router.replace("/login");

    }}
    />

    </View>

    </SafeAreaView>

    );

}

const styles = StyleSheet.create({

  container:{
  flex:1,
  backgroundColor:COLORS.background,
  paddingHorizontal:22,
  paddingTop:50
  },

  header:{
    alignItems:"center",
    marginTop:10,
    marginBottom:35
  },

  title:{
    color:"#FFF",
    fontSize:26,
    fontWeight:"bold",
    textAlign:"center",
    marginTop:10
  },

  subtitle:{
    fontSize:20,
    fontWeight:"700",
    color:COLORS.secondary,
    marginTop:15
  },

  question:{
    color:"#9CA3AF",
    fontSize:16,
    marginTop:8
  },

  buttons:{
  marginTop:10
  }

});