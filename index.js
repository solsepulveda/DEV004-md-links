import { pathExist, isAbsolute, isdir, readDir, ismdFile } from "./api.js";

export const mdLinks = (
  path = './ejercicios',
  options = { validate: false }
) => {
  return new Promise((resolve, reject) => {
    if (!pathExist(path)) {
      //si no existe se acaba.
      reject("Error, path doesnt exist");
    } else {
      // si  existe se hará absoluto
      isAbsolute(path);
      if (isdir(path)) {
        // si es un directorio se lee el directorio
        const files = readDir(path).filter(ismdFile);
        if (files.length > 0) {
          // si hay archivos se muestran los .md
          resolve(files);
        } else {
          // si está vacío se muestran error
          reject("Error, no markdown files found");
        }
      } /* else{
        if(ismdFile(path)){
        resolve(ismdFile(path));
        } else{
          reject(ismdFile(path));
        }
      } */
    }
  });
};
mdLinks(process.argv[2])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));




