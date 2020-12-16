const fs = require ('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw err;
        console.log('La tarea ha sido guardada');
      });
};

const cargarDB = () =>{
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
};

const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();
    return listadoPorHacer; 
};

const getListado = () => {
    cargarDB();
    return listadoPorHacer; 
};

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);

    if (index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false
    }
    
};

const borrar = (descripcion) => {
    cargarDB();
    let size = listadoPorHacer.length;
    listadoPorHacer = listadoPorHacer.filter( tarea => tarea.descripcion !== descripcion);
    if ( size > listadoPorHacer.length ){
        guardarDB();
        return true
    }else{
        return false
    }
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}