import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({ text, theme, onPress }) {
  return (
    <View
      style={[
        styles.buttonContainer,
        theme === "primary" ? styles.primaryButton : null,
      ]}
    >
      <Pressable
        style={[
          styles.button,
          theme === "primary" ? { backgroundColor: "#fff" } : null,
        ]}
        onPress={() => onPress()}
      >
        <FontAwesome
          name="picture-o"
          size={18}
          color="#25292e"
          style={styles.buttonIcon}
        />
        <Text
          style={[
            styles.buttonText,
            theme === "primary" ? { color: "#25292e" } : null,
          ]}
        >
          {text}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  primaryButton: {
    borderWidth: 4,
    borderColor: "#ffd33d",
    borderRadius: 18,
  },
  button: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
