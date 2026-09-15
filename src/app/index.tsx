import { useRouter } from "expo-router";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

function OpcionMenu({
  icono,
  titulo,
  descripcion,
  onPress,
}: {
  icono: string;
  titulo: string;
  descripcion: string;
  onPress: () => void;
}) {
  return (
    <Pressable style={({ pressed }) => [styles.card, pressed && styles.pressed]} onPress={onPress}>
      <View style={styles.iconoCaja}>
        <Text style={styles.icono}>{icono}</Text>
      </View>

      <View style={styles.cardInfo}>
        <Text style={styles.cardTitulo}>{titulo}</Text>
        <Text style={styles.cardDescripcion}>{descripcion}</Text>
      </View>

      <Text style={styles.flecha}>›</Text>
    </Pressable>
  );
}

function BotonAccion({
  icono,
  titulo,
  detalle,
  color,
  onPress,
}: {
  icono: string;
  titulo: string;
  detalle: string;
  color: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      style={({ pressed }) => [styles.botonAccion, { backgroundColor: color }, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Text style={styles.botonIcono}>{icono}</Text>
      <Text style={styles.botonTitulo}>{titulo}</Text>
      <Text style={styles.botonDetalle}>{detalle}</Text>
      <Text style={styles.botonFlecha}>↗</Text>
    </Pressable>
  );
}

export default function Inicio() {
  const router = useRouter(); 

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* PORTADA PRINCIPAL */}
      <View style={styles.hero}>
        <Image
          source={require("@/assets/images/celularess.jpg")}
          style={styles.imagenHero}
        />

        <View style={styles.overlay}>
          <Text style={styles.etiqueta}>TECNOLOGIA QUE TE ACOMPAÑA</Text>
          <Text style={styles.titulo}>Celulares Nova</Text>
          <Text style={styles.subtitulo}>
            Encuentra tu próximo celular con garantía, asesoría y los mejores precios.
          </Text>
        </View>
      </View>

      {/* BIENVENIDA */}
      <View style={styles.saludoBox}>
        <View>
          <Text style={styles.saludoTitulo}>Hola, amante de la tecnología</Text>
          <Text style={styles.saludoTexto}>
            ¿Qué celular estás buscando hoy?
          </Text>
        </View>

        <View style={styles.avatar}>
          <Text style={styles.avatarTexto}>✦</Text>
        </View>
      </View>
      {/* RESUMEN */}
      <View style={styles.resumen}>
        <View style={styles.resumenItem}>
          <Text style={styles.resumenNumero}>3</Text>
          <Text style={styles.resumenTexto}>Categorías</Text>
        </View>

        <View style={styles.separador} />

        <View style={styles.resumenItem}>
          <Text style={styles.resumenNumero}>100%</Text>
          <Text style={styles.resumenTexto}>Celulares</Text>
        </View>

        <View style={styles.separador} />

        <View style={styles.resumenItem}>
          <Text style={styles.resumenNumero}>24/7</Text>
          <Text style={styles.resumenTexto}>Soporte</Text>
        </View>
      </View>

      <Text style={styles.seccionTitulo}>Explora Nova</Text>

      <OpcionMenu
        icono="📝"
        titulo="Formulario"
        descripcion="Registra tus datos y tu preferencia de compra."
        onPress={() => router.push("/formulario")}
      />

      <View style={styles.botonesPrincipales}>
        <BotonAccion
          icono="▣"
          titulo="Catálogo"
          detalle="Celulares"
          color="#14213D"
          onPress={() => router.push("/imagenes")}
        />
        <BotonAccion
          icono="%"
          titulo="Promociones"
          detalle="Ofertas Nova"
          color="#F07828"
          onPress={() => router.push("/promociones")}
        />
      </View>

      <View style={styles.botonCentrado}>
        <BotonAccion
          icono="⌖"
          titulo="Contacto"
          detalle="Habla con un asesor"
          color="#4C6FFF"
          onPress={() => router.push("/contacto")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F5F7FB",
    padding: 18,
  },

  hero: {
    height: 280,
    borderRadius: 28,
    overflow: "hidden",
    marginBottom: 20,
    elevation: 6,
  },

  imagenHero: {
    width: "100%",
    height: "100%",
  },

  overlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 22,
    backgroundColor: "rgba(17, 28, 51, 0.78)",
  },

  etiqueta: {
    color: "#FF9D4D",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1.8,
    marginBottom: 6,
  },

  titulo: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 6,
  },

  subtitulo: {
    color: "#E9EEF8",
    fontSize: 14,
    lineHeight: 21,
  },

  saludoBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    elevation: 2,
  },

  saludoTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#14213D",
  },

  saludoTexto: {
    marginTop: 3,
    color: "#667085",
    fontSize: 14,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FFE4CF",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarTexto: {
    fontSize: 24,
  },

  resumen: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 24,
    elevation: 2,
  },

  resumenItem: {
    flex: 1,
    alignItems: "center",
  },

  resumenNumero: {
    color: "#F07828",
    fontSize: 18,
    fontWeight: "bold",
  },

  resumenTexto: {
    color: "#667085",
    fontSize: 12,
    marginTop: 3,
  },

  separador: {
    width: 1,
    height: 35,
    backgroundColor: "#DDE3EF",
  },

  seccionTitulo: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#14213D",
    marginBottom: 14,
  },

  botonesPrincipales: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
  },

  botonCentrado: {
    width: "62%",
    height: 118,
    alignSelf: "center",
    marginBottom: 12,
  },

  botonAccion: {
    flex: 1,
    minHeight: 118,
    borderRadius: 18,
    padding: 13,
    justifyContent: "space-between",
    elevation: 4,
  },

  botonIcono: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "800",
  },

  botonTitulo: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
    marginTop: 8,
  },

  botonDetalle: {
    color: "#E9EEF8",
    fontSize: 12,
    marginTop: 3,
  },

  botonFlecha: {
    color: "#FFFFFF",
    fontSize: 20,
    alignSelf: "flex-end",
    marginTop: 8,
  },

  botonContacto: {
    backgroundColor: "#E9F0FF",
    borderColor: "#C9D8F2",
    borderWidth: 1.5,
    borderRadius: 18,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    elevation: 2,
  },

  contactoIcono: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: "#E9F0FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  contactoIconoTexto: {
    color: "#14213D",
    fontSize: 25,
  },

  contactoInfo: {
    flex: 1,
  },

  contactoTitulo: {
    color: "#14213D",
    fontSize: 17,
    fontWeight: "800",
  },

  contactoDetalle: {
    color: "#667085",
    fontSize: 13,
    marginTop: 3,
  },

  contactoFlecha: {
    color: "#F07828",
    fontSize: 25,
    fontWeight: "700",
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 16,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E6F0",
    elevation: 2,
  },

  iconoCaja: {
    width: 56,
    height: 56,
    borderRadius: 18,
    backgroundColor: "#E9F0FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  icono: {
    fontSize: 25,
  },

  cardInfo: {
    flex: 1,
  },

  cardTitulo: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#14213D",
    marginBottom: 4,
  },

  cardDescripcion: {
    color: "#667085",
    fontSize: 13,
    lineHeight: 18,
  },

  flecha: {
    fontSize: 30,
    color: "#F07828",
    marginLeft: 8,
  },

  destacado: {
    backgroundColor: "#14213D",
    borderRadius: 22,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },

  destacadoIcono: {
    width: 52,
    height: 52,
    borderRadius: 17,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  destacadoEmoji: {
    fontSize: 25,
  },

  destacadoInfo: {
    flex: 1,
  },

  destacadoTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
  },

  destacadoTexto: {
    color: "#D7DEEB",
    fontSize: 13,
    lineHeight: 19,
  },

  footer: {
    textAlign: "center",
    color: "#7A869A",
    fontSize: 12,
    marginTop: 24,
    marginBottom: 12,
  },

  pressed: {
    opacity: 0.82,
  },
});
