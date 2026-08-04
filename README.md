# Restaurante El Buen Sabor - Aplicación Móvil

## Descripción del proyecto

**Restaurante El Buen Sabor** es una aplicación móvil desarrollada con React Native y Expo, orientada a la gestión de reservaciones de un restaurante.

La aplicación permite que los clientes puedan registrarse, iniciar sesión, consultar el menú disponible, seleccionar platos y realizar una reservación indicando la mesa, fecha, hora, número de celular y cantidad de comensales.

Asimismo, la aplicación cuenta con un rol de **Administrador**, que dispone de funcionalidades adicionales para consultar, editar y eliminar las reservaciones registradas.

El proyecto utiliza **Firebase Firestore** como servicio de persistencia de datos en la nube, permitiendo almacenar y consultar la información utilizada por la aplicación.

---

## Core de negocio elegido

El core de negocio corresponde a la **gestión de reservaciones para un restaurante**.

La aplicación permite cubrir principalmente los siguientes procesos:

* Registro de clientes.
* Inicio y cierre de sesión.
* Consulta del menú del restaurante.
* Selección de platos.
* Selección de mesas.
* Registro de reservaciones.
* Edición de reservaciones.
* Consulta de reservaciones.
* Eliminación de reservaciones.
* Consulta de disponibilidad de mesas y horarios.
* Manejo de roles de cliente y administrador.

---

# Integrantes del equipo

* Suyón Lescano, Pablo Martin
* Godoy Palacios, Antonio Joaquin
* Muñoz Corales, Sharon Christie 

---

# Tecnologías utilizadas

El proyecto utiliza las siguientes tecnologías:

* React Native
* Expo SDK 54
* TypeScript
* Expo Router
* Firebase
* Firebase Firestore
* Context API
* useReducer
* NativeWind

## Librerías principales

Entre las principales librerías utilizadas se encuentran:

* Firebase
* Expo Router
* React Navigation
* React Native Calendars
* React Native DateTimePicker
* React Native Picker
* React Native Safe Area Context
* React Native Gesture Handler
* React Native Reanimated
* React Native SVG
* Expo Vector Icons
* Expo Status Bar
* NativeWind

---

# Requisitos del entorno

Antes de ejecutar el proyecto es necesario contar con:

* Node.js, preferiblemente una versión LTS.
* npm.
* Visual Studio Code u otro editor compatible.
* Conexión a internet para acceder a Firebase Firestore.

Para ejecutar la aplicación en Android se puede utilizar:

* Expo Go en un dispositivo físico.

o

* Android Studio con un emulador Android configurado.

Para desarrollo y ejecución nativa también puede ser necesario:

* JDK 17 o superior.
* Android Studio.

---

# Pasos de instalación

