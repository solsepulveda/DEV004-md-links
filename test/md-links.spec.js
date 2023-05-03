import { isAbsolute, ismdFile, pathExist } from "../api.js";
import { mdLinks } from "../index.js";

//Debería retornar una promesa
describe("mdLinks", () => {
  it("Debería devolver una promesa", () => {
    const a = mdLinks("./ejercicios");
    expect(a instanceof Promise).toBe(true);
  });
});

//Verificar la función de si existe la ruta
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

//Verificar que transforma a absoluto
describe("isabsolute", () => {
  it("deberia ser una funcion", () => {
    expect(typeof ismdFile).toBe("function");
  });

  it("deberia ser una funcion", () => {
    expect(typeof isAbsolute).toBe("function");
  });
  it("deberia resolver la ruta a absoluta", () => {
    expect(isAbsolute("./ejercicios/archivo.md")).toBe(
      "D:DesktopmdLinksDEV004-md-linksejerciciosarchivo.md"
    );
  });
});

//Verificar la función de si es .md
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
