import { useEffect, useState } from "react";
import {Modal,View,Text,StyleSheet,TextInput,} from "react-native";
import PrimaryButton from "../shared/PrimaryButton";
import { COLORS } from "../../utils/color";
import { Reserva } from "../../models/Reserva";
import { Picker } from "@react-native-picker/picker";

const mesas = Array.from(
  { length: 16 },
  (_, index) => `Mesa ${index + 1}`
);

const horas = [
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

const cantidadComensales = [
  1, 2, 3, 4, 5, 6, 7, 8
];

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
  const [numero,setNumero]=useState("");
  const [plato,setPlato]=useState("");
  const [mesa,setMesa]=useState("");
  const [fecha,setFecha]=useState("");
  const [hora,setHora]=useState("");
  const [comensales,setComensales]=useState(1);

  useEffect(()=>{

    if(reserva){

      setCliente(reserva.cliente);
      setNumero(reserva.numero);
      setPlato(reserva.plato);
      setMesa(reserva.mesa);
      setFecha(reserva.fecha);
      setHora(reserva.hora);
      setComensales(reserva.comensales);

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
            value={numero}
            onChangeText={setNumero}
            placeholder="Número"
          />

          <TextInput
            style={styles.input}
            value={plato}
            onChangeText={setPlato}
            placeholder="Plato"
          />

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={mesa}
              onValueChange={(value) => setMesa(value)}
            >
              {mesas.map((item) => (
                <Picker.Item
                  key={item}
                  label={item}
                  value={item}
                />
              ))}
            </Picker>
          </View>

          <TextInput
            style={styles.input}
            value={fecha}
            onChangeText={setFecha}
            placeholder="Fecha"
          />

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={hora}
              onValueChange={(value) => setHora(value)}
            >
              {horas.map((item) => (
                <Picker.Item
                  key={item}
                  label={item}
                  value={item}
                />
              ))}
            </Picker>
          </View>

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={comensales}
              onValueChange={(value) =>
                setComensales(Number(value))
              }
            >
              {cantidadComensales.map((cantidad) => (
                <Picker.Item
                  key={cantidad}
                  label={`${cantidad} ${
                    cantidad === 1 ? "persona" : "personas"
                  }`}
                  value={cantidad}
                />
              ))}
            </Picker>
          </View>

          <PrimaryButton

            title="Guardar Cambios"

            onPress={()=>{

              onGuardar({

                ...reserva,

                cliente,

                numero,

                plato,

                mesa,

                fecha,

                hora,

                comensales

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
      },

    pickerContainer: {
      backgroundColor: "#FFF",
      borderRadius: 10,
      marginBottom: 12,
      overflow: "hidden",
    },

});