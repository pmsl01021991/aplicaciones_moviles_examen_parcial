import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
} from "react-native";

import PrimaryButton from "../presentation/components/shared/PrimaryButton";
import MesaCard from "../presentation/components/Reserva/MesaCard";
import SeleccionHoraModal from "../presentation/components/Reserva/SeleccionHoraModal";
import NumeroModal from "../presentation/components/Reserva/NumeroModal";
import ComensalesModal from "../presentation/components/Reserva/ComensalesModal";
import ResumenReservaModal from "../presentation/components/Reserva/ResumenReservaModal";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

import { useReserva } from "../presentation/context/ReservaContext";
import { useUsuario } from "../presentation/context/UsuarioContext";
import { mesasMock } from "../presentation/data/mesasMock";
import { COLORS } from "../presentation/utils/color";

export default function Reservas() {

  const [mostrarTodas, setMostrarTodas] = useState(false);

  const [mostrarCalendario, setMostrarCalendario] = useState(false);

  const [fecha, setFecha] = useState(new Date());

  const [mostrarHora,setMostrarHora]=useState(false);

  const [mostrarNumero,setMostrarNumero]=useState(false);

  const [mostrarComensales,setMostrarComensales]=useState(false);

  const [mostrarResumen,setMostrarResumen]=useState(false);

  const { reservaTemporal,setReservaTemporal }=useReserva();

  const { usuarioActual }=useUsuario();

  const mesas = mostrarTodas
    ? mesasMock
    : mesasMock.slice(0, 4);

  const seleccionarMesa = (nombre: string) => {

  setReservaTemporal({

    ...reservaTemporal,

    mesa: nombre,

  });

  setMostrarCalendario(true);

};

  return (

    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>

        Reservaciones

      </Text>

      <Text style={styles.subtitle}>

        Elige una mesa para comenzar tu reservación.

      </Text>

      <FlatList

        data={mesas}

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

        setReservaTemporal({

          ...reservaTemporal,

          fecha: selectedDate.toISOString().split("T")[0],

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

    marginTop: 10,

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