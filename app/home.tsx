import { useState } from "react";
import { useRouter } from "expo-router";
import { useEffect } from "react";

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";

import { StatusBar } from "expo-status-bar";

import Navbar from "../presentation/components/shared/Navbar";
import HeroSection from "../presentation/components/shared/HeroSection";
import MenuHome from "../presentation/components/shared/MenuHome";
import AuthenticationModal from "../presentation/components/Authentication/Authentication";
import { useUsuario } from "../presentation/context/UsuarioContext";
import Footer from "../presentation/components/shared/Footer";

import { COLORS } from "../presentation/utils/color";

export default function Home() {

  const router = useRouter();

  const [mostrarLogin, setMostrarLogin] = useState(false);

  const {usuarioActual,setUsuarioActual,} = useUsuario();

  const [usuario, setUsuario] = useState(usuarioActual);

  return (

    <SafeAreaView style={styles.container}>

      <StatusBar style="light" />

      <Navbar

        usuario={usuarioActual}

        onLogin={() => setMostrarLogin(true)}

        onLogout={() => {setUsuarioActual(null); setUsuario(null);}}

        onInicio={() => {}}

        onMenu={() => router.push("/menu")}

        onReservas={() => router.push("/reservas")}

      />

      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        <HeroSection />

        <MenuHome />

        <Footer />

      </ScrollView>

      <AuthenticationModal

        visible={mostrarLogin}

        onClose={() => setMostrarLogin(false)}

      />

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: COLORS.background,

  },

});