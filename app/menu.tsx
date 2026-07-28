import {FlatList,Image,SafeAreaView,StyleSheet,Text,View,Alert,TouchableOpacity,} from "react-native";
import { useState } from "react";
import { COLORS } from "../presentation/utils/color";
import { useReserva } from "../presentation/context/ReservaContext";
import { useEffect } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useUsuario } from "../presentation/context/UsuarioContext";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const imagenes: Record<string, any> = {
  "Pasta carbonara": require("../assets/images/pasta.jpeg"),
  "Pizza Margherita": require("../assets/images/pizza.jpeg"),
  "Carne Asada": require("../assets/images/carne.jpeg"),
  "Pollo Asado": require("../assets/images/pollo.jpeg"),

  "Coca Cola": require("../assets/images/cocacola.jpg"),
  "Inka Kola": require("../assets/images/incakola.jpg"),
  "Chicha Morada": require("../assets/images/chichamorada.jpg"),

  "cheesecake": require("../assets/images/cheesecake.jpg"),
  "Tres Leches": require("../assets/images/tresleches.jpg"),
};


export default function Menu(){

  const { platosSeleccionados, setPlatosSeleccionados } = useReserva();
  const { usuarioActual } = useUsuario();
  const router = useRouter();

  const [platos, setPlatos] = useState<any[]>([]);

  const [categoria, setCategoria] = useState<
    "comidas" | "bebidas" | "postres"
  >("comidas");

  useEffect(() => {

    const obtenerPlatos = async () => {

      try {

        const snapshot = await getDocs(
          collection(db, "platos")
        );

        const lista = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setPlatos(lista);

      } catch (error) {

        console.log(error);

        Alert.alert(
          "Error",
          "No se pudieron cargar los platos."
        );

      }

    };

    obtenerPlatos();

  }, []);

    const agregarPlato = async (plato: any) => {

  if (platosSeleccionados.includes(plato.nombre)) {

    Alert.alert(
      "Información",
      "Ese plato ya fue agregado."
    );

    return;

  }

  try {

    await addDoc(collection(db, "platosSeleccionados"), {

      nombre: plato.nombre,
      precio: plato.precio,
      categoria: plato.categoria,
      imagen: plato.imagen,
      usuario: usuarioActual?.correo,
      fecha: new Date()

    });

    setPlatosSeleccionados([
      ...platosSeleccionados,
      plato.nombre
    ]);

    Alert.alert(
      "Plato seleccionado",
      `${plato.nombre} fue agregado correctamente.`
    );

  } catch (error) {

    console.log(error);

    Alert.alert(
      "Error",
      "No se pudo agregar el plato."
    );

  }

};

return(

<SafeAreaView style={styles.container}>

<FlatList
data={platos.filter(
  (p:any)=>p.categoria?.toLowerCase()===categoria
)}

ListHeaderComponent={

<View>

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
      Nuestro Menú
    </Text>

  </View>

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
  source={imagenes[item.nombre]}
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

  onPress={() => agregarPlato(item)}

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

  header: {
  flexDirection: "row",
  alignItems: "center",
  marginTop: 10,
  marginBottom: 20,
},

backButton: {
  width: 45,
  height: 45,
  borderRadius: 22,
  backgroundColor: "#1F2937",
  justifyContent: "center",
  alignItems: "center",
},

title: {
  flex: 1,
  textAlign: "center",
  fontSize: 30,
  fontWeight: "bold",
  color: COLORS.secondary,
  marginRight: 45,
},

});