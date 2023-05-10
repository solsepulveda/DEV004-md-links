import fs from 'fs';
import path, { resolve } from 'path';

/*¿existe la ruta?*/
export const existePath = (path) => fs.existsSync(path);
/* console.log(existePath('./ejercicios')); */

/* ¿es absoluto? */
export const absolutepath = (userpath) => path.isAbsolute(userpath);
/* console.log(absolutepath('D:\\Desktop\\mdLinks\\DEV004-md-links\\ejercicios\\archivo.md')); */

/* convertir a absoluto si no lo es*/
export const toAbsolute = (userabs) => path.resolve(userabs);
/* console.log(toAbsolute('C:\\Users\\Laboratoria\\Desktop\\LABORATORIA\\DEV004-data-lovers')); */

/* leer directorio */
export const leerCarpeta = (carpeta) => fs.readdirSync(carpeta)
/* console.log(leerCarpeta('./ejercicios')); */

/* leer archivos */
export const leerArchivo = (leer) =>  fs.readFile(leer, (error,data)=>{
    if(error){
        console.log(error)
    } console.log(data.toString());
    });
/* console.log(leerArchivo('./ejercicios/archivo.md')); */

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




/* leer archivo y extraer los links*/
/* const readFile =
        fs.readFile('./ejercicios/archivo.md', 'utf-8', (error, data) => {
            if (error) {
                reject(error);
            } else {
                console.log(data);
            }
        });

export const getLinks = (readFile) =>{
    const regex = /\[([^\]]+)]\((https?:\/\/[^\s)]+)\)/gi;
    const content = result.toString()
    const matches = content.matchAll(regex)
    const data = [];
    for (const match of matches) {
        data.push(match[1], match[2])
    }
    const zero = data.length === 0 ? 'no se encontraron links' : data;
    console.log(getLinks('./ejercicios/archivo.md'))
} */

export const objeto = {
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
      data.push(match[1], match[2]);
    }
    const zero = data.length === 0 ? 'no se encontraron links' : data;
    return zero;
  }
}

objeto.readFile('./ejercicios/archivo.md')
  .then((result) => {
    const links = objeto.getLinks(result);
    /* console.log(links); */
  })
  .catch((error) => console.error(error));


/*   sin objeto */


/* console.log(refile('./ejercicios')); */
/* leer archivo y extraer los links*/
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
    .then((result) => {
      const regex = /\[([^\]]+)]\((https?:\/\/[^\s)]+)\)/gi;
      const content = result.toString()
      const matches = content.matchAll(regex)
      const data = [];
      for (const match of matches) {
          data.push(match[1], match[2])
      }
      const zero = data.length === 0 ? 'no se encontraron links' : data;
      console.log(zero)
    })
    .catch((error) => console.error(error)); //poner no hay links */

/* 
     readFile('./ejercicios/archivo.md')
    .then((result) => console.log('leer archivo:',result.toString()))
    .catch((error) => console.error(error)); */
