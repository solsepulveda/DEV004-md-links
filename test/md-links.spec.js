import { isAbsolute, isdir, ismdFile, pathExist, toabsolute} from "../api.js";
import { mdLinks } from "../index.js";

//Debería retornar una promesa
/* describe("mdLinks", () => {
  it("Debería devolver una promesa", () => {
    const a = mdLinks("./ejercicios");
    expect(a instanceof Promise).toBe(true);
  });
}); */

//Verificar la función de si existe la ruta - boolean
describe("pathExist", () => {
  it("deberia ser una funcion", () => {
    expect(typeof pathExist).toBe("function");
  });
  it("Debería retornar true si existe la ruta", () => {
    expect(pathExist("./ejercicios")).toBe(true);
  });
  it("Debería retornar false si no existe", () => {
    expect(pathExist("./ejerciciosss")).toBe(false);
  });
});

//Verificar que transforma a absoluto -array
describe("toabsolute ", () => {

  it("deberia ser una funcion", () => {
    expect(typeof toabsolute ).toBe("function");
  });
  it("deberia resolver la ruta a absoluta", () => {
    expect(toabsolute("./ejercicios/archivo.md")).toBe(
      'D:\\Desktop\\mdLinks\\DEV004-md-links\\ejercicios\\archivo.md'
    );
  });
});

//Verificar la función de si es .md -boolean
describe("ismdfile", () => {
  it("deberia ser una funcion", () => {
    expect(typeof ismdFile).toBe("function");
  });

  it("Debería retornar true si es .md", () => {
    expect(ismdFile("./ejercicios/archivo.md")).toBe(true);
  });
  it("Debería retornar false si no existe", () => {
    expect(ismdFile("./ejercicios/archivo.txt")).toBe(false);
  });
});

//Verificar la función de si es directorio -boolean
describe('isdir',()=>{

  it('Debería ser una función', ()=>{
    expect(typeof isdir).toBe("function");
  });

  it('si es directorio retorna true', ()=>{
    expect(isdir('./ejercicios')).toBe(true);
  });

  it('si es un archivo retorna false', () => {
    expect(isdir('./ejercicios/archivo.md')).toBe(false);
  });
});