import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

import { COLORS } from "../presentation/utils/color";
import { useReserva } from "../presentation/context/ReservaContext";

const MENU = {

  comidas: [

    {
      id: "1",
      nombre: "Pasta Carbonara",
      descripcion: "Deliciosa pasta con salsa cremosa.",
      precio: "S/ 30.00",
      imagen: require("../assets/images/pasta.jpeg"),
    },

    {
      id: "2",
      nombre: "Pizza Margherita",
      descripcion: "Pizza clásica italiana.",
      precio: "S/ 28.00",
      imagen: require("../assets/images/pizza.jpeg"),
    },

    {
      id: "3",
      nombre: "Carne Asada",
      descripcion: "Jugosa carne a la parrilla.",
      precio: "S/ 28.00",
      imagen: require("../assets/images/carne.jpeg"),
    },

    {
      id: "4",
      nombre: "Pollo Asado",
      descripcion: "Pollo marinado al horno.",
      precio: "S/ 36.00",
      imagen: require("../assets/images/pollo.jpeg"),
    },

  ],

  bebidas: [

    {
      id: "5",
      nombre: "Coca Cola",
      descripcion: "Botella 500ml",
      precio: "S/ 5.00",
      imagen: require("../assets/images/cocacola.jpg"),
    },

    {
      id: "6",
      nombre: "Inca Kola",
      descripcion: "Botella 500ml",
      precio: "S/ 5.00",
      imagen: require("../assets/images/incakola.jpg"),
    },

    {
      id: "7",
      nombre: "Chicha Morada",
      descripcion: "Vaso grande",
      precio: "S/ 8.00",
      imagen: require("../assets/images/chichamorada.jpg"),
    },

  ],

  postres: [

    {
      id: "8",
      nombre: "Cheesecake",
      descripcion: "Cheesecake de fresa.",
      precio: "S/ 12.00",
      imagen: require("../assets/images/cheesecake.jpg"),
    },

    {
      id: "9",
      nombre: "Tres Leches",
      descripcion: "Pastel tres leches.",
      precio: "S/ 10.00",
      imagen: require("../assets/images/tresleches.jpg"),
    },

  ]

};

export default function Menu(){

  const { platosSeleccionados, setPlatosSeleccionados } = useReserva();

  const [categoria, setCategoria] = useState<"comidas" | "bebidas" | "postres"
  >("comidas");

  const agregarPlato = (nombre: string) => {

    if (platosSeleccionados.includes(nombre)) {

      Alert.alert(
        "Información",
        "Ese plato ya fue agregado."
      );

      return;

    }

    setPlatosSeleccionados([

      ...platosSeleccionados,

      nombre

    ]);

    Alert.alert(

      "Plato seleccionado",

      `${nombre} fue agregado correctamente.`

    );

  };

return(

<SafeAreaView style={styles.container}>

<FlatList
data={MENU[categoria]}

ListHeaderComponent={

<View>

<Text style={styles.title}>
Nuestro Menú
</Text>

<View style={styles.categories}>

  <TouchableOpacity
    style={[
      styles.tab,
      categoria === "comidas" && styles.tabActive,
    ]}
    onPress={() => setCategoria("comidas")}
  >
    <Text style={styles.tabText}>🍔 Comidas</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={[
      styles.tab,
      categoria === "bebidas" && styles.tabActive,
    ]}
    onPress={() => setCategoria("bebidas")}
  >
    <Text style={styles.tabText}>🥤 Bebidas</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={[
      styles.tab,
      categoria === "postres" && styles.tabActive,
    ]}
    onPress={() => setCategoria("postres")}
  >
    <Text style={styles.tabText}>🍰 Postres</Text>
  </TouchableOpacity>

</View>

</View>

}

keyExtractor={(item)=>item.id}

contentContainerStyle={styles.list}

renderItem={({item})=>(

<View style={styles.card}>

<Image

source={item.imagen}

style={styles.image}

/>

<Text style={styles.nombre}>

{item.nombre}

</Text>

<Text style={styles.descripcion}>

{item.descripcion}

</Text>

<Text style={styles.precio}>

{item.precio}

</Text>

<TouchableOpacity

  style={styles.button}

  onPress={() => agregarPlato(item.nombre)}

>

  <Text style={styles.buttonText}>

    Agregar

  </Text>

</TouchableOpacity>

</View>

)}

/>

</SafeAreaView>

);

}

const styles=StyleSheet.create({

  container:{

  flex:1,

  backgroundColor:COLORS.background

  },

  title:{

  fontSize:30,

  fontWeight:"bold",

  color:COLORS.secondary,

  textAlign:"center",

  marginVertical:20

  },

  list:{

  padding:15

  },

  card:{

  backgroundColor:"#FFF",

  borderRadius:15,

  marginBottom:20,

  overflow:"hidden"

  },

  image:{

  width:"100%",

  height:200

  },

  nombre:{

  fontSize:20,

  fontWeight:"bold",

  margin:15

  },

  descripcion:{

  fontSize:15,

  marginHorizontal:15,

  color:"#555"

  },

  precio:{

  fontSize:18,

  fontWeight:"bold",

  color:COLORS.secondary,

  margin:15

  },

  button:{

  backgroundColor:COLORS.secondary,

  margin:15,

  paddingVertical:12,

  borderRadius:10,

  alignItems:"center"

  },

  buttonText:{

  color:"#FFF",

  fontWeight:"bold",

  fontSize:16

  },

  tabs:{

  paddingHorizontal:15,

  paddingBottom:20,

  },

  tab: {
    flex: 1,
    backgroundColor: "#374151",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    marginHorizontal: 4,
  },

  tabActive:{

  backgroundColor:COLORS.secondary,

  },

  tabText:{

  color:"#FFF",

  fontWeight:"bold",

  fontSize:15,

  },

  categories: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

});