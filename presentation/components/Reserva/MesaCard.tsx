import {View,Text,Image,TouchableOpacity,StyleSheet,} from "react-native";
import { useReserva } from "../../context/ReservaContext";
import { Mesa } from "../../models/Mesa";
import { COLORS } from "../../utils/color";

interface Props {

  mesa: Mesa;

  onPress: () => void;

}

export default function MesaCard({

  mesa,

  onPress,

}: Props) {

  const { reservas } = useReserva();

  const reservasMesa = reservas.filter(
    (r) => r.mesa === mesa.nombre
  );

  const disponibleTotal = reservasMesa.length === 0;

  return (

    <TouchableOpacity

      style={styles.card}

      onPress={onPress}

      activeOpacity={0.9}

    >

      <Image

        source={require("../../../assets/images/mesa_madera.jpeg")}

        style={styles.image}

      />

      <View style={styles.overlay}>

        <Text style={styles.nombre}>

          {mesa.nombre}

        </Text>

        <Text

          style={[

            styles.estado,

            {

              color: disponibleTotal

                ? "#000"

                : "#B91C1C",

            },

          ]}

        >

          {

            disponibleTotal

              ? "Disponible en\ntodos los\nhorarios"

              : "Disponible en\nalgunos\nhorarios"

          }

        </Text>

        {

         reservasMesa
            .slice(0,2)
            .map((reserva,index)=>(
              <View
                key={index}
                style={styles.badge}
              >
                <Text style={styles.badgeText}>
                  {reserva.cliente} - {reserva.fecha} - {reserva.hora}
                </Text>
              </View>

            ))

        }

        {

          reservasMesa.length > 2 && (

            <View style={styles.badge}>

              <Text style={styles.badgeText}>

                +{reservasMesa.length - 2} más

              </Text>

            </View>

          )

        }

      </View>

    </TouchableOpacity>

  );

}

const styles = StyleSheet.create({

  card: {

    width: "48%",

    height: 210,

    borderRadius: 12,

    overflow: "hidden",

    marginBottom: 18,

    backgroundColor: "#FFF",

  },

  image: {

    width: "100%",

    height: "100%",

    position: "absolute",

  },

  overlay: {

    flex: 1,

    justifyContent: "center",

    alignItems: "center",

    backgroundColor: "rgba(255,255,255,0.45)",

  },

  nombre: {

    color: "#FFF",

    fontSize: 20,

    fontWeight: "bold",

    marginBottom: 12,

  },

  estado: {

    fontSize: 16,

    textAlign: "center",

    fontWeight: "bold",

    lineHeight: 18,

    marginBottom: 15,

  },

  badge: {

      backgroundColor: "#374151",

      borderRadius: 6,

      paddingHorizontal: 8,

      paddingVertical: 5,

      marginTop: 4,

      width: "88%",

      alignItems: "center",

  },

  badgeText: {

      color: "#FFF",

      fontSize: 10,

      textAlign: "center",

      lineHeight: 14,

  },

});