## 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
```

## 2. Ingresar al proyecto

```bash
cd <nombre-del-proyecto>
```

## 3. Instalar las dependencias

```bash
npm install
```

## 4. Verificar las dependencias de Expo

En caso de ser necesario:

```bash
npx expo install
```

## 5. Configuración de Firebase

El proyecto utiliza Firebase Firestore para la persistencia de información.

Se debe verificar que la configuración de Firebase utilizada por la aplicación se encuentre correctamente definida en el archivo correspondiente de configuración de Firebase.

---

# Pasos de ejecución

Para iniciar el proyecto ejecutar:

```bash
npm run start
```

Una vez iniciado Expo, se puede ejecutar la aplicación mediante:

* Expo Go desde un dispositivo físico.
* Desarrollo local compatible con Expo.
* Emulador de Android.

En caso de utilizar Android mediante Expo:

```bash
npm run start
```

Posteriormente se puede seleccionar la opción correspondiente para ejecutar el proyecto en Android.

---

# Estructura del proyecto

El proyecto se encuentra organizado principalmente de la siguiente manera:

```text
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
firebaseConfig.ts
package.json
```

### app/

Contiene las diferentes pantallas y rutas de navegación de la aplicación utilizando **Expo Router**.

### presentation/components/

Contiene componentes reutilizables utilizados en las diferentes pantallas de la aplicación.

### presentation/context/

Contiene los Context utilizados para compartir información entre diferentes componentes de la aplicación.

### presentation/data/

Contiene datos y estructuras auxiliares utilizadas por la aplicación.

### presentation/hooks/

Contiene hooks personalizados utilizados para manejar determinadas funcionalidades.

### presentation/models/

Contiene las interfaces y modelos utilizados para representar los datos de la aplicación.

### presentation/reducer/

Contiene la lógica relacionada con `useReducer` utilizada en el manejo del estado de las reservaciones.

### presentation/utils/

Contiene funciones auxiliares utilizadas por diferentes partes de la aplicación.

### assets/

Contiene los recursos gráficos utilizados por la aplicación.

### firebaseConfig.ts

Contiene la configuración necesaria para establecer la conexión entre la aplicación y Firebase.

---

# Funcionalidades implementadas

## Autenticación

Actualmente se encuentran implementadas las siguientes funcionalidades:

* Registro de usuarios.
* Inicio de sesión.
* Cierre de sesión.
* Manejo de roles de usuario.
* Rol Administrador.
* Rol Cliente.
* Navegación y opciones disponibles de acuerdo con el usuario autenticado.

---

## Menú

La aplicación permite:

* Visualizar el menú de platos.
* Seleccionar platos.
* Seleccionar uno o varios platos para una reservación.
* Mostrar una confirmación visual cuando un plato es seleccionado.
* Utilizar la información seleccionada posteriormente durante el proceso de reservación.

---

## Reservaciones

El módulo de reservaciones permite:

* Validar que el cliente haya iniciado sesión antes de realizar una reservación.
* Validar que se hayan seleccionado platos.
* Seleccionar una mesa.
* Seleccionar una fecha mediante calendario.
* Seleccionar una hora.
* Verificar los horarios ocupados de una mesa.
* Ingresar un número de celular.
* Seleccionar la cantidad de comensales.
* Visualizar el resumen de la reservación.
* Confirmar una reservación.
* Registrar la reservación.
* Limpiar la información del formulario después de completar el proceso.
* Actualizar visualmente la disponibilidad de las mesas.
* Consultar las reservaciones almacenadas.

---

## Administrador

El usuario con rol Administrador puede:

* Iniciar sesión.
* Acceder a las opciones exclusivas del administrador.
* Ingresar al módulo **Reservaciones Hechas**.
* Consultar las reservaciones registradas.
* Consultar reservaciones mediante calendario.
* Visualizar información de las reservaciones.
* Editar reservaciones existentes.
* Eliminar reservaciones.

---

# CRUD de reservaciones

La aplicación implementa las operaciones principales de un CRUD para administrar las reservaciones.

## CREATE - Crear

El cliente puede registrar una nueva reservación después de:

1. Iniciar sesión.
2. Seleccionar uno o varios platos.
3. Seleccionar una mesa.
4. Seleccionar una fecha.
5. Seleccionar una hora.
6. Ingresar su número de celular.
7. Indicar la cantidad de comensales.
8. Revisar el resumen.
9. Confirmar la reservación.

Al confirmar el proceso, la reservación es registrada utilizando **Firebase Firestore**.

---

## READ - Consultar

Las reservaciones almacenadas pueden ser recuperadas desde Firestore y mostradas dentro de la aplicación.

El Administrador puede acceder al módulo **Reservaciones Hechas** para consultar las reservaciones registradas.

También se realizan consultas para determinar la disponibilidad de mesas y horarios.

---

## UPDATE - Actualizar

Desde el módulo correspondiente del Administrador se puede modificar una reservación existente.

Los cambios realizados son actualizados en **Firebase Firestore**, permitiendo mantener actualizada la información almacenada.

---

## DELETE - Eliminar

El Administrador puede eliminar una reservación existente.

Al confirmar la eliminación, el registro correspondiente es eliminado de **Firebase Firestore**.

---

# Cómo probar el CRUD con Firestore

Para comprobar el funcionamiento del CRUD se puede realizar el siguiente procedimiento.

## 1. Probar CREATE

1. Iniciar sesión como Cliente.
2. Acceder al menú.
3. Seleccionar uno o varios platos.
4. Acceder al módulo de reservaciones.
5. Seleccionar una mesa.
6. Seleccionar fecha y hora.
7. Completar los datos solicitados.
8. Confirmar la reservación.
9. Verificar que la reservación haya sido registrada.

---

## 2. Probar READ

1. Iniciar sesión como Administrador.
2. Acceder al módulo **Reservaciones Hechas**.
3. Consultar las reservaciones registradas.
4. Comprobar que la reservación creada anteriormente aparezca en la aplicación.

---

## 3. Probar UPDATE

1. Iniciar sesión como Administrador.
2. Acceder a **Reservaciones Hechas**.
3. Seleccionar una reservación existente.
4. Utilizar la opción de edición.
5. Modificar la información disponible.
6. Guardar los cambios.
7. Comprobar que la información actualizada aparezca correctamente.

---

## 4. Probar DELETE

1. Iniciar sesión como Administrador.
2. Acceder a **Reservaciones Hechas**.
3. Seleccionar una reservación existente.
4. Utilizar la opción de eliminar.
5. Confirmar la eliminación.
6. Comprobar que la reservación ya no aparezca entre los registros disponibles.

---

# Persistencia de datos con Firebase Firestore

El proyecto utiliza **Firebase Firestore** como mecanismo de persistencia de datos.

Firestore permite que la información utilizada por la aplicación pueda mantenerse almacenada en la nube y ser recuperada posteriormente.

La aplicación realiza operaciones sobre Firestore para procesos como:

* Registro y consulta de información.
* Registro de reservaciones.
* Consulta de reservaciones.
* Actualización de reservaciones.
* Eliminación de reservaciones.
* Consulta de disponibilidad de horarios y mesas.

De esta manera, la información no depende únicamente del estado temporal de la aplicación.

---

# Cómo probar la persistencia con Firestore

Para comprobar la persistencia de los datos:

1. Iniciar la aplicación.
2. Iniciar sesión como Cliente.
3. Registrar una nueva reservación.
4. Confirmar la reservación.
5. Cerrar o reiniciar la aplicación.
6. Volver a iniciar la aplicación.
7. Iniciar sesión nuevamente.
8. Consultar las reservaciones registradas.
9. Verificar que la información registrada anteriormente continúa disponible.

Adicionalmente, los registros pueden verificarse directamente desde **Firebase Firestore**, comprobando que la información creada desde la aplicación se encuentre almacenada.

---

# Comunicación con servicios externos

El proyecto actualmente utiliza **Firebase Firestore** como servicio externo en la nube para almacenar, consultar, modificar y eliminar la información utilizada por la aplicación.

La comunicación con Firestore se realiza mediante las herramientas proporcionadas por Firebase para React Native.

Debido a que la aplicación ya utiliza Firestore para gestionar la información necesaria para sus procesos principales, actualmente no se ha incorporado una API REST externa adicional.

---

# Flujo principal de la aplicación

## Cliente

```text
Registro
   ↓
