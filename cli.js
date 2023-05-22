import { mdLinks } from "./index.js"
import {argv} from 'node:process'
import chalk from 'chalk';

/* mdLinks('no existe').then(()=>{});
.catch((error)=>{
    console.log(error);
}) */

/* describe('mdLinks',()=>{
    const res = mdLinks
}) */

const route = process.argv[2];

const valstat = process.argv[3] === '--validate' &&  process.argv[4] === '--stats';
const statval = process.argv[4] === '--validate' &&  process.argv[3] === '--stats';
const validate = process.argv[3] === '--validate';
const stats = process.argv[3] === '--stats';

//--help (con instrucciones)
if(!route){
    console.log('Type md-links --help to see instructions')
}else if(argv.includes('--help')){
    console.log(`Type --validate to validarrr,
Type --stats so yoy can ***
Type --validate --stats or --validate --stats so you can ***
`)
} else if(route && valstat || statval){
    mdLinks(route)
    .then((res) => {
        //calcular las estadísticas
    })
    .catch((err) => console.log(err));
    console.log('hola aqui estoy')
}else if(route && stats ){ //con false
    console.log('estamos en stats')
}else if(route && validate){ //true
    console.log('estamos en validate')
}else{
   mdLinks(route)
  .then((res) => console.table(res))
  .catch((err) => console.log(err));
}

//--validate
/* if(process.argv[3] === '--validate' || process.argv[4] === '--validate'){
    console.log('true sip');
} */

//--stats

//--validate --stats || --stats --validate


//aprender a hacerlo con true y false