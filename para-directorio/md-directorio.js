
/* leer directorio - se convertirá en absoluto porque o si no me lo devuelve relativo*/
/* export const readDir = (dir) => {
    const files = fs.readdirSync(dir);
    return files.map((file) => path.resolve(file));
  }; */
/*   console.log('leer directorio:',readDir('./ejercicios')); */

/* se lee el directorio y se extrae solo los archivos .md*/
/* export const getMd = (path) => isdir(path) && readDir(path).length > 0  ? readDir(path).filter(ismdFile) : 'isempty' ; */
/* console.log(getMd('./ejercicios2')); */

/* export const mdLinks = (
  path = './ejercicios',
  options = { validate: false }
) => {
  return new Promise((resolve, reject) => {
    if (!pathExist(path)) {
      reject("Error, path doesnt exist");
    } else {
      isAbsolute(path)
      if (isdir(path)) {
        const gtmd = getMd(path);
        console.log(gtmd)
        'linksindir'
      } else{
        if (ismdFile(path)) {
          objeto.readFile(path)
          .then((result) => {
            objeto.getLinks(result);
            console.log(objeto.getLinks(result))
          })
          .catch((error) => console.error(error));
        } else {
          reject("Error, is not an .md file");
        }
      }
    }
  });
};
mdLinks(process.argv[2])
  .then((res) => console.log(res))
  .catch((err) => console.log(err)); */