Inicio de sesión
   ↓
Consulta del menú
   ↓
Selección de platos
   ↓
Selección de mesa
   ↓
Selección de fecha
   ↓
Selección de hora
   ↓
Ingreso de celular
   ↓
Cantidad de comensales
   ↓
Resumen de reservación
   ↓
Confirmación
   ↓
Registro en Firestore
```

## Administrador

```text
Inicio de sesión
   ↓
Panel del Administrador
   ↓
Reservaciones Hechas
   ↓
Consulta de reservaciones
   ↓
Editar / Eliminar
   ↓
Actualización en Firestore
```

---

# Funcionalidades implementadas hasta la fecha

### Cliente

* ✔ Registro.
* ✔ Inicio de sesión.
* ✔ Cierre de sesión.
* ✔ Consulta del menú.
* ✔ Selección de platos.
* ✔ Selección de mesa.
* ✔ Selección de fecha.
* ✔ Selección de hora.
* ✔ Ingreso de número de celular.
* ✔ Selección de cantidad de comensales.
* ✔ Resumen de reservación.
* ✔ Confirmación de reservación.
* ✔ Registro de información en Firestore.

### Administrador

* ✔ Inicio de sesión.
* ✔ Acceso al módulo de Reservaciones Hechas.
* ✔ Consulta de reservaciones.
* ✔ Consulta mediante calendario.
* ✔ Edición de reservaciones.
* ✔ Eliminación de reservaciones.
* ✔ Persistencia de los cambios mediante Firestore.

### Arquitectura y manejo de datos

* ✔ Context API.
* ✔ useReducer.
* ✔ Expo Router.
* ✔ Componentes reutilizables.
* ✔ Firebase.
* ✔ Firebase Firestore.
* ✔ Persistencia de datos en la nube.

---

# Funcionalidades pendientes

El proyecto cuenta actualmente con el flujo principal de reservaciones y las operaciones CRUD implementadas.

Como mejoras futuras se consideran:

* Mejorar los filtros de búsqueda y consulta de reservaciones.
* Mejorar la interfaz visual del panel del Administrador.
* Implementar validaciones adicionales en los formularios.
* Mejorar el manejo y presentación de mensajes de error.
* Incorporar indicadores de carga durante las consultas a Firestore.
* Continuar optimizando la experiencia de usuario.
* Realizar pruebas adicionales de los diferentes flujos de la aplicación.


# Estado actual del proyecto

El proyecto cuenta con el flujo principal del Cliente y del Administrador implementado.

La aplicación permite realizar el proceso completo de una reservación y dispone de operaciones para **crear, consultar, actualizar y eliminar reservaciones**.

Asimismo, se ha incorporado **Firebase Firestore** como servicio de persistencia en la nube, permitiendo conservar y administrar la información utilizada por la aplicación.
