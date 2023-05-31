import {mdLinks} from "@solsepulveda/md-links";

mdLinks('./ejercicios/archivo.md')
  .then(links => {console.log(links)
  })
  .catch(console.error);
