import Usuario from "../models/Usuarios.js";


export const crearUsuario = async (req, res) => {
    
    try {

        const { correo, contrasena } = req.body;
        const usuario = new Usuario({ correo, contrasena});

        // GUARDAR EN BASE DE DATOS
        const newUsuario = await usuario.save();

        res.send('Estas Inscrito Correctamente');

    } catch (error) {
        return res.status(500).json({
            msg:'Algo ha saliido mal al crear un usuario contacte con el backend'
        });
    }
}

export const obtenerUsuarios = async(req, res) => {
    try {
        const totalUsuarios = await Usuario.countDocuments();
        const usuarios = await Usuario.find();

        res.json({
            totalUsuarios,
            usuarios
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Algo ha saliido mal al crear un usuario contacte con el backend'
        })
    }
}

export const obtenerUsuario = async(req,res) => {
    try {
        const {id} = req.params;
        const usuario = await Usuario.findById(id);

        res.json({
            usuario
        });

    } catch (error) {
        return res.status(500).json({
            msg: ''
        })
    }
}

