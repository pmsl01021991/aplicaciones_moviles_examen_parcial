import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity
} from "react-native";

import { COLORS } from "../presentation/utils/color";
import { useReserva } from "../presentation/context/ReservaContext";

const menu = [

  {

    id:"1",

    nombre:"Pasta Carbonera",

    descripcion:"Deliciosa pasta con salsa cremosa.",

    precio:"S/ 30.00",

    imagen:require("../assets/images/pasta.jpeg")

  },

  {

    id:"2",

    nombre:"Pizza Margherita",

    descripcion:"Pizza clásica con tomate, mozzarella y albahaca.",

    precio:"S/ 28.00",

    imagen:require("../assets/images/pizza.jpeg")

  },

  {

    id:"3",

    nombre:"Carne Asada",

    descripcion:"Jugosa carne a la parrilla con especias especiales.",

    precio:"S/ 28.00",

    imagen:require("../assets/images/carne.jpeg")

  },

  {

    id:"4",

    nombre:"Pollo Asado",

    descripcion:"Pollo marinado y asado a la perfección.",

    precio:"S/ 36.00",

    imagen:require("../assets/images/pollo.jpeg")

  }

];

export default function Menu(){

  const { setPlatoSeleccionado } = useReserva();

  const agregarPlato = (nombre: string) => {

    setPlatoSeleccionado(nombre);

    Alert.alert(

      "Plato seleccionado",

      `${nombre} fue agregado correctamente.`

    );

  };

return(

<SafeAreaView style={styles.container}>

<Text style={styles.title}>

Nuestro Menú

</Text>

<FlatList

data={menu}

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

}

});