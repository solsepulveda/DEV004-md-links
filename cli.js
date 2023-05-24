import { mdLinks } from "./index.js";
import { argv } from "node:process";
import chalk from "chalk";


const path = process.argv[2];
const valstat = process.argv[3] === "--validate" && process.argv[4] === "--stats";
const statval = process.argv[4] === "--validate" && process.argv[3] === "--stats";
const validate = process.argv[3] === "--validate";
const stats = process.argv[3] === "--stats";

// Cantidad de links
const totalLinks = (links) => links.length;
// Cantidad de links únicos
const uniqueLinks = (links) => [...new Set(links.map((link) => link.href))].length;
// Cantidad de links rotos
const bronkenLinks = (links) =>  links.filter((link) => link.ok === 'fail').length;


//--sin ruta ni option
if (!path) {
  console.log("Type md-links --help to see instructions");
  //--help (con instrucciones)
} else if (argv.includes("--help")) {
  console.log(`Type --validate to validate links
Type --stats to get links status
Type --stats and --validate to get status from validated links
`);
//--validate --stats
} else if ((path && valstat) || statval) {
  mdLinks(path, true)
    .then((links) => {
        console.log("Total:", totalLinks(links));
        console.log("Unique:", uniqueLinks(links));
        console.log("Broken:",bronkenLinks(links));
    })
    .catch((err) => console.log(err));
    //--stats
} else if (path && stats) {
  mdLinks(path, false)
    .then((links) => {
        console.log("Total:", totalLinks(links));
        console.log("Unique:", uniqueLinks(links));
    })
    .catch((error) => console.error(error));
     //--validate
} else if (path && validate) {
  mdLinks(path, true)
    .then((res) => console.table(res))
    .catch((err) => console.log(err));
    //--sin option
} else {
  mdLinks(path, false)
    .then((res) => console.table(res))
    .catch((err) => console.log(err));
}

