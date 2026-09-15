import { Linking, Pressable, StyleSheet, Text, View } from "react-native";

export default function Contacto() {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.kicker}>ESTAMOS PARA AYUDARTE</Text>
				<Text style={styles.title}>Hablemos de tu próximo celular</Text>
				<Text style={styles.subtitle}>Visítanos o escríbenos. Nuestro equipo te recomienda la mejor opción.</Text>
			</View>

			<View style={styles.card}>
				<Text style={styles.cardTitle}>Celulares Nova</Text>
				<Text style={styles.item}>⌖ Carrera 25 # 18-40, Pasto</Text>
				<Text style={styles.item}>◷ Lunes a sábado · 9:00 a.m. - 7:00 p.m.</Text>
				<Text style={styles.item}>@ soporte@celularesnova.com</Text>
			</View>

			<Pressable style={styles.button} onPress={() => Linking.openURL("tel:+573001234567")}>
				<Text style={styles.buttonText}>Llamar a un asesor</Text>
			</Pressable>
			<Pressable style={styles.secondaryButton} onPress={() => Linking.openURL("mailto:soporte@celularesnova.com")}>
				<Text style={styles.secondaryText}>Enviar correo</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: "#F5F7FB", padding: 20, justifyContent: "center" },
	header: { backgroundColor: "#14213D", borderRadius: 24, padding: 22, marginBottom: 16 },
	kicker: { color: "#FF9D4D", fontSize: 11, fontWeight: "800", letterSpacing: 1.3, marginBottom: 8 },
	title: { color: "#FFFFFF", fontSize: 28, fontWeight: "800", lineHeight: 34, marginBottom: 8 },
	subtitle: { color: "#D7DEEB", fontSize: 14, lineHeight: 21 },
	card: { backgroundColor: "#FFFFFF", borderRadius: 18, padding: 19, borderWidth: 1, borderColor: "#E0E6F0", marginBottom: 16, elevation: 2 },
	cardTitle: { color: "#14213D", fontSize: 19, fontWeight: "800", marginBottom: 12 },
	item: { color: "#667085", fontSize: 14, marginBottom: 10 },
	button: { backgroundColor: "#F07828", borderRadius: 14, padding: 15, alignItems: "center", marginBottom: 10 },
	buttonText: { color: "#FFFFFF", fontWeight: "800" },
	secondaryButton: { borderColor: "#F07828", borderWidth: 1, borderRadius: 14, padding: 14, alignItems: "center" },
	secondaryText: { color: "#F07828", fontWeight: "800" },
});
