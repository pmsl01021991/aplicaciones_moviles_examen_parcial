import { useState } from "react";
import {SafeAreaView,View,Text,StyleSheet,} from "react-native";
import { Calendar } from "react-native-calendars";
import { useRouter } from "expo-router";
import Navbar from "../presentation/components/shared/Navbar";
import { COLORS } from "../presentation/utils/color";
import { useUsuario } from "../presentation/context/UsuarioContext";
import { useReserva } from "../presentation/context/ReservaContext";
import { FlatList } from "react-native";

export default function ReservacionesHechas() {

  const router = useRouter();

  const { usuarioActual, setUsuarioActual } = useUsuario();

  const { reservas } = useReserva();

  const [fechaSeleccionada, setFechaSeleccionada] = useState("");

  const reservasMostrar = fechaSeleccionada === "" ? reservas: reservas.filter
  ((r) => r.fecha === fechaSeleccionada
      );

  return (

    <SafeAreaView style={styles.container}>

      <Navbar

        usuario={usuarioActual}

        onLogin={() => router.push("/login")}

        onLogout={() => {

          setUsuarioActual(null);

          router.push("/home");

        }}

        onInicio={() => router.push("/home")}

        onMenu={() => router.push("/menu")}

        onReservas={() => router.push("/reservas")}

        onReservacionesHechas={() => {}}

      />

      

        <FlatList
  data={reservasMostrar}
  keyExtractor={(item) => item.id}

  ListHeaderComponent={

    <>

      <View style={styles.content}>

        <Text style={styles.title}>

          Reservaciones Hechas

        </Text>

        <Text style={styles.subtitle}>

          Consulta las reservaciones registradas por fecha.

        </Text>

        <View style={styles.calendarContainer}>

          <Calendar

            onDayPress={(day) => {

              setFechaSeleccionada(day.dateString);

            }}

            markedDates={{

              [fechaSeleccionada]: {

                selected: true,

                selectedColor: COLORS.secondary,

              },

            }}

            theme={{

              todayTextColor: COLORS.secondary,

              arrowColor: COLORS.secondary,

              selectedDayBackgroundColor: COLORS.secondary,

            }}

          />

        </View>

        <Text style={styles.panelTitle}>

          {

            fechaSeleccionada

              ? `Reservas del ${fechaSeleccionada}`

              : "Todas las reservas"

          }

        </Text>

      </View>

    </>

  }

  renderItem={({ item }) => (

    <View style={styles.card}>

      <View style={styles.headerCard}>

        <Text style={styles.cliente}>

          {item.cliente}

        </Text>

        <View style={styles.badge}>

          <Text style={styles.badgeText}>

            {item.mesa}

          </Text>

        </View>

      </View>

      <Text style={styles.numero}>

        {item.telefono}

      </Text>

      <Text style={styles.info}>

        🕒 {item.hora} | 👥 {item.comensales} Comensales

      </Text>

    </View>

  )}

  contentContainerStyle={styles.lista}
/>

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: COLORS.background,

  },

  content: {

    padding: 20,

  },

  title: {

    color: COLORS.secondary,

    fontSize: 38,

    fontWeight: "bold",

    marginTop: 20,

    textAlign: "center",

  },

  subtitle: {

    color: "#C4B5FD",

    textAlign: "center",

    marginTop: 15,

    marginBottom: 25,

    fontSize: 16,

  },

  calendarContainer: {

    backgroundColor: "#FFF",

    borderRadius: 15,

    padding: 10,

    elevation: 5,

  },

  panelTitle: {

    color: "#FFF",

    fontSize: 26,

    fontWeight: "bold",

    marginTop: 30,

    marginBottom: 15,

    },

    card: {

    backgroundColor: "#FFF",

    borderRadius: 12,

    padding: 15,

    marginBottom: 15,

    },

    headerCard: {

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

    },

    cliente: {

    fontSize: 20,

    fontWeight: "bold",

    },

    badge: {

    backgroundColor: COLORS.secondary,

    borderRadius: 8,

    paddingHorizontal: 10,

    paddingVertical: 5,

    },

    badgeText: {

    color: "#FFF",

    fontWeight: "bold",

    },

    numero: {

    color: "#6B7280",

    marginTop: 5,

    },

    info: {

    marginTop: 10,

    color: "#4B5563",

    },

    lista:{

    paddingHorizontal:20,

    paddingBottom:40,

    },

});