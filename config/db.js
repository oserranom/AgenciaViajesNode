import Sequelize from 'sequelize';
import dotenv from 'dotenv'; //Variables de entorno
dotenv.config() //Variables de entorno

//Se configura la conexión a la DB, en el index se define la promesa que devuelva esta conexión 
//Se utilizan variables de entorno del archivo .env por seguridad

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool:{
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    },
    operatorAliases: false
});

export default db; 