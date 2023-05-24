import { mdLinks } from "./index.js";
import { argv } from "node:process";
import chalk from "chalk";

const route = process.argv[2];

const valstat =
  process.argv[3] === "--validate" && process.argv[4] === "--stats";
const statval =
  process.argv[4] === "--validate" && process.argv[3] === "--stats";
const validate = process.argv[3] === "--validate";
const stats = process.argv[3] === "--stats";

//--sin ruta
if (!route) {
  console.log("Type md-links --help to see instructions");
  //--help (con instrucciones)
} else if (argv.includes("--help")) {
  console.log(`Type --validate to validate links
Type --stats to get links status
Type --stats and --validate to get status from validated links
`);
//--validate --stats
} else if ((route && valstat) || statval) {
  mdLinks(route, false)
    .then((links) => {
        const totalLinks = links.length;
        const uniqueLinks = [...new Set(links.map((link) => link.href))].length;
        console.log("Total:", totalLinks);
        console.log("Unique:", uniqueLinks);
        console.log("broken:",);
    })
    .catch((err) => console.log(err));
    //--stats
} else if (route && stats) {
  mdLinks(route, false)
    .then((links) => {
      const totalLinks = links.length;
      const uniqueLinks = [...new Set(links.map((link) => link.href))].length;
      console.log("Total:", totalLinks);
      console.log("Unique:", uniqueLinks);
    })
    .catch((error) => console.error(error));
     //--validate
} else if (route && validate) {
  mdLinks(route, true)
    .then((res) => console.table(res))
    .catch((err) => console.log(err));
    //--sin option
} else {
  mdLinks(route, false)
    .then((res) => console.table(res))
    .catch((err) => console.log(err));
}

