import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../utils/color";

interface Props {
  title: string;
  subtitle: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
}

export default function HomeCard({
  title,
  subtitle,
  icon,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        <Ionicons
          name={icon}
          size={32}
          color={COLORS.secondary}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
      </View>

      <Ionicons
        name="chevron-forward"
        size={24}
        color="#9CA3AF"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: COLORS.card,
    borderRadius: 18,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  iconContainer: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: "#2D3748",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 18,
  },

  textContainer: {
    flex: 1,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#9CA3AF",
    marginTop: 4,
    fontSize: 14,
  },

});