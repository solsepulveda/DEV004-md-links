import { existePath, absolutepath, toAbsolute, fileOrDir, readDir} from "./api.js"

const arg = process.argv[2]
export const mdLinks = (path,options={validate:false}) => {
return new Promise((resolve, reject) => {
    if(existePath(path)){
        resolve('OK ruta sí existe')
    }else{
        reject('Error, path doesnt exist')
    }
}).then((result =>absolutepath(path)//es absoluto?, si lo es seguir, si no convertirlo a asoluto
)).then((result =>toAbsolute(path)
)).then((result =>fileOrDir(path) //es un directorio?, si lo es, leerlo, sino, leer el archivo
)).then((result =>readDir(path)
))
}
mdLinks(arg).then((res)=>console.log(res)).catch((err)=>console.log(err))