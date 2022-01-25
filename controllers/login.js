const {response, request} = require("express");
//
let Contenedor = require("./contenedor");
let contenedor = new Contenedor("productos","./file/productos.txt");

const logoutGet = async(req=request,res=response,next)=>{
    let nombreUsuario = req.session.nombreUsuario;
    req.session.destroy(err=>{
        if(err) res.send(JSON.stringify(err));
        res.render("../logout",{nombre:nombreUsuario});
    });
}

const loginPost = async(req=request,res=response,next)=>{
    let nombreUsuario = req.body.txtNombre;
    //console.log(nombreUsuario);
    req.session.nombreUsuario = nombreUsuario;
    res.render("../index", {data:await contenedor.getAll(),nombre:nombreUsuario});
}

module.exports = {
    logoutGet,
    loginPost
}