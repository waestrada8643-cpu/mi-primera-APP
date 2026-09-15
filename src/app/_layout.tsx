import { Stack } from "expo-router";
//Stack es para manegar la rutas de diferentes paginas es decir navegar entre pantallas de la aplicacion 
export default function Layout() {
  return (
    <Stack // etiquetas todas las pantallas de la applicacion 
      screenOptions={{
        headerStyle: {
          backgroundColor: "#14213D",
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        contentStyle: {
          backgroundColor: "#F5F7FB",
        },
      }}
    >
      <Stack.Screen //regitra una pantalla en el navegador de la aplicacion 
        name="index"
        options={{ title: "Inicio" }}
      />

      <Stack.Screen 
        name="formulario"
        options={{ title: "Formulario" }}
      />

      <Stack.Screen
        name="resultado"
        options={{ title: "Datos registrados" }}
      />

      <Stack.Screen
        name="imagenes"
        options={{ title: "Catálogo" }}
      />

      <Stack.Screen
        name="contacto"
        options={{ title: "Contacto" }}
      />

      <Stack.Screen
        name="promociones"
        options={{ title: "Promociones" }}
      />
    </Stack>
  );
}
