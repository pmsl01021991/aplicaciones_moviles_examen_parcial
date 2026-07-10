import { useState } from "react";
import {SafeAreaView,View,Text,StyleSheet, TouchableOpacity, Alert} from "react-native";
import { Calendar } from "react-native-calendars";
import { useRouter } from "expo-router";
import { COLORS } from "../presentation/utils/color";
import { useUsuario } from "../presentation/context/UsuarioContext";
import { useReserva } from "../presentation/context/ReservaContext";
import { FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Reserva } from "../presentation/models/Reserva";
import ReservaDetalleModal from "../presentation/components/Reserva/ReservaDetalleModal";
import EditarReservaModal from "../presentation/components/Reserva/EditarReservaModal";

export default function ReservacionesHechas() {

  const router = useRouter();

  const { reservas, dispatch } = useReserva();

  const [fechaSeleccionada, setFechaSeleccionada] = useState("");

  const [modalVisible, setModalVisible] = useState(false);

  const [editarVisible,setEditarVisible]=useState(false);

  const [reservaSeleccionada, setReservaSeleccionada] =
  useState<Reserva | null>(null);

  const reservasMostrar = fechaSeleccionada === "" ? reservas: reservas.filter
  ((r) => r.fecha === fechaSeleccionada
      );

  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons
              name="arrow-back"
              size={28}
              color="#FFF"
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Reservaciones Hechas
          </Text>

        </View>
      

        <FlatList
  data={reservasMostrar}
  keyExtractor={(item) => item.id}

  ListHeaderComponent={

    <>

      <View style={styles.content}>

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

    <TouchableOpacity

      style={styles.card}

      activeOpacity={0.8}

      onPress={() => {

          setReservaSeleccionada(item);

          setModalVisible(true);

      }}

    >

      <View style={styles.headerCard}>

        <View style={styles.clienteContainer}>

          <Ionicons
            name="person-circle"
            size={26}
            color={COLORS.secondary}
          />

          <Text style={styles.cliente}>
            {item.cliente}
          </Text>

        </View>

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

    </TouchableOpacity>

  )}

  contentContainerStyle={styles.lista}
/>

    <ReservaDetalleModal

      visible={modalVisible}

      reserva={reservaSeleccionada}

      onCerrar={() => {

        setModalVisible(false);

        setReservaSeleccionada(null);

      }}

      onEditar={() => {

        setModalVisible(false);

        setEditarVisible(true);

      }}

      onEliminar={() => {

      if (!reservaSeleccionada) return;

      Alert.alert(

        "Eliminar reservación",

        "¿Está seguro que desea eliminar esta reservación?",

        [

          {
            text: "Cancelar",
            style: "cancel",
          },

          {

            text: "Eliminar",

            style: "destructive",

            onPress: () => {

              dispatch({

                type: "DELETE",

                payload: reservaSeleccionada.id,

              });

              setModalVisible(false);

              setReservaSeleccionada(null);

            },

          },

        ]

      );

    }}

    />

    <EditarReservaModal

      visible={editarVisible}

      reserva={reservaSeleccionada}

      onCerrar={() => {

        setEditarVisible(false);

      }}

      onGuardar={(reservaActualizada) => {

        dispatch({

          type: "UPDATE",

          payload: reservaActualizada,

        });

        setEditarVisible(false);

        setReservaSeleccionada(null);

      }}

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

    clienteContainer:{
      flexDirection:"row",
      alignItems:"center",
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

    header:{
      flexDirection:"row",
      alignItems:"center",
      paddingHorizontal:20,
      paddingTop:10,
    },

    backButton:{
      width:45,
      height:45,
      borderRadius:22,
      backgroundColor:"#1F2937",
      justifyContent:"center",
      alignItems:"center",
    },

    headerTitle:{
      flex:1,
      textAlign:"center",
      color:COLORS.secondary,
      fontSize:28,
      fontWeight:"bold",
      marginRight:45,
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