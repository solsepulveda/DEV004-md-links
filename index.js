import {
  pathExist,
  ismdFile,
  isdir,
  readAll,
  toabsolute,
} from "./api.js";

const route = process.argv[2];

export const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    !pathExist(route) ? reject("Error, path doesnt exist") : route;
    if (ismdFile(route)) {
      readAll
        .readFile(route)
        .then((result) => {
          const get = readAll.getLinks(result); //hasta aquí con false
          if (!options) {
            resolve(get); // Solo extraer los links -false
          } else {  //validar  -true
            readAll.validateLinks(get)
            .then((href) => {
              resolve(href);
            });
          }
        })
        .catch((error) => console.error(error));
    } else {
      reject("Error, is not an .md file");
    }
  });
};
/* mdLinks(process.argv[2])
  .then((res) => console.table(res))
  .catch((err) => console.log(err)); */
