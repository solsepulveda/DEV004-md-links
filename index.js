import { pathExist, ismdFile, isdir, readAll, route} from "./api.js";

export const mdLinks = (
  path,
  options = { validate: false }
) => {
  return new Promise((resolve, reject) => {
    !pathExist(route) ? reject("Error, path doesnt exist") : route;
    if (ismdFile(route)) {
      readAll
        .readFile(route)
        .then((result) => {
          const get = readAll.getLinks(result);
          resolve(get);
        })
        .catch((error) => console.error(error));
    } else {
      reject("Error, is not an .md file");
    }
  });
};
mdLinks(process.argv[2])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
