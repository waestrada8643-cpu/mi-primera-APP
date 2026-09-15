import { useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const promociones = [
  { etiqueta: "NOVA 01", titulo: "10% en tu primer celular", detalle: "Regístrate y recibe un descuento especial en tu primera compra." },
  { etiqueta: "COMBO", titulo: "Celular + protector", detalle: "Lleva un protector de pantalla incluido en equipos seleccionados." },
  { etiqueta: "CAMBIO", titulo: "Renueva tu equipo", detalle: "Trae tu celular anterior y recibe una valoración preferencial." },
];

export default function Promociones() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.intro}>
        <Text style={styles.kicker}>OFERTAS POR TIEMPO LIMITADO</Text>
        <Text style={styles.title}>Promociones Nova</Text>
        <Text style={styles.subtitle}>Más tecnología, mejores oportunidades para estrenar.</Text>
      </View>

      {promociones.map((promocion) => (
        <View key={promocion.etiqueta} style={styles.card}>
          <Text style={styles.etiqueta}>{promocion.etiqueta}</Text>
          <Text style={styles.cardTitle}>{promocion.titulo}</Text>
          <Text style={styles.detail}>{promocion.detalle}</Text>
        </View>
      ))}

      <Pressable style={styles.button} onPress={() => router.push("/formulario")}>
        <Text style={styles.buttonText}>Quiero asesoría</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: "#F5F7FB", padding: 20 },
  intro: { backgroundColor: "#14213D", borderRadius: 24, padding: 22, marginBottom: 18 },
  kicker: { color: "#FF9D4D", fontSize: 11, fontWeight: "800", letterSpacing: 1.5, marginBottom: 8 },
  title: { color: "#FFFFFF", fontSize: 29, fontWeight: "800", marginBottom: 8 },
  subtitle: { color: "#D7DEEB", fontSize: 14, lineHeight: 21 },
  card: { backgroundColor: "#FFFFFF", borderRadius: 18, padding: 18, marginBottom: 13, borderWidth: 1, borderColor: "#E0E6F0", elevation: 2 },
  etiqueta: { color: "#F07828", fontSize: 12, fontWeight: "800", letterSpacing: 1.2, marginBottom: 8 },
  cardTitle: { color: "#14213D", fontSize: 19, fontWeight: "800", marginBottom: 6 },
  detail: { color: "#667085", fontSize: 14, lineHeight: 20 },
  button: { backgroundColor: "#F07828", borderRadius: 14, padding: 15, alignItems: "center", marginTop: 5 },
  buttonText: { color: "#FFFFFF", fontWeight: "800" },
});
