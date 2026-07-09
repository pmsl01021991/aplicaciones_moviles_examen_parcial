# Restaurante El Buen Sabor - Aplicación Móvil
 
## Descripción del proyecto
 
**Restaurante El Buen Sabor** es una aplicación móvil desarrollada en React Native que permite a los clientes consultar el menú del restaurante, registrarse, iniciar sesión y realizar el proceso de reservación de mesas.
 
La aplicación también contempla un rol de administrador, el cual tendrá acceso a funcionalidades adicionales para la gestión de las reservaciones realizadas por los clientes.
 
 
---
 
# Core de negocio elegido
 
El core de negocio corresponde a la **gestión de reservaciones para un restaurante**, permitiendo:
 
- Registro e inicio de sesión de clientes.
- Consulta del menú del restaurante.
- Selección de platos.
- Reservación de mesas.
- Administración de las reservaciones (rol Administrador).
 
---
 
# Tecnologías utilizadas
 
- React Native
- Expo SDK 54
- TypeScript
- Expo Router
- Context API
- useReducer
- NativeWind (Tailwind CSS para React Native)
 
## Librerías utilizadas
- @react-native-community/datetimepicker
- @react-native-picker/picker
- react-native-calendars
- react-native-safe-area-context
- react-native-reanimated
- react-native-screens
- react-native-gesture-handler
- react-native-svg
- expo-router
- expo-status-bar

 
# Librerías principales
 

- Expo Router
- React Navigation
- React Native Calendars
- React Native DateTimePicker
- React Native Picker
- React Native Safe Area Context
- React Native Gesture Handler
- React Native Reanimated
- Expo Vector Icons
- Expo Status Bar
- NativeWind

---
 
# Requisitos
 
Antes de ejecutar el proyecto es necesario tener instalado:
 
- Node.js (versión LTS recomendada)
- npm
- JDK 17 o superior
- Android Studio (para Android)
 
o
 
- Xcode (para macOS/iOS)
 
Además se recomienda tener instalado:
 
- Visual Studio Code
- Expo Go (para pruebas en dispositivo físico)
 
---
 
# Instalación

Clonar el repositorio:

```bash
git clone <url-del-repositorio>
```

Instalar dependencias:

```bash
npm install
```

En caso de ser necesario instalar las dependencias de Expo:

 
Clonar el repositorio:
 
```bash
git clone <url-del-repositorio>
```
 
Instalar dependencias:
 
```bash
npm install
```
 
En caso de ser necesario instalar las dependencias de Expo:
 
```bash
npx expo install
```
 
---
 
# Ejecución
 
Iniciar el servidor de desarrollo:
 
```bash
npx run start
```
 
Para Android:
 
```bash
npx react-native run-android
```
 
o utilizando Expo:
 
```bash
npx expo start
```
 
Para iOS:
 
```bash
npx react-native run-ios
```
 
---
 
# Flujo para probar el CRUD
 
## Cliente
 
1. Registrarse con una nueva cuenta.
2. Iniciar sesión.
3. Acceder al menú.
4. Seleccionar un plato.
5. Verificar el mensaje de confirmación del plato seleccionado.
6. Ingresar a la sección **Reservaciones**.
7. Seleccionar una mesa.
8. Elegir la fecha.
9. Elegir la hora.
10. Ingresar el número de celular.
11. Seleccionar la cantidad de comensales.
12. Revisar el resumen de la reservación.
13. Confirmar la reservación.
 
---
 
## Administrador
 
1. Iniciar sesión con la cuenta de administrador.
2. Acceder al submenú **Reservaciones Hechas**.
3. Consultar las reservaciones registradas.
4. Editar una reservación.
5. Eliminar una reservación.
 
---
 
# Estructura del proyecto
 
```
app/
presentation/
 ├── components/
 ├── context/
 ├── data/
 ├── hooks/
 ├── models/
 ├── reducer/
 └── utils/
assets/
```
 
---
 
# Integrantes del grupo
 
- Suyón Lescano Pablo
- Godoy Palacios Joaquín
- Muñoz Sharon
 
---

# Estado del proyecto
Funcionalidades implementadas
Autenticación
Registro de usuarios.
Inicio de sesión.
Cierre de sesión.
Manejo de roles (Administrador y Cliente).
Navbar dinámico según el usuario autenticado.
Menú
Visualización del menú de platos.
Selección de uno o varios platos.
Confirmación visual al agregar platos a la reservación.
Reservaciones
Selección de mesa.
Validación de inicio de sesión antes de reservar.
Validación de selección de platos antes de reservar.
Selección de fecha mediante calendario.
Selección de hora mediante lista desplegable.
Validación de horarios ocupados por mesa.
Ingreso del número de celular.
Selección de cantidad de comensales.
Resumen completo de la reservación.
Confirmación de la reservación.
Limpieza automática del formulario al finalizar la reservación.
Actualización visual del estado de disponibilidad de las mesas.
Visualización de las primeras reservaciones registradas por cada mesa.
Administrador
Acceso exclusivo al submenú Reservaciones Hechas.
Calendario para consultar reservaciones por fecha.
Visualización de las reservaciones registradas.
Arquitectura
Context API para usuarios.
Context API para reservaciones.
useReducer para el CRUD de reservaciones.
Navegación mediante Expo Router.
Componentes reutilizables.
Datos simulados mediante archivos Mock.
Funcionalidades pendientes
Edición de reservaciones.
Eliminación de reservaciones.
Actualización automática de la lista del administrador al crear nuevas reservaciones.
Filtro completo de reservaciones por fecha.
Persistencia de datos (opcional, según la rúbrica).
Mejoras visuales para la interfaz del administrador.
Flujo implementado
Cliente

✔ Registro

✔ Inicio de sesión

✔ Selección de platos

✔ Selección de mesa

✔ Selección de fecha

✔ Selección de hora

✔ Número de celular

✔ Comensales

✔ Resumen

✔ Confirmación

Administrador

✔ Inicio de sesión

✔ Acceso al panel de Reservaciones Hechas

✔ Consulta mediante calendario

🔄 Edición (pendiente)
 
✔ Registro
 
✔ Inicio de sesión
 
✔ Selección de platos
 
✔ Selección de mesa
 
✔ Selección de fecha
 
✔ Selección de hora
 
✔ Número de celular
 
✔ Comensales
 
✔ Resumen
 
✔ Confirmación
 
Administrador
 
✔ Inicio de sesión
 
✔ Acceso al panel de Reservaciones Hechas
 
✔ Consulta mediante calendario
 
🔄 Edición (pendiente)
 
🔄 Eliminación (pendiente)