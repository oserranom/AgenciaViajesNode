import Sequelize from 'sequelize';
import db from '../config/db.js';


//Se definen las columas de la db que nos vamos a traer, y el tipo de dato con sintaxis sequelize 

export const Opinion = db.define('opiniones', {
    nombre: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
}); 