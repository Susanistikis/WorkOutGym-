# WorkOutGym 💪🏋️‍♀️

¡Bienvenido a WorkOutGym, la aplicación definitiva para gestionar tus entrenamientos en el gimnasio! 💪🏋️‍♀️

## Descripción 📝

Implementar una API que permita publicar ejercicios para la gestión de los mismos en un gimnasio.

**Hemos dado vida a un emocionante proyecto basado en Node.js**, donde hemos utilizado el potente framework Express.js como columna vertebral para crear una sólida infraestructura de aplicaciones web. Este proyecto es un testimonio del poder y la versatilidad de la tecnología Node.js.

**Nuestra base de datos MySQL** actúa como el cofre seguro donde almacenamos y gestionamos los datos esenciales de nuestra aplicación. Cada bit de información se cuida y se accede con precisión gracias a esta robusta base de datos.

**Para probar y validar nuestras rutas y endpoints**, hemos confiado en la confiable herramienta Postman. Con su ayuda, hemos garantizado que nuestras API funcionen sin problemas y cumplan con las expectativas.

**El código fuente de este proyecto ha cobrado vida en Visual Studio Code**, un entorno de desarrollo de primer nivel que ha facilitado la escritura, la depuración y la administración de nuestro código de manera eficiente.

**Hemos organizado meticulosamente nuestras dependencias** utilizando herramientas de gestión de paquetes como npm o Yarn, asegurándonos de que todas las bibliotecas y módulos necesarios estén disponibles y sean fácilmente mantenibles.

**Nuestro lenguaje de programación de elección es el elegante JavaScript**, que nos ha permitido expresar nuestras ideas y lógica de manera clara y concisa, llevando a cabo todas las operaciones de este proyecto con una fluidez asombrosa.

