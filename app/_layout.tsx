import "react-native-reanimated";
import "../global.css";

import { Stack } from "expo-router";

import { ReservaProvider } from "../presentation/context/ReservaContext";
import { UsuarioProvider } from "../presentation/context/UsuarioContext";

export default function RootLayout() {

  return (

    <UsuarioProvider>

      <ReservaProvider>

        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >

          <Stack.Screen name="index" />

          <Stack.Screen name="login" />

          <Stack.Screen name="home" />

          <Stack.Screen name="menu" />

          <Stack.Screen name="reservas" />

          <Stack.Screen name="reservacionesHechas"/>

          <Stack.Screen name="crearReserva" />

          <Stack.Screen name="detalleReserva" />

          <Stack.Screen name="editarReserva" />

          

        </Stack>

      </ReservaProvider>

    </UsuarioProvider>

  );

}