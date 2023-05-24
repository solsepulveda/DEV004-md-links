import fs, { link, read, readFile } from 'fs';
import path from 'path';
import fetch from 'node-fetch';

const route = process.argv[2];

/*¿existe la ruta? boolean*/
export const pathExist = (path) => fs.existsSync(path);
export const isthisabs = (isA) => path.isAbsolute(isA);
export const isdir= (path) => fs.lstatSync(path).isDirectory()
export const toabsolute = (route) => path.resolve(route);
export const ismdFile = (file) => path.extname(file) === '.md';

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
          data.push({text:match[1], href: match[2], file:route});
        }
        return data
      },
      validateLinks: (links) => {
        const validation = links.map((link) =>
          fetch(link.href).then((response) => {
            if(response.statusText !== 'OK'){
              return { text: link.text, href: link.href, file: route, status: response.status, ok: 'fail' };
            }else{
              return { text: link.text, href: link.href, file: route, status: response.status, ok: response.statusText };
            }
          }).catch((error)=>{
          })
        );
        return Promise.all(validation);
      },
      bronkenStats: (links) => {
        const brokenLinks = links.filter((link) => response.statusText === 'fail');
        return brokenLinks.length;
      },
    }

    readAll.readFile('./ejercicios/archivo.md')
      .then((result) => {
        const links = readAll.getLinks(result);
      })
      .catch((error) => console.error(error));


      var links = [
        { text: 'Link 1', href: 'https://es.wikipedia.org/wiki/Markdown', file: 'file1' }
      ];
