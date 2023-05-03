import fs from 'fs';
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

/* leer archivo*/
/* export const readFile = (read) => {
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

readFile('./ejercicios/archivo.md')
    .then((result) => console.log('leer archivo:',result.toString()))
    .catch((error) => console.error(error)); */


/* intentando aprender a buscar link  */
/* export const mdfile = (md) => ismdFile(md) ? readFile(md) :  'Invalid format';
console.log(mdfile('./ejercicios/archivo.md')); */
/* var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
var regex = new RegExp(expression);

var check = [
  'https://es.wikipedia.org/wiki/D%C3%ADa_de_la_Madre'
];

check.forEach(function(entry) {
  let match = entry.match(regex);
  if (match) {
    console.log('sí');
  } else {
   console.log('no');
  }
}); */



/* Extraer links*/

/* validar*/


