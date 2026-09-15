import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Imagenes() {
  const celulares = [
    { id: 1, nombre: "Nova Pro Max", detalle: "256 GB · Cámara avanzada", precio: "$3.499.000" },
    { id: 2, nombre: "Nova Air", detalle: "128 GB · Pantalla fluida", precio: "$1.899.000" },
    { id: 3, nombre: "Nova Lite", detalle: "128 GB · Batería para todo el día", precio: "$999.000" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Catálogo de celulares</Text>
      <Text style={styles.subtitulo}>
        Elige el equipo que mejor se adapta a tu ritmo.
      </Text>

      {celulares.map((item) => (
        <View style={styles.card} key={item.id}>
          <Image source={require("@/assets/images/celularess.jpg")} style={styles.imagen} />
          <View style={styles.info}>
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.detalle}>{item.detalle}</Text>
            <Text style={styles.precio}>{item.precio}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F5F7FB",
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#14213D",
  },

  subtitulo: {
    textAlign: "center",
    color: "#667085",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#E0E6F0",
    elevation: 3,
  },

  imagen: {
    width: "100%",
    height: 175,
  },

  info: {
    padding: 14,
  },

  nombre: {
    color: "#14213D",
    fontSize: 18,
    fontWeight: "600",
  },

  detalle: { color: "#667085", marginTop: 4 },

  precio: { color: "#F07828", fontSize: 17, fontWeight: "800", marginTop: 10 },
});
