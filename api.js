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