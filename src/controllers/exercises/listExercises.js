const getDb = require('../../db/getDb');

async function listExercises(req, res) {
    let connection;
    try {
        const user_id = req.user.id;
        const { name, muscleGroup, is_favorite } = req.query;

        let query = `
            SELECT e.*, 
                   CASE WHEN f.user_id IS NOT NULL THEN true ELSE false END AS is_favorite
            FROM exercises e
            LEFT JOIN favorites f ON e.id = f.exercise_id AND f.user_id = ?
        `;

        const queryParams = [user_id];

        if (name || muscleGroup || is_favorite !== undefined) {
            query += ` WHERE`;

            if (name) {
                query += ` (e.name LIKE ? OR e.description LIKE ?)`;
                queryParams.push(`%${name}%`, `%${name}%`);
            }

            if (name && (muscleGroup || is_favorite !== undefined)) {
                query += ` AND`;
            }

            if (muscleGroup) {
                query += ` (e.muscleGroup LIKE ?)`;
                queryParams.push(`%${muscleGroup}%`);
            }

            if (is_favorite !== undefined) {
                query += ` (f.user_id IS NOT NULL AND f.user_id = ?)`;
                queryParams.push(user_id);
            }
        }

        connection = await getDb();

        const [results] = await connection.query(query, queryParams);

        if (results.length >= 1) {
            return res.status(200).json({
                status: 'ok',
                message: 'Listado de ejercicios',
                data: results,
            });
        } else {
            return res.status(404).json({
                status: 'error',
                message: 'No se encontraron ejercicios',
            });
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json('Error en la consulta a la base de datos');
    } finally {
        if (connection) connection.release();
    }
}

module.exports = listExercises;
