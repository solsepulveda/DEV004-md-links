import fs from 'fs';
import path from 'path';

/*¿existe la ruta?*/
export const existePath = (path) => fs.existsSync(path);
console.log(existePath('./ejercicios'));

/* ¿es absoluto? */
export const absolutepath = (userpath) => path.isAbsolute(userpath);
console.log(absolutepath('\Desktop\mdLinks\DEV004-md-links\ejercicios'));

/* convertir a absoluto si no lo es*/
export const toAbsolute = (userabs) => path.resolve(userabs);
console.log(toAbsolute('./ejercicios'));

/* leer directorio */
export const leerCarpeta = (carpeta) => fs.readdirSync(carpeta)
console.log(leerCarpeta('./ejercicios'));

/* leer archivos */
export const leerArchivo = (leer) =>  fs.readFile(leer, (error,data)=>{
    if(error){
        console.log(error)
    } console.log(data.toString());
    });
console.log(leerArchivo('./ejercicios/archivo.md'));

/* ¿es absoluto? boolean */
export const isAbsolute = (userpath) => path.isAbsolute(userpath);
/* console.log('es absoluto?:',isAbsolute('./ejercicios')); */





/* leer directorio */
/* export const leerCarpeta = (carpeta) => fs.readdirSync(carpeta, (error,archivos) => {
    archivos.forEach(archivo=>{
        console.log(archivo);
    });
});
console.log(leerCarpeta('./ejercicios')); */
/* export const existePath = (path) => fs.existsSync(path, (exists)=>{
    if(exists){
        console.log('file exist');
    }
});
console.log(existePath('./ejercicios')); */



/* leer directorios */
/* fs.readdir('./ejercicios', (error,archivos) => {
    archivos.forEach(archivo=>{
        console.log(archivo);
    });
}); */




/* fs.readFile('./ejercicios/archivo.md', function(error,data){
    if(error){
        console.log(error)
    } console.log(data.toString());
    }); */

/* function leerArchivo(leer){
    fs.readFile(leer, function(error,data){
        if(error){
            console.log(error)
        } console.log(data.toString());
        });
};
console.log(leerArchivo('./ejercicios/archivo.md')); */

/* leer archivos */
/* export const leerArchivo = (leer) =>  fs.readFile(leer, (error,data)=>{
    if(error){
        console.log(error)
    } console.log(data.toString());
    });
console.log(leerArchivo('./ejercicios/archivo.md')); */