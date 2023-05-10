import fs, { read, readFile } from 'fs';
import path from 'path';

export const route = process.argv[2];

/*¿existe la ruta? boolean*/
export const pathExist = (path) => fs.existsSync(path); //error: puede no existir path
export const isthisabs = (isA) => path.isAbsolute(isA); // no hay error
export const isdir= (path) => fs.lstatSync(path).isDirectory() // no hay error
export const toabsolute = (route) => path.resolve(route); // no hay error
export const ismdFile = (file) => path.extname(file) === '.md'; //puede haber error

export const readAll = {
    readFile: (read) => {
        return new Promise((resolve, reject) => {
            fs.readFile(read, 'utf-8', (error, data) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(data);
                }
            });
        });
    },

    getLinks: (result) => {
        const regex = /\[([^\]]+)]\((https?:\/\/[^\s)]+)\)/gi;
        const content = result.toString();
        const matches = content.matchAll(regex);
        const data = [];
        for (const match of matches) {
          const route = process.argv[2];
          const hola = toabsolute(route)
          data.push({text:match[1], href: match[2], file: hola});
        }
        return data
      }
    }

    readAll.readFile('./ejercicios/archivo.md')
      .then((result) => {
        const links = readAll.getLinks(result);
        /* console.log(links); */
      })
      .catch((error) => console.error(error));