**Puedes explorar este apasionante proyecto en GitHub**, donde reside en su esplendor, disponible para que el mundo lo descubra. Visita nuestro repositorio en [GitHub](https://github.com/Susanistikis/Proyecto02) para sumergirte en el código, contribuir y seguir su evolución.

¡Esperamos que lo disfrutes tanto como nosotros disfrutamos creándolo!

## Usuarios Cliente 👥

Pueden registrarse o hacer login en la aplicación, explorar la lista de ejercicios disponibles y ver sus detalles como nombre, descripción o grupo muscular, también pueden marcar sus ejercicios como favoritos para verlos después o filtrar ejercicios según necesiten.

-   Pueden ver el listado de los ejercicios y entrar en el detalle de los mismos.
-   Podrán filtrarlos por algunas características (por ejemplo, tipología o grupo muscular).
-   Podrán poner o quitar un like a un ejercicio.

## Administrador 👤

-   Todas las funcionalidades de usuario cliente.
-   Será el único capaz de añadir un nuevo ejercicio con los siguientes detalles:
    -   Nombre
    -   Descripción
    -   Foto
    -   Tipología
    -   Grupo muscular.

## Opcional 🌟

-   Los usuarios y trabajadores pueden seleccionar algunos ejercicios para ponerlos entre los favoritos, útil para poder organizar una clase de entrenamiento.

Por supuesto, aquí están las tablas de la base de datos siguiendo el formato que proporcionaste:

### Bases de Datos 🗄️

Claro, aquí está la información en formato de tabla:

### **Tabla de Usuarios**

| Campo        | Tipo         | Descripción                                                                                       |
| ------------ | ------------ | ------------------------------------------------------------------------------------------------- |
| id           | INT UNSIGNED | Clave principal y autoincremental para identificar de manera única a cada usuario.                |
| email        | VARCHAR(100) | El correo electrónico del usuario (no puede estar en blanco y debe ser único).                    |
| password     | VARCHAR(100) | Contraseña hash del usuario.                                                                      |
| name         | VARCHAR(30)  | El nombre del usuario.                                                                            |
| lastName     | VARCHAR(100) | El apellido del usuario.                                                                          |
| birthDate    | DATETIME     | La fecha de nacimiento del usuario.                                                               |
| address      | VARCHAR(200) | La dirección del usuario.                                                                         |
| phone_number | VARCHAR(20)  | El número de teléfono del usuario.                                                                |
| biography    | TEXT         | Una breve biografía o descripción del usuario.                                                    |
| photo        | VARCHAR(100) | El nombre del archivo de la foto de perfil del usuario.                                           |
| userRole     | ENUM         | El rol del usuario, que puede ser "admin" o "cliente" (valor predeterminado: "cliente").          |
| created_at   | TIMESTAMP    | Fecha y hora de creación del registro (valor predeterminado: fecha y hora actual).                |
| updated_at   | TIMESTAMP    | Fecha y hora de la última actualización del registro (valor predeterminado: fecha y hora actual). |

### **Tabla de Ejercicios**

| Campo       | Tipo         | Descripción                                                                                                |
| ----------- | ------------ | ---------------------------------------------------------------------------------------------------------- |
| id          | INT UNSIGNED | Clave principal y autoincremental para identificar de manera única a cada ejercicio.                       |
| name        | VARCHAR(50)  | Nombre del ejercicio.                                                                                      |
| photoName   | VARCHAR(100) | Nombre del archivo de la foto del ejercicio.                                                               |
| description | TEXT         | Descripción del ejercicio.                                                                                 |
| muscleGroup | ENUM         | Grupo muscular al que pertenece el ejercicio (valores posibles: 'Tren-superior', 'Tren-inferior', 'core'). |
| created_at  | TIMESTAMP    | Fecha y hora de creación del registro (valor predeterminado: fecha y hora actual).                         |
| updated_at  | TIMESTAMP    | Fecha y hora de la última actualización del registro (valor predeterminado: fecha y hora actual).          |

### **Tabla de Favoritos**

| Campo       | Tipo         | Descripción                                                                                                              |
| ----------- | ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| id          | INT UNSIGNED | Clave principal y autoincremental para identificar de manera única cada entrada en la tabla de favoritos.                |
| user_id     | INT UNSIGNED | Clave externa que se relaciona con la tabla de usuarios para identificar al usuario que marcó un ejercicio como favorito |
| exercise_id | INT UNSIGNED | Clave externa que se relaciona con la tabla de ejercicios para identificar el ejercicio marcado como favorito.           |
| created_at  | TIMESTAMP    | Fecha y hora de creación del registro (valor predeterminado: fecha y hora actual).                                       |

### **Tabla de Recomendados**

| Campo       | Tipo         | Descripción                                                                                                     |
| ----------- | ------------ | --------------------------------------------------------------------------------------------------------------- |
| id          | INT UNSIGNED | Clave principal y autoincremental para identificar de manera única cada entrada en la tabla de recomendados.    |
| user_id     | INT UNSIGNED | Clave externa que se relaciona con la tabla de usuarios para identificar al usuario que recomendó un ejercicio. |
| exercise_id | INT UNSIGNED | Clave externa que se relaciona con la tabla de ejercicios para identificar el ejercicio recomendado.            |
| created_at  | TIMESTAMP    | Fecha y hora de creación del registro (valor predeterminado: fecha y hora actual).                              |

## Para arrancar nuestro proyecto de Node.js es necesario:

-   Clona el repositorio desde GitHub y navega al directorio del proyecto en tu terminal.
-   Configura la base de datos MySQL y crea la base de datos.
-   Actualiza las credenciales en el archivo .env segun tus necesidades. (LocalHost, port...)
-   Usar el comando en el terminal npm install, para instalar todas las dependencias necesarias.
-   Arrancar el servidor con npm run dev.

## Extensiones NPM Usadas 📦

### Dependencias

### Dependencias de desarrollo

-   "eslint": "^8.45.0",
-   "fetch": "^1.1.0",
-   "nodemon": "^3.0.1",
-   "safe-buffer": "^5.2.1",
-   "safer-buffer": "^2.1.2"

### Dependencias

-   "bcrypt": "^5.1.0",
-   "cors": "^2.8.5",
-   "dotenv": "^16.3.1",
-   "express": "^4.18.2",
-   "express-fileupload": "^1.4.0",
-   "jsonwebtoken": "^9.0.1",
-   "morgan": "^1.10.0",
-   "mysql2": "^3.5.2",
-   "prettier": "^1.1.0",
-   "sharp": "^0.32.4",
-   "joi": "^17.9.2",
-   "uuid": "^9.0.0"

## Archivo principal

-   `app.js`

### CORS 🌐

Si deseas mostrar imágenes almacenadas en el directorio "uploads/fotos", puedes utilizar la siguiente URL como ejemplo para acceder a ellas:

http://localhost:8000/example.jpg"

Recuerda reemplazar "example.jpg" con el nombre real de la imagen que deseas mostrar. Esto permitirá que las imágenes se carguen correctamente desde el directorio especificado en tu servidor.

Claro, aquí están todos los endpoints corregidos y los que faltan según la descripción que proporcionaste:

### Endpoints de usuarios

1. POST - [/users/register] - Crea un nuevo usuario pidiendo todos los datos incluida la foto (body formData).

    - Ruta: http://localhost:8000/users/register

2. POST - [/users/login] - Logea a un usuario retornando un token, email, avatar y rol.

    - Ruta: http://localhost:8000/users/login

3. PUT - [/users] - Devuelve los datos del usuario del token (TOKEN).

    - Ruta: http://localhost:8000/users

4. PUT - [/users/profile] - Actualiza el perfil del usuario con detalles adicionales (TOKEN).

    - Ruta: http://localhost:8000/users/profile

5. GET - [/users/profile/:id] - Obtiene los detalles del perfil de un usuario por su ID (TOKEN).

    - Ruta: http://localhost:8000/users/profile/:id

6. POST - [/users/listUsers/] - Muestra la lista de todos los usuarios (TOKEN admin).

    - Ruta: http://localhost:8000/users/listUsers/

7. GET - [/users/updateUserRole/:id] - El usuario admin puede cambiar el rol de un usuario (TOKEN admin).
    - Ruta: http://localhost:8000/users/updateUserRole/:id

### Endpoints de Ejercicios

1. POST - [/exercises/newExercise] - Permite al administrador subir un ejercicio con foto (body formData). (TOKEN admin)

    - Ruta: http://localhost:8000/exercises/newExercise

2. DELETE - [/exercises/deleteExercise/:id] - Permite al administrador eliminar un ejercicio (TOKEN admin)

    - Ruta: http://localhost:8000/exercises/deleteExercise/:id

3. PUT - [/exercises/updateExerciseController/:id] - Permite al administrador actualizar la información de un ejercicio (TOKEN admin).

    - Ruta: http://localhost:8000/exercises/updateExerciseController/:id

4. POST - [/exercises/recommendedExercise/] - Permite a un usuario marcar o desmarcar un ejercicio como recomendado. (TOKEN)

    - Ruta: http://localhost:8000/exercises/recommendedExercise/

5. POST - [/exercises/favoriteExercise/] - Permite a un usuario dar o quitar de favoritos a un ejercicio (tenerlo o no en preferidos). (TOKEN)

    - Ruta: http://localhost:8000/exercises/favoriteExercise/

6. GET - [/exercises/listExercises] - Devuelve todos los ejercicios con diferentes métodos de filtrado o mostrarlos todos. (TOKEN)

    - Ruta: http://localhost:8000/exercises/listExercises


7. GET - [/exercises/infoExercise/:id] - Retorna información de un ejercicio (incluida la descripción). (TOKEN)

    - Ruta: http://localhost:8000/exercises/infoExercise/:id



