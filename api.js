import fs from 'fs';
import path from 'path';

/*¿existe la ruta? boolean*/
export const existePath = (path) => fs.existsSync(path);
/* console.log('existe la ruta?:',existePath('./ejercicios')); */

/* ¿es absoluto? boolean */
export const absolutepath = (userpath) => path.isAbsolute(userpath);
/* console.log('es absoluto?:',absolutepath('./ejercicios')); */

/* convertir a absoluto si no lo es*/
export const toAbsolute = (convert) => path.resolve(convert);
/* console.log('convertir a absoluto:',toAbsolute('./ejercicios')); */

/*¿Es un directorio? boolean*/
export const fileOrDir = (path) => fs.lstatSync(path).isDirectory()
/* console.log('¿Es un directorio?:',fileOrDir('./ejercicios')); */

/* leer directorio */
export const readDir = (dir) => fs.readdirSync(dir);
/* console.log('leer directorio:',readDir('./ejercicios')); */

/* ¿es un archivo .md? */
/* export const mdfile = (file) => path.extname(file) === '.md';
console.log('es un archivo md',readDir('./ejercicios/archivo.md')); */

/* leer archivo usando una promesa */
export const readFile = (read) => {
    return new Promise((resolve, reject) => {
        fs.readFile(read, 'utf-8', (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
};

/* readFile('./ejercicios/archivo.md')
    .then((result) => console.log('leer archivo:',result.toString()))
    .catch((error) => console.error(error)); */

/*  ¿tiene links? */

/* Extraer links*/

/* validar*/