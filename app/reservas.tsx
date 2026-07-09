import { useState } from "react";
import {SafeAreaView,StyleSheet,Text,FlatList, Alert} from "react-native";
import PrimaryButton from "../presentation/components/shared/PrimaryButton";
import MesaCard from "../presentation/components/Reserva/MesaCard";
import SeleccionHoraModal from "../presentation/components/Reserva/SeleccionHoraModal";
import NumeroModal from "../presentation/components/Reserva/NumeroModal";
import ComensalesModal from "../presentation/components/Reserva/ComensalesModal";
import ResumenReservaModal from "../presentation/components/Reserva/ResumenReservaModal";
import DateTimePicker, {DateTimePickerEvent,} from "@react-native-community/datetimepicker";
import { useRouter } from "expo-router";
import Navbar from "../presentation/components/shared/Navbar";
import { useReserva } from "../presentation/context/ReservaContext";
import { useUsuario } from "../presentation/context/UsuarioContext";
import { COLORS } from "../presentation/utils/color";

export default function Reservas() {

  const router = useRouter();

  const [mostrarTodas, setMostrarTodas] = useState(false);

  const [mostrarCalendario, setMostrarCalendario] = useState(false);

  const [fecha, setFecha] = useState(new Date());

  const [mostrarHora,setMostrarHora]=useState(false);

  const [mostrarNumero,setMostrarNumero]=useState(false);

  const [mostrarComensales,setMostrarComensales]=useState(false);

  const [mostrarResumen,setMostrarResumen]=useState(false);

  const { reservaTemporal,setReservaTemporal, platosSeleccionados, mesas }=useReserva();

  const { usuarioActual }=useUsuario();

const mesasMostrar =

    mostrarTodas

        ? mesas

        : mesas.slice(0,4);

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

      <Navbar

          usuario={usuarioActual}

          onLogin={() => router.push("/login")}

          onLogout={() => {}}

          onInicio={() => router.push("/home")}

          onMenu={() => router.push("/menu")}

          onReservas={() => {}}

          onReservacionesHechas={() => router.push("/reservacionesHechas")}

        />


      <Text style={styles.title}>

        Reservaciones

      </Text>

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

      {

        !mostrarTodas && (

          <PrimaryButton

            title="Mostrar más mesas"

            onPress={() => setMostrarTodas(true)}

            color={COLORS.secondary}

          />

        )

      }

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

  title: {

    fontSize: 32,

    color: COLORS.secondary,

    fontWeight: "bold",

    textAlign: "center",

    marginTop: 20,

  },

  subtitle: {

    color: "#C4B5FD",

    textAlign: "center",

    fontSize: 16,

    marginVertical: 20,

  },

  list: {

    paddingBottom: 20,

  },

  row: {

    justifyContent: "space-between",

  },

});