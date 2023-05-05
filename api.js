import { match } from 'assert';
import fs, { read } from 'fs';
import path from 'path';

/*¿existe la ruta? boolean*/
export const pathExist = (path) => fs.existsSync(path);
/* console.log('existe la ruta?:',pathExist('./ejercicios')); */

/*se convertirá a relativa - boolean*/
export const isAbsolute = (abs) => path.isAbsolute(abs) ? abs : path.resolve(abs);
/* console.log(absOrRel('./ejercicios/archivo.md')); */

/*¿Es un directorio? boolean*/
export const isdir= (path) => fs.lstatSync(path).isDirectory()
/* console.log('¿Es un directorio?:',fileOrDir('./ejercicios')); */

/* leer directorio - se convertirá en relativo*/
export const readDir = (dir) => {
  const files = fs.readdirSync(dir);
  return files.map((file) => path.resolve(file));
};
/* console.log('leer directorio:',readDir('./ejercicios')); */

/* ¿es un archivo .md? */
export const ismdFile = (file) => path.extname(file) === '.md';
/* console.log(ismdFile('./ejercicios/archivo.md')) */

/* leer archivo y extraer los links*/
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

readFile('./ejercicios/archivo2.md')
    .then((result) => {
      const regex = /\[([^\]]+)]\((https?:\/\/[^\s)]+)\)/gi;
      const content = result.toString()
      const matches = content.matchAll(regex)
      for (const match of matches) {
        console.log(
          match[1],
          match[2],
        );
      }
    })
    .catch((error) => console.error(error)); //poner no hay links


/* validar*/


