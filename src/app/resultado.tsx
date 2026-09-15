import { useLocalSearchParams, useRouter } from "expo-router";
import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function Resultado() {
  const router = useRouter();
  const { nombre, correo, telefono, ciudad } =
    useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Información registrada</Text>
      <Text style={styles.subtitulo}>
        Datos recibidos desde el formulario.
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nombre</Text>
        <Text style={styles.valor}>{nombre}</Text>

        <Text style={styles.label}>Correo</Text>
        <Text style={styles.valor}>{correo}</Text>

        <Text style={styles.label}>Teléfono</Text>
        <Text style={styles.valor}>{telefono}</Text>

        <Text style={styles.label}>Ciudad</Text>
        <Text style={styles.valor}>{ciudad}</Text>
      </View>

      <Pressable
        style={styles.boton}
        onPress={() => router.replace("/")}
      >
        <Text style={styles.botonTexto}>Volver al inicio</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
    justifyContent: "center",
    padding: 20,
  },

  titulo: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#14213D",
    textAlign: "center",
  },

  subtitulo: {
    color: "#667085",
    textAlign: "center",
    marginBottom: 22,
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E0E6F0",
    marginBottom: 18,
    elevation: 3,
  },

  label: {
    color: "#F07828",
    fontSize: 13,
    marginTop: 8,
  },

  valor: {
    color: "#14213D",
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 8,
  },

  boton: {
    backgroundColor: "#F07828",
    padding: 14,
    borderRadius: 13,
    alignItems: "center",
  },

  botonTexto: {
    color: "white",
    fontWeight: "bold",
  },
});
