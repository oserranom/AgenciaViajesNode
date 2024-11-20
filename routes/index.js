import express from 'express';
import { paginaInicio, paginaNosotros, paginaViajes, paginaOpiniones, paginaDetalleViaje } from '../controllers/paginasController.js';
import { guardarOpinion } from '../controllers/opinionController.js';

const router = express.Router();

router.get('/', paginaInicio); 

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

//Routing para pags del detalle de cada viaje, se utiliza ruta comodín:
router.get('/viajes/:slug', paginaDetalleViaje);


router.get('/opiniones', paginaOpiniones); 

//Routing opiniones form
router.post('/opiniones', guardarOpinion)




export default router; 