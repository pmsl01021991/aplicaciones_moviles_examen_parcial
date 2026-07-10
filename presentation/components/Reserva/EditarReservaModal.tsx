import { useEffect, useState } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";

import PrimaryButton from "../shared/PrimaryButton";
import { COLORS } from "../../utils/color";
import { Reserva } from "../../models/Reserva";

interface Props {
  visible: boolean;
  reserva: Reserva | null;

  onGuardar: (reserva: Reserva) => void;
  onCerrar: () => void;
}

export default function EditarReservaModal({

  visible,

  reserva,

  onGuardar,

  onCerrar,

}: Props) {

  const [cliente,setCliente]=useState("");
  const [telefono,setTelefono]=useState("");
  const [plato,setPlato]=useState("");
  const [mesa,setMesa]=useState("");
  const [fecha,setFecha]=useState("");
  const [hora,setHora]=useState("");
  const [comensales,setComensales]=useState("");

  useEffect(()=>{

    if(reserva){

      setCliente(reserva.cliente);
      setTelefono(reserva.telefono);
      setPlato(reserva.plato);
      setMesa(reserva.mesa);
      setFecha(reserva.fecha);
      setHora(reserva.hora);
      setComensales(reserva.comensales.toString());

    }

  },[reserva]);

  if(!reserva) return null;

  return(

    <Modal
      visible={visible}
      transparent
      animationType="slide"
    >

      <View style={styles.overlay}>

        <View style={styles.modal}>

          <Text style={styles.title}>
            Editar Reservación
          </Text>

          <TextInput
            style={styles.input}
            value={cliente}
            onChangeText={setCliente}
            placeholder="Cliente"
          />

          <TextInput
            style={styles.input}
            value={telefono}
            onChangeText={setTelefono}
            placeholder="Teléfono"
          />

          <TextInput
            style={styles.input}
            value={plato}
            onChangeText={setPlato}
            placeholder="Plato"
          />

          <TextInput
            style={styles.input}
            value={mesa}
            onChangeText={setMesa}
            placeholder="Mesa"
          />

          <TextInput
            style={styles.input}
            value={fecha}
            onChangeText={setFecha}
            placeholder="Fecha"
          />

          <TextInput
            style={styles.input}
            value={hora}
            onChangeText={setHora}
            placeholder="Hora"
          />

          <TextInput
            style={styles.input}
            value={comensales}
            keyboardType="number-pad"
            onChangeText={setComensales}
            placeholder="Comensales"
          />

          <PrimaryButton

            title="Guardar Cambios"

            onPress={()=>{

              onGuardar({

                ...reserva,

                cliente,

                telefono,

                plato,

                mesa,

                fecha,

                hora,

                comensales:Number(comensales)

              });

            }}

            color={COLORS.success}

          />

          <PrimaryButton

            title="Cancelar"

            onPress={onCerrar}

            color={COLORS.danger}

          />

        </View>

      </View>

    </Modal>

  );

}

const styles=StyleSheet.create({

overlay:{
flex:1,
justifyContent:"center",
alignItems:"center",
backgroundColor:"rgba(0,0,0,.6)",
padding:20,
},

modal:{
backgroundColor:"#1F2937",
width:"100%",
padding:25,
borderRadius:15,
},

title:{
fontSize:25,
fontWeight:"bold",
color:COLORS.secondary,
textAlign:"center",
marginBottom:20,
},

input:{
backgroundColor:"#FFF",
borderRadius:10,
padding:12,
marginBottom:12,
}

});