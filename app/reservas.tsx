import { useState } from "react";
import {SafeAreaView,StyleSheet,Text,FlatList, Alert, TouchableOpacity, View} from "react-native";
import PrimaryButton from "../presentation/components/shared/PrimaryButton";
import MesaCard from "../presentation/components/Reserva/MesaCard";
import SeleccionHoraModal from "../presentation/components/Reserva/SeleccionHoraModal";
import NumeroModal from "../presentation/components/Reserva/NumeroModal";
import ComensalesModal from "../presentation/components/Reserva/ComensalesModal";
import ResumenReservaModal from "../presentation/components/Reserva/ResumenReservaModal";
import DateTimePicker, {DateTimePickerEvent,} from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useReserva } from "../presentation/context/ReservaContext";
import { useUsuario } from "../presentation/context/UsuarioContext";
import { COLORS } from "../presentation/utils/color";

export default function Reservas() {

  const router = useRouter();

  const [mostrarCalendario, setMostrarCalendario] = useState(false);

  const [fecha, setFecha] = useState(new Date());

  const [mostrarHora,setMostrarHora]=useState(false);

  const [mostrarNumero,setMostrarNumero]=useState(false);

  const [mostrarComensales,setMostrarComensales]=useState(false);

  const [mostrarResumen,setMostrarResumen]=useState(false);

  const { reservaTemporal,setReservaTemporal, platosSeleccionados, mesas }=useReserva();

  const { usuarioActual }=useUsuario();

  const mesasMostrar = mesas;

  const seleccionarMesa = (nombre: string) => {

  if (!usuarioActual) {

    Alert.alert(
      "Iniciar sesión",
      "Debe iniciar sesión para realizar una reservación."
    );

    return;

  }

  if (platosSeleccionados.length === 0) {

    Alert.alert(
      "Selecciona tu plato",
      "⚠️ Selecciona tu plato antes de hacer una reservación."
    );

    return;

  }

  setReservaTemporal({

    ...reservaTemporal,

    mesa: nombre,

  });

  setMostrarCalendario(true);

};

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

        <Text style={styles.title}>
          Reservaciones
        </Text>

      </View>

      <Text style={styles.subtitle}>

        Elige una mesa para comenzar tu reservación.

      </Text>

      <FlatList

        data={mesasMostrar}

        keyExtractor={(item) => item.id.toString()}

        numColumns={2}

        columnWrapperStyle={styles.row}

        contentContainerStyle={styles.list}

        renderItem={({ item }) => (

          <MesaCard

            mesa={item}

            onPress={() => seleccionarMesa(item.nombre)}

          />

        )}

      />

      {mostrarCalendario && (

  <DateTimePicker

    value={fecha}

    mode="date"

    display="calendar"

    minimumDate={new Date()}

    onChange={(
      event: DateTimePickerEvent,
      selectedDate?: Date
    ) => {

      setMostrarCalendario(false);

      if (event.type === "dismissed") {

        return;

      }

      if (selectedDate) {

        setFecha(selectedDate);

        const año = selectedDate.getFullYear();

        const mes = String(selectedDate.getMonth() + 1).padStart(2, "0");

        const dia = String(selectedDate.getDate()).padStart(2, "0");

        const fechaFormateada = `${año}-${mes}-${dia}`;

        setReservaTemporal({

          ...reservaTemporal,

          fecha: fechaFormateada,

        });

        setMostrarHora(true);

      }

    }}

  />

)}


      <SeleccionHoraModal

      visible={mostrarHora}

      onCerrar={()=>{

      setMostrarHora(false);

      }}

      onContinuar={()=>{

      setMostrarHora(false);

      setMostrarNumero(true);

      }}

      />

      <NumeroModal

      visible={mostrarNumero}

      onCerrar={()=>{

      setMostrarNumero(false);

      setMostrarHora(true);

      }}

      onContinuar={()=>{

      setMostrarNumero(false);

      setMostrarComensales(true);

      }}

      />

      <ComensalesModal

      visible={mostrarComensales}

      onCerrar={()=>{

      setMostrarComensales(false);

      setMostrarNumero(true);

      }}

      onContinuar={()=>{

      setMostrarComensales(false);

      setMostrarResumen(true);

      }}

      />

      <ResumenReservaModal

      visible={mostrarResumen}

      usuario={usuarioActual?.correo ?? ""}

      onCerrar={()=>{

      setMostrarResumen(false);

      setMostrarComensales(true);

      }}

      onConfirmar={()=>{

      setMostrarResumen(false);

      }}

      />

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: COLORS.background,

    padding: 18,

  },

  title:{
    flex:1,
    textAlign:"center",
    fontSize:30,
    fontWeight:"bold",
    color:COLORS.secondary,
    marginRight:45,
  },
  
  subtitle: {

    color: "#C4B5FD",

    textAlign: "center",

    fontSize: 16,

    marginVertical: 20,

  },

  header:{
    flexDirection:"row",
    alignItems:"center",
    marginTop:10,
    marginBottom:20,
  },

  list: {

    paddingBottom: 20,

  },

  row: {

    justifyContent: "space-between",

  },

  backButton:{
      width:45,
      height:45,
      borderRadius:22,
      backgroundColor:"#1F2937",
      justifyContent:"center",
      alignItems:"center",
  },

});