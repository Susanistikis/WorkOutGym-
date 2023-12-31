// Routes exercises
const express = require('express');
const router = express.Router();
const path = require('path');
// Rutas de usuarios
// Importamos las funciones controladoras requeridas de los ususarios.
const { authUser, userExists, isAdmin } = require('../middlewares');
const {
    loginUserController,
    registerController,
    getOwnUserController,
    updateProfileController,
    getUserProfileController,
    listUsers,
    updateUserRole,
} = require('../controllers/usersControllers');
// Ruta para el login de un usuario.
router.post('/users/login', loginUserController);
// Ruta para registrar un nuevo usuario.
router.post('/users/register', registerController);
// Obtener perfil privado de un usuario.
router.get('/users', authUser, userExists, getOwnUserController);
// Ruta para obtener el perfil de un usuario por su ID
router.get(
    '/users/profile/:id',
    authUser,
    userExists,
    getUserProfileController
);
// Actualizar el perfil privado de un usuario.
router.put('/users/profile', authUser, userExists, updateProfileController);
router.use(
    '/uploads',
    express.static(path.join(__dirname, '..', '..', process.env.UPLOADS_DIR))
);
// Mostar la lista de todos los usuarios.
router.get('/users/listUsers/', authUser, userExists, isAdmin, listUsers);

// El usuario admin puede cambiar el rol de un usuario
router.put(
    '/users/updateUserRole/:id',
    authUser,
    userExists,
    isAdmin,
    updateUserRole
);
//Rutas de ejercicios
// Importamos las funciones controladoras requeridas de los ejercicios.
const {
    addNewExercise,
    deleteExercise,
    favoriteExercise,
    listExercises,
    getExerciseInfo,
    recommendedExercise,
    updateExerciseController,
} = require('../controllers/exercises');
// Nuevo ejercicio
router.post(
    '/exercises/newExercise',
    authUser,
    userExists,
    isAdmin,
    addNewExercise
);
// Eliminar ejercicio
router.delete(
    '/exercises/deleteExercise/:id',
    authUser,
    userExists,
    isAdmin,
    deleteExercise
);
// Marcar un ejercicio como favorito o desmarcarlo.
router.post(
    '/exercises/favoriteExercise/',
    authUser,
    userExists,
    favoriteExercise
);
// Marcar un ejercicio como recomendado o desmarcarlo.
router.post(
    '/exercises/recommendedExercise/',
    authUser,
    userExists,
    recommendedExercise
);
// lista de ejercicios y filtrar según parametros.
router.get('/exercises/listExercises', authUser, userExists, listExercises);
// Obtener información de los ejercicios.
router.get(
    '/exercises/infoExercise/:id',
    authUser,
    userExists,
    getExerciseInfo
);
// Editar un ejercicio.
router.put(
    '/exercises/updateExerciseController/:id',
    authUser,
    userExists,
    isAdmin,
    updateExerciseController
);
module.exports = router;
