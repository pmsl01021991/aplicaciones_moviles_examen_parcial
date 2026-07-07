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
- Expo
- TypeScript
- Context API
- React Navigation (Expo Router)
- React Native DateTimePicker

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

Clonar el repositorio.

Luego ejecutar:

```bash
npm install
```

Si el proyecto utiliza Expo:

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

Proyecto en desarrollo.

Actualmente se encuentran implementados:

- Registro de usuarios.
- Inicio de sesión.
- Navbar dinámico.
- Menú de platos.
- Selección de platos.
- Flujo inicial de reservaciones.
- Context API para usuarios y reservaciones.

Las funcionalidades restantes serán incorporadas en las siguientes iteraciones del proyecto.