import app from './app.js';
import {sequelize} from './database/database.js';


// En este punto se arranca la aplicación.
async function main() {
    try {
        // sync: Trata de crear las tablas si no existe.
        // Pero este sync tiene varias formas de crear.
        // {force: true}: he heco cambios, lo que va a hacer es eliminar las tablas y volver a crearlas.
        await sequelize.sync({ force: false });
        app.listen(4000);
        console.log('Server is listening on port', 4000);
    } catch (error) {
        console.log("Unable to connect to the database", error);
    }
}

main();