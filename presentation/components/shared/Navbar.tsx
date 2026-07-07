import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "../../utils/color";

interface Props {
  usuario?: {
    correo: string;
    rol: "admin" | "cliente";
  } | null;

  onLogin: () => void;
  onLogout: () => void;
  onInicio: () => void;
  onMenu: () => void;
  onReservas: () => void;
}

export default function Navbar({
  usuario,
  onLogin,
  onLogout,
  onInicio,
  onMenu,
  onReservas,
}: Props) {

  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <>
      <View style={styles.navbar}>

        <View style={styles.logoContainer}>

          <Image
            source={require("../../../assets/images/logo-favicon.png")}
            style={styles.logo}
          />

          <Text style={styles.title}>

            {usuario
              ? usuario.rol === "admin"
                ? "Bienvenido al Buen Sabor, Administrador"
                : `Bienvenido, ${usuario.correo.split("@")[0]}`
              : "El Buen Sabor"}

          </Text>

        </View>

        <TouchableOpacity
          onPress={() => setMenuAbierto(!menuAbierto)}
        >

          <Ionicons
            name="menu"
            size={34}
            color={COLORS.secondary}
          />

        </TouchableOpacity>

      </View>

      {menuAbierto && (

        <View style={styles.menu}>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              setMenuAbierto(false);
              onInicio();
            }}
          >
            <Text style={styles.menuText}>Inicio</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              setMenuAbierto(false);
              onReservas();
            }}
          >
            <Text style={styles.menuText}>Reservaciones</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              setMenuAbierto(false);
              onMenu();
            }}
          >
            <Text style={styles.menuText}>Menú</Text>
          </TouchableOpacity>

          {usuario ? (

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setMenuAbierto(false);
                onLogout();
              }}
            >

              <Text style={styles.menuText}>
                Cerrar sesión
              </Text>

            </TouchableOpacity>

          ) : (

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setMenuAbierto(false);
                onLogin();
              }}
            >

              <Text style={styles.menuText}>
                Login
              </Text>

            </TouchableOpacity>

          )}

        </View>

      )}

    </>
  );
}

const styles = StyleSheet.create({

  navbar: {
    height: 80,
    backgroundColor: "#111827EE",
    borderBottomWidth: 1,
    borderBottomColor: "#1F2937",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
  },

  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  logo: {
    width: 40,
    height: 40,
    marginRight: 12,
  },

  title: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "600",
    flexShrink: 1,
  },

  menu: {
    backgroundColor: "#111827",
  },

  menuItem: {
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#374151",
  },

  menuText: {
    color: "#FFF",
    fontSize: 16,
  },

});