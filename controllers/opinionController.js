import { Opinion } from "../models/Opiniones.js";

const guardarOpinion = async (req, res) => {

    //req.body para recuperar contenido de los campos que envía el usuario
    //Validar campos

    const { nombre, email, mensaje } = req.body; 

    const errores = [];

    if(nombre.trim() === ""){
        errores.push("Nombre vacío"); 
    }

    if(email.trim() === ""){
        errores.push("Email vacío"); 
    }

    if(mensaje.trim() === ""){
        errores.push("Mensaje vacío"); 
    }

    if(errores.length > 0){

        //Consultar opiniones existentes, requerido para renderizar opiniones cuando hay errores
        const opiniones = await Opinion.findAll();

        //Mostrar errores en la vista
        res.render('opiniones', {
            pagina: 'Opiniones',
            errores,
            nombre,
            email,
            mensaje,
            opiniones
        }); 

    } else {
        //Almacenar en la base de datos 
        try {
            await Opinion.create({
                nombre,
                email,
                mensaje
            }); 

            //Instrucción de redirección necesaria para no dejar la parte de opiniones recargando continuamente 
            res.redirect('/opiniones'); 

        } catch (error) {
            console.log(error); 
        }

    }
}


export {
    guardarOpinion
}