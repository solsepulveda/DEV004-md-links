import {
  isAbsolute,
  isdir,
  ismdFile,
  pathExist,
  readAll,
  toabsolute,
} from "../api.js";
import { mdLinks } from "../index.js";

const route = "./ejercicios/archivo.md";
const readContent =
  "[Markdown](https://es.wikipedia.org/wiki/Markdown)\n[Node.js](https://nodejs.org/)\n[markdown-it](https://github.com/markdown-it/markdown-it)\n[marked](https://github.com/markedjs/marked)";

//Debería retornar una promesa
/* describe("mdLinks", () => {
  it("Debería devolver una promesa", () => {
    const a = mdLinks("./ejercicios");
    expect(a instanceof Promise).toBe(true);
  });
}); */

afterEach(() => {
  jest.clearAllMocks();
})

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
    expect(typeof toabsolute).toBe("function");
  });
  it("deberia resolver la ruta a absoluta", () => {
    expect(toabsolute("./ejercicios/archivo.md")).toBe(
      "D:\\Desktop\\mdLinks\\DEV004-md-links\\ejercicios\\archivo.md"
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
describe("isdir", () => {
  it("Debería ser una función", () => {
    expect(typeof isdir).toBe("function");
  });

  it("si es directorio retorna true", () => {
    expect(isdir("./ejercicios")).toBe(true);
  });

  it("si es un archivo retorna false", () => {
    expect(isdir("./ejercicios/archivo.md")).toBe(false);
  });
});

//lance un array con los links
describe("getLinks", () => {
  it("Debería retornar un array con los links encontrados", () => {
    const links = readAll.getLinks(readContent, route);
    expect(readAll.getLinks(readContent, route)).toEqual([
      {
        text: "Markdown",
        href: "https://es.wikipedia.org/wiki/Markdown",
        file: "D:\\Desktop\\mdLinks\\DEV004-md-links\\ejercicios\\archivo.md",
      },
      {
        text: "Node.js",
        href: "https://nodejs.org/",
        file: "D:\\Desktop\\mdLinks\\DEV004-md-links\\ejercicios\\archivo.md",
      },
      {
        text: "markdown-it",
        href: "https://github.com/markdown-it/markdown-it",
        file: "D:\\Desktop\\mdLinks\\DEV004-md-links\\ejercicios\\archivo.md",
      },
      {
        text: "marked",
        href: "https://github.com/markedjs/marked",
        file: "D:\\Desktop\\mdLinks\\DEV004-md-links\\ejercicios\\archivo.md",
      },
    ]);
  });
});

//lance un array con los z
describe('getting status', () => {
  it('Debería retornar un array con los links y su status', () => {
    const links = readAll.getLinks(readContent, "./ejercicios/archivo.md"); // Obtener el array de enlaces
    console.log({links})
    return readAll.validateLinks(links) // Pasar el array de enlaces a validateLinks
      .then((validatedLinks) => {
        console.log({validatedLinks});
        expect(validatedLinks).toEqual([
          {
            text: 'Markdown',
            href: 'https://es.wikipedia.org/wiki/Markdown',
            file: 'D:\\Desktop\\mdLinks\\DEV004-md-links\\ejercicios\\archivo.md',
            status: 404,
            ok: 'fail',
          },
          {
            text: 'Node.js',
            href: 'https://nodejs.org/',
            file: 'D:\\Desktop\\mdLinks\\DEV004-md-links\\ejercicios\\archivo.md',
            status: 200,
            ok: 'OK',
          },
        ]);
      });
  });
});

describe("mdLinks", () => {
  it("should return this path does not exist ", () => {
    return expect(mdLinks("C:/Users/Laboratoria/Desktop/LABO")).rejects.toMatch(
      "Error, path doesnt exist"
    );
  });
});

/* describe('Getting status', () => {
  it('Debería retornar un array con los links y su status', (done) => readAll.validateLinks(route).then((res) => {
    expect(res).toEqual([
      {
        text: 'Markdown',
        href: 'https://es.wikipedia.org/wiki/Markdown',
        file: route,
        status: 200,
        statusText: 'OK',
      },
      {
        text: 'Node.js',
        href: 'https://nodejs.org/',
        file: route,
        status: 200,
        statusText: 'OK',
      },
    ]);
    done();
  }));
}); */
