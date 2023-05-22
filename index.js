import { pathExist, ismdFile, isdir, readAll, route, toabsolute} from "./api.js";
import axios, {isCancel, AxiosError} from 'axios';

export const mdLinks = (
  path,
  options
) => {
  return new Promise((resolve, reject) => {
    !pathExist(route) ? reject("Error, path doesnt exist") : route;
    if (ismdFile(route)) {
      readAll
        .readFile(route)
        .then((result) => {
          const get = readAll.getLinks(result); // array de objetos {href, text, file}
          // enviar este array a funcion de validar
          readAll.validateLinks(get).then((href)=>{resolve(href);})
          //resolve(get);
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

