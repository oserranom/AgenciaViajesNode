import express from 'express';
import router from './routes/index.js'; 
import db from './config/db.js';

//Instanciar express, solo debe haber una instancia a express, de otra forma se reinicia el servidor
const app = express();


//Conectar con la DB
db.authenticate()
    .then(()=>{console.log("Conectado a la DB")})
    .catch(error => console.log(error)); 


//Definir un puerto
const port = process.env.PORT || 4000;

//Habilitar PUG (renderizador de vistas)
app.set('view engine', 'pug'); 

//Obtener el año actual para meter fecha dinámica en el span del footer 
app.use((req, res, next)=>{

    const year = new Date();

    res.locals.currentYear = year.getFullYear();

    res.locals.nombreSitio = "Agencia de viajes"; 

    return next();
});

//Agregar body parser para leer los datos del form
app.use(express.urlencoded({extended: true})); 

//Definir carpeta publica
app.use(express.static('public'));

//Agregar router
app.use('/', router); 


app.listen(port, ()=>{
    console.log(`El servidor está funcionando en el puerto ${port}`);
}); 